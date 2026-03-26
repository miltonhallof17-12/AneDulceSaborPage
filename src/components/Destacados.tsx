import { useEffect, useState, useRef } from 'react'
import GlowingButton from './GlowingButton'
import type { Product } from '../types/product'
import { getFeaturedProducts } from '../services/productService'

interface DestacadosProps {
  isVisible: boolean
}

const Destacados = ({ isVisible }: DestacadosProps) => {
  const [cardPositions, setCardPositions] = useState<number[]>([])
  const animationRef = useRef<number | null>(null)

  // Use JSON data instead of hardcoded products
  const products = getFeaturedProducts()

  // Initialize positions
  useEffect(() => {
    const initialPositions = products.map((_, index) => index * 312) // 300px + 12px gap
    setCardPositions(initialPositions)
  }, [products.length])

  // Animation loop
  useEffect(() => {
    const animate = () => {
      setCardPositions(prevPositions => {
        return prevPositions.map((position, index) => {
          const newPosition = position - 1
          
          // When card leaves screen, move it to the end
          if (newPosition < -312) {
            const maxPosition = Math.max(...prevPositions)
            return maxPosition + 312
          }
          
          return newPosition
        })
      })
      
      animationRef.current = requestAnimationFrame(animate)
    }
    
    animationRef.current = requestAnimationFrame(animate)
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <section
      className={`py-16 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {/* Título */}
      <div className="text-center mb-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#D85C56]">
          Destacados
        </h2>
      </div>

      {/* CONTENEDOR */}
      <div className="relative w-full">
        
        {/* TRACK */}
        <div className="relative h-64">
          {products.map((product: Product, index: number) => (
            <div
              key={index}
              className="absolute min-w-[250px] sm:min-w-[300px] bg-[#faeab7] rounded-xl overflow-hidden shadow-md"
              style={{
                transform: `translateX(${cardPositions[index] || 0}px)`,
              }}
            >
              {/* Imagen */}
              <div className="h-40 sm:h-48">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Texto */}
              <div className="p-4 text-center">
                <h3 className="text-[#D85C56] font-bold text-lg mb-2">
                  {product.title}
                </h3>
                <p className="text-black text-sm mb-3">
                  {product.subtitle}
                </p>
                <GlowingButton className="w-full">
                  {product.buttonText}
                </GlowingButton>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Destacados