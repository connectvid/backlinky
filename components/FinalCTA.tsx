"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function FinalCTA() {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ website?: string; email?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateUrl = (url: string) => {
    return url.length > 0 && (url.startsWith("http://") || url.startsWith("https://") || url.includes("."));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { website?: string; email?: string } = {};

    if (!validateUrl(websiteUrl)) {
      newErrors.website = "Please enter a valid website URL";
    }

    if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      // Here you would typically send the data to your backend
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section id="audit" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4F7CFF]/5 to-transparent" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="font-[family-name:var(--font-syne)] font-bold text-3xl md:text-4xl lg:text-5xl text-[#F0F0F5] mb-6">
            Ready to stop losing ground?
          </h2>
          <p className="text-lg text-[#8888A0] mb-10 max-w-xl mx-auto">
            Get a free backlink audit in 24 hours. We'll show you exactly what's holding 
            your rankings back and what it would take to fix it.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="space-y-4 mb-6">
                <div>
                  <input
                    type="text"
                    placeholder="Enter your website URL"
                    value={websiteUrl}
                    onChange={(e) => {
                      setWebsiteUrl(e.target.value);
                      if (errors.website) setErrors({ ...errors, website: undefined });
                    }}
                    className={`w-full px-4 py-3 rounded-lg bg-[#111118] border ${
                      errors.website ? "border-red-500" : "border-white/[0.06]"
                    } text-[#F0F0F5] placeholder-[#55556A] focus:outline-none focus:border-[#4F7CFF] transition-colors`}
                  />
                  {errors.website && (
                    <p className="text-red-500 text-sm mt-1 text-left">{errors.website}</p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your work email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    className={`w-full px-4 py-3 rounded-lg bg-[#111118] border ${
                      errors.email ? "border-red-500" : "border-white/[0.06]"
                    } text-[#F0F0F5] placeholder-[#55556A] focus:outline-none focus:border-[#4F7CFF] transition-colors`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1 text-left">{errors.email}</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-2 px-8 py-4 text-white bg-[#4F7CFF] rounded-full hover:bg-[#3D6AEE] transition-all duration-200 shadow-[0_0_30px_rgba(79,124,255,0.3)] hover:shadow-[0_0_40px_rgba(79,124,255,0.4)]"
              >
                Get My Free Audit
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <p className="text-sm text-[#55556A] mt-4">
                No credit card · No commitment · Results in 24 hours
              </p>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4 p-8 rounded-xl bg-[#111118] border border-[#22C55E]/20"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#22C55E]/10">
                <CheckCircle2 className="w-8 h-8 text-[#22C55E]" />
              </div>
              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5]">
                Audit Request Received!
              </h3>
              <p className="text-[#8888A0]">
                We'll analyze your backlink profile and send your report to {email} within 24 hours.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
