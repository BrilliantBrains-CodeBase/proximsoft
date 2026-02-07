import React from 'react';
import { Star, Layout, Clock, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { CourseData } from '../../../../types/course';

interface CourseCardProps {
  course: CourseData;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { course_details, curriculum, course_metrics, course_structure } = course;

  return (
    <div className="bg-white rounded-[1.25rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-all duration-300">
      {/* 1. Thumbnail Area */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <img 
          src={course_details.course_thumbnail} 
          alt={course_details.course_title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Top-Left: Rating Badge */}
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
          <Star size={10} className="fill-yellow-400 text-yellow-400" />
          <span className="text-[10px] font-black text-slate-800">
            {course_metrics.avg_rating}
          </span>
        </div>

        {/* Top-Right: Difficulty Level Badge (Exact Position) */}
        <div className="absolute top-3 right-3">
          <span className="bg-blue-600 text-white text-[9px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider shadow-lg">
            {course_details.difficulty_level}
          </span>
        </div>
      </div>

      {/* 2. Content Area */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Title & Author Line */}
        <div className="mb-1.5">
          <h3 className="text-base font-black text-slate-900 leading-tight inline group-hover:text-blue-600 transition-colors">
            {course_details.course_title}
          </h3>
          <span className="text-[10px] font-bold text-slate-400 ml-2">
            by <span className="text-blue-500">Proximsoft</span>
          </span>
        </div>
        
        {/* Short Description */}
        <p className="text-[11px] font-medium text-slate-500 line-clamp-2 mb-4 leading-normal h-8">
          {course_details.course_short_description}
        </p>

        {/* 3. Metadata Badges with Correct Icons */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          {/* Modules Badge */}
          <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1.5 rounded-lg border border-slate-100/50">
            <Layout size={11} className="text-blue-600" />
            <span className="text-[9px] font-bold text-slate-600">
              {curriculum.summary.total_modules} Modules
            </span>
          </div>
          {/* Timeline Badge */}
          <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1.5 rounded-lg border border-slate-100/50">
            <Clock size={11} className="text-blue-600" />
            <span className="text-[9px] font-bold text-slate-600">
              {course_structure.course_timeline}
            </span>
          </div>
          {/* Students Badge */}
          <div className="flex items-center gap-1.5 bg-blue-50/50 px-2 py-1.5 rounded-lg border border-blue-100/50 col-span-2">
            <Users size={11} className="text-blue-600" />
            <span className="text-[9px] font-bold text-slate-700">
              {course_metrics.total_students_enrolled.toLocaleString()}+ Students Enrolled
            </span>
          </div>
        </div>

        {/* 4. Solid CTA Button */}
        <Link 
          to={`${course_details.course_category.category_url}/${course_details.course_slug}`}
          className="mt-auto w-full bg-slate-900 text-white py-2.5 rounded-xl text-[10px] font-black hover:bg-blue-600 transition-all flex items-center justify-center gap-2 group/btn shadow-sm"
        >
          View Course
          <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;