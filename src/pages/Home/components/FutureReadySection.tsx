import { Sparkles, GraduationCap, Laptop, Rocket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FutureReadySection = () => {
  const navigate = useNavigate();

  const features = [
    { icon: <Sparkles size={18} />, text: "Learn AI and emerging skills" },
    { icon: <GraduationCap size={18} />, text: "Prepare for certifications" },
    { icon: <Laptop size={18} />, text: "Practice with guided support" },
    { icon: <Rocket size={18} />, text: "Advance your career" },
  ];

  return (
    <section className="py-4 px-4 bg-white">
      {/* FIX: Added 'isolate' to create a new stacking context 
        and 'overflow-hidden' with a slight tweak to how borders render.
      */}
      <div 
        className="max-w-6xl mx-auto bg-[#1a1d24] rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl isolate"
        style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Content */}
          <div className="text-white space-y-8 p-8 md:p-16 lg:pr-4">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-3xl font-semibold leading-[1.1] tracking-tight">
                Build Future Ready Skills <br />
                <span className="text-blue-400">for the AI Driven World</span>
              </h2>
              <p className="text-slate-400 text-xs leading-relaxed max-w-lg">
                Learn in-demand technologies and career skills through structured online courses 
                designed to help you stay relevant, adaptable, and confident in a rapidly changing job market.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="p-2 bg-white/5 rounded-lg text-blue-400 group-hover:bg-blue-400 group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <span className="text-sm font-medium text-slate-100">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col gap-3">
              <button 
                onClick={() => navigate('/courses')}
                className="bg-white text-slate-900 px-8 py-2 rounded-2xl font-semibold text-lg hover:bg-blue-50 transition-all w-fit shadow-lg shadow-white/5 active:scale-95">
                Learn More
              </button>
              <p className="text-xs text-slate-500 font-light uppercase tracking-wider ml-1 mt-2">
                Plans starting at <span className="text-slate-300">affordable monthly pricing </span>
              </p>
            </div>
          </div>

          {/* Right Imagery */}
          <div className="hidden md:block relative h-full min-h-[400px] lg:min-h-[550px] w-full px-8">
            <img 
              src="/images/home/image2.webp" 
              alt="Build Future Ready Skills" 
              className="w-full h-full object-contain lg:object-right"
              // FIX: Ensure image doesn't create sub-pixel gaps
              style={{ transform: 'translateZ(0)' }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default FutureReadySection;