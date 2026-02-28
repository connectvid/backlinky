"use client";

import { motion } from "framer-motion";
import { Search, Target, BarChart2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Deep Niche Analysis",
    description:
      "We audit your domain, map your competitor backlink profiles, and identify the exact link opportunities that will move your rankings fastest.",
    icon: Search,
  },
  {
    number: "02",
    title: "Precision Outreach",
    description:
      "Our team reaches out to real, relevant websites in your niche. No link farms. No PBNs. Only editorial links that build lasting authority.",
    icon: Target,
  },
  {
    number: "03",
    title: "Links Live, Rankings Move",
    description:
      "Links go live within 30 days. You get a live dashboard showing every link earned, DR scores, and ranking progress. Full transparency, always.",
    icon: BarChart2,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8">
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
            How It Works
          </p>
          <h2 className="font-[family-name:var(--font-syne)] font-bold text-3xl md:text-4xl lg:text-5xl text-[#F0F0F5]">
            From strategy to ranked in 60 days
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Connector Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[16.67%] right-[16.67%] h-px border-t-2 border-dashed border-white/10" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={stepVariants}
                className="relative"
              >
                <div className="text-center">
                  {/* Icon & Number */}
                  <div className="relative inline-flex items-center justify-center mb-6">
                    <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-[#111118] border border-white/[0.06] relative z-10">
                      <step.icon className="w-8 h-8 text-[#4F7CFF]" />
                    </div>
                    {/* Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#4F7CFF] flex items-center justify-center">
                      <span className="font-[family-name:var(--font-jetbrains-mono)] text-sm font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#8888A0] leading-relaxed max-w-sm mx-auto">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
