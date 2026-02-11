
import React from 'react';
import { MapPin, Clock, Phone, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const whatsappNumber = "5512978110537";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-12">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black italic text-gray-900 dark:text-white uppercase leading-tight">
              ONDE <span className="text-red-600">ESTAMOS</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-medium">
              Venha conhecer nossa estrutura premium. Estamos localizados no coração de Lorena, prontos para transformar sua rotina.
            </p>
          </div>

          <div className="w-full space-y-8">
            {/* Mapa Expandido */}
            <div className="h-[500px] md:h-[600px] bg-gray-100 dark:bg-gray-800 rounded-sm overflow-hidden relative shadow-2xl border border-gray-100 dark:border-gray-800">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.0583711915685!2d-45.12285628503964!3d-22.726053385104866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ccc4e339f993d3%3A0xc3f980753a4794ed!2sRua%20da%20Usina%2C%2051%20-%20Centro%2C%20Lorena%20-%20SP%2C%2012600-000!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
                className="w-full h-full border-0 grayscale dark:invert-[0.9] dark:hue-rotate-180 transition-all duration-700" 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
               ></iframe>
               
               <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                 <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-6 shadow-2xl rounded-sm flex flex-col sm:flex-row gap-8 pointer-events-auto border border-gray-100 dark:border-gray-800 transition-colors max-w-4xl mx-auto">
                    <div className="flex-1 space-y-2">
                       <div className="flex items-center text-red-600 space-x-2">
                         <MapPin size={18} />
                         <span className="text-[10px] font-black uppercase tracking-widest">Localização</span>
                       </div>
                       <p className="text-sm font-bold text-gray-900 dark:text-gray-100 uppercase tracking-tighter">Rua da Usina, 51 - Centro, Lorena/SP</p>
                    </div>
                    <div className="flex-1 space-y-2 border-t sm:border-t-0 sm:border-l border-gray-200 dark:border-gray-700 pt-4 sm:pt-0 sm:pl-8">
                       <div className="flex items-center text-red-600 space-x-2">
                         <Clock size={18} />
                         <span className="text-[10px] font-black uppercase tracking-widest">Funcionamento</span>
                       </div>
                       <p className="text-sm font-bold text-gray-900 dark:text-gray-100 uppercase tracking-tighter">Segunda a Sexta: 06h às 22h<br/>Sábados: 08h às 14h</p>
                    </div>
                 </div>
               </div>
            </div>
            
            {/* Card de Contato Abaixo do Mapa */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 dark:bg-gray-800 p-8 md:p-12 rounded-sm border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row items-center justify-between transition-colors gap-8 shadow-lg">
                <div className="text-center md:text-left space-y-2">
                  <h4 className="text-[12px] font-black uppercase tracking-[0.2em] text-red-600">Dúvidas ou Matrículas?</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-4">Clique no ícone ou no número para iniciar uma conversa no WhatsApp.</p>
                  <a 
                    href={whatsappUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-3xl md:text-4xl font-black italic text-gray-900 dark:text-white hover:text-red-600 transition-colors block tracking-tighter"
                  >
                    +55 12 97811-0537
                  </a>
                </div>
                
                <div className="flex items-center space-x-4">
                  <a 
                    href={whatsappUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-red-600 text-white p-6 rounded-sm hover:scale-105 active:scale-95 transition-all shadow-xl shadow-red-600/30 flex items-center justify-center group"
                    title="Conversar no WhatsApp"
                  >
                    <MessageSquare size={32} className="group-hover:rotate-12 transition-transform" />
                  </a>
                  <a 
                    href={`tel:${whatsappNumber}`}
                    className="bg-black dark:bg-white text-white dark:text-black p-6 rounded-sm hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center justify-center group"
                    title="Ligar Agora"
                  >
                    <Phone size={32} className="group-hover:shake transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
