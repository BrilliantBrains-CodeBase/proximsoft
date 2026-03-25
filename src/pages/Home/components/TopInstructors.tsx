"use client";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Instructor {
  id: number;
  name: string;
  role: string;
  rating: number;
  image: string;
  social: { facebook: string; twitter: string; whatsapp: string; instagram: string };
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const instructors: Instructor[] = [
  {
    id: 1,
    name: "Mark Jukarberg",
    role: "UX Design Lead",
    rating: 4.8,
    image: "https://skillgro-react.vercel.app/assets/img/instructor/instructor01.png",
    social: { facebook: "#", twitter: "#", whatsapp: "#", instagram: "#" },
  },
  {
    id: 2,
    name: "Web Design",
    role: "Olivia Mia",
    rating: 4.8,
    image: "https://skillgro-react.vercel.app/assets/img/instructor/instructor01.png",
    social: { facebook: "#", twitter: "#", whatsapp: "#", instagram: "#" },
  },
  {
    id: 3,
    name: "William Hope",
    role: "Digital Marketing",
    rating: 4.8,
    image: "https://skillgro-react.vercel.app/assets/img/instructor/instructor01.png",
    social: { facebook: "#", twitter: "#", whatsapp: "#", instagram: "#" },
  },
  {
    id: 4,
    name: "Sophia Ava",
    role: "Web Development",
    rating: 4.8,
    image: "https://skillgro-react.vercel.app/assets/img/instructor/instructor01.png",
    social: { facebook: "#", twitter: "#", whatsapp: "#", instagram: "#" },
  },
];

// ─── Social icon SVGs ─────────────────────────────────────────────────────────
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
  </svg>
);
const WhatsappIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M11.998 2C6.477 2 2 6.477 2 12c0 1.99.584 3.84 1.587 5.392L2 22l4.742-1.566A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.521 2 11.998 2z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

// ─── Social Button ────────────────────────────────────────────────────────────
const SocialBtn = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-[34px] h-[34px] rounded-full border border-gray-200 flex items-center justify-center text-gray-500 bg-white transition-all duration-200 hover:border-indigo-500 hover:text-indigo-600 hover:bg-indigo-50 shrink-0"
  >
    {children}
  </a>
);

// ─── Instructor Card ──────────────────────────────────────────────────────────
const InstructorCard = ({ instructor }: { instructor: Instructor }) => (
  <div className="flex items-center gap-5">
    {/* Avatar */}
    <div className="w-[120px] h-[120px] shrink-0 rounded-full overflow-hidden bg-gray-100">
      <img
        src={instructor.image}
        alt={instructor.name}
        className="w-full h-full object-cover object-top"
      />
    </div>

    {/* Info */}
    <div className="flex flex-col gap-1.5">
      <h3 className="font-bold text-gray-900 text-base leading-tight">
        {instructor.name}
      </h3>
      <p className="text-indigo-600 text-[13px] font-medium leading-none">
        {instructor.role}
      </p>
      <div className="flex items-center gap-1">
        <svg className="w-3 h-3 fill-yellow-400 shrink-0" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span className="text-xs text-gray-500">({instructor.rating} Ratings)</span>
      </div>
      <div className="flex items-center gap-[7px] mt-0.5">
        <SocialBtn href={instructor.social.facebook}><FacebookIcon /></SocialBtn>
        <SocialBtn href={instructor.social.twitter}><TwitterIcon /></SocialBtn>
        <SocialBtn href={instructor.social.whatsapp}><WhatsappIcon /></SocialBtn>
        <SocialBtn href={instructor.social.instagram}><InstagramIcon /></SocialBtn>
      </div>
    </div>
  </div>
);

// ─── See All Button ───────────────────────────────────────────────────────────
const SeeAllBtn = ({ href }: { href: string }) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 bg-indigo-600 text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.85)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] active:scale-95"
  >
    See All Instructors
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </a>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const TopInstructors = () => {
  const leftCol = [instructors[0], instructors[2]];
  const rightCol = [instructors[1], instructors[3]];

  return (
    <section className="w-full bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">

          {/* Left: heading + CTA */}
          <div className="shrink-0 md:w-[400px] flex flex-col gap-5 md:pt-4">
            <span className="self-start text-[13px] font-medium px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100">
              Skilled Introduce
            </span>

            <h2 className="font-semibold text-gray-900 text-[1.75rem] md:text-2xl leading-tight">
              Our Top Class &amp;
              Expert Instructors <br />
              In One Place
            </h2>

            <p className="text-gray-500 text-sm leading-relaxed max-w-[280px]">
              when an unknown printer took a galley of type and scrambled makespecimen book has survived not only five centuries
            </p>

            <div className="mt-1">
              <SeeAllBtn href="/instructors" />
            </div>
          </div>

          {/* Right: 2×2 instructor grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
            <div className="flex flex-col gap-10">
              {leftCol.map((inst) => (
                <InstructorCard key={inst.id} instructor={inst} />
              ))}
            </div>
            <div className="flex flex-col gap-10">
              {rightCol.map((inst) => (
                <InstructorCard key={inst.id} instructor={inst} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TopInstructors;