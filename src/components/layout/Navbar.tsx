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
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 border border-primary flex items-center justify-center rotate-45 group-hover:bg-primary transition-colors duration-500">
            <span className="font-serif text-primary text-xl -rotate-45 group-hover:text-black">
              A
            </span>
          </div>
          <span className="font-serif text-xl tracking-widest font-bold hidden sm:block uppercase">
            ACDOM<span className="text-primary">Z</span>
          </span>
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

        <div className="hidden lg:block">
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-black uppercase tracking-wider rounded-none px-6"
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
