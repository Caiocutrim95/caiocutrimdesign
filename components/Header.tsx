
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-6 left-1/2 -translate-x-1/2 z-[80] transition-all duration-500 w-[90%] max-w-5xl`}>
      <div className={`cartoon-card bg-slate-900/90 backdrop-blur-xl py-3 px-8 flex items-center justify-between ${scrolled ? 'scale-95' : 'scale-100'}`}>
        <div className="flex items-center gap-4 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          {/* Novo Ícone de Logo Estilizado */}
          <div className="relative logo-animate">
            <div className="w-12 h-12 bg-indigo-600 rounded-2xl border-4 border-black shadow-[4px_4px_0px_#000] flex items-center justify-center logo-spin overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <svg className="w-8 h-8 text-[#adff00] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 8L4 12L8 16M16 8L20 12L16 16M13.5 6L10.5 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="absolute bottom-0 w-full h-1 bg-[#adff00] opacity-30 animate-pulse"></div>
            </div>
            {/* Elemento de Aura Energética */}
            <div className="absolute -inset-1 bg-indigo-500/20 rounded-2xl blur-sm -z-10 group-hover:bg-indigo-500/40 transition-all"></div>
          </div>

          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter text-white uppercase leading-none">
              Caio <span className="text-[#adff00]">Cutrim</span>
            </span>
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-[0.2em] mt-0.5">Fullstack Architect</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'Poderes', href: '#skills' },
            { label: 'Packs', href: '#professional-plans' },
            { label: 'Cases', href: '#cases' }
          ].map((item) => (
            <a 
              key={item.label}
              href={item.href} 
              className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[#adff00] hover:scale-110 transition-all relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#adff00] border border-black transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <a 
          href="https://wa.me/98984629959" 
          target="_blank" 
          className="cartoon-btn bg-[#adff00] text-black px-6 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-2"
        >
          <span>Zap Direto</span>
          <span className="animate-bounce">🚀</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
