import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'

export function ExitIntent() {
  const [open, setOpen] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTriggered) {
        setOpen(true)
        setHasTriggered(true)
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [hasTriggered])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md bg-black/95 backdrop-blur-xl border border-primary/20 p-8 rounded-none">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />

        <DialogHeader className="space-y-4 relative z-10">
          <DialogTitle className="font-serif text-3xl leading-tight text-white">
            Deseja elevar o padrão do seu condomínio?
          </DialogTitle>
          <DialogDescription className="text-base text-gray-400">
            Descubra como nossa gestão humanizada de A a Z pode transformar a valorização e a
            convivência no seu patrimônio.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-8 flex flex-col gap-4 relative z-10">
          <Button
            asChild
            className="w-full bg-primary text-black hover:bg-primary/90 rounded-none h-12 uppercase tracking-wide font-medium"
          >
            <Link to="/sobre" onClick={() => setOpen(false)}>
              Saiba Mais Sobre ACDOMZ
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-white rounded-none"
            onClick={() => setOpen(false)}
          >
            Agora não, obrigado
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
