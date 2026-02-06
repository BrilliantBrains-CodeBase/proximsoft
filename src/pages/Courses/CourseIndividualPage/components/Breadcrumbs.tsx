import { Link } from "react-router-dom";

interface BreadcrumbProps {
  link1: { name: string; url: string };
  link2: { name: string; url: string };
  link3: { name: string; url: string };
}

const Breadcrumbs: React.FC<BreadcrumbProps> = ({ link1, link2, link3 }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm py-4" aria-label="Breadcrumb">
      {/* Level 1 */}
      <Link to={link1.url} className="text-gray-500 hover:text-blue-600 transition-colors">
        {link1.name}
      </Link>

      <span className="text-gray-400">/</span>

      {/* Level 2 */}
      <Link to={link2.url} className="text-gray-500 hover:text-blue-600 transition-colors">
        {link2.name}
      </Link>

      <span className="text-gray-400">/</span>

      {/* Level 3 (Current Page - No Link needed) */}
      <span className="text-blue-700 font-semibold truncate">
        {link3.name}
      </span>
    </nav>
  );
};

export default Breadcrumbs;