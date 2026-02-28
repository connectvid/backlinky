"use client";

import { motion } from "framer-motion";
import { Link2, BarChart3, Mail, Search, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const tools = [
  {
    icon: Link2,
    title: "Anchor Text Analyzer",
    description: "Check your backlink anchor text distribution instantly. Identify over-optimization risks and get recommendations for ideal ratios.",
    href: "/free-tools/backlink-anchor-text-analyzer",
    color: "#4F7CFF",
  },
  {
    icon: BarChart3,
    title: "Link Building ROI Calculator",
    description: "Calculate the revenue impact of your links. Input your metrics and see projected traffic increase and ROI.",
    href: "/free-tools/link-building-roi-calculator",
    color: "#22C55E",
  },
  {
    icon: Mail,
    title: "Outreach Email Generator",
    description: "Generate personalized outreach emails that get replies. AI-powered templates for guest posts, niche edits, and more.",
    href: "/free-tools/outreach-email-generator",
    color: "#F59E0B",
  },
  {
    icon: Search,
    title: "Backlink Gap Analyzer",
    description: "See links your competitors have that you don't. Identify quick-win opportunities to close the gap.",
    href: "/free-tools/backlink-gap-analyzer",
    color: "#EC4899",
  },
];

export default function FreeToolsPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0F]">
      <Nav />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4F7CFF]/15 border border-[#4F7CFF]/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#4F7CFF]" />
            <span className="text-sm text-[#4F7CFF]">100% Free — No Signup Required</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-[family-name:var(--font-syne)] font-bold text-4xl md:text-5xl lg:text-6xl text-[#F0F0F5] mb-6"
          >
            Free Link Building Tools
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-[#8888A0] max-w-2xl mx-auto"
          >
            Professional-grade SEO tools that usually cost $99+/month. 
            Built by link builders, for link builders. Use them free, forever.
          </motion.p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  href={tool.href}
                  className="group block h-full p-8 rounded-2xl bg-[#111118] border border-white/[0.06] hover:border-white/[0.12] hover:bg-[#1A1A24] transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div 
                      className="flex items-center justify-center w-16 h-16 rounded-2xl shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${tool.color}15` }}
                    >
                      <tool.icon className="w-8 h-8" style={{ color: tool.color }} />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-[family-name:var(--font-syne)] font-semibold text-2xl text-[#F0F0F5] mb-2 group-hover:text-[#4F7CFF] transition-colors duration-200">
                        {tool.title}
                      </h2>
                      <p className="text-[#8888A0] mb-4 leading-relaxed">
                        {tool.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-[#4F7CFF] font-medium">
                        Try It Free
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
            Need More Than Tools?
          </h2>
          <p className="text-[#8888A0] mb-8">
            Get a dedicated link building team that delivers DR 40+ links every month.
          </p>
          <Link
            href="/#pricing"
            className="inline-flex items-center gap-2 px-8 py-4 text-white bg-[#4F7CFF] rounded-full hover:bg-[#3D6AEE] transition-colors duration-200 shadow-[0_0_30px_rgba(79,124,255,0.3)]"
          >
            See Our Link Building Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
