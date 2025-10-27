import { Routes, Route } from 'react-router-dom'
import { Layout } from '@components/layout/Layout'
import { ProtectedRoute } from '@components/common/ProtectedRoute'
import { HomePage } from '@pages/HomePage'
import { LoginPage } from '@pages/LoginPage'
import { GalleryPage } from '@pages/GalleryPage'
import { OurStoryPage } from '@pages/OurStoryPage'
import { ContactPage } from '@pages/ContactPage'
import { VolunteerPage } from '@pages/VolunteerPage'
import { DonationsPage } from '@pages/DonationsPage'
import { ProjectsPage } from '@pages/ProjectsPage'
import { AdminDashboard } from '@pages/AdminDashboard'
import { EmployeeActions } from '@pages/EmployeeActions'
import { NotFoundPage } from '@pages/NotFoundPage'

function App() {
  return (
    <Routes>
      {/* Public routes with layout */}
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/gallery"
        element={
          <Layout>
            <GalleryPage />
          </Layout>
        }
      />
      <Route
        path="/our-story"
        element={
          <Layout>
            <OurStoryPage />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <ContactPage />
          </Layout>
        }
      />
      <Route
        path="/volunteer"
        element={
          <Layout>
            <VolunteerPage />
          </Layout>
        }
      />
      <Route
        path="/donations"
        element={
          <Layout>
            <DonationsPage />
          </Layout>
        }
      />
      <Route
        path="/projects"
        element={
          <Layout>
            <ProjectsPage />
          </Layout>
        }
      />

      {/* Login without layout */}
      <Route path="/login" element={<LoginPage />} />

      {/* Protected admin routes with layout */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute requiredRole="employee">
            <Layout>
              <AdminDashboard />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/employee-actions"
        element={
          <ProtectedRoute requiredRole="admin">
            <Layout>
              <EmployeeActions />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* 404 */}
      <Route
        path="*"
        element={
          <Layout>
            <NotFoundPage />
          </Layout>
        }
      />
    </Routes>
  )
}

export default App