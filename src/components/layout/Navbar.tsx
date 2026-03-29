import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import logoImg from '@/assets/logo-fundo-azul-9ce9b.jpeg'

const navLinks = [
  { name: 'Início', path: '/' },
  { name: 'Sobre Nós', path: '/sobre' },
  { name: 'Serviços', path: '/servicos' },
  { name: 'Depoimentos', path: '/depoimentos' },
  { name: 'Contato', path: '/contato' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b border-[#c2b28f]/20',
        scrolled ? 'bg-[#062945] shadow-lg py-2' : 'bg-[#062945] py-4',
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
            <img
              src={logoImg}
              alt="ACDOMZ Gestão Condominial"
              className="w-[200px] h-[60px] object-contain rounded-md shadow-sm"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-[#c2b28f]',
                  location.pathname === link.path ? 'text-[#c2b28f]' : 'text-white',
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button
              asChild
              className="bg-[#c2b28f] text-[#062945] hover:bg-[#a89b78] font-semibold border-none"
            >
              <Link to="/contato">Solicitar Proposta</Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white hover:text-[#c2b28f] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Alternar menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#062945] border-t border-[#c2b28f]/20 shadow-xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'px-4 py-3 rounded-md transition-colors text-base font-medium',
                  location.pathname === link.path
                    ? 'bg-[#c2b28f]/10 text-[#c2b28f]'
                    : 'text-white hover:bg-white/5',
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button
              asChild
              className="w-full bg-[#c2b28f] text-[#062945] hover:bg-[#a89b78] mt-4 font-semibold h-12"
            >
              <Link to="/contato" onClick={() => setIsOpen(false)}>
                Solicitar Proposta
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
