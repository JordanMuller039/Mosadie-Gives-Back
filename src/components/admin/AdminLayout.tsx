/*
Reusable layout wrapper for admin dashboard sections
Provides consistent spacing and structure
*/

interface AdminLayoutProps {
  children: React.ReactNode
  title: string
  description?: string
  actions?: React.ReactNode
}

export function AdminLayout({ children, title, description, actions }: AdminLayoutProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
        </div>
        {actions && <div className="flex gap-3">{actions}</div>}
      </div>
      <div>{children}</div>
    </div>
  )
}