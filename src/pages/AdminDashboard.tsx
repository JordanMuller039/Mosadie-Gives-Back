/*
Admin dashboard for managing projects, staff, volunteers, and donations.
Provides a tabbed interface for different management sections.
*/

import { useState, useEffect } from 'react'
import { PageTitle } from '@components/common/PageTitle'
import { AdminNav } from '@components/admin/AdminNav'
import { AdminLayout } from '@components/admin/AdminLayout'
import { ProjectsTable } from '@components/admin/ProjectsTable'
import { ProjectFormModal } from '@components/admin/ProjectFormModal'
import { DeleteConfirmModal } from '@components/admin/DeleteConfirmModal'
import { useAuth } from '@context/AuthContext'
import { Navigate } from 'react-router-dom'
import { projectsService, type Project } from '@services/supabase/projects'
import { Plus } from 'lucide-react'

type AdminTab = 'projects' | 'staff' | 'volunteers' | 'donations'

export function AdminDashboard() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState<AdminTab>('projects')

  // Projects state
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoadingProjects, setIsLoadingProjects] = useState(true)
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [projectToDelete, setProjectToDelete] = useState<Project | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)

  // Load projects
  useEffect(() => {
    if (activeTab === 'projects') {
      loadProjects()
    }
  }, [activeTab])

  // Redirect non-admin users
  if (!user || user.role !== 'admin') {
    return <Navigate to="/" replace />
  }


  const loadProjects = async () => {
    try {
      setIsLoadingProjects(true)
      const data = await projectsService.getAllProjects()
      setProjects(data)
    } catch (error) {
      console.error('Error loading projects:', error)
    } finally {
      setIsLoadingProjects(false)
    }
  }

  const handleCreateProject = () => {
    setSelectedProject(null)
    setIsProjectModalOpen(true)
  }

  const handleEditProject = (project: Project) => {
    setSelectedProject(project)
    setIsProjectModalOpen(true)
  }

  const handleProjectSubmit = async (data: {
    project_name: string
    description: string
    status: 'planning' | 'active' | 'completed'
    project_start: string
    project_end?: string
    project_budget: string
    image_url?: string
  }) => {
    try {
      setIsSubmitting(true)

      const projectData = {
        project_name: data.project_name,
        description: data.description,
        status: data.status,
        project_start: data.project_start,
        project_end: data.project_end || null,
        project_budget: parseFloat(data.project_budget),
        image_url: data.image_url || null,
      }

      if (selectedProject) {
        await projectsService.updateProject(selectedProject.id, projectData)
      } else {
        await projectsService.createProject(projectData)
      }

      await loadProjects()
      setIsProjectModalOpen(false)
      setSelectedProject(null)
    } catch (error) {
      console.error('Error saving project:', error)
      alert('Failed to save project. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDeleteClick = (project: Project) => {
    setProjectToDelete(project)
    setIsDeleteModalOpen(true)
  }

  const handleDeleteConfirm = async () => {
    if (!projectToDelete) return

    try {
      setIsDeleting(true)
      await projectsService.deleteProject(projectToDelete.id)
      await loadProjects()
      setIsDeleteModalOpen(false)
      setProjectToDelete(null)
    } catch (error) {
      console.error('Error deleting project:', error)
      alert('Failed to delete project. Please try again.')
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PageTitle title="Admin Dashboard" />

      {/* Header with Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-custom py-6">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="mt-2 text-gray-600">
            Manage projects, staff, volunteers, and view donations
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="container-custom">
          <AdminNav activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-8">
        {activeTab === 'projects' && (
          <AdminLayout
            title="Projects"
            description="Create and manage charity projects"
            actions={
              <button
                onClick={handleCreateProject}
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-smooth flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Create New Project
              </button>
            }
          >
            <ProjectsTable
              projects={projects}
              onEdit={handleEditProject}
              onDelete={handleDeleteClick}
              isLoading={isLoadingProjects}
            />
          </AdminLayout>
        )}

        {activeTab === 'staff' && (
          <AdminLayout
            title="Staff Members"
            description="Manage staff accounts and permissions"
            actions={
              <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-smooth">
                Add Staff Member
              </button>
            }
          >
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-500">Staff management coming soon...</p>
            </div>
          </AdminLayout>
        )}

        {activeTab === 'volunteers' && (
          <AdminLayout
            title="Volunteer Applications"
            description="Review and manage volunteer applications"
          >
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-500">Volunteer management coming soon...</p>
            </div>
          </AdminLayout>
        )}

        {activeTab === 'donations' && (
          <AdminLayout title="Donations" description="View and track all donations">
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-500">Donations view coming soon...</p>
            </div>
          </AdminLayout>
        )}
      </div>

      {/* Modals */}
      <ProjectFormModal
        isOpen={isProjectModalOpen}
        onClose={() => {
          setIsProjectModalOpen(false)
          setSelectedProject(null)
        }}
        onSubmit={handleProjectSubmit}
        project={selectedProject}
        isSubmitting={isSubmitting}
      />

      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false)
          setProjectToDelete(null)
        }}
        onConfirm={handleDeleteConfirm}
        title="Delete Project"
        message={`Are you sure you want to delete "${projectToDelete?.project_name}"? This action cannot be undone.`}
        isDeleting={isDeleting}
      />
    </div>
  )
}