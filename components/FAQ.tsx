"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long until I see ranking results?",
    answer:
      "Most clients see measurable ranking movement within 60–90 days of their first links going live. Domain authority improvements show within 30 days on Ahrefs. Full impact typically builds over 3–6 months as Google factors in link equity.",
  },
  {
    question: "Are these real links from real websites?",
    answer:
      "Always. We only build links on sites with genuine organic traffic and editorial standards. We never use PBNs, link farms, or paid link networks. Every placement is on a real website with a real audience.",
  },
  {
    question: "What makes Backlinky different from other agencies?",
    answer:
      "We specialize exclusively in SaaS. Every outreach email, every link prospect, every placement strategy is built around SaaS buyers and SaaS keywords. Generalist agencies can't do what we do because they don't understand your niche.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. No contracts, no lock-in. We earn your business every month with results. Cancel with 30 days' notice anytime.",
  },
  {
    question: "What if I'm not happy with the links you deliver?",
    answer:
      "We have a quality guarantee. If any link we build doesn't meet the agreed DR threshold or gets removed within 6 months, we replace it at no cost.",
  },
  {
    question: "Do you offer white-label services for agencies?",
    answer:
      "Yes. We work with 40+ SEO agencies as their white-label link building partner. Full white-label reports, no Backlinky branding anywhere. Email us at team@backlinky.io.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="font-[family-name:var(--font-syne)] font-bold text-3xl md:text-4xl text-[#F0F0F5]">
            Common questions
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl bg-[#111118] border border-white/[0.06] overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
                aria-expanded={openIndex === index}
              >
                <h3 className="font-[family-name:var(--font-syne)] font-semibold text-[#F0F0F5] pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-[#8888A0]" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-[#8888A0] leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
