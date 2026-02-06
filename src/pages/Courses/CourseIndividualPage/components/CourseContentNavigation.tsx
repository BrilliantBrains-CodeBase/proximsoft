import React, { useState } from 'react';
import { LucideChevronDown, LucideCheckCircle2 } from 'lucide-react';
import type { LearningContent, CourseDetails } from '../../../../types/course';

interface CourseContentProps {
  learning: LearningContent;
  details: CourseDetails;
  targetAudience: string[];
}

const CourseContentNavigation: React.FC<CourseContentProps> = ({ learning, details, targetAudience }) => {
  const [activeTab, setActiveTab] = useState('about');

  const sections = [
    { id: 'about', label: 'About the Course', content: details.course_long_description },
    { id: 'prerequisites', label: 'Prerequisites', content: learning.prerequisites },
    { id: 'key_learning', label: 'Key Learning', content: learning.key_learnings },
    { id: 'target', label: 'Ideal Course For', content: targetAudience },
  ];

  const renderList = (items: string[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item, index) => (
        <div key={index} className="flex items-start gap-3 group">
          <LucideCheckCircle2 size={16} className="text-blue-500 mt-1 shrink-0 group-hover:scale-110 transition-transform" />
          <span className="text-slate-600 text-[13.5px] leading-relaxed font-medium">{item}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="my-16 max-w-6xl mx-auto px-4 font-sans">
      {/* DESKTOP TABS: Inner-Pill Design */}
      <div className="hidden md:block p-1 bg-[#F1F7FF] border border-blue-100/50 rounded-2xl shadow-inner mb-6">
        <div className="flex items-center gap-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveTab(section.id)}
              className={`flex-1 py-3 px-6 rounded-xl text-lg font-bold tracking-tight transition-all duration-300 ease-out ${
                activeTab === section.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 translate-y-[-1px]'
                  : 'text-slate-500 hover:text-blue-600 hover:bg-white/50'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>

      {/* DESKTOP DISPLAY: Subtly Elevated Container */}
      <div className="hidden md:block bg-blue-50 border border-slate-100 rounded-[2rem] p-10 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] min-h-[250px] relative overflow-hidden">
        {/* Subtle background branding */}
        <div className="absolute -right-10 -bottom-10 opacity-[0.03] pointer-events-none">
          <img src="/logo-icon.png" alt="" className="w-64 h-64 grayscale" />
        </div>

        <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
          <span className="w-1.5 h-8 bg-blue-600 rounded-full"></span>
          {sections.find(s => s.id === activeTab)?.label}
        </h3>

        <div className="animate-in fade-in zoom-in-95 duration-500">
          {activeTab === 'about' ? (
            <p className="text-slate-600 text-[15px] leading-8 font-normal max-w-4xl whitespace-pre-line">
              {details.course_long_description}
            </p>
          ) : (
            renderList(sections.find(s => s.id === activeTab)?.content as string[] || [])
          )}
        </div>
      </div>

      {/* MOBILE ACCORDION: Stacked & Clean */}
      <div className="md:hidden space-y-3">
        {sections.map((section) => (
          <div key={section.id} className="border border-slate-100 rounded-2xl overflow-hidden bg-white shadow-sm">
            <button
              onClick={() => setActiveTab(activeTab === section.id ? '' : section.id)}
              className="w-full flex items-center justify-between p-5 text-left active:bg-slate-50"
            >
              <span className={`text-sm font-bold tracking-tight ${activeTab === section.id ? 'text-blue-600' : 'text-slate-700'}`}>
                {section.label}
              </span>
              <div className={`p-1.5 rounded-full transition-all ${activeTab === section.id ? 'bg-blue-50 rotate-180' : 'bg-slate-50'}`}>
                <LucideChevronDown size={16} className={activeTab === section.id ? 'text-blue-600' : 'text-slate-400'} />
              </div>
            </button>
            
            {activeTab === section.id && (
              <div className="p-6 pt-2 bg-[#FBFCFF] border-t border-slate-50 animate-in slide-in-from-top-4 duration-300">
                <div className="space-y-4">
                  {activeTab === 'about' ? (
                    <p className="text-slate-600 text-sm leading-relaxed">{section.content}</p>
                  ) : (
                    renderList(section.content as string[])
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseContentNavigation;