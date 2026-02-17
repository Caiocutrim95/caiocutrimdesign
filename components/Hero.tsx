
import React from 'react';

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
      <div className="relative z-10 max-w-5xl space-y-8">
        <div className="floating inline-block px-4 py-2 bg-indigo-500 text-white border-2 border-black rounded-full font-black text-[10px] uppercase tracking-[0.2em] shadow-[4px_4px_0px_#000]">
          Estúdio Criativo Digital v3.0
        </div>
        
        <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter leading-[0.85] text-white uppercase reveal">
          CÓDIGO QUE <br />
          <span className="text-[#adff00] stroke-black" style={{ WebkitTextStroke: '2px black' }}>SALTA</span> DA TELA
        </h1>
        
        <p className="text-slate-400 text-lg md:text-2xl max-w-2xl mx-auto font-medium leading-relaxed reveal">
          Criamos interfaces tão incríveis que seu cliente vai querer tocar nelas. 
          Performance de foguete com visual de outro planeta. 🪐
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 reveal">
          <button 
            onClick={onContactClick}
            className="cartoon-btn bg-[#ff007a] text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:scale-110 active:scale-95 transition-all"
          >
            Ver Meus Planos 🔥
          </button>
          <a 
            href="#cases"
            className="cartoon-btn bg-white text-black px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:scale-110 active:scale-95 transition-all"
          >
            Explorar Cases 🎨
          </a>
        </div>
      </div>
      
      {/* Decorative cartoon elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-yellow-400 border-4 border-black rounded-full floating delay-100 hidden lg:block shadow-[6px_6px_0px_#000]"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-cyan-400 border-4 border-black rotate-12 floating delay-500 hidden lg:block shadow-[6px_6px_0px_#000]"></div>
    </section>
  );
};

export default Hero;
