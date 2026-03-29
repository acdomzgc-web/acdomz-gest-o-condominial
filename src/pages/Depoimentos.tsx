import { Star, Quote } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const testimonials = [
  {
    name: 'Dr. Marcos Guimarães',
    role: 'Presidente do Conselho',
    condo: 'Condomínio Palazzo Lumini',
    text: 'A ACDOMZ transformou a gestão do nosso prédio. A abordagem técnica nas manutenções aliada à transparência financeira nos trouxe uma tranquilidade que nunca tivemos com outras administradoras.',
  },
  {
    name: 'Sra. Helena Furtado',
    role: 'Moradora',
    condo: 'Residencial Le Blanc',
    text: 'O atendimento humanizado deles faz toda a diferença. Qualquer problema é resolvido com agilidade e sempre com um sorriso. São verdadeiros parceiros do condomínio.',
  },
  {
    name: 'Eng. Paulo Souza',
    role: 'Conselheiro Fiscal',
    condo: 'Edifício Infinity',
    text: 'Como engenheiro, impressiono-me com a qualidade dos laudos e vistorias da ACDOMZ. Eles identificaram preventivamente infiltrações que salvariam milhares de reais do nosso caixa.',
  },
  {
    name: 'Mariana Torres',
    role: 'Síndica Moradora (Parceria)',
    condo: 'Condomínio Neo Superquadra',
    text: 'Atuar como síndica tendo a ACDOMZ como co-gestora administrativa foi a melhor decisão. O suporte deles é impecável, de A a Z, como eles mesmos prometem.',
  },
]

export default function Depoimentos() {
  return (
    <div className="animate-fade-slide-up pt-24 min-h-screen bg-background flex flex-col justify-center">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-widest text-sm mb-4 block">
            Depoimentos
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white">
            Vozes da Excelência
          </h1>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <Quote className="absolute -top-10 -left-10 w-32 h-32 text-white/5 z-0" />

          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full relative z-10"
          >
            <CarouselContent className="-ml-4 md:-ml-8">
              {testimonials.map((test, index) => (
                <CarouselItem key={index} className="pl-4 md:pl-8 md:basis-1/2 lg:basis-1/2">
                  <div className="h-full border border-white/10 bg-secondary/30 p-10 flex flex-col justify-between hover:border-primary/30 transition-colors">
                    <div>
                      <div className="flex gap-1 mb-6">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-lg text-gray-300 leading-relaxed font-serif italic mb-8">
                        "{test.text}"
                      </p>
                    </div>
                    <div>
                      <div className="h-px w-8 bg-primary mb-4" />
                      <h4 className="text-white font-medium">{test.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {test.role} • {test.condo}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-center gap-4 mt-12 relative h-12">
              <CarouselPrevious className="relative left-0 top-0 translate-y-0 translate-x-0 bg-transparent border-white/20 text-white hover:bg-primary hover:text-primary-foreground hover:border-primary w-12 h-12" />
              <CarouselNext className="relative right-0 top-0 translate-y-0 translate-x-0 bg-transparent border-white/20 text-white hover:bg-primary hover:text-primary-foreground hover:border-primary w-12 h-12" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  )
}
