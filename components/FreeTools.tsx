"use client";

import { motion } from "framer-motion";
import { Link2, BarChart3, Mail, Search, ArrowRight } from "lucide-react";
import Link from "next/link";

const tools = [
  {
    icon: Link2,
    title: "Anchor Text Analyzer",
    description: "Check your backlink anchor text distribution instantly",
    href: "/free-tools/backlink-anchor-text-analyzer",
  },
  {
    icon: BarChart3,
    title: "Link Building ROI Calculator",
    description: "Calculate the revenue impact of your links",
    href: "/free-tools/link-building-roi-calculator",
  },
  {
    icon: Mail,
    title: "Outreach Email Generator",
    description: "AI-generated outreach emails that get replies",
    href: "/free-tools/outreach-email-generator",
  },
  {
    icon: Search,
    title: "Backlink Gap Analyzer",
    description: "See links your competitors have that you don't",
    href: "/free-tools/backlink-gap-analyzer",
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

export default function FreeTools() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="text-sm text-[#4F7CFF] uppercase tracking-wider font-medium mb-4">
              Free Tools
            </p>
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-3xl md:text-4xl lg:text-5xl text-[#F0F0F5] mb-6">
              Free tools built
              <br />
              for link builders
            </h2>
            <p className="text-lg text-[#8888A0] mb-8">
              We build the tools we wish existed. Use them free, forever. No signup required.
            </p>
            <Link
              href="/free-tools"
              className="inline-flex items-center gap-2 text-[#4F7CFF] hover:gap-3 transition-all duration-200"
            >
              Explore All Free Tools
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right Column - Tool Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {tools.map((tool) => (
              <motion.div key={tool.title} variants={cardVariants}>
                <Link
                  href={tool.href}
                  className="group block p-5 rounded-xl bg-[#111118] border border-white/[0.06] hover:border-[#4F7CFF]/30 hover:bg-[#1A1A24] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#4F7CFF]/10 group-hover:bg-[#4F7CFF]/20 transition-colors duration-300 shrink-0">
                      <tool.icon className="w-5 h-5 text-[#4F7CFF]" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-syne)] font-semibold text-[#F0F0F5] mb-1 group-hover:text-[#4F7CFF] transition-colors duration-200">
                        {tool.title}
                      </h3>
                      <p className="text-sm text-[#8888A0]">{tool.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
