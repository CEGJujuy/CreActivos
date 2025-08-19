import React, { useState } from 'react'
import { Mail, Phone, MapPin, MessageCircle, Send, Clock, CheckCircle } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'general'
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Crear el mensaje para WhatsApp
    const whatsappMessage = `¡Hola CreActivo Studio! Soy ${formData.name}
    
📧 Email: ${formData.email}
📱 Teléfono: ${formData.phone}
🎯 Interés: ${formData.interest}

💬 Mensaje:
${formData.message}

Enviado desde CreActivo Studio`

    const whatsappUrl = `https://wa.me/5493883153549?text=${encodeURIComponent(whatsappMessage)}`
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank')
    
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen tech-bg flex items-center justify-center section-padding">
        <div className="glass-effect rounded-3xl p-12 shadow-2xl text-center max-w-2xl mx-auto border border-primary-500/30">
          <div className="bg-secondary-500/20 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center border border-secondary-500/30">
            <CheckCircle className="h-12 w-12 text-secondary-400" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4 neon-text">
            ¡Perfecto, CreActivo!
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Te redirigimos a WhatsApp para que puedas enviarnos tu consulta directamente. 
            Así podemos responderte más rápido y personalizado.
          </p>
          <p className="text-sm text-gray-400 mb-8">
            Si no se abrió WhatsApp automáticamente, podés contactarnos directamente al +54 388 315-3549
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5493883153549" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Abrir WhatsApp</span>
            </a>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="btn-secondary"
            >
              Enviar Otro Mensaje
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen tech-bg">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              ¿Tenés dudas, CreActivo?
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Perfecto, estamos acá para ayudarte. Contanos qué necesitás y te respondemos 
              en menos de 24 horas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-effect rounded-3xl p-8 shadow-2xl border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">
                Dejanos tu consulta
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    ¿Cómo te llamás?
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-800/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-white placeholder-gray-400"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-800/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-white placeholder-gray-400"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Teléfono (opcional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-800/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-white placeholder-gray-400"
                    placeholder="+54 388 315-3549"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-2">
                    ¿Qué te interesa más?
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-800/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-white"
                  >
                    <option value="general">Consulta general</option>
                    <option value="ofertas">Información sobre las ofertas</option>
                    <option value="servicios">Servicios adicionales</option>
                    <option value="tecnico">Soporte técnico</option>
                    <option value="personalizado">Servicio personalizado</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Contanos tu duda
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-800/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none text-white placeholder-gray-400"
                    placeholder="Contanos qué necesitás saber, qué dudas tenés, o cómo podemos ayudarte..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Enviar por WhatsApp</span>
                </button>

                <p className="text-sm text-gray-400 text-center">
                  Al enviar, se abrirá WhatsApp con tu mensaje pre-cargado para que puedas enviarlo directamente.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glass-effect rounded-3xl p-8 shadow-2xl border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Otras formas de contactarnos
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary-500/20 p-3 rounded-xl border border-primary-500/30">
                      <MessageCircle className="h-6 w-6 text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">WhatsApp</h4>
                      <p className="text-gray-300">+54 388 315-3549</p>
                      <p className="text-sm text-gray-400">Atención 24 horas</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-secondary-500/20 p-3 rounded-xl border border-secondary-500/30">
                      <Mail className="h-6 w-6 text-secondary-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Email</h4>
                      <p className="text-gray-300">creactivostudio.geva@gmail.com</p>
                      <p className="text-sm text-gray-400">Atención 24 horas</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-yellow-500/20 p-3 rounded-xl border border-yellow-500/30">
                      <MapPin className="h-6 w-6 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Ubicación</h4>
                      <p className="text-gray-300">Jujuy, Argentina</p>
                      <p className="text-sm text-gray-400">Atención online</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-500/20 p-3 rounded-xl border border-purple-500/30">
                      <Clock className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Horarios</h4>
                      <p className="text-gray-300">Disponible 24 horas</p>
                      <p className="text-sm text-gray-400">Todos los días del año</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="neon-gradient rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  ¿Preferís hablar directamente?
                </h3>
                <p className="mb-6">
                  Si tenés dudas específicas o querés saber más sobre nuestros servicios personalizados, 
                  podemos coordinar una llamada.
                </p>
                <a 
                  href="https://calendly.com/creactivostudio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-black font-bold py-3 px-6 rounded-xl hover:bg-gray-100 transition-all inline-flex items-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Agendar Llamada</span>
                </a>
              </div>

              <div className="glass-effect rounded-3xl p-8 shadow-2xl border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Preguntas frecuentes
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      ¿Cuánto tiempo tengo para completar los cursos?
                    </h4>
                    <p className="text-gray-400 text-sm">
                      El acceso es de por vida. Podés ir a tu ritmo sin presión.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      ¿Necesito conocimientos previos?
                    </h4>
                    <p className="text-gray-400 text-sm">
                      No, empezamos desde cero. Si no te lo explican simple, no sirve.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      ¿Hay garantía de devolución?
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Sí, tenés 7 días para probar el contenido. Si no te convence, te devolvemos el dinero.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage