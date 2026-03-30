import { useMemo } from "react";
import { motion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { blogs } from "../../../data/blogs/blogs";
import useMeta from "../../../hooks/useMeta";
import BlogsHero from "./BlogsHero";


// ── Variants ──────────────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } as Transition },
};

const sidebarVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } as Transition },
};

// ── Derived tags from all blogs ───────────────────────────────────────────────

const ALL_TAGS = ["Education", "Training", "Online", "Learn", "Course", "LMS"];

// ── Sub-components ────────────────────────────────────────────────────────────

const MetaIcon = ({ type }: { type: "date" | "author" | "clock" | "comment" }) => {
  if (type === "date") return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <rect x="1" y="2" width="13" height="12" rx="2" stroke="#aaa" strokeWidth="1.2" fill="none"/>
      <line x1="1" y1="6" x2="14" y2="6" stroke="#aaa" strokeWidth="1.2"/>
      <line x1="5" y1="1" x2="5" y2="4" stroke="#aaa" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="10" y1="1" x2="10" y2="4" stroke="#aaa" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
  if (type === "author") return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <circle cx="7.5" cy="5" r="3" stroke="#aaa" strokeWidth="1.2" fill="none"/>
      <path d="M1.5 14C1.5 11 4.2 9 7.5 9C10.8 9 13.5 11 13.5 14" stroke="#aaa" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
    </svg>
  );
  if (type === "clock") return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <circle cx="7.5" cy="7.5" r="6" stroke="#aaa" strokeWidth="1.2" fill="none"/>
      <line x1="7.5" y1="4" x2="7.5" y2="7.5" stroke="#aaa" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="7.5" y1="7.5" x2="10" y2="9.5" stroke="#aaa" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <rect x="1" y="1" width="13" height="10" rx="2" stroke="#aaa" strokeWidth="1.2" fill="none"/>
      <path d="M4 11L4 14L7.5 11.5L11 14L11 11" stroke="#aaa" strokeWidth="1.2" strokeLinejoin="round" fill="none"/>
    </svg>
  );
};

const ChevronRight = ({ active }: { active?: boolean }) => (
  <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
    <path d="M2 2L8 6L2 10" stroke={active ? "#5751E1" : "#aaa"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ── Main Component ────────────────────────────────────────────────────────────

const BlogIndividual: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogs.find((b) => b.slug === slug);

  const latestBlogs = useMemo(() => blogs.slice(0, 4), []);
  const categories = useMemo<string[]>(() => {
    return Array.from(
      new Set(blogs.map((b) => b.category).filter((c): c is string => !!c))
    );
  }, []);

  if (!blog) {
    return (
      <div className="py-24 text-center text-gray-500 text-[15px]">
        Blog not found.
      </div>
    );
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useMeta({ title: blog.metaTitle, description: blog.metaDescription });

  return (
    <section className="bg-[#f8fafc] min-h-screen">
      <BlogsHero blogTitle={blog.title}/>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* ── LEFT: Article ── */}
          <motion.div
            className="flex-1 min-w-0"
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            {/* Cover image */}
            <motion.div
              className="w-full rounded-2xl overflow-hidden mb-6"
              style={{ maxHeight: "420px" }}
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-full object-cover"
                style={{ maxHeight: "420px" }}
              />
            </motion.div>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 text-gray-400 text-[13px] mb-4">
              <span className="flex items-center gap-1.5">
                <MetaIcon type="date" />
                {blog.date}
              </span>
              <span className="flex items-center gap-1.5">
                <MetaIcon type="author" />
                by {blog.author.name}
              </span>
              <span className="flex items-center gap-1.5">
                <MetaIcon type="clock" />
                {blog.readTime}
              </span>
              <span className="flex items-center gap-1.5">
                <MetaIcon type="comment" />
                05 Comments
              </span>
            </div>

            {/* Title */}
            <h1 className="text-[24px] sm:text-[28px] lg:text-[32px] font-extrabold text-[#161439] leading-snug mb-5">
              {blog.title}
            </h1>

            {/* Content */}
            <article
              className="
                prose prose-base max-w-none
                prose-headings:text-[#161439] prose-headings:font-extrabold
                prose-p:text-gray-500 prose-p:leading-relaxed
                prose-li:text-gray-500
                prose-blockquote:not-italic
                prose-blockquote:border-l-4 prose-blockquote:border-[#5751E1]
                prose-blockquote:bg-[#f0eeff]
                prose-blockquote:rounded-r-xl
                prose-blockquote:px-6 prose-blockquote:py-4
                prose-blockquote:text-gray-600
                prose-blockquote:relative
              "
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </motion.div>

          {/* ── RIGHT: Sidebar ── */}
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
                    <Link
                      to={`/blogs?category=${cat}`}
                      className="w-full flex items-center gap-2 text-[14px] py-2 px-1 rounded-lg text-gray-500 hover:text-[#5751E1] font-medium transition-colors duration-200"
                    >
                      <ChevronRight />
                      {cat}
                    </Link>
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
              <div className="flex flex-col gap-4">
                {latestBlogs.map((b) => (
                  <Link
                    key={b.slug}
                    to={`/blogs/${b.slug}`}
                    className="group flex items-center gap-3"
                  >
                    <img
                      src={b.coverImage}
                      alt={b.title}
                      className="w-16 h-14 rounded-xl object-cover flex-shrink-0"
                    />
                    <div className="flex flex-col gap-1 min-w-0">
                      <span className="flex items-center gap-1 text-[11px] text-gray-400">
                        <MetaIcon type="date" />
                        {b.date}
                      </span>
                      <p className="text-[13px] font-semibold text-[#161439] leading-snug line-clamp-2 group-hover:text-[#5751E1] transition-colors duration-200">
                        {b.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div
              className="bg-white rounded-2xl p-6"
              style={{ border: "1px solid #ede9f8", boxShadow: "4px 4px 0px 0px rgba(0,0,0,0.06)" }}
            >
              <h3 className="text-[18px] font-extrabold text-[#161439] mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {ALL_TAGS.map((tag) => (
                  <Link
                    key={tag}
                    to={`/blogs?tag=${tag}`}
                    className="text-[13px] font-medium px-4 py-1.5 rounded-full border border-[#e5e2f5] text-gray-600 hover:bg-[#5751E1] hover:text-white hover:border-[#5751E1] transition-all duration-200"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default BlogIndividual;