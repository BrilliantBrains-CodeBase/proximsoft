export interface CourseCategory {
  uid: string;
  categoryId: string;
  slug: string;
  title: string;

  metaTitle: string;
  metaDescription: string;
  metaUrl: string;

  coverImage: string;
  icon?: string;

  sequence: number;
  priority: "high" | "medium" | "low";

  courseCount: number;

  isActive: boolean;
  isFeatured?: boolean;
}

export const courseCategories: CourseCategory[] = [
  {
    uid: "cat-ai-001",
    categoryId: "CAT_AI",
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    metaTitle: "Artificial Intelligence Courses & Training | Proximsoft",
    metaDescription:
      "Explore Artificial Intelligence courses covering machine learning, deep learning, and real-world AI applications.",
    metaUrl: "/courses/artificial-intelligence",
    coverImage: "/images/category/coursecover.avif",
    sequence: 1,
    priority: "high",
    courseCount: 65,
    isActive: true,
    isFeatured: true
  },
  {
    uid: "cat-cloud-002",
    categoryId: "CAT_CLOUD",
    slug: "cloud-computing",
    title: "Cloud Computing",
    metaTitle:
      "Cloud Computing Courses | AWS, Azure & GCP Training | Proximsoft",
    metaDescription:
      "Learn cloud computing with hands-on AWS, Azure, and Google Cloud training programs.",
    metaUrl: "/courses/cloud-computing",
    coverImage: "/images/category/coursecover.avif",
    sequence: 2,
    priority: "high",
    courseCount: 48,
    isActive: true
  },
  {
    uid: "cat-data-003",
    categoryId: "CAT_DATA",
    slug: "data-analytics",
    title: "Data Analytics",
    metaTitle: "Data Analytics Courses & Certification | Proximsoft",
    metaDescription:
      "Build a career in data analytics by mastering SQL, Python, Power BI, and Tableau.",
    metaUrl: "/courses/data-analytics",
    coverImage: "/images/category/coursecover.avif",
    sequence: 3,
    priority: "high",
    courseCount: 52,
    isActive: true
  },
  {
    uid: "cat-mgmt-004",
    categoryId: "CAT_MGMT",
    slug: "management",
    title: "Management",
    metaTitle: "Management & Leadership Courses | Proximsoft",
    metaDescription:
      "Advance your leadership skills with management, strategy, and business courses.",
    metaUrl: "/courses/management",
    coverImage: "/images/category/coursecover.avif",
    sequence: 4,
    priority: "medium",
    courseCount: 80,
    isActive: true
  },
  {
    uid: "cat-dev-007",
    categoryId: "CAT_DEV",
    slug: "software-development",
    title: "Software Development",
    metaTitle:
      "Software Development Courses | Full Stack & Backend | Proximsoft",
    metaDescription:
      "Learn modern software development including frontend, backend, and full-stack technologies.",
    metaUrl: "/courses/software-development",
    coverImage: "/images/category/coursecover.avif",
    sequence: 5,
    priority: "high",
    courseCount: 120,
    isActive: true
  },
  {
    uid: "cat-test-008",
    categoryId: "CAT_TEST",
    slug: "software-testing",
    title: "Software Testing",
    metaTitle:
      "Software Testing Courses | Manual & Automation QA | Proximsoft",
    metaDescription:
      "Start your QA career with manual and automation software testing courses.",
    metaUrl: "/courses/software-testing",
    coverImage: "/images/category/coursecover.avif",
    sequence: 6,
    priority: "medium",
    courseCount: 40,
    isActive: true
  }
];
