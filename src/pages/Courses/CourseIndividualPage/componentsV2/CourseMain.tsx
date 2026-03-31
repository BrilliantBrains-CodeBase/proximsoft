import type { CourseData } from "../../../../types/course";

interface CourseCardProps {
  courseData: CourseData;
}

const CourseMain = ({ courseData }: CourseCardProps) => {
  const { course_details, course_metrics, metadata } = courseData;
  const {
    course_title,
    course_thumbnail,
    course_category,
    difficulty_level,
  } = course_details;
  const { avg_rating, total_reviews, total_students_enrolled } = course_metrics;

  const formattedDate = new Date(metadata.course_date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div className="w-full max-w-4xl rounded-2xl overflow-hidden bg-white">

      {/* Thumbnail */}
      <div className="w-full aspect-video overflow-hidden rounded-2xl">
        <img
          src={course_thumbnail}
          alt={course_title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="pt-4 px-1">

        {/* Category + Difficulty + Rating Row */}
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <span className="text-md text-gray-700 border border-gray-300 rounded-full px-3 py-0.5 font-normal">
            {course_category.category_title}
          </span>

          {/* Difficulty badge */}
          <span className="text-sm font-medium rounded-full px-3 py-0.5"
            style={{ background: "#ede9f6", color: "#6c5fcf" }}
          >
            {difficulty_level}
          </span>

          {/* Rating */}
          <div className="flex items-center gap-1.5">
            <svg
              className="w-4 h-4 text-yellow-400 fill-yellow-400"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium text-gray-700">{avg_rating}</span>
            <span className="text-sm text-gray-400">({total_reviews.toLocaleString()} Reviews)</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-3xl font-semibold text-gray-900 leading-snug mb-4">
          {course_title}
        </h2>

        {/* Instructor + Date + Students */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">

          {/* Instructor */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
              <img
                src="/images/default-avatar.png"
                alt="Instructor"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://ui-avatars.com/api/?name=Proximsoft&background=6c5fcf&color=fff";
                }}
              />
            </div>
            <span>
              By <span className="font-medium text-gray-700">Proximsoft</span>
            </span>
          </div>

          <span className="text-gray-300">•</span>

          {/* Date */}
          <div className="flex items-center gap-1.5">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>{formattedDate}</span>
          </div>

          <span className="text-gray-300">•</span>

          {/* Students */}
          <div className="flex items-center gap-1.5">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
              <path d="M6 12v5c3.333 1.667 8.667 1.667 12 0v-5" />
            </svg>
            <span>{total_students_enrolled.toLocaleString()} Students</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CourseMain;