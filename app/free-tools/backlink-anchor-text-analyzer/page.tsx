"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Link2, ArrowLeft, Upload, AlertTriangle, CheckCircle, PieChart } from "lucide-react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

interface AnchorTextData {
  text: string;
  count: number;
  type: "exact" | "partial" | "branded" | "generic" | "naked";
}

export default function AnchorTextAnalyzer() {
  const [input, setInput] = useState("");
  const [brandName, setBrandName] = useState("");
  const [results, setResults] = useState<{
    total: number;
    distribution: Record<string, number>;
    byType: Record<string, number>;
    details: AnchorTextData[];
    risk: "low" | "medium" | "high";
  } | null>(null);

  const analyzeAnchors = () => {
    if (!input.trim()) return;

    const anchors = input
      .split("\n")
      .map((a) => a.trim())
      .filter((a) => a.length > 0);

    const counts: Record<string, number> = {};
    anchors.forEach((anchor) => {
      counts[anchor] = (counts[anchor] || 0) + 1;
    });

    // Categorize anchor texts
    let exact = 0;
    let partial = 0;
    let branded = 0;
    let generic = 0;
    let naked = 0;

    const details: AnchorTextData[] = [];

    Object.entries(counts).forEach(([text, count]) => {
      const lower = text.toLowerCase();
      let type: AnchorTextData["type"] = "generic";

      if (lower.includes("http") || lower.includes("www")) {
        naked++;
        type = "naked";
      } else if (
        ["click here", "read more", "learn more", "here", "link", "website"].some((g) =>
          lower.includes(g)
        )
      ) {
        generic++;
        type = "generic";
      } else if (brandName && lower.includes(brandName.toLowerCase())) {
        branded++;
        type = "branded";
      } else if (lower.split(" ").length <= 2) {
        exact++;
        type = "exact";
      } else {
        partial++;
        type = "partial";
      }

      details.push({ text, count, type });
    });

    const total = anchors.length;
    const byType = { exact, partial, branded, generic, naked };

    // Calculate risk
    const exactRatio = exact / total;
    const risk = exactRatio > 0.3 ? "high" : exactRatio > 0.15 ? "medium" : "low";

    setResults({
      total,
      distribution: counts,
      byType,
      details: details.sort((a, b) => b.count - a.count).slice(0, 20),
      risk,
    });
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "high":
        return "text-red-500 bg-red-500/10 border-red-500/20";
      case "medium":
        return "text-yellow-500 bg-yellow-500/10 border-yellow-500/20";
      default:
        return "text-green-500 bg-green-500/10 border-green-500/20";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "exact":
        return "text-red-400";
      case "partial":
        return "text-yellow-400";
      case "branded":
        return "text-blue-400";
      case "naked":
        return "text-purple-400";
      default:
        return "text-gray-400";
    }
  };

  return (
    <main className="min-h-screen bg-[#0A0A0F]">
      <Nav />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/free-tools"
              className="inline-flex items-center gap-2 text-[#8888A0] hover:text-[#F0F0F5] transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Free Tools
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#4F7CFF]/15">
                <Link2 className="w-6 h-6 text-[#4F7CFF]" />
              </div>
              <h1 className="font-[family-name:var(--font-syne)] font-bold text-3xl md:text-4xl text-[#F0F0F5]">
                Anchor Text Analyzer
              </h1>
            </div>
            <p className="text-[#8888A0] max-w-2xl">
              Paste your backlink anchor texts to analyze distribution, identify over-optimization risks, 
              and get recommendations for a natural link profile.
            </p>
          </motion.div>

          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid md:grid-cols-3 gap-6 mb-8"
          >
            <div className="md:col-span-2">
              <label className="block text-sm text-[#8888A0] mb-2">
                Paste your anchor texts (one per line)
              </label>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="e.g.&#10;best seo tools&#10;click here&#10;backlinky.io&#10;link building guide&#10;..."
                className="w-full h-64 px-4 py-3 rounded-xl bg-[#111118] border border-white/[0.06] text-[#F0F0F5] placeholder-[#55556A] focus:outline-none focus:border-[#4F7CFF] transition-colors resize-none font-mono text-sm"
              />
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-[#8888A0] mb-2">
                  Your Brand Name (optional)
                </label>
                <input
                  type="text"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  placeholder="e.g. Backlinky"
                  className="w-full px-4 py-3 rounded-xl bg-[#111118] border border-white/[0.06] text-[#F0F0F5] placeholder-[#55556A] focus:outline-none focus:border-[#4F7CFF] transition-colors"
                />
              </div>
              <button
                onClick={analyzeAnchors}
                disabled={!input.trim()}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 text-white bg-[#4F7CFF] rounded-xl hover:bg-[#3D6AEE] transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                <PieChart className="w-5 h-5" />
                Analyze Anchors
              </button>
              <p className="text-xs text-[#55556A]">
                Paste one anchor text per line. We don't store your data — analysis happens in your browser.
              </p>
            </div>
          </motion.div>

          {/* Results */}
          {results && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Risk Alert */}
              <div
                className={`p-4 rounded-xl border ${getRiskColor(
                  results.risk
                )}`}
              >
                <div className="flex items-start gap-3">
                  {results.risk === "low" ? (
                    <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <h3 className="font-semibold mb-1">
                      {results.risk === "low"
                        ? "Healthy Anchor Text Profile"
                        : results.risk === "medium"
                        ? "Moderate Over-Optimization Risk"
                        : "High Over-Optimization Risk Detected"}
                    </h3>
                    <p className="text-sm opacity-80">
                      {results.risk === "low"
                        ? "Your anchor text distribution looks natural. Keep up the diverse link building!"
                        : results.risk === "medium"
                        ? "Consider diversifying with more branded and generic anchors."
                        : "You have too many exact match anchors. This could trigger a Penguin penalty."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {Object.entries(results.byType).map(([type, count]) => (
                  <div
                    key={type}
                    className="p-4 rounded-xl bg-[#111118] border border-white/[0.06] text-center"
                  >
                    <p className="font-[family-name:var(--font-jetbrains-mono)] text-2xl text-[#F0F0F5] mb-1">
                      {count}
                    </p>
                    <p className="text-xs text-[#55556A] uppercase">{type}</p>
                    <p className="text-sm text-[#8888A0]">
                      {((count / results.total) * 100).toFixed(1)}%
                    </p>
                  </div>
                ))}
              </div>

              {/* Recommended Ratios */}
              <div className="p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
                <h3 className="font-[family-name:var(--font-syne)] font-semibold text-lg text-[#F0F0F5] mb-4">
                  Recommended Distribution
                </h3>
                <div className="grid md:grid-cols-5 gap-4 text-center">
                  {[
                    { type: "Branded", ideal: "40-50%", current: ((results.byType.branded / results.total) * 100).toFixed(1) + "%" },
                    { type: "Generic", ideal: "20-30%", current: ((results.byType.generic / results.total) * 100).toFixed(1) + "%" },
                    { type: "Naked URL", ideal: "10-20%", current: ((results.byType.naked / results.total) * 100).toFixed(1) + "%" },
                    { type: "Partial", ideal: "10-20%", current: ((results.byType.partial / results.total) * 100).toFixed(1) + "%" },
                    { type: "Exact", ideal: "< 10%", current: ((results.byType.exact / results.total) * 100).toFixed(1) + "%", warning: true },
                  ].map((item) => (
                    <div key={item.type}>
                      <p className="text-sm text-[#55556A] mb-1">{item.type}</p>
                      <p className="text-sm text-[#22C55E] mb-1">Target: {item.ideal}</p>
                      <p className={`font-[family-name:var(--font-jetbrains-mono)] ${item.warning && parseFloat(item.current) > 10 ? 'text-red-400' : 'text-[#F0F0F5]'}`}>
                        {item.current}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Breakdown */}
              <div className="p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
                <h3 className="font-[family-name:var(--font-syne)] font-semibold text-lg text-[#F0F0F5] mb-4">
                  Top Anchor Texts
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/[0.06]">
                        <th className="text-left py-3 text-sm text-[#55556A] font-normal">Anchor Text</th>
                        <th className="text-left py-3 text-sm text-[#55556A] font-normal">Type</th>
                        <th className="text-right py-3 text-sm text-[#55556A] font-normal">Count</th>
                        <th className="text-right py-3 text-sm text-[#55556A] font-normal">%</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.details.map((item, index) => (
                        <tr key={index} className="border-b border-white/[0.06] last:border-0">
                          <td className="py-3 text-[#F0F0F5] font-mono text-sm max-w-xs truncate">
                            {item.text || "(empty)"}
                          </td>
                          <td className={`py-3 text-sm capitalize ${getTypeColor(item.type)}`}>
                            {item.type}
                          </td>
                          <td className="py-3 text-right font-[family-name:var(--font-jetbrains-mono)] text-[#F0F0F5]">
                            {item.count}
                          </td>
                          <td className="py-3 text-right text-[#8888A0]">
                            {((item.count / results.total) * 100).toFixed(1)}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
