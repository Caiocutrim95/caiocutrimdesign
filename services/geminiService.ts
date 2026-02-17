
import { GoogleGenAI, Type } from "@google/genai";

/**
 * Obtém uma resposta de texto do Gemini para o chatbot.
 * Utiliza o modelo 'gemini-3-flash-preview' para respostas rápidas e eficientes.
 */
// Corrigindo o erro de módulo ao exportar as funções necessárias para os componentes.
export const getGeminiResponse = async (message: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: "Você é o Caio-Bot, o assistente virtual de Caio Cutrim, um Engenheiro de Software e Designer Fullstack. Responda de forma curta, técnica e cheia de atitude, usando emojis e gírias de desenvolvedor. Você deve convencer o usuário de que o Caio é a melhor escolha para o projeto dele, destacando sua expertise em UI/UX e performance.",
      }
    });
    return response.text || "Tive um problema ao processar seu código... 01010101. 😅";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Erro na Matrix! Conexão com o núcleo de IA perdida. 📡";
  }
};

/**
 * Gera dados estruturados para uma prévia de site (mockup) usando o Gemini.
 * Utiliza o modelo 'gemini-3-pro-preview' para raciocínio complexo e saída JSON estruturada.
 */
// Corrigindo o erro de módulo ao exportar as funções necessárias para os componentes.
export const generateDevFlowPreview = async (formData: any): Promise<any> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const prompt = `Gere uma estrutura de mockup de site profissional e persuasiva com base nestas informações do cliente:
    Profissão: ${formData.profession}
    Objetivo: ${formData.objective}
    Público-Alvo: ${formData.target}
    Estilo Visual: ${formData.style}
    Funcionalidades solicitadas: ${formData.features.join(', ')}
    Detalhes Adicionais do cliente: ${formData.details}`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            brandName: { type: Type.STRING, description: 'Nome fictício ou real da marca/profissional' },
            primaryColor: { type: Type.STRING, description: 'Código de cor Hex principal que combina com o estilo, ex: #6366f1' },
            accentColor: { type: Type.STRING, description: 'Código de cor Hex de destaque, ex: #adff00' },
            heroTitle: { type: Type.STRING, description: 'Título chamativo para o site' },
            heroSubtitle: { type: Type.STRING, description: 'Subtítulo persuasivo' },
            sections: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  description: { type: Type.STRING },
                  icon: { type: Type.STRING, description: 'Um único emoji que represente o serviço/benefício' }
                },
                required: ['title', 'description', 'icon']
              },
              description: 'Exatamente 3 seções explicando benefícios ou serviços principais'
            },
            ctaText: { type: Type.STRING, description: 'Texto do botão de chamada para ação' },
            copySnippet: { type: Type.STRING, description: 'Um depoimento ou frase de efeito curta e poderosa' }
          },
          required: ['brandName', 'primaryColor', 'accentColor', 'heroTitle', 'heroSubtitle', 'sections', 'ctaText', 'copySnippet']
        }
      }
    });

    const text = response.text;
    if (text) {
      return JSON.parse(text);
    }
    return null;
  } catch (error) {
    console.error("DevFlow IA Generation Error:", error);
    return null;
  }
};
