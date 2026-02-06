import React from 'react';
import type { SkillsGained } from '../../../../types/course';

interface SkillsGainedProps {
  skills: SkillsGained;
}

const CourseSkills: React.FC<SkillsGainedProps> = ({ skills }) => {
  return (
    <div className="mt-16 max-w-7xl mx-auto px-4 my-12">
      <h2 className="text-[32px] font-black text-slate-900 mb-8 tracking-tight">
        Skills You Will Gain
      </h2>

      <div className="space-y-6">
        {/* Core Skills Section */}
        <div className="bg-white border border-blue-200/50 rounded-2xl p-8 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]">
          <h3 className="text-xl font-bold text-slate-900 mb-6 tracking-tight">
            Core Skills
          </h3>
          <div className="flex flex-wrap gap-4">
            {skills.core_skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-gradient-to-b from-white to-[#D9E9FF] border border-blue-200/60 rounded-full px-8 py-2.5 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.12)] hover:shadow-md transition-shadow cursor-default"
              >
                <span className="text-[#1a1a1a] text-sm font-semibold tracking-tight">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Supporting Skills Section */}
        <div className="bg-white border border-blue-200/50 rounded-2xl p-8 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]">
          <h3 className="text-xl font-bold text-slate-900 mb-6 tracking-tight">
            Supporting Skills
          </h3>
          <div className="flex flex-wrap gap-4">
            {skills.supporting_skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-gradient-to-b from-white to-[#D9E9FF] border border-blue-200/60 rounded-full px-8 py-2.5 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.12)] hover:shadow-md transition-shadow cursor-default"
              >
                <span className="text-[#1a1a1a] text-sm font-semibold tracking-tight">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSkills;