import { useMemo , useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { courses } from '../../../data/courses/course';
import { courseCategories } from '../../../data/categories/courseCategories'; 
import CourseCard from './components/CourseCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Breadcrumb from './components/BreadCrumb';
import useMeta from '../../../hooks/useMeta';
import CTASection from '../../../layout/CTA/CTASection';

const COURSES_PER_PAGE = 6;

const CourseCategory = () => {
  const { "course-category-slug": categorySlug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1');

  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}, [currentPage]);

  // 1. Find the current category data for SEO and Header
  const currentCategory = useMemo(() => {
    return courseCategories.find((cat) => cat.slug === categorySlug);
  }, [categorySlug]);

  // 2. Set Meta Title and Description using your hook
  useMeta({
    title: currentCategory?.metaTitle || "Courses | Proximsoft",
    description: currentCategory?.metaDescription || "Explore our professional training programs."
  });

  // 3. Filter courses belonging to this category
  const filteredCourses = useMemo(() => {
    return courses.filter(course => 
      course.course_details.course_category.category_url.endsWith(`/${categorySlug}`)
    );
  }, [categorySlug]);

  // 4. Pagination Logic
  const totalPages = Math.ceil(filteredCourses.length / COURSES_PER_PAGE);
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * COURSES_PER_PAGE,
    currentPage * COURSES_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setSearchParams({ page: page.toString() });
  };

  // 5. 404 Guard
  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-6xl font-black text-slate-100 mb-4">404</h1>
          <h2 className="text-2xl font-black text-slate-900">Category Not Found</h2>
          <a href="/courses" className="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-bold">
            Browse All Courses
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-16 mt-6  px-6">
      <div className="max-w-6xl mx-auto">
        
        <Breadcrumb categoryName={currentCategory.title} />

        <div className="mb-10">
          <h1 className="text-3xl font-black text-slate-900 mb-2">
            {currentCategory.title}
          </h1>
          <p className="text-sm text-slate-500 max-w-2xl">
            {currentCategory.metaDescription}
          </p>
          <div className="h-1.5 w-16 bg-blue-600 rounded-full mt-4" />
        </div>

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedCourses.map((course) => (
              <CourseCard key={course.course_details.course_id} course={course} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border-2 border-dashed border-slate-100 rounded-[2rem]">
            <p className="text-slate-400 font-bold">No courses available in this category.</p>
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`transition-all duration-300 rounded-full h-1.5 ${
                    currentPage === i + 1 ? 'bg-blue-600 w-8' : 'bg-slate-300 w-1.5'
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center bg-white disabled:opacity-30 hover:bg-slate-50 transition-all"
              >
                <ChevronLeft size={18} className="text-slate-600" />
              </button>
              <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center disabled:opacity-30 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
              >
                <ChevronRight size={18} className="text-white" />
              </button>
            </div>
          </div>
        )}
      </div>
      <CTASection />
    </div>
  );
};

// Fixed the export to match the component name
export default CourseCategory;