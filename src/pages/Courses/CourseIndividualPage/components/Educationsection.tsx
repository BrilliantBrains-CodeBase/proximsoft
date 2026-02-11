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
  logoUrl: string;
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
   DATA
───────────────────────────────────────────────────────── */
const STATS: StatItem[] = [
  { value: "98.9%", label: "Placement Rate" },
  { value: "95.4%", label: "Satisfaction" },
  { value: "50k+",  label: "Students Placed" },
];

// Real company logos using reliable CDN sources
const COMPANIES: CompanyItem[] = [
  { name: "Google", logoUrl: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" },
  { name: "Microsoft", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Amazon", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Meta", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  { name: "Apple", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Netflix", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "IBM", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Intel", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg" },
  { name: "Adobe", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg" },
  { name: "Oracle", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
];

/* ─────────────────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────────────────── */
const FloatingBadge = ({ style }: { style?: React.CSSProperties }) => (
  <div style={{
    position: "absolute",
    width: 120, height: 120, borderRadius: "50%",
    background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
    display: "flex", flexDirection: "column",
    alignItems: "center", justifyContent: "center", gap: 4,
    boxShadow: "0 12px 40px rgba(37, 99, 235, 0.5)",
    border: "4px solid rgba(255, 255, 255, 0.5)",
    zIndex: 5, ...style,
  }}>
    <PersonIcon size={24} />
    <span style={{ color: "#fff", fontWeight: 800, fontSize: 14, textAlign: "center", lineHeight: 1.2 }}>
      50k+ Students
    </span>
    <span style={{ color: "#bfdbfe", fontSize: 10, fontWeight: 600 }}>Successfully Placed</span>
  </div>
);

const StatCard = ({ stat, small = false }: { stat: StatItem; small?: boolean }) => (
  <div className="edu-stat-card" style={{
    background: "#fff", borderRadius: 16,
    padding: small ? "14px 16px" : "20px 28px",
    flex: "1 1 110px", minWidth: small ? 90 : 120,
    textAlign: "center",
    boxShadow: "0 6px 24px rgba(37, 99, 235, 0.12)",
    display: "flex", flexDirection: "column",
    alignItems: "center", gap: 8,
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "default",
  }}>
    <GradCapIcon size={small ? 28 : 36} color="#2563eb" />
    <span style={{ color: "#2563eb", fontWeight: 900, fontSize: small ? 16 : 22 }}>{stat.value}</span>
    <span style={{ color: "#64748b", fontSize: small ? 11 : 13, fontWeight: 700 }}>{stat.label}</span>
  </div>
);

const BookDemoBtn = () => (
  <button className="edu-cta-btn" style={{
    background: "#fff", color: "#1e40af",
    border: "3px solid #2563eb", borderRadius: 40,
    padding: "16px 42px", fontSize: 16, fontWeight: 800,
    cursor: "pointer", transition: "all 0.3s ease",
    letterSpacing: 0.5, boxShadow: "0 4px 16px rgba(37, 99, 235, 0.15)",
    alignSelf: "flex-start",
  }}>
    Book Your Free Demo
  </button>
);

/* ─────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────── */
const EducationSection = () => {
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
    const t = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(t);
  }, []);

  /* carousel */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const speed = 0.6;
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
      width: mobile ? "100%" : 420,
      height: mobile ? 340 : 480,
    }}>
      <FloatingBadge style={mobile ? { top: 12, left: 24 } : { top: 24, left: 0 }} />

      <div style={{
        position: "absolute", top: 0,
        right: mobile ? 28 : 0,
        width: mobile ? 150 : 230,
        height: mobile ? 240 : 340,
        borderRadius: 100, overflow: "hidden",
        boxShadow: "0 14px 48px rgba(37, 99, 235, 0.25)", zIndex: 3,
      }}>
        <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&q=80" alt="Student"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
      </div>

      <div style={{
        position: "absolute", bottom: 0,
        left: mobile ? 28 : 20,
        width: mobile ? 150 : 220,
        height: mobile ? 235 : 320,
        borderRadius: 100, overflow: "hidden",
        boxShadow: "0 14px 48px rgba(37, 99, 235, 0.25)", zIndex: 3,
      }}>
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80" alt="Student"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
      </div>

      <FloatingBadge style={mobile ? { bottom: 4, right: 24 } : { bottom: 4, right: 0 }} />
    </div>
  );

  /* ── Text block ── */
  const TextBlock = ({ mobile }: { mobile: boolean }) => (
    <div style={{
      flex: 1, display: "flex", flexDirection: "column", gap: 24,
      padding: mobile ? "32px 24px 48px" : "0 8vw 0 0",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(32px)",
      transition: "opacity 0.8s ease, transform 0.8s ease",
    }}>
      <h1 style={{
        color: "#1e293b",
        fontSize: mobile ? 26 : "clamp(32px, 3.2vw, 48px)",
        fontWeight: 900, lineHeight: 1.2, margin: 0,
      }}>
        Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit?
      </h1>

      <p style={{ color: "#475569", fontSize: 16, lineHeight: 1.8, margin: 0 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        {STATS.map((s, i) => <StatCard key={i} stat={s} small={mobile} />)}
      </div>

      <BookDemoBtn />
    </div>
  );

  /* ─────── RENDER ─────── */
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        * {
          box-sizing: border-box;
        }

        .edu-fullbleed {
          width: 100vw !important;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw !important;
          margin-right: -50vw !important;
        }

        .edu-stat-card:hover {
          transform: translateY(-6px) !important;
          box-shadow: 0 16px 36px rgba(37, 99, 235, 0.24) !important;
        }
        .edu-cta-btn:hover {
          background: #2563eb !important;
          color: #fff !important;
          box-shadow: 0 10px 32px rgba(37, 99, 235, 0.36) !important;
          transform: translateY(-2px);
        }
        .edu-carousel-track {
          display: flex;
          align-items: center;
          gap: 80px;
          width: max-content;
          will-change: transform;
        }
        .edu-carousel-item {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          opacity: 0.7;
          transition: opacity 0.3s, transform 0.3s;
        }
        .edu-carousel-item:hover { 
          opacity: 1;
          transform: scale(1.05);
        }
        .edu-carousel-item img {
          height: 40px;
          width: auto;
          object-fit: contain;
          filter: grayscale(100%);
          transition: filter 0.3s;
        }
        .edu-carousel-item:hover img {
          filter: grayscale(0%);
        }
      `}</style>

      {/* ══════════════════════════════════
          HERO SECTION — full bleed
      ══════════════════════════════════ */}
      <section
        className="edu-fullbleed"
        style={{
          background: "linear-gradient(150deg, #60a5fa 0%, #93c5fd 25%, #bfdbfe 50%, #dbeafe 75%, #eff6ff 100%)",
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          position: "relative",
          paddingTop: 140,
          marginTop: 100,
          minHeight: isMobile ? "auto" : "800px",
          overflow: "visible",
        }}
      >
        {/* Larger graduation cap icon */}
        <div style={{
          position: "absolute", top: -85, left: "50%",
          transform: "translateX(-50%)",
          background: "#fff", borderRadius: "50%",
          width: 170, height: 170,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 10px 40px rgba(37, 99, 235, 0.28)", zIndex: 10,
        }}>
          <GradCapIcon size={100} color="#2563eb" />
        </div>

        {/* Container for content */}
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: isMobile ? "0" : "0 40px",
        }}>
          {/* Desktop */}
          {!isMobile && (
            <div style={{
              display: "flex", flexDirection: "row",
              width: "100%", padding: "40px 0 0",
              gap: "8vw", alignItems: "center",
              justifyContent: "space-between",
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
        </div>
      </section>

      {/* ══════════════════════════════════
          COMPANIES CAROUSEL — full bleed
      ══════════════════════════════════ */}
      <section
        className="edu-fullbleed"
        style={{
          background: "#fff",
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          padding: "50px 0 42px",
          overflow: "hidden",
        }}
      >
        <h2 style={{
          textAlign: "center", color: "#1e293b",
          fontSize: isMobile ? 20 : 26,
          fontWeight: 900, marginBottom: 40, letterSpacing: 0.3,
        }}>
          Companies that hire from us
        </h2>

        <div style={{ position: "relative" }}>
          {/* Fade gradients on edges */}
          <div style={{
            position: "absolute", top: 0, bottom: 0, left: 0,
            width: 120,
            background: "linear-gradient(to right, #fff, transparent)",
            zIndex: 2, pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", top: 0, bottom: 0, right: 0,
            width: 120,
            background: "linear-gradient(to left, #fff, transparent)",
            zIndex: 2, pointerEvents: "none",
          }} />

          <div style={{ overflow: "hidden", width: "100%", padding: "12px 0" }}>
            <div ref={trackRef} className="edu-carousel-track">
              {doubled.map((c, i) => (
                <div key={`${c.name}-${i}`} className="edu-carousel-item">
                  <img 
                    src={c.logoUrl} 
                    alt={c.name}
                    onError={(e) => {
                      // Fallback in case logo doesn't load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationSection;
