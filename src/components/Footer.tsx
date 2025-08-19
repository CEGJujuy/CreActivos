import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const [logoError, setLogoError] = useState(false)

  const handleLogoError = () => {
    setLogoError(true)
  }

  return (
    <footer className="bg-dark-900 text-white border-t border-gray-800">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              {!logoError ? (
                <img 
                  src="/logo.png" 
                  alt="CreActivo Digital Agency" 
                  className="h-10 w-auto"
                  onError={handleLogoError}
                />
              ) : (
                <div className="h-10 w-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  C
                </div>
              )}
              <span className="text-2xl font-bold neon-text">CreActivo Studio</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              La agencia educativa digital que enseña a emprendedores principiantes a lanzar su negocio online desde cero, sin necesidad de pagar diseñadores, influencers o agencias.
            </p>
            <p className="text-secondary-400 font-semibold">
              Estrategia + Tendencia = Libertad
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-secondary-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/ofertas" className="text-gray-300 hover:text-secondary-400 transition-colors">
                  Ofertas
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-300 hover:text-secondary-400 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-secondary-400" />
                <span className="text-gray-300">creactivostudio.geva@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-secondary-400" />
                <span className="text-gray-300">+54 388 315-3549</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-secondary-400" />
                <span className="text-gray-300">Jujuy, Argentina</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 CreActivo Studio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer