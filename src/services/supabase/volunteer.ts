/*
This module handles volunteer application submissions.
Stores applications in Supabase with pending status for admin review.
*/

import { supabase } from './client'
import type { VolunteerFormData } from '@/types/index'

export const volunteerService = {
  // Submit a volunteer application
  async submitVolunteerApplication(data: VolunteerFormData) {
    const { error } = await supabase.from('volunteers').insert({
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      phone: data.phone,
      interests: data.interests,
      availability: data.availability,
      message: data.message || null,
      status: 'pending',
    })

    if (error) throw error
    return { success: true }
  },
}