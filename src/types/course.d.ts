export interface CourseCategory {
  category_id: string;
  category_title: string;
  category_url: string;
}

export interface CourseDetails {
  course_id: string;
  course_uid: string;
  course_title: string;
  course_subtitle: string;
  course_slug: string;
  course_thumbnail: string;
  course_short_description: string;
  course_long_description: string;
  about_course: string[];
  course_status: "draft" | "published" | "archived" | "active" | "inactive";
  difficulty_level: string;
  batch_type: string;
  course_priority: "low" | "medium" | "high";
  course_sequence: number;
  course_category: CourseCategory;
}

export interface CourseStructure {
  course_timeline: string;
  total_duration: string;
  weekly_commitment_duration: string;
  modules_included: boolean;
  course_features: string[];
}

export interface PricingAndEnrollment {
  currency: string;
  base_price: number;
  discounted_price: number;
  discount_percentage: number;
  discount_code: string;
  enrollment_link: string;
  is_free: boolean;
}

export interface CertificationDetails {
  is_certified: boolean;
  certificate_name: string;
  is_shareable: boolean;
  certificate_image_url: string;
}

export interface SkillsGained {
  core_skills: string[];
  supporting_skills: string[];
}

export interface ToolsAndTechnologies {
  primary: string[];
  secondary: string[];
}

export interface LearningContent {
  prerequisites: string[];
  key_learnings: string[];
  ideal_candidates: string[];
  skills_gained: SkillsGained;
  tools_and_technologies: ToolsAndTechnologies;
}

export interface OutcomeMetrics {
  students_placed: number;
  students_internships: number;
  student_success_rate: string;
  student_completion_rate: string;
  placement_rate: string;
}

export interface CareerOutcomes {
  career_roles: string[];
  outcome_metrics: OutcomeMetrics;
  top_hiring_domains?: string[];
}

export interface ProjectDetails {
  has_projects: boolean;
  total_projects: number;
  has_capstone_project: boolean;
  total_capstone_projects: number;
  project_description: string;
}

export interface Module {
  module_number: number;
  module_name: string;
  module_duration: string;
  topics: string[];
}

export interface Curriculum {
  summary: {
    total_modules: number;
    total_lectures: number;
    difficulty_level?: string;
  };
  modules: Module[];
}

export interface FAQ {
  faq_id: number;
  question: string;
  answer: string;
}

export interface CourseMetrics {
  avg_rating: number;
  total_reviews: number;
  total_students_enrolled: number;
}

export interface CourseData {
  course_details: CourseDetails;
  course_structure: CourseStructure;
  pricing_and_enrollment: PricingAndEnrollment;
  certification_details: CertificationDetails;
  learning_content: LearningContent;
  career_outcomes: CareerOutcomes;
  project_details: ProjectDetails;
  curriculum: Curriculum;
  course_metrics: {
    avg_rating: number;
    total_reviews: number;
    total_students_enrolled: number;
  };
  faqs: FAQ[];
  target_audience: string[];
  metadata: {
    course_date: string;
    latest_update_date: string;
  };
  seo_metadata: {
    meta_title: string;
    meta_description: string;
    meta_url: string;
  };
}