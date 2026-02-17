
import React from 'react';

interface Plan {
  id: string;
  title: string;
  image: string;
  description: string;
  features: string[];
  theme: string;
  emoji: string;
  bonus: string;
}

interface ProfessionalPlansProps {
  onCustomIdeaClick?: () => void;
}

const ProfessionalPlans: React.FC<ProfessionalPlansProps> = ({ onCustomIdeaClick }) => {
  const plans: Plan[] = [
    {
      id: 'advogados',
      title: 'Advogados',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=400',
      description: 'Autoridade jurídica convertida em leads qualificados.',
      theme: 'bg-indigo-600',
      emoji: '⚖️',
      bonus: 'SEO Local OAB-Ready',
      features: [
        'Landing Page de Alta Conversão',
        'Criação de Artigos p/ Autoridade',
        'Google Maps Profissional (GMN)',
        'Integração com WhatsApp e CRM',
        'Certificado SSL e Segurança Máxima',
        'Copywriting Jurídico Persuasivo'
      ]
    },
    {
      id: 'dentistas',
      title: 'Dentistas',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=400',
      description: 'Sua clínica com o melhor sorriso e agendamento full.',
      theme: 'bg-[#ff007a]',
      emoji: '🦷',
      bonus: 'Galeria 4K Antes/Depois',
      features: [
        'Sistema de Agendamento Online',
        'Design Mobile-First p/ Pacientes',
        'SEO Local por Bairro e Cidade',
        'Página de Especialidades Pro',
        'Prova Social com Vídeos Integrados',
        'Hospedagem Turbo de Alta Velocidade'
      ]
    },
    {
      id: 'contadores',
      title: 'Contadores',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400',
      description: 'Eficiência fiscal com autoridade digital moderna.',
      theme: 'bg-[#adff00]',
      emoji: '📈',
      bonus: 'Portal de Captação PJ',
      features: [
        'Calculadoras Tributárias IA',
        'Páginas de Serviços por Nicho',
        'Automação de Leads de Consultoria',
        'Blog de Estratégia Tributária',
        'Design que Transmite Confiança',
        'E-mail Profissional Incluso'
      ]
    },
    {
      id: 'saude',
      title: 'Saúde',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400',
      description: 'Experiência humanizada e teleconsulta integrada.',
      theme: 'bg-cyan-400',
      emoji: '🏥',
      bonus: 'Link p/ Telemedicina Pro',
      features: [
        'Design Empático e Acessível',
        'Filtros de Especialidades Médicas',
        'Integração com Prontuários Online',
        'Lembretes de Consulta via Whats',
        'Segurança de Dados LGPD-Ready',
        'Carregamento em menos de 2s'
      ]
    }
  ];

  const handleAction = (plan: string) => {
    const msg = encodeURIComponent(`Olá Caio! Vi as especificações e quero ativar o Hero Pack para ${plan}. Vamos decolar!`);
    window.open(`https://wa.me/98984629959?text=${msg}`, '_blank');
  };

  return (
    <section id="professional-plans" className="py-24 space-y-20">
      <div className="text-center space-y-6">
        <h2 className="text-6xl md:text-[5.5rem] font-black text-white uppercase tracking-tighter reveal leading-none">
          Seu <span className="text-[#adff00] drop-shadow-[6px_6px_0px_rgba(0,0,0,1)]">Hero Pack</span>
        </h2>
        <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-xs reveal">O arsenal tecnológico definitivo para o seu nicho</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-8 container mx-auto">
        {plans.map((plan) => (
          <div key={plan.id} className="cartoon-card group flex flex-col h-full bg-slate-900 overflow-hidden hover:scale-105 transition-all">
            <div className="relative h-48 border-b-4 border-black">
              <img src={plan.image} alt={plan.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute top-4 left-4 bg-indigo-600 border-2 border-black px-3 py-1 rounded-full text-[9px] font-black text-white uppercase tracking-widest shadow-[3px_3px_0px_#000]">
                {plan.bonus}
              </div>
              <div className="absolute -bottom-7 right-7 w-16 h-16 bg-white rounded-2xl border-4 border-black flex items-center justify-center text-4xl shadow-[5px_5px_0px_#000] z-10 group-hover:rotate-12 transition-transform">
                {plan.emoji}
              </div>
            </div>
            
            <div className="p-8 flex-grow flex flex-col pt-12">
              <h3 className="text-4xl font-black text-white mb-2 uppercase tracking-tighter">{plan.title}</h3>
              <p className="text-slate-500 text-[10px] font-black mb-8 uppercase tracking-[0.15em] leading-relaxed h-10">{plan.description}</p>
              
              <div className="bg-black/40 p-6 rounded-[35px] border-4 border-black mb-8 text-center shadow-[8px_8px_0px_#000] group-hover:shadow-indigo-500/50 transition-all relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black text-[8px] font-black px-3 py-0.5 border-2 border-black rounded-full uppercase">Investimento</div>
                
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Taxa Única:</span>
                    <span className="text-base font-black text-white/70 line-through decoration-[#ff007a] decoration-2">R$ 1.200</span>
                    <span className="text-xl font-black text-white">R$ 599</span>
                  </div>
                  
                  <div className="w-full h-0.5 bg-white/10 rounded-full mb-4"></div>
                  
                  <span className="text-[9px] text-[#adff00] font-black uppercase tracking-[0.4em] mb-2">Assinatura Mensal</span>
                  <div className="flex items-start justify-center gap-1">
                    <span className="text-2xl font-black text-[#adff00] mt-1">R$</span>
                    <span className="text-7xl font-black text-[#adff00] leading-none tracking-tighter">229</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-4 border-b border-white/10 pb-2">Especificações Premium:</div>
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-4 text-[10px] font-black text-white/90 uppercase tracking-wider list-none group-hover:translate-x-1 transition-transform">
                    <div className="w-2 h-2 bg-indigo-500 rounded-sm border border-black shadow-[1px_1px_0px_#000]"></div>
                    {feat}
                  </li>
                ))}
              </div>

              <button 
                onClick={() => handleAction(plan.title)}
                className="cartoon-btn w-full py-5 bg-[#adff00] text-black rounded-[20px] font-black text-xs uppercase tracking-[0.3em] hover:bg-white transition-all shadow-[8px_8px_0px_#000] active:shadow-none active:translate-x-1 active:translate-y-1"
              >
                Ativar Arsenal ⚡
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 mt-20 flex justify-center">
        <div 
          onClick={onCustomIdeaClick}
          className="cartoon-card w-full max-w-5xl p-12 bg-indigo-600 flex flex-col md:flex-row items-center gap-10 group cursor-pointer hover:rotate-1 transition-transform relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12">
            <svg width="100" height="100" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
          
          <div className="w-24 h-24 bg-white rounded-[25px] border-4 border-black flex items-center justify-center text-5xl group-hover:scale-110 group-hover:-rotate-12 transition-all shadow-[8px_8px_0px_#000] z-10">
            🚀
          </div>
          
          <div className="text-center md:text-left flex-grow z-10">
            <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-2">Projeto Fora da Curva?</h3>
            <p className="text-white/80 font-black uppercase tracking-[0.2em] text-[10px]">E-commerces, SaaS, dashboards e sistemas complexos sob demanda.</p>
          </div>
          
          <div className="cartoon-btn bg-white text-black px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.25em] group-hover:bg-[#adff00] transition-colors z-10">
            Falar com Especialista
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalPlans;
