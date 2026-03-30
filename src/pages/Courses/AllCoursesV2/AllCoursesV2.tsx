import CourseCardV2 from "../Course Card/CourseCardV2";
import { courses } from "../../../data/courses/course";
import { courseCategories } from "../../../data/categories/courseCategories";
import { useMemo} from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import AllCoursesHero from "./AllCoursesHero";
import { div } from "framer-motion/client";

// ─── Icons ──────────────────────────────────────────────────────────────────

const GridIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <rect x="0" y="0" width="7" height="7" rx="1" />
    <rect x="9" y="0" width="7" height="7" rx="1" />
    <rect x="0" y="9" width="7" height="7" rx="1" />
    <rect x="9" y="9" width="7" height="7" rx="1" />
  </svg>
);

const ListIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <rect x="0" y="1" width="16" height="3" rx="1" />
    <rect x="0" y="6.5" width="16" height="3" rx="1" />
    <rect x="0" y="12" width="16" height="3" rx="1" />
  </svg>
);

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill={filled ? "#f59e0b" : "none"}
    stroke="#f59e0b"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const StarRating = ({ rating }: { rating: number }) => (
  <span className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <StarIcon key={i} filled={i <= rating} />
    ))}
  </span>
);

// ─── Component ──────────────────────────────────────────────────────────────

