import { Link } from 'react-router-dom'
import { Building2, Wrench, ShieldCheck, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Index() {
  return (
    <div className="animate-fade-slide-up">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://img.usecurling.com/p/1920/1080?q=luxury%20city%20night&color=black')] bg-cover bg-center bg-fixed" />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <span className="block text-primary uppercase tracking-[0.3em] text-sm mb-6 animate-fade-slide-up stagger-1">
            Gestão Elite Curitiba
          </span>
          <div className="flex items-center justify-center mb-10 animate-fade-slide-up">
            <div className="flex items-center justify-center w-[200px] h-[60px] border border-primary/20 bg-black/30 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 border border-primary flex items-center justify-center rotate-45">
                  <span className="font-serif text-primary text-lg -rotate-45 font-bold">A</span>
                </div>
                <div className="flex flex-col justify-center text-left">
                  <span className="font-serif text-xl tracking-widest font-bold uppercase leading-none text-white">
                    ACDOM<span className="text-primary">Z</span>
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                    Gestão Condominial
                  </span>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 max-w-4xl mx-auto leading-tight animate-fade-slide-up stagger-2">
            Gestão de A a Z com Excelência
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 animate-fade-slide-up stagger-3 font-light leading-relaxed">
            Nosso objetivo não é apenas administrar prédios, mas cuidar do lugar onde a vida
            acontece. Unimos técnica e humanidade para garantir que seu lar seja seu porto seguro.
          </p>
          <div className="animate-fade-slide-up stagger-3 mt-8">
            <Button
              asChild
              size="lg"
              className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-black rounded-none uppercase tracking-widest px-8 py-6 h-auto transition-all duration-300"
            >
              <Link to="/servicos">Conheça Nossas Soluções</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-32 bg-dark-blue-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-serif mb-6 text-white">A Filosofia ACDOMZ</h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Mais do que um nome, ACDOMZ carrega em sua essência a identidade de seus fundadores,
              Adir Ailson Model e Carlos Eduardo Model, unidos pelo propósito de cuidar do que é
              mais importante: o seu lar. A união da experiência administrativa de Adir com a visão
              inovadora de Carlos resultou em uma empresa que entende o condomínio não apenas como
              uma estrutura física, mas como um espaço vivo de convivência e patrimônio familiar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="glass-panel p-10 flex flex-col items-center text-center group hover:border-primary/50 transition-colors">
              <Building2 className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-serif mb-4">Modernidade</h3>
              <p className="text-muted-foreground">
                Processos ágeis, tecnologia de ponta e transparência total em tempo real para o seu
                condomínio.
              </p>
            </div>
            <div className="glass-panel p-10 flex flex-col items-center text-center group hover:border-primary/50 transition-colors">
              <Users className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-serif mb-4">Humanização</h3>
              <p className="text-muted-foreground">
                Entendemos que gerimos lares. Respeito, empatia e comunicação clara são os pilares
                de nossa atuação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-32 bg-radial-gradient">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-primary uppercase tracking-widest text-sm mb-4 block">
                Expertise
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-white">Nossos Pilares</h2>
            </div>
            <Link
              to="/servicos"
              className="text-primary uppercase tracking-widest text-sm hover:text-white transition-colors border-b border-primary pb-1"
            >
              Ver todos os serviços
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: 'Sindicatura',
                desc: 'Gestão executiva completa com foco em valorização patrimonial e mediação de conflitos.',
              },
              {
                icon: Wrench,
                title: 'Engenharia',
                desc: 'Laudos técnicos, manutenção preventiva e acompanhamento rigoroso de obras estruturais.',
              },
              {
                icon: Building2,
                title: 'Gestão',
                desc: 'Administração financeira transparente, contabilidade impecável e conformidade legal.',
              },
            ].map((srv, i) => (
              <div
                key={i}
                className="border border-white/10 p-10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 bg-[#0a0a0a]"
              >
                <srv.icon className="w-10 h-10 text-primary mb-8" />
                <h3 className="text-xl font-serif mb-4 text-white">{srv.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-20 border-t border-white/10 bg-black">
        <div className="container mx-auto px-4 text-center">
          <span className="text-gray-500 uppercase tracking-widest text-xs mb-10 block">
            Padrão de Qualidade Reconhecido
          </span>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            <img
              src="https://img.usecurling.com/i?q=luxury%20brand%20logo&color=white&shape=outline"
              alt="Partner Logo"
              className="h-12 object-contain"
            />
            <img
              src="https://img.usecurling.com/i?q=real%20estate%20logo&color=white&shape=lineal-color"
              alt="Partner Logo"
              className="h-12 object-contain"
            />
            <img
              src="https://img.usecurling.com/i?q=building%20trust&color=white&shape=outline"
              alt="Partner Logo"
              className="h-12 object-contain"
            />
            <img
              src="https://img.usecurling.com/i?q=premium%20quality&color=white&shape=outline"
              alt="Partner Logo"
              className="h-12 object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
