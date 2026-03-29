import { Target, Compass, HeartHandshake } from 'lucide-react'

export default function Sobre() {
  return (
    <div className="animate-fade-slide-up pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://img.usecurling.com/p/1920/800?q=luxury%20hall%20interior&color=black')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

        <div className="relative z-10 container text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Quem Somos</h1>
          <p className="text-xl text-primary font-serif italic max-w-2xl mx-auto">
            Visão, Missão e Valores ACDOMZ
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 bg-dark-blue-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-serif mb-8 text-white">
              A Filosofia de A a Z
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Mais do que um nome, ACDOMZ carrega em sua essência a identidade de seus fundadores,
              Adir Ailson Model e Carlos Eduardo Model, unidos pelo propósito de cuidar do que é
              mais importante: o seu lar. A união da experiência administrativa de Adir com a visão
              inovadora de Carlos resultou em uma empresa que entende o condomínio não apenas como
              uma estrutura física, mas como um espaço vivo de convivência e patrimônio familiar.
            </p>
            <p className="text-xl text-primary font-serif italic">
              "Nosso objetivo não é apenas administrar prédios, mas cuidar do lugar onde a vida
              acontece. Unimos técnica e humanidade para garantir que seu lar seja seu porto
              seguro."
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Compass,
                title: 'Nossa Visão',
                desc: 'Ser a referência máxima em Curitiba de gestão condominial de alto padrão, reconhecida pela inovação constante e atendimento humanizado.',
              },
              {
                icon: Target,
                title: 'Nossa Missão',
                desc: 'Proporcionar tranquilidade absoluta aos condôminos através de uma gestão executiva, transparente e preventivamente impecável.',
              },
              {
                icon: HeartHandshake,
                title: 'Nossos Valores',
                desc: 'Transparência inegociável, Pró-atividade técnica, Empatia nas relações e Parceria duradoura com cada comunidade que gerenciamos.',
              },
            ].map((item, i) => (
              <div key={i} className="border-l border-primary/30 pl-8 py-4 relative group">
                <div className="absolute -left-[17px] top-6 w-8 h-8 rounded-full bg-black border-2 border-primary flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <item.icon className="w-8 h-8 text-primary mb-6" />
                <h3 className="text-2xl font-serif mb-4 text-white">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-serif mb-16 text-center text-white">
            Nossa Trajetória
          </h2>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/50 before:to-transparent">
            {[
              {
                year: '2015',
                title: 'A Fundação',
                desc: 'Identificação da necessidade de uma gestão mais técnica em condomínios de alto padrão em Curitiba.',
              },
              {
                year: '2018',
                title: 'Expansão Técnica',
                desc: 'Integração de laudos de engenharia próprios no escopo de gestão, elevando a segurança estrutural.',
              },
              {
                year: '2023',
                title: 'O Conceito A a Z',
                desc: 'Rebranding para ACDOMZ, consolidando a metodologia de gestão humanizada e 360 graus.',
              },
              {
                year: 'Hoje',
                title: 'Excelência Premium',
                desc: 'Gestão exclusiva de condomínios selecionados, mantendo o padrão AAA de atendimento.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/50 bg-black text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:border-primary group-hover:text-primary transition-colors duration-300 z-10">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded border border-white/10 bg-white/5 backdrop-blur-sm group-hover:border-primary/50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-xl text-primary">{item.title}</h3>
                    <span className="text-sm font-medium text-muted-foreground">{item.year}</span>
                  </div>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
