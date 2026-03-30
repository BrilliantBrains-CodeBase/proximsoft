import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ"; // Replace with your actual YouTube video ID

const features = [
  "Certified Trainers With Real Industry Experience",
  "Live Interactive Classes From Anywhere",
  "Placement Support Included",
];

const AboutUsSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  const navigate=useNavigate();

  return (
    <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-14 lg:gap-20">

        {/* ── LEFT: circular image with play button ── */}
        <motion.div
          className="relative flex-shrink-0 w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[460px] lg:h-[460px]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Circular clipped image */}
          <div className="w-full h-full rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80"
              alt="Students"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Play button overlay */}
          <button
            onClick={() => setShowVideo(true)}
            className="absolute inset-0 flex items-center justify-center group"
            aria-label="Play video"
          >
            <motion.div
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Triangle play icon */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 3L17 10L5 17V3Z" fill="#5751E1" />
              </svg>
            </motion.div>
          </button>

          {/* Decorative scribble lines — top right of circle */}
          <span
            className="absolute pointer-events-none"
            style={{ top: "10px", right: "-10px", width: "70px", height: "60px" }}
          >
            <svg width="100%" height="100%" viewBox="0 0 80 68" fill="none">
              <path d="M10 50 C20 30, 30 10, 50 5" stroke="#5751E1" strokeWidth="3" strokeLinecap="round" />
              <path d="M25 58 C40 42, 55 28, 72 18" stroke="#5751E1" strokeWidth="3" strokeLinecap="round" />
              <path d="M40 62 C50 52, 62 42, 75 36" stroke="#5751E1" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
        </motion.div>

        {/* ── RIGHT: content ── */}
        <div className="flex-1 flex flex-col items-start gap-5">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-[#ede9f6] text-[#5751E1] text-sm font-medium px-4 py-1.5 rounded-full">
              Get More About Us

            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="font-bold font-sans text-[#161439] leading-[1.15] text-[28px] sm:text-[34px] lg:text-[40px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* LINE 1 */}
            <span className="block">Helping Students Discover</span>

            {/* LINE 2 — "Their [Potential] And Rise Higher" */}
            <span className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
              <span>Their</span>

              {/* Yellow blob pill */}
              <span className="relative inline-flex items-center justify-center">
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 180 52"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 7C60 -1, 120 -2, 176 4C179 4.5, 181 7, 180 10C178 22, 177 33, 176 44C176 47, 173 50, 170 50C115 56, 62 57, 10 53C7 53, 4 50, 3.5 47C2 35, 1 23, 0 11C-0.5 8, 1.5 7.5, 4 7Z"
                    fill="#FFC224"
                  />
                </svg>
                <span className="relative text-white font-extrabold px-5 py-[4px] leading-none">
                  Potential
                </span>
              </span>

              <span>And Rise Higher</span>
            </span>

            {/* LINE 3 */}
            <span className="block mt-1">For The Next Challenge</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-gray-500 text-[15px] leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Proximsoft is a global IT training and placement provider serving learners across the USA, Canada, Germany, UAE and the UK with live, job-ready programs built for real hiring needs.
          </motion.p>

          {/* Feature list */}
          <motion.ul
            className="flex flex-col gap-3 w-full"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } },
            }}
          >
            {features.map((feature) => (
              <motion.li
                key={feature}
                className="flex items-center gap-3"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                }}
              >
                {/* Yellow circle chevron icon */}
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[#FFC224] flex items-center justify-center shadow-sm">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M5 3L9 7L5 11" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="font-bold text-[#161439] text-[15px] sm:text-[16px]">{feature}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-2"
          >
            <button
              onClick={()=>navigate('/contact')}
              className="group inline-flex items-center gap-3 px-8 py-[15px] rounded-full font-bold text-[15px] text-white bg-[#5751E1] transition-all duration-300 hover:bg-[#FFC224] hover:text-[#161439] cursor-pointer"
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
              Start Free Trial
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
          </motion.div>
        </div>
      </div>

      {/* ── YouTube Video Overlay ── */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1`}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              {/* Close button */}
              <button
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors duration-200 backdrop-blur-sm"
                onClick={() => setShowVideo(false)}
                aria-label="Close video"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1L13 13M13 1L1 13" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AboutUsSection;