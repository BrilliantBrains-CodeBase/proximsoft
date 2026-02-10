import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { courses } from "../../data/courses/course";
import type { CourseData } from "../../types/course";
import { useFreeDemo } from "../../context/FreeDemoContext";

const FreeDemoModal = () => {
  // 👈 Grab global state from context instead of props
  const { isOpen, closeDemo } = useFreeDemo(); 
  
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("us");
  const navigate = useNavigate();

  // Detect Country by IP
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data?.country_code) {
          setCountry(data.country_code.toLowerCase());
        }
      })
      .catch(() => setCountry("us"));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to save to your MERN backend (Axios/Fetch)
    console.log("Form Submitted for Proximsoft");
    
    closeDemo(); // 👈 Close global modal
    navigate("/thank-you"); 
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDemo} // 👈 Click outside to close
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={closeDemo} // 👈 Close via X button
              className="absolute right-4 top-4 rounded-full p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-10">
              <div className="mb-6">
                <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-medium tracking-wide text-gray-600 uppercase">
                  Free Demo
                </span>
                <h2 className="mt-3 text-2xl font-semibold text-gray-900">
                  Book Your Free Session
                </h2>
                <p className="text-sm text-gray-500">
                  Fill out the form below and our team will get back to you shortly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Input label="First Name" name="firstName" placeholder="First name" required />
                  <Input label="Last Name" name="lastName" placeholder="Last name" required />
                </div>

                <Input label="Email Address" name="email" type="email" placeholder="email@proximsoft.com" required />

                {/* Course Selection */}
                <div>
                  <label className="mb-1 block text-sm text-gray-600 font-medium">
                    Interested Course
                  </label>
                  <select 
                    required
                    name="course"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-[#2E78CC] focus:outline-none appearance-none bg-white"
                  >
                    <option value="">Select a course</option>
                    {courses.map((item: CourseData) => (
                      <option key={item.course_details.course_id} value={item.course_details.course_title}>
                        {item.course_details.course_title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Phone Input */}
                <div>
                  <label className="mb-1 block text-sm text-gray-600 font-medium">
                    Phone Number
                  </label>
                  <PhoneInput
                    country={country}
                    value={phone}
                    onChange={setPhone}
                    enableSearch
                    inputClass="!w-full !rounded-xl !border-gray-300 !py-6 !pl-14 !text-sm"
                    buttonClass="!rounded-l-xl !border-gray-300"
                    containerClass="!w-full"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full rounded-full bg-[#2E78CC] py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#2563b5] active:scale-[0.98]"
                >
                  Confirm Free Demo
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

/* --- Local Helper Component --- */
const Input = ({ label, placeholder, type = "text", required = false, name }: any) => (
  <div>
    <label className="mb-1 block text-sm font-medium text-gray-600">{label}</label>
    <input
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-[#2E78CC] focus:outline-none transition"
    />
  </div>
);

export default FreeDemoModal;