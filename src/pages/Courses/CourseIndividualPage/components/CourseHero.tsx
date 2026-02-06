import React from 'react';
import { LucideStar, LucideUsers, LucideClock, LucideCheckCircle2, LucideInfo } from 'lucide-react';
import type { CourseDetails, CourseMetrics, CourseStructure, PricingAndEnrollment } from '../../../../types/course';

interface CourseHeroProps {
  details: CourseDetails;
  metrics: CourseMetrics;
  structure: CourseStructure;
  pricing: PricingAndEnrollment;
}

const CourseHero: React.FC<CourseHeroProps> = ({ details, metrics, structure,}) => {
  return (
    <section className="bg-[#f4f9ff] rounded-2xl p-6 lg:p-10 border border-blue-100/50 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT SECTION: Main Content */}
        <div className="lg:col-span-8 space-y-5">
          
          {/* Subtle Difficulty Badge */}
          <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 text-[10px] font-bold px-2.5 py-1 rounded-md border border-amber-200/50 uppercase tracking-wider">
            {details.difficulty_level}
          </div>

          {/* Titles & Description - Reduced Weights */}
          <div className="space-y-3">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 tracking-tight">
              {details.course_title}
            </h1>
            <p className="text-base font-semibold text-slate-600 leading-snug max-w-2xl">
              {details.course_subtitle}
            </p>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xl">
              {details.course_short_description}
            </p>
          </div>

          {/* Metric Pills - Smaller & Flatter */}
          <div className="flex flex-wrap gap-2 pt-1">
            <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-slate-600 text-xs font-semibold">
              <LucideStar size={14} className="text-amber-400 fill-amber-400" />
              {metrics.avg_rating} <span className="text-slate-400 font-normal">({metrics.total_reviews}+)</span>
            </div>
            
            <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-slate-600 text-xs font-semibold">
              <LucideUsers size={14} className="text-blue-500" />
              {(metrics.total_students_enrolled / 1000).toFixed(0)}K+ Students
            </div>

            <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-slate-600 text-xs font-semibold">
              <LucideClock size={14} className="text-blue-500" />
              {structure.course_timeline}
            </div>

            <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-lg px-3 py-1.5 text-xs font-bold uppercase tracking-tight">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              {details.course_status}
            </div>
          </div>

          {/* Thumbnail Image - Thinner Border, Smaller Radius */}
          <div className="mt-4 rounded-xl overflow-hidden border-4 border-white shadow-md max-w-lg">
            <img 
              src={details.course_thumbnail} 
              alt={details.course_title} 
              className="w-full h-auto object-cover aspect-video"
            />
          </div>
        </div>

        {/* RIGHT SECTION: Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Compact Action Card */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 space-y-3">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base font-bold py-3 rounded-lg transition-colors shadow-sm active:scale-[0.98]">
              Enroll Now
            </button>
            
            <button className="w-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-base font-bold py-3 rounded-lg transition-colors active:scale-[0.98]">
              Enquire
            </button>
            
            <div className="flex items-center justify-center gap-2 py-2 px-3 bg-red-50 rounded-lg border border-red-100">
              <LucideInfo size={14} className="text-red-500" />
              <p className="text-red-600 text-[11px] font-bold uppercase tracking-tight">
                Limited seats available
              </p>
            </div>
          </div>

          {/* "What you get" List - Cleaned up spacing */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 mt-10">
            <h3 className="text-slate-800 font-bold text-sm mb-5">Course Highlights</h3>
            <ul className="space-y-4">
              {[
                { label: "Duration", value: structure.course_timeline },
                { label: "Weekly Commitment", value: structure.weekly_commitment_duration },
                { label: "Batch Type", value: details.batch_type },
                { label: "Format", value: "On-line/Off-line" },
                {label: "Project", value: "Yes Included" },
                {label: "Certifications", value:"Yes Included"}
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <LucideCheckCircle2 className="text-blue-500 flex-shrink-0" size={18} />
                  <div className="space-y-0.5">
                    <p className="text-slate-400 font-bold text-[10px] uppercase tracking-wide leading-none">{item.label}</p>
                    <p className="text-slate-700 text-xs font-semibold">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CourseHero;