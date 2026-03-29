import { Link } from 'react-router-dom'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

const services = [
  {
    id: 'sindicatura',
    title: 'Sindicatura Profissional',
    content:
      'Assumimos a responsabilidade civil e criminal pelo seu condomínio. Nossa gestão executiva foca em mediar conflitos, garantir o cumprimento da convenção e valorizar o patrimônio, sempre com reuniões periódicas e prestação de contas transparente.',
  },
  {
    id: 'engenharia',
    title: 'Laudos de Engenharia',
    content:
      'Não dependemos de terceiros para avaliar a saúde do seu prédio. Nossos fundadores possuem expertise para emissão de laudos técnicos, inspeções prediais detalhadas e acompanhamento rigoroso de obras estruturais, garantindo a máxima segurança.',
  },
  {
    id: 'manutencao',
    title: 'Manutenção Predial Preventiva',
    content:
      'Implementamos um cronograma de manutenção preditiva e preventiva que reduz custos emergenciais. Cuidamos de elevadores, bombas, fachadas e áreas comuns com um olhar antecipatório, evitando transtornos para os moradores.',
  },
  {
    id: 'financeiro',
    title: 'Gestão Financeira & Administrativa',
    content:
      'Transparência absoluta nas finanças. Oferecemos planejamento orçamentário anual, redução estratégica de inadimplência, conciliação bancária rigorosa e apresentação de balancetes claros e compreensíveis para todos os conselheiros.',
  },
  {
    id: 'fornecedores',
    title: 'Coordenação de Fornecedores Premium',
    content:
      'Temos uma rede de parceiros homologados de alto padrão. Selecionamos, cotamos e fiscalizamos fornecedores para garantir que qualquer serviço prestado no condomínio atenda aos nossos exigentes padrões de qualidade.',
  },
]

export default function Servicos() {
  return (
    <div className="animate-fade-slide-up pt-24 min-h-screen bg-[#050505]">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Header Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <span className="text-primary uppercase tracking-widest text-sm mb-4 block">
              O Que Fazemos
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
              Soluções de Alto Padrão
            </h1>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              O conceito de A a Z significa que não entregamos soluções parciais. Desde a lâmpada do
              hall até o cálculo estrutural da fachada, o seu condomínio está sob controle
              profissional.
            </p>
            <Button
              asChild
              className="bg-primary text-black hover:bg-white hover:text-black rounded-none uppercase tracking-widest px-8 py-6 h-auto transition-all duration-300"
            >
              <Link to="/contato">Agende uma Consulta</Link>
            </Button>
          </div>

          {/* Accordion Column */}
          <div className="lg:col-span-7">
            <Accordion type="single" collapsible defaultValue="sindicatura" className="w-full">
              {services.map((service, index) => (
                <AccordionItem
                  key={service.id}
                  value={service.id}
                  className="border-white/10 mb-6 bg-black/40 backdrop-blur-sm px-6"
                >
                  <AccordionTrigger className="text-xl md:text-2xl font-serif text-white hover:text-primary hover:no-underline py-6 text-left">
                    <span className="flex items-center gap-4">
                      <span className="text-primary text-sm font-sans opacity-50">
                        0{index + 1}
                      </span>
                      {service.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-8 pl-10 pr-4">
                    {service.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>

      {/* Decorative Image */}
      <div className="w-full h-64 border-t border-white/10 overflow-hidden">
        <div className="w-full h-full bg-[url('https://img.usecurling.com/p/1920/400?q=architectural%20details&color=black')] bg-cover bg-center opacity-50" />
      </div>
    </div>
  )
}
