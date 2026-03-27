import GlowingButton from './GlowingButton'

interface SobreNosotrosProps {
  isVisible: boolean
}

const SobreNosotros = ({ isVisible }: SobreNosotrosProps) => {
  return (
    <section id="sobre-nosotros" className={`container mx-auto py-20 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`}>
      <div className="flex flex-col lg:flex-row items-center gap-12">
        
        {/* Imagen */}
        <div className="w-full lg:w-1/2">
          <img 
            src="/Logo-AneDulce.webp"
            alt="Sobre Nosotros"
            className="w-full h-auto"
          />
        </div>

        {/* Texto */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold text-[#D85C56] mb-4">
            Sobre Nosotros
          </h2>

          <p className="text-gray-700 mb-6">
            Creamos experiencias dulces con ingredientes reales, 
            cuidando cada detalle para que cada bocado sea especial.
          </p>

          <div className="flex justify-center lg:justify-start">
            <GlowingButton>
              Conocé más
            </GlowingButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SobreNosotros
