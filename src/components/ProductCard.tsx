import GlowingButton from './GlowingButton'

interface ProductCardProps {
  product: {
    id: number
    name: string
    image: string
  }
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-[#faeab7] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="bg-pink-100 h-40 sm:h-48 flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h4 className="text-lg sm:text-xl font-semibold text-[#D85C56] mb-2 italic text-center">{product.name}</h4>
        <GlowingButton className="w-full">Encargar Ahora</GlowingButton>
      </div>
    </div>
  )
}

export default ProductCard
