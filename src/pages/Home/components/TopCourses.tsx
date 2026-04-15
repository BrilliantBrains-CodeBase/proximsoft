import { courseCategories } from "../../../data/categories/courseCategories";
import { courses } from "../../../data/courses/course";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";

// ─── Star Rating ──────────────────────────────────────────────────────────────
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-[3px]">
    <svg className="w-[14px] h-[14px] fill-yellow-400 shrink-0" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
    <span className="text-[12px] text-gray-500">({rating} Reviews)</span>
  </div>
);

// ─── Offset-shadow Arrow Button ───────────────────────────────────────────────
const ArrowBtn = ({
  direction,
  onClick,
  disabled,
}: {
  direction: "left" | "right";
  onClick: () => void;
  disabled: boolean;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "left" ? "Previous" : "Next"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "52px",
        height: "52px",
        backgroundColor: disabled ? "#e5e7eb" : "#5B4FCF",
        boxShadow: disabled
          ? "none"
          : hovered
          ? "none"
          : "4px 4px 0px 0px rgba(0,0,0,0.85)",
        transition: "box-shadow 0.18s ease, transform 0.18s ease, background-color 0.18s ease",
        transform: hovered && !disabled ? "scale(1.05)" : "scale(1)",
      }}
      className="rounded-full flex items-center justify-center cursor-pointer disabled:cursor-not-allowed active:scale-95"
    >
      {direction === "left" ? (
        <svg className={`w-5 h-5 ${disabled ? "text-gray-400" : "text-white"}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      ) : (
        <svg className={`w-5 h-5 ${disabled ? "text-gray-400" : "text-white"}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      )}
    </button>
  );
};

// ─── Enroll Now Button ────────────────────────────────────────────────────────
const EnrollBtn = ({ href }: { href: string }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: "#F5C518",
        boxShadow: hovered ? "none" : "4px 4px 0px 0px rgba(0,0,0,0.85)",
        transition: "box-shadow 0.18s ease, transform 0.18s ease",
        transform: hovered ? "translate(2px, 2px)" : "translate(0, 0)",
      }}
      className="inline-flex items-center gap-[7px] text-gray-900 font-bold text-[13px] px-[18px] py-[9px] rounded-full whitespace-nowrap active:scale-95"
    >
      Enroll Now
      <svg className="w-[14px] h-[14px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>
  );
};

// ─── Shine keyframe injected once ─────────────────────────────────────────────
const ShineStyle = () => (
  <style>{`
    @keyframes card-shine {
      0%   { transform: translateX(-120%) translateY(-120%) rotate(35deg); opacity: 0; }
      15%  { opacity: 1; }
      85%  { opacity: 1; }
      100% { transform: translateX(120%) translateY(120%) rotate(35deg); opacity: 0; }
    }
    .course-card-shine {
      animation: none;
    }
    .course-card:hover .course-card-shine {
      animation: card-shine 0.75s ease forwards;
    }
  `}</style>
);

// ─── Course Card ──────────────────────────────────────────────────────────────
const CourseCard = ({ course }: { course: (typeof courses)[0] }) => {
  const { course_details, pricing_and_enrollment, course_metrics } = course;
  const price = pricing_and_enrollment.discounted_price;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="course-card bg-white rounded-2xl flex flex-col w-full h-full cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        // offset shadow: drops right+bottom on rest, lifts on hover (shadow disappears + slight translate)
        boxShadow: hovered
        ? "12px 12px 0px 0px rgba(0,0,0,0.25)"
        : "1px 1px 1px 1px rgba(0,0,0,0.15)",
        transform: hovered ? "translate(2px, 2px)" : "translate(0, 0)",
        transition: "box-shadow 0.2s ease, transform 0.2s ease",
      }}
    >
      {/* ── Thumbnail with diagonal shine overlay ── */}
      <div className="relative w-full h-[190px] shrink-0 overflow-hidden rounded-t-2xl bg-white p-2 ">
        <img
          src={course_details.course_thumbnail}
          alt={course_details.course_title}
          className="w-full h-full object-contain rounded-2xl"
        />

        {/* Diagonal shine streak — triggered by CSS hover on .course-card */}
        <div
          className="course-card-shine pointer-events-none absolute inset-0"
          style={{
            /* wide diagonal band of semi-transparent white */
            background:
              "linear-gradient(135deg, transparent 20%, rgba(255,255,255,0.55) 50%, transparent 80%)",
            /* start off-screen top-left */
            transform: "translateX(-120%) translateY(-120%) rotate(35deg)",
            width: "200%",
            height: "200%",
            top: "-50%",
            left: "-50%",
          }}
        />
      </div>

      {/* ── Body ── */}
      <div className="px-5 pt-4 pb-5 flex flex-col flex-1 gap-[10px]">

        {/* category + rating */}
        <div className="flex items-center justify-between gap-2">
          <span className="border border-gray-200 text-gray-600 text-[11px] font-medium rounded-full px-3 py-[3px] leading-[1.6] truncate max-w-[130px]">
            {course_details.course_category.category_title}
          </span>
          <StarRating rating={course_metrics.avg_rating} />
        </div>

        {/* title */}
        <h3 className="font-semibold text-gray-900 text-[15px] leading-[1.45] line-clamp-2 flex-1">
          {course_details.course_title}
        </h3>

        {/* instructor */}
        <p className="text-[13px] text-gray-500 leading-none">
          By <span className="font-semibold text-gray-700">Proximsoft</span>
        </p>

        {/* CTA row */}
        <div className="flex items-center justify-between mt-[2px]">
          <EnrollBtn href={`${course_details.course_category.category_url}/${course_details.course_slug}`} />
          <span className="text-[#5B4FCF] font-extrabold text-[18px] leading-none">
            {price === 0 ? " " : `$${price.toFixed(2)}`}
          </span>
        </div>

      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const TopCourses = () => {
  const [activeCategory, setActiveCategory] = useState<string>("CAT_AI");
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  const sortedCategories = courseCategories
    .filter((c) => c.isActive)
    .sort((a, b) => a.sequence - b.sequence);

  const tabs = [
    
    ...sortedCategories.map((c) => ({ id: c.categoryId, title: c.title })),
  ];

  const filtered =
    activeCategory === "ALL"
      ? courses
      : courses.filter(
          (c) => c.course_details.course_category.category_id === activeCategory
        );

  const handleTabChange = (id: string) => {
    setActiveCategory(id);
    setIsBeginning(true);
    setIsEnd(false);
    swiperRef.current?.slideTo(0);
  };

  return (
    <section className="w-full bg-[#f5f4fb]  relative overflow-hidden py-10">

      <ShineStyle />
      {/* bg blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-purple-100/50 blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-indigo-100/50 blur-3xl pointer-events-none translate-x-1/2 translate-y-1/2" />

      <div className="max-w-[1320px] mx-auto px-4 md:px-8">

        {/* ── Header ─────────────────────────────────────────────────── */}
        <div className="flex flex-col items-center text-center mb-4 gap-[10px]">
          <span className="border-2 border-[#5B4FCF] bg-white/80 text-[#5B4FCF] text-[13px] font-semibold px-5 py-1 rounded-full">
            Top Class Courses
          </span>
          <h2 className="text-[28px] md:text-[32px] font-semibold text-gray-900 tracking-[-0.5px] leading-tight py-4">
            Explore Our World's Best Courses
          </h2>
          <p className="text-gray-400 text-[14px] max-w-[400px] leading-relaxed">
            Explore our most in-demand courses designed to accelerate your tech career.
          </p>
        </div>

        {/* ── Tabs — NO scrollbar, wraps gracefully ──────────────────── */}
        <div className="flex justify-center mb-2">
          {/* 
            overflow-x-auto but hide ALL scrollbars via inline style trick.
            We also allow wrapping on very small screens.
          */}
          <div
            className="flex flex-wrap justify-center border-b border-gray-200 w-full py-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`relative px-4 md:px-5 py-[10px] text-[13px] md:text-[14px] font-semibold transition-colors duration-150 whitespace-nowrap outline-none
                  ${activeCategory === tab.id ? "text-gray-900" : "text-gray-400 hover:text-gray-600"}`}
              >
                {tab.title}
                {activeCategory === tab.id && (
                  <motion.div
                    layoutId="tab-line"
                    className="absolute bottom-[-1px] left-0 right-0 h-[3px] bg-[#5B4FCF] rounded-t-full"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ── Swiper + Arrows ────────────────────────────────────────── */}
        <div className="relative">

          {/* Left arrow — desktop only */}
          <div className="hidden md:flex absolute -left-16 top-1/2 -translate-y-1/2 z-20">
            <ArrowBtn
              direction="left"
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={isBeginning}
            />
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640:  { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            className="!overflow-visible md:!overflow-hidden py-2"
          >
            {filtered.map((course) => (
              <SwiperSlide key={course.course_details.course_uid} className="!h-auto py-6">
                <CourseCard course={course} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Right arrow — desktop only */}
          <div className="hidden md:flex absolute -right-16 top-1/2 -translate-y-1/2 z-20">
            <ArrowBtn
              direction="right"
              onClick={() => swiperRef.current?.slideNext()}
              disabled={isEnd}
            />
          </div>

        </div>

        {/* ── Mobile arrows ─────────────────────────────────────────── */}
        <div className="flex md:hidden justify-center gap-4 mt-6">
          <ArrowBtn
            direction="left"
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
          />
          <ArrowBtn
            direction="right"
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
          />
        </div>

      </div>
    </section>
  );
};

export default TopCourses;