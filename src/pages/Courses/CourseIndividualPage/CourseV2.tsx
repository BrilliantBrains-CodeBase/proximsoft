import type { CourseData } from "../../../types/course";
import LeadForm from "./components/LeadForm";
import CourseContentNavigation from "./componentsV2/CourseContentNavigation";
import CourseIndividualHero from "./componentsV2/CourseIndividualHero";
import CourseMain from "./componentsV2/CourseMain";
import CourseSidebar from "./componentsV2/CourseSidebar";

interface CourseProps {
  course: CourseData;
}

const CourseV2: React.FC<CourseProps> = ({ course }) => {
  return (
    <div className="mt-20 sm:mt-24 lg:mt-28 w-full mx-auto">
      <CourseIndividualHero courseData={course} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Sidebar first on mobile (above content), side-by-side on desktop */}
        <div className="flex flex-col-reverse lg:flex-row gap-6 lg:gap-8 lg:items-start">
          
          {/* Main content — full width on mobile, flex-1 on desktop */}
          <div className="w-full lg:flex-1 min-w-0 gap-4">
            <CourseMain courseData={course} />
            <CourseContentNavigation courseData={course} />
          </div>

          {/* Sidebar — full width on mobile, fixed width on desktop, sticky on desktop */}
          <div className="w-full lg:w-80 xl:w-96 lg:flex-shrink-0 lg:sticky lg:top-24">
            <CourseSidebar courseData={course} />
          </div>

        </div>
       
            <LeadForm />
        
      </div>
    </div>
  );
};

export default CourseV2;