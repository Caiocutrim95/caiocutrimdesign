
import React, { useState } from 'react';
import { generateDevFlowPreview } from '../services/geminiService';
import MockupPreview from './MockupPreview';

const DevFlowIA: React.FC = () => {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [previewData, setPreviewData] = useState<any>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState({
    profession: '',
    objective: '',
    target: '',
    style: '',
    features: [] as string[],
    details: ''
  });

  const steps = [
    { label: 'Sua Profissão', field: 'profession', placeholder: 'Ex: Arquiteto de Interiores, Médico Nutrólogo...', icon: '💼' },
    { label: 'Objetivo do Site', field: 'objective', placeholder: 'Ex: Gerar autoridade, Vendas automáticas...', icon: '🎯' },
    { label: 'Público-Alvo', field: 'target', placeholder: 'Ex: Executivos B2B, Pacientes Premium...', icon: '👥' },
    { label: 'Estilo Visual', field: 'style', options: ['Premium & Sofisticado', 'Moderno & Tech', 'Minimalista & Clean', 'Agressivo & Vendas'], icon: '🎨' },
    { label: 'Funcionalidades', field: 'features', options: ['Agendamento Online', 'Blog Estratégico', 'Área do Cliente', 'Integração WhatsApp', 'E-commerce'], icon: '🧩' },
    { label: 'Detalhes Expressivos', field: 'details', placeholder: 'Escreva algo a mais para o prompt ficar perfeito... Descreva sua visão única, cores preferidas ou diferenciais que você quer destacar.', icon: '✍️', isLarge: true }
  ];

  const handleNext = () => step < steps.length - 1 ? setStep(step + 1) : startGeneration();
  
  const startGeneration = async () => {
    setLoading(true);
    const result = await generateDevFlowPreview(formData);
    if (result) {
      setPreviewData(result);
      setShowPreview(true);
    } else {
      alert("Houve um erro na geração. Tente novamente.");
    }
    setLoading(false);
  };

  const updateField = (val: string) => {
    setFormData({ ...formData, [steps[step].field]: val });
  };

  const toggleFeature = (feat: string) => {
    const current = formData.features;
    const next = current.includes(feat) ? current.filter(f => f !== feat) : [...current, feat];
    setFormData({ ...formData, features: next });
  };

  if (showPreview && previewData) {
    return <MockupPreview data={previewData} onBack={() => setShowPreview(false)} />;
  }

  return (
    <section id="devflow" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto glass-panel rounded-[40px] border-indigo-500/20 p-8 md:p-16 relative">
          <div className="scanline"></div>
          
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
              DevFlow <span className="vibrant-gradient">IA</span>
            </h2>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">A Arquitetura Definitiva para seu Sucesso Digital</p>
          </div>

          {loading ? (
            <div className="py-20 text-center space-y-8 animate-in fade-in duration-500">
              <div className="relative w-24 h-24 mx-auto">
                <div className="absolute inset-0 border-4 border-indigo-500/20 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-black text-2xl uppercase tracking-tight">Processando sua visão...</h4>
                <p className="text-slate-500 text-[10px] tracking-[0.3em] font-bold uppercase">Construindo Protótipo Inteligente • Design System Ativo</p>
              </div>
            </div>
          ) : (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
              <div className="flex items-center gap-6 mb-12">
                <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 flex items-center justify-center text-3xl shadow-lg border border-indigo-500/30">
                  {steps[step].icon}
                </div>
                <div className="flex-grow">
                  <div className="text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-1">Passo {step + 1} de {steps.length}</div>
                  <h3 className="text-2xl font-bold text-white uppercase">{steps[step].label}</h3>
                </div>
              </div>

              {steps[step].options ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {steps[step].options.map(opt => (
                    <button 
                      key={opt}
                      onClick={() => steps[step].field === 'features' ? toggleFeature(opt) : updateField(opt)}
                      className={`p-6 rounded-2xl text-left border-2 transition-all font-bold uppercase text-[10px] tracking-widest ${
                        (steps[step].field === 'features' ? formData.features.includes(opt) : formData[steps[step].field as keyof typeof formData] === opt)
                        ? 'vibrant-bg border-white/50 text-white shadow-[0_0_30px_rgba(99,102,241,0.3)]'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:border-indigo-500/50'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              ) : steps[step].isLarge ? (
                <textarea 
                  autoFocus
                  className="w-full bg-white/5 border-2 border-white/10 rounded-3xl p-8 text-lg text-white outline-none focus:border-indigo-500 transition-all placeholder:text-slate-700 h-48 resize-none"
                  placeholder={steps[step].placeholder}
                  value={formData[steps[step].field as keyof typeof formData] as string}
                  onChange={(e) => updateField(e.target.value)}
                />
              ) : (
                <input 
                  type="text" 
                  autoFocus
                  className="w-full bg-white/5 border-2 border-white/10 rounded-3xl p-8 text-xl text-white outline-none focus:border-indigo-500 transition-all placeholder:text-slate-700"
                  placeholder={steps[step].placeholder}
                  value={formData[steps[step].field as keyof typeof formData] as string}
                  onChange={(e) => updateField(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                />
              )}

              <div className="flex justify-between items-center pt-8">
                <button 
                  onClick={() => setStep(Math.max(0, step - 1))}
                  className={`text-slate-500 font-black uppercase tracking-widest text-[10px] hover:text-white transition-colors ${step === 0 ? 'invisible' : ''}`}
                >
                  Voltar
                </button>
                <button 
                  onClick={handleNext}
                  className="vibrant-bg px-12 py-5 rounded-2xl text-white font-black uppercase tracking-[0.2em] text-[10px] shadow-xl hover:scale-105 active:scale-95 transition-all"
                >
                  {step === steps.length - 1 ? 'Gerar Meu Site com IA' : 'Próximo'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DevFlowIA;
