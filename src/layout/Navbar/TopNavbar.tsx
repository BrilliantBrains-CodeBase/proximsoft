import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const TopNavbar = () => {
  return (
    <div className="w-full bg-[#1d2f58] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        
        {/* LEFT - Address */}
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-gray-300" />
          <span className="text-gray-300">
            3600 NJ-66 #150, Tinton Falls, NJ
          </span>
        </div>

        {/* CENTER - Email */}
        <div className="hidden md:flex items-center gap-2">
          <Mail size={16} className="text-gray-300" />
          <a
            href="mailto:careers@proximsoft.com"
            className="text-gray-300 hover:text-white transition"
          >
            careers@proximsoft.com
          </a>
        </div>

        {/* RIGHT - Phone + Social */}
        <div className="flex items-center gap-4">
          
          {/* Phone */}
          <div className="hidden md:flex items-center gap-2">
            <Phone size={16} className="text-gray-300" />
            <span className="text-gray-300">
              +1 (908) 312 4519
            </span>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-[1px] h-4 bg-gray-500" />

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/proximsoft"
              target="_blank"
              className="text-gray-300 hover:text-white transition"
            >
              <FaFacebookF size={14} />
            </a>

            <a
              href="https://www.linkedin.com/company/proximsoft/"
              target="_blank"
              className="text-gray-300 hover:text-white transition"
            >
              <FaLinkedinIn size={14} />
            </a>

            <a
              href="https://www.instagram.com/proximsoft/"
              target="_blank"
              className="text-gray-300 hover:text-white transition"
            >
              <FaInstagram size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;