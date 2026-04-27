import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  Search,
  ArrowRight,
  LayoutGrid,
} from "lucide-react";

import { courseCategories } from "../../data/categories/courseCategories";
import { courses } from "../../data/courses/course";
import { useFreeDemo } from "../../context/FreeDemoContext";
import TopNavbar from "./TopNavbar";

const NavbarV2 = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  /* SEARCH STATES */
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  /* CATEGORY STATES */
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Categories");

  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { openDemo } = useFreeDemo();

  /* SEARCH HANDLER */
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (!value.trim()) {
      setResults([]);
      setShowDropdown(false);
      return;
    }

    const filtered = courses.filter((course: any) => {
      const titleMatch = course.course_details.course_title
        .toLowerCase()
        .includes(value.toLowerCase());

      const categoryMatch =
        selectedCategory === "Categories" ||
        selectedCategory === "All" ||
        course.course_details.course_category.category_title === selectedCategory;

      return titleMatch && categoryMatch;
    });

    setResults(filtered.slice(0, 6));
    setShowDropdown(true);
  };

  /* OUTSIDE CLICK */
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
        setCategoryOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <TopNavbar />
      <div className="max-w-[1300px] mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <NavLink to="/" className="flex items-center">
          <img src="/proximsoft-logo-web-navbar.webp" className="h-12  mr-4" />
        </NavLink>

        {/* NAV LINKS */}
        <nav className="hidden lg:flex items-center gap-8 text-md font-medium text-black">

          <NavItem to="/">Home</NavItem>

          {/* COURSES DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setCoursesOpen(true)}
            onMouseLeave={() => setCoursesOpen(false)}
          >
            <button className="flex items-center gap-1">
              Courses <ChevronDown size={14} />
            </button>

            <AnimatePresence>
              {coursesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-8 left-0 bg-white shadow-lg rounded-md w-56 z-50"
                >
                  {/* All Courses — no filter */}
                  <DropdownItem to="/courses">All Courses</DropdownItem>

                  {/* Per-category — filters AllCoursesV2 via ?category=categoryId */}
                  {courseCategories
                    .filter((cat) => cat.isActive)
                    .sort((a, b) => a.sequence - b.sequence)
                    .map((cat) => (
                      <DropdownItem
                        key={cat.uid}
                        to={`/courses?category=${cat.categoryId}`}
                      >
                        {cat.title}
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

        {/* RIGHT SECTION */}
        <div className="hidden lg:flex items-center gap-4">

          {/* SEARCH */}
          <div className="relative w-[420px]" ref={dropdownRef}>
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">

              {/* CATEGORY DROPDOWN */}
              <div className="relative">
                <button
                  onClick={() => setCategoryOpen(!categoryOpen)}
                  className="flex items-center gap-2 text-sm text-gray-600 pr-3 border-r"
                >
                  <LayoutGrid size={32} className="text-[#6C5CE7]" />
                  {selectedCategory}
                  <ChevronDown size={14} />
                </button>

                <AnimatePresence>
                  {categoryOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      className="absolute top-10 left-0 bg-white shadow-lg rounded-md w-48 z-50"
                    >
                      <DropdownSelect
                        onClick={() => {
                          setSelectedCategory("All");
                          setCategoryOpen(false);
                        }}
                      >
                        All
                      </DropdownSelect>

                      {courseCategories
                        .filter((cat) => cat.isActive)
                        .sort((a, b) => a.sequence - b.sequence)
                        .map((cat) => (
                          <DropdownSelect
                            key={cat.uid}
                            onClick={() => {
                              setSelectedCategory(cat.title);
                              setCategoryOpen(false);
                            }}
                          >
                            {cat.title}
                          </DropdownSelect>
                        ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* INPUT */}
              <input
                type="text"
                placeholder="Search your Course..."
                value={searchTerm}
                onChange={handleSearch}
                onFocus={() => results.length > 0 && setShowDropdown(true)}
                className="bg-transparent outline-none px-3 text-base w-full"
              />

              <span className="bg-blue-900 rounded-full p-2">
                <Search size={24} className="text-white" />
              </span>
            </div>

            {/* SEARCH RESULTS */}
            <AnimatePresence>
              {showDropdown && results.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl overflow-hidden z-50 border"
                >
                  {results.map((course) => (
                    <div
                      key={course.course_details.course_id}
                      onClick={() => {
                        navigate(
                          `${course.course_details.course_category.category_url}/${course.course_details.course_slug}`
                        );
                        setShowDropdown(false);
                        setSearchTerm("");
                      }}
                      className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer group"
                    >
                      <div className="w-12 h-8 rounded-md overflow-hidden border">
                        <img
                          src={course.course_details.course_thumbnail}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-grow text-left">
                        <h4 className="text-gray-900 font-semibold text-sm">
                          {course.course_details.course_title}
                        </h4>
                        <p className="text-blue-600 text-xs font-bold uppercase">
                          {course.course_details.difficulty_level}
                        </p>
                      </div>

                      <ArrowRight size={14} className="text-gray-300 group-hover:text-blue-600" />
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ICONS */}
          {/* <IconWithBadge icon={<Heart size={18} />} count={0} />
          <IconWithBadge icon={<ShoppingCart size={18} />} count={0} /> */}

          {/* CTA */}
          <button
            onClick={openDemo}
            className="bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded-full font-semibold"
          >
            Book Demo
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <button className="lg:hidden" onClick={() => setMobileOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed top-0 right-0 w-[300px] h-full bg-white shadow-lg z-50"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <img src="/proximsoft_logo.png" className="h-8" />
              <button onClick={() => setMobileOpen(false)}>
                <X size={22} />
              </button>
            </div>

            <div className="p-4">
              <input
                placeholder="Search here..."
                className="w-full bg-gray-100 px-3 py-2 rounded-md outline-none"
              />
            </div>

            <div className="px-4 space-y-3">
              <MobileItem to="/" onClick={() => setMobileOpen(false)}>Home</MobileItem>
              <MobileItem to="/courses" onClick={() => setMobileOpen(false)}>All Courses</MobileItem>
              {courseCategories
                .filter((cat) => cat.isActive)
                .sort((a, b) => a.sequence - b.sequence)
                .map((cat) => (
                  <MobileItem
                    key={cat.uid}
                    to={`/courses?category=${cat.categoryId}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {cat.title}
                  </MobileItem>
                ))}
              <MobileItem to="/blogs" onClick={() => setMobileOpen(false)}>Blog</MobileItem>
              <MobileItem to="/about" onClick={() => setMobileOpen(false)}>About Us</MobileItem>
              <MobileItem to="/contact" onClick={() => setMobileOpen(false)}>Contact</MobileItem>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavbarV2;

/* ---------- HELPERS ---------- */

const NavItem = ({ to, children }: any) => (
  <NavLink to={to} className="hover:text-black flex items-center gap-1">
    {children}
  </NavLink>
);

const DropdownItem = ({ to, children }: any) => (
  <NavLink to={to} className="block px-4 py-2 hover:bg-gray-100">
    {children}
  </NavLink>
);

const DropdownSelect = ({ children, onClick }: any) => (
  <div
    onClick={onClick}
    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
  >
    {children}
  </div>
);

const MobileItem = ({ to, children, onClick }: any) => (
  <NavLink to={to} onClick={onClick} className="block py-2 border-b">
    {children}
  </NavLink>
);

// const IconWithBadge = ({ icon, count }: any) => (
//   <div className="relative">
//     <button className="w-10 h-10 rounded-full border flex items-center justify-center">
//       {icon}
//     </button>
//     <span className="absolute -top-1 -right-1 bg-yellow-400 text-xs w-5 h-5 flex items-center justify-center rounded-full">
//       {count}
//     </span>
//   </div>
// );
