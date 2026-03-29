import { useState } from 'react'
import { MapPin, Mail, Phone, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'

export default function Contato() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: 'Solicitação Enviada',
        description: 'Em breve um de nossos especialistas entrará em contato.',
        className: 'bg-secondary border-primary text-white',
      })
      ;(e.target as HTMLFormElement).reset()
    }, 1500)
  }

  return (
    <div className="animate-fade-slide-up pt-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info & Map */}
          <div className="space-y-12">
            <div>
              <span className="text-primary uppercase tracking-widest text-sm mb-4 block">
                Contato
              </span>
              <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">
                Inicie sua Consultoria
              </h1>
              <p className="text-muted-foreground text-lg">
                Agende uma reunião sem compromisso para avaliarmos as necessidades exclusivas do seu
                patrimônio.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary w-6 h-6 mt-1" />
                  <div>
                    <h3 className="text-white font-serif mb-1">Escritório</h3>
                    <p className="text-muted-foreground text-sm">
                      Rua Oscar Borges de Macedo Ribas 135
                      <br />
                      Curitiba, PR
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-primary w-6 h-6 mt-1" />
                  <div>
                    <h3 className="text-white font-serif mb-1">Telefones / WhatsApp</h3>
                    <p className="text-muted-foreground text-sm flex flex-col gap-1">
                      <span>(41) 98732-2926</span>
                      <span>(41) 99102-1963</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-primary w-6 h-6 mt-1" />
                  <div>
                    <h3 className="text-white font-serif mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm">acdomz.gc@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-primary w-6 h-6 mt-1" />
                  <div>
                    <h3 className="text-white font-serif mb-1">Atendimento</h3>
                    <p className="text-muted-foreground text-sm">Seg - Sex: 08:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-64 bg-white/5 border border-white/10 relative overflow-hidden group">
              {/* Map Placeholder */}
              <img
                src="https://img.usecurling.com/p/800/400?q=street%20map&color=black"
                alt="Mapa de Localização"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
                  <div className="w-4 h-4 bg-primary rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-secondary/30 border border-white/10 p-8 md:p-12">
            <h2 className="text-2xl font-serif text-white mb-8">Envie uma Mensagem</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Nome Completo</label>
                <Input
                  required
                  className="bg-transparent border-white/20 text-white focus-visible:ring-primary h-12 rounded-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Telefone</label>
                  <Input
                    required
                    type="tel"
                    className="bg-transparent border-white/20 text-white focus-visible:ring-primary h-12 rounded-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Unidades</label>
                  <Input
                    required
                    type="number"
                    min="1"
                    placeholder="Ex: 50"
                    className="bg-transparent border-white/20 text-white focus-visible:ring-primary h-12 rounded-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Nome do Condomínio</label>
                <Input
                  required
                  className="bg-transparent border-white/20 text-white focus-visible:ring-primary h-12 rounded-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Área de Interesse</label>
                <Select required>
                  <SelectTrigger className="bg-transparent border-white/20 text-white focus:ring-primary h-12 rounded-none">
                    <SelectValue placeholder="Selecione o serviço..." />
                  </SelectTrigger>
                  <SelectContent className="bg-secondary border-white/20 text-white">
                    <SelectItem value="sindicatura">Sindicatura Profissional</SelectItem>
                    <SelectItem value="engenharia">Laudos de Engenharia</SelectItem>
                    <SelectItem value="manutencao">Manutenção Predial</SelectItem>
                    <SelectItem value="completo">Gestão de A a Z</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Mensagem Adicional</label>
                <Textarea className="bg-transparent border-white/20 text-white focus-visible:ring-primary min-h-[120px] rounded-none resize-none" />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-white hover:text-black rounded-none h-14 uppercase tracking-widest transition-colors duration-300 mt-4"
              >
                {isSubmitting ? 'Enviando...' : 'Solicitar Contato'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
