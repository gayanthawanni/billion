"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How quickly will I receive a response?",
    answer:
      "Our support team usually replies within one business day. Messages sent during working hours are handled as quickly as possible.",
  },
  {
    question: "Can employers request hiring support?",
    answer:
      "Yes. Employers can contact us for job posting help, candidate search guidance, and support choosing the right hiring option.",
  },
  {
    question: "How can job seekers get assistance?",
    answer:
      "Job seekers can ask for help with account access, applications, job alerts, profile details, and general career opportunity questions.",
  },
  {
    question: "What information should I include in my message?",
    answer:
      "Please include your name, contact details, the topic you need help with, and any job or employer details related to your request.",
  },
];

export default function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto grid max-w-[88%] gap-8 lg:grid-cols-[35%_65%]">
      <div>
        <h2 className="text-[28px] font-extrabold text-slate-950">Frequently Asked Questions</h2>
        <p className="mt-3 text-[15px] font-medium text-slate-500">
          Quick answers to the most common questions.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={faq.question} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex min-h-[52px] w-full items-center justify-between gap-4 px-5 text-left text-[15px] font-bold text-slate-700 transition hover:text-slate-950"
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="border-t border-slate-100 px-5 py-4 text-[14px] font-medium leading-6 text-slate-500">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
