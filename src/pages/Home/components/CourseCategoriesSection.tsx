import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { courseCategories } from "../../../data/categories/courseCategories";
import { Link, useNavigate } from "react-router-dom";

const CourseCategoriesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Explore Our Top Course Categories
        </h2>
        <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
          Discover a wide range of learning paths — from technology to
          leadership and business growth.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courseCategories
          .filter(cat => cat.isActive)
          .sort((a, b) => a.sequence - b.sequence)
          .map(category => (
            <motion.div
              key={category.uid}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer"
              onClick={() => navigate(category.metaUrl)}
            >
              {/* Image */}
              <div className="relative h-56 rounded-2xl overflow-hidden">
                <img
                  src={category.coverImage}
                  alt={category.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Hover icon */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
                    <ArrowUpRight className="text-black" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {category.courseCount} Courses
                </p>
              </div>
            </motion.div>
          ))}
      </div>
      <div className="flex justify-center w-full mt-12">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            <Link
            to="/courses"
            className="
                px-8 py-3 rounded-full
                bg-[#3B8EEA] text-white
                text-sm font-semibold
                shadow-lg
                hover:bg-[#2f7fd6]
                transition-all duration-300
            "
            >
            View All
            </Link>
        </motion.div>
        </div>

    </section>
  );
};

export default CourseCategoriesSection;
