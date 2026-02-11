
import React from 'react';
import { Check } from 'lucide-react';

const Planos: React.FC = () => {
  const plans = [
    {
      name: "Mensal",
      price: 149,
      period: "/mês",
      features: ["Musculação Livre", "Avaliação Mensal", "Pilates Sob Consulta"],
      isPopular: false
    },
    {
      name: "Trimestral",
      price: 129,
      period: "/mês",
      features: ["Musculação Livre", "Avaliação Mensal", "Acompanhamento Personal"],
      isPopular: true
    },
    {
      name: "Semestral",
      price: 109,
      period: "/mês",
      features: ["Musculação Livre", "Avaliação Quinzenal", "Nutricionista Incluso"],
      isPopular: false
    }
  ];

  return (
    <section id="planos" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="text-sm font-black text-red-600 uppercase tracking-[0.2em]">Investimento</span>
          <h2 className="text-4xl md:text-5xl font-black italic text-gray-900 dark:text-white uppercase">
            Planos de <span className="text-red-600">Performance</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col p-10 border border-gray-100 dark:border-gray-800 transition-all duration-300 ${
                plan.isPopular 
                ? 'bg-red-600 text-white shadow-2xl scale-105 z-10' 
                : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2">
                  Mais Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-sm font-black uppercase tracking-widest mb-6 ${plan.isPopular ? 'opacity-90' : 'opacity-60'}`}>{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-2xl font-black mr-1">R$</span>
                  <span className="text-6xl font-black italic">{plan.price}</span>
                  <span className="text-xs font-bold uppercase ml-2 opacity-60">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center text-sm font-bold uppercase tracking-tight">
                    <Check size={16} className={`mr-3 ${plan.isPopular ? 'text-white' : 'text-red-600'}`} />
                    <span className={plan.isPopular ? 'opacity-90' : 'text-gray-600 dark:text-gray-300'}>{feature}</span>
                  </li>
                ))}
                {plan.name === "Mensal" && (
                   <li className="flex items-center text-sm font-bold uppercase tracking-tight opacity-40 italic">
                     <Check size={16} className="mr-3" />
                     Pilates Sob Consulta
                   </li>
                )}
              </ul>
              
              <button 
                className={`w-full py-4 rounded-sm font-black uppercase tracking-widest text-xs transition-all border ${
                  plan.isPopular 
                  ? 'bg-black text-white border-black hover:bg-gray-900' 
                  : 'bg-transparent text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 hover:border-red-600 hover:text-red-600'
                }`}
              >
                Assinar Agora
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Planos;
