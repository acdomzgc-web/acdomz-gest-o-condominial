import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 border border-primary flex items-center justify-center rotate-45">
                <span className="font-serif text-primary -rotate-45">A</span>
              </div>
              <span className="font-serif text-xl tracking-widest font-bold uppercase">
                ACDOM<span className="text-primary">Z</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Gestão Condominial Moderna e Humanizada de A a Z. Elevando o padrão do seu condomínio
              com excelência técnica e administrativa.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-white">Links Rápidos</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link to="/sobre" className="hover:text-primary transition-colors">
                  Nossa Filosofia
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="hover:text-primary transition-colors">
                  Soluções
                </Link>
              </li>
              <li>
                <Link to="/fundadores" className="hover:text-primary transition-colors">
                  Liderança
                </Link>
              </li>
              <li>
                <Link to="/depoimentos" className="hover:text-primary transition-colors">
                  Vozes da Excelência
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-white">Serviços</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Sindicatura Profissional Curitiba</li>
              <li>Laudos de Engenharia Condomínios</li>
              <li>Gestão Financeira Transparente</li>
              <li>Manutenção Predial Preventiva</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-white">Contato</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Rua Oscar Borges de Macedo Ribas 135
                  <br />
                  Curitiba, PR
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>contato@acdomz.com.br</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>(41) 99999-9999</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} ACDOMZ Gestão Condominial. Todos os direitos
            reservados.
          </p>
          <p className="sr-only">
            Especialistas em Síndico Profissional Curitiba, Laudos engenharia condomínios Curitiba e
            Gestão condominial Curitiba de alto padrão.
          </p>
        </div>
      </div>
    </footer>
  )
}
