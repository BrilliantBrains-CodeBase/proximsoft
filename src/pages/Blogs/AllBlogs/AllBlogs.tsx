import { useState, useMemo } from "react";
import { motion} from "framer-motion";
import type { Variants, Transition } from "framer-motion"
import { Link } from "react-router-dom";
import { blogs } from "../../../data/blogs/blogs";
import BlogsHero from "./components/BlogsHero";

// ── Types ─────────────────────────────────────────────────────────────────────

export interface Blog {
  slug: string;

  // SEO
  metaTitle: string;
  metaDescription: string;

  // Listing card
  title: string;
  description: string;
  coverImage: string;

  // Author
  author: {
    name: string;
    avatar: string;
  };

  date: string;
  readTime: string;

  category?:string;

  // Full blog content (HTML)
  content: string;
}

// ── Variants ──────────────────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } as Transition },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } as Transition },
};

const sidebarVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } as Transition },
};

// ── BlogCard ──────────────────────────────────────────────────────────────────

const BlogCard: React.FC<{ blog: Blog }> = ({ blog }) => (
  <Link to={`/blogs/${blog.slug}`} className="group block h-full">
    <div
      className="relative flex flex-col h-full bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
      style={{ boxShadow: "6px 6px 0px 0px rgba(0,0,0,0.08)", border: "1px solid #f0eef8" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "10px 10px 0px 0px rgba(0,0,0,0.11)";
        (e.currentTarget as HTMLElement).style.transform = "translate(-3px,-3px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "6px 6px 0px 0px rgba(0,0,0,0.08)";
        (e.currentTarget as HTMLElement).style.transform = "translate(0,0)";
      }}
    >
      {/* Cover image */}
      <div className="relative w-full overflow-hidden" style={{ height: "220px" }}>
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Category pill */}
        <span className="absolute top-4 left-4 bg-[#5751E1] text-white text-xs font-semibold px-4 py-1.5 rounded-full z-10">
          {blog.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5">
        {/* Meta row */}
        <div className="flex items-center gap-4 text-gray-400 text-[10px]">
          {/* Date */}
          <span className="flex items-center gap-1.5">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <rect x="1" y="2" width="13" height="12" rx="2" stroke="#aaa" strokeWidth="1.2" fill="none"/>
              <line x1="1" y1="6" x2="14" y2="6" stroke="#aaa" strokeWidth="1.2"/>
              <line x1="5" y1="1" x2="5" y2="4" stroke="#aaa" strokeWidth="1.2" strokeLinecap="round"/>
              <line x1="10" y1="1" x2="10" y2="4" stroke="#aaa" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            {blog.date}
          </span>

          {/* Author */}
          <span className="flex items-center gap-1.5">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <circle cx="7.5" cy="5" r="3" stroke="#aaa" strokeWidth="1.2" fill="none"/>
              <path d="M1.5 14C1.5 11 4.2 9 7.5 9C10.8 9 13.5 11 13.5 14" stroke="#aaa" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
            </svg>
            by {blog.author.name}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-[16px] font-extrabold text-[#161439] leading-snug group-hover:text-[#5751E1] transition-colors duration-200">
          {blog.title}
        </h3>
      </div>
    </div>
  </Link>
);

// ── LatestPostItem ─────────────────────────────────────────────────────────────

const LatestPostItem: React.FC<{ blog: Blog }> = ({ blog }) => (
  <Link to={`/blogs/${blog.slug}`} className="group flex items-center gap-3">
    <img
      src={blog.coverImage}
      alt={blog.title}
      className="w-16 h-14 rounded-xl object-cover flex-shrink-0"
    />
    <div className="flex flex-col gap-1 min-w-0">
      <span className="text-[11px] text-gray-400">{blog.date}</span>
      <p className="text-[13px] font-semibold text-[#161439] leading-snug line-clamp-2 group-hover:text-[#5751E1] transition-colors duration-200">
        {blog.title}
      </p>
    </div>
  </Link>
);

// ── Main Component ────────────────────────────────────────────────────────────

const AllBlogs: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Derive unique categories from blogs data
  const categories = useMemo<string[]>(() => {
    const cats = Array.from(new Set(blogs.map((b) => b.category).filter((c): c is string => !!c)));
    return ["All", ...cats];
  }, []);

  // Latest 4 blogs (by natural order)
  const latestBlogs = useMemo<Blog[]>(() => blogs.slice(0, 4), []);

  // Filtered blogs
  const filtered = useMemo<Blog[]>(() => {
    return blogs.filter((b) => {
      const matchCat = activeCategory === "All" || b.category === activeCategory;
      const matchSearch =
        search.trim() === "" ||
        b.title.toLowerCase().includes(search.toLowerCase()) ||
        b.description.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [search, activeCategory]);

  return (
    <section className="bg-[#f8fafc] min-h-screen py-18">
      <BlogsHero />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">

          {/* ── Left: Blog Grid ── */}
          <div className="flex-1 min-w-0">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
            >
              {filtered.length > 0 ? (
                filtered.map((blog) => (
                  <motion.div key={blog.slug} variants={itemVariants}>
                    <BlogCard blog={blog} />
                  </motion.div>
                ))
              ) : (
                <motion.p
                  variants={itemVariants}
                  className="col-span-3 text-center text-gray-400 py-16 text-[15px]"
                >
                  No blogs found matching your search.
                </motion.p>
              )}
            </motion.div>
          </div>

          {/* ── Right: Sidebar ── */}
          <motion.aside
            variants={sidebarVariants}
            initial="hidden"
            animate="show"
            className="w-full lg:w-[300px] xl:w-[320px] flex-shrink-0 flex flex-col gap-6"
          >
            {/* Search */}
            <div
              className="flex items-center gap-2 bg-white rounded-2xl px-4 py-3"
              style={{ border: "1px solid #ede9f8", boxShadow: "4px 4px 0px 0px rgba(0,0,0,0.06)" }}
            >
              <input
                type="text"
                placeholder="Search here"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-transparent text-[14px] text-gray-600 placeholder-gray-400 outline-none"
              />
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="7.5" cy="7.5" r="5.5" stroke="#5751E1" strokeWidth="1.6" fill="none"/>
                <line x1="11.5" y1="11.5" x2="16" y2="16" stroke="#5751E1" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </div>

            {/* Categories */}
            <div
              className="bg-white rounded-2xl p-6"
              style={{ border: "1px solid #ede9f8", boxShadow: "4px 4px 0px 0px rgba(0,0,0,0.06)" }}
            >
              <h3 className="text-[18px] font-extrabold text-[#161439] mb-4">Categories</h3>
              <ul className="flex flex-col gap-1">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full flex items-center gap-2 text-left text-[14px] py-2 px-1 rounded-lg transition-colors duration-200 ${
                        activeCategory === cat
                          ? "text-[#5751E1] font-bold"
                          : "text-gray-500 hover:text-[#5751E1] font-medium"
                      }`}
                    >
                      <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                        <path
                          d="M2 2L8 6L2 10"
                          stroke={activeCategory === cat ? "#5751E1" : "#aaa"}
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Latest Post */}
            <div
              className="bg-white rounded-2xl p-6"
              style={{ border: "1px solid #ede9f8", boxShadow: "4px 4px 0px 0px rgba(0,0,0,0.06)" }}
            >
              <h3 className="text-[18px] font-extrabold text-[#161439] mb-5">Latest Post</h3>
              <div className="flex flex-col gap-5">
                {latestBlogs.map((blog) => (
                  <LatestPostItem key={blog.slug} blog={blog} />
                ))}
              </div>
            </div>
          </motion.aside>

        </div>
      </div>
    </section>
  );
};

export default AllBlogs;