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
    question: "Do I need any prior experience before starting a course?",
    answer:
      "Our expert-led courses focus on real-world skills and are designed for beginners as well as professionals. You’ll also get lifetime access and community support."
  },
  {
    id: 2,
    question: "How long will I have access to the course materials after enrolling?",
    answer:
      "You’ll have lifetime access to all course materials, including future updates."
  },
  {
    id: 3,
    question:
      "Are the certificates you provide recognized or useful for career advancement?",
    answer:
      "Yes, our certificates are industry-aligned and help strengthen your resume and professional credibility."
  },
  {
    id: 4,
    question:
      "Can I interact with instructors or get support during the course?",
    answer:
      "Absolutely. You’ll have access to instructor guidance, doubt-clearing sessions, and community discussions."
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
