import { motion } from "framer-motion";
import { useFreeDemo } from "../../../context/FreeDemoContext";

const StatsCTASection = () => {

  const { openDemo } = useFreeDemo();

  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative flex flex-col items-center justify-between gap-12 md:flex-row">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <p className="text-2xl font-bold text-gray-900 leading-relaxed">
              <span className="font-bold">77%</span> of learners report career
              benefits, like landing a new job, earning a promotion, gaining
              applicable skills, and more.
            </p>

            <button 
              onClick={openDemo}
              className="mt-6 rounded-md border border-blue-500 px-6 py-3 text-sm font-medium text-blue-500 hover:bg-blue-50 transition">
              Start Your Free Demo Class
            </button>
          </motion.div>

          {/* Right Image Stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-[260px] md:w-[300px]"
          >
            {/* Blue Shape Back */}
            <div className="absolute -right-6 -bottom-6 h-full w-full rounded-[40px] bg-blue-500 rotate-6" />

            {/* Blue Outline */}
            <div className="absolute -right-3 -bottom-3 h-full w-full rounded-[40px] border-2 border-blue-300 rotate-3" />

            {/* Image */}
            <div className="relative overflow-hidden rounded-[40px] bg-white shadow-xl">
              <img
                src="/images/home/studentcta.jpg"
                alt="Student using phone"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsCTASection;
