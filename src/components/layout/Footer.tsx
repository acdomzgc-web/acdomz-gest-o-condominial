import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, Instagram, Linkedin, Facebook } from 'lucide-react'
import logoImg from '@/assets/logo-fundo-azul-9ce9b.jpeg'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#062945] text-white border-t border-[#c2b28f]/20 pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block hover:opacity-90 transition-opacity">
              <img
                src={logoImg}
                alt="ACDOMZ Gestão Condominial"
                className="w-[200px] h-[60px] object-contain rounded-md"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Gestão condominial de alto padrão em Curitiba. Excelência, transparência e valorização
              do seu patrimônio com atendimento personalizado e exclusivo.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#c2b28f]/10 flex items-center justify-center text-[#c2b28f] hover:bg-[#c2b28f] hover:text-[#062945] transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-[#c2b28f]/10 flex items-center justify-center text-[#c2b28f] hover:bg-[#c2b28f] hover:text-[#062945] transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-[#c2b28f]/10 flex items-center justify-center text-[#c2b28f] hover:bg-[#c2b28f] hover:text-[#062945] transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#c2b28f] font-semibold text-lg mb-6 uppercase tracking-wider">
              Links Rápidos
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-[#c2b28f] transition-colors flex items-center gap-2 text-sm font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c2b28f]" /> Início
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className="text-gray-300 hover:text-[#c2b28f] transition-colors flex items-center gap-2 text-sm font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c2b28f]" /> Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos"
                  className="text-gray-300 hover:text-[#c2b28f] transition-colors flex items-center gap-2 text-sm font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c2b28f]" /> Serviços
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="text-gray-300 hover:text-[#c2b28f] transition-colors flex items-center gap-2 text-sm font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c2b28f]" /> Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#c2b28f] font-semibold text-lg mb-6 uppercase tracking-wider">
              Nossos Serviços
            </h3>
            <ul className="space-y-4">
              <li className="text-gray-300 flex items-center gap-2 text-sm font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c2b28f]" /> Gestão Administrativa
              </li>
              <li className="text-gray-300 flex items-center gap-2 text-sm font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c2b28f]" /> Gestão Financeira
              </li>
              <li className="text-gray-300 flex items-center gap-2 text-sm font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c2b28f]" /> Manutenção Predial
              </li>
              <li className="text-gray-300 flex items-center gap-2 text-sm font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c2b28f]" /> Assessoria Jurídica
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#c2b28f] font-semibold text-lg mb-6 uppercase tracking-wider">
              Contato
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300 text-sm font-medium">
                <MapPin className="text-[#c2b28f] shrink-0 mt-0.5" size={18} />
                <span>
                  Batel - Curitiba - PR
                  <br />
                  CEP 80000-000
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm font-medium">
                <Phone className="text-[#c2b28f] shrink-0" size={18} />
                <span>(41) 3000-0000</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm font-medium">
                <Mail className="text-[#c2b28f] shrink-0" size={18} />
                <span>contato@acdomz.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#c2b28f]/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} ACDOMZ Gestão Condominial. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-gray-400 font-medium">
            <Link to="/privacidade" className="hover:text-[#c2b28f] transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/termos" className="hover:text-[#c2b28f] transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
