import React from 'react';
import { ShieldCheck, Search, Smile, Sparkles, GraduationCap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-teal-50 via-white to-green-50 pt-32 pb-16 sm:pt-40 lg:pb-32">
      {/* Abstract Background Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
      <div className="absolute top-40 right-20 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-delayed"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border-2 border-teal-200 text-teal-800 text-sm font-bold shadow-sm mb-6 animate-bounce-slow">
              <Sparkles className="w-4 h-4 mr-2 text-accent" />
              Dành cho học sinh tiểu học (8-11 tuổi)
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-teal-900 sm:text-5xl md:text-6xl mb-6">
              Hành Trình Trở Thành <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Công Dân Số Tí Hon
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0 font-medium">
              Cùng khám phá internet an toàn, học điều hay và bảo vệ bản thân trên mạng với biệt đội Siêu Nhân Số!
            </p>
            <div className="mt-8 flex justify-center lg:justify-start gap-4">
              <button 
                onClick={() => document.getElementById('kynang')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-green-700 hover:shadow-green-200/50 transition-all hover:-translate-y-1"
              >
                Bắt đầu học ngay
              </button>
            </div>
          </div>

          {/* Hero Illustration / Mascot Area */}
          <div className="relative mt-16 sm:max-w-lg sm:mx-auto lg:col-span-6 lg:mt-0 lg:mx-0 flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Rotating background blob */}
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-200 to-green-200 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-blob opacity-50"></div>
              
              {/* Central Card - Student Avatar Representation */}
              <div className="absolute inset-4 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border-4 border-white flex flex-col items-center justify-center p-8 transform hover:scale-105 transition-transform duration-500">
                <div className="w-28 h-28 bg-gradient-to-br from-orange-300 to-yellow-300 rounded-full flex items-center justify-center shadow-inner mb-6 relative overflow-hidden">
                    <Smile size={80} className="text-white drop-shadow-md" />
                    <div className="absolute top-0 right-0 p-2 bg-white rounded-bl-xl">
                        <GraduationCap size={20} className="text-primary" />
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-teal-900">Học Sinh Thông Thái</h3>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">Tìm kiếm giỏi</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">Bảo mật tốt</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold">Ứng xử đẹp</span>
                </div>
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-lg animate-float border-2 border-red-100">
                <ShieldCheck className="w-8 h-8 text-red-500" />
              </div>
              <div className="absolute bottom-10 -left-6 bg-white p-4 rounded-2xl shadow-lg animate-float-delayed border-2 border-blue-100">
                <Search className="w-8 h-8 text-blue-500" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;