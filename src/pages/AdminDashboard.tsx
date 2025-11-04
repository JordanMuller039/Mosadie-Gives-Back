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
import { StaffTable } from '@components/admin/StaffTable'
import { StaffFormModal } from '@components/admin/StaffFormModal'
import { DeleteConfirmModal } from '@components/admin/DeleteConfirmModal'
import { useAuth } from '@context/AuthContext'
import { Navigate } from 'react-router-dom'
import { projectsService, type Project } from '@services/supabase/projects'
import { staffService, type StaffMember } from '@services/supabase/staff'
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

  // Staff state
  const [staff, setStaff] = useState<StaffMember[]>([])
  const [isLoadingStaff, setIsLoadingStaff] = useState(true)
  const [isStaffModalOpen, setIsStaffModalOpen] = useState(false)
  const [selectedStaff, setSelectedStaff] = useState<StaffMember | null>(null)
  const [staffToDelete, setStaffToDelete] = useState<StaffMember | null>(null)

  // Load projects
  useEffect(() => {
    if (activeTab === 'projects') {
      loadProjects()
    }
  }, [activeTab])

  // Load staff
  useEffect(() => {
    if (activeTab === 'staff') {
      loadStaff()
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

  const loadStaff = async () => {
    try {
      setIsLoadingStaff(true)
      const data = await staffService.getAllStaff()
      setStaff(data)
    } catch (error) {
      console.error('Error loading staff:', error)
    } finally {
      setIsLoadingStaff(false)
    }
  }

  // Project handlers
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

  const handleDeleteProjectClick = (project: Project) => {
    setProjectToDelete(project)
    setIsDeleteModalOpen(true)
  }

  const handleDeleteProjectConfirm = async () => {
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

  // Staff handlers
  const handleCreateStaff = () => {
    setSelectedStaff(null)
    setIsStaffModalOpen(true)
  }

  const handleEditStaff = (member: StaffMember) => {
    setSelectedStaff(member)
    setIsStaffModalOpen(true)
  }

  const handleStaffSubmit = async (data: {
    email: string
    password?: string
    first_name: string
    last_name: string
    phone?: string
    role: 'admin' | 'employee'
  }) => {
    try {
      setIsSubmitting(true)

      if (selectedStaff) {
        // Update existing staff
        await staffService.updateStaff(selectedStaff.id, {
        first_name: data.first_name,
        last_name: data.last_name,
        phone: data.phone || undefined,
        role: data.role,
      })

      } else {
        // Create new staff
        if (!data.password) {
          alert('Password is required for new staff members')
          return
        }
        await staffService.createStaff({
          email: data.email,
          password: data.password,
          first_name: data.first_name,
          last_name: data.last_name,
          phone: data.phone,
          role: data.role,
        })
      }

      await loadStaff()
      setIsStaffModalOpen(false)
      setSelectedStaff(null)
    } catch (error) {
      console.error('Error saving staff:', error)
      alert('Failed to save staff member. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDeleteStaffClick = (member: StaffMember) => {
    setStaffToDelete(member)
    setIsDeleteModalOpen(true)
  }

  const handleDeleteStaffConfirm = async () => {
    if (!staffToDelete) return

    try {
      setIsDeleting(true)
      await staffService.deleteStaff(staffToDelete.id)
      await loadStaff()
      setIsDeleteModalOpen(false)
      setStaffToDelete(null)
    } catch (error) {
      console.error('Error deleting staff:', error)
      alert('Failed to delete staff member. Please try again.')
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
              onDelete={handleDeleteProjectClick}
              isLoading={isLoadingProjects}
            />
          </AdminLayout>
        )}

        {activeTab === 'staff' && (
          <AdminLayout
            title="Staff Members"
            description="Manage staff accounts and permissions"
            actions={
              <button
                onClick={handleCreateStaff}
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-smooth flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Staff Member
              </button>
            }
          >
            <StaffTable
              staff={staff}
              onEdit={handleEditStaff}
              onDelete={handleDeleteStaffClick}
              isLoading={isLoadingStaff}
            />
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

      <StaffFormModal
        isOpen={isStaffModalOpen}
        onClose={() => {
          setIsStaffModalOpen(false)
          setSelectedStaff(null)
        }}
        onSubmit={handleStaffSubmit}
        staff={selectedStaff}
        isSubmitting={isSubmitting}
      />

      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false)
          setProjectToDelete(null)
          setStaffToDelete(null)
        }}
        onConfirm={projectToDelete ? handleDeleteProjectConfirm : handleDeleteStaffConfirm}
        title={projectToDelete ? 'Delete Project' : 'Delete Staff Member'}
        message={
          projectToDelete
            ? `Are you sure you want to delete "${projectToDelete?.project_name}"? This action cannot be undone.`
            : `Are you sure you want to delete "${staffToDelete?.first_name} ${staffToDelete?.last_name}"? This action cannot be undone.`
        }
        isDeleting={isDeleting}
      />
    </div>
  )
}