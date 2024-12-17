import { Scale, Facebook, Instagram, Linkedin } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-[#003366] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <Scale className="h-8 w-8" />
              <span className="text-2xl font-serif font-semibold">Jurídico</span>
            </div>
            <p className="mt-4 text-gray-300">
              Excelência e dedicação em serviços jurídicos há mais de 20 anos.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {['Início', 'Sobre', 'Áreas de Atuação', 'Depoimentos', 'Contato'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Áreas de Atuação</h3>
            <ul className="space-y-2">
              {[
                'Direito Empresarial',
                'Direito Trabalhista',
                'Direito Civil',
                'Direito Imobiliário',
                'Direito Tributário',
              ].map((area) => (
                <li key={area}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300 transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors duration-200">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Escritório Jurídico. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;