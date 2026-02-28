import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Anchor Text: The Complete Guide to Ratios, Types & SEO Impact",
  description:
    "Master anchor text optimization for SEO. Learn the ideal ratios, types of anchor text, and how to avoid over-optimization penalties.",
  keywords: [
    "anchor text",
    "anchor text optimization",
    "anchor text ratio",
    "exact match anchor",
    "branded anchor text",
    "anchor text distribution",
    "SEO anchor text",
  ],
  alternates: {
    canonical: "/link-building-guide/anchor-text-guide/",
  },
};

export default function AnchorTextGuidePage() {
  return (
    <main className="min-h-screen bg-[#0A0A0F]">
      <Nav />

      <article className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 text-sm text-[#4F7CFF] mb-4">
              <span>Link Building Guide</span>
              <span className="text-[#55556A]">·</span>
              <span className="text-[#55556A]">Updated January 2025</span>
            </div>
            <h1 className="font-[family-name:var(--font-syne)] font-bold text-3xl md:text-4xl lg:text-5xl text-[#F0F0F5] mb-6 leading-tight">
              Anchor Text: The Complete Guide to Ratios, Types & SEO Impact
            </h1>
            <p className="text-lg text-[#8888A0] leading-relaxed">
              Anchor text optimization separates successful link building campaigns from Penguin 
              penalties. Learn the exact ratios and strategies that drive rankings safely.
            </p>
          </header>

          {/* Featured Snippet */}
          <div className="p-6 rounded-xl bg-[#4F7CFF]/10 border border-[#4F7CFF]/30 mb-10">
            <p className="text-[#F0F0F5] leading-relaxed">
              <strong>Anchor text</strong> is the clickable text of a hyperlink that tells search engines 
              and users what the linked page is about. A healthy backlink profile maintains 40-50% 
              branded anchors (your company name), 15-25% naked URLs, 10-15% generic phrases ("click here"), 
              10-20% partial match keywords, and under 5% exact match keywords. Exceeding 10% exact 
              match anchor text triggers over-optimization penalties. Natural variation across all 
              anchor types signals authentic link acquisition to Google's algorithms.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-16">
            {/* Section 1 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What is anchor text?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Anchor text is the visible, clickable text in a hyperlink. In HTML, it appears between 
                the opening and closing anchor tags: &lt;a href="URL"&gt;anchor text&lt;/a&gt;. Search 
                engines use anchor text to understand the content and context of the destination page.
              </p>
              
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Google's original PageRank algorithm heavily weighted anchor text. When many sites 
                linked to a page using "best running shoes" as anchor text, Google concluded that page 
                should rank for that query. This led to manipulation through exact-match anchor text 
                schemes.
              </p>

              <p className="text-[#8888A0] leading-relaxed mb-6">
                Modern anchor text signals:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Relevance: Anchor text indicates topical relationship between linking and linked pages",
                  "Context: Surrounding text provides semantic context beyond the anchor itself",
                  "Authority: Links from diverse, authoritative sites with varied anchors signal legitimacy",
                  "Natural patterns: Over-optimization creates detectable manipulation patterns",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-[#4F7CFF] mt-1">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[#8888A0] leading-relaxed">
                Anchor text remains a significant ranking factor, but its manipulation carries severe 
                penalties through Google's Penguin algorithm.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What are the types of anchor text?
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Understanding anchor text categories helps you build a natural, diverse profile. Each 
                type serves different purposes in a healthy backlink portfolio.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-2">1. Branded Anchors</h3>
                  <p className="text-[#8888A0] text-sm mb-2">Your brand name or variations.</p>
                  <p className="text-sm text-[#55556A]">Examples: "Backlinky", "Backlinky.io", "the Backlinky team"</p>
                  <p className="text-sm text-green-400 mt-2">Target: 40-50% of your profile</p>
                </div>

                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-2">2. Naked URLs</h3>
                  <p className="text-[#8888A0] text-sm mb-2">Raw URL without anchor text.</p>
                  <p className="text-sm text-[#55556A]">Examples: "https://backlinky.io", "backlinky.io", "www.backlinky.io"</p>
                  <p className="text-sm text-green-400 mt-2">Target: 15-25% of your profile</p>
                </div>

                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-2">3. Generic Anchors</h3>
                  <p className="text-[#8888A0] text-sm mb-2">Non-descriptive phrases.</p>
                  <p className="text-sm text-[#55556A]">Examples: "click here", "read more", "this website", "learn more"</p>
                  <p className="text-sm text-green-400 mt-2">Target: 10-15% of your profile</p>
                </div>

                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-2">4. Partial Match (LSI)</h3>
                  <p className="text-[#8888A0] text-sm mb-2">Contains target keyword with other words.</p>
                  <p className="text-sm text-[#55556A]">Examples: "professional link building services", "guide to link building"</p>
                  <p className="text-sm text-green-400 mt-2">Target: 10-20% of your profile</p>
                </div>

                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-2">5. Exact Match</h3>
                  <p className="text-[#8888A0] text-sm mb-2">Precise keyword you're targeting.</p>
                  <p className="text-sm text-[#55556A]">Examples: "link building services", "SEO agency", "best CRM software"</p>
                  <p className="text-sm text-orange-400 mt-2">Target: 1-5% of your profile (high risk)</p>
                </div>

                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-2">6. Image Anchors</h3>
                  <p className="text-[#8888A0] text-sm mb-2">Images linking with alt text as anchor.</p>
                  <p className="text-sm text-[#55556A]">Alt text functions as anchor: "backlinky-logo.jpg"</p>
                  <p className="text-sm text-green-400 mt-2">Target: 1-5% of your profile</p>
                </div>
              </div>

              <p className="text-[#8888A0] leading-relaxed">
                <Link href="/free-tools/backlink-anchor-text-analyzer/" className="text-[#4F7CFF] hover:underline">
                  Analyze your current anchor text distribution →
                </Link>
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What is the ideal anchor text distribution?
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Natural backlink profiles follow predictable patterns. Deviating significantly from 
                these benchmarks triggers algorithmic scrutiny.
              </p>

              <p className="text-[#8888A0] leading-relaxed mb-6">
                Recommended anchor text ratios:
              </p>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 text-[#55556A] font-normal">Anchor Type</th>
                      <th className="text-center py-3 text-[#55556A] font-normal">Target %</th>
                      <th className="text-center py-3 text-[#55556A] font-normal">Safe Range</th>
                      <th className="text-left py-3 text-[#55556A] font-normal">Warning Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { type: "Branded", target: "45%", range: "40-50%", warning: "&lt;30% or &gt;60%" },
                      { type: "Naked URL", target: "20%", range: "15-25%", warning: "&lt;10% or &gt;35%" },
                      { type: "Generic", target: "12%", range: "10-15%", warning: "&lt;5% or &gt;25%" },
                      { type: "Partial Match", target: "15%", range: "10-20%", warning: "&gt;30%" },
                      { type: "Exact Match", target: "3%", range: "1-5%", warning: "&gt;10%" },
                      { type: "Image/Other", target: "5%", range: "1-10%", warning: "&gt;15%" },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-white/[0.06]">
                        <td className="py-3 text-[#F0F0F5]">{row.type}</td>
                        <td className="py-3 text-center text-[#4F7CFF]">{row.target}</td>
                        <td className="py-3 text-center text-[#8888A0]">{row.range}</td>
                        <td className="py-3 text-[#8888A0]">{row.warning}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                Industry-specific variations:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Local businesses: Higher branded anchors (50-60%) due to citation building",
                  "Affiliate sites: Lower exact match tolerance due to higher scrutiny",
                  "B2B SaaS: Moderate partial match acceptable for product-related content",
                  "E-commerce: Focus on product name anchors over commercial keywords",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-[#4F7CFF] mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[#8888A0] leading-relaxed">
                Audit your anchor text monthly. Sudden shifts in distribution indicate potential 
                issues requiring investigation.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                Can you over-optimize anchor text?
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Yes. Over-optimized anchor text is one of the most common causes of link-based penalties. 
                Google's Penguin algorithm specifically targets sites with unnatural anchor patterns.
              </p>

              <p className="text-[#8888A0] leading-relaxed mb-6">
                Over-optimization warning signs:
              </p>
              
              <div className="space-y-4 mb-6">
                {[
                  { sign: "Exact Match Exceeds 10%", desc: "More than 1 in 10 links uses precise keyword match. Natural profiles rarely exceed 5%." },
                  { sign: "Identical Anchors in Bulk", desc: "Dozens of links use the exact same anchor text word-for-word." },
                  { sign: "Commercial Keyword Dominance", desc: "Anchor text focuses heavily on money keywords rather than brand or natural phrases." },
                  { sign: "Missing Branded Anchors", desc: "Less than 30% branded anchors suggests manipulation." },
                  { sign: "Sudden Distribution Shifts", desc: "Anchor profile changes dramatically over short periods." },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                    <h4 className="font-semibold text-red-400 mb-1">{item.sign}</h4>
                    <p className="text-sm text-[#8888A0]">{item.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                Penalty consequences:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Algorithmic suppression: Rankings drop for over-optimized keywords",
                  "Penguin penalty: Site-wide or partial ranking decreases",
                  "Manual action: 'Unnatural links' notice in Google Search Console",
                  "Recovery time: 3-12 months after cleanup and disavowal",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-orange-400 mt-1">⚠</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[#8888A0] leading-relaxed">
                <Link href="/link-building-guide/google-penguin-update/" className="text-[#4F7CFF] hover:underline">
                  Learn about Penguin penalties and recovery →
                </Link>
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                How to plan anchor text for a campaign?
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Strategic anchor text planning prevents over-optimization while maximizing relevance 
                signals. Plan your distribution before starting link acquisition.
              </p>

              <p className="text-[#8888A0] leading-relaxed mb-6">
                Campaign planning process:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-3">Step 1: Audit Current Distribution</h3>
                  <p className="text-[#8888A0] text-sm">
                    Use Ahrefs, SEMrush, or our free analyzer to determine your current anchor ratios. 
                    Identify gaps between your profile and target distribution.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-3">Step 2: Define Target Keywords</h3>
                  <p className="text-[#8888A0] text-sm">
                    Select 3-5 primary keywords for exact/partial match anchors. Don't optimize every 
                    link—most should use branded or generic anchors.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-3">Step 3: Calculate Needed Anchors</h3>
                  <p className="text-[#8888A0] text-sm">
                    If building 50 links and targeting 3% exact match, plan 1-2 exact match anchors 
                    total. The remaining 48-49 links use other anchor types.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-3">Step 4: Create Anchor Variations</h3>
                  <p className="text-[#8888A0] text-sm">
                    Prepare multiple variations for each anchor type:
                  </p>
                  <ul className="mt-2 space-y-1 text-[#8888A0] text-sm">
                    <li>• Branded: "Backlinky", "Backlinky.io", "the Backlinky team"</li>
                    <li>• Partial match: "link building by Backlinky", "Backlinky's link services"</li>
                    <li>• Generic: "learn more", "this guide", "read the article"</li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-3">Step 5: Track and Adjust</h3>
                  <p className="text-[#8888A0] text-sm">
                    Monitor anchor distribution as you build links. Adjust if any category exceeds 
                    safe thresholds.
                  </p>
                </div>
              </div>

              <p className="text-[#8888A0] leading-relaxed">
                Plan for variance. Not every link will use your preferred anchor—site owners often 
                change suggested anchors. Build flexibility into your campaign.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                Anchor text best practices
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Follow these guidelines for safe, effective anchor text optimization:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  { title: "Prioritize Context", desc: "Surrounding text matters as much as anchor text. Ensure the paragraph supports the link topic." },
                  { title: "Vary Branded Anchors", desc: "Use brand name, domain, and variations. Don't repeat identical branded anchors." },
                  { title: "Limit Exact Match", desc: "Reserve exact match for your highest-authority links only. Never exceed 5% total." },
                  { title: "Use Natural Phrases", desc: "Write anchor text that fits conversational English. Avoid awkward keyword stuffing." },
                  { title: "Don't Control Everything", desc: "Let site owners choose anchors for most links. Forced anchors look manipulated." },
                  { title: "Monitor Competitors", desc: "Analyze competitor anchor profiles. Match their distribution, not exceed it." },
                  { title: "Avoid Surrounding Spam", desc: "Links embedded in spun or low-quality content hurt regardless of anchor." },
                  { title: "Update Old Links", desc: "If historical links use over-optimized anchors, contact sites to request changes." },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-lg bg-green-500/5 border border-green-500/20">
                    <h4 className="font-semibold text-green-400 mb-1">{item.title}</h4>
                    <p className="text-sm text-[#8888A0]">{item.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                Red flags to avoid:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Requesting specific anchor text from multiple sites simultaneously",
                  "Using identical anchors across guest posts on different sites",
                  "Creating pages specifically to target exact match anchor variations",
                  "Building links only to commercial pages with money keyword anchors",
                  "Ignoring anchor text diversity in favor of keyword optimization",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-red-400 mt-1">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[#8888A0] leading-relaxed">
                Natural link building produces natural anchor text. Focus on earning quality links 
                from relevant sites, and anchor diversity follows automatically.
              </p>
            </section>
          </div>

          {/* Summary Box */}
          <div className="mt-16 p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
            <h3 className="font-[family-name:var(--font-syne)] font-bold text-lg text-[#F0F0F5] mb-4">
              Anchor Text Quick Reference
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-[#22C55E] font-semibold mb-2">Target Distribution</h4>
                <ul className="space-y-1 text-sm text-[#8888A0]">
                  <li>Branded: 40-50%</li>
                  <li>Naked URLs: 15-25%</li>
                  <li>Generic: 10-15%</li>
                  <li>Partial Match: 10-20%</li>
                  <li>Exact Match: 1-5%</li>
                </ul>
              </div>
              <div>
                <h4 className="text-red-400 font-semibold mb-2">Danger Thresholds</h4>
                <ul className="space-y-1 text-sm text-[#8888A0]">
                  <li>Exact match &gt;10%</li>
                  <li>Branded &lt;30%</li>
                  <li>Commercial anchors dominant</li>
                  <li>Identical anchors repeated</li>
                  <li>Sudden distribution shifts</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-8 p-8 rounded-2xl bg-gradient-to-r from-[#4F7CFF]/20 to-[#4F7CFF]/5 border border-[#4F7CFF]/30">
            <h3 className="font-[family-name:var(--font-syne)] font-bold text-xl text-[#F0F0F5] mb-4">
              Optimize Your Anchor Text Profile
            </h3>
            <p className="text-[#8888A0] mb-6">
              Backlinky builds links with natural, diverse anchor text that avoids over-optimization 
              penalties. We track your anchor distribution and adjust our approach to maintain the 
              ideal ratios for safe, sustainable rankings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#pricing"
                className="inline-flex items-center justify-center px-6 py-3 text-white bg-[#4F7CFF] rounded-lg hover:bg-[#3D6AEE] transition-colors font-medium"
              >
                View Link Building Services
              </Link>
              <Link
                href="/free-tools/backlink-anchor-text-analyzer/"
                className="inline-flex items-center justify-center px-6 py-3 text-[#F0F0F5] border border-white/20 rounded-lg hover:bg-white/5 transition-colors"
              >
                Try Our Free Anchor Text Analyzer →
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
