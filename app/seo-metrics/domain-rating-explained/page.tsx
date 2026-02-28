import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, CheckCircle, AlertCircle, ArrowLeft } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Domain Rating (DR) Explained: What It Is, How It's Calculated, What's Good",
  description: "Domain Rating (DR) is a metric developed by Ahrefs that shows the relative strength of a website's backlink profile. Learn how it's calculated and what's a good DR score.",
};

export default function DomainRatingExplained() {
  return (
    <main className="min-h-screen bg-[#0A0A0F]">
      <Nav />
      <article className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/seo-metrics" className="inline-flex items-center gap-2 text-[#8888A0] hover:text-[#F0F0F5] transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to SEO Metrics
          </Link>
          <header className="mb-12">
            <div className="flex items-center gap-2 text-sm text-[#4F7CFF] mb-4">
              <BarChart3 className="w-4 h-4" />
              <span>SEO Metrics</span>
            </div>
            <h1 className="font-[family-name:var(--font-syne)] font-bold text-3xl md:text-4xl text-[#F0F0F5] mb-6">
              Domain Rating (DR) Explained
            </h1>
            <div className="p-6 rounded-xl bg-[#4F7CFF]/5 border border-[#4F7CFF]/20">
              <p className="text-[#F0F0F5] text-lg">
                <strong>Domain Rating (DR)</strong> is a metric developed by Ahrefs that measures the strength 
                of a website's backlink profile on a logarithmic scale from 0 to 100. Higher DR indicates 
                stronger backlink authority, with DR 50+ generally considered good for most industries.
              </p>
            </div>
          </header>
          <div className="prose prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-4">What Is Domain Rating?</h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Domain Rating (DR) is a proprietary metric developed by Ahrefs that measures the relative 
                strength of a website's backlink profile compared to all other websites in their database. 
                The score ranges from 0 to 100 on a logarithmic scale.
              </p>
            </section>
            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-4">How Is Domain Rating Calculated?</h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Ahrefs calculates Domain Rating using a complex algorithm that considers several factors:
              </p>
              <ul className="space-y-2">
                {["Number of referring domains", "Authority of referring domains", "Dofollow vs nofollow ratio", "Link distribution across pages"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[#8888A0]">
                    <CheckCircle className="w-5 h-5 text-[#22C55E] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-4">What Is a Good Domain Rating?</h2>
              <div className="overflow-x-auto my-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 text-[#55556A]">DR Range</th>
                      <th className="text-left py-3 text-[#55556A]">Assessment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { dr: "0-20", assessment: "New site" },
                      { dr: "20-40", assessment: "Growing site" },
                      { dr: "40-60", assessment: "Good authority" },
                      { dr: "60-80", assessment: "High authority" },
                      { dr: "80-100", assessment: "Elite authority" },
                    ].map((row) => (
                      <tr key={row.dr} className="border-b border-white/[0.06]">
                        <td className="py-3 font-mono text-[#4F7CFF]">{row.dr}</td>
                        <td className="py-3 text-[#F0F0F5]">{row.assessment}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            <div className="p-6 rounded-xl bg-gradient-to-r from-[#4F7CFF]/10 to-transparent border border-[#4F7CFF]/20">
              <h3 className="font-semibold text-[#F0F0F5] mb-2">Need Help Improving Your DR?</h3>
              <p className="text-[#8888A0] mb-4">We build DR 40+ backlinks for SaaS companies.</p>
              <Link href="/#pricing" className="inline-flex items-center gap-2 text-[#4F7CFF]">
                View Our Link Building Packages <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
