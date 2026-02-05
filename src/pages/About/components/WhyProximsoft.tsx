import { motion } from "framer-motion";

const WhyProximsoft = () => {
  return (
    <section className="bg-white py-8">
      <div className="mx-auto max-w-7xl px-4">
        <div
          className="
            grid grid-cols-1 gap-10
            rounded-2xl 
            md:grid-cols-2 md:p-10 py-4
          "
        >
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Pill */}
            <span
              className="
                inline-block w-fit
                rounded-full border border-gray-300
                px-4 py-1 text-xs font-medium tracking-wide text-gray-600
              "
            >
              WHAT WE DO BEST
            </span>

            {/* Title */}
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              Career-focused IT training,<br /> done right
            </h2>

            {/* Image */}
            <div className="overflow-hidden rounded-xl mb-4">
              <img
                src="/images/aboutus/whyproximsoft.avif"
                alt="Why Proximsoft"
                className="
                  h-[360px] w-[350px] object-cover
                  transition-transform duration-500
                  hover:scale-105 shadow-md rounded-3xl
                "
              />
            </div>
          </motion.div>

          {/* RIGHT SIDE – POINTS */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="flex items-center"
          >
            <ul className="space-y-4 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#2E78CC]" />
                  Online live interactive IT training for individuals and corporate teams
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#2E78CC]" />
                  Job-oriented programs with real-world projects and placement support
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#2E78CC]" />
                  Certification training for AWS, Microsoft, Cisco, SAP, Salesforce,
                  CompTIA, and more
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#2E78CC]" />
                  Career consulting, resume building, and interview preparation
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#2E78CC]" />
                  Enterprise IT training and workforce upskilling
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#2E78CC]" />
                  Global access for learners in the USA, Canada, Germany, UAE, and the UK
                </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyProximsoft;