const AllCoursesV2 = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read all state from URL
  const view = searchParams.get("view") || "grid";
  const sort = searchParams.get("sort") || "default";
  const page = Number(searchParams.get("page")) || 1;
  const selectedCategories = searchParams.get("category")?.split(",").filter(Boolean) || [];
  const selectedRatings = searchParams.get("rating")?.split(",").filter(Boolean) || [];
  const selectedLevels = searchParams.get("level")?.split(",").filter(Boolean) || [];

  // ─── Helpers ──────────────────────────────────────────────────────────────

  const setParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(key, value);
    setSearchParams(params);
  };

  const toggleFilterParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    const values = params.get(key)?.split(",").filter(Boolean) || [];

    const updated = values.includes(value)
      ? values.filter((v) => v !== value)
      : [...values, value];

    if (updated.length === 0) params.delete(key);
    else params.set(key, updated.join(","));

    // Always reset to page 1 on filter change
    params.set("page", "1");
    setSearchParams(params);
  };

  // ─── Filtering + Sorting ──────────────────────────────────────────────────

  const filteredCourses = useMemo(() => {
    let data = [...courses];

    if (selectedCategories.length) {
      data = data.filter((c) =>
        selectedCategories.includes(c.course_details.course_category.category_id)
      );
    }

    if (selectedRatings.length) {
      // Show courses that meet ANY of the selected minimum star thresholds
      const minRating = Math.min(...selectedRatings.map(Number));
      data = data.filter((c) => c.course_metrics.avg_rating >= minRating);
    }

    if (selectedLevels.length) {
      data = data.filter((c) =>
        selectedLevels.some((lvl) =>
          c.course_details.difficulty_level.toLowerCase().includes(lvl.toLowerCase())
        )
      );
    }

    if (sort === "price_low") {
      data.sort(
        (a, b) =>
          a.pricing_and_enrollment.discounted_price -
          b.pricing_and_enrollment.discounted_price
      );
    } else if (sort === "price_high") {
      data.sort(
        (a, b) =>
          b.pricing_and_enrollment.discounted_price -
          a.pricing_and_enrollment.discounted_price
      );
    } else if (sort === "rating") {
      data.sort((a, b) => b.course_metrics.avg_rating - a.course_metrics.avg_rating);
    }

    return data;
  }, [searchParams]);

  // ─── Pagination ───────────────────────────────────────────────────────────

  const ITEMS_PER_PAGE = 6;
  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);

  const paginated = filteredCourses.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <div> 
        <AllCoursesHero />  
    <div className="max-w-[1320px] mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8 ">
      
      {/* ─── Sidebar ──────────────────────────────────────────────────────── */}
      <div className="space-y-6">

        {/* Categories */}
        <div className="bg-[#f5f4fb] p-6 rounded-2xl">
          <h3 className="font-semibold text-lg mb-4">Categories</h3>
          <div className="space-y-3">
            {courseCategories.map((cat) => (
              <label
                key={cat.categoryId}
                className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat.categoryId)}
                  onChange={() => toggleFilterParam("category", cat.categoryId)}
                />
                {cat.title}
              </label>
            ))}
          </div>
        </div>

        {/* Ratings */}
        <div className="bg-[#f5f4fb] p-6 rounded-2xl">
          <h3 className="font-semibold text-lg mb-4">Ratings</h3>
          <div className="space-y-3">
            {[5, 4, 3,2,1].map((r) => (
              <label
                key={r}
                className="flex items-center gap-2 text-sm cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedRatings.includes(String(r))}
                  onChange={() => toggleFilterParam("rating", String(r))}
                />
                <StarRating rating={r} />
                <span className="text-gray-500 text-xs">Rating</span>
              </label>
            ))}
          </div>
        </div>

        {/* Difficulty */}
        <div className="bg-[#f5f4fb] p-6 rounded-2xl">
          <h3 className="font-semibold text-lg mb-4">Level</h3>
          <div className="space-y-3">
            {["Beginner", "Intermediate", "Advanced"].map((lvl) => (
              <label
                key={lvl}
                className="flex items-center gap-2 text-sm cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedLevels.includes(lvl)}
                  onChange={() => toggleFilterParam("level", lvl)}
                />
                {lvl}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Main Content ─────────────────────────────────────────────────── */}
      <div className="lg:col-span-3">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <p className="text-gray-600 text-sm">
            Showing {paginated.length} of {filteredCourses.length} Results
          </p>

          <div className="flex items-center gap-3">

            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => setParam("sort", e.target.value)}
              className="border rounded-lg px-3 py-2 text-sm"
            >
              <option value="default">Default Sorting</option>
              <option value="price_low">Price: Low to High</option>
              <option value="price_high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>

            {/* View toggle */}
            <button
              onClick={() => setParam("view", "grid")}
              className={`p-2 rounded transition-colors ${
                view === "grid" ? "bg-[#5B4FCF] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              title="Grid view"
            >
              <GridIcon />
            </button>

            <button
              onClick={() => setParam("view", "list")}
              className={`p-2 rounded transition-colors ${
                view === "list" ? "bg-[#5B4FCF] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              title="List view"
            >
              <ListIcon />
            </button>
          </div>
        </div>

        {/* Courses */}
        {paginated.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <p className="mt-4 text-lg font-medium">No courses found</p>
            <p className="text-sm mt-1">Try adjusting your filters</p>
          </div>
        ) : (
          <motion.div
            layout
            className={
              view === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                : "flex flex-col gap-6"
            }
          >
            {paginated.map((course) => (
              <motion.div
                key={course.course_details.course_uid}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={view === "list" ? "flex items-start" : ""}
              >
                <CourseCardV2 course={course} view={view} />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-10 gap-1">

            {/* Prev */}
            <button
              onClick={() => setParam("page", String(page - 1))}
              disabled={page === 1}
              className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 disabled:opacity-30 hover:bg-gray-100 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="10 12 6 8 10 4" />
              </svg>
              Prev
            </button>

            {/* Page numbers — windowed */}
            {(() => {
              const delta = 2;
              const range: (number | "...")[] = [];
              const left = Math.max(2, page - delta);
              const right = Math.min(totalPages - 1, page + delta);

              range.push(1);
              if (left > 2) range.push("...");
              for (let i = left; i <= right; i++) range.push(i);
              if (right < totalPages - 1) range.push("...");
              if (totalPages > 1) range.push(totalPages);

              return range.map((p, idx) =>
                p === "..." ? (
                  <span key={`ellipsis-${idx}`} className="px-2 py-2 text-gray-400 text-sm select-none">
                    •••
                  </span>
                ) : (
                  <button
                    key={p}
                    onClick={() => setParam("page", String(p))}
                    className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                      page === p
                        ? "bg-[#5B4FCF] text-white shadow-sm"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {p}
                  </button>
                )
              );
            })()}

            {/* Next */}
            <button
              onClick={() => setParam("page", String(page + 1))}
              disabled={page === totalPages}
              className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 disabled:opacity-30 hover:bg-gray-100 transition-colors"
            >
              Next
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 4 10 8 6 12" />
              </svg>
            </button>

          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default AllCoursesV2;