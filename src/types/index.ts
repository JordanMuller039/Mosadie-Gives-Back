/*
This file contains all the core TypeScript types and interfaces used throughout the application.
It defines the shape of our data models, user roles, and common utility types.
These types are mapped from our database snake_case to frontend camelCase.
*/

export type UserRole = 'admin' | 'employee' | 'user'

export interface User {
  id: string
  email: string
  role: UserRole
  firstName: string
  lastName: string
  phone?: string
  createdAt: string
  updatedAt: string
}

export interface Project {
  id: string
  projectName: string
  description: string
  imageUrl?: string
  projectStart: string
  projectEnd?: string
  projectBudget: number
  status: 'planning' | 'active' | 'completed'
  createdBy?: string
  createdAt: string
  updatedAt: string
}

export interface Donator {
  id: string
  name: string
  email: string
  phone?: string
  totalDonated: number
  isAnonymous: boolean
  createdAt: string
  updatedAt: string
}

export interface Donation {
  id: string
  amount: number
  donatorId?: string
  projectId?: string
  message?: string
  donationDate: string
  createdAt: string
}

export interface Volunteer {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  interests: string[]
  availability: string
  message?: string
  status: 'pending' | 'approved' | 'rejected'
  approvedBy?: string
  createdAt: string
  updatedAt: string
}

export interface Testimony {
  id: string
  message: string
  authorName: string
  authorRole?: string
  projectId?: string
  volunteerId?: string
  isFeatured: boolean
  createdAt: string
  updatedAt: string
}

export interface InventoryItem {
  id: string
  itemName: string
  category: string
  quantity: number
  quantityMeasurement?: string
  unitCost: number
  donatedBy?: string
  createdAt: string
  updatedAt: string
}

export interface Distribution {
  id: string
  location: string
  distributionDate: string
  distributionType: string
  notes?: string
  projectId?: string
  managedBy?: string
  createdAt: string
  updatedAt: string
}

export interface DistributionItem {
  id: string
  distributionId?: string
  inventoryId?: string
  quantityDistributed: number
  createdAt: string
}

export interface ContactMessage {
  id: string
  name: string
  email: string
  subject: string
  message: string
  status: 'unread' | 'read' | 'responded'
  respondedBy?: string
  createdAt: string
  updatedAt: string
}

export interface GalleryImage {
  id: string
  title: string
  description?: string
  imageUrl: string
  projectId?: string
  uploadedBy?: string
  isFeatured: boolean
  createdAt: string
}

// API response wrapper types
export interface ApiResponse<T> {
  data?: T
  error?: string
  success: boolean
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
}

// Form types
export interface LoginFormData {
  email: string
  password: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface VolunteerFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  interests: string[]
  availability: string
  message?: string
}

export interface DonationFormData {
  amount: number
  donorName: string
  donorEmail: string
  message?: string
  isAnonymous: boolean
  projectId?: string
}
