/*
The admin dashboard page showing overview statistics and management tools.
This page is only accessible to users with the admin role.
*/

import { useAuth } from '@context/AuthContext'
import { PageTitle } from '@components/common/PageTitle'

export function AdminDashboard() {
  const { user } = useAuth()

  return (
    <div className="min-h-screen bg-gray-50">
      <PageTitle title="Admin Dashboard" />
      <div className="container-custom py-8">
        <h1 className="text-3xl font-heading font-bold text-gray-900 mb-4">Admin Dashboard</h1>
        <p className="text-gray-600 mb-8">Welcome back, {user?.firstName}!</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700">Total Projects</h3>
            <p className="text-3xl font-bold text-primary-600 mt-2">0</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700">Total Donations</h3>
            <p className="text-3xl font-bold text-secondary-600 mt-2">R 0</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700">Volunteers</h3>
            <p className="text-3xl font-bold text-primary-600 mt-2">0</p>
          </div>
        </div>
      </div>
    </div>
  )
}