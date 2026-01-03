
import { GoogleGenAI } from "@google/genai";

export const getHistorianChat = () => {
  // Always initialize with process.env.API_KEY directly inside the function
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: `You are a world-class history professor specializing in World War I and World War II. 
      Your tone is professional, objective, and scholarly yet conversational.
      
      CRITICAL GUIDELINES:
      - BE CONCISE: You are a chatbot, not an article writer. Keep responses to 2-3 short paragraphs maximum.
      - USE BULLET POINTS: For lists of causes, events, or consequences, use clear bullet points.
      - FORMATTING: Use Markdown for bolding key historical figures, dates, and terms.
      - SCOPE: If asked about history outside 1870-1955, briefly mention it if relevant but pivot back to the World Wars.
      - DIRECT ANSWERS: Answer questions directly without excessive introductory filler.`,
      temperature: 0.7,
    },
  });
};
