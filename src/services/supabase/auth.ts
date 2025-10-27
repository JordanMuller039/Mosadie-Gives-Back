/*
This module handles all authentication-related operations including login, logout,
session management, and user role verification. It provides a clean interface
for the auth context and components to interact with Supabase auth.
*/

import { supabase } from './client'
import type { User, UserRole } from '@/types/index'

export const authService = {
  // Sign in with email and password
  async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) throw error
    return data
  },

  // Sign out current user
  async signOut() {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  },

  // Get current session
  async getSession() {
    const { data, error } = await supabase.auth.getSession()
    if (error) throw error
    return data.session
  },

  // Get current user with role from database
  async getCurrentUser(): Promise<User | null> {
    const session = await this.getSession()
    if (!session?.user) return null

    // Fetch user details including role from users table
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', session.user.id)
      .single()

    if (error || !data) return null

    return {
      id: data.id,
      email: data.email,
      role: data.role as UserRole,
      firstName: data.first_name,
      lastName: data.last_name,
      phone: data.phone ?? undefined,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
    }
  },

  // Check if user has specific role
  async hasRole(requiredRole: UserRole): Promise<boolean> {
    const user = await this.getCurrentUser()
    if (!user) return false

    // Admin has access to everything
    if (user.role === 'admin') return true

    // Employee can access employee features
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