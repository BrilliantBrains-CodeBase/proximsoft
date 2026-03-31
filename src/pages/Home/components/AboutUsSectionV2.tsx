import { useState } from "react";
import { motion} from "framer-motion";
import { Link } from "react-router-dom";

const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ";

const avatars = [
  "https://i.pravatar.cc/40?img=1",
  "https://i.pravatar.cc/40?img=2",
  "https://i.pravatar.cc/40?img=3",
  "https://i.pravatar.cc/40?img=4",
  "https://i.pravatar.cc/40?img=5",
];

const features = [
  "Certified Trainers With Real Industry Experience",
  "Live Interactive Classes From Anywhere",
  "Placement Support Included",
];

const AboutUsSectionV2 = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="w-full min-h-screen bg-[#f4f6fb] flex items-center justify-center px-4 py-6 md:py-0">
      <div className="max-w-6xl w-full mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

        {/* ── LEFT: Image (no circle, blob clipping done by designer) ── */}
        <div className="relative flex-1 flex justify-center items-center">
    

          {/* raw image — designer will apply blob clip-path / mask */}
          <div className="relative z-10">
            <img
              src="/images/home/about_img-2.webp"
              alt="Students learning"
              className="w-[300px] md:w-[600px] object-cover object-top"
              style={{ borderRadius: "0" }} 
            />

            {/* play button — centred over image */}
            <button
              onClick={() => setShowVideo(true)}
              className="absolute inset-0 flex items-center justify-center group"
              aria-label="Play video"
            >
              <span className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-red-500 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>

            {/* Live class — bouncing img badge */}
            <img
              src="/images/home/about_shape.svg"
              alt="Live Class"
              className="absolute top-0 right-6 md:top-12 md:right-32 w-[80px] md:w-[80px] animate-bounce"
            />

            {/* enrolled students card */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex flex-col gap-2 border border-gray-100">
              <p className="text-sm font-medium text-gray-700">
                <span className="font-bold text-gray-900">36K+</span>{" "}
                <span className="text-blue-600 font-semibold">Enrolled Students</span>
              </p>
              <div className="flex -space-x-2">
                {avatars.map((src, i) => (
                  <img key={i} src={src} alt="student" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Content ── */}
        <div className="flex-1 flex flex-col gap-5 text-center md:text-left">

          {/* pill tag */}
          <span className="inline-block self-center md:self-start bg-indigo-100 text-indigo-600 text-base font-medium px-4 py-1.5 rounded-full tracking-wide">
            Get More About Us
          </span>

          {/* ── HEADLINE matching your motion.h1 structure ── */}
          <h1 className="font-medium font-sans text-[#161439] leading-[1] text-[26px] sm:text-[32px] md:text-[24px] xl:text-[36px]">

            {/* LINE 1 */}
            <span className="flex items-center justify-center md:justify-start gap-4 whitespace-nowrap">
              <span>A Wide Range Of</span>

              {/* Yellow blob pill */}
              <span className="relative inline-flex items-center justify-center">
                {/* yellow blob bg */}
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

                {/* scribble top-right */}
                <span
                  className="absolute pointer-events-none"
                  style={{ top: "-28px", right: "-26px", width: "42px", height: "46px" }}
                >
                  <svg width="100%" height="100%" viewBox="0 0 61 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.9456 42.4604C12.35 35.8453 15.0985 20.3798 14.8574 11.4385" stroke="#031333" strokeWidth="3.07158" strokeLinejoin="round" style={{ strokeDasharray: "32, 34", strokeDashoffset: 0 }} />
                    <path d="M27.4487 52.5191C33.5478 49.598 47.4807 42.3448 54.4199 36.7009" stroke="#031333" strokeWidth="3.07158" strokeLinejoin="round" style={{ strokeDasharray: "32, 34", strokeDashoffset: 0 }} />
                    <path d="M20.1039 44.2553C23.1559 40.986 29.8591 33.2239 32.2559 28.3291" stroke="#031333" strokeWidth="3.07158" strokeLinejoin="round" style={{ strokeDasharray: "21, 23", strokeDashoffset: 0 }} />
                  </svg>
                </span>

                <span className="relative text-white font-extrabold px-5 py-[5px] text-[inherit] leading-none">
                   Skills
                </span>
              </span>
            </span>

            {/* LINE 2 */}
            <span className="block mt-[6px] whitespace-nowrap">
              All In <span className="font-semibold">One Place</span>
            </span>
          </h1>

          {/* description */}
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0">
            Proximsoft trains freshers, career switchers and working professionals across the USA, Canada, UAE, Germany and the UK with live, job-ready IT programs aligned to real hiring needs.
          </p>

          {/* feature list */}
          <ul className="flex flex-col gap-3 mt-1">
            {features.map((feat, i) => (
              <li key={i} className="flex items-center gap-3 justify-center md:justify-start">
                <span className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <span className="font-semibold text-gray-800 text-sm md:text-base">{feat}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
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

      {/* ── YouTube Overlay ── */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutUsSectionV2;