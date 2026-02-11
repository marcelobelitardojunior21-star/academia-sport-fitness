
import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

interface FooterProps {
  onNavigate: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          <div className="lg:col-span-1 space-y-6">
             <button 
              onClick={() => onNavigate('home')}
              className="text-left text-4xl font-black italic tracking-tighter leading-none flex flex-col"
            >
              <div>
                <span className="text-red-600">SPORT</span>
                <span>FITNESS</span>
              </div>
              <span className="block text-[10px] tracking-[0.4em] mt-2 opacity-50 font-bold uppercase">MUSCULAÇÃO E PILATES</span>
            </button>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Transformando o cenário fitness desde 2014 com excelência, técnica e resultados comprovados.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-8 text-gray-400">Navegação</h4>
            <ul className="space-y-4">
              <li><button onClick={() => onNavigate('home')} className="text-xs font-bold uppercase tracking-widest hover:text-red-600 transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('sobre')} className="text-xs font-bold uppercase tracking-widest hover:text-red-600 transition-colors">Sobre</button></li>
              <li><button onClick={() => onNavigate('modalidades')} className="text-xs font-bold uppercase tracking-widest hover:text-red-600 transition-colors">Modalidades</button></li>
              <li><button onClick={() => onNavigate('planos')} className="text-xs font-bold uppercase tracking-widest hover:text-red-600 transition-colors">Planos</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-8 text-gray-400">Suporte</h4>
            <ul className="space-y-4">
              <li><button onClick={() => onNavigate('contato')} className="text-xs font-bold uppercase tracking-widest hover:text-red-600 transition-colors">Fale Conosco</button></li>
              <li><button className="text-xs font-bold uppercase tracking-widest hover:text-red-600 transition-colors cursor-default opacity-50">Privacidade</button></li>
              <li><button className="text-xs font-bold uppercase tracking-widest hover:text-red-600 transition-colors cursor-default opacity-50">Termos</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-8 text-gray-400">Siga-nos</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/sportfitness.lorena/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/5 p-3 rounded-sm hover:bg-red-600 hover:text-white transition-all border border-white/10"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/sportfitness.lorena/?ref=NONE_xav_ig_profile_page_web#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/5 p-3 rounded-sm hover:bg-red-600 hover:text-white transition-all border border-white/10"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600">
            © 2024 SPORTFITNESS. Todos os direitos reservados.
          </p>
          <div className="flex space-x-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600 cursor-default">Privacidade</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600 cursor-default">Termos de Uso</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
