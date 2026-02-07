import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
  categoryName: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ categoryName }) => {
  return (
    <nav className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400 mb-6">
      <Link 
        to="/" 
        className="hover:text-blue-600 transition-colors flex items-center gap-1"
      >
        <Home size={12} strokeWidth={3} />
        Home
      </Link>
      
      <ChevronRight size={12} strokeWidth={3} className="text-slate-300" />
      
      <Link 
        to="/courses" 
        className="hover:text-blue-600 transition-colors"
      >
        Courses
      </Link>
      
      <ChevronRight size={12} strokeWidth={3} className="text-slate-300" />
      
      <span className="text-blue-600">
        {categoryName}
      </span>
    </nav>
  );
};

export default Breadcrumb;