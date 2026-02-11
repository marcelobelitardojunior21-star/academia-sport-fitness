
import React from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  onNavigate: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const whatsappUrl = "https://wa.me/5512978110537";

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2070" 
          alt="Gym background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-6xl md:text-9xl font-black italic text-white leading-none mb-6 tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000">
          DOMINE O SEU <br />
          <span className="text-red-600">POTENCIAL.</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium">
          Bem-vindo à <span className="text-white font-bold italic">SPORTFITNESS</span>. A elite da musculação e o equilíbrio do Pilates em um só lugar.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-red-600 text-white px-8 py-4 rounded-sm font-black uppercase tracking-widest flex items-center justify-center group hover:bg-red-700 transition-all shadow-lg shadow-red-600/20"
          >
            COMEÇAR AGORA
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <button 
            onClick={() => onNavigate('modalidades')}
            className="w-full sm:w-auto bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-sm font-black uppercase tracking-widest hover:bg-white/10 transition-all text-center"
          >
            NOSSO MÉTODO
          </button>
        </div>
      </div>
      
      <button 
        onClick={() => onNavigate('sobre')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white animate-bounce opacity-50 hover:opacity-100 transition-opacity"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
