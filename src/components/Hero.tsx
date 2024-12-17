import { ArrowRight } from 'lucide-react';


const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 flex items-center min-h-screen">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-serif text-white font-bold leading-tight">
            Confiança, Comprometimento e Resultados Jurídicos
          </h1>
          <p className="mt-6 text-xl text-gray-200">
            Há mais de 20 anos defendendo seus direitos com excelência e dedicação
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="bg-[#003366] text-white px-8 py-3 rounded flex items-center justify-center hover:bg-[#002244] transition-colors duration-200">
              Agende uma Consulta
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded hover:bg-white/10 transition-colors duration-200">
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;