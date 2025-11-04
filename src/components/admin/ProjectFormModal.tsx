/*
Modal form for creating and editing projects.
Includes validation and submission to Supabase.
*/

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
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

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="flex min-h-full items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">
                {project ? 'Edit Project' : 'Create New Project'}
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(handleFormSubmit)} className="p-6 space-y-6">
              {/* Title */}
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
                {errors.project_name && <p className="mt-1 text-sm text-red-600">{errors.project_name.message}</p>}
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

              {/* Status & Dates Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Status */}
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
                  {errors.status && <p className="mt-1 text-sm text-red-600">{errors.status.message}</p>}
                </div>

                {/* Start Date */}
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
                  {errors.project_start && (
                    <p className="mt-1 text-sm text-red-600">{errors.project_start.message}</p>
                  )}
                </div>

                {/* End Date */}
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

              {/* Budget & Image Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Budget */}
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

                {/* Image URL */}
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
                  {errors.image_url && (
                    <p className="mt-1 text-sm text-red-600">{errors.image_url.message}</p>
                  )}
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
                  className="flex-1 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Saving...' : project ? 'Update Project' : 'Create Project'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  )
}