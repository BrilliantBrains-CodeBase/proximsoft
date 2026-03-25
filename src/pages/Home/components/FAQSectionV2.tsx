"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What are the best online courses for career growth?",
    a: "Courses in web development, digital marketing, data analytics, AI, and business management offer strong career outcomes.",
  },
  {
    q: "Do online courses really help in getting a job?",
    a: "Yes. Skill based online training programs with projects and certifications improve employability and interview readiness.",
  },
  {
    q: "Are online course certificates valid for jobs?",
    a: "Industry relevant online courses with certificates are widely accepted by employers when backed by practical skills.",
  },
  {
    q: "Can I learn online while working full time?",
    a: "Yes. All courses are designed for flexible, self paced learning so you can study online at your convenience.",
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
            src="/images/home/faq_img.png" // replace with your final asset
            alt="faq visual"
            className="w-[420px] max-w-full object-contain"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="max-w-[520px]">
          
          {/* Badge */}
          <span className="inline-block bg-indigo-100 text-indigo-600 text-[11px] px-4 py-[6px] rounded-full mb-5 font-medium">
            Faq's
          </span>

          {/* Heading */}
          <h2 className="text-[34px] font-semibold text-[#0f172a] leading-[1.2] tracking-tight">
            Get Hired From <br /> Industry's Best Trainers
          </h2>

          {/* Description */}
          <p className="text-[#64748b] mt-4 text-[14px] leading-[1.7]">
            Get answers to everything you need to know before starting your IT
            career journey with Proximsoft.
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
                      className={`text-[15px] font-medium transition-colors ${
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