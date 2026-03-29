import { Briefcase, HardHat, GraduationCap, History } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function Fundadores() {
  return (
    <div className="animate-fade-slide-up pt-24 min-h-screen bg-background">
      {/* Hero */}
      <section className="py-20 bg-background text-center">
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
          <div className="grid md:grid-cols-2 gap-16">
            {/* Founder 1: Adir Ailson Model */}
            <div className="group">
              <div className="relative h-[500px] mb-8 overflow-hidden rounded-sm">
                <img
                  src="https://img.usecurling.com/ppl/large?gender=male&seed=60"
                  alt="Adir Ailson Model"
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="text-primary w-5 h-5" />
                    <span className="text-primary tracking-widest uppercase text-xs">
                      Diretoria Executiva
                    </span>
                  </div>
                  <h2 className="text-3xl font-serif text-white mb-1">Adir Ailson Model</h2>
                  <p className="text-primary font-mono text-sm tracking-wider">CRA/PR 14.172</p>
                </div>
              </div>

              <div className="space-y-8 pr-4">
                <Card className="bg-secondary/30 border-white/10 rounded-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif text-primary mb-4 flex items-center gap-2">
                      <History className="w-5 h-5" /> História
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Especialista em resolução de conflitos, gestão financeira otimizada e
                      administração condominial. Adir desenvolveu a sólida base administrativa da
                      ACDOMZ, priorizando a transparência absoluta, a comunicação clara e a
                      valorização do bem-estar dos moradores, tratando cada condomínio como um
                      verdadeiro lar.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-secondary/30 border-white/10 rounded-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif text-primary mb-4 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5" /> Formação
                    </h3>
                    <ul className="space-y-3 text-muted-foreground text-sm">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>Bacharel em Administração de Empresas</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>Especialização em Gestão Condominial e Sindicatura Profissional</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Founder 2: Carlos Eduardo Model */}
            <div className="group mt-12 md:mt-24">
              <div className="relative h-[500px] mb-8 overflow-hidden rounded-sm">
                <img
                  src="https://img.usecurling.com/ppl/large?gender=male&seed=30"
                  alt="Carlos Eduardo Model"
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex items-center gap-3 mb-2">
                    <HardHat className="text-primary w-5 h-5" />
                    <span className="text-primary tracking-widest uppercase text-xs">
                      Diretoria Técnica
                    </span>
                  </div>
                  <h2 className="text-3xl font-serif text-white mb-1">Carlos Eduardo Model</h2>
                  <p className="text-primary font-mono text-sm tracking-wider">CREA/PR 222741/D</p>
                </div>
              </div>

              <div className="space-y-8 pr-4">
                <Card className="bg-secondary/30 border-white/10 rounded-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif text-primary mb-4 flex items-center gap-2">
                      <History className="w-5 h-5" /> História
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Com uma visão inovadora e foco no rigor técnico, Carlos traz a expertise da
                      engenharia diretamente para a gestão do seu condomínio. Engenheiro certificado
                      in-house, ele garante que emissões de laudos (PIC, PPCI, AVCB) e manutenções
                      sejam realizadas com precisão milimétrica, assegurando a conformidade legal e
                      a segurança estrutural do patrimônio.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-secondary/30 border-white/10 rounded-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif text-primary mb-4 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5" /> Formação
                    </h3>
                    <ul className="space-y-3 text-muted-foreground text-sm">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>Engenharia Civil com ênfase em Patologia das Construções</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>Certificação em Engenharia Diagnóstica e Manutenção Predial</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Shot */}
      <section className="relative h-[50vh] flex items-center justify-center border-t border-white/10">
        <div className="absolute inset-0 bg-[url('https://img.usecurling.com/p/1920/600?q=business%20team%20luxury%20office&color=black')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-background/80" />
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
