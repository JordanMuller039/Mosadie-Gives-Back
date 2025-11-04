/*
Service for managing projects in Supabase.
Handles CRUD operations for charity projects.
*/

import { supabase } from './client'

export interface Project {
  id: string
  project_name: string
  description: string
  status: 'planning' | 'active' | 'completed'
  project_start: string
  project_end: string | null
  project_budget: number
  image_url: string | null
  created_by: string | null
  created_at: string
  updated_at: string
}

export interface UpdateProjectData {
  project_name?: string
  description?: string
  status?: 'planning' | 'active' | 'completed'
  project_start?: string
  project_end?: string | null
  project_budget?: number
  image_url?: string | null
}

export interface CreateProjectData {
  project_name: string
  description: string
  status: 'planning' | 'active' | 'completed'
  project_start: string
  project_end?: string | null
  project_budget: number
  image_url?: string | null
}

export const projectsService = {
  // Get all projects
  async getAllProjects() {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return data as Project[]
  },

  // Get single project by ID
  async getProjectById(id: string) {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', id)
      .single()

    if (error) throw error
    return data as Project
  },

  // Create new project
  async createProject(projectData: CreateProjectData) {
    const { data, error } = await supabase
      .from('projects')
      .insert({
        project_name: projectData.project_name,
        description: projectData.description,
        status: projectData.status,
        project_start: projectData.project_start,
        project_end: projectData.project_end || null,
        project_budget: projectData.project_budget,
        image_url: projectData.image_url || null,
      })
      .select()
      .single()

    if (error) throw error
    return data as Project
  },

  // Update existing project
  async updateProject(id: string, projectData: Partial<CreateProjectData>) {
    const updateData: UpdateProjectData = {}
    
    if (projectData.project_name !== undefined) updateData.project_name = projectData.project_name
    if (projectData.description !== undefined) updateData.description = projectData.description
    if (projectData.status !== undefined) updateData.status = projectData.status
    if (projectData.project_start !== undefined) updateData.project_start = projectData.project_start
    if (projectData.project_end !== undefined) updateData.project_end = projectData.project_end
    if (projectData.project_budget !== undefined) updateData.project_budget = projectData.project_budget
    if (projectData.image_url !== undefined) updateData.image_url = projectData.image_url

    const { data, error } = await supabase
      .from('projects')
      .update(updateData)
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data as Project
  },

  // Delete project
  async deleteProject(id: string) {
    const { error } = await supabase.from('projects').delete().eq('id', id)

    if (error) throw error
    return { success: true }
  },

  // Get projects by status
  async getProjectsByStatus(status: Project['status']) {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('status', status)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data as Project[]
  },
}