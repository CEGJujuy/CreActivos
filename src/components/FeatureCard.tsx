import React from 'react'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="feature-card text-center group hover:scale-105 transition-all duration-300">
      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-4 rounded-2xl inline-block mb-4 text-white group-hover:shadow-lg group-hover:shadow-primary-500/25">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  )
}

export default FeatureCard