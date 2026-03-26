interface GlowingButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

const GlowingButton = ({ children, onClick, className = "" }: GlowingButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className={`relative px-8 py-3 bg-[#f8ab4c] hover:bg-[#f79824] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#f8ab4c]/50 hover:shadow-xl hover:shadow-[#f8ab4c]/70 ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </button>
  )
}

export default GlowingButton
