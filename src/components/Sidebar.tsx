import type React from "react"
import { Link, useLocation } from "react-router-dom"
import {
  HomeIcon,
  UsersIcon,
  ChartBarIcon,
  DocumentTextIcon,
  BookOpenIcon,
  CogIcon,
  TruckIcon,
} from "@heroicons/react/24/outline"

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

const menuItems = [
  { name: "Dashboard", href: "/", icon: HomeIcon },
  { name: "O'quvchilar", href: "/students", icon: UsersIcon },
  { name: "Test Natijalari", href: "/results", icon: ChartBarIcon },
  { name: "Testlar", href: "/tests", icon: DocumentTextIcon },
  { name: "Darslar", href: "/lessons", icon: BookOpenIcon },
  { name: "Sozlamalar", href: "/settings", icon: CogIcon },
]

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const location = useLocation()

  return (
    <div className={`bg-white shadow-lg transition-all duration-300 ${isOpen ? "w-64" : "w-16"}`}>
      <div className="flex items-center justify-center h-16 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <TruckIcon className="h-8 w-8 text-blue-600" />
          {isOpen && <span className="text-xl font-bold text-gray-800">Haydovchilik Admin</span>}
        </div>
      </div>

      <nav className="mt-8">
        <div className="px-2 space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.href
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive ? "bg-blue-100 text-blue-900" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <item.icon className="mr-3 h-6 w-6 flex-shrink-0" />
                {isOpen && item.name}
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}

export default Sidebar
