/*
Modal form for creating and editing projects.
Includes validation and submission to Supabase.
*/

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Modal } from '@components/common/Modal'
import type { Project } from '@services/supabase/projects'

const projectSchema = z.object({
  project_name: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  status: z.enum(['planning', 'active', 'completed']),
  project_start: z.string().min(1, 'Start date is required'),
  project_end: z.string().optional(),
  project_budget: z.string().min(1, 'Budget is required'),
  image_url: z.string().url('Must be a valid URL').optional().or(z.literal('')),
})

type ProjectFormData = z.infer<typeof projectSchema>

interface ProjectFormModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: ProjectFormData) => Promise<void>
  project?: Project | null
  isSubmitting?: boolean
}

export function ProjectFormModal({
  isOpen,
  onClose,
  onSubmit,
  project,
  isSubmitting = false,
}: ProjectFormModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: project
      ? {
          project_name: project.project_name,
          description: project.description,
          status: project.status,
          project_start: project.project_start,
          project_end: project.project_end || '',
          project_budget: project.project_budget.toString(),
          image_url: project.image_url || '',
        }
      : {
          status: 'planning',
        },
  })

  useEffect(() => {
    if (project) {
      reset({
        project_name: project.project_name,
        description: project.description,
        status: project.status,
        project_start: project.project_start,
        project_end: project.project_end || '',
        project_budget: project.project_budget.toString(),
        image_url: project.image_url || '',
      })
    } else {
      reset({ status: 'planning' })
    }
  }, [project, reset])

  const handleFormSubmit = async (data: ProjectFormData) => {
    await onSubmit(data)
    reset()
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project ? 'Edit Project' : 'Create New Project'}
    >
      <form onSubmit={handleSubmit(handleFormSubmit)} className="p-6 space-y-6">
        {/* Project Name */}
        <div>
          <label htmlFor="project_name" className="block text-sm font-medium text-gray-700 mb-1">
            Project Name *
          </label>
          <input
            id="project_name"
            type="text"
            {...register('project_name')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
            placeholder="e.g., Weekly Food Drive"
          />
          {errors.project_name && (
            <p className="mt-1 text-sm text-red-600">{errors.project_name.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description *
          </label>
          <textarea
            id="description"
            rows={4}
            {...register('description')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent resize-none"
            placeholder="Describe the project goals and activities..."
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
          )}
        </div>

        {/* Status & Dates */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
              Status *
            </label>
            <select
              id="status"
              {...register('status')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
            >
              <option value="planning">Planning</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div>
            <label htmlFor="project_start" className="block text-sm font-medium text-gray-700 mb-1">
              Start Date *
            </label>
            <input
              id="project_start"
              type="date"
              {...register('project_start')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="project_end" className="block text-sm font-medium text-gray-700 mb-1">
              End Date
            </label>
            <input
              id="project_end"
              type="date"
              {...register('project_end')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </div>
        </div>

        {/* Budget & Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="project_budget" className="block text-sm font-medium text-gray-700 mb-1">
              Budget (ZAR) *
            </label>
            <input
              id="project_budget"
              type="number"
              step="0.01"
              {...register('project_budget')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="0.00"
            />
            {errors.project_budget && (
              <p className="mt-1 text-sm text-red-600">{errors.project_budget.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="image_url" className="block text-sm font-medium text-gray-700 mb-1">
              Image URL
            </label>
            <input
              id="image_url"
              type="url"
              {...register('image_url')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="https://example.com/image.jpg"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-4 border-t border-gray-200">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Saving...' : project ? 'Update Project' : 'Create Project'}
          </button>
        </div>
      </form>
    </Modal>
  )
}