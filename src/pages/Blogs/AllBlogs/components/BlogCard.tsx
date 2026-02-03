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


interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const {
    title,
    description,
    coverImage,
    author,
    date,
    readTime,
    slug,
  } = blog;

  return (
    <Link
      to={`/blogs/${slug}`}
      className="group block max-w-sm overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 leading-snug">
          {title}
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          {description}
        </p>

        {/* Author */}
        <div className="mt-5 flex items-center gap-3">
          <img
            src={author.avatar}
            alt={author.name}
            className="h-9 w-9 rounded-full object-cover"
          />

          <div className="text-sm">
            <p className="font-medium text-gray-800">{author.name}</p>
            <p className="text-gray-400">
              {date} • {readTime}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
