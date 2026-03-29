import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Sobre', path: '/sobre' },
  { name: 'Fundadores', path: '/fundadores' },
  { name: 'Serviços', path: '/servicos' },
  { name: 'Depoimentos', path: '/depoimentos' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent',
        scrolled ? 'bg-black/90 backdrop-blur-md border-white/10 py-4' : 'bg-transparent py-6',
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center justify-center w-[200px] h-[60px] group border border-primary/20 hover:border-primary/50 transition-colors bg-black/50 backdrop-blur-sm"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 border border-primary flex items-center justify-center rotate-45 group-hover:bg-primary transition-colors duration-500">
              <span className="font-serif text-primary text-lg -rotate-45 group-hover:text-black font-bold">
                A
              </span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-serif text-xl tracking-widest font-bold uppercase leading-none text-white">
                ACDOM<span className="text-primary">Z</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                Gestão Condominial
              </span>
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm uppercase tracking-wider transition-colors hover:text-primary',
                location.pathname === link.path ? 'text-primary' : 'text-gray-300',
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-4 border-r border-white/10 pr-6">
            <a
              href="https://www.instagram.com/acdomz.gc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/company/acdomz-gest%C3%A3o-condominial/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-black uppercase tracking-wider rounded-none px-6 bg-black/50 backdrop-blur-sm"
          >
            <Link to="/contato">Solicitar Consultoria</Link>
          </Button>
        </div>

        <div className="lg:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-black/95 backdrop-blur-xl border-l border-white/10 p-0 w-full sm:max-w-sm"
            >
              <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
              <div className="flex flex-col h-full justify-center items-center gap-8 p-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="font-serif text-3xl hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/contato"
                  className="mt-8 font-serif text-2xl text-primary border-b border-primary pb-1"
                >
                  Contato
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
