import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, Star, Users, TrendingUp, Zap, Brain, Smartphone, Video, Globe, MessageCircle } from 'lucide-react'
import TestimonialCard from '../components/TestimonialCard'
import FeatureCard from '../components/FeatureCard'

const HomePage = () => {
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
      text: "Lo que me dieron en este taller vale 5 veces más. Pero lo mejor fue recuperar la confianza. Aprendí a venderme, a hablar en cámara y a activar mi proyecto.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ]

  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Inteligencia Artificial",
      description: "Aprende a usar IA para crear contenido, imágenes y automatizar procesos"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Páginas Web",
      description: "Crea tu propia página web y landing pages sin programar"
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Contenido Visual",
      description: "Edita videos profesionales y crea contenido para redes sociales"
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Chatbots",
      description: "Automatiza tu atención al cliente con chatbots inteligentes"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Estrategias de Venta",
      description: "Domina las técnicas de venta y marketing digital"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Redes Sociales",
      description: "Gestiona y haz crecer tu presencia en redes sociales"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Si seguís esperando saber <span className="text-yellow-300">TODO</span> para emprender...
                </h1>
                <p className="text-xl md:text-2xl text-blue-100">
                  Te vas a quedar mirando cómo otros lo hacen con IA y estrategia real.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <p className="text-lg font-medium mb-4">
                  🔥 <strong>Esto no es otro curso.</strong> Es el sistema que te enseña a crear, automatizar y escalar tu negocio digital sin depender de nadie.
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>+500 emprendedores</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-300" />
                    <span>4.9/5 estrellas</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://hotmart.com/es/marketplace/productos/creactivo-studio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center flex items-center justify-center space-x-2"
                >
                  <span>QUIERO EMPEZAR AHORA</span>
                  <ArrowRight className="h-5 w-5" />
                </a>
                <Link 
                  to="/contacto"
                  className="btn-secondary text-center flex items-center justify-center space-x-2"
                >
                  <span>Tengo Dudas</span>
                  <MessageCircle className="h-5 w-5" />
                </Link>
              </div>

              <div className="text-sm text-blue-100">
                <p>💰 <strong>Precio de lanzamiento:</strong> USD $130 (valor real $295)</p>
                <p>⏰ Oferta limitada - Solo por tiempo limitado</p>
              </div>
            </div>

            <div className="relative">
              <div className="video-container">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-secondary-600/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Play className="h-20 w-20 text-white mx-auto mb-4 animate-pulse" />
                    <p className="text-white font-semibold">Video de Presentación</p>
                    <p className="text-blue-100 text-sm">Descubre cómo transformar tu idea en negocio</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm animate-bounce-slow">
                ¡NUEVO!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿Te suena familiar, mi chiki?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sabemos exactamente por lo que estás pasando...
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-red-50 rounded-2xl border-2 border-red-200">
              <div className="text-4xl mb-4">😰</div>
              <h3 className="font-bold text-gray-900 mb-2">No sabés por dónde empezar</h3>
              <p className="text-gray-600 text-sm">Tenés la idea pero no las herramientas</p>
            </div>
            <div className="text-center p-6 bg-red-50 rounded-2xl border-2 border-red-200">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="font-bold text-gray-900 mb-2">Gastás en diseñadores</h3>
              <p className="text-gray-600 text-sm">Y nunca queda como vos querés</p>
            </div>
            <div className="text-center p-6 bg-red-50 rounded-2xl border-2 border-red-200">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="font-bold text-gray-900 mb-2">La IA te parece difícil</h3>
              <p className="text-gray-600 text-sm">Creés que es solo para genios</p>
            </div>
            <div className="text-center p-6 bg-red-50 rounded-2xl border-2 border-red-200">
              <div className="text-4xl mb-4">😤</div>
              <h3 className="font-bold text-gray-900 mb-2">Cursos que no sirven</h3>
              <p className="text-gray-600 text-sm">Puro humo, nada práctico</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-gray-900 mb-4">
              🛑 <span className="text-red-600">BASTA.</span> Es hora de que tomes el control.
            </p>
            <p className="text-lg text-gray-600">
              Si no te lo explican simple, no sirve. Y acá te lo vamos a explicar MUY simple.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              CreActivo Studio es tu <span className="gradient-text">solución</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No pagues lo que podés aprender a hacer vos. Te enseñamos todo desde cero, con acompañamiento práctico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🎯 Nuestro objetivo es simple:
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Que generes más de <strong className="text-secondary-600">$1000 USD/mes</strong> sin pagar empleados, 
                con independencia tecnológica total.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-secondary-100 text-secondary-800 px-4 py-2 rounded-full font-medium">
                  ✅ Ahorrás dinero
                </span>
                <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full font-medium">
                  ✅ Ahorrás tiempo
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-medium">
                  ✅ Te ponés en tendencia
                </span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">
                  ✅ Resultados reales
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Esto no es humo - <span className="gradient-text">Son resultados reales</span>
            </h2>
            <p className="text-xl text-gray-600">
              Mirá lo que lograron nuestros estudiantes:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Listo para activar tu proyecto?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Buenas mi chiki, llegó el momento de que dejes de postergar y empieces a construir 
            tu libertad financiera con estrategia + tendencia.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto mb-8">
            <div className="text-center mb-6">
              <p className="text-sm text-blue-200 mb-2">PRECIO DE LANZAMIENTO</p>
              <div className="flex items-center justify-center space-x-4">
                <span className="text-2xl line-through text-red-300">USD $295</span>
                <span className="text-5xl font-bold text-yellow-300">USD $130</span>
              </div>
              <p className="text-sm text-blue-200 mt-2">TODO INCLUIDO - Oferta por tiempo limitado</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://hotmart.com/es/marketplace/productos/creactivo-studio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-6 px-12 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center flex items-center justify-center space-x-2 text-lg"
            >
              <Zap className="h-6 w-6" />
              <span>SÍ, QUIERO EMPEZAR YA</span>
            </a>
            <Link 
              to="/ofertas"
              className="btn-secondary text-center flex items-center justify-center space-x-2 text-lg py-6 px-12"
            >
              <span>Ver Todas las Ofertas</span>
              <ArrowRight className="h-6 w-6" />
            </Link>
          </div>

          <p className="text-sm text-blue-200 mt-6">
            🔒 Compra 100% segura | 💳 Pago con tarjeta o PayPal | 📱 Acceso inmediato
          </p>
        </div>
      </section>
    </div>
  )
}

export default HomePage