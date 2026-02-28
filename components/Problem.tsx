"use client";

import { motion } from "framer-motion";
import { TrendingDown, Clock, AlertCircle } from "lucide-react";

const painPoints = [
  {
    icon: TrendingDown,
    title: "You're invisible on Google",
    description:
      "You have a great product but no one can find it. Without domain authority, you're buried on page 4 while weaker competitors take all the organic traffic.",
  },
  {
    icon: Clock,
    title: "Link building eats your team alive",
    description:
      "DIY link building is a full-time job. Prospecting, writing, outreach, follow-ups — it takes 40+ hours per month just to get a handful of mediocre links.",
  },
  {
    icon: AlertCircle,
    title: "Cheap links will tank your site",
    description:
      "Low-quality link farms and PBNs feel like shortcuts — until Google's spam update hits and you lose 60% of your traffic overnight. We've seen it happen.",
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

export default function Problem() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="text-sm text-[#4F7CFF] uppercase tracking-wider font-medium mb-4">
              The Problem
            </p>
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-3xl md:text-4xl lg:text-5xl text-[#F0F0F5] leading-tight mb-6">
              Your competitors are
              <br />
              pulling ahead.
              <br />
              You know why.
            </h2>
            <p className="text-lg text-[#8888A0] max-w-md">
              While you're focused on building product, your competitors are building
              backlinks — and Google notices. Every month without a link building
              strategy is ground given up permanently.
            </p>
          </motion.div>

          {/* Right Column - Pain Point Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            {painPoints.map((point, index) => (
              <motion.div
                key={point.title}
                variants={cardVariants}
                className="group p-6 rounded-xl bg-[#111118] border border-white/[0.06] hover:border-[#4F7CFF]/30 hover:bg-[#1A1A24] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#4F7CFF]/10 group-hover:bg-[#4F7CFF]/20 transition-colors duration-300 shrink-0">
                    <point.icon className="w-6 h-6 text-[#4F7CFF]" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-syne)] font-semibold text-lg text-[#F0F0F5] mb-2">
                      {point.title}
                    </h3>
                    <p className="text-[#8888A0] leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
