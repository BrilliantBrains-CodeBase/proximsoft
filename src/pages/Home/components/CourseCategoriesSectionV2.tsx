import { useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

import { courseCategories } from "../../../data/categories/courseCategories";

const CourseCategoriesSectionV2 = () => {
  const navigate = useNavigate();
  const swiperRef = useRef<SwiperType | null>(null);

  const categories = courseCategories
    .filter((cat) => cat.isActive)
    .sort((a, b) => a.sequence - b.sequence);

  return (
    <section className="w-full py-16 px-4">
      {/* ── HEADER ── */}
      <div className="text-center mb-12">
        <span
          className="inline-block text-sm font-medium px-5 py-[6px] rounded-full mb-4"
          style={{ backgroundColor: "#ebebf8", color: "#5751E1" }}
        >
          Trending Categories
        </span>

        <h2 className="text-[32px] md:text-[40px] font-semibold text-[#161439] leading-tight">
          Top Category We Have
        </h2>

        <p className="mt-3 text-[15px] text-gray-400 max-w-xl mx-auto">
          when known printer took a galley of type scrambl edmake
        </p>
      </div>

      {/* ── SLIDER WRAPPER — extra px so arrows don't get cut ── */}
      <div className="relative max-w-[1200px] mx-auto md:px-10 ">
        {/* ── Track pill — overflow-hidden keeps cards inside ── */}
        <div
          className="rounded-full py-12 px-12 overflow-hidden"
          style={{ backgroundColor: "#f0f0f6" }}
        >
          <Swiper
            modules={[]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={2}
            spaceBetween={16}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: { slidesPerView: 2, spaceBetween: 12 },
              480: { slidesPerView: 2, spaceBetween: 16 },
              640: { slidesPerView: 3, spaceBetween: 20 },
              900: { slidesPerView: 4, spaceBetween: 24 },
              1100: { slidesPerView: 5, spaceBetween: 24 },
            }}
          >
            {categories.map((category) => (
              <SwiperSlide key={category.uid}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="flex flex-col items-center cursor-pointer group py-6 pb-4 md:pb-2 transition-all duration-300"
                  style={{ borderRadius: "100px" }}
                  onClick={() => navigate(`/courses?category=${category.categoryId}`)}
                >
                  {/* ── Circle ── */}
                  <div
                    className="
      relative rounded-full flex items-center justify-center transition-all duration-300 
      w-[120px] h-[120px]
      sm:w-[140px] sm:h-[140px]
      md:w-[170px] md:h-[170px]
    "
                    style={{
                      background:
                        "radial-gradient(circle at 60% 40%, #e8e8f4 0%, #d4d4ea 100%)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.background =
                        "radial-gradient(circle at 60% 40%, #6b63e8 0%, #5046c8 100%)";
                      el.style.boxShadow = "6px 6px 0px rgba(0,0,0,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.background =
                        "radial-gradient(circle at 60% 40%, #e8e8f4 0%, #d4d4ea 100%)";
                      el.style.boxShadow = "none";
                    }}
                  >
                    {/* ✨ Stars */}
                    <span className="absolute top-4 right-10 sm:top-5 sm:right-12 md:top-6 md:right-14 text-[#b0b0d8] group-hover:text-white text-[12px] sm:text-[13px] md:text-[14px] transition-all duration-300">
                      ✦
                    </span>
                    <span className="absolute top-7 right-7 sm:top-8 sm:right-9 md:top-10 md:right-10 text-[#b0b0d8] group-hover:text-white text-[9px] sm:text-[10px] md:text-[10px] transition-all duration-300">
                      ✦
                    </span>
                    <span className="absolute top-5 right-5 sm:top-6 sm:right-7 md:top-7 md:right-8 text-[#b0b0d8] group-hover:text-white text-[7px] sm:text-[8px] md:text-[8px] transition-all duration-300">
                      ✦
                    </span>

                    {/* ── Icon ── */}
                    <img
                      src={category.icon}
                      alt={category.title}
                      className="
        w-[36px] h-[36px]
        sm:w-[42px] sm:h-[42px]
        md:w-[48px] md:h-[48px]
        object-contain transition-all duration-300
        group-hover:brightness-0 group-hover:invert
      "
                    />
                  </div>

                  {/* ── Text ── */}
                  <div className="mt-4 md:mt-5 text-center">
                    <h3 className="text-[13px] sm:text-[14px] md:text-[15px] font-bold text-[#161439] group-hover:text-[#5751E1] transition-colors duration-200">
                      {category.title}
                    </h3>
                    <p className="text-[12px] sm:text-[13px] text-gray-400 mt-1">
                      ({category.courseCount})
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ── PREV button — left side, black offset shadow, removed on hover ── */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous"
          className="
            absolute left-[-4px] top-1/2 -translate-y-1/2 z-10
            flex items-center justify-center
            rounded-full
            transition-all duration-200
            hover:scale-105 active:scale-95
          "
          style={{
            width: "52px",
            height: "52px",
            backgroundColor: "#FFC224",
            /* right+bottom black offset shadow */
            boxShadow: "4px 4px 0px 0px rgba(0,0,0,0.85)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.boxShadow =
              "4px 4px 0px 0px rgba(0,0,0,0.85)";
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M11 3L5 9L11 15"
              stroke="#161439"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* ── NEXT button — right side, black offset shadow, removed on hover ── */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next"
          className="
            absolute right-[-4px] top-1/2 -translate-y-1/2 z-10
            flex items-center justify-center
            rounded-full
            transition-all duration-200
            hover:scale-105 active:scale-95
          "
          style={{
            width: "52px",
            height: "52px",
            backgroundColor: "#FFC224",
            boxShadow: "4px 4px 0px 0px rgba(0,0,0,0.85)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.boxShadow =
              "4px 4px 0px 0px rgba(0,0,0,0.85)";
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M7 3L13 9L7 15"
              stroke="#161439"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default CourseCategoriesSectionV2;
