import { motion } from "framer-motion";

const BlogsHero = () => {
  return (
    <section className="relative w-full overflow-hidden mt-8" style={{ background: "linear-gradient(135deg, #ede9f6 0%, #f5f0fb 40%, #fdf0f8 70%, #fce8f3 100%)", minHeight: "320px" }}>

      {/* ── Decorative SVG images ── */}

      {/* Planet / Saturn icon — top left */}
      <motion.div
        className="absolute top-6 left-4 sm:top-8 sm:left-8 w-10 h-10 sm:w-12 sm:h-12 opacity-60 animate-bounce"
        initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
        animate={{ opacity: 0.6, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <ellipse cx="24" cy="24" rx="12" ry="12" stroke="#7c6fbf" strokeWidth="1.5" fill="none"/>
          <ellipse cx="24" cy="24" rx="22" ry="8" stroke="#7c6fbf" strokeWidth="1.5" fill="none" transform="rotate(-20 24 24)"/>
          <line x1="4" y1="30" x2="14" y2="18" stroke="#ede9f6" strokeWidth="3"/>
        </svg>
      </motion.div>

      {/* Paper plane — center top area */}
      <motion.div
        className="absolute top-8 sm:top-10"
        style={{ left: "55%", width: "44px", height: "44px" }}
        initial={{ opacity: 0, x: -30, y: 10 }}
        animate={{ opacity: 0.55, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <polygon points="4,44 24,4 44,44 24,34" stroke="#8b80c8" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
          <line x1="24" y1="34" x2="24" y2="4" stroke="#8b80c8" strokeWidth="1.2"/>
          <line x1="24" y1="34" x2="4" y2="44" stroke="#8b80c8" strokeWidth="1.2"/>
        </svg>
      </motion.div>

      {/* Curvy decorative line — right side */}
      <motion.div
        className="absolute top-0 right-0 h-full"
        style={{ width: "260px" }}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
      >
        <svg viewBox="0 0 260 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M260 20 C180 40, 100 80, 160 130 C220 180, 140 200, 80 220" stroke="#b8a9e8" strokeWidth="1.2" fill="none"/>
        </svg>
      </motion.div>

      {/* Star — top far right */}
      <motion.div
        className="absolute top-5 right-8 sm:right-12 w-8 h-8 sm:w-10 sm:h-10 opacity-55"
        initial={{ opacity: 0, scale: 0.5, rotate: 30 }}
        animate={{ opacity: 0.55, scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
      >
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <polygon
            points="20,2 24,15 38,15 27,23 31,37 20,29 9,37 13,23 2,15 16,15"
            stroke="#8b7cc8" strokeWidth="1.5" fill="none" strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* Notebook / diary — bottom right */}
      <motion.div
        className="absolute bottom-4 right-20 sm:right-32 w-9 h-9 sm:w-11 sm:h-11 opacity-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
      >
        <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect x="8" y="4" width="28" height="36" rx="3" stroke="#8b7cc8" strokeWidth="1.5" fill="none"/>
          <line x1="8" y1="12" x2="36" y2="12" stroke="#8b7cc8" strokeWidth="1"/>
          <line x1="8" y1="19" x2="36" y2="19" stroke="#8b7cc8" strokeWidth="1"/>
          <line x1="8" y1="26" x2="28" y2="26" stroke="#8b7cc8" strokeWidth="1"/>
          {/* Spiral rings */}
          <circle cx="8" cy="12" r="2" stroke="#8b7cc8" strokeWidth="1" fill="none"/>
          <circle cx="8" cy="19" r="2" stroke="#8b7cc8" strokeWidth="1" fill="none"/>
          <circle cx="8" cy="26" r="2" stroke="#8b7cc8" strokeWidth="1" fill="none"/>
        </svg>
      </motion.div>

      {/* ── Main content ── */}
      <div className="relative z-10 px-6 sm:px-10 lg:px-16 py-12 sm:py-16 flex flex-col justify-center" style={{ minHeight: "inherit" }}>

        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Our Blogs & Articles
        </motion.h1>

        {/* Breadcrumb */}
        <motion.nav
          aria-label="breadcrumb"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <ol className="flex items-center gap-1 text-sm sm:text-base">
            <li>
              <a
                href="/"
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200 font-normal"
              >
                Home
              </a>
            </li>
            <li className="text-gray-400 select-none font-medium">›</li>
            <li>
              <span
                className="font-medium"
                style={{ color: "#6c5fcf" }}
              >
                All Blogs
              </span>
            </li>
          </ol>
        </motion.nav>
      </div>
    </section>
  );
};

export default BlogsHero;