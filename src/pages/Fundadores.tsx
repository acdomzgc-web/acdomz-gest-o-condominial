import { Briefcase, HardHat, GraduationCap, History } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function Fundadores() {
  return (
    <div className="animate-fade-slide-up pt-[72px] md:pt-[92px] min-h-screen bg-background">
      {/* Hero */}
      <section className="py-20 bg-[#062945] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://img.usecurling.com/p/1920/600?q=luxury%20office&color=blue')] opacity-10 mix-blend-overlay object-cover w-full h-full" />
        <div className="container relative z-10 px-4">
          <span className="text-[#c2b28f] uppercase tracking-widest text-sm mb-4 block font-semibold">
            A Liderança ACDOMZ
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Expertise & Liderança
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl">
            A sinergia perfeita entre o rigor técnico da engenharia e a visão estratégica da
            administração.
          </p>
        </div>
      </section>

      {/* Founders Profiles */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl space-y-24">
          {/* Adir Model */}
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 order-1 md:order-1">
              <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-xl group">
                <img
                  src="https://img.usecurling.com/ppl/large?gender=male&seed=60"
                  alt="Adir Ailson Model"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062945] via-[#062945]/40 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="text-[#c2b28f] w-5 h-5" />
                    <span className="text-[#c2b28f] tracking-widest uppercase text-xs font-bold">
                      Co-Fundador
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-1">Adir Ailson Model</h2>
                  <p className="text-[#c2b28f] font-mono text-sm tracking-wider">CRA/PR 14.172</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 order-2 md:order-2 space-y-6">
              <Card className="bg-white border-gray-100 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#062945] mb-4 flex items-center gap-3">
                    <History className="w-6 h-6 text-[#c2b28f]" /> História e Visão
                  </h3>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Com uma sólida trajetória na área de administração, Adir Ailson Model é o
                      pilar estratégico da ACDOMZ. Sua vasta experiência em gestão de recursos,
                      planejamento financeiro e liderança de equipes garante que cada condomínio
                      administrado alcance a máxima eficiência operacional.
                    </p>
                    <p>
                      Sua visão inovadora foca em transformar a complexidade da gestão condominial
                      em processos transparentes e humanizados, priorizando o bem-estar dos
                      moradores e a valorização contínua do patrimônio familiar ou empresarial.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-100 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#062945] mb-4 flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-[#c2b28f]" /> Formação Acadêmica
                  </h3>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#c2b28f] mt-2 shrink-0" />
                      <span>Bacharelado em Administração de Empresas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#c2b28f] mt-2 shrink-0" />
                      <span>Especialização em Gestão Financeira e Planejamento Estratégico</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#c2b28f] mt-2 shrink-0" />
                      <span>Certificação Avançada em Liderança de Equipes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Carlos Model */}
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 order-2 md:order-1 space-y-6">
              <Card className="bg-[#062945] border-transparent shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <History className="w-6 h-6 text-[#c2b28f]" /> Rigor Técnico
                  </h3>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      Com uma visão inovadora e foco no rigor técnico, Carlos traz a expertise da
                      engenharia diretamente para a gestão do seu condomínio. Engenheiro certificado
                      in-house, ele garante que emissões de laudos (PIC, PPCI, AVCB) e manutenções
                      sejam realizadas com precisão milimétrica.
                    </p>
                    <p>
                      Sua atuação assegura a conformidade legal e a segurança estrutural do
                      patrimônio, conectando a precisão da engenharia com a necessidade diária de
                      manutenções preventivas e corretivas extremamente eficientes.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-100 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#062945] mb-4 flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-[#c2b28f]" /> Formação Acadêmica
                  </h3>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#c2b28f] mt-2 shrink-0" />
                      <span>Engenharia Civil com ênfase em Patologia das Construções</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#c2b28f] mt-2 shrink-0" />
                      <span>Certificação em Engenharia Diagnóstica e Manutenção Predial</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#c2b28f] mt-2 shrink-0" />
                      <span>
                        Especialista em Avaliação Estrutural e Gestão de Obras em Condomínios
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-5 order-1 md:order-2">
              <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-xl group">
                <img
                  src="https://img.usecurling.com/ppl/large?gender=male&seed=25"
                  alt="Carlos Eduardo Model"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062945] via-[#062945]/40 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex items-center gap-3 mb-2">
                    <HardHat className="text-[#c2b28f] w-5 h-5" />
                    <span className="text-[#c2b28f] tracking-widest uppercase text-xs font-bold">
                      Co-Fundador
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-1">Carlos Eduardo Model</h2>
                  <p className="text-[#c2b28f] font-mono text-sm tracking-wider">
                    CREA/PR 222741/D
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Shot */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://img.usecurling.com/p/1920/600?q=business%20team%20luxury%20office&color=black')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-[#062945]/90" />
        <div className="relative z-10 text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Apoiados por uma equipe de excelência
          </h2>
          <p className="text-[#c2b28f] tracking-widest uppercase text-sm font-semibold">
            Prontos para atender seu condomínio
          </p>
        </div>
      </section>
    </div>
  )
}
