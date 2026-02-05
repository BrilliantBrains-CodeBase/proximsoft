import { courseCategories } from "../categories/courseCategories";

export interface CourseNavItem {
  label: string;
  to: string;
  order: number;
}

export const courseNavItems: CourseNavItem[] = courseCategories
  .filter(category => category.isActive)
  .sort((a, b) => a.sequence - b.sequence)
  .map(category => ({
    label: category.title,
    to: category.metaUrl,
    order: category.sequence
  }));
