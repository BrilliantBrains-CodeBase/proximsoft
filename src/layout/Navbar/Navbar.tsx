import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";

import { courseNavItems } from "../../data/navbar/courseNav";
import { useFreeDemo } from "../../context/FreeDemoContext";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);

  const { openDemo } = useFreeDemo();

  return (
    <header
      className="fixed top-0 left-0 w-full z-50
      bg-[#2E78CC]
      "
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* NAVBAR BAR */}
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <NavLink to="/" className="flex items-center">
            <img
              src="/proximsoft_logo.png"
              alt="Proximsoft IT Training Solutions"
              className="h-12 w-auto"
            />
          </NavLink>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#EAF4FF]">

            <NavItem to="/">Home</NavItem>

            {/* COURSES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setCoursesOpen(true)}
              onMouseLeave={() => setCoursesOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-white transition">
                Courses <ChevronDown size={14} />
              </button>

              <AnimatePresence>
                {coursesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-9 left-0 w-56 rounded-sm
                      bg-white backdrop-blur-lg text-black
                      shadow-xl overflow-hidden"
                  >
                     <DropdownItem to="/courses">
                      All Courses
                    </DropdownItem>
                    {courseNavItems.map(item => (
                      <DropdownItem key={item.to} to={item.to}>
                        {item.label}
                      </DropdownItem>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavItem to="/blogs">Blog</NavItem>
            <NavItem to="/about">About Us</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </nav>

          {/* CTA BUTTON */}
          <motion.button
            whileHover="hover"
            whileTap={{ scale: 0.96 }}
            onClick={openDemo}
            className="hidden md:flex items-center gap-3
              bg-white text-[#2E78CC]
              px-4 py-2 rounded-full
              text-sm font-semibold shadow-md"
          >
            Book Free Demo

            <motion.span
              variants={{ hover: { x: 4 } }}
              className="flex items-center justify-center
                w-8 h-8 rounded-full
                bg-[#2E78CC] text-white"
            >
              <ArrowUpRight size={16} />
            </motion.span>
          </motion.button>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="md:hidden mt-3 rounded-2xl
                text-white
                overflow-hidden"
            >
              {/* LINKS */}
              <div className="px-5 py-4 space-y-4 text-sm">

                <MobileItem to="/" onClick={() => setMobileOpen(false)}>
                  Home
                </MobileItem>

                {/* COURSES ACCORDION */}
                <button
                  onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                  className="w-full flex items-center justify-between
                    font-medium"
                >
                  Courses
                  <ChevronDown
                    size={16}
                    className={`transition ${
                      mobileCoursesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {mobileCoursesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-4 space-y-3 text-white"
                    >
                      <MobileItem
                        to="/courses"
                        onClick={() => setMobileOpen(false)}
                      >
                        All Courses
                      </MobileItem>
                      {courseNavItems.map(item => (
                          <MobileItem key={item.to} to={item.to} onClick={() => setMobileOpen(false)}>
                            {item.label}
                          </MobileItem>
                        ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <MobileItem to="/blogs" onClick={() => setMobileOpen(false)}>
                  Blog
                </MobileItem>
                <MobileItem to="/about" onClick={() => setMobileOpen(false)}>
                  About Us
                </MobileItem>
                <MobileItem to="/contact" onClick={() => setMobileOpen(false)}>
                  Contact
                </MobileItem>
              </div>

              {/* DIVIDER */}
              <div className="h-px bg-slate-200" />

              {/* MOBILE CTA */}
              <div className="p-4">
                <button
                  onClick={openDemo}
                  className="w-full flex items-center justify-center gap-3
                    bg-white text-[#2E78CC]
                    py-3 rounded-xl font-semibold"
                >
                  Book Free Demo
                  <span
                    className="flex items-center justify-center
                    w-8 h-8 rounded-full bg-[#2E78CC]"
                  >
                    <ArrowUpRight className="text-white" size={16} />
                  </span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
};

export default Navbar;

/* -------------------- HELPERS -------------------- */

const NavItem = ({ to, children }: any) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `transition hover:text-white ${
        isActive ? "text-white" : ""
      }`
    }
  >
    {children}
  </NavLink>
);

const DropdownItem = ({ to, children }: any) => (
  <NavLink
    to={to}
    className="block px-4 py-3 text-sm
      hover:bg-[#3B8EEA] hover:text-white
      transition"
  >
    {children}
  </NavLink>
);

const MobileItem = ({ to, children, onClick }: any) => (
  <NavLink
    to={to}
    onClick={onClick}
    className="block py-2 font-medium"
  >
    {children}
  </NavLink>
);
