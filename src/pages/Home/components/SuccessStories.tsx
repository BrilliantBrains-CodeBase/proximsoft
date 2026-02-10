import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const SuccessStories = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const learners = [
    { name: "Yesha Khan", role: "UI/UX Designer", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" },
    { name: "Ethan Samuel", role: "Product Designer", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" },
    { name: "William Henry", role: "Web Developer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" },
    { name: "Robert Fox", role: "Frontend Developer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" },
    { name: "Sarah Jenkins", role: "Data Scientist", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" },
    { name: "Michael Chen", role: "AI Engineer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" },
    { name: "Amara Okafor", role: "Cloud Architect", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      {/* FIX: Added 'isolate' to prevent sub-pixel bleeding 
         from the cards into the white background.
      */}
      <div className="w-full mx-auto px-4 md:px-1 isolate">
        
        {/* Section Header */}
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Stories from Our Successful Learners</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base">
            See how everyday learners became professionals with guidance, effort, and expert-led learning.
          </p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={15}
          slidesPerView={1.4}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 4.5 },
            1280: { slidesPerView: 5.5 },
          }}
          className="pb-14"
        >
          {learners.map((learner, index) => (
            <SwiperSlide key={index} className='pt-10'>
              <motion.div 
                whileHover={{ y: -8 }}
                onClick={() => setSelectedVideo(learner.videoUrl)}
                /* FIX: Added 'transform: translateZ(0)' and 'backface-visibility'
                   This forces GPU rendering to keep the rounded corners smooth
                   and prevents the "dashed line" glitch during movement.
                */
                style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
                className="relative aspect-[3/4.2] rounded-[1.5rem] overflow-hidden cursor-pointer group shadow-lg border border-slate-100 bg-[#1a1d24]"
              >
                <img 
                  src={learner.image} 
                  alt={learner.name}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                  style={{ transform: 'translateZ(0)' }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
                
                <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
                  <div className="text-white">
                    <h3 className="text-base font-bold leading-tight">{learner.name}</h3>
                    <p className="text-[11px] text-white/70 font-medium uppercase tracking-wider">{learner.role}</p>
                  </div>
                  
                  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Play fill="currentColor" size={14} className="ml-0.5" />
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              style={{ transform: 'translateZ(0)' }}
            >
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all"
              >
                <X size={20} />
              </button>

              <iframe
                src={selectedVideo}
                className="w-full h-full"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SuccessStories;