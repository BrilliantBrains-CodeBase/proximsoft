import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * SETUP: Save the provided dots SVG to:
 *   /public/images/home/banner_dots.svg
 * That file is the exact SVG passed in — just save it as-is.
 */

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imgY   = useTransform(scrollYProgress, [0, 1], [0, -55]);
  const arrowY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const arrowX = useTransform(scrollYProgress, [0, 1], [0, 20]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full pt-16 lg:pt-20 pb-0 mt-20"
      style={{
        backgroundImage: "url('/images/home/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* CSS for rotating dots */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .rotate-dots {
          animation: spin-slow 28s linear infinite;
        }
      `}</style>

      {/* ── Squiggly line top-left ── */}
      <img
        src="/images/home/newsletter_shape03.png"
        alt=""
        className="absolute top-4 left-10 w-[110px] opacity-55 pointer-events-none select-none"
      />

      <div className="max-w-[1320px] mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between">

          {/* ════════════════════════════
              LEFT COLUMN
          ════════════════════════════ */}
          <div className="w-full lg:w-[46%]">
            <div className="pt-16 lg:pt-24 pb-14">

              {/* ── HEADLINE ── */}
             <motion.h1
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="font-medium text-[#161439] leading-[1] text-[26px] sm:text-[32px] md:text-[36px] lg:text-[36px] xl:text-[52px]"
                    >
                {/* LINE 1 */}
                <span className="flex items-center gap-4 whitespace-nowrap">
                  <span>Always Keep</span>

                  {/* Yellow blob pill + scribble SVG on top-right */}
                  <span className="relative inline-flex items-center justify-center">
                    {/* Yellow blob background */}
                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 209 59"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M4.74438 7.70565C69.7006 -1.18799 136.097 -2.38304 203.934 4.1205C207.178 4.48495 209.422 7.14626 208.933 10.0534C206.793 23.6481 205.415 36.5704 204.801 48.8204C204.756 51.3291 202.246 53.5582 199.213 53.7955C136.093 59.7623 74.1922 60.5985 13.5091 56.3043C10.5653 56.0924 7.84371 53.7277 7.42158 51.0325C5.20725 38.2627 2.76333 25.6511 0.0898448 13.1978C-0.465589 10.5873 1.61173 8.1379 4.73327 7.70565"
                        fill="#FFC224"
                      />
                    </svg>

                    {/* Scribble/vivus SVG — top-right corner of pill */}
                    <span
                      className="absolute pointer-events-none"
                      style={{ top: "-28px", right: "-26px", width: "42px", height: "46px" }}
                    >
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 61 68"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.9456 42.4604C12.35 35.8453 15.0985 20.3798 14.8574 11.4385"
                          stroke="#031333"
                          strokeWidth="3.07158"
                          strokeLinejoin="round"
                          style={{ strokeDasharray: "32, 34", strokeDashoffset: 0 }}
                        />
                        <path
                          d="M27.4487 52.5191C33.5478 49.598 47.4807 42.3448 54.4199 36.7009"
                          stroke="#031333"
                          strokeWidth="3.07158"
                          strokeLinejoin="round"
                          style={{ strokeDasharray: "32, 34", strokeDashoffset: 0 }}
                        />
                        <path
                          d="M20.1039 44.2553C23.1559 40.986 29.8591 33.2239 32.2559 28.3291"
                          stroke="#031333"
                          strokeWidth="3.07158"
                          strokeLinejoin="round"
                          style={{ strokeDasharray: "21, 23", strokeDashoffset: 0 }}
                        />
                      </svg>
                    </span>

                    <span className="relative text-white font-extrabold px-5 py-[5px] text-[inherit] leading-none">
                      Learning
                    </span>
                  </span>

                  
                </span>

                {/* LINE 2 */}
                <span className="block mt-[6px] whitespace-nowrap">
                  Life <span className="font-semibold">Always Keeps</span> Teaching
                </span>
              </motion.h1>

              {/* ── DESCRIPTION ── */}
              <motion.p
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-[#6D6C80] text-[15px] mt-6 mb-4 max-w-[400px] leading-[1.75]"
              >
                Your next career opportunity starts with one smart step. We are here to skill you up and push you forward.
              </motion.p>

              {/* ── CTA BUTTON ── */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-[15px] rounded-full font-bold text-[15px] text-white bg-[#5751E1] transition-all duration-300 hover:bg-[#FFC224] hover:text-[#161439]"
                  style={{ boxShadow: "6px 6px 0px 0px #000000" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "6px 6px 0px 0px #000000";
                  }}
                >
                  Start Free Demo
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
                </Link>
              </motion.div>

            </div>
          </div>

          {/* ════════════════════════════
              RIGHT COLUMN
          ════════════════════════════ */}
          <div className=" lg:block w-full lg:w-[52%]">
            {/* overflow-visible so arrow is NOT clipped at right edge */}
            <div className="relative min-h-[520px] overflow-visible">

              {/* ── ROTATING DOTS ── */}
              <img
                src="/images/home/bg_dots.svg"
                alt=""
                className="rotate-dots absolute z-[8] pointer-events-none select-none opacity-60"
                style={{
                  top: "10px",
                  left: "70px",
                  width: "500px",
                  height: "500px",
                }}
              />

              {/* ── banner_shape01.png — arrow, scroll + hover ── */}
              {/* right-0 keeps it anchored; no negative offset that gets clipped */}
              <motion.img
                src="/images/home/banner_shape01.png"
                alt=""
                className="absolute bottom-0 right-0 w-[500px] z-[5] select-none"
                style={{
                  y: arrowY,
                  x: arrowX,
                  pointerEvents: "auto",
                }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                whileHover={{
                  scale: 1.05,
                  rotate: -2,
                  y: -10,
                  transition: { type: "spring", stiffness: 200, damping: 14 },
                }}
              />

              {/* ── banner_img.png — girl, scroll parallax ── */}
              <motion.img
                src="/images/home/banner_img.png"
                alt="Student with laptop"
                className="absolute bottom-[-10px] left-1/2 z-[20] w-[400px] object-contain select-none"
                style={{
                  y: imgY,
                  x: "-44%",
                  pointerEvents: "none",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              />

              {/* ── Author card — top-left, right-side shadow ── */}
              <motion.div
                className="absolute top-10 left-6 z-[30] bg-white rounded-2xl px-5 py-4 flex flex-col gap-[10px]"
                style={{
                  boxShadow: "8px 8px 0px 0px rgba(87,81,225,0.15), 0 4px 18px rgba(0,0,0,0.08)",
                  minWidth: "210px",
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.65 }}
                whileHover={{
                  y: -4,
                  boxShadow: "10px 10px 0px 0px rgba(87,81,225,0.22), 0 8px 26px rgba(0,0,0,0.10)",
                  transition: { duration: 0.22 },
                }}
              >
                <AuthorRow name="Robert Fox"   img="/images/home/avatar-1.png" />
                <AuthorRow name="Michel Jones" img="/images/home/avatar-2.png" />
              </motion.div>

              {/* ── Yellow curved arrow — card → girl ── */}
              <motion.div
                className="absolute z-[31] pointer-events-none select-none"
                style={{ top: "88px", left: "228px" }}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: 0.9 }}
              >
                <svg width="95" height="65" viewBox="0 0 95 65" fill="none">
                  <path d="M6 56 C18 10, 56 2, 82 22" stroke="#FFC224" strokeWidth="2.8" strokeLinecap="round" fill="none"/>
                  <path d="M74 14 L84 24 L72 29" stroke="#FFC224" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

/* ── Author row ── */
const AuthorRow = ({ name, img }: { name: string; img: string }) => (
  <div className="flex items-center gap-3">
    <img src={img} alt={name} className="w-9 h-9 rounded-full object-cover border-2 border-gray-100 shrink-0" />
    <span className="text-[14px] font-semibold text-[#161439] whitespace-nowrap">{name}</span>
  </div>
);