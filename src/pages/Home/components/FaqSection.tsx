import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: 1,
    question: "What are the best online courses for career growth?",
    answer:
      "Courses in web development, digital marketing, data analytics, AI, and business management offer strong career outcomes."
  },
  {
    id: 2,
    question: "Do online courses really help in getting a job?",
    answer:
      "Yes. Skill based online training programs with projects and certifications improve employability and interview readiness."
  },
  {
    id: 3,
    question: "Are online course certificates valid for jobs?",
    answer:
      "Industry relevant online courses with certificates are widely accepted by employers when backed by practical skills."
  },
  {
    id: 4,
    question: "Can I learn online while working full time?",
    answer:
      "Yes. All courses are designed for flexible, self paced learning so you can study online at your convenience."
  },
  {
    id: 5,
    question: "Which online learning platform is best for beginners?",
    answer:
      "Platforms offering structured learning paths, beginner friendly content, and expert support are ideal for beginners."
  },
  {
    id: 6,
    question: "Do you provide job placement support after course completion?",
    answer:
      "Selected programs include resume guidance, interview preparation, and job placement assistance."
  }
];

const FaqSection = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-gray-500">
          Got questions? We’ve answered the most common ones to help you get
          started confidently.
        </p>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map(faq => {
          const isOpen = openId === faq.id;

          return (
            <div
              key={faq.id}
              className="rounded-xl bg-[#E9F2FF] px-6 py-5 cursor-pointer"
              onClick={() => toggleFAQ(faq.id)}
            >
              {/* Question */}
              <div className="flex items-center justify-between">
                <h3 className="text-sm md:text-base font-medium text-gray-900">
                  {faq.question}
                </h3>

                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <ChevronDown className="text-gray-500" />
                </motion.span>
              </div>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FaqSection;
