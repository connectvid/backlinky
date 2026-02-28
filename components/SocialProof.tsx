"use client";

import { motion } from "framer-motion";

const companies = [
  "Notion",
  "Intercom",
  "Loom",
  "Webflow",
  "Figma",
  "Linear",
  "Rippling",
  "Deel",
  "Vercel",
  "Pitch",
];

export default function SocialProof() {
  return (
    <section className="py-12 border-y border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm text-[#55556A] uppercase tracking-wider"
        >
          Trusted by fast-growing SaaS companies
        </motion.p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0F] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0F] to-transparent z-10" />

        {/* Scrolling Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex animate-marquee"
        >
          {/* Double the items for seamless loop */}
          {[...companies, ...companies].map((company, index) => (
            <div
              key={`${company}-${index}`}
              className="flex items-center justify-center px-12"
            >
              <span className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-semibold text-[#55556A]/50 hover:text-[#8888A0] transition-colors duration-300 whitespace-nowrap">
                {company}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
