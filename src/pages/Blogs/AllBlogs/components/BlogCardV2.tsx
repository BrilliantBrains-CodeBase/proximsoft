"use client";

import { Link } from "react-router-dom";

export interface Blog {
  slug: string;

  // SEO
  metaTitle: string;
  metaDescription: string;

  // Listing card
  title: string;
  description: string;
  coverImage: string;
  category?: string;

  // Author
  author: {
    name: string;
    avatar: string;
  };

  date: string;
  readTime: string;

  // Full blog content (HTML)
  content: string;
}

interface BlogCardV2Props {
  blog: Blog;
}

const BlogCardV2: React.FC<BlogCardV2Props> = ({ blog }) => {
  const { title, coverImage, author, date, slug, category } = blog;

  return (
    <Link
      to={`/blogs/${slug}`}
      className="group block w-full max-w-[360px]  overflow-hidden rounded-2xl bg-white shadow-sm border-2 border-gray-100 transition-all duration-300 hover:shadow-md"
    >
      {/* ── Image + category badge ────────────────────────────────────── */}
      <div className="relative overflow-hidden rounded-xl m-3">
        <img
          src={coverImage}
          alt={title}
          className="h-[200px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Category pill */}
        <span className="absolute top-3 left-3 inline-block bg-[#5751E1] text-white text-[11px] font-semibold px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      {/* ── Meta row ─────────────────────────────────────────────────── */}
      <div className="flex items-center gap-4 px-4 pt-3 pb-1">
        {/* Date */}
        <div className="flex items-center gap-1.5 text-gray-500 text-[12px]">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <rect x="1" y="2" width="14" height="13" rx="2" stroke="#9CA3AF" strokeWidth="1.4" />
            <path d="M1 6h14" stroke="#9CA3AF" strokeWidth="1.4" />
            <path d="M5 1v2M11 1v2" stroke="#9CA3AF" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <span>{date}</span>
        </div>

        {/* Divider */}
        <span className="text-gray-300 text-xs">|</span>

        {/* Author */}
        <div className="flex items-center gap-1.5 text-gray-500 text-[12px]">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="5" r="3" stroke="#9CA3AF" strokeWidth="1.4" />
            <path d="M2 14c0-3 2.686-5 6-5s6 2 6 5" stroke="#9CA3AF" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <span>by {author.name}</span>
        </div>
      </div>

      {/* ── Title ────────────────────────────────────────────────────── */}
      <div className="px-4 pb-5 pt-2">
        <h3 className="text-[15px] font-bold text-gray-900 leading-snug group-hover:text-[#5751E1] transition-colors duration-200">
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default BlogCardV2;