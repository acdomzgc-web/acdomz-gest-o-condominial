import { useState } from 'react'
import { MessageCircle, Phone, Mail, X, PhoneCall } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Menu Options */}
      <div
        className={cn(
          'flex flex-col gap-3 mb-4 transition-all duration-300 origin-bottom',
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none',
        )}
      >
        <a
          href="https://wa.me/5541987322926"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-secondary text-white px-4 py-3 rounded-full hover:bg-secondary/80 transition-colors shadow-lg shadow-black/50"
        >
          <span className="text-sm font-medium whitespace-nowrap">WhatsApp Carlos</span>
          <MessageCircle className="w-5 h-5" />
        </a>
        <a
          href="https://wa.me/5541991021963"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-secondary text-white px-4 py-3 rounded-full hover:bg-secondary/80 transition-colors shadow-lg shadow-black/50"
        >
          <span className="text-sm font-medium whitespace-nowrap">WhatsApp Adir</span>
          <MessageCircle className="w-5 h-5" />
        </a>
        <a
          href="mailto:acdomz.gc@gmail.com"
          className="flex items-center gap-3 bg-secondary/80 border border-white/10 text-white px-4 py-3 rounded-full hover:bg-white/10 transition-colors shadow-lg shadow-black/50"
        >
          <span className="text-sm font-medium whitespace-nowrap">E-mail</span>
          <Mail className="w-5 h-5 text-primary" />
        </a>
        <a
          href="tel:+5541987322926"
          className="flex items-center gap-3 bg-secondary/80 border border-white/10 text-white px-4 py-3 rounded-full hover:bg-white/10 transition-colors shadow-lg shadow-black/50"
        >
          <span className="text-sm font-medium whitespace-nowrap">Ligar</span>
          <PhoneCall className="w-5 h-5 text-primary" />
        </a>
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-all duration-300 z-50 focus:outline-none"
        aria-label="Opções de Contato"
      >
        {isOpen ? <X className="w-8 h-8" /> : <Phone className="w-8 h-8" />}
      </button>
    </div>
  )
}
