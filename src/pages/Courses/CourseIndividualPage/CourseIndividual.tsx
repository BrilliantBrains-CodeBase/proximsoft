import { useParams } from "react-router-dom";
import Course from "./Course";
import { courses } from "../../../data/courses/course"; 
import useMeta from "../../../hooks/useMeta";

const CourseIndividual = () => {
  const { "category-slug": categorySlug, "course-slug": courseSlug } = useParams();

  // 1. Find the course
  const foundCourse = courses.find((c) => {
    const matchCourse = c.course_details.course_slug === courseSlug;
    const urlParts = c.course_details.course_category.category_url.split('/');
    const dataCategorySlug = urlParts[urlParts.length - 1];
    const matchCategory = dataCategorySlug === categorySlug;
    
    return matchCourse && matchCategory;
  });

  // 2. Call the hook at the TOP LEVEL
  // Use optional chaining and fallback values so it works even if foundCourse is undefined
  useMeta({
    title: foundCourse?.seo_metadata.meta_title || "Course Not Found | YourBrand",
    description: foundCourse?.seo_metadata.meta_description || "Explore our professional courses."
  });

  // 3. Handle 404 Return
  if (!foundCourse) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center relative">
          <h1 className="text-9xl font-black text-slate-100 absolute inset-0 flex items-center justify-center -z-10">404</h1>
          <h2 className="text-4xl font-black text-slate-900">Course Not Found</h2>
          <p className="text-slate-500 mt-4 font-medium">
            We couldn't find a course matching <span className="text-blue-600 font-bold">"{courseSlug}"</span> 
            <br /> in the <span className="text-blue-600 font-bold">"{categorySlug}"</span> category.
          </p>
          <a href="/courses" className="mt-8 inline-flex bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black transition-all shadow-lg shadow-blue-200">
            Back to All Courses
          </a>
        </div>
      </div>
    );
  }

  // 4. Success Return
  return (
    <div className="animate-in fade-in duration-700">
      <Course course={foundCourse} />
    </div>
  );
};

export default CourseIndividual;