import { motion } from "framer-motion";

const WhoWeAre = () => {
  return (
    <section className="bg-[#f8fafc] py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div
          className="
            rounded-2xl bg-white p-6 shadow-sm
            md:p-10
          "
        >
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {/* WHO WE ARE */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span
                className="
                  inline-block w-fit
                  rounded-full border border-gray-300
                  px-4 py-1 text-xs font-medium tracking-wide text-gray-600
                "
              >
                WHO WE ARE
              </span>

              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Industry experts. Career enablers.
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                At Proximsoft, learning is guided by certified trainers with real
                industry experience across cloud computing, AI, data,
                cybersecurity, software development, ERP, and enterprise
                platforms.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Whether you’re starting out, switching careers, or advancing
                professionally, we help you turn skills into long-term career
                growth.
              </p>
            </motion.div>

            {/* MISSION */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <span
                className="
                  inline-block w-fit
                  rounded-full border border-gray-300
                  px-4 py-1 text-xs font-medium tracking-wide text-gray-600
                "
              >
                OUR MISSION
              </span>

              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Build skills that the global tech industry demands
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                To deliver high-quality, accessible, job-ready IT training that
                empowers learners and organizations to succeed in competitive
                global markets.
              </p>
            </motion.div>

            {/* VISION */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <span
                className="
                  inline-block w-fit
                  rounded-full border border-gray-300
                  px-4 py-1 text-xs font-medium tracking-wide text-gray-600
                "
              >
                OUR VISION
              </span>

              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                A trusted global partner for IT careers
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                To be recognized worldwide for excellence in IT education,
                innovation, and measurable career outcomes.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
