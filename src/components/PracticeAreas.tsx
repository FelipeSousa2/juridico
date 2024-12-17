import { Briefcase, Scale, Building, Users, Home, FileText } from 'lucide-react';


const areas = [
  {
    icon: Building,
    title: 'Direito Empresarial',
    description: 'Assessoria jurídica completa para empresas de todos os portes.',
  },
  {
    icon: Users,
    title: 'Direito Trabalhista',
    description: 'Proteção dos direitos e interesses nas relações de trabalho.',
  },
  {
    icon: Scale,
    title: 'Direito Civil',
    description: 'Suporte jurídico em questões contratuais e responsabilidade civil.',
  },
  {
    icon: Home,
    title: 'Direito Imobiliário',
    description: 'Assessoria em transações imobiliárias e questões relacionadas.',
  },
  {
    icon: Briefcase,
    title: 'Direito Tributário',
    description: 'Planejamento tributário e defesa em processos administrativos.',
  },
  {
    icon: FileText,
    title: 'Direito Contratual',
    description: 'Elaboração e análise de contratos comerciais e civis.',
  },
];

const PracticeAreas = () => {
  return (
    <section id="areas" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold text-[#003366]">Áreas de Atuação</h2>
          <div className="mt-2 h-1 w-20 bg-[#C5A900] mx-auto"></div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <Icon className="h-10 w-10 text-[#003366]" />
              <h3 className="mt-4 text-xl font-semibold text-[#003366]">{title}</h3>
              <p className="mt-2 text-gray-600">{description}</p>
              <button className="mt-4 text-[#003366] font-semibold hover:text-[#002244] transition-colors duration-200">
                Saiba mais →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;