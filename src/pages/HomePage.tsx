import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ContactButtons from '../components/ContactButtons'
import Destacados from '../components/Destacados'
import SobreNosotros from '../components/SobreNosotros'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import StructuredData from '../components/StructuredData'
import useInView from '../hooks/useInView'

const HomePage = () => {
  // refs
  const heroRef = useRef<HTMLElement>(null)
  const destacadosRef = useRef<HTMLElement>(null)
  const sobreNosotrosRef = useRef<HTMLElement>(null)

  // hooks
  const heroVisible = useInView(heroRef)
  const destacadosVisible = useInView(destacadosRef)
  const sobreNosotrosVisible = useInView(sobreNosotrosRef)

  // Local Business Schema for home page
  const localBusinessData = {
    name: "Ane Dulce Sabor",
    description: "Dulces artesanales elaborados con amor y los mejores ingredientes. Especialistas en tortas, postres y tentaciones únicas.",
    url: "https://anedulcesabor.com",
    telephone: "+54 9 1234-5678",
    address: {
      streetAddress: "Calle Principal 123",
      addressLocality: "Buenos Aires",
      addressRegion: "CABA",
      postalCode: "1001",
      addressCountry: "Argentina"
    },
    geo: {
      latitude: "-34.6037",
      longitude: "-58.3816"
    },
    openingHours: [
      "Mo-Fr 08:00-18:00",
      "Sa-Su 09:00-17:00"
    ],
    image: "/Logo.webp",
    sameAs: [
      "https://www.instagram.com/ane_dulce_sabor"
    ]
  }

  return (
    <>
      <SEO 
        title="Ane Dulce Sabor - Dulces Artesanales de Calidad"
        description="Dulces artesanales elaborados con amor. Descubre nuestras tortas, postres y tentaciones únicas elaboradas con ingredientes premium."
        canonical="https://anedulcesabor.com/"
      />
      
      <StructuredData type="LocalBusiness" data={localBusinessData} />
      
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

      {/* CTA Section */}
      <section className='px-4 sm:px-6 lg:px-8 py-12'>
        <div className='text-center'>
          <Link 
            to="/catalogo"
            className="inline-block bg-[#D85C56] text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#c74a44] transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Ver Catálogo
          </Link>
          <p className="mt-4 text-gray-600">
            Explora nuestra completa colección de dulces artesanales
          </p>
        </div>
      </section>

      <Footer />
    </div>
    </>
  )
}

export default HomePage
