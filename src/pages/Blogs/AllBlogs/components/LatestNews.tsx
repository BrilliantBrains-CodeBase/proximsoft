"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import BlogCardV2 from "./BlogCardV2";
import { blogs } from "../../../../data/blogs/blogs";

const makeFadeUp = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
  },
});

const LatestNewsFeed: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section className="w-full bg-white py-6 px-4 mb-4">
      <div className="mx-auto max-w-7xl">

        {/* ── Header ──────────────────────────────────────────────────── */}
        <div ref={headerRef} className="mb-12 flex flex-col items-center text-center">
          <motion.span
            variants={makeFadeUp(0)}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            className="inline-block rounded-full border-2 border-[#5751E1]/40 bg-white px-5 py-1.5 text-[12px] font-semibold text-[#5751E1] mb-4"
          >
            News & Blogs
          </motion.span>

          <motion.h2
            variants={makeFadeUp(0.1)}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            className="text-[32px] md:text-3xl font-semibold text-[#161439] leading-tight mb-3"
          >
            Our Latest News Feed
          </motion.h2>

          <motion.p
            variants={makeFadeUp(0.18)}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            className="text-gray-500 text-[14px] max-w-md"
          >
            when known printer took a galley of type scrambl edmake
          </motion.p>
        </div>

        {/* ── Grid ────────────────────────────────────────────────────── */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {blogs.slice(0, 4).map((blog, i) => (
            <motion.div
              key={blog.slug}
              variants={makeFadeUp(i * 0.1)}
              initial="hidden"
              animate={gridInView ? "visible" : "hidden"}
            >
              <BlogCardV2 blog={blog} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestNewsFeed;