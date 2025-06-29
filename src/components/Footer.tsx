import React from 'react'
import { Link } from 'react-router-dom'
import { Zap, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-2 rounded-xl">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold">CreActivo Studio</span>
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
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
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
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-secondary-400" />
                <span className="text-gray-300">info@creactivostudio.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-secondary-400" />
                <span className="text-gray-300">+54 9 11 1234-5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-secondary-400" />
                <span className="text-gray-300">Buenos Aires, Argentina</span>
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