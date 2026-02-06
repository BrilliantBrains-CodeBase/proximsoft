import React from 'react';
import { LucideClock, LucideLayout, LucideFileText, LucideZap, LucideUsers, LucideStar, LucideGraduationCap, LucideChevronDown } from 'lucide-react';
import type { CourseData } from '../../../../types/course';

interface CourseDurationProps {
  course: CourseData;
}

const CourseDurationAndStructure: React.FC<CourseDurationProps> = ({ course }) => {
  const { course_details, course_structure, course_metrics, target_audience } = course;

  return (
    <section className="bg-[#e9f2ff] rounded-[2rem] p-8 lg:p-12 border border-white/50 my-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* LEFT CONTENT AREA */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <h2 className="text-3xl lg:text-4xl font-black text-[#333] mb-4">
              {/* {course_details.course_title}: */} Course Duration and Structure 
            </h2>
            <p className="text-[#555] text-sm leading-relaxed max-w-2xl">
              Learn how to build autonomous, tool-using AI agents that can reason, plan, and execute tasks using LLMs, RAG, and agent orchestration frameworks.
            </p>
          </div>

          {/* TOP PILLS: Duration & Structure */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-white border border-[#2b7fff] rounded-full px-4 py-2 text-[#2b7fff] text-xs font-bold shadow-sm">
              <LucideClock size={14} />
              Total Course Duration: {course_structure.course_timeline}
            </div>
            <div className="flex items-center gap-2 bg-white border border-[#2b7fff] rounded-full px-4 py-2 text-[#2b7fff] text-xs font-bold shadow-sm">
              <LucideLayout size={14} />
              Modules Included: {course.curriculum.summary.total_modules}
            </div>
            <div className="flex items-center gap-2 bg-white border border-[#2b7fff] rounded-full px-4 py-2 text-[#2b7fff] text-xs font-bold shadow-sm">
              <LucideFileText size={14} />
              Syllabus: Available
            </div>
            <div className="flex items-center gap-2 bg-white border border-[#2b7fff] rounded-full px-4 py-2 text-[#2b7fff] text-xs font-bold shadow-sm">
              <LucideZap size={14} />
              Weekly commitment: {course_structure.weekly_commitment_duration}
            </div>
            <div className="flex items-center gap-2 bg-white border border-[#2b7fff] rounded-full px-4 py-2 text-[#2b7fff] text-xs font-bold shadow-sm">
              <LucideUsers size={14} />
              Batch Type: {course_details.batch_type}
            </div>
          </div>

          {/* BOTTOM SECTION: Who Should Take This */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-[#333]">
              Who Should Take This {course_details.course_title}?
            </h3>
            <div className="flex flex-wrap gap-3">
              {target_audience.map((item, index) => (
                <div key={index} className="flex items-center gap-2 bg-white border border-[#2b7fff] rounded-full px-5 py-2.5 text-[#2b7fff] text-xs font-bold shadow-sm hover:bg-[#2b7fff] hover:text-white transition-colors cursor-default">
                  <span className="w-1.5 h-1.5 bg-[#2b7fff] rounded-full group-hover:bg-white"></span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* VIEW SYLLABUS BUTTON */}
          <button className="flex items-center gap-3 bg-[#ebb400] hover:bg-[#d4a200] text-[#333] font-black px-8 py-4 rounded-full shadow-lg transition-transform active:scale-95 uppercase text-sm tracking-tighter">
            View Detailed Syllabus
            <LucideChevronDown size={20} />
          </button>
        </div>

        {/* RIGHT STATS CARDS AREA - Bento Grid */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4 auto-rows-min">
          {/* Student Image Card - Spans 2 rows */}
          <div className="row-span-2 relative rounded-3xl overflow-hidden shadow-xl">
            <img 
              src="/images/home/girl-hero.png"
              alt="Student" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Students Enrolled Card - Top Right */}
          <div className="bg-gradient-to-br from-[#5b9cff] to-[#4a8df5] rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <LucideUsers size={36} className="mb-2" strokeWidth={2.5} />
              <div className="text-5xl font-black leading-none mb-1">
                {Math.floor(course_metrics.total_students_enrolled / 1000)}k+
              </div>
              <div className="text-lg font-bold leading-tight">
                Students<br />Enrolled
              </div>
            </div>
            {/* Decorative background shape */}
            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-white/10 rounded-3xl rotate-12"></div>
          </div>

          {/* Rating Card - Middle Right */}
          <div className="bg-gradient-to-br from-[#5b9cff] to-[#4a8df5] rounded-3xl py-6 text-white shadow-xl flex flex-col items-center ">
            <div className="flex  items-baseline gap-2 mb-2">
              <span className="text-6xl font-black leading-none ">
                {course_metrics.avg_rating}
              </span>
              <LucideStar size={48} className="fill-[#fbbf24] text-[#fbbf24] mb-2" strokeWidth={0} />
            </div>
            <div className="text-base font-bold leading-tight">
              Avg. Rating<br />on Google
            </div>
          </div>

          {/* Students Placed Card - Bottom, Spans 2 columns */}
          <div className="col-span-2 bg-gradient-to-br from-[#d4e7ff] to-[#b8d9ff] rounded-3xl p-6 shadow-xl relative overflow-hidden">
            <div className="flex items-center gap-4 relative z-10">
              <div className="bg-white p-4 rounded-2xl shadow-md">
                <LucideGraduationCap size={36} className="text-[#4a8df5]" strokeWidth={2} />
              </div>
              <div className="text-[#4a8df5]">
                <div className="text-5xl font-black leading-none mb-1">
                  {Math.floor(5000 / 1000)}k+
                </div>
                <div className="text-xl font-bold">
                  Students Placed
                </div>
              </div>
            </div>
            {/* Decorative background shape */}
            <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-white/30 rounded-3xl rotate-12"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CourseDurationAndStructure;