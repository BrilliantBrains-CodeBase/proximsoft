import { motion, type Variants } from "framer-motion";
import { Users, Globe, Clock } from "lucide-react";

const WhyTrustUsSection = () => {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="w-full bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
            Why Thousands of Learners Trust Us
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A trusted online learning platform where learners gain real world skills through expert guidance, 
            <br className="hidden md:block" />
           flexible learning, and career focused online training programs.
          </p>
        </motion.div>

        {/* Main Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row gap-4 md:gap-6"
        >
          {/* Column 1 */}
          <div className="flex flex-col gap-4 md:gap-6 lg:flex-1">
            <motion.div
              variants={itemVariants}
              className="rounded-3xl overflow-hidden w-full aspect-4/3"
            >
              <img
                src="/images/home/trustcard11.png"
                alt="Expert trainer in online session"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-blue-100/80 to-blue-200/50 rounded-3xl p-6 md:p-8 flex flex-col gap-4"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 shadow-lg">
                <Users className="h-7 w-7 text-white" strokeWidth={2} />
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  Expert Trainers
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Learn from experienced industry professionals who bring practical insights, real projects, and up to date knowledge into every course.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Column 2 */}
          <motion.div
            variants={itemVariants}
            className="lg:flex-1 rounded-3xl overflow-hidden relative min-h-[500px] lg:min-h-full"
          >
            <img
              src="/images/home/trustcard33.png"
              alt="Global learning community background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/50 to-gray-900/20" />

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 shadow-lg mb-4">
                <Globe className="h-7 w-7 text-white" strokeWidth={2} />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                Global Community
              </h3>
              <p className="text-sm md:text-base text-white/90 leading-relaxed">
                Join a worldwide network of learners to collaborate, exchange ideas, and grow together through shared goals and peer driven learning.
              </p>
            </div>
          </motion.div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4 md:gap-6 lg:flex-1">
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-blue-100/80 to-blue-200/50 rounded-3xl p-6 md:p-8 flex flex-col gap-4"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 shadow-lg">
                <Clock className="h-7 w-7 text-white" strokeWidth={2} />
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  Flexible Learning Experience
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Study online at your own pace, learn from home, and access course content anytime with full control over your learning journey.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-3xl overflow-hidden w-full aspect-[4/3]"
            >
              <img
                src="/images/home/trustcard22.png"
                alt="Student learning flexibly with headphones"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyTrustUsSection;
