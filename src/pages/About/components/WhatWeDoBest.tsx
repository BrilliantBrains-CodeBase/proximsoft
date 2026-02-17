import { motion } from "framer-motion";

const WhatWeDoBest = () => {
  return (
    <section className="bg-[#f8fafc] py-16 mt-12">
      <div className="mx-auto max-w-7xl px-4">
        <div
          className="
            grid grid-cols-1 items-stretch gap-10
            rounded-2xl  p-6 md:grid-cols-2 md:p-10 m
          "
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex h-full flex-col"
          >
            {/* TOP PILL */}
            <span
              className="
                inline-block w-fit
                rounded-full border border-gray-300
                px-4 py-1 text-xs font-medium tracking-wide text-gray-600
              "
            >
              WHY PROXIMSOFT
            </span>

            {/* BOTTOM CONTENT */}
            <div className="mt-auto">
              <h2 className="mt-4 text-2xl font-semibold text-gray-900 md:text-3xl">
                Because outcomes matter
              </h2>

              <ul className="mt-6 space-y-3 text-sm text-gray-600">
          <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#2E78CC]" />
                Global IT training provider with international reach
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#2E78CC]" />
                Certified trainers with real-world experience
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#2E78CC]" />
                Job-oriented, certification-aligned curriculum
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#2E78CC]" />
                Flexible online live learning
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#2E78CC]" />
                Proven career transformation and placement support
              </li>
              </ul>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="flex items-center justify-center overflow-hidden rounded-xl py-4"
          >
            <img
              src="/images/aboutus/Because outcomes matter.jpg"
              alt="What Proximsoft Does Best"
              className="
                h-[350px] w-[350px] object-cover 
                transition-transform duration-500
                hover:scale-105 shadow-md rounded-3xl
              "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoBest;
