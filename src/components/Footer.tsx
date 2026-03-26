const Footer = () => {
  return (
    <footer className="bg-[#D85C56] text-white py-8 mt-16 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <p className="text-sm mb-2">© 2024 Ane Dulce Sabor - Todos los derechos reservados</p>
              <div className="flex gap-4 justify-center md:justify-start">
                <span className="w-3 h-3 bg-[#F26861] rounded-full"></span>
                <span className="w-3 h-3 bg-[#f8ab4c] rounded-full"></span>
                <span className="w-3 h-3 bg-[#e6c59e] rounded-full"></span>
              </div>
            </div>
            <div className="hidden md:flex gap-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <span className="text-2xl">📧</span>
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <span className="text-2xl">📷</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer
