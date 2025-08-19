import React from 'react'
import { Check, Star, ArrowRight, Zap, Gift, Crown } from 'lucide-react'
import TestimonialCard from '../components/TestimonialCard'

const SalesPage = () => {
  const testimonials = [
    {
      name: "Carla V.",
      location: "Jujuy, 34 años",
      text: "No tenía idea cómo lanzar mi negocio. Ahora tengo mi página, hago mis propios flyers, y ya tengo 25 ventas. Y lo hice sola. Gracias CreActivo.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Andrés G.",
      location: "Córdoba, 28 años", 
      text: "Pensé que la IA era algo para genios. Hoy tengo mi chatbot, videos hechos por mí, y un clon que habla como yo. Y no pagué a ningún diseñador.",
      rating: 5,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Mayra L.",
      location: "Buenos Aires, 41 años",
      text: "Lo que me dieron en este programa vale 5 veces más. Pero lo mejor fue recuperar la confianza. Aprendí a venderme, a hablar en cámara y a activar mi proyecto.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ]

  const offers = [
    {
      id: 1,
      name: "Tu Inicio Inteligente",
      originalPrice: 45,
      description: "Perfecto para empezar desde cero",
      features: [
        "Canva para publicidad profesional",
        "Edición de video básica",
        "Técnicas de ventas efectivas",
        "Oratoria y comunicación",
        "Primeros pasos para emprender",
        "Publicidades con ChatGPT",
        "Prompts para imágenes con IA",
        "Estrategias para redes sociales"
      ],
      classes: "15 masterclasses grabadas",
      icon: <Zap className="h-8 w-8" />,
      color: "from-blue-500 to-blue-600",
      buyLink: "https://hotmart.com/es/marketplace/productos/creactivo-studio-inicio"
    },
    {
      id: 2,
      name: "Tu Negocio Activo",
      originalPrice: 75,
      description: "Lleva tu negocio al siguiente nivel",
      features: [
        "Chatbot de WhatsApp automatizado",
        "Edición de video intermedia",
        "Creación de página web con IA",
        "Creación de App con IA",
        "Tips de crecimiento en redes sociales",
        "Creación de marca",
        "🎁 REGALO: Página web completa",
        "🎁 REGALO: Landing page optimizada"
      ],
      classes: "30 masterclasses grabadas",
      icon: <Gift className="h-8 w-8" />,
      color: "from-green-500 to-green-600",
      popular: true,
      buyLink: "https://hotmart.com/es/marketplace/productos/creactivo-studio-activo"
    },
    {
      id: 3,
      name: "Tu Marca con Inteligencia",
      originalPrice: 175,
      description: "La experiencia completa y profesional",
      features: [
        "Clon personal con IA",
        "Influencer virtual con IA",
        "Funnel/embudo de ventas completo",
        "Creación avanzada de videos",
        "Generación avanzada de imágenes",
        "Automatización completa",
        "Estrategias de escalamiento",
        "Mentoría personalizada"
      ],
      classes: "45+ masterclasses grabadas",
      icon: <Crown className="h-8 w-8" />,
      color: "from-purple-500 to-purple-600",
      premium: true,
      buyLink: "https://hotmart.com/es/marketplace/productos/creactivo-studio-premium"
    }
  ]

  const additionalServices = [
    "Diseño de videos publicitarios con IA",
    "Automatización de datos y flujos",
    "Guía personalizada 1 a 1 para emprendedores",
    "Página web / landing page / funnel personalizado"
  ]

  return (
    <div className="min-h-screen tech-bg">
      {/* Hero Section */}
      <section className="hero-pattern text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 neon-text">
            🔥 Oferta de <span className="text-yellow-400">Lanzamiento</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300">
            Buenas CreActivo, esta es tu oportunidad de conseguir TODO lo que necesitás 
            para lanzar tu negocio digital por un precio que no vas a creer.
          </p>
          
          <div className="glass-effect rounded-3xl p-8 max-w-3xl mx-auto border border-primary-500/30">
            <p className="text-sm text-primary-400 mb-2">EN LUGAR DE PAGAR</p>
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-3xl line-through text-red-400">USD $295</span>
              <span className="text-6xl font-bold text-yellow-400 neon-text">USD $130</span>
            </div>
            <p className="text-lg font-semibold mb-4">TODO INCLUIDO - Los 3 programas juntos</p>
            <p className="text-sm text-gray-400">
              ⏰ Precio de lanzamiento por tiempo limitado
            </p>
          </div>
        </div>
      </section>

      {/* Individual Offers Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 neon-text">
              Elegí tu <span className="text-secondary-400">nivel de transformación</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cada programa está diseñado para llevarte desde donde estás hasta donde querés llegar.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {offers.map((offer) => (
              <div 
                key={offer.id} 
                className={`price-card relative ${offer.popular ? 'featured' : ''} ${offer.premium ? 'premium' : ''}`}
              >
                {offer.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-secondary-500 text-white px-6 py-2 rounded-full text-sm font-bold animate-pulse">
                      MÁS POPULAR
                    </span>
                  </div>
                )}
                {offer.premium && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold animate-pulse">
                      PREMIUM
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`bg-gradient-to-r ${offer.color} p-4 rounded-2xl inline-block mb-4`}>
                    {offer.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{offer.name}</h3>
                  <p className="text-gray-400 mb-4">{offer.description}</p>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-white">USD ${offer.originalPrice}</span>
                    <p className="text-sm text-secondary-400 font-semibold">O incluido en la oferta de $130</p>
                  </div>
                  <p className="text-sm text-primary-400 font-medium">{offer.classes}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {offer.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-secondary-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <a 
                    href={offer.buyLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full btn-primary text-center block"
                  >
                    Comprar Solo Esta - ${offer.originalPrice}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Special Offer Banner */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-8 text-center text-black mb-16 animate-glow">
            <h3 className="text-3xl font-bold mb-4">
              🎉 ¡SUPER OFERTA DE LANZAMIENTO!
            </h3>
            <p className="text-xl mb-6">
              En lugar de pagar cada programa por separado (USD $295 total), 
              llevate los <strong>3 programas completos</strong> por solo:
            </p>
            <div className="text-6xl font-bold mb-4">USD $130</div>
            <p className="text-lg font-semibold mb-6">
              Ahorrás USD $165 y tenés acceso a TODO el contenido
            </p>
            <a 
              href="https://hotmart.com/es/marketplace/productos/creactivo-studio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black text-white font-bold py-4 px-12 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-2 text-lg"
            >
              <Zap className="h-6 w-6" />
              <span>QUIERO TODOS LOS PROGRAMAS</span>
            </a>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Servicios adicionales <span className="text-secondary-400">a la carta</span>
            </h2>
            <p className="text-xl text-gray-300">
              ¿Necesitás algo más específico? Te ayudamos con servicios personalizados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <div key={index} className="glass-effect rounded-2xl p-6 shadow-lg border border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-2 rounded-lg">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{service}</h3>
                    <p className="text-primary-400 font-bold">USD $100</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">
              ¿Te interesa algún servicio adicional? Contactanos para más información.
            </p>
            <a 
              href="mailto:creactivostudio.geva@gmail.com"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Consultar Servicios</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 neon-text">
              Lo que dicen nuestros <span className="text-secondary-400">estudiantes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 neon-text">
            No dejes pasar esta oportunidad
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            Esta oferta de lanzamiento es por tiempo limitado. Una vez que termine, 
            cada programa volverá a su precio original.
          </p>
          
          <div className="glass-effect rounded-3xl p-8 max-w-2xl mx-auto mb-8 border border-primary-500/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-6">
              <div>
                <p className="text-sm text-primary-400">Programa 1</p>
                <p className="text-lg line-through text-red-400">$45</p>
              </div>
              <div>
                <p className="text-sm text-primary-400">Programa 2</p>
                <p className="text-lg line-through text-red-400">$75</p>
              </div>
              <div>
                <p className="text-sm text-primary-400">Programa 3</p>
                <p className="text-lg line-through text-red-400">$175</p>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-4">
              <p className="text-sm text-primary-400 mb-2">TOTAL NORMAL: USD $295</p>
              <p className="text-5xl font-bold text-yellow-400 mb-2 neon-text">USD $130</p>
              <p className="text-sm text-secondary-400">AHORRÁS USD $165</p>
            </div>
          </div>

          <a 
            href="https://hotmart.com/es/marketplace/productos/creactivo-studio" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-neon inline-flex items-center space-x-2 text-xl py-6 px-12 mb-6"
          >
            <Zap className="h-6 w-6" />
            <span>COMPRAR AHORA - USD $130</span>
          </a>

          <div className="text-sm text-gray-400 space-y-1">
            <p>🔒 Pago 100% seguro con Hotmart</p>
            <p>💳 Acepta tarjetas de crédito y PayPal</p>
            <p>📱 Acceso inmediato después del pago</p>
            <p>🎓 Contenido disponible de por vida</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SalesPage