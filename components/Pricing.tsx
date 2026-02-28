"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 997,
    description: "For early-stage SaaS building their first authority base",
    links: "5 links/month",
    drRange: "DR 30–50",
    features: [
      "Niche-relevant sites only",
      "Full link report",
      "Dedicated account manager",
      "Cancel anytime",
    ],
    cta: "Get Started",
    href: "#contact",
    featured: false,
  },
  {
    name: "Growth",
    monthlyPrice: 1997,
    description: "For SaaS companies ready to dominate their category",
    links: "12 links/month",
    drRange: "DR 40–65",
    features: [
      "Everything in Starter",
      "Competitor gap analysis",
      "Content anchor strategy",
      "Priority support",
      "Quarterly strategy call",
    ],
    cta: "Get Started",
    href: "#contact",
    featured: true,
  },
  {
    name: "Scale",
    monthlyPrice: 3997,
    description: "For aggressive growth with full-stack link authority",
    links: "25 links/month",
    drRange: "DR 50–80",
    features: [
      "Everything in Growth",
      "Digital PR campaign (1/quarter)",
      "White-label option",
      "Weekly reporting",
      "Dedicated strategist",
    ],
    cta: "Talk to Sales",
    href: "#contact",
    featured: false,
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

export default function Pricing() {
  const [isQuarterly, setIsQuarterly] = useState(false);

  const getPrice = (monthlyPrice: number) => {
    if (isQuarterly) {
      return Math.round(monthlyPrice * 0.9);
    }
    return monthlyPrice;
  };

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <p className="text-sm text-[#4F7CFF] uppercase tracking-wider font-medium mb-4">
            Pricing
          </p>
          <h2 className="font-[family-name:var(--font-syne)] font-bold text-3xl md:text-4xl lg:text-5xl text-[#F0F0F5] mb-4">
            Transparent pricing. No surprises.
          </h2>
          <p className="text-lg text-[#8888A0] max-w-2xl mx-auto">
            All plans include white-hat links only, real-traffic sites, and a live reporting dashboard.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <span className={`text-sm ${!isQuarterly ? "text-[#F0F0F5]" : "text-[#8888A0]"}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsQuarterly(!isQuarterly)}
            className="relative w-14 h-7 rounded-full bg-[#111118] border border-white/[0.06] transition-colors duration-200"
            aria-label="Toggle billing period"
          >
            <motion.div
              animate={{ x: isQuarterly ? 28 : 4 }}
              transition={{ duration: 0.2 }}
              className="absolute top-1 w-5 h-5 rounded-full bg-[#4F7CFF]"
            />
          </button>
          <span className={`text-sm ${isQuarterly ? "text-[#F0F0F5]" : "text-[#8888A0]"}`}>
            Quarterly
          </span>
          {isQuarterly && (
            <span className="text-xs text-[#22C55E] bg-[#22C55E]/10 px-2 py-1 rounded-full">
              Save 10%
            </span>
          )}
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              className={`relative rounded-xl p-6 ${
                plan.featured
                  ? "bg-[#111118] border-2 border-[#4F7CFF] shadow-[0_0_40px_rgba(79,124,255,0.15)]"
                  : "bg-[#111118] border border-white/[0.06]"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 rounded-full bg-[#4F7CFF] text-white text-xs font-medium">
                  <Star className="w-3 h-3 fill-current" />
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-[#8888A0] mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-4xl font-bold text-[#F0F0F5]">
                    ${getPrice(plan.monthlyPrice).toLocaleString()}
                  </span>
                  <span className="text-[#55556A]">/mo</span>
                </div>
              </div>

              <div className="space-y-3 mb-6 pb-6 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4F7CFF]" />
                  <span className="text-[#F0F0F5]">{plan.links}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4F7CFF]" />
                  <span className="text-[#8888A0]">{plan.drRange}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                    <span className="text-[#8888A0] text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`block w-full text-center py-3 rounded-full font-medium transition-all duration-200 ${
                  plan.featured
                    ? "bg-[#4F7CFF] text-white hover:bg-[#3D6AEE] shadow-[0_0_20px_rgba(79,124,255,0.3)]"
                    : "bg-white/5 text-[#F0F0F5] border border-white/20 hover:bg-white/10"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-[#8888A0]">
            Not sure which plan fits?{" "}
            <Link href="#audit" className="text-[#4F7CFF] hover:underline">
              Get a free audit and we'll tell you exactly what you need.
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
