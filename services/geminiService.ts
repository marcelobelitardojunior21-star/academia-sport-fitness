
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getFitnessRecommendation = async (goal: string, frequency: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Suggest a brief training plan for someone whose goal is "${goal}" and can train "${frequency}" times a week. Focus on Musculação (Bodybuilding) and Pilates.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING },
            weeklySchedule: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  day: { type: Type.STRING },
                  activity: { type: Type.STRING }
                }
              }
            },
            tip: { type: Type.STRING }
          },
          required: ["summary", "weeklySchedule", "tip"]
        }
      }
    });

    return JSON.parse(response.text || "{}");
  } catch (error) {
    console.error("Error fetching recommendation:", error);
    return null;
  }
};
