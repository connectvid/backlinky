"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const caseStudies = [
  {
    type: "B2B SaaS — Project Management",
    before: { dr: "18", traffic: "2,400" },
    after: { dr: "44", traffic: "31,000" },
    timeline: "8 months",
    quote:
      "Backlinky tripled our domain rating in under a year. We rank for keywords we never thought possible.",
    attribution: "Head of Marketing, SaaS Company",
  },
  {
    type: "SaaS — HR Tech",
    before: { dr: "24", traffic: "890" },
    after: { dr: "51", traffic: "18,400" },
    timeline: "6 months",
    quote:
      "The quality of links is insane. Real sites, real traffic, real impact. We've cut our paid acquisition spend by 40%.",
    attribution: "CEO, HR Tech Startup",
  },
  {
    type: "SaaS — Sales Intelligence",
    before: { dr: "31", traffic: "5,200" },
    after: { dr: "67", traffic: "52,000" },
    timeline: "12 months",
    quote:
      "We went from nobody to competing with Crunchbase for our category keywords. Backlinky made that happen.",
    attribution: "VP Growth, Sales SaaS",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-sm text-[#4F7CFF] uppercase tracking-wider font-medium mb-4">
            Results
          </p>
          <h2 className="font-[family-name:var(--font-syne)] font-bold text-3xl md:text-4xl lg:text-5xl text-[#F0F0F5]">
            Real SaaS brands. Real ranking growth.
          </h2>
        </motion.div>

        {/* Case Study Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="p-6 rounded-xl bg-[#111118] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
            >
              {/* Type Label */}
              <p className="text-xs text-[#4F7CFF] uppercase tracking-wider font-medium mb-4">
                {study.type}
              </p>

              {/* Before/After Metrics */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 p-3 rounded-lg bg-[#0A0A0F]">
                  <p className="text-xs text-[#55556A] mb-1">Before</p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-[family-name:var(--font-jetbrains-mono)] text-lg text-[#55556A]">
                      DR {study.before.dr}
                    </span>
                  </div>
                  <p className="text-xs text-[#55556A]">{study.before.traffic} visits/mo</p>
                </div>

                <ArrowRight className="w-5 h-5 text-[#55556A]" />

                <div className="flex-1 p-3 rounded-lg bg-[#0A0A0F] border border-[#22C55E]/20">
                  <p className="text-xs text-[#22C55E] mb-1">After</p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-[family-name:var(--font-jetbrains-mono)] text-lg text-[#22C55E]">
                      DR {study.after.dr}
                    </span>
                  </div>
                  <p className="text-xs text-[#8888A0]">{study.after.traffic} visits/mo</p>
                </div>
              </div>

              {/* Timeline */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#4F7CFF]" />
                <span className="text-sm text-[#8888A0]">{study.timeline}</span>
              </div>

              {/* Quote */}
              <blockquote className="text-[#F0F0F5] leading-relaxed mb-4">
                "{study.quote}"
              </blockquote>

              {/* Attribution */}
              <p className="text-sm text-[#55556A]">— {study.attribution}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
