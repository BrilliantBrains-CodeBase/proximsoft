import React, { useState } from 'react';
import { LucideChevronDown, LucideChevronUp } from 'lucide-react';
import type { Curriculum } from '../../../../types/course';

interface CourseCurriculumProps {
  curriculum: Curriculum;
}

const CourseCurriculum: React.FC<CourseCurriculumProps> = ({ curriculum }) => {
  // Exclusive accordion: only one open at a time
  const [openModule, setOpenModule] = useState<number | null>(1);

  const toggleModule = (moduleNumber: number) => {
    setOpenModule(prev => (prev === moduleNumber ? null : moduleNumber));
  };

  return (
    <div className="mt-16 max-w-7xl mx-auto px-4 my-12 font-sans">
      {/* 1. Header - Exact Image Match */}
      <div className="mb-6">
        <h2 className="text-3xl font-black text-slate-900 mb-1">Course Curriculum</h2>
        <div className="flex flex-col md:flex-row  items-center gap-2 text-sm font-bold text-slate-600 mt-2">
          <span className='border border-[#3b82f6] rounded-4xl px-4 py-1'>{curriculum.summary.total_modules} Modules</span>
          
          <span className='border border-[#3b82f6] rounded-4xl px-4 py-1'>{curriculum.summary.total_lectures} Lectures</span>
        
          <span className='border border-[#3b82f6] rounded-4xl px-4 py-1'>{curriculum.summary.difficulty_level || 'Beginner to Advanced'}</span>
        </div>
      </div>

      {/* 2. Main Container - White with soft shadow */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] overflow-hidden">
        {curriculum.modules.map((module) => {
          const isOpen = openModule === module.module_number;

          return (
            <div 
              key={module.module_number} 
              className={`border-b border-blue-100 last:border-none transition-colors ${
                isOpen ? 'bg-white' : 'bg-[#f0f7ff]'
              }`}
            >
              {/* Module Header */}
              <button
                onClick={() => toggleModule(module.module_number)}
                className="w-full flex items-start justify-between p-6 text-left group"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400 font-bold text-base uppercase tracking-tight">
                      Module {module.module_number}
                    </span>
                    {/* Duration Badge */}
                    <span className="bg-white border border-blue-200 text-blue-500 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-tighter shadow-sm">
                      {module.module_duration || '1 week-2 week'}
                    </span>
                  </div>
                  
                  {/* The Primary Blue Module Title Pill (Exact Match) */}
                  <div className={`inline-block px-4 py-1 rounded-4xl text-sm font-medium transition-all duration-300 ${
                    isOpen 
                    ? 'bg-[#3b82f6] text-white shadow-lg shadow-blue-200' 
                    : 'bg-white text-[#3b82f6] border-1 border-[#3b82f6]'
                  }`}>
                    {module.module_name}
                  </div>
                </div>

                {/* Chevron Toggle */}
                <div className="mt-1">
                  {isOpen ? (
                    <LucideChevronUp size={22} className="text-slate-900" strokeWidth={3} />
                  ) : (
                    <LucideChevronDown size={22} className="text-slate-900" strokeWidth={3} />
                  )}
                </div>
              </button>

              {/* Module Topics (Accordion) */}
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-10 pb-8 pt-0">
                  <ul className="space-y-4">
                    {module.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="text-slate-400 font-bold text-[15px] mt-0.5 min-w-[20px]">
                          {i + 1}.
                        </span>
                        <span className="text-slate-500 text-[15.5px] font-medium leading-relaxed">
                          {topic}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseCurriculum;