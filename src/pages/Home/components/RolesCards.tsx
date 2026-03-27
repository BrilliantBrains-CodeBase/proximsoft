"use client";

import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useInView, type Variants } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Role {
  image: string;
  badge: string;
  title: string;
  description: string;
  cta: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const roles: Role[] = [
  {
    image: "/images/home/instructor_two01.png",
    badge: "✦",
    title: "Placement Support",
    description:
      "To take a trivial example, which of us undertakes physical exercise yes is this happen here.",
    cta: "Apply Now",
  },
  {
    image: "/images/home/instructor_two02.png",
    badge: "✦",
    title: "Become a Student",
    description:
      "Join millions of people from around the world learning together. Online learning",
    cta: "Apply Now",
  },
];

// ─── Animation ────────────────────────────────────────────────────────────────

const makeFadeUp = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  },
});

// ─── ApplyButton ──────────────────────────────────────────────────────────────

const ApplyButton: React.FC<{ label: string }> = ({ label }) => {
  const navigate = useNavigate();

  return (
    <motion.button
      className="group inline-flex items-center gap-3 px-6 py-3 rounded-full font-bold text-[13px] text-white"
      style={{
        background: "linear-gradient(90deg, #3730a3, #4f46e5)",
        boxShadow: "6px 6px 0px 0px #000000",
        transition: "background 0.3s, color 0.3s",
      }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => navigate("/contact")}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "none";
        el.style.background = "#FFC224";
        el.style.color = "#161439";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "6px 6px 0px 0px #000000";
        el.style.background = "linear-gradient(90deg, #3730a3, #4f46e5)";
        el.style.color = "#ffffff";
      }}
    >
      {label}
      <svg
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
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
    </motion.button>
  );
};

// ─── RoleCard ─────────────────────────────────────────────────────────────────

interface RoleCardProps {
  role: Role;
  index: number;
  inView: boolean;
}

const RoleCard: React.FC<RoleCardProps> = ({ role, index, inView }) => (
  <motion.div
    className="bg-white rounded-2xl flex items-end overflow-hidden shadow-lg relative"
    style={{ minHeight: 220 }}
    variants={makeFadeUp(index * 0.15)}
    initial="hidden"
    animate={inView ? "visible" : "hidden"}
    whileHover={{ y: -4, transition: { duration: 0.25 } }}
  >
    {/* Person image on yellow blob */}
    <div
      className="relative flex-shrink-0 flex items-end justify-center"
      style={{ width: 160, minHeight: 220 }}
    >
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: "80%",
          background: "#F5C518",
          borderRadius: "0 80px 0 16px",
        }}
      />
      <img
        src={role.image}
        alt={role.title}
        className="relative z-10 w-36 h-48 object-cover object-top"
      />
    </div>

    {/* Text content */}
    <div className="flex-1 py-8 pr-7 pl-2">
      <span className="text-yellow-400 text-xl mb-2 block">{role.badge}</span>

      <h3 className="text-gray-900 font-extrabold text-[22px] leading-tight mb-2">
        {role.title}
      </h3>
      <p className="text-gray-500 text-[13px] leading-relaxed mb-5">
        {role.description}
      </p>

      <ApplyButton label={role.cta} />
    </div>
  </motion.div>
);

// ─── RolesCards ───────────────────────────────────────────────────────────────

const RolesCards: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      className="relative w-full max-w-5xl mx-auto px-6 mb-10"
      style={{ zIndex: 30, marginTop: "-110px" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {roles.map((role, i) => (
          <RoleCard key={role.title} role={role} index={i} inView={inView} />
        ))}
      </div>
    </div>
  );
};

export default RolesCards;