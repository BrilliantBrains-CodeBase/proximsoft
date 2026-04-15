import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactUsHero from "./ContactUsHero";
import { useNavigate } from "react-router-dom";

// 🔧 Replace this with your deployed Google Apps Script URL
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxQVP709ohD-wgfaGpx5J-0FcO-Y9I76AwyV7Y_IxV-Iw3PlbnjiSrZ8xK5KfqG1zftdg/exec";

const ContactUs = () => {
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("us");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate=useNavigate();

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: phone,
      country: country.toUpperCase(),
      message: formData.message,
    };

    try {
      const response = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain" }, // required for Apps Script no-cors workaround
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.status === "success") {
        setStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
        setPhone("");
        navigate('/thank-you');
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <section className="bg-[#f8fafc] py-8 mt-12">
      <div>
        <ContactUsHero />
      </div>
      <div className="mx-auto max-w-7xl px-4">
        {/* MAP + FORM */}
        <div className="mt-10 grid grid-cols-1 gap-8 rounded-2xl p-6 md:grid-cols-2 md:p-10">
          {/* INFO CARDS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-xl grid grid-cols-1 gap-4"
          >
            <InfoCard
              icon={<Mail size={24} />}
              label="Email Address"
              value="careers@proximsoft.com"
            />
            <InfoCard
              icon={<Phone size={24} />}
              label="Phone Number"
              value="+1 (908) 312 4519"
            />
            <InfoCard
              icon={<MapPin size={24} />}
              label="Our Office"
              value="3600 NJ-66 #150, Tinton Falls, NJ"
            />
          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5 bg-white p-4 shadow-lg rounded-2xl"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Input
                label="First Name"
                name="firstName"
                placeholder="Your first name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <Input
                label="Last Name"
                name="lastName"
                placeholder="Your last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <Input
              label="Email address"
              name="email"
              placeholder="Your email address"
              value={formData.email}
              onChange={handleChange}
              required
            />

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
                name="message"
                rows={5}
                placeholder="Write something..."
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-[#2E78CC] focus:outline-none"
              />
            </div>

            {/* Status Messages */}
            {status === "success" && (
              <p className="text-sm text-green-600 font-medium">
                ✅ Your message was sent successfully! We'll be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-500 font-medium">
                ❌ {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-full bg-[#2E78CC] py-3 text-sm font-semibold text-white transition hover:bg-[#2563b5] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending..." : "Submit"}
            </button>
          </motion.form>
        </div>

        {/* MAP */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-xl my-10"
        >
          <iframe
            title="Proximsoft Location"
            src="https://www.google.com/maps?q=3600%20NJ-66%20%23150%2C%20Tinton%20Falls%2C%20NJ%2007753&output=embed"
            className="h-[420px] w-full border-0"
            loading="lazy"
          />
        </motion.div>
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
  <div className="flex items-center gap-4 rounded-xl bg-gray-100 my-2 p-4 shadow-sm min-h-[150px]">
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2E78CC] text-white">
      {icon}
    </div>
    <div>
      <p className="text-lg font-semibold text-gray-500">{label}</p>
      <p className="text-md font-medium text-gray-900">{value}</p>
    </div>
  </div>
);

const Input = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) => (
  <div>
    <label className="mb-1 block text-sm text-gray-600">{label}</label>
    <input
      type={name === "email" ? "email" : "text"}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-[#2E78CC] focus:outline-none"
    />
  </div>
);