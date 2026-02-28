"use client";

import { motion } from "framer-motion";
import { FileText, Link as LinkIcon, Megaphone, Layers, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Guest Posting",
    description: "Premium guest posts on real blogs your target audience reads. Full content creation included.",
    icon: FileText,
  },
  {
    title: "Niche Edits",
    description: "Contextual link insertions into existing high-traffic, indexed content. Fast and effective.",
    icon: LinkIcon,
  },
  {
    title: "Digital PR",
    description: "Data-driven PR campaigns that earn links from high-authority news sites and industry publications.",
    icon: Megaphone,
  },
  {
    title: "White Label",
    description: "Resell our links under your agency brand. Full white-label reporting and client-ready dashboards.",
    icon: Layers,
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

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
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
            Services
          </p>
          <h2 className="font-[family-name:var(--font-syne)] font-bold text-3xl md:text-4xl lg:text-5xl text-[#F0F0F5]">
            Everything you need to build link authority
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-4"
        >
          {/* Featured Card - Full Width */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-2 p-8 rounded-2xl bg-gradient-to-br from-[#4F7CFF]/20 to-[#111118] border border-[#4F7CFF]/30 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-[#4F7CFF] text-white text-xs font-medium">
              <Star className="w-3 h-3 fill-current" />
              Most Popular
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                  Managed Link Building
                </h3>
                <p className="text-[#8888A0] mb-6 leading-relaxed">
                  Our done-for-you monthly link building service. We handle everything from 
                  prospecting to outreach to delivery. You get a fixed number of high-DR, 
                  niche-relevant links per month, guaranteed.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "DR 40–80 placements",
                    "Real traffic sites only",
                    "Monthly delivery + report",
                    "Cancel anytime",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-[#F0F0F5]">
                      <span className="text-[#22C55E]">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#pricing"
                  className="inline-flex items-center gap-2 text-[#4F7CFF] hover:gap-3 transition-all duration-200"
                >
                  See Packages
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              {/* Pricing Tiers Table */}
              <div className="bg-[#0A0A0F] rounded-xl p-6 border border-white/[0.06]">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 text-sm text-[#55556A] font-normal">Plan</th>
                      <th className="text-center py-3 text-sm text-[#55556A] font-normal">Links/Month</th>
                      <th className="text-right py-3 text-sm text-[#55556A] font-normal">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "Starter", links: "5", price: "$997" },
                      { name: "Growth", links: "12", price: "$1,997" },
                      { name: "Scale", links: "25", price: "$3,997" },
                    ].map((tier) => (
                      <tr key={tier.name} className="border-b border-white/[0.06] last:border-0">
                        <td className="py-4 text-[#F0F0F5] font-medium">{tier.name}</td>
                        <td className="py-4 text-center text-[#8888A0]">{tier.links}</td>
                        <td className="py-4 text-right font-[family-name:var(--font-jetbrains-mono)] text-[#F0F0F5]">
                          {tier.price}
                          <span className="text-[#55556A] text-sm">/mo</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Service Cards */}
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="p-6 rounded-xl bg-[#111118] border border-white/[0.06] hover:border-white/[0.12] hover:bg-[#1A1A24] transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#4F7CFF]/10 group-hover:bg-[#4F7CFF]/20 transition-colors duration-300 shrink-0">
                  <service.icon className="w-6 h-6 text-[#4F7CFF]" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-syne)] font-semibold text-lg text-[#F0F0F5] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#8888A0] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
