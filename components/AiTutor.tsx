import React, { useState, useEffect } from 'react';
import { generateQuizForSkill } from '../services/geminiService';
import { QuizQuestion } from '../types';
import { Bot, RefreshCw, CheckCircle, XCircle, Trophy, ArrowRight, BrainCircuit, BookOpen } from 'lucide-react';

interface AiTutorProps {
  topic: string;
  topicName: string;
  learnUrl?: string;
}

const AiTutor: React.FC<AiTutorProps> = ({ topic, topicName, learnUrl }) => {
  const [question, setQuestion] = useState<QuizQuestion | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);

  const loadQuestion = async () => {
    setLoading(true);
    setSelectedAnswer(null);
    setIsCorrect(null);
    const quiz = await generateQuizForSkill(topicName);
    setQuestion(quiz);
    setLoading(false);
  };

  useEffect(() => {
    setScore(0);
    loadQuestion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topic]);

  const handleAnswer = (option: string) => {
    if (selectedAnswer) return; 
    setSelectedAnswer(option);
    
    if (question && option === question.correctAnswer) {
      setIsCorrect(true);
      setScore(s => s + 10);
    } else {
      setIsCorrect(false);
    }
  };

  if (!process.env.API_KEY) {
    return (
        <div className="bg-red-50 rounded-3xl p-8 shadow-inner text-center border-2 border-red-200 mx-4">
            <h3 className="text-xl font-bold text-red-500 mb-2">⚠️ Cần API Key</h3>
            <p className="text-gray-600">Vui lòng cấu hình API Key để kích hoạt Trợ lý ảo AI.</p>
        </div>
    )
  }

  return (
    <div id="thuthach" className="max-w-4xl mx-auto relative px-4">
      {/* Game Console Container */}
      <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 shadow-2xl border-[6px] border-b-[12px] border-teal-500 relative overflow-hidden">
        
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-50 rounded-full mix-blend-multiply opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply opacity-50 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        
        {/* Header HUD */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between mb-8 bg-gray-50 rounded-2xl p-4 border border-gray-100 gap-4">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="bg-white p-3 rounded-2xl shadow-md border-2 border-teal-100">
              <Bot size={40} className="text-primary animate-bounce-slow" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wide">Phòng Thi Đấu AI</h2>
              <div className="flex items-center text-teal-600 font-semibold text-sm">
                <BrainCircuit size={16} className="mr-1" />
                {topicName}
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            {learnUrl && (
              <a 
                href={learnUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-100 hover:bg-blue-200 text-blue-800 px-4 py-3 rounded-full font-bold transition-all shadow-sm hover:-translate-y-1"
                title="Đọc thêm tài liệu"
              >
                <BookOpen size={20} />
                <span className="hidden sm:inline">Bí Kíp</span>
              </a>
            )}
            
            <div className="flex items-center bg-yellow-400 px-6 py-3 rounded-full shadow-lg transform md:-rotate-2 border-2 border-yellow-500 min-w-max">
              <Trophy className="w-6 h-6 mr-2 text-yellow-900" fill="currentColor" />
              <span className="text-yellow-900 font-extrabold text-xl">{score} Điểm</span>
            </div>
          </div>
        </div>

        {/* Game Screen Area */}
        <div className="relative z-10 min-h-[350px]">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-80 rounded-3xl bg-gray-50 border-2 border-dashed border-gray-200">
              <RefreshCw className="w-16 h-16 text-teal-400 animate-spin mb-6" />
              <p className="font-bold text-gray-500 text-lg animate-pulse">AI đang suy nghĩ câu hỏi hóc búa...</p>
            </div>
          ) : question ? (
            <div className="animate-fade-in">
              {/* Question Card */}
              <div className="bg-blue-50 rounded-3xl p-6 sm:p-8 mb-8 border-l-8 border-blue-400">
                 <h3 className="text-xl sm:text-2xl font-bold text-blue-900 leading-snug">
                  {question.question}
                </h3>
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {question.options.map((option, idx) => {
                  const isSelected = selectedAnswer === option;
                  const isCorrectAnswer = option === question.correctAnswer;
                  
                  let cardStyle = "bg-white border-2 border-gray-100 text-gray-600 hover:border-teal-400 hover:bg-teal-50 hover:shadow-md"; 
                  let icon = <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 font-bold flex items-center justify-center mr-3 group-hover:bg-teal-200 group-hover:text-teal-800 transition-colors">{String.fromCharCode(65 + idx)}</div>;

                  if (selectedAnswer) {
                    if (isCorrectAnswer) {
                        cardStyle = "bg-green-100 border-2 border-green-500 text-green-900 shadow-md transform scale-[1.02]";
                        icon = <CheckCircle className="w-8 h-8 text-green-600 mr-3" />;
                    } else if (isSelected) {
                        cardStyle = "bg-red-50 border-2 border-red-300 text-red-800 opacity-70";
                        icon = <XCircle className="w-8 h-8 text-red-500 mr-3" />;
                    } else {
                        cardStyle = "bg-gray-50 border-gray-100 text-gray-400 opacity-50";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(option)}
                      disabled={!!selectedAnswer}
                      className={`group p-4 rounded-2xl text-left font-bold text-lg transition-all duration-200 flex items-center ${cardStyle}`}
                    >
                      {icon}
                      {option}
                    </button>
                  );
                })}
              </div>

              {/* Feedback Area */}
              {selectedAnswer && (
                <div className={`rounded-2xl p-6 border-2 shadow-lg animate-bounce-in ${isCorrect ? 'bg-green-600 border-green-700 text-white' : 'bg-white border-red-200 text-gray-800'}`}>
                  <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                    <div className={`p-3 rounded-full ${isCorrect ? 'bg-white/20' : 'bg-red-100'}`}>
                        {isCorrect ? <Trophy size={32} className="text-yellow-300" /> : <Bot size={32} className="text-red-500" />}
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-extrabold text-2xl mb-1">
                        {isCorrect ? 'Tuyệt vời ông mặt trời!' : 'Ôi không, sai mất rồi!'}
                      </h4>
                      <p className={`text-lg ${isCorrect ? 'text-green-100' : 'text-gray-600'}`}>
                        {question.explanation}
                      </p>
                    </div>
                    <button 
                        onClick={loadQuestion}
                        className={`mt-4 sm:mt-0 px-8 py-3 rounded-full font-bold shadow-lg flex items-center transition-transform hover:scale-105 active:scale-95 whitespace-nowrap
                            ${isCorrect ? 'bg-white text-green-700 hover:bg-green-50' : 'bg-primary text-white hover:bg-primary-light'}
                        `}
                    >
                        Tiếp tục <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 mb-4">Có chút trục trặc nhỏ...</p>
              <button onClick={loadQuestion} className="bg-primary text-white px-6 py-2 rounded-full font-bold hover:bg-primary-light">Thử lại nhé</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AiTutor;