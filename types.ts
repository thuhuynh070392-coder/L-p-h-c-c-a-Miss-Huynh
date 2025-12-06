export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  topics: string[];
}
