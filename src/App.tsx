import { Routes, Route } from 'react-router-dom'
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
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/our-story" element={<OurStoryPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/volunteer" element={<VolunteerPage />} />
      <Route path="/donations" element={<DonationsPage />} />
      <Route path="/projects" element={<ProjectsPage />} />

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute requiredRole="employee">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/employee-actions"
        element={
          <ProtectedRoute requiredRole="admin">
            <EmployeeActions />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App