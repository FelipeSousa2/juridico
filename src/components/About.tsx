import { Award, Users, Building2 } from 'lucide-react';



const stats = [
  {
    icon: Award,
    value: '20+',
    label: 'Anos de Experiência',
  },
  {
    icon: Users,
    value: '1000+',
    label: 'Clientes Atendidos',
  },
  {
    icon: Building2,
    value: '95%',
    label: 'Taxa de Sucesso',
  },
];

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold text-[#003366]">Sobre o Escritório</h2>
          <div className="mt-2 h-1 w-20 bg-[#C5A900] mx-auto"></div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 leading-relaxed">
              Com mais de duas décadas de atuação, nosso escritório se destaca pela excelência
              no atendimento e comprometimento com os resultados. Nossa equipe de advogados
              altamente qualificados trabalha incansavelmente para defender os interesses de
              nossos clientes.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Acreditamos que cada caso é único e merece atenção personalizada. Por isso,
              desenvolvemos estratégias específicas para cada situação, sempre buscando as
              melhores soluções jurídicas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center">
                <Icon className="h-8 w-8 text-[#003366] mx-auto" />
                <div className="mt-4 text-3xl font-bold text-[#003366]">{value}</div>
                <div className="mt-2 text-sm text-gray-600">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;