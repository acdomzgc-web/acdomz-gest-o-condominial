import { Briefcase, HardHat } from 'lucide-react'

export default function Fundadores() {
  return (
    <div className="animate-fade-slide-up pt-24">
      {/* Hero */}
      <section className="py-20 bg-black text-center">
        <div className="container px-4">
          <span className="text-primary uppercase tracking-widest text-sm mb-4 block">
            A Liderança ACDOMZ
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Expertise & Liderança</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A sinergia perfeita entre o rigor técnico da engenharia e a visão estratégica da
            administração.
          </p>
        </div>
      </section>

      {/* Founders Profiles */}
      <section className="py-20 bg-dark-blue-gradient">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Founder 1 */}
            <div className="group">
              <div className="relative h-[500px] mb-8 overflow-hidden">
                <img
                  src="https://img.usecurling.com/ppl/large?gender=male&seed=14"
                  alt="Sócio Diretor - Engenheiro"
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex items-center gap-3 mb-2">
                    <HardHat className="text-primary w-5 h-5" />
                    <span className="text-primary tracking-widest uppercase text-xs">
                      Diretoria Técnica
                    </span>
                  </div>
                  <h2 className="text-3xl font-serif text-white">Carlos Eduardo Model</h2>
                </div>
              </div>
              <div className="pr-8">
                <h3 className="text-xl text-white mb-4">Engenharia & Inovação</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Com uma visão inovadora e foco no rigor técnico, Carlos traz a expertise da
                  engenharia diretamente para a gestão do seu condomínio. Engenheiro certificado
                  in-house, ele garante que emissões de laudos (PIC, PPCI, AVCB) e manutenções sejam
                  realizadas com precisão milimétrica, assegurando a conformidade legal e a
                  segurança estrutural do patrimônio.
                </p>
                <div className="h-px w-12 bg-primary" />
              </div>
            </div>

            {/* Founder 2 */}
            <div className="group mt-12 md:mt-24">
              <div className="relative h-[500px] mb-8 overflow-hidden">
                <img
                  src="https://img.usecurling.com/ppl/large?gender=female&seed=8"
                  alt="Sócia Diretora - Administradora"
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="text-primary w-5 h-5" />
                    <span className="text-primary tracking-widest uppercase text-xs">
                      Diretoria Executiva
                    </span>
                  </div>
                  <h2 className="text-3xl font-serif text-white">Adir Ailson Model</h2>
                </div>
              </div>
              <div className="pr-8">
                <h3 className="text-xl text-white mb-4">Gestão Administrativa & Sindicatura</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Especialista em resolução de conflitos, gestão financeira otimizada e
                  administração condominial. Adir desenvolveu a sólida base administrativa da
                  ACDOMZ, priorizando a transparência absoluta, a comunicação clara e a valorização
                  do bem-estar dos moradores, tratando cada condomínio como um verdadeiro lar.
                </p>
                <div className="h-px w-12 bg-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Shot */}
      <section className="relative h-[50vh] flex items-center justify-center border-t border-white/10">
        <div className="absolute inset-0 bg-[url('https://img.usecurling.com/p/1920/600?q=business%20team%20luxury%20office&color=black')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Apoiados por uma equipe de excelência
          </h2>
          <p className="text-primary tracking-widest uppercase text-sm">
            Prontos para atender seu condomínio
          </p>
        </div>
      </section>
    </div>
  )
}
