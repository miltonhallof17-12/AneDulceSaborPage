import GlowingButton from './GlowingButton'

const SobreNosotros = () => {
  return (
    <section className="container mx-auto py-20">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        
        {/* Imagen */}
        <div className="w-full lg:w-1/2">
          <img 
            src="/Logo-AneDulce.webp"
            alt="Sobre Nosotros"
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

          <GlowingButton>
            Conocé más
          </GlowingButton>
        </div>
      </div>
    </section>
  )
}

export default SobreNosotros
