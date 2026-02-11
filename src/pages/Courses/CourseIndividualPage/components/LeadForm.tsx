import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Briefcase, Star, Globe} from "lucide-react";

const LeadForm = () => {
  const currentUrl =
    typeof window !== "undefined" ? window.location.href : "";

  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    courseUrl: currentUrl,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      ...formData,
      source_url: currentUrl,
      timestamp: new Date().toISOString(),
    };

    console.log("Sending Payload:", payload);
  };

  return (
    <section className="w-full max-w-6xl mx-auto bg-gradient-to-r from-[#60a5fa] to-[#3b82f6] rounded-[2.5rem] p-8 md:p-14 overflow-hidden shadow-2xl">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT - FORM */}
        <div className="z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] leading-tight mb-4">
            Start Your Learning <br /> Journey Today
          </h1>

          <p className="text-[#1e293b] text-lg opacity-90 mb-8 max-w-sm">
            Fill in your details and our advisors will help you choose
            the right course for your goals.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5 max-w-md">
            {/* Full Name */}
            <div>
              <label className="block text-slate-900 font-semibold mb-2 text-sm">
                Full Name
              </label>
              <input
                required
                type="text"
                name="fullName"
                placeholder="Enter your name"
                onChange={handleInputChange}
                className="w-full px-5 py-4 rounded-2xl bg-white shadow-sm outline-none focus:ring-2 focus:ring-blue-200 transition"
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-slate-900 font-semibold mb-2 text-sm">
                Mobile Number
              </label>
              <input
                required
                type="tel"
                name="mobileNumber"
                placeholder="Enter mobile number"
                onChange={handleInputChange}
                className="w-full px-5 py-4 rounded-2xl bg-white shadow-sm outline-none focus:ring-2 focus:ring-blue-200 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-slate-900 font-semibold mb-2 text-sm">
                E-mail Address
              </label>
              <input
                required
                type="email"
                name="email"
                placeholder="Enter email address"
                onChange={handleInputChange}
                className="w-full px-5 py-4 rounded-2xl bg-white shadow-sm outline-none focus:ring-2 focus:ring-blue-200 transition"
              />
            </div>

            {/* Course Ref */}
            <div>
              <label className="block text-slate-900 font-semibold mb-2 text-sm">
                Selected Course
              </label>
              <input
                type="text"
                value={
                  currentUrl
                    .split("/")
                    .pop()
                    ?.replace(/-/g, " ")
                    .toUpperCase() || "COURSE DETECTED"
                }
                disabled
                className="w-full px-5 py-4 rounded-2xl bg-gray-100 text-gray-600 font-semibold cursor-not-allowed text-sm"
              />
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              type="submit"
              className="mt-4 w-full py-4 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:shadow-xl transition"
            >
              Submit Now
            </motion.button>
          </form>
        </div>

        {/* RIGHT - IMAGE + STATIC GRID */}
        <div className="relative flex justify-center lg:justify-end items-center">
          
          {/* Image */}
          <div className="w-4/5 rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&fit=crop"
              alt="student"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute left-0 lg:-left-16 top-1/2 -translate-y-1/2 w-full max-w-[420px]"
          >
            <div className="bg-white/95 backdrop-blur-md p-6 rounded-[2.5rem] shadow-2xl grid grid-cols-2 gap-5 border border-white/40">
              
              {/* Stat 1 */}
              <div className="bg-white p-5 rounded-2xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
                <Users className="w-6 h-6 text-blue-600 mb-3" />
                <p className="text-lg font-extrabold text-slate-900">
                  50K+
                </p>
                <span className="text-xs font-semibold text-slate-600 uppercase">
                  Students Enrolled
                </span>
              </div>

              {/* Stat 2 */}
              <div className="bg-white p-5 rounded-2xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
                <Star className="w-6 h-6 text-blue-600 mb-3" />
                <p className="text-lg font-extrabold text-slate-900">
                  98.9%
                </p>
                <span className="text-xs font-semibold text-slate-600 uppercase">
                  Placement Rate
                </span>
              </div>

              {/* Stat 3 */}
              <div className="bg-white p-5 rounded-2xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
                <Briefcase className="w-6 h-6 text-blue-600 mb-3" />
                <p className="text-lg font-extrabold text-slate-900">
                  500+
                </p>
                <span className="text-xs font-semibold text-slate-600 uppercase">
                  Hiring Partners
                </span>
              </div>

              {/* Stat 4 */}
              <div className="bg-white p-5 rounded-2xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
                <Globe className="w-6 h-6 text-blue-600 mb-3" />
                <p className="text-lg font-extrabold text-slate-900">
                  30+
                </p>
                <span className="text-xs font-semibold text-slate-600 uppercase">
                  Countries Reached
                </span>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
