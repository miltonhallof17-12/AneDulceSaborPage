

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-[#D85C56] p-4 shadow-md -mx-4 sm:-mx-6 lg:-mx-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-3">
          <img 
            src="/Logo.webp" 
            alt="Ane Dulce Sabor Logo"
            className="w-20 h-20 sm:w-20 sm:h-20 object-cover rounded-full"
            loading="lazy"
          />
          <h1 className="text-xl sm:text-2xl font-bold text-white">Ane Dulce Sabor</h1>
        </div>
        <div className="flex space-x-4 sm:space-x-6">
          <Link 
            to="/" 
            className="text-white hover:text-pink-100 text-sm sm:text-base transition-colors"
          >
            Inicio
          </Link>
          <Link 
            to="/products" 
            className="text-white hover:text-pink-100 text-sm sm:text-base transition-colors"
          >
            Productos
          </Link>
          <a 
            href="#sobre-nosotros" 
            className="text-white hover:text-pink-100 text-sm sm:text-base transition-colors"
          >
            Nosotros
          </a>
          <a 
            href="#contacto" 
            className="text-white hover:text-pink-100 text-sm sm:text-base transition-colors"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
