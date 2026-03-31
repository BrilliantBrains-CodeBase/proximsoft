import { useState } from "react";
import type { CourseData } from "../../../../types/course";

interface CourseSidebarProps {
  courseData: CourseData;
}

const CourseSidebar = ({ courseData }: CourseSidebarProps) => {
  const [showVideo, setShowVideo] = useState(false);

  const {
    course_details,
    course_structure,
    course_metrics,
    certification_details,
    curriculum,
    pricing_and_enrollment,
  } = courseData;

  const { difficulty_level, course_thumbnail, course_title } = course_details;
  const { total_duration } = course_structure;
  const { total_students_enrolled } = course_metrics;
  const { is_certified } = certification_details;
  const { total_modules, total_lectures } = curriculum.summary;
  const { enrollment_link } = pricing_and_enrollment;

  const handleEnrollClick = () => {
    const target = document.getElementById("lead-form");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const courseIncludes = [
    {
      label: "Level",
      value: difficulty_level,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M18 20V10M12 20V4M6 20v-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      label: "Duration",
      value: total_duration,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      label: "Lessons",
      value: total_lectures,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      label: "Modules",
      value: total_modules,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M9 11l3 3L22 4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      label: "Certifications",
      value: is_certified ? "Yes" : "No",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M12 15l-2 5L9 9l11 4-5 2zm0 0l4.5 4.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      label: "Graduation",
      value: `${(total_students_enrolled / 1000).toFixed(0)}K`,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 12v5c3.333 1.667 8.667 1.667 12 0v-5" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  const socialLinks = [
    {
      label: "Facebook",
      href: "#",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      ),
    },
    {
      label: "Twitter",
      href: "#",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>
      ),
    },
    {
      label: "WhatsApp",
      href: "#",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.122 1.523 5.854L.057 23.885a.5.5 0 00.606.606l6.063-1.467A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.938 9.938 0 01-5.084-1.396l-.364-.216-3.768.912.93-3.739-.236-.374A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "#",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="17.5" cy="6.5" r="1" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: "#",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
          <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* ── YouTube Overlay ── */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.85)" }}
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
              </svg>
            </button>
            {/* YouTube iframe — replace VIDEO_ID with actual ID */}
            <div style={{ aspectRatio: "16/9" }}>
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title={course_title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* ── Sidebar ── */}
      <div className="w-full lg:w-72 xl:w-80 flex-shrink-0">
        <div className="rounded-2xl border border-gray-100 shadow-sm bg-white overflow-hidden">

          {/* ── Thumbnail with play button ── */}
          <div
            className="relative w-full cursor-pointer group"
            style={{ aspectRatio: "16/9" }}
            onClick={() => setShowVideo(true)}
          >
            <img
              src={course_thumbnail}
              alt={course_title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110"
                style={{ background: "linear-gradient(135deg, #FFC224, #FFC224)" }}
              >
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </div>
            </div>
            {/* Preview label */}
            <div className="absolute bottom-3 left-0 right-0 text-center">
              
            </div>
          </div>

          {/* ── Course Includes ── */}
          <div className="px-6 py-5">
            <p className="text-gray-900 font-semibold text-base mb-4">Course includes:</p>
            <ul className="divide-y divide-gray-100">
              {courseIncludes.map((item, index) => (
                <li key={index} className="flex items-center justify-between py-3 text-sm">
                  <div className="flex items-center gap-2.5 text-gray-500">
                    {item.icon}
                    <span className="text-gray-600">{item.label}</span>
                  </div>
                  <span className="font-medium text-gray-800">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-gray-100" />

          {/* ── Share this course ── */}
          <div className="px-6 py-5">
            <p className="text-gray-900 font-semibold text-base mb-3">Share this course:</p>
            <div className="flex items-center gap-2.5">
              {socialLinks.map((s) => (
                
                <a  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 transition-all duration-200"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "#6c5fcf";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "#6c5fcf";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "";
                    (e.currentTarget as HTMLAnchorElement).style.color = "";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-100" />

          {/* ── Enroll Now CTA ── */}
          {/* ── Enroll Now CTA ── */}
            <div className="px-6 py-5">
            <button
                onClick={handleEnrollClick}
                className="group flex items-center justify-center gap-3 w-full py-3.5 rounded-full font-bold text-[15px] text-white bg-[#FFC224] transition-all duration-300 hover:bg-[#5751E1] hover:text-[#161439] cursor-pointer"
                style={{ boxShadow: "6px 6px 0px 0px #000000" }}
                onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translate(4px, 4px)";
                }}
                onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "6px 6px 0px 0px #000000";
                e.currentTarget.style.transform = "translate(0px, 0px)";
                }}
            >
                Enroll Now
                <svg
                width="16" height="14" viewBox="0 0 16 14" fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
                >
                <path
                    d="M1 7L15 7M15 7L9 1M15 7L9 13"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                </svg>
            </button>
            </div>

        </div>
      </div>
    </>
  );
};

export default CourseSidebar;