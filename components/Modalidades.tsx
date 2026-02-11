
import React from 'react';

const Modalidades: React.FC = () => {
  const items = [
    {
      title: "Musculação",
      description: "Hipertrofia, definição muscular e força extrema com acompanhamento técnico especializado.",
      imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1470"
    },
    {
      title: "Pilates",
      description: "Correção postural, flexibilidade e fortalecimento do core em um ambiente focado e exclusivo.",
      imageUrl: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=1470"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="text-sm font-black text-red-600 uppercase tracking-[0.2em]">Nossas Modalidades</span>
          <h2 className="text-4xl md:text-5xl font-black italic text-gray-900 dark:text-white uppercase">
            Escolha o seu <span className="text-red-600">Desafio</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-sm bg-black h-[450px] shadow-xl">
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700"
              />
              <div className="absolute inset-0 p-10 flex flex-col justify-end text-white bg-gradient-to-t from-black via-black/20 to-transparent">
                <h3 className="text-4xl font-black italic uppercase mb-4 tracking-tighter">{item.title}</h3>
                <p className="text-gray-300 text-sm max-w-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modalidades;
