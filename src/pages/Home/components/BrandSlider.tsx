const logos = [
  "/images/home/brand01.png",
  "/images/home/brand02.png",
  "/images/home/brand03.png",
  "/images/home/brand04.png",
  "/images/home/brand05.png",
  "/images/home/brand06.png",
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