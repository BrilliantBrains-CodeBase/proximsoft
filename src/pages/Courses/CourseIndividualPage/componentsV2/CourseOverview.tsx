import type { CourseData } from "../../../../types/course";

interface CourseOverviewProps {
  courseData: CourseData;
}

const CourseOverview = ({ courseData }: CourseOverviewProps) => {
  const { course_details, course_metrics, course_structure, pricing_and_enrollment, certification_details, metadata } = courseData;
  const { course_title, course_thumbnail, course_category, difficulty_level } = course_details;
  const { avg_rating, total_students_enrolled } = course_metrics;
  const { base_price, discounted_price, currency } = pricing_and_enrollment;
  const { total_duration } = course_structure;
  const { is_certified } = certification_details;

  const formattedDate = new Date(metadata.course_date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const currencySymbol = currency === "USD" ? "$" : currency;

  const courseIncludes = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M18 20V10M12 20V4M6 20v-6" />
        </svg>
      ),
      label: "Level",
      value: difficulty_level,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      label: "Duration",
      value: total_duration,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      ),
      label: "Modules",
      value: courseData.curriculum.summary.total_modules,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M9 11l3 3L22 4" />
          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
        </svg>
      ),
      label: "Quizzes",
      value: courseData.curriculum.summary.total_lectures,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M12 15l-2 5L9 9l11 4-5 2zm0 0l4.5 4.5" />
        </svg>
      ),
      label: "Projects",
      value: courseData.project_details.total_projects,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="4" />
          <path d="M6 20v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
        </svg>
      ),
      label: "Certifications",
      value: is_certified ? "Yes" : "No",
    },
  ];

  return (
    <div className="w-full flex flex-col lg:flex-row gap-8 items-start">

      {/* ── Left column ── */}
      <div className="flex-1 min-w-0">

        {/* Thumbnail */}
        <div className="w-full rounded-2xl overflow-hidden mb-5" style={{ aspectRatio: "16/9" }}>
          <img
            src={course_thumbnail}
            alt={course_title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Category + Rating */}
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <span className="text-sm text-gray-700 border border-gray-300 rounded-full px-3 py-0.5 font-normal">
            {course_category.category_title}
          </span>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm text-gray-600">({avg_rating} Reviews)</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug mb-4">
          {course_title}
        </h1>

        {/* Instructor + Date + Students */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-gray-500">
          {/* Avatar + name */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
              <img
                src="https://ui-avatars.com/api/?name=Proximsoft&background=6c5fcf&color=fff"
                alt="Instructor"
                className="w-full h-full object-cover"
              />
            </div>
            <span>
              By <span className="font-semibold text-gray-800">Proximsoft</span>
            </span>
          </div>

          <span className="text-gray-300 font-medium">•</span>

          {/* Date */}
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>{formattedDate}</span>
          </div>

          <span className="text-gray-300 font-medium">•</span>

          {/* Students */}
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
              <path d="M6 12v5c3.333 1.667 8.667 1.667 12 0v-5" />
            </svg>
            <span>{total_students_enrolled.toLocaleString()} Students</span>
          </div>
        </div>
      </div>

      {/* ── Right column — Pricing Sidebar ── */}
      <div className="w-full lg:w-80 flex-shrink-0">
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">

          {/* Price banner */}
          <div
            className="px-6 py-5"
            style={{ background: "linear-gradient(135deg, #6c5fcf 0%, #8b7dd8 100%)" }}
          >
            <p className="text-white text-sm font-medium mb-1 opacity-90">This Course Fee:</p>
            <div className="flex items-baseline gap-3">
              <span className="text-white text-3xl font-bold">
                {currencySymbol}{discounted_price > 0 ? discounted_price.toFixed(2) : "Free"}
              </span>
              {base_price > 0 && discounted_price < base_price && (
                <span className="text-white/60 text-lg line-through">
                  {currencySymbol}{base_price.toFixed(2)}
                </span>
              )}
            </div>
          </div>

          {/* Course includes */}
          <div className="bg-white px-6 py-5">
            <p className="text-gray-900 font-semibold text-base mb-4">Course includes:</p>
            <ul className="space-y-3">
              {courseIncludes.map((item, index) => (
                <li key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2.5 text-gray-500">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  <span className="font-medium text-gray-800">{item.value}</span>
                </li>
              ))}
            </ul>

            {/* Enroll button */}
            
            <a  href={pricing_and_enrollment.enrollment_link}
              className="mt-6 block w-full text-center py-3 rounded-xl font-semibold text-white text-sm transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #6c5fcf 0%, #8b7dd8 100%)" }}
            >
              Enroll Now
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CourseOverview;