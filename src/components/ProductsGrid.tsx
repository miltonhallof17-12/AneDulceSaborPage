import ProductCard from './ProductCard'

interface ProductsGridProps {
  products: Array<{
    id: number
    name: string
    image: string
  }>
  isVisible: boolean
}

const ProductsGrid = ({ products, isVisible }: ProductsGridProps) => {
  return (
    <section 
      className={`container mx-auto py-8 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default ProductsGrid
