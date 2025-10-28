/*
This module provides the authentication context for the entire application.
It manages user state, handles login/logout, and provides auth-related functions
to all components through React Context API.
*/

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { authService } from '@services/supabase/auth'
import type { User } from '@/types/index'

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  isAdmin: boolean
  isEmployee: boolean
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    authService.getCurrentUser().then(setUser).finally(() => setLoading(false))
  }, [])

  const signIn = async (email: string, password: string) => {
    setLoading(true)
    try {
      await authService.signIn(email, password)
      const currentUser = await authService.getCurrentUser()
      
      if (!currentUser) {
        throw new Error('User profile not found')
      }
      
      setUser(currentUser)
    } finally {
      setLoading(false)
    }
  }

  const signOut = async () => {
    await authService.signOut()
    setUser(null)
  }

  const value: AuthContextType = {
    user,
    loading,
    signIn,
    signOut,
    isAdmin: user?.role === 'admin',
    isEmployee: user?.role === 'employee' || user?.role === 'admin',
    isAuthenticated: !!user,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}