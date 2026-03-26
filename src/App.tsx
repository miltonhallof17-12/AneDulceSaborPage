import { useState, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ContactButtons from './components/ContactButtons'
import Destacados from './components/Destacados'
import SobreNosotros from './components/SobreNosotros'
import SearchBar from './components/SearchBar'
import ProductsGrid from './components/ProductsGrid'
import Footer from './components/Footer'
import useInView from './hooks/useInView'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  
  const products = [
    { id: 1, name: 'Chocolate Cake', image: 'https://picsum.photos/seed/cake1/400/300.jpg' },
    { id: 2, name: 'Vanilla Cookies', image: 'https://picsum.photos/seed/cookies1/400/300.jpg' },
    { id: 3, name: 'Strawberry Tart', image: 'https://picsum.photos/seed/tart1/400/300.jpg' },
    { id: 4, name: 'Brownies', image: 'https://picsum.photos/seed/brownies1/400/300.jpg' },
    { id: 5, name: 'Cupcakes', image: 'https://picsum.photos/seed/cupcakes1/400/300.jpg' },
    { id: 6, name: 'Cheesecake', image: 'https://picsum.photos/seed/cheesecake1/400/300.jpg' }
  ]

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // refs
  const heroRef = useRef<HTMLElement>(null)
  const destacadosRef = useRef<HTMLElement>(null)
  const searchBarRef = useRef<HTMLElement>(null)
  const productsRef = useRef<HTMLElement>(null)

  // hooks correctos
  const heroVisible = useInView(heroRef)
  const destacadosVisible = useInView(destacadosRef)
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

      <section className='px-4 sm:px-6 lg:px-8'>
        <SobreNosotros />
      </section>

      <section ref={searchBarRef} className='px-4 sm:px-6 lg:px-8'>
        <SearchBar 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          isVisible={searchVisible}
        />
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