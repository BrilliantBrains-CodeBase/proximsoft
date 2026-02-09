import { motion } from 'framer-motion';
import { Briefcase, Award, UserCheck, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CareerSupportSection = () => {
  const navigate = useNavigate();

  const careerCards = [
    {
      title: "Virtual Internship Training",
      description: "Work on real projects and gain hands-on experience.",
      icon: <Briefcase className="text-pink-400" size={24} />,
      bgImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop",
      tags: "Experience • Projects"
    },
    {
      title: "Certification",
      description: "Earn industry relevant online course certifications.",
      icon: <Award className="text-blue-400" size={24} />,
      bgImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=400&auto=format&fit=crop",
      tags: "Validated • Official"
    },
    {
      title: "Job Placement Support",
      description: "Get guided support to move from learning to jobs.",
      icon: <UserCheck className="text-emerald-400" size={24} />,
      bgImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop",
      tags: "Careers • Coaching"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      {/* FIX: Added 'isolate' to prevent aliasing bleed and forced GPU rendering */}
      <div 
        className="max-w-6xl mx-auto bg-[#1a1d24] rounded-[2.5rem] p-8 md:p-14 border border-white/5 shadow-2xl isolate"
        style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
      >
        <div className="flex flex-col lg:flex-row gap-12 items-start lg:items-center">
          
          {/* Left Content Header */}
          <div className="lg:w-1/3 space-y-6">
            <h2 className="text-3xl md:text-3xl font-semibold text-white leading-tight">
              Get Career Ready <br />
              <span className="text-blue-400">Beyond Courses</span>
            </h2>
            <p className="text-slate-400 text-xs leading-relaxed">
              We go the extra mile to ensure your learning translates into professional success through practical exposure and industry networking.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="flex items-center gap-2 text-white font-bold text-sm group hover:text-blue-400 transition-colors"
            >
              Explore career support 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Cards Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-5">
            {careerCards.map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                /* FIX: Forces clean edges during the 'y' axis movement */
                style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
                className="bg-[#252932] rounded-3xl overflow-hidden border border-white/5 flex flex-col h-full group"
              >
                {/* Visual Header of the card */}
                <div className="h-32 relative overflow-hidden">
                  <img 
                    src={card.bgImage} 
                    alt={card.title}
                    className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-500"
                    style={{ transform: 'translateZ(0)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#252932] to-transparent" />
                  <div className="absolute top-4 left-4 p-2 bg-black/40 backdrop-blur-md rounded-xl border border-white/10">
                    {card.icon}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 pt-0 flex flex-col flex-grow">
                  <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-2">
                    {card.tags}
                  </p>
                  <h3 className="text-white font-black text-lg leading-snug mb-2">
                    {card.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CareerSupportSection;