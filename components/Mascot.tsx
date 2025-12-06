import React, { useState, useEffect } from 'react';
import { Bot, Zap } from 'lucide-react';

const TIPS = [
  "Chào bạn! Tớ là Robi.",
  "Kéo xuống để tham gia thử thách nhé!",
  "Mật khẩu càng dài càng tốt đó nha!",
  "Đừng bao giờ click vào link lạ nhé.",
  "Bạn đã học bài 'Thám Tử Thông Tin' chưa?",
  "Internet rất vui nhưng cần cẩn thận.",
  "Cần giúp đỡ? Hãy hỏi người lớn nhé!",
  "Bạn là siêu nhân số dũng cảm!",
  "Nhớ nghỉ ngơi mắt sau 30 phút nhé!",
  "Không chia sẻ tên thật với người lạ nha."
];

const Mascot: React.FC = () => {
  const [text, setText] = useState(TIPS[0]);
  const [showBubble, setShowBubble] = useState(true);
  const [isWaving, setIsWaving] = useState(false);

  useEffect(() => {
    // Show bubble periodically
    const timer = setInterval(() => {
      setShowBubble(true);
      setText(TIPS[Math.floor(Math.random() * TIPS.length)]);
      setIsWaving(true);
      
      // Stop waving after 1s
      setTimeout(() => setIsWaving(false), 2000);

      // Hide bubble after 5 seconds
      setTimeout(() => setShowBubble(false), 6000);
    }, 12000);

    return () => clearInterval(timer);
  }, []);

  const handleClick = () => {
    setText(TIPS[Math.floor(Math.random() * TIPS.length)]);
    setShowBubble(true);
    setIsWaving(true);
    setTimeout(() => setIsWaving(false), 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none sm:bottom-10 sm:right-10">
      
      {/* Speech Bubble */}
      <div 
        className={`
          mr-2 mb-3 bg-white px-5 py-4 rounded-3xl rounded-br-sm shadow-xl border-2 border-teal-500 
          transform transition-all duration-500 origin-bottom-right max-w-[240px] relative
          ${showBubble ? 'scale-100 opacity-100 translate-y-0' : 'scale-50 opacity-0 translate-y-10'}
        `}
      >
        <p className="text-teal-900 font-bold text-sm leading-relaxed font-sans">{text}</p>
        <div className="absolute -bottom-[10px] right-[10px] w-4 h-4 bg-white border-r-2 border-b-2 border-teal-500 transform rotate-45"></div>
      </div>

      {/* Character */}
      <button 
        onClick={handleClick}
        className={`pointer-events-auto group relative focus:outline-none transition-transform duration-300 ${isWaving ? 'animate-bounce' : 'animate-float'}`}
        aria-label="Robi the Mascot"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity animate-pulse"></div>
        
        {/* Body */}
        <div className="relative bg-gradient-to-br from-teal-400 to-emerald-600 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-[3px] border-white shadow-lg flex items-center justify-center transform transition-transform group-hover:scale-110 group-active:scale-95">
          <Bot className="text-white w-10 h-10 sm:w-12 sm:h-12" strokeWidth={2.5} />
          
          {/* Decorative Elements */}
          <div className="absolute -top-1 right-0 bg-yellow-400 rounded-full p-1 border-2 border-white">
            <Zap size={10} className="text-yellow-900" fill="currentColor" />
          </div>
        </div>

        {/* Antennas */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-2">
            <div className="w-1 h-3 bg-teal-600 transform -rotate-12 rounded-full"></div>
            <div className="w-1 h-3 bg-teal-600 transform rotate-12 rounded-full"></div>
        </div>

        {/* Interaction hint */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="bg-teal-800 text-white text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap">
                Click tớ đi!
            </span>
        </div>
      </button>
    </div>
  );
};

export default Mascot;