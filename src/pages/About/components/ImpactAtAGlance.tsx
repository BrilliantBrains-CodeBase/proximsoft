import { motion } from "framer-motion";

const stats = [
  {
    value: "95%",
    label: "Learner satisfaction",
  },
  {
    value: "10+",
    label: "Years of industry-aligned expertise",
  },
  {
    value: "$10M+",
    label: "Career value created",
  },
  {
    value: "50M+",
    label: "Learning hours delivered",
  },
];

const ImpactAtAGlance = () => {
  return (
    <section className="bg-white py-4">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-2xl font-semibold text-gray-900 md:text-3xl"
        >
          Impact at a Glance
        </motion.h2>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-y-10 text-center md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <p
                className="
                  text-4xl font-semibold text-gray-900
                  transition-colors duration-300
                  group-hover:text-[#2E78CC]
                "
              >
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-gray-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactAtAGlance;
