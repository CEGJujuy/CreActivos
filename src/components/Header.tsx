import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Zap } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-2 rounded-xl">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">CreActivo Studio</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Inicio
            </Link>
            <Link to="/ofertas" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Ofertas
            </Link>
            <Link to="/contacto" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Contacto
            </Link>
            <a 
              href="https://hotmart.com/es/marketplace/productos/creactivo-studio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Comprar Ahora
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                to="/ofertas" 
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Ofertas
              </Link>
              <Link 
                to="/contacto" 
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
              <a 
                href="https://hotmart.com/es/marketplace/productos/creactivo-studio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary text-center"
              >
                Comprar Ahora
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header