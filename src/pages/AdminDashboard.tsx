/*
Admin dashboard for managing projects, staff, volunteers, and donations.
Provides a tabbed interface for different management sections.
*/

import { useState } from 'react'
import { PageTitle } from '@components/common/PageTitle'
import { AdminNav } from '@components/admin/AdminNav'
import { AdminLayout } from '@components/admin/AdminLayout'
import { useAuth } from '@context/AuthContext'
import { Navigate } from 'react-router-dom'

type AdminTab = 'projects' | 'staff' | 'volunteers' | 'donations'

export function AdminDashboard() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState<AdminTab>('projects')

  // Redirect non-admin users
  if (!user || user.role !== 'admin') {
    return <Navigate to="/" replace />
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
              <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-smooth">
                Create New Project
              </button>
            }
          >
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-500">Projects management coming soon...</p>
            </div>
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
          <AdminLayout
            title="Donations"
            description="View and track all donations"
          >
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-500">Donations view coming soon...</p>
            </div>
          </AdminLayout>
        )}
      </div>
    </div>
  )
}