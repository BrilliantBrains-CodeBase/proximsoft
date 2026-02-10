import { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────────────────────
   TYPES
───────────────────────────────────────────────────────── */
interface StatItem {
  value: string;
  label: string;
}

interface CompanyItem {
  name: string;
  logo: React.ReactNode;
}

/* ─────────────────────────────────────────────────────────
   SVG ICONS
───────────────────────────────────────────────────────── */
const GradCapIcon = ({ size = 28, color = "#2563eb" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" fill={color} />
    <path d="M5 13.18V17l7 4 7-4v-3.82L12 17l-7-3.82z" fill={color} />
  </svg>
);

const PersonIcon = ({ size = 20, color = "#fff" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="4" fill={color} />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);

/* ─────────────────────────────────────────────────────────
   MNC LOGO SVGs
───────────────────────────────────────────────────────── */
const GoogleLogo = () => (
  <svg width="88" height="34" viewBox="0 0 88 34">
    <text x="0" y="28" fontFamily="sans-serif" fontSize="27" fontWeight="800">
      <tspan fill="#4285F4">G</tspan><tspan fill="#EA4335">o</tspan>
      <tspan fill="#FBBC05">o</tspan><tspan fill="#4285F4">g</tspan>
      <tspan fill="#34A853">l</tspan><tspan fill="#EA4335">e</tspan>
    </text>
  </svg>
);

const MicrosoftLogo = () => (
  <svg width="130" height="32" viewBox="0 0 130 32">
    <rect x="0" y="2" width="13" height="13" fill="#F25022" />
    <rect x="14" y="2" width="13" height="13" fill="#7FBA00" />
    <rect x="0" y="16" width="13" height="13" fill="#00A4EF" />
    <rect x="14" y="16" width="13" height="13" fill="#FFB900" />
    <text x="32" y="24" fontFamily="sans-serif" fontSize="16" fontWeight="700" fill="#333">Microsoft</text>
  </svg>
);

const AmazonLogo = () => (
  <svg width="95" height="36" viewBox="0 0 95 36">
    <text x="0" y="22" fontFamily="sans-serif" fontSize="21" fontWeight="800" fill="#222">amazon</text>
    <path d="M5 29 Q32 39 62 29" stroke="#FF9900" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <polygon points="59,25 66,29 59,33" fill="#FF9900" />
  </svg>
);

const MetaLogo = () => (
  <svg width="105" height="32" viewBox="0 0 105 32">
    <text x="0" y="25" fontFamily="sans-serif" fontSize="22" fontWeight="800" fill="#0866FF">Meta</text>
    <path d="M65 16 C65 10 68.5 6 72 6 C75.5 6 79 10 79 16 C79 22 75.5 26 72 26 C68.5 26 65 22 65 16Z" fill="none" stroke="#0866FF" strokeWidth="2.5" />
    <path d="M68.5 16 C68.5 10 70 6 72 6 C74 6 75.5 10 75.5 16 C75.5 22 74 26 72 26 C70 26 68.5 22 68.5 16Z" fill="none" stroke="#0866FF" strokeWidth="1.8" />
  </svg>
);

const NetflixLogo = () => (
  <svg width="100" height="32" viewBox="0 0 100 32">
    <text x="0" y="26" fontFamily="sans-serif" fontSize="23" fontWeight="900" fill="#E50914" letterSpacing="1">NETFLIX</text>
  </svg>
);

const IBMLogo = () => (
  <svg width="72" height="32" viewBox="0 0 72 32">
    <text x="0" y="26" fontFamily="sans-serif" fontSize="28" fontWeight="900" fill="#006699" letterSpacing="3">IBM</text>
  </svg>
);

const TCSLogo = () => (
  <svg width="60" height="32" viewBox="0 0 60 32">
    <text x="0" y="26" fontFamily="sans-serif" fontSize="22" fontWeight="800" fill="#005073">TCS</text>
  </svg>
);

const InfosysLogo = () => (
  <svg width="88" height="32" viewBox="0 0 88 32">
    <text x="0" y="26" fontFamily="sans-serif" fontSize="18" fontWeight="800" fill="#007CC3">Infosys</text>
  </svg>
);

const WiproLogo = () => (
  <svg width="80" height="32" viewBox="0 0 80 32">
    <text x="0" y="26" fontFamily="sans-serif" fontSize="22" fontWeight="800" fill="#802FDE">Wipro</text>
  </svg>
);

const AdobeLogo = () => (
  <svg width="90" height="32" viewBox="0 0 90 32">
    <polygon points="0,28 14,4 28,28" fill="#FA0F00" />
    <text x="33" y="26" fontFamily="sans-serif" fontSize="18" fontWeight="800" fill="#FA0F00">Adobe</text>
  </svg>
);

/* ─────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────── */
const STATS: StatItem[] = [
  { value: "98.9%", label: "Placement Rate" },
  { value: "95.4%", label: "Satisfaction" },
  { value: "50k+",  label: "Students Placed" },
];

const COMPANIES: CompanyItem[] = [
  { name: "Wipro",     logo: <WiproLogo /> },
  { name: "Adobe",     logo: <AdobeLogo /> },
  { name: "Google",    logo: <GoogleLogo /> },
  { name: "Microsoft", logo: <MicrosoftLogo /> },
  { name: "Amazon",    logo: <AmazonLogo /> },
  { name: "Meta",      logo: <MetaLogo /> },
  { name: "Netflix",   logo: <NetflixLogo /> },
  { name: "IBM",       logo: <IBMLogo /> },
  { name: "TCS",       logo: <TCSLogo /> },
  { name: "Infosys",   logo: <InfosysLogo /> },
];

/* ─────────────────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────────────────── */
const FloatingBadge = ({ style }: { style?: React.CSSProperties }) => (
  <div style={{
    position: "absolute",
    width: 112, height: 112, borderRadius: "50%",
    background: "linear-gradient(135deg,#1e40af 0%,#3b82f6 100%)",
    display: "flex", flexDirection: "column",
    alignItems: "center", justifyContent: "center", gap: 3,
    boxShadow: "0 8px 32px rgba(37,99,235,0.45)",
    border: "3px solid rgba(255,255,255,0.45)",
    zIndex: 5, ...style,
  }}>
    <PersonIcon size={20} />
    <span style={{ color: "#fff", fontWeight: 800, fontSize: 12.5, textAlign: "center", lineHeight: 1.2 }}>
      50k+ Students
    </span>
    <span style={{ color: "#bfdbfe", fontSize: 9, fontWeight: 600 }}>Successfully Placed</span>
  </div>
);

const StatCard = ({ stat, small = false }: { stat: StatItem; small?: boolean }) => (
  <div className="edu-stat-card" style={{
    background: "#fff", borderRadius: 14,
    padding: small ? "11px 13px" : "16px 22px",
    flex: "1 1 90px", minWidth: small ? 76 : 100,
    textAlign: "center",
    boxShadow: "0 4px 18px rgba(37,99,235,0.10)",
    display: "flex", flexDirection: "column",
    alignItems: "center", gap: 6,
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
    cursor: "default",
  }}>
    <GradCapIcon size={small ? 22 : 28} color="#2563eb" />
    <span style={{ color: "#2563eb", fontWeight: 900, fontSize: small ? 13 : 17 }}>{stat.value}</span>
    <span style={{ color: "#64748b", fontSize: small ? 9.5 : 11, fontWeight: 700 }}>{stat.label}</span>
  </div>
);

const BookDemoBtn = () => (
  <button className="edu-cta-btn" style={{
    background: "#fff", color: "#1e40af",
    border: "2.5px solid #2563eb", borderRadius: 32,
    padding: "13px 34px", fontSize: 14, fontWeight: 800,
    cursor: "pointer", transition: "all 0.25s ease",
    letterSpacing: 0.3, boxShadow: "0 2px 12px rgba(37,99,235,0.12)",
    alignSelf: "flex-start",
  }}>
    Book Your Free Demo
  </button>
);

/* ─────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────── */
const Educationsection = () => {
  const [visible, setVisible]   = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef   = useRef<number>(0);
  const posRef   = useRef<number>(0);

  /* responsive */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* entrance */
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  /* carousel */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const speed = 0.55;
    const tick = () => {
      posRef.current += speed;
      const half = track.scrollWidth / 2;
      if (posRef.current >= half) posRef.current = 0;
      track.style.transform = `translateX(-${posRef.current}px)`;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const doubled = [...COMPANIES, ...COMPANIES];

  /* ── Photo block ── */
  const PhotoBlock = ({ mobile }: { mobile: boolean }) => (
    <div style={{
      position: "relative", flexShrink: 0,
      width: mobile ? "100%" : 340,
      height: mobile ? 290 : 390,
    }}>
      <FloatingBadge style={mobile ? { top: 8, left: 18 } : { top: 16, left: 0 }} />

      <div style={{
        position: "absolute", top: 0,
        right: mobile ? 22 : 0,
        width: mobile ? 132 : 190,
        height: mobile ? 210 : 280,
        borderRadius: 80, overflow: "hidden",
        boxShadow: "0 10px 36px rgba(37,99,235,0.22)", zIndex: 3,
      }}>
        <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80" alt="Student"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
      </div>

      <div style={{
        position: "absolute", bottom: 0,
        left: mobile ? 22 : 14,
        width: mobile ? 132 : 180,
        height: mobile ? 205 : 265,
        borderRadius: 80, overflow: "hidden",
        boxShadow: "0 10px 36px rgba(37,99,235,0.22)", zIndex: 3,
      }}>
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" alt="Student"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
      </div>

      <FloatingBadge style={mobile ? { bottom: 0, right: 18 } : { bottom: 0, right: 0 }} />
    </div>
  );

  /* ── Text block ── */
  const TextBlock = ({ mobile }: { mobile: boolean }) => (
    <div style={{
      flex: 1, display: "flex", flexDirection: "column", gap: 20,
      padding: mobile ? "26px 22px 40px" : "0 6vw 60px 0",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(24px)",
      transition: "opacity 0.7s ease, transform 0.7s ease",
    }}>
      <h1 style={{
        color: "#1e3a5f",
        fontSize: mobile ? 22 : "clamp(26px, 2.6vw, 38px)",
        fontWeight: 900, lineHeight: 1.25, margin: 0,
      }}>
        Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit?
      </h1>

      <p style={{ color: "#475569", fontSize: 14, lineHeight: 1.8, margin: 0 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {STATS.map((s, i) => <StatCard key={i} stat={s} small={mobile} />)}
      </div>

      <BookDemoBtn />
    </div>
  );

  /* ─────── RENDER ─────── */
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');

        /*
         * ★ FULL-BLEED BREAKOUT
         * This makes the section ignore any parent max-width / container
         * and stretch to 100% of the viewport width.
         */
        .edu-fullbleed {
          width: 100vw !important;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw !important;
          margin-right: -50vw !important;
          box-sizing: border-box;
        }

        .edu-stat-card:hover {
          transform: translateY(-5px) !important;
          box-shadow: 0 12px 28px rgba(37,99,235,0.20) !important;
        }
        .edu-cta-btn:hover {
          background: #2563eb !important;
          color: #fff !important;
          box-shadow: 0 8px 24px rgba(37,99,235,0.32) !important;
        }
        .edu-carousel-track {
          display: flex;
          align-items: center;
          gap: 56px;
          width: max-content;
          will-change: transform;
        }
        .edu-carousel-item {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          opacity: 0.75;
          transition: opacity 0.2s;
        }
        .edu-carousel-item:hover { opacity: 1; }
      `}</style>

      {/* ══════════════════════════════════
          HERO — full bleed
      ══════════════════════════════════ */}
      <section
        className="edu-fullbleed"
        style={{
          background: "linear-gradient(155deg,#4da3f7 0%,#7ec8fb 28%,#b3d9fd 58%,#deeeff 82%,#f0f8ff 100%)",
          fontFamily: "'Nunito','Segoe UI',sans-serif",
          position: "relative",
          paddingTop: 48,
          overflow: "visible",
        }}
      >
        {/* cap icon */}
        <div style={{
          position: "absolute", top: -34, left: "50%",
          transform: "translateX(-50%)",
          background: "#fff", borderRadius: "50%",
          width: 76, height: 76,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 6px 24px rgba(37,99,235,0.20)", zIndex: 10,
        }}>
          <GradCapIcon size={42} color="#2563eb" />
        </div>

        {/* Desktop */}
        {!isMobile && (
          <div style={{
            display: "flex", flexDirection: "row",
            width: "100%", padding: "20px 6vw 0",
            gap: "5vw", alignItems: "center",
          }}>
            <PhotoBlock mobile={false} />
            <TextBlock  mobile={false} />
          </div>
        )}

        {/* Mobile */}
        {isMobile && (
          <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
            <PhotoBlock mobile={true} />
            <TextBlock  mobile={true} />
          </div>
        )}
      </section>

      {/* ══════════════════════════════════
          CAROUSEL — full bleed
      ══════════════════════════════════ */}
      <section
        className="edu-fullbleed"
        style={{
          background: "#fff",
          fontFamily: "'Nunito','Segoe UI',sans-serif",
          padding: "38px 0 32px",
          overflow: "hidden",
        }}
      >
        <h2 style={{
          textAlign: "center", color: "#1e293b",
          fontSize: isMobile ? 17 : 22,
          fontWeight: 900, marginBottom: 30, letterSpacing: 0.2,
        }}>
          Companies that hire from us
        </h2>

        <div style={{ position: "relative" }}>
          <div style={{
            position: "absolute", top: 0, bottom: 0, left: 0,
            width: 100,
            background: "linear-gradient(to right,#fff,transparent)",
            zIndex: 2, pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", top: 0, bottom: 0, right: 0,
            width: 100,
            background: "linear-gradient(to left,#fff,transparent)",
            zIndex: 2, pointerEvents: "none",
          }} />

          <div style={{ overflow: "hidden", width: "100%", padding: "8px 0" }}>
            <div ref={trackRef} className="edu-carousel-track">
              {doubled.map((c, i) => (
                <div key={`${c.name}-${i}`} className="edu-carousel-item">
                  {c.logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Educationsection;