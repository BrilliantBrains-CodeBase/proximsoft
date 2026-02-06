import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

// CSS imports moved to global CSS file

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
  const swiperRef = useRef<SwiperType | undefined>(undefined);

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
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={20} className="text-gray-700" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition"
            aria-label="Next testimonials"
          >
            <ChevronRight size={20} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={testimonials.length > 4}
        className="testimonial-swiper"
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
            <SwiperSlide key={id}>
              <div className="h-[350px] flex flex-col p-6 md:p-7 rounded-xl border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 my-4">
                {/* Quote Icon */}
                <Quote
                  size={24}
                  className="mb-5 rotate-180 text-[#3B8EEA]"
                  fill="currentColor"
                />

                {/* Quote Text */}
                <p className="text-gray-700 leading-tight mb-6 flex-grow text-sm">
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
                    {stat && <p className="text-sm text-gray-500">{stat}</p>}
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
                    <p className="text-xs text-gray-600 leading-snug">
                      {role}
                    </p>
                  </div>
                </div>

                {/* Link */}
                
                <a href={linkUrl}
                  className="text-[#3B8EEA] font-semibold text-[15px] inline-flex items-center gap-1 hover:underline"
                >
                  {linkText}
                  <span className="text-xl">›</span>
                </a>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>

      {/* Custom CSS to hide scrollbar completely
      <style jsx global>{`
        .testimonial-swiper {
          overflow: visible !important;
        }
        
        .testimonial-swiper .swiper-wrapper {
          padding-bottom: 10px;
        }

        .testimonial-swiper .swiper-slide {
          height: auto;
        }
      `}</style> */}
    </section>
  );
};

export default TestimonialSection;