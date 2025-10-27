/*
The main navigation header displayed across all pages.
Features a responsive menu, smooth animations, and role-based navigation items.
*/

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useAuth } from '@context/AuthContext'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { signOut, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  const publicLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/our-story' },
    { name: 'Projects', path: '/projects' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Volunteer', path: '/volunteer' },
    { name: 'Donate', path: '/donations' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="text-2xl font-heading font-bold tracking-tight transition-smooth group-hover:scale-105">
              MOSADIE GIVES BACK
            </div>
            <div className="hidden md:block text-xs text-gray-400 italic">
              NPO#243-499
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {publicLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="px-4 py-2 text-sm font-medium transition-smooth hover:bg-white hover:text-black rounded"
              >
                {link.name}
              </Link>
            ))}

            {isAuthenticated && (
              <>
                <Link
                  to="/admin/dashboard"
                  className="px-4 py-2 text-sm font-medium transition-smooth hover:bg-white hover:text-black rounded"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 text-sm font-medium transition-smooth hover:bg-white hover:text-black rounded"
                >
                  Sign Out
                </button>
              </>
            )}

            {!isAuthenticated && (
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-medium transition-smooth hover:bg-white hover:text-black rounded"
              >
                Staff Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-800 rounded transition-smooth"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-2 animate-fadeIn">
            {publicLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-sm font-medium transition-smooth hover:bg-white hover:text-black rounded"
              >
                {link.name}
              </Link>
            ))}

            {isAuthenticated && (
              <>
                <Link
                  to="/admin/dashboard"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-sm font-medium transition-smooth hover:bg-white hover:text-black rounded"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    handleSignOut()
                    setIsMenuOpen(false)
                  }}
                  className="block w-full text-left px-4 py-2 text-sm font-medium transition-smooth hover:bg-white hover:text-black rounded"
                >
                  Sign Out
                </button>
              </>
            )}

            {!isAuthenticated && (
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-sm font-medium transition-smooth hover:bg-white hover:text-black rounded"
              >
                Staff Login
              </Link>
            )}
          </div>
        )}
      </nav>

      {/* Tagline */}
      <div className="bg-gray-900 py-2">
        <div className="container-custom">
          <p className="text-center text-xs md:text-sm text-gray-400 italic">
            Feeding From the Heart to the Soul
          </p>
        </div>
      </div>
    </header>
  )
}