
import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onNavigate: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode, onNavigate }) => {
  const whatsappUrl = "https://wa.me/5512978110537";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => onNavigate('home')}
              className="text-left text-3xl font-black italic tracking-tighter leading-none flex flex-col"
            >
              <div>
                <span className="text-red-600">SPORT</span>
                <span className="text-gray-900 dark:text-white">FITNESS</span>
              </div>
              <span className="text-gray-400 block text-[9px] tracking-[0.3em] font-bold uppercase mt-1">MUSCULAÇÃO E PILATES</span>
            </button>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => onNavigate('home')} className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100 hover:text-red-600 dark:hover:text-red-500 transition-colors">Home</button>
            <button onClick={() => onNavigate('sobre')} className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100 hover:text-red-600 dark:hover:text-red-500 transition-colors">Sobre</button>
            <button onClick={() => onNavigate('modalidades')} className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100 hover:text-red-600 dark:hover:text-red-500 transition-colors">Modalidades</button>
            <button onClick={() => onNavigate('planos')} className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100 hover:text-red-600 dark:hover:text-red-500 transition-colors">Planos</button>
            <button onClick={() => onNavigate('contato')} className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100 hover:text-red-600 dark:hover:text-red-500 transition-colors">Contato</button>
            
            <button 
              onClick={toggleDarkMode}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 transition-all"
              aria-label="Alternar modo escuro"
            >
              {isDarkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} />}
            </button>
            
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-6 py-2.5 rounded-sm text-xs font-black uppercase tracking-widest hover:bg-red-700 transition-all shadow-md text-center"
            >
              Agende uma Aula
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
