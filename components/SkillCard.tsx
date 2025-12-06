import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  colorClass: string;
  bgClass: string;
  borderClass: string;
  onClick: () => void;
  isActive: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, description, Icon, colorClass, bgClass, borderClass, onClick, isActive }) => {
  return (
    <div 
      onClick={onClick}
      className={`
        relative group overflow-hidden rounded-3xl p-6 cursor-pointer transition-all duration-300 border-b-8
        ${isActive ? `bg-white ${borderClass} transform scale-105 shadow-2xl ring-4 ring-offset-2 ring-teal-100` : `bg-white border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-2 hover:${borderClass}`}
      `}
    >
      {/* Background Circle Decoration */}
      <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full transition-opacity duration-300 ${bgClass} ${isActive ? 'opacity-20' : 'opacity-10 group-hover:opacity-20'}`}></div>
      
      <div className="relative z-10 flex flex-col h-full items-start">
        <div className={`p-4 rounded-2xl w-fit mb-4 transition-transform duration-300 group-hover:rotate-6 ${bgClass} ${colorClass}`}>
          <Icon size={36} strokeWidth={2.5} />
        </div>
        
        <h3 className="text-xl font-extrabold text-gray-800 mb-2 group-hover:text-teal-700 transition-colors">{title}</h3>
        <p className="text-gray-500 text-sm font-medium flex-grow leading-relaxed mb-4">{description}</p>
        
        <div className={`mt-auto w-full py-2 px-4 rounded-xl text-center font-bold text-sm transition-colors ${isActive ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200 group-hover:text-gray-600'}`}>
          {isActive ? 'Đang học bài này' : 'Chọn bài học'}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;