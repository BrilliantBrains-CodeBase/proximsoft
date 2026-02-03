import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-8">
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
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 rounded-full
                border border-white/40
                text-sm font-medium"
            >
              Contact Us
            </motion.button>

            <motion.button
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3
                bg-[#2E78CC] text-white
                px-5 py-2 rounded-full
                font-medium"
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

            <div className="flex items-center bg-white/10 rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email..."
                className="bg-transparent px-4 py-2 text-sm outline-none w-full"
              />
              <button
                className="bg-[#3B8EEA] px-5 py-2 text-sm font-medium whitespace-nowrap hover:cursor-pointer"
              >
                Subscribe Now
              </button>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Link</h4>
            <ul className="flex flex-col space-y-3 text-sm text-white/70">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/courses">Courses</FooterLink>
              <FooterLink to="/contact">Contact Us</FooterLink>
              <FooterLink to="/blogs">Blogs</FooterLink>
            </ul>
          </div>

          {/* CATEGORIES */}
          <div>
            <h4 className="text-sm font-semibold mb-4">
              Popular Categories
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>UI/UX Design</li>
              <li>Web Development</li>
              <li>Digital Marketing</li>
              <li>Business Consulting</li>
              <li>Language Learning</li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="text-sm font-semibold mb-4">
              Contact Information
            </h4>

            <div className="space-y-3 text-sm text-white/70">
              <p>Phone: +123 456 7890</p>
              <p>Email: support@proximsoft.com</p>
              <p>
                Address:
                <br />
                1901 Thornridge Cir.
                <br />
                Shiloh, Hawaii 81063
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} proximsoft |{" "}
            <Link to="/terms">Terms & Conditions</Link> |{" "}
            <Link to="/privacy">Privacy & Policy</Link>
          </p>


          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4">
            <SocialIcon><Facebook size={16} /></SocialIcon>
            <SocialIcon><Twitter size={16} /></SocialIcon>
            <SocialIcon><Linkedin size={16} /></SocialIcon>
            <SocialIcon><Instagram size={16} /></SocialIcon>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

/* ---------------- HELPERS ---------------- */

const FooterLink = ({ to, children }: any) => (
  <NavLink
    to={to}
    className="hover:text-white transition"
  >
    {children}
  </NavLink>
);

const SocialIcon = ({ children }: any) => (
  <motion.a
    whileHover={{ scale: 1.15 }}
    className="w-9 h-9 rounded-full
      bg-[#3B8EEA]
      flex items-center justify-center"
    href="#"
  >
    {children}
  </motion.a>
);
