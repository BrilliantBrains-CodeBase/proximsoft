import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants, Transition } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// ── Swiper styles (import in your global CSS or here for isolation)
import "swiper/css";

import  type { TestimonialData } from "../../../data/testimonials/testimonials";
import { testimonials } from "../../../data/testimonials/testimonials";

// ── Types ─────────────────────────────────────────────────────────────────────

interface StarRatingProps {
  count?: number;
}

// ── Sub-components ────────────────────────────────────────────────────────────

const StarRating: React.FC<StarRatingProps> = ({ count = 5 }) => (
  <div className="flex items-center gap-[3px]">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M9 1.5L10.854 6.636H16.364L11.755 9.864L13.609 15L9 11.772L4.391 15L6.245 9.864L1.636 6.636H7.146L9 1.5Z"
          fill="#FFC224"
        />
      </svg>
    ))}
  </div>
);

const QuoteIcon: React.FC = () => (
  <svg width="44" height="38" viewBox="0 0 44 38" fill="none" className="opacity-20">
    <path
      d="M0 38V23.1C0 19.1 0.833333 15.3667 2.5 11.9C4.16667 8.43333 6.5 5.46667 9.5 3C12.5 0.533333 16.1 -0.533333 20.3 0.2L19.1 4.8C16.3667 4.26667 13.9333 5 11.8 7C9.66667 9 8.13333 11.5 7.2 14.5H13V38H0ZM25 38V23.1C25 19.1 25.8333 15.3667 27.5 11.9C29.1667 8.43333 31.5 5.46667 34.5 3C37.5 0.533333 41.1 -0.533333 45.3 0.2L44.1 4.8C41.3667 4.26667 38.9333 5 36.8 7C34.6667 9 33.1333 11.5 32.2 14.5H38V38H25Z"
      fill="#5751E1"
    />
  </svg>
);

const TestimonialCard: React.FC<{ item: TestimonialData }> = ({ item }) => (
  <div
    className="relative flex flex-col gap-5 rounded-2xl p-6 sm:p-8 h-full bg-[#f5f4fc] select-none"
    style={{ boxShadow: "6px 6px 0px 0px rgba(0,0,0,0.20)" }}
  >
    {/* Quote icon — top right */}
    <div className="absolute top-5 right-6">
      <QuoteIcon />
    </div>

    {/* Author row */}
    <div className="flex items-center gap-4">
      <img
        src={item.avatar}
        alt={item.author}
        className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md flex-shrink-0"
      />
      <div className="flex flex-col gap-1">
        <StarRating />
        <h4 className="text-[16px] font-extrabold text-[#161439] leading-tight">
          {item.author}
        </h4>
      </div>
    </div>

    {/* Quote */}
    <p className="text-gray-500 text-[14px] sm:text-[15px] leading-relaxed">
      &ldquo; {item.quote}&rdquo;
    </p>
  </div>
);

// ── Variants ──────────────────────────────────────────────────────────────────

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" } as Transition,
  },
};

const sliderVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.3, ease: "easeOut" } as Transition,
  },
};

// ── Nav button ────────────────────────────────────────────────────────────────

interface NavButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ direction, onClick }) => (
  <motion.button
    onClick={onClick}
    aria-label={direction === "prev" ? "Previous" : "Next"}
    className="flex-shrink-0 w-12 h-12 rounded-full bg-[#5751E1] text-white flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-[#FFC224]"
    style={{ boxShadow: "4px 4px 0px 0px rgba(0,0,0,0.90)" }}
    whileHover={{ x: direction === "prev" ? -3 : 3, y: -3, boxShadow: "7px 7px 0px 0px rgba(0,0,0,0.18)" }}
    whileTap={{ scale: 0.93 }}
    transition={{ duration: 0.2 }}
  >
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
      {direction === "prev" ? (
        <path d="M17 7H1M1 7L7 1M1 7L7 13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M1 7H17M17 7L11 1M17 7L11 13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  </motion.button>
);

// ── Main Component ────────────────────────────────────────────────────────────

const TestimonialsSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="w-full py-16 sm:py-20 px-4 sm:px-8 lg:px-16 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-14 gap-4">

          {/* Badge */}
          <motion.span
            className="inline-block bg-[#e8e5f8] text-[#5751E1] text-sm font-semibold px-5 py-1.5 rounded-full"
            variants={headingVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            Our Testimonials
          </motion.span>

          {/* H2 */}
          <motion.h2
            className="text-[28px] sm:text-[36px] lg:text-3xl font-semibold text-[#161439] leading-tight max-w-xl"
            variants={headingVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.1 }}
          >
            What Students Think And Say About Proximsoft
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="text-gray-400 text-[15px] sm:text-[16px] max-w-md"
            variants={headingVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            Real results from real learners across the globe
          </motion.p>
        </div>

        {/* ── Slider row ── */}
        <motion.div
          className="flex items-center gap-4 sm:gap-6"
          variants={sliderVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Prev */}
          <NavButton direction="prev" onClick={() => swiperRef.current?.slidePrev()} />

          {/* Swiper */}
          <div className="flex-1 min-w-0">
            <Swiper
              modules={[Navigation]}
              onSwiper={(swiper) => { swiperRef.current = swiper; }}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640:  { slidesPerView: 1, spaceBetween: 20 },
                768:  { slidesPerView: 2, spaceBetween: 22 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
              }}
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id} className="!h-auto py-4">
                  <motion.div
                    className="h-full"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: Number(item.id) * 0.1 }}
                  >
                    <TestimonialCard item={item} />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Next */}
          <NavButton direction="next" onClick={() => swiperRef.current?.slideNext()} />
        </motion.div>

      </div>
    </section>
  );
};

export default TestimonialsSection;