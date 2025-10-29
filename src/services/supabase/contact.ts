/*
This module handles contact form submissions.
Stores messages in Supabase and could trigger email notifications.
*/

import { supabase } from './client'
import type { ContactFormData } from '@/types/index'

export const contactService = {
  // Submit a contact message
  async submitContactMessage(data: ContactFormData) {
    const { error } = await supabase.from('contact_messages').insert({
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
      status: 'unread',
    })

    if (error) throw error
    return { success: true }
  },
}