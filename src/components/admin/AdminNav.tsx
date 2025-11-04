/*
Admin navigation tabs for switching between different management sections
*/

import { Users, FolderOpen, Heart, UserCheck } from 'lucide-react'

interface AdminNavProps {
  activeTab: 'projects' | 'staff' | 'volunteers' | 'donations'
  onTabChange: (tab: 'projects' | 'staff' | 'volunteers' | 'donations') => void
}

export function AdminNav({ activeTab, onTabChange }: AdminNavProps) {
  const tabs = [
    { id: 'projects' as const, label: 'Projects', icon: FolderOpen },
    { id: 'staff' as const, label: 'Staff', icon: Users },
    { id: 'volunteers' as const, label: 'Volunteers', icon: UserCheck },
    { id: 'donations' as const, label: 'Donations', icon: Heart },
  ]

  return (
    <nav className="flex space-x-8" aria-label="Admin Navigation">
      {tabs.map(tab => {
        const Icon = tab.icon
        const isActive = activeTab === tab.id

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors
              ${
                isActive
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }
            `}
          >
            <Icon className="w-5 h-5" />
            {tab.label}
          </button>
        )
      })}
    </nav>
  )
}