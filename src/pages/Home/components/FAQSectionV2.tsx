"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What are the best IT courses for career growth?",
    a: "Courses in Full Stack, Data Analytics, AI, Cloud, and DevOps with hands-on projects offer the best career growth.",
  },
  {
    q: "Do online courses help in getting a job?",
    a: "Yes, job-oriented training with real projects and interview preparation significantly improves hiring chances.",
  },
  {
    q: "Are online certificates valid?",
    a: "Yes, but practical skills and project experience matter more than certificates when it comes to getting hired.",
  },
  {
    q: "Can I learn while working full-time?",
    a: "Yes, online courses provide flexible schedules and recorded sessions, making it easy to learn alongside a full-time job.",
  },
  {
    q: "How long does it take to become job-ready?",
    a: "Typically, it takes around 2–4 months to become job-ready with consistent practice and dedication.",
  },
  {
    q: "Do you provide placement support?",
    a: "Yes, we offer placement support including resume building, mock interviews, and job assistance.",
  },
];

export default function FAQSectionV2() {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full bg-gradient-to-r from-[#f3f4f6] to-[#eef2ff] py-20 px-6 -mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <img
            src="/images/home/faq-img-3.webp" // replace with your final asset
            alt="faq visual"
            className="w-[500px] max-w-full object-contain"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="max-w-[520px]">
          
          {/* Badge */}
          <span className="inline-block text-md bg-indigo-100 text-indigo-600  px-4 py-[6px] rounded-full mb-5 font-semibold">
            Faq's
          </span>

          {/* Heading */}
          <h2 className="text-[34px] font-semibold text-[#0f172a] leading-[1.5] tracking-tight">
           Launch Your IT Career with Expert-Led Training
          </h2>

          {/* Description */}
          <p className="text-[#64748b] mt-4 text-md leading-[1.7]">
            Gain practical skills, work on real-time projects, and prepare for high-demand IT roles with
guided training.
          </p>

   {/* Description */}
          <p className="text-[#64748b] mt-4 text-sm ">
            Everything you need to know before starting your IT career journey.
          </p>
          

          {/* FAQ LIST */}
          <div className="mt-8">
            {faqs.map((item, i) => {
              const isActive = active === i;

              return (
                <div key={i} className="border-b border-[#e2e8f0] py-4">
                  
                  {/* Question */}
                  <button
                    onClick={() => setActive(i)}
                    className="w-full flex items-center justify-between"
                  >
                    <span
                      className={`text-lg font-semibold transition-colors ${
                        isActive ? "text-indigo-600" : "text-[#334155]"
                      }`}
                    >
                      {item.q}
                    </span>

                    {/* Icon */}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isActive
                          ? "rotate-180 text-indigo-600"
                          : "text-[#64748b]"
                      }`}
                    />
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-300 ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100 mt-3"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[14px] text-[#64748b] leading-[1.7] pr-6">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}