
import React from 'react';
import { CheckCircle2, UserCheck, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Lado da Imagem */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
              <img 
                src="https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?auto=format&fit=crop&q=80&w=1974" 
                alt="Treinamento SportFitness" 
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
            {/* Detalhe Decorativo */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-600/10 -z-0 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-red-600/10 -z-0 rounded-full blur-2xl"></div>
          </div>
          
          {/* Lado do Texto */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="h-[2px] w-10 bg-red-600"></div>
                <span className="text-xs font-black text-red-600 uppercase tracking-[0.3em]">Nossa Essência</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black italic text-gray-900 dark:text-white uppercase leading-none tracking-tighter">
                DOMINE SUA <br />
                <span className="text-red-600">MELHOR VERSÃO</span>
              </h2>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed text-center lg:text-left font-medium">
              Na <span className="text-gray-900 dark:text-white font-bold">SPORTFITNESS</span>, acreditamos que a força e o equilíbrio caminham juntos. Nosso método integra a musculação de alta performance com a precisão clínica do Pilates para resultados duradouros.
            </p>
            
            {/* Cards Empilhados Verticalmente - Todos com o mesmo design */}
            <div className="flex flex-col space-y-6 max-w-md mx-auto lg:mx-0">
              
              {/* Item 1 */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 bg-red-50 dark:bg-red-900/20 p-4 rounded-sm">
                  <UserCheck className="text-red-600" size={24} />
                </div>
                <div>
                  <h4 className="font-black uppercase text-sm tracking-widest text-[#1a202c] dark:text-gray-100">Coaching de Elite</h4>
                  <p className="text-gray-500 text-xs mt-0.5">Acompanhamento técnico em cada repetição.</p>
                </div>
              </div>
              
              {/* Item 2 */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 bg-red-50 dark:bg-red-900/20 p-4 rounded-sm">
                  <ShieldCheck className="text-red-600" size={24} />
                </div>
                <div>
                  <h4 className="font-black uppercase text-sm tracking-widest text-[#1a202c] dark:text-gray-100">Ambiente Premium</h4>
                  <p className="text-gray-500 text-xs mt-0.5">Estrutura moderna focada na sua performance.</p>
                </div>
              </div>

              {/* Item 3 (Antes "Resultados Comprovados" com design diferente, agora padronizado) */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 bg-red-50 dark:bg-red-900/20 p-4 rounded-sm">
                  <CheckCircle2 className="text-red-600" size={24} />
                </div>
                <div>
                  <h4 className="font-black uppercase text-sm tracking-widest text-[#1a202c] dark:text-gray-100">Resultados Comprovados</h4>
                  <p className="text-gray-500 text-xs mt-0.5">Metodologia validada por centenas de alunos.</p>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
