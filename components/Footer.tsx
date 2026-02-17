
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-24 glass border-t border-white/10 py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-2 space-y-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 vibrant-bg rounded-2xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <span className="text-3xl font-black tracking-tighter text-white">Caio <span className="vibrant-gradient">Cutrim</span></span>
          </div>
          <p className="text-slate-400 text-lg max-w-md font-medium leading-relaxed">
            Unindo tecnologia de alto desempenho com design que converte. O parceiro ideal para profissionais que não aceitam o básico.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/caioiakal/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl glass flex items-center justify-center hover:bg-pink-600 transition-all text-slate-400 hover:text-white group border border-white/10">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://wa.me/98984629959" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl glass flex items-center justify-center hover:bg-emerald-600 transition-all text-slate-400 hover:text-white group border border-white/10">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7c.6 0 1.2.1 1.8.2"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </a>
            <a href="https://share.google/FKS45vKYUhSUVhyXA" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl glass flex items-center justify-center hover:bg-indigo-600 transition-all text-slate-400 hover:text-white group border border-white/10">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </a>
          </div>
        </div>

        <div>
            <h4 className="font-black text-white uppercase tracking-widest text-sm mb-8">Navegação</h4>
            <ul className="space-y-4 text-slate-400 font-bold">
                <li><a href="#" className="hover:text-indigo-500 transition-colors">Início</a></li>
                <li><a href="#skills" className="hover:text-indigo-500 transition-colors">Skills</a></li>
                <li><a href="#projects" className="hover:text-indigo-500 transition-colors">Cases</a></li>
                <li><a href="#professional-plans" className="hover:text-indigo-500 transition-colors">Planos</a></li>
                <li><a href="#location" className="hover:text-indigo-500 transition-colors">Localização</a></li>
            </ul>
        </div>

        <div>
            <h4 className="font-black text-white uppercase tracking-widest text-sm mb-8">Contato Oficial</h4>
            <ul className="space-y-4 text-slate-400 font-bold">
                <li className="break-all hover:text-white transition-colors">caiocutrim9@gmail.com</li>
                <li>São Luís, Maranhão - Brasil</li>
                <li className="pt-4">
                    <a href="https://wa.me/98984629959" target="_blank" className="vibrant-bg px-6 py-3 rounded-2xl text-white font-black hover:shadow-indigo-500/40 shadow-lg inline-flex items-center gap-2 transform hover:-translate-y-1 transition-all">
                        WhatsApp Oficial
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </a>
                </li>
            </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-slate-500 text-xs font-bold uppercase tracking-widest">
        <p>© 2024 Caio Cutrim - Engenharia de Software & Design</p>
      </div>
    </footer>
  );
};

export default Footer;
