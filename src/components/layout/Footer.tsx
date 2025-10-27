import { Link } from 'react-router-dom'
import { Facebook, Youtube, Phone, Mail, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Mosadie Gives Back</h3>
            <p className="text-sm text-gray-400 mb-4">
              Feeding from the heart to the soul. Providing healthy and nutritious meals to families in the Tafelsig area.
            </p>
            <p className="text-xs text-gray-500">NPO#243-499</p>
          </div>

          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/our-story" className="text-gray-400 hover:text-white transition-smooth">About Us</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-white transition-smooth">Our Projects</Link>
              </li>
              <li>
                <Link to="/volunteer" className="text-gray-400 hover:text-white transition-smooth">Volunteer</Link>
              </li>
              <li>
                <Link to="/donations" className="text-gray-400 hover:text-white transition-smooth">Donate</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-smooth">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>078 200 7604</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@mosadiegivesback.org</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1" />
                <span>Tafelsig, Cape Town, South Africa</span>
              </li>
            </ul>

            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-smooth">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Mosadie Gives Back. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}