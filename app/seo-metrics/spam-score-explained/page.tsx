import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, CheckCircle, AlertTriangle, ArrowLeft } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Spam Score Explained: What It Is and When to Worry About It",
  description: "Spam Score identifies 27 link spam flags that can hurt your SEO. Learn how Moz calculates Spam Score, which flags matter most, and how to reduce your score if it's too high.",
};

export default function SpamScoreExplained() {
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
              Spam Score Explained: What It Is and When to Worry About It
            </h1>
            <div className="p-6 rounded-xl bg-[#4F7CFF]/5 border border-[#4F7CFF]/20">
              <p className="text-[#F0F0F5] text-lg">
                <strong>Spam Score</strong> is a Moz metric that measures the percentage of sites with similar features that have been penalized or banned by Google. Scores range from 0% to 100%, with higher percentages indicating greater similarity to known spam sites. Moz identifies 27 different spam flags that contribute to the overall score.
              </p>
            </div>
          </header>
          
          <div className="prose prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-4">What Is Spam Score?</h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Spam Score identifies websites that share characteristics with sites Google has penalized or removed from search results. Developed by Moz's data science team, the metric helps SEO professionals spot potentially problematic sites before they cause ranking issues.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                The score represents a probability, not a certainty. A Spam Score of 20% means that 20% of sites with similar characteristics have received Google penalties—not that your site has a 20% chance of being penalized. The metric serves as a warning flag for further investigation.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Moz developed Spam Score by analyzing 27 different on-page and link-based factors across millions of websites. They identified patterns common among penalized sites and created flags for each pattern. Sites accumulate flags based on how many spam indicators they exhibit.
              </p>
              <p className="text-[#8888A0] leading-relaxed">
                Spam Score integrates directly into Domain Authority calculations. Sites with high Spam Scores receive lower DA scores regardless of their backlink quantity. This integration helps filter out private blog networks and other manipulative link schemes that might otherwise appear authoritative based on link volume alone.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-4">How Is Spam Score Calculated?</h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Moz calculates Spam Score by checking websites against 27 individual spam flags. Each flag triggered adds to the overall score percentage based on its correlation with penalties in Moz's training data.
              </p>
              
              <p className="text-[#F0F0F5] font-semibold mb-2">The 27 spam flags include:</p>
              <ul className="space-y-2 mb-6">
                {[
                  "Low number of pages found (thin site)",
                  "TLD correlated with spam domains (.zip, .review, etc.)",
                  "Domain name length (excessively long or short)",
                  "Numerical characters in domain name",
                  "Google Tag Manager presence (absence flagged)",
                  "Google Analytics presence (absence flagged)",
                  "Multiple hyphens in domain name",
                  "URL length issues",
                  "No contact information",
                  "Low number of branded search queries",
                  "Low site link diversity",
                  "Ratio of followed to nofollowed links (extreme ratios)",
                  "Large site with few external links",
                  "Thin content ratio",
                  "Anchor text-heavy content",
                  "External links in navigation",
                  "No external links (orphan pages)",
                  "High percentage of external links",
                  "Low content-to-code ratio",
                  "Low number of internal links",
                  "External links to low-authority sites",
                  "Large number of external links",
                  "Exact-match anchor text manipulation",
                  "Biased anchor text distribution",
                  "Sitewide link patterns",
                  "Voluminous link exchange patterns",
                  "Co-citation with penalized sites",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-[#4F7CFF] font-mono shrink-0">{idx + 1}.</span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                Not all flags carry equal weight. Some flags—like excessive exact-match anchor text or participation in link exchanges—correlate more strongly with penalties than others. Moz's algorithm weighs flags based on their historical correlation with Google actions.
              </p>
              <p className="text-[#8888A0] leading-relaxed">
                Sites can trigger multiple flags simultaneously. A typical penalized site triggers 5-10 flags. Legitimate sites occasionally trigger 1-2 flags due to benign circumstances, but rarely accumulate enough flags to reach concerning Spam Score levels.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-4">What Spam Flags Should You Watch For?</h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                While all 27 flags contribute to Spam Score, some warrant immediate attention while others may indicate false positives:
              </p>
              
              <div className="overflow-x-auto my-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 text-[#55556A]">Priority</th>
                      <th className="text-left py-3 text-[#55556A]">Spam Flag</th>
                      <th className="text-left py-3 text-[#55556A]">Why It Matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { priority: "High", flag: "Exact-match anchor text", why: "Direct manipulation signal" },
                      { priority: "High", flag: "Link exchange patterns", why: "Scheme participation indicator" },
                      { priority: "High", flag: "Co-citation with penalized sites", why: "Guilt by association" },
                      { priority: "High", flag: "Biased anchor text distribution", why: "Over-optimization signal" },
                      { priority: "Medium", flag: "Low site link diversity", why: "PBN/network indicator" },
                      { priority: "Medium", flag: "Follow/nofollow ratio issues", why: "Link scheme participation" },
                      { priority: "Medium", flag: "Sitewide link patterns", why: "Paid link signature" },
                      { priority: "Low", flag: "No Google Analytics", why: "May indicate false positive" },
                      { priority: "Low", flag: "Domain name length", why: "Many legitimate sites affected" },
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-white/[0.06]">
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded text-xs ${
                            row.priority === "High" ? "bg-red-500/20 text-red-400" :
                            row.priority === "Medium" ? "bg-yellow-500/20 text-yellow-400" :
                            "bg-blue-500/20 text-blue-400"
                          }`}>
                            {row.priority}
                          </span>
                        </td>
                        <td className="py-3 text-[#F0F0F5]">{row.flag}</td>
                        <td className="py-3 text-[#8888A0]">{row.why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                High-priority flags directly indicate manipulative practices. If your site triggers these flags, immediate action is required. Review your backlink profile, anchor text distribution, and link building history to identify problematic patterns.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Medium-priority flags suggest potential issues worth investigating. These may indicate participation in link schemes or PBNs, but could also result from aggressive yet legitimate link building. Analyze context before taking action.
              </p>
              <p className="text-[#8888A0] leading-relaxed">
                Low-priority flags often produce false positives. Many legitimate sites don't use Google Analytics or have domain names that trigger length flags. Don't panic over isolated low-priority flags if your overall Spam Score remains acceptable.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-4">What Is an Acceptable Spam Score?</h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Spam Score interpretation depends on context, but general guidelines apply:
              </p>
              
              <div className="overflow-x-auto my-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 text-[#55556A]">Spam Score</th>
                      <th className="text-left py-3 text-[#55556A]">Assessment</th>
                      <th className="text-left py-3 text-[#55556A]">Recommended Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { score: "0-10%", assessment: "Low risk", action: "No action needed" },
                      { score: "11-30%", assessment: "Moderate risk", action: "Monitor, investigate flags" },
                      { score: "31-60%", assessment: "High risk", action: "Audit and fix issues" },
                      { score: "61-100%", assessment: "Severe risk", action: "Immediate remediation required" },
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-white/[0.06]">
                        <td className="py-3 font-mono text-[#4F7CFF]">{row.score}</td>
                        <td className="py-3 text-[#F0F0F5]">{row.assessment}</td>
                        <td className="py-3 text-[#8888A0]">{row.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                Spam Scores between 0-10% indicate healthy sites with no significant spam signals. Most established websites fall into this range. Scores in this bracket don't guarantee immunity from penalties, but suggest clean link building practices.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Scores of 11-30% warrant investigation but don't necessarily indicate problems. Review which specific flags triggered and determine whether they represent legitimate concerns or false positives. Some legitimate sites score here due to technical configurations or industry-specific patterns.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Scores above 30% indicate serious issues requiring action. Sites in this range share significant characteristics with penalized websites. Without remediation, these sites face elevated penalty risk.
              </p>
              <p className="text-[#8888A0] leading-relaxed">
                When evaluating link prospects, avoid sites with Spam Score above 30%. Links from high-spam sites can transfer negative signals to your domain. Prioritize link opportunities on sites with Spam Score below 15% for safest results.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-4">How to Reduce Spam Score</h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Reducing Spam Score requires addressing the specific flags triggering for your site. Here's a systematic approach:
              </p>

              <p className="text-[#F0F0F5] font-semibold mb-2">Step 1: Identify triggering flags</p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Use Moz's Link Explorer to see which specific spam flags apply to your site. Different flags require different solutions—you can't fix what you haven't identified.
              </p>

              <p className="text-[#F0F0F5] font-semibold mb-2">Step 2: Audit your backlink profile</p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                If link-based flags triggered, conduct a thorough <Link href="/seo-metrics/backlink-profile-analysis" className="text-[#4F7CFF] hover:underline">backlink audit</Link>. Identify low-quality links, exact-match anchor text patterns, and potential PBN participation. Use our free tools to analyze anchor text distribution and referring domain quality.
              </p>

              <p className="text-[#F0F0F5] font-semibold mb-2">Step 3: Disavow toxic links</p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Create a disavow file containing URLs and domains of clearly manipulative links. Submit through Google Search Console. Be conservative—only disavow links you're confident are harmful. Over-disavowing can hurt your rankings.
              </p>

              <p className="text-[#F0F0F5] font-semibold mb-2">Step 4: Diversify anchor text</p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                If anchor text flags triggered, shift your link building toward branded and natural anchors. Target 50%+ branded anchors, 30% natural phrases, and maximum 20% exact-match keywords. This distribution appears natural to algorithms.
              </p>

              <p className="text-[#F0F0F5] font-semibold mb-2">Step 5: Fix on-page issues</p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Address on-page flags by adding contact information, improving content depth, and ensuring proper internal linking. Install Google Analytics if missing—the absence flag may be benign, but installation removes the trigger.
              </p>

              <p className="text-[#F0F0F5] font-semibold mb-2">Step 6: Build high-quality links</p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Offset spam signals by earning editorial links from trusted sources. High-quality links from reputable sites demonstrate legitimate authority and can counterbalance lower-quality historical links.
              </p>

              <p className="text-[#8888A0] leading-relaxed">
                Spam Score updates as Moz refreshes their index, typically monthly. Expect 2-3 months to see significant improvements after implementing changes. Monitor your score regularly to track progress.
              </p>
            </section>

            <div className="p-6 rounded-xl bg-gradient-to-r from-[#4F7CFF]/10 to-transparent border border-[#4F7CFF]/20 mb-12">
              <h3 className="font-semibold text-[#F0F0F5] mb-2">Worried About Your Spam Score?</h3>
              <p className="text-[#8888A0] mb-4">We offer free backlink audits to identify spam issues and create remediation plans. Our link building focuses on clean, editorial links that build lasting authority.</p>
              <Link href="/#audit" className="inline-flex items-center gap-2 text-[#4F7CFF]">
                Get a Free Backlink Audit <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-4">Related Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/seo-metrics/backlink-profile-analysis" className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-[#4F7CFF]/30 transition-colors">
                  <h4 className="text-[#F0F0F5] font-medium mb-1">Backlink Profile Analysis</h4>
                  <p className="text-sm text-[#8888A0]">Complete guide to auditing your backlinks and identifying spam.</p>
                </Link>
                <Link href="/seo-metrics/natural-link-profile" className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-[#4F7CFF]/30 transition-colors">
                  <h4 className="text-[#F0F0F5] font-medium mb-1">Natural Link Profile</h4>
                  <p className="text-sm text-[#8888A0]">What natural anchor text and link patterns look like.</p>
                </Link>
                <Link href="/free-tools/backlink-anchor-text-analyzer" className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-[#4F7CFF]/30 transition-colors">
                  <h4 className="text-[#F0F0F5] font-medium mb-1">Anchor Text Analyzer</h4>
                  <p className="text-sm text-[#8888A0]">Free tool to check your anchor text distribution.</p>
                </Link>
                <Link href="/seo-metrics/trust-flow-explained" className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-[#4F7CFF]/30 transition-colors">
                  <h4 className="text-[#F0F0F5] font-medium mb-1">Trust Flow Explained</h4>
                  <p className="text-sm text-[#8888A0]">How Trust Flow complements spam detection.</p>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
