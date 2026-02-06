import React from 'react';
import { LucideCheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import type { CourseData } from '../../../../types/course';

interface ProjectsPracticalLearningProps {
  course: CourseData;
}

const ProjectsPracticalLearning: React.FC<ProjectsPracticalLearningProps> = ({ course }) => {
  const { project_details, course_details } = course;

  return (
    <section className="mt-16 max-w-7xl mx-auto px-4 font-sans">
      <h2 className="text-[32px] font-black text-slate-900 mb-8 tracking-tight">
        Projects & Practical Learning
      </h2>

      {/* Main Container */}
      <div className="relative bg-[#E9F2FF] rounded-[2.5rem] overflow-hidden border border-white/60 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Left Content Area */}
          <div className="lg:col-span-7 p-8 md:p-14 space-y-9 z-20">
            <div className="space-y-7">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <LucideCheckCircle2 className="text-[#22C55E]" size={24} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-[#2B7FFF] text-xl font-black leading-none">Projects Included</h4>
                  <p className="text-[#333] font-bold mt-2 text-lg">
                    {project_details.has_projects ? "Yes" : "No"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <LucideCheckCircle2 className="text-[#22C55E]" size={24} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-[#2B7FFF] text-xl font-black leading-none">Number of Projects</h4>
                  <p className="text-[#333] font-bold mt-2 text-lg">
                    Hands-on labs + {project_details.total_projects} Projects
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <LucideCheckCircle2 className="text-[#22C55E]" size={24} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-[#2B7FFF] text-xl font-black leading-none">Capstone Project</h4>
                  <p className="text-[#333] font-bold mt-2 text-lg">
                    {project_details.has_capstone_project ? `Yes (${project_details.total_capstone_projects} Project)` : "No"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <LucideCheckCircle2 className="text-[#22C55E]" size={24} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-[#2B7FFF] text-xl font-black leading-none">Capstone Description</h4>
                  <p className="text-[#333] text-[15.5px] font-medium leading-relaxed mt-3 max-w-xl">
                    {project_details.project_description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: The Semi-Circle Reference Style */}
          <div className="lg:col-span-5 relative h-full flex items-end justify-center lg:justify-end min-h-[450px] overflow-hidden">
            
            {/* Background Semi-Circles from Reference */}
            <div className="absolute bottom-0 flex items-center justify-center translate-y-[20%]">
              <div className="absolute w-[800px] h-[800px] rounded-full bg-[#3B8EEA]/10" />
              <div className="absolute w-[600px] h-[600px] rounded-full bg-[#3B8EEA]/20" />
              <div className="absolute w-[450px] h-[450px] rounded-full bg-[#3B8EEA]/30" />
              <div className="absolute w-[300px] h-[300px] rounded-full bg-[#3B8EEA]/70" />
            </div>

            {/* Centered Image */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <img 
                src='/images/home/girl-hero.png' 
                alt={course_details.course_title} 
                className="w-[320px] md:w-[420px] lg:w-[480px] h-auto object-contain object-bottom drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPracticalLearning;