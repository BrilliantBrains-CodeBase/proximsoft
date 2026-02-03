import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { blogs } from "../../../data/blogs/blogs";
import useMeta from "../../../hooks/useMeta";

const BlogIndividual = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="py-24 text-center text-gray-600">
        Blog not found
      </div>
    );
  }

  useMeta({
    title: blog.metaTitle,
    description: blog.metaDescription,
  });

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#f8fafc] py-16 mt-12"
    >
      <div className="mx-auto max-w-3xl px-4">
        {/* Title */}
        <h1 className="text-center text-3xl font-semibold text-gray-900 md:text-4xl">
          {blog.title}
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-center text-sm leading-relaxed text-gray-500">
          Our Finance Insights Blog is dedicated to bringing you the latest
          news, expert advice, and actionable strategies to help you navigate
          the complexities of personal and business finance.
        </p>

        {/* Author Row */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <img
              src={blog.author.avatar}
              alt={blog.author.name}
              className="h-8 w-8 rounded-full"
            />
            <span>
              Written by{" "}
              <span className="font-medium text-gray-700">
                {blog.author.name}
              </span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="rounded-full border px-3 py-1 text-xs">
              {blog.date}
            </span>
            <span className="rounded-full border px-3 py-1 text-xs">
              {blog.readTime}
            </span>
          </div>
        </div>

        {/* Cover Image */}
        <motion.img
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          src={blog.coverImage}
          alt={blog.title}
          className="mt-10 w-full rounded-2xl object-cover"
        />

        {/* Content */}
        <article
          className="
            prose prose-lg mt-10 max-w-none
            prose-headings:text-gray-900
            prose-p:text-gray-600
            prose-li:text-gray-600
            prose-blockquote:border-l-gray-300
            prose-blockquote:text-gray-500
          "
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </motion.section>
  );
};

export default BlogIndividual;
