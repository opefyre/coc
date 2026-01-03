
import { GoogleGenAI } from "@google/genai";

export const getHistorianChat = () => {
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

export const simulateAlternativeTimeline = async (context: string, question: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `As a scholarly historian specializing in total war and geopolitical strategy, provide a rigorous analysis of this alternative historical turning point.
    
    SCENARIO: ${question}
    ARCHIVAL CONTEXT: ${context}
    
    Please structure your simulation using these headers:
    
    ### 1. The Divergence Point
    Explain exactly how this change realistically alters the immediate timeline.
    
    ### 2. The Chain Reaction
    Track the cascading geopolitical and military consequences across the different theaters of war.
    
    ### 3. The New World Order
    Describe the global state of affairs 10–20 years after the war's hypothetical conclusion.
    
    Maintain an objective, scholarly tone grounded in historical causality and strategic realism. Avoid science fiction tropes; focus on diplomatic and industrial shifts.`,
  });
  return response.text;
};

export const generateHistoricalImage = async (eventTitle: string, description: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const prompt = `A professional, archival-grade historical photograph of "${eventTitle}". 
  Subject matter: ${description}. 
  Style: Early-to-mid 20th century documentary photography, monochrome or heavy sepia tone, authentic silver-halide film grain, slight vignetting, high contrast, cinematic historical realism. 
  NO MODERN ELEMENTS. NO TEXT. LOOKS LIKE A GENUINE ARTIFACT.`;

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: [{ parts: [{ text: prompt }] }],
    config: {
      imageConfig: {
        aspectRatio: "16:9",
      }
    }
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
};
