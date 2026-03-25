
import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [btnHovered, setBtnHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <section
      className="w-full relative overflow-hidden"
      style={{ backgroundColor: "#4E46DC", height: "200px" }}
    >
      {/* ──────────────────────────────────────────────────
          LEFT SIDE: Yellow semi-circle + man image
          Both are absolutely positioned, bottom-anchored,
          cropped by section overflow-hidden
      ────────────────────────────────────────────────── */}

      {/* Yellow circle — large, only top portion visible above section bottom */}
      <div
        className="absolute rounded-full hidden md:block"
        style={{
          width: "240px",
          height: "240px",
          backgroundColor: "#F5C518",
          bottom: "-50%",       /* push down so only top arc shows */
          left: "200px",         /* align with man's torso */
          zIndex: 1,
        }}
      />

      {/* Man image — sits on top of yellow circle, bottom-anchored, slightly left */}
      <img
        src="/images/home/newsletter_img.png"
        alt="Student"
        className="absolute bottom-0 hidden md:block"
        style={{
          height: "200px",
          width: "auto",
          left: "200px",
          zIndex: 2,
          objectFit: "contain",
          objectPosition: "bottom",
        }}
      />

      {/* ──────────────────────────────────────────────────
          DECORATIONS
      ────────────────────────────────────────────────── */}

      {/* Dot grid — to the right of man's head */}
      <div
        className="absolute hidden md:grid pointer-events-none"
        style={{
          top: "30px",
          left: "380px",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "7px",
          zIndex: 3,
        }}
      >
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="rounded-full"
            style={{ width: "5px", height: "5px", backgroundColor: "rgba(255,255,255,0.4)" }}
          />
        ))}
      </div>

      {/* Squiggle SVG — top right */}
      <svg
        className="absolute pointer-events-none hidden md:block"
        style={{ right: "100px", top: "10px", opacity: 0.4, zIndex: 1 }}
        width="250"
        height="200"
        viewBox="0 0 130 130"
        fill="none"
      >
        <path
          d="M110 15 C85 15, 20 50, 45 85 C65 112, 118 88, 95 120"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* ──────────────────────────────────────────────────
          MAIN CONTENT: text + form — centered in section
      ────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ zIndex: 4 }}
      >
        <div className="max-w-[1320px] w-full mx-auto px-4 md:px-8">
          {/* push content to the right of the person area */}
          <div className="flex flex-col justify-start gap-4 md:gap-4 md:ml-[500px]">

            {/* Heading */}
            <div className="shrink-0 text-center md:text-left">
              <h2
                className="text-white leading-[1.4] font-medium"
                style={{ fontSize: "clamp(18px, 2vw, 26px)" }}
              >
                Want To Stay <strong style={{ fontWeight: 400 }}>Informed</strong> About
                <br />
                New <strong style={{ fontWeight: 400 }}>Courses &amp; Study?</strong>
              </h2>
            </div>

            {/* Email form */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-3 w-full max-w-[520px]"
              style={{ minWidth: 0 }}
            >
              {/* Input */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Type Your E-Mail"
                required
                className="flex-1 bg-transparent outline-none text-white placeholder-white/55 text-[14px]"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.38)",
                  borderRadius: "999px",
                  padding: "12px 22px",
                  minWidth: 0,
                }}
              />

              {/* Subscribe button */}
              <button
                type="submit"
                onMouseEnter={() => setBtnHovered(true)}
                onMouseLeave={() => setBtnHovered(false)}
                style={{
                  backgroundColor: "#F5C518",
                  borderRadius: "999px",
                  padding: "12px 26px",
                  fontWeight: 700,
                  fontSize: "14px",
                  color: "#111",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  border: "none",
                  cursor: "pointer",
                  boxShadow: btnHovered
                    ? "none"
                    : "4px 4px 0px 0px rgba(0,0,0,0.85)",
                  transform: btnHovered ? "translate(2px,2px)" : "translate(0,0)",
                  transition: "box-shadow 0.18s ease, transform 0.18s ease",
                }}
              >
                Subscribe Now
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;