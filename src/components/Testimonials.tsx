import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Empresário",
    content:
      "Excelente atendimento e profissionalismo. Resolveram minha questão empresarial com eficiência e agilidade.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
  },
  {
    name: "Ana Santos",
    role: "Gerente Comercial",
    content:
      "Equipe altamente competente e dedicada. Sempre muito atenciosos e prestativos em todos os momentos.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
  },
  {
    name: "Roberto Oliveira",
    role: "Diretor Financeiro",
    content:
      "Profissionais excepcionais que nos auxiliaram em um momento crucial da empresa. Recomendo fortemente.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold text-[#003366]">
            Depoimentos
          </h2>
          <div className="mt-2 h-1 w-20 bg-[#C5A900] mx-auto"></div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center space-x-1 text-[#C5A900]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-gray-600 italic">{testimonial.content}</p>
              <div className="mt-6 flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <div className="font-semibold text-[#003366]">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
