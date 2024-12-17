import { useState } from "react";
import { Scale, Menu } from "lucide-react";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Controla a visibilidade do menu

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Alterna o estado do menu

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-[#003366]" />
            <span className="text-2xl font-serif text-[#003366] font-semibold">
              Jurídico
            </span>
          </div>

          {/* Menu para telas grandes */}
          <nav className="hidden md:flex space-x-8">
            {[
              "Início",
              "Sobre",
              "Áreas de Atuação",
              "Depoimentos",
              "Contato",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-[#003366] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          <button className="hidden md:block bg-[#003366] text-white px-6 py-2 rounded hover:bg-[#002244] transition-colors duration-200">
            Agende uma Consulta
          </button>

          {/* Ícone de Menu para telas pequenas */}
          <button className="md:hidden text-gray-700" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Menu para telas pequenas */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-md p-4 absolute top-20 left-0 w-full">
            <nav className="flex flex-col space-y-4">
              {[
                "Início",
                "Sobre",
                "Áreas de Atuação",
                "Depoimentos",
                "Contato",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-[#003366] transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
