import React from 'react';
import type { CareerOutcomes } from '../../../../types/course';

interface CareerOutcomesProps {
  outcomes: CareerOutcomes;
}

const CareerRelevance: React.FC<CareerOutcomesProps> = ({ outcomes }) => {
  return (
    <div className="my-12 max-w-7xl mx-auto px-4 font-sans">
      <h2 className="text-[32px] font-black text-slate-900 mb-8 tracking-tight">
        Career & Industry Relevance
      </h2>

      {/* Roles Section */}
      <div className="mb-12">
        <h3 className="text-xl font-bold text-slate-900 mb-6 tracking-tight">
          Career Roles After Completion
        </h3>
        <div className="flex flex-wrap gap-4">
          {outcomes.career_roles.map((role, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 bg-white border border-blue-200 rounded-lg px-4 py-2.5 shadow-sm hover:border-blue-400 transition-colors cursor-default"
            >
              {/* The Blue Dot from the Image */}
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
              <span className="text-[#2E78CC] text-[14px] font-bold tracking-tight">
                {role}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Industry Domains Section */}
      {outcomes.top_hiring_domains && (
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-6 tracking-tight">
            Top Hiring Domains
          </h3>
          <div className="flex flex-wrap gap-4">
            {outcomes.top_hiring_domains.map((domain, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 bg-white border border-blue-200 rounded-lg px-4 py-2.5 shadow-sm hover:border-blue-400 transition-colors cursor-default"
              >
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <span className="text-[#2E78CC] text-[14px] font-bold tracking-tight">
                  {domain}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerRelevance;