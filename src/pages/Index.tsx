import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, ShieldCheck, Building, Users, Clock } from 'lucide-react'
import logoImg from '@/assets/logo-fundo-azul-9ce9b.jpeg'

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen pt-[72px] md:pt-[92px]">
      {/* Hero Section */}
      <section className="relative bg-[#062945] text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://img.usecurling.com/p/1920/1080?q=luxury%20condominium&color=black"
            alt="Condomínio de Alto Padrão"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#062945] via-[#062945]/90 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="mb-8 inline-block p-4 bg-[#062945]/60 backdrop-blur-md rounded-xl border border-[#c2b28f]/20 shadow-2xl">
              <img
                src={logoImg}
                alt="ACDOMZ Gestão Condominial"
                className="w-[280px] md:w-[320px] h-auto object-contain rounded-lg"
              />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Excelência e <span className="text-[#c2b28f]">Exclusividade</span> na Gestão do seu
              Patrimônio
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Administração condominial premium em Curitiba. Transparência, inovação e um
              atendimento personalizado para condomínios que exigem o melhor.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                asChild
                className="bg-[#c2b28f] text-[#062945] hover:bg-[#a89b78] text-base font-semibold px-8 h-14 border-none shadow-lg"
              >
                <Link to="/contato">
                  Solicitar Proposta <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-[#c2b28f] text-[#c2b28f] hover:bg-[#c2b28f] hover:text-[#062945] text-base font-semibold px-8 h-14 bg-transparent backdrop-blur-sm"
              >
                <Link to="/servicos">Conhecer Serviços</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-[#062945] text-3xl md:text-4xl font-bold mb-4">
              Por que escolher a ACDOMZ?
            </h2>
            <p className="text-gray-600 text-lg">
              Nosso compromisso é elevar o padrão de vida no seu condomínio com uma gestão
              inteligente, presente e focada em resultados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: 'Transparência Total',
                desc: 'Acesso a todas as informações financeiras em tempo real através do nosso app exclusivo.',
              },
              {
                icon: Building,
                title: 'Manutenção Preventiva',
                desc: 'Cronograma rigoroso de manutenções para valorizar e preservar o patrimônio do condomínio.',
              },
              {
                icon: Users,
                title: 'Atendimento Premium',
                desc: 'Equipe dedicada e síndicos profissionais com vasta experiência em condomínios de alto padrão.',
              },
              {
                icon: Clock,
                title: 'Suporte 24/7',
                desc: 'Atendimento emergencial a qualquer hora do dia ou da noite para tranquilidade total dos moradores.',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#062945]/5 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7 text-[#c2b28f]" />
                </div>
                <h3 className="text-[#062945] text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-[#062945] rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://img.usecurling.com/p/1000/500?q=architecture&color=blue')] opacity-10 mix-blend-overlay object-cover w-full h-full"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Pronto para transformar a gestão do seu condomínio?
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-10">
                Agende uma reunião com nossos especialistas e descubra como a ACDOMZ pode valorizar
                o seu patrimônio com excelência, segurança e exclusividade.
              </p>
              <Button
                size="lg"
                asChild
                className="bg-[#c2b28f] text-[#062945] hover:bg-[#a89b78] text-base font-semibold px-10 h-14 border-none shadow-lg"
              >
                <Link to="/contato">Falar com um Especialista</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
