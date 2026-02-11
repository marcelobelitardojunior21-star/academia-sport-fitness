
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Ricardo Mendes",
      role: "Aluno há 2 anos",
      content: "Melhor studio da região. Os instrutores de pilates são super atenciosos e o ambiente da musculação é excelente.",
      initials: "RM",
      rating: 5
    },
    {
      name: "Amanda Silva",
      role: "Aluna há 8 meses",
      content: "Transformei meu corpo em 6 meses com o plano trimestral. O acompanhamento personalizado faz toda a diferença.",
      initials: "AS",
      rating: 5
    },
    {
      name: "Felipe Oliveira",
      role: "Aluno há 1 ano",
      content: "Ambiente limpo, aparelhos novos e equipe nota 10. Recomendo pra quem busca qualidade de vida real.",
      initials: "FO",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black italic uppercase leading-tight">
            O que nossos <span className="text-red-600">Atletas</span> dizem
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white/5 p-8 rounded-sm relative border border-white/10 hover:border-red-600/50 transition-colors group">
              <Quote className="absolute top-4 left-4 text-red-600 opacity-20 group-hover:opacity-50 transition-opacity" size={48} />
              
              <div className="relative z-10">
                <div className="flex space-x-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#E52E2E" className="text-red-600" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic mb-8 leading-relaxed">
                  "{t.content}"
                </p>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-sm bg-red-600 flex items-center justify-center font-black text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-xs tracking-wider">{t.name}</h4>
                    <span className="text-[10px] text-gray-500 uppercase font-bold">{t.role}</span>
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
