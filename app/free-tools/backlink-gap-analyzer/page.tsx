"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowLeft, Globe, ArrowRight, AlertCircle } from "lucide-react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

interface GapResult {
  domain: string;
  authority: number;
  linkingTo: string[];
  traffic: string;
  category: string;
}

export default function BacklinkGapAnalyzer() {
  const [yourDomain, setYourDomain] = useState("");
  const [competitor1, setCompetitor1] = useState("");
  const [competitor2, setCompetitor2] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<GapResult[] | null>(null);

  // Simulated analysis - in real implementation this would call APIs
  const analyzeGaps = async () => {
    if (!yourDomain || !competitor1) return;

    setIsAnalyzing(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mock results
    const mockResults: GapResult[] = [
      { domain: "industryblog.com", authority: 65, linkingTo: [competitor1], traffic: "45K/mo", category: "Industry Blog" },
      { domain: "techdirectory.io", authority: 58, linkingTo: [competitor1, competitor2].filter(Boolean), traffic: "32K/mo", category: "Directory" },
      { domain: "newssite.com", authority: 72, linkingTo: [competitor1], traffic: "120K/mo", category: "News" },
      { domain: "resourcehub.net", authority: 54, linkingTo: [competitor1, competitor2].filter(Boolean), traffic: "28K/mo", category: "Resource Page" },
      { domain: "expertforum.org", authority: 61, linkingTo: [competitor1], traffic: "38K/mo", category: "Forum" },
      { domain: "partnerblog.co", authority: 48, linkingTo: [competitor1], traffic: "15K/mo", category: "Partner Site" },
      { domain: "review-site.com", authority: 55, linkingTo: [competitor1, competitor2].filter(Boolean), traffic: "42K/mo", category: "Review Site" },
      { domain: "community.io", authority: 52, linkingTo: [competitor1], traffic: "22K/mo", category: "Community" },
    ];

    setResults(mockResults);
    setIsAnalyzing(false);
  };

  const getAuthorityColor = (authority: number) => {
    if (authority >= 70) return "text-[#22C55E]";
    if (authority >= 50) return "text-[#4F7CFF]";
    return "text-[#8888A0]";
  };

  return (
    <main className="min-h-screen bg-[#0A0A0F]">
      <Nav />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Link href="/free-tools" className="inline-flex items-center gap-2 text-[#8888A0] hover:text-[#F0F0F5] transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Free Tools
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#EC4899]/15">
                <Search className="w-6 h-6 text-[#EC4899]" />
              </div>
              <h1 className="font-[family-name:var(--font-syne)] font-bold text-3xl md:text-4xl text-[#F0F0F5]">
                Backlink Gap Analyzer
              </h1>
            </div>
            <p className="text-[#8888A0] max-w-2xl">
              Discover which websites link to your competitors but not to you. 
              Identify quick-win link opportunities to close the gap.
            </p>
          </motion.div>

          {/* Input Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-10">
            <div className="p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-sm text-[#8888A0] mb-2">Your Domain *</label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#55556A]" />
                    <input
                      type="text"
                      value={yourDomain}
                      onChange={(e) => setYourDomain(e.target.value)}
                      placeholder="yourdomain.com"
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#0A0A0F] border border-white/[0.06] text-[#F0F0F5] placeholder-[#55556A] focus:outline-none focus:border-[#4F7CFF]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-[#8888A0] mb-2">Competitor 1 *</label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#55556A]" />
                    <input
                      type="text"
                      value={competitor1}
                      onChange={(e) => setCompetitor1(e.target.value)}
                      placeholder="competitor1.com"
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#0A0A0F] border border-white/[0.06] text-[#F0F0F5] placeholder-[#55556A] focus:outline-none focus:border-[#4F7CFF]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-[#8888A0] mb-2">Competitor 2 (optional)</label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#55556A]" />
                    <input
                      type="text"
                      value={competitor2}
                      onChange={(e) => setCompetitor2(e.target.value)}
                      placeholder="competitor2.com"
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#0A0A0F] border border-white/[0.06] text-[#F0F0F5] placeholder-[#55556A] focus:outline-none focus:border-[#4F7CFF]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={analyzeGaps}
                  disabled={!yourDomain || !competitor1 || isAnalyzing}
                  className="flex items-center justify-center gap-2 px-6 py-3 text-white bg-[#4F7CFF] rounded-lg hover:bg-[#3D6AEE] transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Search className="w-5 h-5" />
                      Find Link Gaps
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2 text-sm text-[#55556A]">
                  <AlertCircle className="w-4 h-4" />
                  Free version shows sample results
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          {results && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5]">
                  Found {results.length} Link Opportunities
                </h2>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#22C55E]/10 text-[#22C55E] text-sm">
                    High DR: {results.filter(r => r.authority >= 60).length}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#4F7CFF]/10 text-[#4F7CFF] text-sm">
                    Total: {results.length}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                {results.map((result, index) => (
                  <motion.div
                    key={result.domain}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="p-4 rounded-xl bg-[#111118] border border-white/[0.06] hover:border-white/[0.12] transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`font-[family-name:var(--font-jetbrains-mono)] text-lg font-bold ${getAuthorityColor(result.authority)}`}>
                          DR {result.authority}
                        </div>
                        <div>
                          <h3 className="font-medium text-[#F0F0F5]">{result.domain}</h3>
                          <div className="flex items-center gap-3 text-sm text-[#8888A0]">
                            <span>{result.category}</span>
                            <span>·</span>
                            <span>{result.traffic}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right text-sm">
                          <p className="text-[#55556A]">Links to:</p>
                          <p className="text-[#8888A0]">{result.linkingTo.join(", ")}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-[#55556A]" />
                        <div className="w-24 text-center">
                          <span className="text-sm text-red-400">Not you</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-[#4F7CFF]/10 to-transparent border border-[#4F7CFF]/20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="font-[family-name:var(--font-syne)] font-semibold text-lg text-[#F0F0F5] mb-1">
                      Want us to build these links for you?
                    </h3>
                    <p className="text-sm text-[#8888A0]">
                      Our team can handle the outreach and secure placements on these sites.
                    </p>
                  </div>
                  <Link
                    href="/#pricing"
                    className="shrink-0 px-6 py-3 text-white bg-[#4F7CFF] rounded-lg hover:bg-[#3D6AEE] transition-colors font-medium"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {/* How It Works */}
          {!results && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-12">
              <h2 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-6">How It Works</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { step: "1", title: "Enter Domains", desc: "Add your domain and up to 2 competitor domains" },
                  { step: "2", title: "Analyze Gap", desc: "We find sites linking to competitors but not you" },
                  { step: "3", title: "Build Links", desc: "Prioritize high-authority opportunities and reach out" },
                ].map((item) => (
                  <div key={item.step} className="p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
                    <div className="w-10 h-10 rounded-full bg-[#4F7CFF]/10 flex items-center justify-center mb-4">
                      <span className="font-[family-name:var(--font-jetbrains-mono)] font-bold text-[#4F7CFF]">{item.step}</span>
                    </div>
                    <h3 className="font-[family-name:var(--font-syne)] font-semibold text-[#F0F0F5] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#8888A0]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}
