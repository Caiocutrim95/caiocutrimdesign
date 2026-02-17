
import React from 'react';

interface MockupData {
  brandName: string;
  primaryColor: string;
  accentColor: string;
  heroTitle: string;
  heroSubtitle: string;
  sections: Array<{ title: string; description: string; icon: string }>;
  ctaText: string;
  copySnippet: string;
}

const MockupPreview: React.FC<{ data: MockupData; onBack: () => void }> = ({ data, onBack }) => {
  // Impedir seleção e context menu para proteção de código
  const handleContextMenu = (e: React.MouseEvent) => e.preventDefault();

  return (
    <div 
      className="fixed inset-0 z-[100] bg-[#020617] overflow-y-auto select-none"
      onContextMenu={handleContextMenu}
    >
      {/* Overlay de Proteção e Marca D'água */}
      <div className="fixed inset-0 pointer-events-none z-[110] overflow-hidden opacity-[0.03] flex flex-wrap gap-20 items-center justify-center rotate-[-30deg]">
        {Array.from({ length: 50 }).map((_, i) => (
          <span key={i} className="text-white font-black text-4xl whitespace-nowrap">PREVIEW PROTEGIDA - CAIO CUTRIM</span>
        ))}
      </div>

      {/* Barra de Ferramentas da Preview */}
      <div className="sticky top-0 z-[120] glass-panel border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Simulação de Ambiente Real • Modo Somente Leitura</span>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={onBack}
            className="px-6 py-2 rounded-xl border border-white/10 text-[10px] font-black uppercase text-white hover:bg-white/5 transition-all"
          >
            Ajustar Prompt
          </button>
          <button 
            onClick={() => window.open(`https://wa.me/98984629959?text=Gostei da prévia do site para ${data.brandName}! Quero contratar o desenvolvimento real.`, '_blank')}
            className="px-6 py-2 rounded-xl vibrant-bg text-white text-[10px] font-black uppercase shadow-lg hover:scale-105 transition-all"
          >
            Solicitar Versão Final
          </button>
        </div>
      </div>

      {/* Renderização do Site Simulado */}
      <div className="relative z-[105] min-h-screen font-sans text-slate-200" style={{ backgroundColor: '#050810' }}>
        {/* Hero Simulado */}
        <section className="py-32 px-6 text-center space-y-8 relative overflow-hidden">
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 blur-[100px]"
            style={{ background: `radial-gradient(circle, ${data.primaryColor} 0%, transparent 70%)` }}
          ></div>
          <div className="relative z-10 space-y-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-black uppercase tracking-widest" style={{ color: data.primaryColor }}>{data.brandName}</h1>
            <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-none">{data.heroTitle}</h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">{data.heroSubtitle}</p>
            <button className="px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest text-white shadow-2xl" style={{ backgroundColor: data.primaryColor }}>
              {data.ctaText}
            </button>
          </div>
        </section>

        {/* Seções Simuladas */}
        <section className="py-24 px-6 container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.sections.map((s, i) => (
              <div key={i} className="p-10 rounded-[32px] bg-white/[0.03] border border-white/5 space-y-6 hover:border-white/20 transition-all">
                <div className="text-4xl">{s.icon}</div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Copy Section */}
        <section className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-3xl mx-auto text-center space-y-10">
            <h4 className="text-indigo-400 font-black uppercase tracking-[0.3em] text-[10px]">Posicionamento Estratégico</h4>
            <blockquote className="text-3xl md:text-4xl font-light italic text-slate-300 leading-snug">
              "{data.copySnippet}"
            </blockquote>
          </div>
        </section>

        {/* Footer Simulado */}
        <footer className="py-20 border-t border-white/5 text-center">
          <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">
            © 2024 {data.brandName} • Projeto Desenhado por Caio Cutrim IA Engine
          </p>
        </footer>
      </div>

      {/* Banner de Aviso de Bloqueio */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[130] px-8 py-3 glass-panel rounded-full border-red-500/20 text-red-400 text-[9px] font-black uppercase tracking-[0.2em] shadow-2xl flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
        Acesso ao código-fonte bloqueado nesta prévia
      </div>
    </div>
  );
};

export default MockupPreview;
