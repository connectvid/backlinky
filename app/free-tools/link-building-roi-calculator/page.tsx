"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BarChart3, ArrowLeft, DollarSign, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function ROICalculator() {
  const [inputs, setInputs] = useState({
    monthlyLinks: 10,
    avgLinkCost: 200,
    targetKeywordVolume: 1000,
    currentPosition: 15,
    targetPosition: 3,
    conversionRate: 2,
    avgOrderValue: 100,
  });

  const [results, setResults] = useState<{
    monthlyCost: number;
    projectedTraffic: number;
    additionalConversions: number;
    additionalRevenue: number;
    roi: number;
    paybackMonths: number;
  } | null>(null);

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const calculateROI = () => {
    const ctrByPosition: Record<number, number> = {
      1: 0.28, 2: 0.15, 3: 0.11, 4: 0.08, 5: 0.06,
      6: 0.04, 7: 0.03, 8: 0.02, 9: 0.02, 10: 0.015,
      15: 0.005, 20: 0.002,
    };

    const currentCTR = ctrByPosition[inputs.currentPosition] || 0.002;
    const targetCTR = ctrByPosition[inputs.targetPosition] || 0.28;

    const currentTraffic = inputs.targetKeywordVolume * currentCTR;
    const targetTraffic = inputs.targetKeywordVolume * targetCTR;
    const additionalTraffic = Math.max(0, targetTraffic - currentTraffic);

    const authorityMultiplier = 1 + (inputs.monthlyLinks * 0.05);
    const projectedTraffic = Math.round(additionalTraffic * authorityMultiplier * 12);

    const additionalConversions = Math.round((projectedTraffic * inputs.conversionRate) / 100);
    const additionalRevenue = additionalConversions * inputs.avgOrderValue;
    const monthlyCost = inputs.monthlyLinks * inputs.avgLinkCost;
    const annualCost = monthlyCost * 12;
    const roi = annualCost > 0 ? ((additionalRevenue - annualCost) / annualCost) * 100 : 0;
    const paybackMonths = additionalRevenue > 0 ? Math.ceil((annualCost / 12) / (additionalRevenue / 12)) : 0;

    setResults({ monthlyCost, projectedTraffic, additionalConversions, additionalRevenue, roi, paybackMonths });
  };

  const updateInput = (key: string, value: number) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat("en-US").format(value);
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
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#22C55E]/15">
                <BarChart3 className="w-6 h-6 text-[#22C55E]" />
              </div>
              <h1 className="font-[family-name:var(--font-syne)] font-bold text-3xl md:text-4xl text-[#F0F0F5]">
                Link Building ROI Calculator
              </h1>
            </div>
            <p className="text-[#8888A0] max-w-2xl">
              Calculate the potential return on investment from your link building campaign.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="space-y-6">
              <div className="p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
                <h3 className="font-[family-name:var(--font-syne)] font-semibold text-lg text-[#F0F0F5] mb-4">Link Building Investment</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-[#8888A0] mb-2">Links per Month: {inputs.monthlyLinks}</label>
                    <input type="range" min="1" max="50" value={inputs.monthlyLinks} onChange={(e) => updateInput("monthlyLinks", parseInt(e.target.value))} className="w-full accent-[#4F7CFF]" />
                  </div>
                  <div>
                    <label className="block text-sm text-[#8888A0] mb-2">Avg Cost per Link: {formatCurrency(inputs.avgLinkCost)}</label>
                    <input type="range" min="50" max="1000" step="50" value={inputs.avgLinkCost} onChange={(e) => updateInput("avgLinkCost", parseInt(e.target.value))} className="w-full accent-[#4F7CFF]" />
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
                <h3 className="font-[family-name:var(--font-syne)] font-semibold text-lg text-[#F0F0F5] mb-4">Traffic & Rankings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-[#8888A0] mb-2">Target Keyword Volume: {formatNumber(inputs.targetKeywordVolume)}</label>
                    <input type="range" min="100" max="50000" step="100" value={inputs.targetKeywordVolume} onChange={(e) => updateInput("targetKeywordVolume", parseInt(e.target.value))} className="w-full accent-[#22C55E]" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-[#8888A0] mb-2">Current Position</label>
                      <select value={inputs.currentPosition} onChange={(e) => updateInput("currentPosition", parseInt(e.target.value))} className="w-full px-3 py-2 rounded-lg bg-[#0A0A0F] border border-white/[0.06] text-[#F0F0F5]">
                        <option value={20}>#15-20</option>
                        <option value={15}>#11-15</option>
                        <option value={10}>#8-10</option>
                        <option value={7}>#6-7</option>
                        <option value={5}>#4-5</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-[#8888A0] mb-2">Target Position</label>
                      <select value={inputs.targetPosition} onChange={(e) => updateInput("targetPosition", parseInt(e.target.value))} className="w-full px-3 py-2 rounded-lg bg-[#0A0A0F] border border-white/[0.06] text-[#F0F0F5]">
                        <option value={5}>#4-5</option>
                        <option value={3}>#3</option>
                        <option value={2}>#2</option>
                        <option value={1}>#1</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
                <h3 className="font-[family-name:var(--font-syne)] font-semibold text-lg text-[#F0F0F5] mb-4">Business Metrics</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-[#8888A0] mb-2">Conversion Rate: {inputs.conversionRate}%</label>
                    <input type="range" min="0.5" max="10" step="0.5" value={inputs.conversionRate} onChange={(e) => updateInput("conversionRate", parseFloat(e.target.value))} className="w-full accent-[#F59E0B]" />
                  </div>
                  <div>
                    <label className="block text-sm text-[#8888A0] mb-2">Average Order Value: {formatCurrency(inputs.avgOrderValue)}</label>
                    <input type="range" min="10" max="1000" step="10" value={inputs.avgOrderValue} onChange={(e) => updateInput("avgOrderValue", parseInt(e.target.value))} className="w-full accent-[#F59E0B]" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="space-y-6">
              {results && (
                <>
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-[#4F7CFF]/20 to-[#111118] border border-[#4F7CFF]/30">
                    <div className="text-center mb-6">
                      <p className="text-sm text-[#8888A0] mb-2">Projected Annual ROI</p>
                      <p className={`font-[family-name:var(--font-jetbrains-mono)] text-5xl md:text-6xl font-bold ${results.roi >= 0 ? 'text-[#22C55E]' : 'text-red-500'}`}>
                        {results.roi > 0 ? '+' : ''}{results.roi.toFixed(0)}%
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/[0.06]">
                      <div className="text-center">
                        <p className="text-sm text-[#55556A] mb-1">Monthly Cost</p>
                        <p className="font-[family-name:var(--font-jetbrains-mono)] text-xl text-[#F0F0F5]">{formatCurrency(results.monthlyCost)}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-[#55556A] mb-1">Payback Period</p>
                        <p className="font-[family-name:var(--font-jetbrains-mono)] text-xl text-[#F0F0F5]">{results.paybackMonths} months</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-[#111118] border border-white/[0.06]">
                      <p className="text-sm text-[#8888A0]">Additional Annual Traffic</p>
                      <p className="font-[family-name:var(--font-jetbrains-mono)] text-xl text-[#F0F0F5]">{formatNumber(results.projectedTraffic)} visits</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#111118] border border-white/[0.06]">
                      <p className="text-sm text-[#8888A0]">Additional Conversions</p>
                      <p className="font-[family-name:var(--font-jetbrains-mono)] text-xl text-[#F0F0F5]">{formatNumber(results.additionalConversions)} customers</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#111118] border border-white/[0.06]">
                      <p className="text-sm text-[#8888A0]">Additional Annual Revenue</p>
                      <p className="font-[family-name:var(--font-jetbrains-mono)] text-xl text-[#22C55E]">{formatCurrency(results.additionalRevenue)}</p>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
