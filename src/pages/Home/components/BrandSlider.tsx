const logos = [
  "/images/brands/Proximsoft/accenture@3x.png",
  "/images/brands/Proximsoft/amazon@3x.png",
  "public/images/brands/Proximsoft/AT &T@3x.png",
  "/images/brands/Proximsoft/CAPITAL ONE@3x.png",
  "/images/brands/Proximsoft/COMCAST@3x.png",
  "/images/brands/Proximsoft/cvs health@3x.png",
  "/images/brands/Proximsoft/dell logo@3x.png",
  "/images/brands/Proximsoft/FANIE MAE@3x.png",
  "/images/brands/Proximsoft/jP MORGAN@3x.png",
  "/images/brands/Proximsoft/KPMG@3x.png",
  "/images/brands/Proximsoft/Microsoft@3x.png",
  "/images/brands/Proximsoft/T MOBILE@3x.png",
  "/images/brands/Proximsoft/UNITED HEALTHCARE@3x.png",
  "public/images/brands/Proximsoft/WELLS FARGO@3x.png"
];

const star = "/images/home/brand_star.svg";

const BrandSlider = () => {
  const sliderItems = logos.flatMap((logo) => [logo, star]);

  return (
    <section className="w-full py-8 bg-[#0b0b3c] overflow-hidden">
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="overflow-hidden w-full">
        <div className="marquee-track">
          {/* Render twice — second copy creates the seamless loop */}
          {[...sliderItems, ...sliderItems].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-[25px]"
            >
              <img
                src={item}
                alt="brand"
                className="object-contain opacity-90 h-[32px] md:h-[32px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSlider;