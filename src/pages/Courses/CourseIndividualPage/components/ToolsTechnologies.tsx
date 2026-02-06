import React from 'react';
import type { ToolsAndTechnologies } from '../../../../types/course';

interface ToolsTechnologiesProps {
  tools: ToolsAndTechnologies;
}

const ToolsTechnologies: React.FC<ToolsTechnologiesProps> = ({ tools }) => {
  return (
    <div className="mt-16 max-w-7xl mx-auto px-4 font-sans">
      <h2 className="text-4xl font-black text-[#1a1a1a] tracking-tight mb-10">
        Tools & Technologies Covered
      </h2>

      {/* Primary Technologies Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-black text-[#1a1a1a] mb-6 tracking-tight">
          Primary Technologies:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tools.primary.map((tech, index) => (
            <div 
              key={index} 
              className="bg-[#D9E9FF] border border-blue-200/40 rounded-lg py-5 px-4 text-center shadow-[0_8px_20px_-10px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
            >
              <span className="text-[#333] text-base font-semibold tracking-tight">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Secondary Technologies Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-black text-[#1a1a1a] mb-6 tracking-tight">
          Secondary Technologies:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tools.secondary.map((tech, index) => (
            <div 
              key={index} 
              className="bg-[#D9E9FF] border border-blue-200/40 rounded-lg py-5 px-4 text-center shadow-[0_8px_20px_-10px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
            >
              <span className="text-[#333] text-base font-semibold tracking-tight">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolsTechnologies;