import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "О клубе", href: "#mission" },
    { name: "Практики", href: "#community" },
    { name: "Отзывы", href: "#testimonials" },
    { name: "Вступить", href: "#join" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/03d7716a-3301-4f8a-8434-cd5be43d8e71/files/70d35895-0448-467d-b563-34d57f19196e.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between p-6 md:p-8">
        <div className="text-white font-bold text-xl tracking-wider">ДЫШИ И ВЛАСТВУЙ</div>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="relative text-white hover:text-gray-300 transition-colors duration-300 font-medium tracking-wide pb-1 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
            </button>
          ))}
        </div>

        <button
          className="md:hidden text-white hover:text-gray-300 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          <span className="sr-only">Меню</span>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/90 z-30 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white text-2xl font-bold tracking-wider hover:text-gray-300 transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="text-center text-white max-w-4xl">
          <p className="text-sm md:text-base font-medium tracking-[0.3em] text-amber-300 uppercase mb-4">Йога-клуб · Москва</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-wider mb-4 leading-none">
            ДЫШИ
            <br />
            И ВЛАСТВУЙ
          </h1>

          <p className="text-xl md:text-2xl font-light tracking-wide mb-8 text-gray-200">
            Тело. Дыхание. Внутренняя сила.
          </p>

          <LiquidButton
            size="xxl"
            className="font-semibold text-lg tracking-wide"
            onClick={() => scrollToSection("#join")}
          >
            Начать практику
          </LiquidButton>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs tracking-widest uppercase">Листай вниз</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
      </div>
    </div>
  )
}