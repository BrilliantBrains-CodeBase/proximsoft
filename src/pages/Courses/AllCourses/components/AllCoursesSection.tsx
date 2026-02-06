import { useMemo, useEffect, useRef } from "react"; // Added useEffect and useRef
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { courseCategories } from "../../../../data/categories/courseCategories";

const PAGE_SIZE = 6;

const AllCoursesSection = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const sectionRef = useRef<HTMLDivElement>(null); // Ref for scrolling

  // URL State Management
  const currentCategory = searchParams.get("filter") || "All courses";
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  /* --- Auto Scroll Logic --- */
  useEffect(() => {
    // Scroll to the top of the section smoothly when page or filter changes
    if (sectionRef.current) {
      const yOffset = -100; // Adjust this offset based on your header height
      const y = sectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [currentPage, currentCategory]); // Triggers on every page or filter change

  /* 1. Filter Options */
  const filterOptions = useMemo(() => {
    const titles = courseCategories
      .filter((cat) => cat.isActive)
      .map((cat) => cat.title);
    return ["All courses", ...new Set(titles)];
  }, []);

  /* 2. Filter and Sort the Grid Data */
  const filteredCourses = useMemo(() => {
    let result = courseCategories.filter((cat) => cat.isActive);
    if (currentCategory !== "All courses") {
      result = result.filter((cat) => cat.title === currentCategory);
    }
    return result.sort((a, b) => a.sequence - b.sequence);
  }, [currentCategory]);

  /* 3. Pagination Logic */
  const totalPages = Math.ceil(filteredCourses.length / PAGE_SIZE);
  const visibleCourses = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredCourses.slice(start, start + PAGE_SIZE);
  }, [filteredCourses, currentPage]);

  /* 4. Event Handlers */
  const handleFilterChange = (category: string) => {
    setSearchParams({ filter: category, page: "1" });
  };

  const handlePageChange = (direction: "next" | "prev") => {
    const newPage = direction === "next" ? currentPage + 1 : currentPage - 1;
    if (newPage >= 1 && newPage <= totalPages) {
      setSearchParams({ filter: currentCategory, page: newPage.toString() });
    }
  };

  return (
    <section ref={sectionRef} className="max-w-7xl mx-auto px-4 py-12 mt-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Explore Our Top Course Categories
        </h2>
        <p className="mt-3 text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
          Discover a wide range of learning paths—from design to
          development, business to personal growth.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {filterOptions.map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilterChange(cat)}
            className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
              currentCategory === cat
                ? "bg-[#3B8EEA] text-white shadow-md"
                : "bg-white text-gray-600 border border-gray-100 hover:bg-gray-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentCategory}-${currentPage}`} // Unique key for grid animation
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="contents" // Grid wrapper
          >
            {visibleCourses.map((course) => (
              <motion.div
                key={course.uid}
                whileHover={{ y: -8 }}
                className="group cursor-pointer flex flex-col items-center text-center"
                onClick={() => navigate(course.metaUrl)}
              >
                <div className="relative h-52 w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-6 shadow-sm">
                  <img
                    src={course.coverImage}
                    alt={course.title}
                    className="h-full w-full object-fill group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-2xl">
                      <ArrowUpRight className="text-black w-6 h-6" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#3B8EEA] transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  {course.courseCount} Courses
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Controls */}
      <div className="mt-20 flex items-center justify-between border-t border-gray-100 pt-10">
        <div className="flex items-center gap-1.5">
          {Array.from({ length: totalPages }).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                currentPage === i + 1 ? "w-10 bg-[#3B8EEA]" : "w-4 bg-gray-200"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => handlePageChange("prev")}
            disabled={currentPage === 1}
            className={`p-4 rounded-2xl border transition-all duration-300 ${
              currentPage === 1
                ? "border-gray-100 text-gray-300 cursor-not-allowed"
                : "border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-[#3B8EEA]"
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => handlePageChange("next")}
            disabled={currentPage === totalPages}
            className={`p-4 rounded-2xl transition-all duration-300 ${
              currentPage === totalPages
                ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                : "bg-[#3B8EEA] text-white hover:bg-blue-600 shadow-xl shadow-blue-100"
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllCoursesSection;