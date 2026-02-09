import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Search, Star, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { courses } from '../../../data/courses/course';

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.trim().length > 1) {
      const filtered = courses.filter(course => 
        course.course_details.course_title.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
      setShowDropdown(true);
    } else {
      setResults([]);
      setShowDropdown(false);
    }
  };

  return (
    <section className="relative w-full h-[100vh]  overflow-hidden bg-[#2E78CC] flex flex-col pt-16 text-white">
      
   {/* 1. Background Circles - Optimized to prevent aliasing artifacts */}
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-center pointer-events-none translate-y-[70%] z-0">
        {/* Adding 'will-change-transform' and 'backface-visibility' helps browsers render circles cleaner */}
        <div className="absolute w-[1000px] h-[1000px] rounded-full bg-white/5 blur-3xl will-change-transform" />
        <div className="absolute w-[800px] h-[800px] rounded-full bg-white/5 border border-white/10 will-change-transform" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-white/10 will-change-transform" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-white/20 will-change-transform" />
      </div>

      {/* 2. Top Content: Heading & Search */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full flex items-center gap-2 mb-4"
        >
          <span className="text-xs font-bold tracking-wide uppercase">🎓 Learn from industry experts</span>
        </motion.div>

        <h1 className="text-4xl md:text-5xl lg:text-5xl font-black tracking-tight leading-[1.1] mb-4">
          Learn Online. Build Skills.<br />
          <span className="text-white/90 text-3xl md:text-5xl"> Grow Your Career.</span>
        </h1>

        <p className="max-w-lg text-sm md:text-base text-white/80 mb-6 leading-relaxed">
          A modern online learning platform offering affordable online courses, practical training programs, and career focused certifications.

        </p>

        {/* Search Input */}
        <div className="relative w-full max-w-md mb-4" ref={dropdownRef}>
          <div className="relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text"
              placeholder="Search your Course..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full bg-white rounded-2xl py-3 pl-14 pr-6 text-slate-900 font-bold shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-400/20 transition-all text-base"
            />
          </div>

          <AnimatePresence>
            {showDropdown && results.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl overflow-hidden z-50 p-1.5 border border-slate-100"
              >
                {results.map((course) => (
                  <div 
                    key={course.course_details.course_id}
                    onClick={() => navigate(`${course.course_details.course_category.category_url}/${course.course_details.course_slug}`)}
                    className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-xl cursor-pointer transition-colors group"
                  >
                    <div className="w-12 h-8 rounded-lg overflow-hidden shrink-0 border border-slate-100">
                      <img src={course.course_details.course_thumbnail} className="w-full h-full object-cover" alt="" />
                    </div>
                    <div className="flex-grow text-left">
                      <h4 className="text-slate-900 font-black text-xs leading-tight">{course.course_details.course_title}</h4>
                      <p className="text-blue-600 text-[10px] font-bold uppercase mt-0.5">{course.course_details.difficulty_level}</p>
                    </div>
                    <ArrowRight size={14} className="text-slate-300 group-hover:text-blue-600 transition-colors" />
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* 3. Bottom Content: Anchored Image and Metrics */}
      <div className="mt-auto relative z-10 w-full max-w-7xl mx-auto px-4 flex items-end justify-center lg:justify-between  md:h-[350px] 2xl:h-[450px]">
        
        {/* Rating Card - Left */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-5 rounded-[2rem] shadow-2xl text-slate-900 text-left w-52 hidden lg:block mb-16"
        >
          <h3 className="text-3xl font-black mb-1">4.8</h3>
          <div className="flex gap-0.5 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-[10px] font-bold text-slate-400 leading-tight uppercase tracking-tighter">
            Trusted by learners worldwide for quality online education, flexible learning, and real career outcomes.
          </p>
        </motion.div>

        {/* Student Image - Center Bottom */}
        <div className="relative">
          <motion.img 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src="/images/home/girl-hero.png" 
            alt="Student" 
            className="w-[300px] md:w-[350px] lg:w-[400px] 2xl:w-[500px] h-auto object-bottom relative z-10 block"
          />
        </div>

        {/* Learners Card - Right */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-5 rounded-[2rem] shadow-2xl text-slate-900 text-left w-52 hidden lg:block mb-16"
        >
          <div className="flex -space-x-2 mb-3">
            {[1,2,3,4].map(i => (
              <div key={i} className="w-9 h-9 rounded-full border-2 border-white overflow-hidden bg-slate-100">
                <img src={`/images/home/avatar-${i}.png`} alt="" />
              </div>
            ))}
          </div>
          <h3 className="text-3xl font-black mb-0.5">60k+</h3>
          <p className="text-[10px] font-bold text-slate-400 leading-tight uppercase tracking-tighter">
            Learners growing with top-tier mentors and certifications
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;