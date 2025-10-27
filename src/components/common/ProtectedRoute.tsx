/*
This component wraps routes that require authentication or specific roles.
It redirects unauthorized users to the login page and shows a loading state
while checking authentication status.
*/

import { Navigate } from 'react-router-dom'
import { useAuth } from '@context/AuthContext'
import type { UserRole } from '@/types/index'

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRole?: UserRole
}

export function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const { user, loading, isAdmin } = useAuth()

  // Show loading state while checking auth
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/login" replace />
  }

  // Check role requirements if specified
  if (requiredRole) {
    // Admins can access everything
    if (isAdmin) {
      return <>{children}</>
    }

    // Check if user has the required role
    if (user.role !== requiredRole) {
      return <Navigate to="/" replace />
    }
  }

  return <>{children}</>
}