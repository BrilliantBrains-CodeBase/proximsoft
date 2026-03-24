import { useState } from "react";

const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ"; // Replace with your YouTube video ID

const avatars = [
  "https://i.pravatar.cc/40?img=1",
  "https://i.pravatar.cc/40?img=2",
  "https://i.pravatar.cc/40?img=3",
  "https://i.pravatar.cc/40?img=4",
  "https://i.pravatar.cc/40?img=5",
];

const features = [
  "The Most World Class Instructors",
  "Access Your Class anywhere",
  "Flexible Course Plan",
];

const AboutUsSectionV2 = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="w-full min-h-screen bg-[#f4f6fb] flex items-center justify-center px-4 py-12 md:py-0">
      <div className="max-w-6xl w-full mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

        {/* ── LEFT: Image + decorations ── */}
        <div className="relative flex-1 flex justify-center items-center">

          {/* dot grid background */}
          <div
            className="absolute top-4 left-4 w-32 h-32 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle, #6c63ff 1.5px, transparent 1.5px)",
              backgroundSize: "16px 16px",
            }}
          />

          {/* circular image frame */}
          <div className="relative w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full bg-[#e8e8f8] overflow-hidden flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80"
              alt="Students learning"
              className="w-full h-full object-cover object-top"
            />

            {/* play button */}
            <button
              onClick={() => setShowVideo(true)}
              className="absolute inset-0 flex items-center justify-center group"
              aria-label="Play video"
            >
              <span className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-red-500 ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          </div>

          {/* Live class badge */}
          <div className="absolute top-0 right-4 md:right-0 bg-white rounded-xl shadow-lg px-3 py-2 flex items-center gap-2 border border-gray-100">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">
              Live Class
            </span>
          </div>

          {/* enrolled students card */}
          <div className="absolute bottom-4 left-0 md:-left-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex flex-col gap-2 border border-gray-100">
            <p className="text-sm font-medium text-gray-700">
              <span className="font-bold text-gray-900">36K+</span>{" "}
              <span className="text-blue-600 font-semibold">Enrolled Students</span>
            </p>
            <div className="flex -space-x-2">
              {avatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="student"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT: Content ── */}
        <div className="flex-1 flex flex-col gap-5 text-center md:text-left">
          {/* pill tag */}
          <span className="inline-block self-center md:self-start bg-indigo-100 text-indigo-600 text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide">
            Get More About Us
          </span>

          {/* heading */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Thousand Of Top{" "}
            <span className="bg-amber-400 text-white px-3 py-1 rounded-xl inline-block">
              Courses
            </span>
            <br />
            Now In One Place
          </h1>

          {/* description */}
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0">
            Groove's intuitive shared inbox makes it easy for team members to
            organize, prioritize and. In this episode of the Smashing Pod we're
            talking about Web Platform Baseline.
          </p>

          {/* feature list */}
          <ul className="flex flex-col gap-3 mt-1">
            {features.map((feat, i) => (
              <li key={i} className="flex items-center gap-3 justify-center md:justify-start">
                <span className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
                <span className="font-semibold text-gray-800 text-sm md:text-base">
                  {feat}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-4 flex justify-center md:justify-start">
            <button className="bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all duration-200 text-white font-bold px-8 py-4 rounded-full flex items-center gap-3 shadow-lg shadow-indigo-200 text-sm md:text-base">
              Start Free Trial
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                →
              </span>
            </button>
          </div>
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
            {/* close button */}
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
              aria-label="Close video"
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