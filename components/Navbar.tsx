import React from 'react';
import { Rocket, Star } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 pt-4 px-4">
      <nav className="max-w-5xl mx-auto bg-white/90 backdrop-blur-lg shadow-lg border-2 border-teal-100 rounded-full px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="bg-gradient-to-tr from-primary to-primary-light p-2 rounded-full text-white transform group-hover:rotate-12 transition-transform">
              <Rocket size={20} fill="currentColor" />
            </div>
            <span className="font-extrabold text-xl text-teal-800 tracking-tight">Siêu Nhân Số</span>
          </div>
          
          <div className="hidden sm:flex items-center space-x-1">
            <button 
              onClick={() => document.getElementById('kynang')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-teal-700 hover:text-primary hover:bg-teal-50 font-bold px-4 py-2 rounded-full text-sm transition-all"
            >
              Kỹ Năng
            </button>
            <button 
              onClick={() => document.getElementById('thuthach')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-accent hover:bg-accent-hover text-white font-bold px-5 py-2 rounded-full text-sm shadow-md transition-all hover:scale-105 flex items-center gap-2"
            >
              <Star size={16} fill="currentColor" />
              Thử Thách
            </button>
          </div>

          {/* Mobile simplistic menu */}
          <div className="sm:hidden">
            <button 
               onClick={() => document.getElementById('thuthach')?.scrollIntoView({ behavior: 'smooth' })}
               className="bg-accent text-white p-2 rounded-full"
            >
                <Star size={20} fill="currentColor" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;