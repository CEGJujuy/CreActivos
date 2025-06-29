import React from 'react'
import { Star } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  location: string
  text: string
  rating: number
  image: string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, location, text, rating, image }) => {
  return (
    <div className="testimonial-card">
      <div className="flex items-center space-x-4 mb-4">
        <img 
          src={image} 
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-4 border-primary-500/30"
        />
        <div>
          <h3 className="font-bold text-white">{name}</h3>
          <p className="text-sm text-gray-400">{location}</p>
          <div className="flex items-center space-x-1 mt-1">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-300 italic leading-relaxed">
        "{text}"
      </p>
    </div>
  )
}

export default TestimonialCard