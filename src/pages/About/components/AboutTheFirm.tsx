import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutTheFirm = () => {
  return (
    <section className="bg-white py-2 mt-10">
      <div className="mx-auto max-w-7xl px-4">
        <div
          className="
            grid grid-cols-1 items-start gap-10
            rounded-2xl bg-white p-6 md:grid-cols-2 md:p-10
            
          "
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-5xl font-medium text-[#2E78CC]">
              About Proximsoft
            </h3>
            <h2 className="mt-2 text-lg font-semibold text-gray-900 md:text-xl">
              Where learning turns into global careers
            </h2>

            
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="overflow-hidden rounded-xl"
          >
            

            <p className=" text-sm leading-relaxed text-gray-600">
              Proximsoft is a global IT training, consulting, certification, and
              placement assistance provider serving learners across the USA,
              Canada, Germany, UAE, and the UK.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              We help freshers, career switchers, and working professionals build
              job-ready tech skills through live, interactive, industry-aligned
              programs designed for real hiring needs.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="
                  inline-flex items-center justify-center
                  rounded-full bg-[#2E78CC]
                  px-5 py-2 text-sm font-semibold text-white
                  transition hover:bg-[#2563b5]
                "
              >
                Contact us
              </Link>

              <Link
                to="/courses"
                className="
                  inline-flex items-center justify-center
                  rounded-full border border-[#2E78CC]
                  px-5 py-2 text-sm font-semibold text-[#2E78CC]
                  transition hover:bg-[#2E78CC] hover:text-white
                "
              >
                Explore courses
              </Link>
            </div>
            
          </motion.div>
          
        </div>
        <div className="w-full mx-auto flex justify-center">
            <img
              src="/images/aboutus/Banner image.png"
              alt="About Proximsoft"
              className="
                h-[400px] w-[80%] rounded-2xl  object-cover
                transition-transform duration-500
                hover:scale-105
              "
            />
        </div>
        
      </div>
    </section>
  );
};

export default AboutTheFirm;
