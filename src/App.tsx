import { useState, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ContactButtons from './components/ContactButtons'
import Destacados from './components/Destacados'
import SobreNosotros from './components/SobreNosotros'
import SearchBar from './components/SearchBar'
import CategoryFilter from './components/CategoryFilter'
import ProductsGrid from './components/ProductsGrid'
import Footer from './components/Footer'
import useInView from './hooks/useInView'
import { searchProducts, getFilteredProducts } from './services/productService'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  
  // Filter products by category first, then by search term
  const categoryFilteredProducts = getFilteredProducts(selectedCategory)
  const filteredProducts = searchTerm ? searchProducts(searchTerm) : categoryFilteredProducts

  // refs
  const heroRef = useRef<HTMLElement>(null)
  const destacadosRef = useRef<HTMLElement>(null)
  const sobreNosotrosRef = useRef<HTMLElement>(null)
  const searchBarRef = useRef<HTMLElement>(null)
  const productsRef = useRef<HTMLElement>(null)

  // hooks correctos
  const heroVisible = useInView(heroRef)
  const destacadosVisible = useInView(destacadosRef)
  const sobreNosotrosVisible = useInView(sobreNosotrosRef)
  const searchVisible = useInView(searchBarRef)
  const productsVisible = useInView(productsRef)

  return (
    <div className="min-h-screen bg-[#f5efe6] overflow-x-hidden">
      <Navbar />

      <section ref={heroRef} className='px-4 sm:px-6 lg:px-8'>
        <Hero isVisible={heroVisible} />
      </section>

      <ContactButtons />

      <section ref={destacadosRef}  className='px-4 sm:px-6 lg:px-8'>
        <Destacados isVisible={destacadosVisible} />
      </section>

      <section ref={sobreNosotrosRef} className='px-4 sm:px-6 lg:px-8'>
        <SobreNosotros isVisible={sobreNosotrosVisible} />
      </section>

      <section ref={searchBarRef} className='px-4 sm:px-6 lg:px-8'>
        <SearchBar 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          isVisible={searchVisible}
        />
        
        {/* Category Filter */}
        <div className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          searchVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <CategoryFilter 
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
      </section>

      <section ref={productsRef} className='px-4 sm:px-6 lg:px-8'>
        <ProductsGrid 
          products={filteredProducts}
          isVisible={productsVisible}
        />
      </section>

      <Footer />
    </div>
  )
}

export default App