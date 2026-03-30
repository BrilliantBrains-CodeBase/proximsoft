import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants, Transition } from "framer-motion";


// ── Types ────────────────────────────────────────────────────────────────────

interface Feature {
  id: number;
  bg: string;
  border: string;
  iconBg: string;
  title: string;
  body: string;
  icon: React.ReactNode;
}

interface SparkleProps {
  className?: string;
}

// ── Data ─────────────────────────────────────────────────────────────────────

const features: Feature[] = [
  {
    id: 1,
    bg: "#e6faf8",
    border: "#b2e8e2",
    iconBg: "#2ec4c4",
    title: "Expert Trainers",
    body: "Certified industry professionals with years of real world experience delivering live interactive IT training.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4L2 10L14 16L26 10L14 4Z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
        <path d="M6 13V19C6 19 9 23 14 23C19 23 22 19 22 19V13" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="26" y1="10" x2="26" y2="17" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 2,
    bg: "#ede9f9",
    border: "#c9bff0",
    iconBg: "#5751E1",
    title: "Effective Courses",
    body: "Job oriented programs with real projects, certification prep and structured learning paths for every level.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="5" y="4" width="18" height="20" rx="2.5" stroke="white" strokeWidth="1.8" fill="none" />
        <line x1="9" y1="10" x2="19" y2="10" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="9" y1="14" x2="19" y2="14" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="9" y1="18" x2="15" y2="18" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 3,
    bg: "#fef9e6",
    border: "#f5e4a0",
    iconBg: "#FFC224",
    title: "Earn Certificate",
    body: "Industry recognised certifications accepted by top employers across the USA, Canada, UAE and the UK.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="white" strokeWidth="1.8" fill="none" />
        <circle cx="21" cy="20" r="5" stroke="white" strokeWidth="1.8" fill="none" />
        <path d="M18 25L21 23L24 25V27L21 25.5L18 27V25Z" fill="white" />
        <line x1="7" y1="9" x2="15" y2="9" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="7" y1="12" x2="13" y2="12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

// ── Sub-components ────────────────────────────────────────────────────────────

const Sparkle: React.FC<SparkleProps> = ({ className = "" }) => (
  <svg className={className} width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M18 4L19.8 14.2L28 18L19.8 21.8L18 32L16.2 21.8L8 18L16.2 14.2L18 4Z" stroke="#b0aad4" strokeWidth="1.2" fill="none" />
    <path d="M28 6L28.8 10.2L32 12L28.8 13.8L28 18L27.2 13.8L24 12L27.2 10.2L28 6Z" stroke="#b0aad4" strokeWidth="1" fill="none" />
  </svg>
);

// ── Variants ──────────────────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    } as Transition,
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.93 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    } as Transition,
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    } as Transition,
  },
};

// ── Component ─────────────────────────────────────────────────────────────────

const FeaturesSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="w-full py-16 sm:py-20 px-4 sm:px-8 lg:px-16"
      style={{ background: "#f0eff5" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 gap-4">

          {/* Badge */}
          <motion.span
            className="inline-block bg-[#e8e5f8] text-[#5751E1] text-sm font-semibold px-5 py-1.5 rounded-full"
            variants={headingVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            Our Top Features
          </motion.span>

          {/* H2 */}
          <motion.h2
            className="text-[28px] sm:text-[36px] lg:text-3xl font-semibold text-[#161439] leading-tight"
            variants={headingVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.1 }}
          >
            Achieve Your Goal With Proximsoft
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="text-gray-500 text-[15px] sm:text-[16px] max-w-lg leading-relaxed"
            variants={headingVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            Live training, certification support and placement assistance
            <br className="hidden sm:block" />
            all built to deliver real career outcomes globally
          </motion.p>
        </div>

        {/* ── Cards ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((f) => (
            <motion.div
              key={f.id}
              className="relative rounded-2xl p-6 sm:p-8 flex flex-col gap-5 overflow-hidden group cursor-default"
              style={{
                background: f.bg,
                border: `1.5px solid ${f.border}`,
                boxShadow: "6px 6px 0px 0px rgba(0,0,0,0.12)",
              }}
              variants={cardVariants}
              whileHover={{
                x: -3,
                y: -3,
                boxShadow: "10px 10px 0px 0px rgba(0,0,0,0.15)",
                transition: { duration: 0.25, ease: "easeOut" } as Transition,
              }}
            >
              {/* Sparkle top-right */}
              <motion.div
                className="absolute top-4 right-4 opacity-60"
                initial={{ opacity: 0, rotate: -20, scale: 0.6 }}
                animate={inView ? { opacity: 0.6, rotate: 0, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + f.id * 0.15 }}
              >
                <Sparkle />
              </motion.div>

              {/* Icon + Title row */}
              <div className="flex items-center gap-4">
                <motion.div
                  className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: f.iconBg }}
                  whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } as Transition }}
                  initial={{ scale: 0, rotate: -30 }}
                  animate={inView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.3 + f.id * 0.15, ease: "backOut" }}
                >
                  {f.icon}
                </motion.div>

                <h3 className="text-[18px] sm:text-[20px] font-extrabold text-[#161439]">
                  {f.title}
                </h3>
              </div>

              {/* Body */}
              <p className="text-gray-500 text-[14px] sm:text-[15px] leading-relaxed">
                {f.body}
              </p>

              {/* Bottom accent line grows on hover */}
              <motion.div
                className="absolute bottom-0 left-0 h-[3px] rounded-full"
                style={{ background: f.iconBg }}
                initial={{ width: "0%" }}
                whileHover={{ width: "100%", transition: { duration: 0.4, ease: "easeOut" } as Transition }}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturesSection;