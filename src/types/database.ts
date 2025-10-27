/*
This file contains TypeScript types that mirror our Supabase database schema.
These types are used for type-safe database queries and mutations.
Auto-generated types based on the database schema.
*/

export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          first_name: string
          last_name: string
          role: 'admin' | 'employee' | 'user'
          phone: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          first_name: string
          last_name: string
          role?: 'admin' | 'employee' | 'user'
          phone?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          first_name?: string
          last_name?: string
          role?: 'admin' | 'employee' | 'user'
          phone?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      projects: {
        Row: {
          id: string
          project_name: string
          description: string
          image_url: string | null
          project_start: string
          project_end: string | null
          project_budget: number
          status: 'planning' | 'active' | 'completed'
          created_by: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          project_name: string
          description: string
          image_url?: string | null
          project_start: string
          project_end?: string | null
          project_budget: number
          status?: 'planning' | 'active' | 'completed'
          created_by?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          project_name?: string
          description?: string
          image_url?: string | null
          project_start?: string
          project_end?: string | null
          project_budget?: number
          status?: 'planning' | 'active' | 'completed'
          created_by?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      donators: {
        Row: {
          id: string
          name: string
          email: string
          phone: string | null
          total_donated: number
          is_anonymous: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone?: string | null
          total_donated?: number
          is_anonymous?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string | null
          total_donated?: number
          is_anonymous?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      donations: {
        Row: {
          id: string
          amount: number
          donator_id: string | null
          project_id: string | null
          message: string | null
          donation_date: string
          created_at: string
        }
        Insert: {
          id?: string
          amount: number
          donator_id?: string | null
          project_id?: string | null
          message?: string | null
          donation_date?: string
          created_at?: string
        }
        Update: {
          id?: string
          amount?: number
          donator_id?: string | null
          project_id?: string | null
          message?: string | null
          donation_date?: string
          created_at?: string
        }
      }
      volunteers: {
        Row: {
          id: string
          first_name: string
          last_name: string
          email: string
          phone: string
          interests: string[]
          availability: string
          message: string | null
          status: 'pending' | 'approved' | 'rejected'
          approved_by: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          first_name: string
          last_name: string
          email: string
          phone: string
          interests?: string[]
          availability: string
          message?: string | null
          status?: 'pending' | 'approved' | 'rejected'
          approved_by?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          first_name?: string
          last_name?: string
          email?: string
          phone?: string
          interests?: string[]
          availability?: string
          message?: string | null
          status?: 'pending' | 'approved' | 'rejected'
          approved_by?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      testimonies: {
        Row: {
          id: string
          message: string
          author_name: string
          author_role: string | null
          project_id: string | null
          volunteer_id: string | null
          is_featured: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          message: string
          author_name: string
          author_role?: string | null
          project_id?: string | null
          volunteer_id?: string | null
          is_featured?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          message?: string
          author_name?: string
          author_role?: string | null
          project_id?: string | null
          volunteer_id?: string | null
          is_featured?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      inventory: {
        Row: {
          id: string
          item_name: string
          category: string
          quantity: number
          quantity_measurement: string | null
          unit_cost: number
          donated_by: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          item_name: string
          category: string
          quantity: number
          quantity_measurement?: string | null
          unit_cost: number
          donated_by?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          item_name?: string
          category?: string
          quantity?: number
          quantity_measurement?: string | null
          unit_cost?: number
          donated_by?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      distribution: {
        Row: {
          id: string
          location: string
          distribution_date: string
          distribution_type: string
          notes: string | null
          project_id: string | null
          managed_by: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          location: string
          distribution_date: string
          distribution_type: string
          notes?: string | null
          project_id?: string | null
          managed_by?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          location?: string
          distribution_date?: string
          distribution_type?: string
          notes?: string | null
          project_id?: string | null
          managed_by?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      distribution_items: {
        Row: {
          id: string
          distribution_id: string | null
          inventory_id: string | null
          quantity_distributed: number
          created_at: string
        }
        Insert: {
          id?: string
          distribution_id?: string | null
          inventory_id?: string | null
          quantity_distributed: number
          created_at?: string
        }
        Update: {
          id?: string
          distribution_id?: string | null
          inventory_id?: string | null
          quantity_distributed?: number
          created_at?: string
        }
      }
      contact_messages: {
        Row: {
          id: string
          name: string
          email: string
          subject: string
          message: string
          status: 'unread' | 'read' | 'responded'
          responded_by: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          subject: string
          message: string
          status?: 'unread' | 'read' | 'responded'
          responded_by?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          subject?: string
          message?: string
          status?: 'unread' | 'read' | 'responded'
          responded_by?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      gallery_images: {
        Row: {
          id: string
          title: string
          description: string | null
          image_url: string
          project_id: string | null
          uploaded_by: string | null
          is_featured: boolean
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          image_url: string
          project_id?: string | null
          uploaded_by?: string | null
          is_featured?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          image_url?: string
          project_id?: string | null
          uploaded_by?: string | null
          is_featured?: boolean
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
