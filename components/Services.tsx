
import React from 'react';

interface ServiceItem {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: 'Interface Design (UI)',
      price: 'R$ 2.500',
      description: 'Design de interfaces focado em usabilidade empresarial e conversão corporativa.',
      features: ['Design Systems', 'Prototipagem Alta Fidelidade', 'Auditoria UX', 'Mobile First']
    },
    {
      title: 'Corporate Systems',
      price: 'R$ 8.000',
      description: 'Desenvolvimento de sistemas internos, ERPs customizados e plataformas SaaS.',
      features: ['Arquitetura Escalável', 'Segurança Bancária', 'Integrações API', 'Cloud Infrastructure'],
      popular: true
    },
    {
      title: 'Tech Advisory',
      price: 'R$ 350/h',
      description: 'Consultoria técnica para empresas que buscam modernizar sua stack tecnológica.',
      features: ['Performance Tuning', 'Code Review', 'Migração de Legacy', 'DevOps Strategy']
    }
  ];

  const handleWhatsApp = (serviceName: string) => {
    const message = encodeURIComponent(`Olá Caio! Gostaria de discutir um projeto para: ${serviceName}`);
    window.open(`https://wa.me/5500000000000?text=${message}`, '_blank');
  };

  return (
    <section id="services" className="space-y-20">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white uppercase">Nossas <span className="text-slate-500">Soluções</span></h2>
        <p className="text-slate-400 max-w-xl mx-auto font-normal text-lg">Entregas de alto valor agregado com foco em escalabilidade e retorno sobre investimento.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`glass p-12 rounded-sm flex flex-col justify-between border-white/5 relative transition-all group ${service.popular ? 'border-white/20 bg-white/[0.02]' : ''}`}
          >
            {service.popular && (
              <span className="absolute -top-3 left-10 px-4 py-1.5 bg-white text-black text-[9px] font-bold uppercase tracking-[0.2em]">
                Standard Solution
              </span>
            )}
            
            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight text-white">{service.title}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-white">{service.price}</span>
                  <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{service.price.includes('/h') ? '' : 'base'}</span>
                </div>
              </div>

              <p className="text-slate-500 text-sm leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-4 pt-4">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 bg-white opacity-20"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button 
              onClick={() => handleWhatsApp(service.title)}
              className={`mt-12 w-full py-5 rounded-sm font-bold text-[10px] uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 ${
                service.popular 
                ? 'bg-white text-black hover:bg-slate-200' 
                : 'border border-white/10 text-white hover:bg-white/5'
              }`}
            >
              Consultar Viabilidade
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
