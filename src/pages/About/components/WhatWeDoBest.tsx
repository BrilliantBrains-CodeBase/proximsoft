"use client";

import { motion } from "framer-motion";

// ─── CTA Button ─────────────────────────────────────────────
const PrimaryBtn = ({ href }: { href: string }) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 bg-indigo-600 text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.85)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] active:scale-95"
  >
    Get Started
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </a>
);

// ─── Feature Item (Yellow Bullet) ───────────────────────────
const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-start gap-4">
    <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center shrink-0">
      <svg
        className="w-4 h-4 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>

    <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium">
      {text}
    </p>
  </div>
);

// ─── Main Component ─────────────────────────────────────────
const WhatWeDoBest = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* ─── TOP CENTER CONTENT ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* Badge */}
          <span className="inline-block text-[13px] font-semibold px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100">
            WHY PROXIMSOFT ?
          </span>

          {/* Heading */}
          <h2 className="mt-4 font-semibold text-gray-900 text-2xl md:text-3xl leading-tight">
            Because outcomes matter
          </h2>

          {/* Description */}
          <p className="mt-3 text-gray-500 text-sm md:text-base leading-relaxed">
            We focus on real-world impact through practical training, expert mentorship, and career-driven learning paths.
          </p>

          {/* CTA */}
          <div className="mt-5">
            <PrimaryBtn href="/contact" />
          </div>
        </motion.div>

        {/* ─── BOTTOM GRID ─── */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="rounded-3xl overflow-hidden">
              <img
                src="/images/home/about_img-2.webp"
                alt="What Proximsoft Does Best"
                className="w-[280px] sm:w-[320px] md:w-[420px] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* RIGHT FEATURES */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <FeatureItem text="Global IT training provider with international reach" />
            <FeatureItem text="Certified trainers with real-world experience" />
            <FeatureItem text="Job-oriented, certification-aligned curriculum" />
            <FeatureItem text="Flexible online live learning" />
            <FeatureItem text="Proven career transformation and placement support" />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default WhatWeDoBest;