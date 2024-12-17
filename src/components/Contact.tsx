import { Phone, Mail, MapPin } from 'lucide-react';


const Contact = () => {
  return (
    <section id="contato" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold text-[#003366]">Entre em Contato</h2>
          <div className="mt-2 h-1 w-20 bg-[#C5A900] mx-auto"></div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-[#003366]">Informações de Contato</h3>
            <div className="mt-6 space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-[#003366]" />
                <div>
                  <div className="font-medium">Telefone</div>
                  <div className="text-gray-600">(11) 9999-9999</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-[#003366]" />
                <div>
                  <div className="font-medium">E-mail</div>
                  <div className="text-gray-600">contato@escritorio.com.br</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-[#003366]" />
                <div>
                  <div className="font-medium">Endereço</div>
                  <div className="text-gray-600">
                    Av. Paulista, 1000 - Bela Vista<br />
                    São Paulo - SP, 01310-100
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nome Completo
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring focus:ring-[#003366] focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring focus:ring-[#003366] focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring focus:ring-[#003366] focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#003366] focus:ring focus:ring-[#003366] focus:ring-opacity-50"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#003366] text-white px-6 py-3 rounded hover:bg-[#002244] transition-colors duration-200"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;