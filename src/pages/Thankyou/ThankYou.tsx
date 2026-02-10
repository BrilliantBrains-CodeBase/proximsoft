import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CheckCircle, ArrowLeft, BookOpen } from "lucide-react";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        {/* Success Icon Animation */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            delay: 0.1 
          }}
          className="flex justify-center mb-8"
        >
          <div className="bg-green-100 p-6 rounded-full">
            <CheckCircle size={80} className="text-green-600" />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Thank You!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Your request for a free demo has been received. One of our experts 
            from <span className="text-[#2E78CC] font-semibold">Proximsoft</span> will 
            reach out to you within 24 hours to schedule your session.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all active:scale-95"
          >
            <ArrowLeft size={18} />
            Back to Home
          </button>
          
          <button
            onClick={() => navigate("/courses")}
            className="flex items-center gap-2 px-8 py-3 border-2 border-[#2E78CC] text-[#2E78CC] rounded-full font-medium hover:bg-[#2E78CC] hover:text-white transition-all active:scale-95"
          >
            <BookOpen size={18} />
            Explore Courses
          </button>
        </motion.div>

        {/* Trust Badge */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-sm text-gray-400"
        >
          Need urgent help? Email us at careers@proximsoft.com
        </motion.p>
      </div>
    </div>
  );
};

export default ThankYou;