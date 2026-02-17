
import React from 'react';

const Skills: React.FC = () => {
  const stack = [
    { name: 'Front-End', level: '95%', color: 'bg-[#adff00]', icon: '✨' },
    { name: 'Back-End', level: '90%', color: 'bg-[#ff007a]', icon: '🛠️' },
    { name: 'UX Strategy', level: '98%', color: 'bg-[#6366f1]', icon: '🧠' },
    { name: 'Motion Design', level: '85%', color: 'bg-yellow-400', icon: '🏃' },
    { name: 'Cloud Hub', level: '88%', color: 'bg-cyan-400', icon: '☁️' },
    { name: 'Security', level: '92%', color: 'bg-purple-500', icon: '🛡️' },
  ];

  return (
    <section id="skills" className="py-24 space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-black tracking-tighter text-white uppercase reveal">Poderes <span className="text-indigo-500 italic">Especiais</span></h2>
        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs reveal">Nível de mestre em cada pixel</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 container mx-auto px-6">
        {stack.map((item) => (
          <div key={item.name} className="cartoon-card p-8 group">
            <div className="flex items-center justify-between mb-6">
              <div className="text-5xl group-hover:scale-125 transition-transform">{item.icon}</div>
              <span className="text-xl font-black text-white">{item.level}</span>
            </div>
            <h3 className="text-xl font-black text-white mb-6 uppercase tracking-tight">{item.name}</h3>
            <div className="w-full h-6 bg-black border-2 border-white/10 rounded-full overflow-hidden p-1">
              <div 
                className={`h-full ${item.color} rounded-full transition-all duration-[2000ms] border-2 border-black`} 
                style={{ width: item.level }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
