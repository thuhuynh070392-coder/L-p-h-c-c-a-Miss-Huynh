import { GoogleGenAI, Type } from "@google/genai";
import { QuizQuestion } from "../types";

const apiKey = process.env.API_KEY || '';

const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateQuizForSkill = async (skillName: string): Promise<QuizQuestion | null> => {
  if (!ai) {
    console.error("API Key missing");
    return null;
  }

  try {
    const model = ai.models;
    
    // Updated prompt for a more "kid-friendly" and fun tone
    const response = await model.generateContent({
      model: "gemini-2.5-flash",
      contents: `Bạn là một trợ lý ảo siêu vui tính tên là "Siêu Nhân Số". Hãy tạo một câu hỏi trắc nghiệm (quiz) thật vui và dễ hiểu dành cho trẻ em tiểu học (8-11 tuổi) về chủ đề: "${skillName}".
      
      Yêu cầu:
      1. Ngôn ngữ: Tiếng Việt, giọng điệu thân thiện, hài hước, khích lệ (như người bạn lớn).
      2. Nội dung: Tình huống thực tế khi trẻ dùng internet/máy tính.
      3. Cấu trúc: 1 câu hỏi + 4 lựa chọn (A, B, C, D).
      4. Giải thích: Ngắn gọn, tích cực, giải thích tại sao đáp án đúng lại giúp trẻ an toàn/thông minh hơn.
      
      Trả về định dạng JSON.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            question: { type: Type.STRING, description: "Câu hỏi tình huống thú vị" },
            options: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "4 phương án lựa chọn ngắn gọn" 
            },
            correctAnswer: { type: Type.STRING, description: "Đáp án đúng (phải giống hệt 1 trong 4 options)" },
            explanation: { type: Type.STRING, description: "Lời giải thích vui vẻ, dễ hiểu" }
          },
          required: ["question", "options", "correctAnswer", "explanation"]
        }
      }
    });

    const text = response.text;
    if (!text) return null;
    
    return JSON.parse(text) as QuizQuestion;

  } catch (error) {
    console.error("Error generating quiz:", error);
    return null;
  }
};