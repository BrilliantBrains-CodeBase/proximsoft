import { useState } from "react";
import { courses } from "../../../data/courses/course";

// ─── Star Rating ─────────────────────────────────────────────
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-[3px]">
    <svg className="w-[14px] h-[14px] fill-yellow-400 shrink-0" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
    <span className="text-[12px] text-gray-500">({rating} Reviews)</span>
  </div>
);

// ─── Enroll Button ───────────────────────────────────────────
const EnrollBtn = ({ href }: { href: string }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: "#F5C518",
        boxShadow: hovered ? "none" : "4px 4px 0px rgba(0,0,0,0.85)",
        transform: hovered ? "translate(2px,2px)" : "translate(0,0)",
        transition: "all 0.18s ease",
      }}
      className="inline-flex items-center gap-[7px] text-gray-900 font-bold text-[13px] px-[18px] py-[9px] rounded-full"
    >
      Enroll Now
    </a>
  );
};

// ─── Course Card V2 ──────────────────────────────────────────
const CourseCardV2 = ({
  course,
  view = "grid",
}: {
  course: (typeof courses)[0];
  view?: string;
}) => {
  const { course_details, pricing_and_enrollment, course_metrics } = course;
  const price = pricing_and_enrollment.discounted_price;

  const [hovered, setHovered] = useState(false);

  const isList = view === "list";

  return (
    <div
      className={`bg-white rounded-2xl w-full ${isList ? "flex flex-row items-start" : "flex flex-col h-full"}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        boxShadow: hovered
          ? "12px 12px 0px rgba(0,0,0,0.25)"
          : "1px 1px 1px rgba(0,0,0,0.15)",
        transform: hovered ? "translate(2px,2px)" : "translate(0,0)",
        transition: "all 0.2s ease",
      }}
    >
      {/* Thumbnail */}
      <div
        className={`shrink-0 p-2 ${
          isList
            ? "w-[200px] h-[140px]"
            : "w-full h-[190px]"
        }`}
      >
        <img
          src={course_details.course_thumbnail}
          alt={course_details.course_title}
          className="w-full h-full object-contain rounded-xl"
        />
      </div>

      {/* Content */}
      <div
        className={`flex flex-col gap-[10px] flex-1 px-5 pb-5 ${
          isList ? "pt-4" : ""
        }`}
      >
        <div className="flex justify-between flex-wrap gap-1">
          <span className="text-[11px] text-gray-500">
            {course_details.course_category.category_title}
          </span>
          <StarRating rating={course_metrics.avg_rating} />
        </div>

        <h3 className="text-[15px] font-semibold line-clamp-2">
          {course_details.course_title}
        </h3>

        <p className="text-[13px] text-gray-500">
          By <span className="font-semibold">Proximsoft</span>
        </p>

        <div className="flex justify-between items-center mt-auto">
          <EnrollBtn
            href={`${course_details.course_category.category_url}/${course_details.course_slug}`}
          />
          <span className="text-[#5B4FCF] font-bold">
            {price === 0 ? " " : `$${price}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCardV2;