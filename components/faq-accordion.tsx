"use client";

import { useState } from "react";
import * as motion from "motion/react-client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { RichText } from "./rich-text";
import { FaqItem } from "@/lib/types";

type AccordionProps = {
  items: FaqItem[];
  addShadow?: boolean;
};

export default function Accordion({
  items,
  addShadow = false,
}: AccordionProps) {
  const [faqs, setFaqs] = useState(
    items.map((item) => ({ ...item, isOpen: false })),
  );

  const toggleFaq = (index: number) => {
    setFaqs((prev) =>
      prev.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq,
      ),
    );
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 1 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div>
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          style={{
            boxShadow: addShadow ? "0px 4px 4px rgba(0, 0, 0, 0.20)" : "none",
          }}
          className="mb-10 overflow-hidden rounded-[16px] bg-white transition-all duration-200 ease-linear"
        >
          <button
            className="flex w-full items-center justify-between p-4 text-left focus:outline-none"
            onClick={() => toggleFaq(index)}
            aria-expanded={faq.isOpen}
            aria-controls={`faq-answer-${index}`}
          >
            <span className="text-lg font-medium tracking-wider text-primary">
              {faq.question}
            </span>
            <span className="ml-2 flex-shrink-0 rounded-[16px] bg-[#ED7F00] p-1">
              {faq.isOpen ? (
                <ChevronUp className="h-5 w-5 text-white" />
              ) : (
                <ChevronDown className="h-5 w-5 text-white" />
              )}
            </span>
          </button>

          <div
            id={`faq-answer-${index}`}
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              faq.isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 pb-4 text-gray-700">
              <RichText
                text={faq.answer}
                className="mb-3 whitespace-pre-line tracking-[0.08em] text-[#736D6D] last:mb-0"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
