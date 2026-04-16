import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { courseCategories } from "../../data/categories/courseCategories";
import { MapIcon, Phone } from "lucide-react";

const FooterV2 = () => {
  const popularCategories = courseCategories
    .filter((cat) => cat.isActive)
    .sort((a, b) => a.sequence - b.sequence)
    .slice(0, 5);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer style={{ backgroundColor: "#0b0e2d" }} className="text-white">

      {/* ── MAIN GRID ── */}
      <div className="max-w-[1300px] mx-auto px-10 pt-16 pb-20">
        <div
          className="grid gap-8 grid-cols-1 md:grid-cols-4"
        >

          {/* ── COL 1 : BRAND ── */}
          <div className="flex flex-col">
            {/* Logo */}
            <NavLink to="/" className="inline-flex items-center mb-6">
              <img
                src="/proximlogo.png"
                alt="Proximsoft"
                className="h-36 w-36"
              />
            </NavLink>

            {/* Description */}
            <p
              className="text-sm leading-6 mb-6"
              style={{ color: "#8b90bb", maxWidth: "300px" }}
            >
              We're here to support your learning journey every step of the way.
              Let's build your future, one lesson at a time.
            </p>

            {/* Address */}
            <p className="text-sm mb-2 flex items-center gap-4" style={{ color: "#c5c8e0" }}>
              <MapIcon className="w-4 h-4"/>
              <span>
                3600 NJ-66 #150, Tinton Falls, NJ 
              </span>
            </p>

            {/* Phone */}
            <p className="text-sm flex items-center gap-4" style={{ color: "#c5c8e0" }}>
              <Phone className="h-4 w-4" />
             <span> +1 (908) 312 4519</span>
            </p>
          </div>

          {/* ── COL 2 : USEFUL LINKS ── */}
          <div>
            <h4 className="text-[17px] font-bold text-white mb-3 tracking-wide">
              Useful Links
            </h4>
            {/* Purple underline */}
            <div
              className="mb-6 rounded-sm"
              style={{ width: "36px", height: "3px", backgroundColor: "#5b5ef8" }}
            />
            <ul className="flex flex-col gap-[14px]">
              <FLink to="/">Home</FLink>
              <FLink to="/about">About Us</FLink>
              <FLink to="/courses">Courses</FLink>
              <FLink to="/blogs">Blogs</FLink>
              <FLink to="/contact">Contact Us</FLink>
              <FLink to="/terms">Terms & Conditions</FLink>
            </ul>
          </div>

          {/* ── COL 3 : OUR COMPANY ── */}
          <div>
            <h4 className="text-[17px] font-bold text-white mb-3 tracking-wide">
              Our Company
            </h4>
            <div
              className="mb-6 rounded-sm"
              style={{ width: "36px", height: "3px", backgroundColor: "#5b5ef8" }}
            />
            <ul className="flex flex-col gap-[14px]">
              <FLink to="/contact">Contact Us</FLink>
              {popularCategories.map((cat) => (
                <FLink key={cat.uid} to={`/courses?category=${cat.categoryId}`}>
                  {cat.title}
                </FLink>
              ))}
            </ul>
          </div>

          {/* ── COL 4 : GET IN TOUCH ── */}
          <div>
            <h4 className="text-[17px] font-bold text-white mb-3 tracking-wide">
              Get In Touch
            </h4>
            <div
              className="mb-6 rounded-sm"
              style={{ width: "36px", height: "3px", backgroundColor: "#5b5ef8" }}
            />

            <p
              className="text-sm leading-6 mb-5"
              style={{ color: "#8b90bb", maxWidth: "240px" }}
            >
              careers@proximsoft.com
            </p>

            {/* ── SOCIAL ICONS ── */}
            <div className="flex items-center gap-4 mb-8">
              {/* Facebook */}
              <SocialA href="https://www.facebook.com/proximsoft">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </SocialA>

              {/* Twitter */}
              <SocialA href="#">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </SocialA>

              {/* WhatsApp */}
              <SocialA href="#">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </SocialA>

              {/* Instagram */}
              <SocialA href="https://www.instagram.com/proximsoft/">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                </svg>
              </SocialA>

              {/* YouTube */}
              <SocialA href="#">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  <polygon fill="#0b0e2d" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                </svg>
              </SocialA>
            </div>

            {/* ── APP STORE BUTTONS (side by side) ── */}
            <div className="flex items-center gap-3">
              {/* Google Play */}
              <AppBtn href="#">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 shrink-0">
                  <path d="M3 20.5v-17c0-.83 1-.83 1.5-.5l14 8.5-14 8.5C3.5 21.33 3 20.5 3 20.5z" />
                </svg>
                <span className="flex flex-col leading-tight text-left">
                  <span className="text-[10px] font-normal" style={{ color: "#9ca0c4" }}>
                    Get It On
                  </span>
                  <span className="text-[13px] font-semibold text-white">
                    Google Play
                  </span>
                </span>
              </AppBtn>

              {/* Apple Store */}
              <AppBtn href="#">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 shrink-0">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span className="flex flex-col leading-tight text-left">
                  <span className="text-[10px] font-normal" style={{ color: "#9ca0c4" }}>
                    Download On The
                  </span>
                  <span className="text-[13px] font-semibold text-white">
                    Apple Store
                  </span>
                </span>
              </AppBtn>
            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div style={{ backgroundColor: "#13183f" }}>
        <div className="max-w-[1300px] mx-auto px-10 py-5 flex items-center justify-between">
          {/* Copyright */}
          <p className="text-[13px]" style={{ color: "#6b6f94" }}>
            © {new Date().getFullYear()} Proximsoft. All rights reserved.
          </p>

          {/* Right side */}
          <div className="flex items-center gap-5">
            <Link
              to="/terms"
              className="text-[13px] transition-colors hover:text-white"
              style={{ color: "#9ca0c4" }}
            >
              Term of Use
            </Link>
            <span className="text-[13px]" style={{ color: "#6b6f94" }}>
              |
            </span>
            <Link
              to="/privacy"
              className="text-[13px] transition-colors hover:text-white"
              style={{ color: "#9ca0c4" }}
            >
              Privacy Policy
            </Link>

            {/* Scroll to top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-full flex items-center justify-center text-white"
              style={{ backgroundColor: "#5b5ef8" }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

    </footer>
  );
};

/* ──────────── HELPERS ──────────── */

const FLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <li>
    <NavLink
      to={to}
      style={{ color: "#c5c8e8" }}
      className="text-sm transition-colors hover:text-white"
    >
      {children}
    </NavLink>
  </li>
);

const SocialA = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="transition-colors hover:text-white"
    style={{ color: "#c5c8e8" }}
  >
    {children}
  </a>
);

const AppBtn = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-3 py-[10px] rounded-lg border transition-colors hover:border-white/40"
    style={{
      backgroundColor: "#1a1f4e",
      borderColor: "#2d3270",
      color: "#c5c8e8",
    }}
  >
    {children}
  </a>
);

export default FooterV2;