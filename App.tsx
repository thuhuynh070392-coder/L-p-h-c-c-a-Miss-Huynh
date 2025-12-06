import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillCard from './components/SkillCard';
import AiTutor from './components/AiTutor';
import Mascot from './components/Mascot';
import { Search, Shield, User, MessageCircle, AlertTriangle } from 'lucide-react';

const SKILLS = [
  {
    id: 'info',
    title: 'Thám Tử Thông Tin',
    description: 'Biết cách tìm kiếm thông tin đúng trên Google, phân biệt tin thật và tin giả.',
    Icon: Search,
    colorClass: 'text-blue-500',
    bgClass: 'bg-blue-100',
    borderClass: 'border-blue-500',
    topic: 'Kỹ năng tìm kiếm và đánh giá thông tin trên internet',
    learnUrl: 'https://beinternetawesome.withgoogle.com/vi_vn/interland/landing/reality-river'
  },
  {
    id: 'safety',
    title: 'Lá Chắn Bảo Vệ',
    description: 'Bảo vệ mật khẩu bí mật, không chia sẻ thông tin riêng tư với người lạ.',
    Icon: Shield,
    colorClass: 'text-green-500',
    bgClass: 'bg-green-100',
    borderClass: 'border-green-500',
    topic: 'An toàn thông tin và bảo mật tài khoản cá nhân',
    learnUrl: 'https://beinternetawesome.withgoogle.com/vi_vn/interland/landing/tower-of-treasure'
  },
  {
    id: 'comms',
    title: 'Giao Tiếp Văn Minh',
    description: 'Lịch sự khi nhắn tin, biết nói lời hay ý đẹp khi bình luận trên mạng.',
    Icon: MessageCircle,
    colorClass: 'text-purple-500',
    bgClass: 'bg-purple-100',
    borderClass: 'border-purple-500',
    topic: 'Văn hóa ứng xử và giao tiếp trên môi trường mạng',
    learnUrl: 'https://beinternetawesome.withgoogle.com/vi_vn/interland/landing/kind-kingdom'
  },
  {
    id: 'identity',
    title: 'Dấu Chân Số',
    description: 'Xây dựng hình ảnh tốt đẹp, hiểu rằng mọi thứ trên mạng đều được lưu lại.',
    Icon: User,
    colorClass: 'text-pink-500',
    bgClass: 'bg-pink-100',
    borderClass: 'border-pink-500',
    topic: 'Xây dựng hình ảnh cá nhân và quản lý dấu chân số'
  },
  {
    id: 'danger',
    title: 'Phòng Tránh Rủi Ro',
    description: 'Nhận biết kẻ xấu, bắt nạt qua mạng và biết cách nhờ người lớn giúp đỡ.',
    Icon: AlertTriangle,
    colorClass: 'text-orange-500',
    bgClass: 'bg-orange-100',
    borderClass: 'border-orange-500',
    topic: 'Phòng tránh bắt nạt qua mạng và các rủi ro trực tuyến'
  }
];

function App() {
  const [activeSkillId, setActiveSkillId] = useState<string>(SKILLS[0].id);

  const activeSkill = SKILLS.find(s => s.id === activeSkillId) || SKILLS[0];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <Hero />

      <main className="flex-grow bg-white">
        
        {/* Skills Selection Section */}
        <section id="kynang" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-teal-50 text-teal-600 font-bold tracking-wider uppercase text-sm mb-4">
              Vừa học vừa chơi
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-teal-900">
              5 Siêu Kỹ Năng Cần Thiết
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-gray-500 mx-auto">
              Nhấn vào từng thẻ bên dưới để khám phá bí kíp và tham gia thử thách nhé!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {SKILLS.map((skill) => (
              <SkillCard
                key={skill.id}
                title={skill.title}
                description={skill.description}
                Icon={skill.Icon}
                colorClass={skill.colorClass}
                bgClass={skill.bgClass}
                borderClass={skill.borderClass}
                isActive={activeSkillId === skill.id}
                onClick={() => setActiveSkillId(skill.id)}
              />
            ))}
          </div>
        </section>

        {/* AI Tutor / Challenge Section */}
        <section className="py-20 bg-gradient-to-t from-teal-50 via-white to-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AiTutor 
              topic={activeSkill.id} 
              topicName={activeSkill.topic} 
              learnUrl={activeSkill.learnUrl}
            />
          </div>
        </section>

      </main>

      {/* Playful Footer */}
      <footer className="bg-teal-900 text-white py-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-teal-500 to-blue-500"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h4 className="font-bold text-2xl mb-4">Siêu Nhân Kỹ Năng Số</h4>
          <p className="font-medium opacity-80 mb-6">Chung tay xây dựng môi trường internet an toàn cho trẻ em Việt Nam</p>
          <div className="text-sm opacity-60">© 2024 Digital Skills Framework for Kids. All rights reserved.</div>
        </div>
      </footer>
      
      {/* Animated Mascot */}
      <Mascot />
    </div>
  );
}

export default App;