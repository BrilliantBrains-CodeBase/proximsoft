"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Feature {
  icon: string; // path to SVG file
  title: string;
  description: string;
}


// ─── Data ─────────────────────────────────────────────────────────────────────

const features: Feature[] = [
  {
    icon: "/images/home/features_icon01.svg",
    title: "Learn with Experts",
    description:
      "Curate anding area share Pluralsight content to reach your",
  },
  {
    icon: "/images/home/features_icon02.svg",
    title: "Learn Anything",
    description:
      "Curate anding area share Pluralsight content to reach your",
  },
  {
    icon: "/images/home/features_icon03.svg",
    title: "Get Online Certificate",
    description:
      "Curate anding area share Pluralsight content to reach your",
  },
  {
    icon: "/images/home/features_icon04.svg",
    title: "E-mail Marketing",
    description:
      "Curate anding area share Pluralsight content to reach your",
  },
];


// ─── Animation helpers ────────────────────────────────────────────────────────

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const makeFadeUp = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  },
});

// ─── Sub-components ───────────────────────────────────────────────────────────

const FeatureCard: React.FC<{ feature: Feature; index: number; inView: boolean }> = ({
  feature,
  index,
  inView,
}) => (
  <motion.div
    className="flex flex-col items-center text-center px-4"
    variants={makeFadeUp(index * 0.12)}
    initial="hidden"
    animate={inView ? "visible" : "hidden"}
  >
    {/* Icon container with sparkle dot */}
    <div className="relative mb-5">
      {/* Sparkle top-right */}
      <span
        className="absolute -top-2 -right-3 text-indigo-300 text-lg select-none"
        aria-hidden="true"
      >
        ✦
      </span>
      <div
        className="w-[72px] h-[72px] flex items-center justify-center"
      >
        {/* Replace src with your actual SVG paths */}
        <img
          src={feature.icon}
          alt={feature.title}
          className="w-14 h-14 object-contain"
          style={{ filter: "brightness(0) invert(1) opacity(0.9)" }}
        />
      </div>
    </div>

    <h3 className="text-white font-bold text-[15px] mb-2 leading-snug">
      {feature.title}
    </h3>
    <p className="text-indigo-200/60 text-[13px] leading-relaxed max-w-[180px]">
      {feature.description}
    </p>
  </motion.div>
);


// ─── Main Component ────────────────────────────────────────────────────────────

const LearningJourney: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-60px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-60px" });

  return (
    <section
      className="relative w-full overflow-hidden pb-[100px]"
      style={{
        background: "linear-gradient(160deg, #1e2468 0%, #2a2f8f 40%, #3730a3 70%, #1a1f5e 100%)",
      }}
    >
      {/* Dot-grid texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── Hero text ─────────────────────────────────────────────────────── */}
      <div
        ref={heroRef}
        className="relative z-10 flex flex-col items-center text-center pt-16 pb-12 px-4"
      >
        {/* Pill badge */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          <span
            className="inline-block text-white text-xs font-semibold px-5 py-2 rounded-full mb-5"
            style={{ background: "#4f46e5" }}
          >
            How We Start Journey
          </span>
        </motion.div>

        <motion.h2
          className="text-white font-extrabold text-3xl md:text-[42px] leading-tight mb-4 max-w-xl"
          variants={makeFadeUp(0.1)}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          Start Your Learning Journey Today!
        </motion.h2>

        <motion.p
          className="text-indigo-200/70 text-sm md:text-base max-w-md leading-relaxed"
          variants={makeFadeUp(0.2)}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          Groove's intuitive shared inbox makesteam members together organize,
          prioritize and.In this episode.
        </motion.p>
      </div>

      {/* ── Feature icons grid ────────────────────────────────────────────── */}
      <div
        ref={featuresRef}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-20"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} inView={featuresInView} />
          ))}
        </div>
      </div>

    </section>
  );
};

export default LearningJourney;