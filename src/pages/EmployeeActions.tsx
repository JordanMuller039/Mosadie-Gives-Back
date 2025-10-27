import { useAuth } from '@context/AuthContext'

export function EmployeeActions() {
  const { user } = useAuth()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        <h1 className="text-3xl font-heading font-bold text-gray-900 mb-4">
          Employee Actions
        </h1>
        <p className="text-gray-600 mb-8">Welcome, {user?.firstName}!</p>
        <p className="text-gray-600">Admin-only employee management coming soon...</p>
      </div>
    </div>
  )
}