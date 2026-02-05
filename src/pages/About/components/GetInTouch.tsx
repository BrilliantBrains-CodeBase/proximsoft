import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const GetInTouch = () => {
  return (
    <section className="bg-[#f8fafc] py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div
          className="
            grid grid-cols-1 items-stretch gap-10
            rounded-2xl  p-6 
            md:grid-cols-2 md:p-10
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
            {/* TOP: Pill + Title */}
            <div>
              <span
                className="
                  inline-block w-fit
                  rounded-full border border-gray-300
                  px-4 py-1 text-xs font-medium tracking-wide text-gray-600
                "
              >
                CONNECT
              </span>

              <h2 className="mt-4 text-2xl font-semibold text-gray-900 md:text-3xl">
                Get in touch
              </h2>
            </div>

            {/* BOTTOM: Details */}
            <div className="mt-auto space-y-6">
              {/* Contact Info */}
              <div className="space-y-4 text-sm text-gray-600">
                <p>
                  <span className="block text-xs text-gray-500">Email ID</span>
                  <a
                    href="mailto:careers@proximsoft.com"
                    className="font-medium text-gray-900 hover:text-[#2E78CC]"
                  >
                    careers@proximsoft.com
                  </a>
                </p>

                <p>
                  <span className="block text-xs text-gray-500">Phone number</span>
                  <a
                    href="tel:+19083124519"
                    className="font-medium text-gray-900 hover:text-[#2E78CC]"
                  >
                    +1 (908) 312 4519
                  </a>
                </p>

                <p>
                  <span className="block text-xs text-gray-500">Address</span>
                  <span className="font-medium text-gray-900">
                    3600 NJ-66 #150, Tinton Falls, NJ 07753, United States
                  </span>
                </p>
              </div>

              {/* Socials */}
              <div>
                <p className="mb-3 text-xs text-gray-500">Follow Us</p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/proximsoft"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex h-9 w-9 items-center justify-center
                      rounded-full border text-gray-600
                      transition hover:bg-[#2E78CC] hover:text-white
                    "
                  >
                    <Facebook size={16} />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/proximsoft/"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex h-9 w-9 items-center justify-center
                      rounded-full border text-gray-600
                      transition hover:bg-[#2E78CC] hover:text-white
                    "
                  >
                    <Linkedin size={16} />
                  </a>

                  <a
                    href="https://www.instagram.com/proximsoft/"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex h-9 w-9 items-center justify-center
                      rounded-full border text-gray-600
                      transition hover:bg-[#2E78CC] hover:text-white
                    "
                  >
                    <Instagram size={16} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT MAP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="flex items-center justify-center overflow-hidden rounded-xl"
          >
            <iframe
              title="Proximsoft Location"
              src="https://www.google.com/maps?q=3600%20NJ-66%20%23150%2C%20Tinton%20Falls%2C%20NJ%2007753&output=embed"
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
