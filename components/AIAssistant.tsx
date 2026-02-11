
import React, { useState } from 'react';
import { Bot, X, Sparkles, Send, Loader2 } from 'lucide-react';
import { getFitnessRecommendation } from '../services/geminiService';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [goal, setGoal] = useState('');
  const [frequency, setFrequency] = useState('3');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<{
    summary: string;
    weeklySchedule: { day: string; activity: string }[];
    tip: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!goal) return;
    
    setLoading(true);
    const result = await getFitnessRecommendation(goal, frequency);
    setRecommendation(result);
    setLoading(false);
  };

  return (
    <>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-50 bg-black text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center border border-white/10"
      >
        <Bot size={24} />
      </button>

      {/* Assistant Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg rounded-sm shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black"
            >
              <X size={24} />
            </button>

            <div className="p-8 border-b border-gray-100 flex items-center space-x-4">
              <div className="bg-red-600 p-3 rounded-sm text-white">
                <Bot size={24} />
              </div>
              <div>
                <h3 className="font-black italic uppercase text-xl">Assistente <span className="text-red-600">SPORTFITNESS</span></h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Planejamento Inteligente</p>
              </div>
            </div>

            <div className="p-8 max-h-[70vh] overflow-y-auto">
              {!recommendation ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <p className="text-gray-600 text-sm">
                    Olá! Sou o assistente virtual da <b>SPORTFITNESS</b>. Me conte seu objetivo e eu criarei um cronograma de performance para você.
                  </p>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest">Qual seu principal objetivo?</label>
                    <input 
                      type="text"
                      placeholder="Ex: Ganho de Massa, Flexibilidade..."
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-red-600 transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest">Frequência Semanal</label>
                    <select 
                      value={frequency}
                      onChange={(e) => setFrequency(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-red-600 transition-colors"
                    >
                      <option value="2">2 vezes</option>
                      <option value="3">3 vezes</option>
                      <option value="4">4 vezes</option>
                      <option value="5">Diário</option>
                    </select>
                  </div>

                  <button 
                    disabled={loading}
                    className="w-full bg-red-600 text-white font-black uppercase tracking-widest py-4 flex items-center justify-center hover:bg-red-700 transition-all disabled:opacity-50"
                  >
                    {loading ? <Loader2 size={18} className="animate-spin" /> : <>GERAR PLANO AGORA <Sparkles size={18} className="ml-2" /></>}
                  </button>
                </form>
              ) : (
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-sm italic text-gray-700 border-l-4 border-red-600 text-sm">
                    {recommendation.summary}
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-red-600">Sugestão de Cronograma</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {recommendation.weeklySchedule.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center p-3 border-b border-gray-100 last:border-0 text-sm">
                          <span className="font-black uppercase text-xs">{item.day}</span>
                          <span className="text-gray-600">{item.activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-black text-white rounded-sm space-y-2">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-red-600">Foco SPORTFITNESS</h4>
                    <p className="text-xs italic leading-relaxed">{recommendation.tip}</p>
                  </div>

                  <button 
                    onClick={() => {
                      setRecommendation(null);
                      setGoal('');
                    }}
                    className="w-full py-4 text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-red-600 transition-colors"
                  >
                    Nova Consulta
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
