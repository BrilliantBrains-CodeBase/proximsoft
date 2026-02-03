import { motion } from "framer-motion";
import BlogCard  from "./components/BlogCard"
import { blogs } from "../../../data/blogs/blogs";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const AllBlogs = () => {
  return (
    <section className="bg-[#f8fafc] py-16 mt-12">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs tracking-wide text-gray-600">
            OUR BLOGS & ARTICLES
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-gray-900 md:text-4xl">
            Featured insights and articles
          </h2>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {blogs.map((blog) => (
            <motion.div key={blog.slug} variants={itemVariants}>
              <BlogCard blog={blog} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AllBlogs;
