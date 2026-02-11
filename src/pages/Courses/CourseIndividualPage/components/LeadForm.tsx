import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { motion } from "framer-motion";
import { Users, Briefcase, Star, Globe } from "lucide-react";
import { courses } from "../../../../data/courses/course";
import { useNavigate } from "react-router-dom";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxqjtqzXWu_-sFS2KdRGYx2rHAnhPukfyyFPJYyOGsT2OGDCyxRERQAoUW7R2bt1LJq/exec";

const LeadForm = () => {
  const currentUrl =
    typeof window !== "undefined" ? window.location.href : "";

  const [country, setCountry] = useState("us");
  const [phone, setPhone] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const navigate =useNavigate();

  // 🌍 Detect country by IP
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

  // 🎯 Detect Course from URL
  const detectedCourse = courses.find((course) =>
    currentUrl.includes(course.course_details.course_slug)
  );

  const courseName =
    detectedCourse?.course_details.course_title || "Unknown Course";

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) return "Full name is required";
    if (!formData.email.trim()) return "Email is required";
    if (!phone) return "Phone number is required";

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) return "Invalid email format";

    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setLoading(true);

    try {
      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        phone,
        country,
        message: formData.message || "",
        course: courseName,
        url: currentUrl,
        timestamp: new Date().toISOString(),
      };

      await fetch(GOOGLE_SCRIPT_URL, {
                    method: "POST",
                    mode: "no-cors",
                    body: JSON.stringify(payload),
                  });

      setSuccess(true);
      setFormData({ fullName: "", email: "", message: "" });
      setPhone("");
      navigate('/enrollement-success');
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full max-w-6xl mx-auto bg-gradient-to-r from-[#60a5fa] to-[#3b82f6] rounded-[2.5rem] p-8 md:p-14 shadow-2xl my-12">
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT - FORM */}
        <div>
          <h1 className="text-4xl font-extrabold text-[#0f172a] mb-4">
            Start Your Learning Journey Today
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4 max-w-md">

            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="w-full px-5 py-4 rounded-2xl bg-white"
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full px-5 py-4 rounded-2xl bg-white"
            />

            <PhoneInput
              country={country}
              value={phone}
              onChange={(value) => setPhone(value)}
              inputStyle={{
                width: "100%",
                height: "60px",
                borderRadius: "1rem",
              }}
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message (Optional)"
              className="w-full px-5 py-4 rounded-2xl bg-white"
            />

            {error && <p className="text-red-600 text-sm">{error}</p>}
            {success && (
              <p className="text-green-700 text-sm">
                Lead submitted successfully ✅
              </p>
            )}

            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-white text-blue-600 font-bold rounded-full"
            >
              {loading ? "Submitting..." : "Submit Now"}
            </motion.button>
          </form>
        </div>

        {/* RIGHT - STATIC GRID */}
        <div className="relative">
          <div className="bg-white p-8 rounded-3xl grid grid-cols-2 gap-4 shadow-xl">
            <Stat icon={<Users />} value="50K+" label="Students" />
            <Stat icon={<Star />} value="98%" label="Placement" />
            <Stat icon={<Briefcase />} value="500+" label="Hiring Partners" />
            <Stat icon={<Globe />} value="30+" label="Countries" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ icon, value, label }: any) => (
  <div className="text-center p-4 bg-slate-50 rounded-xl">
    <div className="flex justify-center mb-2 text-blue-600">{icon}</div>
    <p className="font-bold text-lg">{value}</p>
    <p className="text-xs uppercase text-gray-500">{label}</p>
  </div>
);

export default LeadForm;
