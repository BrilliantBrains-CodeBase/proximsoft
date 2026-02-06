import { useRef } from "react";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

export interface TestimonialData {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  linkText: string;
  linkUrl: string;
  highlight?: string;
  logo?: string;
  stat?: string;
}

interface TestimonialSectionProps {
  testimonials: TestimonialData[];
}

const TestimonialSection = ({ testimonials }: TestimonialSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const scrollAmount = scrollRef.current.offsetWidth * 0.8;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Join others transforming their lives through learning
        </h2>

        {/* Navigation arrows - hidden on mobile */}
        <div className="hidden md:flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={20} className="text-gray-700" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition"
            aria-label="Next testimonials"
          >
            <ChevronRight size={20} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4
                   [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {testimonials.map(
          ({
            id,
            quote,
            author,
            role,
            avatar,
            linkText,
            linkUrl,
            highlight,
            logo,
            stat,
          }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="snap-start shrink-0
                         w-[80vw] sm:w-[70vw] md:w-[calc(50%-10px)] lg:w-[calc(25%-15px)]"
            >
              <div className="h-full flex flex-col p-6 md:p-7 rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300">
                {/* Quote Icon */}
                <Quote
                  size={24}
                  className="mb-5 rotate-180 text-[#3B8EEA]"
                  fill="currentColor"
                />

                {/* Quote Text */}
                <p className="text-gray-700 leading-relaxed mb-6 flex-grow text-[15px]">
                  {quote.split(highlight || "").map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && highlight && (
                        <span className="font-semibold text-gray-900">
                          {highlight}
                        </span>
                      )}
                    </span>
                  ))}
                </p>

                {/* Logo and Stat (if present) */}
                {logo && (
                  <div className="mb-5">
                    <img
                      src={logo}
                      alt="Company logo"
                      className="h-6 mb-2 object-contain"
                    />
                    {stat && (
                      <p className="text-sm text-gray-500">{stat}</p>
                    )}
                  </div>
                )}

                {/* Author Info */}
                <div className="flex items-center gap-3 mb-5">
                  <img
                    src={avatar}
                    alt={author}
                    className="w-12 h-12 rounded-full object-cover border border-gray-200"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 text-[15px]">
                      {author}
                    </p>
                    <p className="text-[13px] text-gray-600 leading-snug">
                      {role}
                    </p>
                  </div>
                </div>

                {/* Link */}
                
                <a  href={linkUrl}
                  className="text-[#3B8EEA] font-semibold text-[15px] inline-flex items-center gap-1 hover:underline"
                >
                  {linkText}
                  <span className="text-xl">›</span>
                </a>
              </div>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
};

export default TestimonialSection;