import GlowingButton from './GlowingButton'
import type { Product } from '../types/product'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-[#faeab7] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="bg-pink-100 h-32 sm:h-36 flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3">
        <h4 className="text-base sm:text-lg font-semibold text-[#D85C56] mb-2 italic text-center">{product.title}</h4>
        <p className="text-xs sm:text-sm text-gray-600 mb-3 text-center">{product.subtitle}</p>
        <GlowingButton className="w-full text-sm">{product.buttonText}</GlowingButton>
      </div>
    </div>
  )
}

export default ProductCard
