import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <div className=" flex items-center justify-center mb-4 mt-12">
            <motion.div
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <div className="p-5 rounded-3xl bg-blue-50 text-[#3B8EEA] shadow-xl shadow-blue-100">
                <Home size={48} />
              </div>
            </motion.div>
          </div>
      <div className="max-w-md w-full text-center">
        
        {/* Animated Illustration/Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative mb-8"
        >
          <h1 className="text-9xl font-black text-gray-200 select-none">
            404
          </h1>
          
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Lost in Space?
          </h2>
          <p className="text-gray-500 mb-10 leading-relaxed">
            The page you are looking for isn't available. Let's get you back 
            on track to your learning journey.
          </p>
        </motion.div>
        

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#3B8EEA] text-white text-sm font-semibold shadow-lg hover:bg-[#2f7fd6] transition-all flex items-center justify-center gap-2"
          >
            <Home size={18} />
            Back to Home
          </motion.button>

          <button
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto px-8 py-3 rounded-full border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;