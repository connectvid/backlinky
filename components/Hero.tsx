"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Link2, TrendingUp, Globe } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4F7CFF]/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Announcement Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4F7CFF]/15 border border-[#4F7CFF]/20 mb-8"
        >
          <Link2 className="w-4 h-4 text-[#4F7CFF]" />
          <span className="text-sm text-[#4F7CFF]">Now serving 200+ SaaS brands</span>
          <ArrowRight className="w-4 h-4 text-[#4F7CFF]" />
          <Link href="#case-studies" className="text-sm text-[#4F7CFF] hover:underline">
            See our work
          </Link>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-[family-name:var(--font-syne)] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F0F0F5] leading-tight mb-6"
        >
          Link Building That{" "}
          <span className="relative">
            <span className="text-gradient">Moves</span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="8"
              viewBox="0 0 200 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 6C50 2 150 2 198 6"
                stroke="#4F7CFF"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          Your Rankings.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-[560px] mx-auto text-lg text-[#8888A0] mb-10"
        >
          Backlinky builds high-authority backlinks for SaaS companies that want to rank faster, 
          attract qualified traffic, and outgrow their competitors.
        </motion.p>

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
        >
          <Link
            href="#audit"
            className="group flex items-center gap-2 px-8 py-4 text-white bg-[#4F7CFF] rounded-full hover:bg-[#3D6AEE] transition-all duration-200 shadow-[0_0_30px_rgba(79,124,255,0.3)] hover:shadow-[0_0_40px_rgba(79,124,255,0.4)]"
          >
            Get Your Free Link Audit
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#how-it-works"
            className="flex items-center gap-2 px-8 py-4 text-[#F0F0F5] border border-white/20 rounded-full hover:bg-white/5 transition-colors duration-200"
          >
            <Play className="w-5 h-5" />
            See How It Works
          </Link>
        </motion.div>

        {/* Trust Micro-copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-sm text-[#55556A] mb-16"
        >
          No contracts · White-hat only · Results in 60 days or we work for free
        </motion.p>

        {/* Hero Visual - Metrics Dashboard Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative mx-auto max-w-2xl"
        >
          {/* Glow Behind Card */}
          <div className="absolute inset-0 bg-[#4F7CFF]/20 rounded-2xl blur-2xl" />
          
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative bg-[#111118] border border-white/[0.06] rounded-2xl p-6 md:p-8 shadow-2xl"
          >
            {/* Card Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-[family-name:var(--font-syne)] font-semibold text-[#F0F0F5]">
                  Campaign Performance
                </h3>
                <p className="text-sm text-[#55556A]">Q4 2024</p>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20">
                <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                <span className="text-xs text-[#22C55E] font-medium">Live</span>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="mb-6">
              <p className="text-xs text-[#55556A] mb-3">Referring Domains Added</p>
              <div className="flex items-end gap-2 h-24 md:h-32">
                {[
                  { month: "Sep", value: 45 },
                  { month: "Oct", value: 78 },
                  { month: "Nov", value: 120 },
                  { month: "Dec", value: 156 },
                ].map((bar, index) => (
                  <div key={bar.month} className="flex-1 flex flex-col items-center gap-2">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${bar.value}%` }}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                      className="w-full bg-gradient-to-t from-[#4F7CFF] to-[#4F7CFF]/50 rounded-t-md min-h-[4px]"
                    />
                    <span className="text-xs text-[#55556A]">{bar.month}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stat Chips */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#0A0A0F] border border-white/[0.06]">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#22C55E]/10">
                  <TrendingUp className="w-5 h-5 text-[#22C55E]" />
                </div>
                <div>
                  <p className="font-[family-name:var(--font-jetbrains-mono)] text-lg text-[#22C55E]">↑ 312%</p>
                  <p className="text-xs text-[#55556A]">Organic Traffic</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#0A0A0F] border border-white/[0.06]">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#4F7CFF]/10">
                  <Globe className="w-5 h-5 text-[#4F7CFF]" />
                </div>
                <div>
                  <p className="font-[family-name:var(--font-jetbrains-mono)] text-lg text-[#4F7CFF]">+847</p>
                  <p className="text-xs text-[#55556A]">Referring Domains</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
