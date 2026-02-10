import type { CourseData } from "../../../types/course"; // Adjust path as needed
import Breadcrumbs from "./components/Breadcrumbs";
import CourseHero from "./components/CourseHero";
import CourseContentNavigation from "./components/CourseContentNavigation";
// import CourseDurationAndStructure from "./components/CourseDurationAndStructure";
import CourseCurriculum from "./components/CourseCurriculum";
import ToolsTechnologies from "./components/ToolsTechnologies";
import CourseSkills from "./components/CourseSkills";
import CareerRelevance from "./components/CareerRelevance";
import FaqSection from "./components/FaqSection";
import TestimonialSection from "../../../layout/Testimonials/TestimonialSection";
import { testimonials } from "../../../data/testimonials/testimonials";
import ProjectsPracticalLearning from "./components/ProjectsPracticalLearning";
import Educationsection from "./components/Educationsection";


interface CourseProps {
  course: CourseData;
}

const Course: React.FC<CourseProps> = ({ course }) => {
  return (
    <div className="mt-14 max-w-7xl mx-auto px-6">
      <Breadcrumbs
        link1={{
          name: "All Courses",
          url: "/courses",
        }}
        link2={{
          name: course.course_details.course_category.category_title,
          url: course.course_details.course_category.category_url,
        }}
        link3={{
          name: course.course_details.course_title,
          url: course.seo_metadata.meta_url, 
        }}
      />

   
      <CourseHero
        details={course.course_details}
        metrics={course.course_metrics}
        structure={course.course_structure}
        pricing={course.pricing_and_enrollment}
      />

      <CourseContentNavigation
        learning={course.learning_content}
        details={course.course_details}
        targetAudience={course.target_audience}
      />

      {/* <CourseDurationAndStructure course={course} /> */}

      <CourseCurriculum curriculum={course.curriculum} />

      <ToolsTechnologies
        tools={course.learning_content.tools_and_technologies}
      />

      <ProjectsPracticalLearning course={course} />

      <CourseSkills skills={course.learning_content.skills_gained} />

      <CareerRelevance outcomes={course.career_outcomes} />

      <Educationsection />

      <TestimonialSection testimonials={testimonials}/>

      <FaqSection faqs={course.faqs} />

</div>

  );
};

export default Course;
