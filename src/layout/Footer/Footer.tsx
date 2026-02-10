import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { useFreeDemo } from "../../context/FreeDemoContext";
import { courseCategories } from "../../data/categories/courseCategories";

const Footer = () => {
  const { openDemo } = useFreeDemo();
  const navigate = useNavigate();

  // Pick top 5 featured or highest priority categories for the footer
  const popularCategories = courseCategories
    .filter(cat => cat.isActive)
    .sort((a, b) => a.sequence - b.sequence)
    .slice(0, 5);

  return (
    <footer className="bg-black text-white pt-20 pb-8 z-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP CTA SECTION */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-semibold mb-3">
              Let’s Connect with us
            </h2>
            <p className="text-sm text-white/70 max-w-xl">
              We're here to support your learning journey every step of the way.
              Let’s build your future, one lesson at a time.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 rounded-full
                border border-white/40
                text-sm font-medium transition-colors hover:bg-white/10"
            >
              Contact Us
            </motion.button>

            <motion.button
              onClick={openDemo}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3
                bg-[#2E78CC] text-white
                px-5 py-2 rounded-full
                font-medium shadow-lg"
            >
              Free Demo Class
              <motion.span
                variants={{ hover: { x: 4 } }}
                className="flex items-center justify-center
                  w-8 h-8 rounded-full
                  bg-white text-[#2E78CC]"
              >
                <ArrowUpRight size={16} />
              </motion.span>
            </motion.button>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-px bg-white/15 my-12" />

        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* BRAND + NEWSLETTER */}
          <div>
            <img
              src="/proximsoft_logo.png"
              alt="Proximsoft"
              className="h-10 mb-6"
            />
            <p className="text-sm text-white/70 mb-4">
              Subscribe our newsletter for Update
            </p>
            <div className="flex items-center bg-white/10 rounded-full overflow-hidden focus-within:ring-1 focus-within:ring-[#3B8EEA]">
              <input
                type="email"
                placeholder="Enter your email..."
                className="bg-transparent px-4 py-2 text-sm outline-none w-full"
              />
              <button
                className="bg-[#3B8EEA] px-5 py-2 text-sm font-medium whitespace-nowrap hover:bg-[#2563b5] transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-[#3B8EEA]">Quick Link</h4>
            <ul className="flex flex-col space-y-3 text-sm text-white/70">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/courses">Courses</FooterLink>
              <FooterLink to="/contact">Contact Us</FooterLink>
              <FooterLink to="/blogs">Blogs</FooterLink>
            </ul>
          </div>

          {/* DYNAMIC POPULAR CATEGORIES */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-[#3B8EEA]">
              Popular Categories
            </h4>
            <ul className="flex flex-col space-y-3 text-sm text-white/70">
              {popularCategories.map((cat) => (
                <li key={cat.uid}>
                  <Link 
                    to={`/courses/${cat.slug}`} 
                    className="hover:text-white transition-colors"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-[#3B8EEA]">
              Contact Information
            </h4>
            <div className="space-y-3 text-sm text-white/70">
              <p className="flex flex-col">
                <span className="text-xs text-white/40 mb-1">Phone</span>
                +1 (908) 312 4519
              </p>
              <p className="flex flex-col">
                <span className="text-xs text-white/40 mb-1">Email</span>
                careers@proximsoft.com
              </p>
              <p className="flex flex-col">
                <span className="text-xs text-white/40 mb-1">Address</span>
                3600 NJ-66 #150, Tinton Falls, NJ
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-white/60 text-center md:text-left">
            © {new Date().getFullYear()} Proximsoft |{" "}
            <Link to="/terms" className="hover:text-white underline decoration-white/20 underline-offset-4">Terms & Conditions</Link> |{" "}
            <Link to="/privacy" className="hover:text-white underline decoration-white/20 underline-offset-4">Privacy & Policy</Link>
          </p>

          {/* SOCIAL ICONS WITH UPDATED LINKS */}
          <div className="flex items-center gap-4">
            <SocialIcon href="https://www.facebook.com/proximsoft">
              <Facebook size={16} />
            </SocialIcon>
            <SocialIcon href="#"> {/* Add Twitter if needed */}
              <Twitter size={16} />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/company/proximsoft/">
              <Linkedin size={16} />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/proximsoft/">
              <Instagram size={16} />
            </SocialIcon>
          </div>
        </div>

      </div>
    </footer>
  );
};

/* ---------------- HELPERS ---------------- */

const FooterLink = ({ to, children }: any) => (
  <NavLink
    to={to}
    className={({ isActive }) => 
      `transition-colors hover:text-white ${isActive ? "text-white font-medium" : ""}`
    }
  >
    {children}
  </NavLink>
);

const SocialIcon = ({ children, href }: any) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.15, backgroundColor: "#2E78CC" }}
    whileTap={{ scale: 0.9 }}
    className="w-9 h-9 rounded-full
      bg-white/10 text-white
      flex items-center justify-center transition-colors"
  >
    {children}
  </motion.a>
);

export default Footer;