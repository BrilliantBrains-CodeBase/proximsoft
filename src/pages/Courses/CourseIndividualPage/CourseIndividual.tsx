import { useParams } from "react-router-dom";
import Course from "./Course";
import { courses } from "../../../data/courses/course"; 

const CourseIndividual = () => {
  // 1. Extract slugs from the URL parameters
  const { "category-slug": categorySlug, "course-slug": courseSlug } = useParams();

  // 2. Find the course
  const foundCourse = courses.find((c) => {
    // Match the course slug directly
    const matchCourse = c.course_details.course_slug === courseSlug;
    
    // Improved Category Match: 
    // We split the category_url by '/' and get the last part to compare with categorySlug
    const urlParts = c.course_details.course_category.category_url.split('/');
    const dataCategorySlug = urlParts[urlParts.length - 1];
    
    const matchCategory = dataCategorySlug === categorySlug;
    
    return matchCourse && matchCategory;
  });

  // Debugging: If you still see 404, check your console
  if (!foundCourse) {
    console.log("URL Params:", { categorySlug, courseSlug });
    console.log("Available Slugs:", courses.map(c => ({
      course: c.course_details.course_slug,
      cat: c.course_details.course_category.category_url
    })));

    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-9xl font-black text-slate-100 absolute inset-0 flex items-center justify-center -z-10">404</h1>
          <h2 className="text-4xl font-black text-slate-900">Course Not Found</h2>
          <p className="text-slate-500 mt-4 font-medium">
            We couldn't find a course matching <span className="text-blue-600 font-bold">"{courseSlug}"</span> 
            <br /> in the <span className="text-blue-600 font-bold">"{categorySlug}"</span> category.
          </p>
          <a href="/courses" className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black transition-all shadow-lg shadow-blue-200">
            Back to All Courses
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-700">
      <Course course={foundCourse} />
    </div>
  );
};

export default CourseIndividual;