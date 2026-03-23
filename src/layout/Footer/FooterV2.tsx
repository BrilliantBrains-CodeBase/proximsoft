import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  ArrowUp,
} from "lucide-react";
import { courseCategories } from "../../data/categories/courseCategories";
import { FaLinkedin } from "react-icons/fa";

const FooterV2 = () => {
  const popularCategories = courseCategories
    .filter((cat) => cat.isActive)
    .sort((a, b) => a.sequence - b.sequence)
    .slice(0, 5);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      
      className="text-white bg-[#1a1e49]"
    >
      {/* MAIN FOOTER BODY */}
      <div className="max-w-[1300px] mx-auto px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* COL 1 — BRAND */}
          <div className="flex flex-col gap-5">
            <NavLink to="/" className="flex items-center gap-2">
              <img
                src="/proximsoft_logo.png"
                alt="Proximsoft"
                className="h-10"
              />
            </NavLink>

            <p className="text-lg leading-relaxed" style={{ color: "#8b90b8" }}>
              We're here to support your learning journey every step of the way.
              Let's build your future, one lesson at a time.
            </p>

            <div className="flex flex-col gap-2 text-sm" style={{ color: "#8b90b8" }}>
              <span>3600 NJ-66 #150, Tinton Falls, NJ</span>
              <span>+1 (908) 312 4519</span>
            </div>
          </div>

          {/* COL 2 — USEFUL LINKS */}
          <div>
            <h4 className="text-base font-bold text-white mb-3">
              Useful Links
            </h4>
            {/* Blue underline accent */}
            <div
              className="w-8 h-[3px] rounded-full mb-6"
              style={{ backgroundColor: "#5c5fff" }}
            />
            <ul className="flex flex-col gap-4">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/courses">Courses</FooterLink>
              <FooterLink to="/blogs">Blogs</FooterLink>
              <FooterLink to="/contact">Contact Us</FooterLink>
            </ul>
          </div>

          {/* COL 3 — OUR COMPANY (Popular Categories) */}
          <div>
            <h4 className="text-base font-bold text-white mb-3">
              Our Company
            </h4>
            <div
              className="w-8 h-[3px] rounded-full mb-6"
              style={{ backgroundColor: "#5c5fff" }}
            />
            <ul className="flex flex-col gap-4">
              <FooterLink to="/contact">Contact Us</FooterLink>
              {popularCategories.map((cat) => (
                <FooterLink key={cat.uid} to={`/courses/${cat.slug}`}>
                  {cat.title}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* COL 4 — GET IN TOUCH */}
          <div>
            <h4 className="text-base font-bold text-white mb-3">
              Get In Touch
            </h4>
            <div
              className="w-8 h-[3px] rounded-full mb-6"
              style={{ backgroundColor: "#5c5fff" }}
            />

            <p className="text-sm leading-relaxed mb-5" style={{ color: "#8b90b8" }}>
              careers@proximsoft.com
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-3 mb-7">
              <SocialIcon href="https://www.facebook.com/proximsoft">
                <Facebook size={15} />
              </SocialIcon>
              <SocialIcon href="https://www.instagram.com/proximsoft/">
                <Instagram size={15} />
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com/company/proximsoft/">
                <FaLinkedin size={15} />
              </SocialIcon>
              
            </div>

            {/* APP STORE BUTTONS */}
            <div className="flex flex-col gap-3">
              <AppStoreButton
                href="#"
                topText="Get It On"
                bottomText="Google Play"
                icon={
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M3.18 23.76c.33.18.7.24 1.06.18l11.34-11.34L12 9.06 3.18 23.76zM20.54 10.3l-2.7-1.56-3.24 3.24 3.24 3.24 2.7-1.56c.78-.42.78-1.56 0-1.98l.0-.38zM4.24.06C3.88 0 3.51.06 3.18.24L12 9.06l3.54-3.54L4.24.06zM3.18.24L12 9.06" />
                  </svg>
                }
              />
              <AppStoreButton
                href="#"
                topText="Download On The"
                bottomText="Apple Store"
                icon={
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div style={{ backgroundColor: "#080c24" }}>
        <div className="max-w-[1300px] mx-auto px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "#6b7094" }}>
            © {new Date().getFullYear()} Proximsoft. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link
              to="/terms"
              className="text-xs transition-colors hover:text-white"
              style={{ color: "#6b7094" }}
            >
              Term of Use
            </Link>
            <span style={{ color: "#6b7094" }} className="text-xs">|</span>
            <Link
              to="/privacy"
              className="text-xs transition-colors hover:text-white"
              style={{ color: "#6b7094" }}
            >
              Privacy Policy
            </Link>

            {/* SCROLL TO TOP */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-full flex items-center justify-center text-white"
              style={{ backgroundColor: "#5c5fff" }}
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* ---------- HELPERS ---------- */

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-sm transition-colors hover:text-white ${
          isActive ? "text-white" : ""
        }`
      }
      style={({ isActive }) => ({
        color: isActive ? "#ffffff" : "#8b90b8",
      })}
    >
      {children}
    </NavLink>
  </li>
);

const SocialIcon = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.9 }}
    className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
    style={{ color: "#8b90b8" }}
  >
    {children}
  </motion.a>
);

const AppStoreButton = ({
  href,
  topText,
  bottomText,
  icon,
}: {
  href: string;
  topText: string;
  bottomText: string;
  icon: React.ReactNode;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    className="flex items-center gap-3 px-4 py-2 rounded-lg border transition-colors w-fit"
    style={{
      backgroundColor: "#1a1f4a",
      borderColor: "#2e3368",
    }}
  >
    <span className="text-white">{icon}</span>
    <span className="flex flex-col leading-tight">
      <span className="text-[10px]" style={{ color: "#8b90b8" }}>
        {topText}
      </span>
      <span className="text-sm font-semibold text-white">{bottomText}</span>
    </span>
  </motion.a>
);

export default FooterV2;