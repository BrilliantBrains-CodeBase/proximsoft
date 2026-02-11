import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useFreeDemo } from "../../context/FreeDemoContext";

const CTASection = () => {

  const { openDemo } = useFreeDemo();
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-blue-50/30 to-white pt-20 md:pt-12 pb-0">
      {/* Concentric Circles Background */}
      <div className="absolute inset-0 top-[100%] flex items-center justify-center pointer-events-none">
        <div className="absolute w-[1000px] h-[1000px] rounded-full bg-[#3B8EEA]/10" />
        <div className="absolute w-[800px] h-[800px] rounded-full bg-[#3B8EEA]/20" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#3B8EEA]/30" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-[#3B8EEA]/70" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-[52px] font-bold text-gray-900 tracking-tight"
        >
          Ready to Start Learning?
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-4 md:mt-5 max-w-xl text-base md:text-lg text-gray-600 leading-relaxed"
        >
          Join thousands of learners gaining real skills and accelerating
          <br className="hidden md:block" />
          their careers — one lesson at a time.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
          whileTap={{ scale: 0.98 }}
          onClick={openDemo}
          className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-blue-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/30 hover:bg-blue-600 transition-colors duration-200"
        >
          Free Demo Class
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/25">
            <ArrowRight size={16} strokeWidth={2.5} />
          </span>
        </motion.button>

        {/* Student Image */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring", bounce: 0.3 }}
          className="mt-16 md:mt-20 relative w-full flex justify-center"
        >
          <img
            src="/images/home/girl-hero.png"
            alt="Happy student with backpack and notebook"
            className="w-[350px] md:w-[450px] lg:w-[500px] h-auto object-contain object-bottom drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;