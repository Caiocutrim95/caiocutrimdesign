
import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { getGeminiResponse } from '../services/geminiService';

interface ChatBotProps {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  onClose: () => void;
  forceQuoteForm?: boolean;
}

const ChatBot: React.FC<ChatBotProps> = ({ messages, setMessages, onClose, forceQuoteForm = false }) => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showQuoteForm, setShowQuoteForm] = useState(forceQuoteForm);
  const [quoteData, setQuoteData] = useState({ name: '', email: '', project: '' });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (forceQuoteForm) setShowQuoteForm(true);
  }, [forceQuoteForm]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isLoading, showQuoteForm]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);
    const response = await getGeminiResponse(input);
    const botMsg: Message = { id: (Date.now() + 1).toString(), role: 'assistant', content: response, timestamp: new Date() };
    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  return (
    <div className="fixed inset-0 md:inset-auto md:bottom-24 md:right-10 z-[100] w-full md:w-[400px] h-full md:h-[600px] flex flex-col cartoon-card bg-slate-900 border-indigo-500 overflow-hidden animate-in zoom-in duration-300">
      <div className="p-6 bg-indigo-500 border-b-4 border-black flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-2xl border-3 border-black flex items-center justify-center text-3xl shadow-[3px_3px_0px_#000]">
            🤖
          </div>
          <div>
            <h3 className="font-black text-white text-lg uppercase tracking-tight">Caio-Bot</h3>
            <p className="text-[9px] text-white/70 uppercase font-black tracking-widest">IA Powered • Nível 99</p>
          </div>
        </div>
        <button onClick={onClose} className="cartoon-btn bg-white p-2 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>

      <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-6 bg-slate-950">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 border-3 border-black shadow-[4px_4px_0px_#000] rounded-2xl text-xs font-black uppercase tracking-tight ${
              msg.role === 'user' ? 'bg-[#adff00] text-black' : 'bg-white text-black'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && <div className="text-white text-[10px] font-black animate-pulse">Pensando... 🤔</div>}
      </div>

      <div className="p-6 bg-slate-900 border-t-4 border-black">
        <div className="flex gap-3">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Manda uma mensagem!"
            className="flex-grow bg-black border-2 border-white/20 rounded-xl px-4 py-3 text-xs text-white font-bold outline-none focus:border-indigo-500"
          />
          <button 
            onClick={handleSend}
            className="cartoon-btn bg-[#adff00] p-4 rounded-xl"
          >
            🚀
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
