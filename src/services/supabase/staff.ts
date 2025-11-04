/*
Service for managing staff members in Supabase.
Handles CRUD operations for employee accounts.
*/

import { supabase } from './client'

export interface StaffMember {
  id: string
  email: string
  role: 'admin' | 'employee'
  first_name: string | null
  last_name: string | null
  phone: string | null
  created_at: string
}

export interface CreateStaffData {
  email: string
  password: string
  first_name: string
  last_name: string
  phone?: string
  role: 'admin' | 'employee'
}

export interface UpdateStaffData {
  first_name?: string
  last_name?: string
  phone?: string
  role?: 'admin' | 'employee'
}

export const staffService = {
  // Get all staff members
  async getAllStaff() {
    const { data, error } = await supabase
      .from('users')
      .select('id, email, role, first_name, last_name, phone, created_at')
      .in('role', ['admin', 'employee'])
      .order('created_at', { ascending: false })

    if (error) throw error
    return data as StaffMember[]
  },

  // Get single staff member by ID
  async getStaffById(id: string) {
    const { data, error } = await supabase
      .from('users')
      .select('id, email, role, first_name, last_name, phone, created_at')
      .eq('id', id)
      .single()

    if (error) throw error
    return data as StaffMember
  },

  // Create new staff member (this creates a user account)
  async createStaff(staffData: CreateStaffData) {
    // Sign up the user with Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: staffData.email,
      password: staffData.password,
      options: {
        data: {
          first_name: staffData.first_name,
          last_name: staffData.last_name,
          phone: staffData.phone || null,
          role: staffData.role,
        },
      },
    })

    if (authError) throw authError
    if (!authData.user) throw new Error('Failed to create user')

    // Update the users table with additional info
    const { data, error } = await supabase
      .from('users')
      .update({
        first_name: staffData.first_name,
        last_name: staffData.last_name,
        phone: staffData.phone || null,
        role: staffData.role,
      })
      .eq('id', authData.user.id)
      .select()
      .single()

    if (error) throw error
    return data as StaffMember
  },

  // Update existing staff member
  async updateStaff(id: string, staffData: UpdateStaffData) {
    const { data, error } = await supabase
      .from('users')
      .update(staffData)
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data as StaffMember
  },

  // Delete staff member
  async deleteStaff(id: string) {
    // Note: This only marks them as inactive or removes from users table
    // The actual auth user might still exist in Supabase Auth
    const { error } = await supabase.from('users').delete().eq('id', id)

    if (error) throw error
    return { success: true }
  },

  // Get staff by role
  async getStaffByRole(role: 'admin' | 'employee') {
    const { data, error } = await supabase
      .from('users')
      .select('id, email, role, first_name, last_name, phone, created_at')
      .eq('role', role)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data as StaffMember[]
  },
}