import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUs = () => {
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("us");

  // 🌍 IP-based country detection (no permission popup)
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data?.country_code) {
          setCountry(data.country_code.toLowerCase());
        }
      })
      .catch(() => {
        setCountry("us"); // fallback
      });
  }, []);

  return (
    <section className="bg-[#f8fafc] py-8 mt-12">
      <div className="mx-auto max-w-7xl px-4">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-medium tracking-wide text-gray-600">
            CONTACT US
          </span>

          <h1 className="mt-4 text-3xl font-semibold text-gray-900 md:text-4xl">
            Get in touch, let us know how we can help
          </h1>
        </motion.div>

        {/* INFO CARDS */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          <InfoCard
            icon={<Mail size={18} />}
            label="Email Address"
            value="careers@proximsoft.com"
          />
          <InfoCard
            icon={<Phone size={18} />}
            label="Phone Number"
            value="+1 (908) 312 4519"
          />
          <InfoCard
            icon={<MapPin size={18} />}
            label="Our Office"
            value="3600 NJ-66 #150, Tinton Falls, NJ"
          />
        </div>

        {/* MAP + FORM */}
        <div className="mt-10 grid grid-cols-1 gap-8 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
          {/* MAP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-xl"
          >
            <iframe
              title="Proximsoft Location"
              src="https://www.google.com/maps?q=3600%20NJ-66%20%23150%2C%20Tinton%20Falls%2C%20NJ%2007753&output=embed"
              className="h-[420px] w-full border-0"
              loading="lazy"
            />
          </motion.div>

          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Input label="First Name" placeholder="Your first name" />
              <Input label="Last Name" placeholder="Your last name" />
            </div>

            <Input label="Email address" placeholder="Your email address" />

            {/* 📞 Phone Input (IP auto-detected country) */}
            <div>
              <label className="mb-1 block text-sm text-gray-600">
                Phone number
              </label>

              <PhoneInput
                country={country}
                value={phone}
                onChange={setPhone}
                enableSearch
                inputClass="!w-full !rounded-xl !border-gray-300 !py-3 !pl-14 !text-sm"
                buttonClass="!rounded-l-xl !border-gray-300"
                containerClass="!w-full"
                dropdownClass="!z-50"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-gray-600">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Write something..."
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-[#2E78CC] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#2E78CC] py-3 text-sm font-semibold text-white transition hover:bg-[#2563b5]"
            >
              Submit
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

/* ---------------- HELPERS ---------------- */

const InfoCard = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2E78CC] text-white">
      {icon}
    </div>
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-sm font-medium text-gray-900">{value}</p>
    </div>
  </div>
);

const Input = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => (
  <div>
    <label className="mb-1 block text-sm text-gray-600">{label}</label>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-[#2E78CC] focus:outline-none"
    />
  </div>
);
