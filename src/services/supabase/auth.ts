/*
This module handles all authentication-related operations including login, logout,
session management, and user role verification. It provides a clean interface
for the auth context and components to interact with Supabase auth.
*/

import { supabase } from './client'
import type { User, UserRole } from '@/types/index'

export const authService = {
  // Sign in with email and password - fire and forget approach
  async signIn(email: string, password: string) {
    // Fire the sign in request but don't await it
    supabase.auth.signInWithPassword({ email, password })

    // Immediately start checking for session
    let attempts = 0
    const maxAttempts = 20

    while (attempts < maxAttempts) {
      await new Promise(resolve => setTimeout(resolve, 500))

      const { data } = await supabase.auth.getSession()

      if (data.session?.user) {
        // Success - we have a session
        return { session: data.session, user: data.session.user }
      }

      attempts++
    }

    // If we get here, sign in failed
    throw new Error('Sign in failed - please check your credentials')
  },

  // Sign out current user
  async signOut() {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  },

  // Get current session - simple and direct
  async getSession() {
    const { data, error } = await supabase.auth.getSession()
    if (error) throw error
    return data.session
  },

  // Get current user with role from database
  async getCurrentUser(): Promise<User | null> {
    const { data } = await supabase.auth.getSession()
    const session = data.session

    if (!session?.user) return null

    // Query users table for role
    const { data: userData, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', session.user.id)
      .single()

    if (error || !userData) return null

    return {
      id: userData.id,
      email: userData.email,
      role: userData.role as UserRole,
      firstName: userData.first_name,
      lastName: userData.last_name,
      phone: userData.phone ?? undefined,
      createdAt: userData.created_at,
      updatedAt: userData.updated_at,
    }
  },

  // Check if user has specific role
  async hasRole(requiredRole: UserRole): Promise<boolean> {
    const user = await this.getCurrentUser()
    if (!user) return false
    if (user.role === 'admin') return true
    if (requiredRole === 'employee' && user.role === 'employee') return true
    return user.role === requiredRole
  },

  // Listen to auth state changes
  onAuthStateChange(callback: (user: User | null) => void) {
    return supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        const user = await this.getCurrentUser()
        callback(user)
      } else {
        callback(null)
      }
    })
  },
}