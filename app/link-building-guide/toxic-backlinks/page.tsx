import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Toxic Backlinks: How to Find and Remove Them (2025)",
  description:
    "Learn to identify toxic backlinks that harm your SEO. Discover the best tools and methods to remove harmful links and protect your rankings.",
  keywords: [
    "toxic backlinks",
    "bad backlinks",
    "harmful links",
    "remove toxic links",
    "backlink cleanup",
    "spam backlinks",
    "negative SEO",
  ],
  alternates: {
    canonical: "/link-building-guide/toxic-backlinks/",
  },
};

export default function ToxicBacklinksPage() {
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
              Toxic Backlinks: How to Find and Remove Them (2025)
            </h1>
            <p className="text-lg text-[#8888A0] leading-relaxed">
              Toxic backlinks can destroy years of SEO progress in weeks. Learn to identify, remove, 
              and defend against harmful links before they impact your rankings.
            </p>
          </header>

          {/* Featured Snippet */}
          <div className="p-6 rounded-xl bg-[#4F7CFF]/10 border border-[#4F7CFF]/30 mb-10">
            <p className="text-[#F0F0F5] leading-relaxed">
              <strong>Toxic backlinks</strong> are links from spammy, low-quality, or penalized websites 
              that negatively impact your search rankings. These include links from private blog networks 
              (PBNs), link farms, malware-infected sites, and completely irrelevant foreign language 
              domains. While Google's algorithms increasingly ignore low-quality links automatically, 
              systematic toxic link patterns can still trigger manual actions or algorithmic penalties. 
              Regular backlink audits every 30-90 days catch toxic links before they cause damage.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-16">
            {/* Section 1 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What are toxic backlinks?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Toxic backlinks are links from websites that violate Google's Webmaster Guidelines 
                or exhibit characteristics associated with link spam. These links signal manipulation 
                rather than genuine editorial endorsement.
              </p>
              
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Categories of toxic backlinks:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  { type: "PBN Links", desc: "Links from private blog networks—sites built solely to sell links" },
                  { type: "Link Farm Links", desc: "Directories or networks existing only to cross-link between members" },
                  { type: "Spam Directory Links", desc: "Low-quality directories accepting any submission without review" },
                  { type: "Automated Links", desc: "Links created by software—blog comments, forum spam, wiki spam" },
                  { type: "Foreign Language Spam", desc: "Links from unrelated language sites (e.g., Russian links to an English site)" },
                  { type: "Malware/Hacked Links", desc: "Links from compromised or malicious websites" },
                  { type: "Irrelevant Niche Links", desc: "Links from completely unrelated industries (adult, pharma, gambling)" },
                  { type: "Deindexed Site Links", desc: "Links from sites removed from Google's index" },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                    <h4 className="font-semibold text-red-400 mb-1">{item.type}</h4>
                    <p className="text-sm text-[#8888A0]">{item.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#8888A0] leading-relaxed">
                Not all low-quality links are toxic. A few links from mediocre sites won't hurt you—Google 
                expects and ignores these. Toxicity emerges from patterns: dozens or hundreds of 
                manipulative links forming a clear footprint.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                How to identify toxic backlinks?
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Systematic evaluation using multiple criteria separates truly toxic links from merely 
                low-quality ones. Apply these checks consistently:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-3">1. Check Domain Authority/DR</h3>
                  <p className="text-[#8888A0] text-sm mb-2">
                    Sites with DR/DA below 10 that link to hundreds of other sites are likely link farms.
                  </p>
                  <p className="text-sm text-[#55556A]">
                    Red flag: DR &lt; 10 + 1000+ outbound links
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-3">2. Verify Organic Traffic</h3>
                  <p className="text-[#8888A0] text-sm mb-2">
                    Real websites have organic traffic. Sites with zero traffic despite existing for 
                    years are likely spam.
                  </p>
                  <p className="text-sm text-[#55556A]">
                    Red flag: 0 organic traffic + domain age &gt; 1 year
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-3">3. Review Content Quality</h3>
                  <p className="text-[#8888A0] text-sm mb-2">
                    Visit linking pages. Spun content, nonsensical text, or scraped articles indicate 
                    spam sites.
                  </p>
                  <p className="text-sm text-[#55556A]">
                    Red flag: Grammatically broken text, stolen content, keyword stuffing
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-3">4. Check Index Status</h3>
                  <p className="text-[#8888A0] text-sm mb-2">
                    Search "site:domain.com" in Google. If the site isn't indexed, Google has likely 
                    deindexed it for spam.
                  </p>
                  <p className="text-sm text-[#55556A]">
                    Red flag: "site:" search returns no results
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-3">5. Analyze Anchor Text</h3>
                  <p className="text-[#8888A0] text-sm mb-2">
                    Bulk exact-match commercial anchors from multiple sites suggest coordinated manipulation.
                  </p>
                  <p className="text-sm text-[#55556A]">
                    Red flag: 10+ sites using identical exact-match anchors
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-3">6. Check Relevance</h3>
                  <p className="text-[#8888A0] text-sm mb-2">
                    Links from completely unrelated niches (adult sites linking to B2B SaaS) are suspicious.
                  </p>
                  <p className="text-sm text-[#55556A]">
                    Red flag: Links from porn, pharma, gambling, or unrelated foreign language sites
                  </p>
                </div>
              </div>

              <p className="text-[#8888A0] leading-relaxed">
                Apply multiple criteria, not just one. A low-DR site with good traffic and relevant 
                content may be legitimate. A site meeting several red flags is almost certainly toxic.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What tools detect toxic links?
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Specialized tools speed up toxic link detection but require human verification. 
                Automated scores have false positives.
              </p>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 text-[#55556A] font-normal">Tool</th>
                      <th className="text-left py-3 text-[#55556A] font-normal">Toxicity Metric</th>
                      <th className="text-left py-3 text-[#55556A] font-normal">Best Feature</th>
                      <th className="text-left py-3 text-[#55556A] font-normal">Pricing</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { tool: "Ahrefs", metric: "Manual review + DR/Traffic", feature: "Comprehensive link data", price: "$99+/mo" },
                      { tool: "SEMrush", metric: "Toxic Score (0-100)", feature: "Bulk toxic link detection", price: "$119+/mo" },
                      { tool: "Moz", metric: "Spam Score (0-100)", feature: "Quick spam assessment", price: "$99+/mo" },
                      { tool: "Majestic", metric: "Trust Flow ratio", feature: "Trust vs citation analysis", price: "$49+/mo" },
                      { tool: "LinkResearchTools", metric: "LRT Power/Trust", feature: "Detailed link risk analysis", price: "$499+/mo" },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-white/[0.06]">
                        <td className="py-3 text-[#F0F0F5]">{row.tool}</td>
                        <td className="py-3 text-[#8888A0]">{row.metric}</td>
                        <td className="py-3 text-[#8888A0]">{row.feature}</td>
                        <td className="py-3 text-[#8888A0]">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                Tool interpretation guidelines:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "SEMrush Toxic Score: 45+ warrants investigation, 60+ likely toxic",
                  "Moz Spam Score: 30%+ indicates high spam probability",
                  "Majestic Trust Flow: TF/CF ratio below 0.3 suggests low quality",
                  "Always verify automated scores with manual review",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-[#4F7CFF] mt-1">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[#8888A0] leading-relaxed">
                Free alternative: Google Search Console shows your backlinks directly from Google's 
                perspective, though with limited filtering options.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                Should you remove or disavow toxic links?
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Two methods exist for handling toxic links: manual removal (contacting site owners) 
                and disavowal (telling Google to ignore). Each serves different purposes.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-3">Link Removal (Preferred)</h3>
                  <p className="text-[#8888A0] text-sm mb-3">
                    Contact website owners requesting link removal. Best for manual action recovery 
                    and when you want complete elimination.
                  </p>
                  <p className="text-sm text-green-400">✓ Most thorough solution</p>
                  <p className="text-sm text-[#55556A]">✗ Low success rate (5-15%)</p>
                </div>
                
                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-3">Disavowal (Practical)</h3>
                  <p className="text-[#8888A0] text-sm mb-3">
                    Submit disavow file to Google. Best for large-scale toxic links and when removal 
                    attempts fail.
                  </p>
                  <p className="text-sm text-green-400">✓ Scales to thousands of links</p>
                  <p className="text-sm text-[#55556A]">✗ Risk of disavowing good links</p>
                </div>
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-6">
                Recommended approach:
              </p>
              <ol className="space-y-3 mb-6">
                {[
                  "Attempt removal for manual actions (document your efforts)",
                  "Disavow links from sites that don't respond or can't be contacted",
                  "Disavow at domain level for obvious spam networks",
                  "Keep records of removal attempts for reconsideration requests",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-[#4F7CFF] font-mono w-6">{i + 1}.</span>
                    {item}
                  </li>
                ))}
              </ol>
              <p className="text-[#8888A0] leading-relaxed">
                <Link href="/link-building-guide/disavow-links/" className="text-[#4F7CFF] hover:underline">
                  Read our complete disavow guide →
                </Link>
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                How often should you audit your backlink profile?
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Regular audits catch toxic links before they accumulate and trigger penalties. Audit 
                frequency depends on your site's link velocity and risk exposure.
              </p>

              <p className="text-[#8888A0] leading-relaxed mb-6">
                Recommended audit frequency:
              </p>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 text-[#55556A] font-normal">Site Type</th>
                      <th className="text-left py-3 text-[#55556A] font-normal">Audit Frequency</th>
                      <th className="text-left py-3 text-[#55556A] font-normal">Focus Areas</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { type: "High-risk sites", freq: "Weekly", focus: "Negative SEO attacks, spam influx" },
                      { type: "Active link building", freq: "Bi-weekly", focus: "New link quality, anchor text" },
                      { type: "Established sites", freq: "Monthly", focus: "Pattern changes, toxic accumulation" },
                      { type: "Low-maintenance sites", freq: "Quarterly", focus: "Major issues, penalty risks" },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-white/[0.06]">
                        <td className="py-3 text-[#F0F0F5]">{row.type}</td>
                        <td className="py-3 text-[#8888A0]">{row.freq}</td>
                        <td className="py-3 text-[#8888A0]">{row.focus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                Monthly audit checklist:
              </p>
              <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06] mb-6">
                <ul className="space-y-2">
                  {[
                    "Export all new backlinks from the past 30 days",
                    "Identify any with DR &lt; 10 or suspicious patterns",
                    "Check for sudden spikes in link velocity",
                    "Review anchor text distribution for over-optimization",
                    "Scan for negative SEO attack signatures",
                    "Update disavow file if toxic links identified",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                      <span className="text-[#4F7CFF]">□</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-[#8888A0] leading-relaxed">
                Set up Google Search Console email alerts for manual actions. Early detection enables 
                faster response and minimizes damage.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                Can toxic backlinks hurt your rankings?
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-4">
                The impact of toxic backlinks has evolved. Google's algorithms now handle low-quality 
                links differently than in the past.
              </p>

              <p className="text-[#8888A0] leading-relaxed mb-6">
                How Google handles toxic links in 2025:
              </p>
              
              <div className="space-y-4 mb-6">
                {[
                  { scenario: "Individual Bad Links", impact: "Google ignores most automatically—no action needed" },
                  { scenario: "Negative SEO Attacks", impact: "Google's systems detect and neutralize most attacks without penalty" },
                  { scenario: "Systematic Manipulation", impact: "Clear patterns trigger algorithmic suppression or manual actions" },
                  { scenario: "Historical Bad Links", impact: "Old toxic links may count if never addressed—audit regularly" },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                    <h4 className="font-semibold text-[#F0F0F5] mb-1">{item.scenario}</h4>
                    <p className="text-sm text-[#8888A0]">{item.impact}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                When toxic links definitely hurt:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Manual action received for \"Unnatural Links\" in Google Search Console",
                  "Algorithmic ranking drop correlating with toxic link acquisition",
                  "Over-optimized anchor text patterns exceeding 15% exact match",
                  "Links from deindexed or penalized domains in large quantities",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-red-400 mt-1">⚠</span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-[#8888A0] leading-relaxed">
                Prevention beats cleanup. Focus on earning high-quality links rather than acquiring 
                large quantities of questionable ones. A strong foundation of good links insulates 
                you from the impact of occasional bad ones.
              </p>
            </section>
          </div>

          {/* Summary Box */}
          <div className="mt-16 p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
            <h3 className="font-[family-name:var(--font-syne)] font-bold text-lg text-[#F0F0F5] mb-4">
              Toxic Link Prevention Checklist
            </h3>
            <ul className="space-y-3">
              {[
                "Audit backlink profile monthly using Ahrefs or SEMrush",
                "Monitor for sudden spikes in link velocity",
                "Check Google Search Console weekly for manual actions",
                "Disavow toxic links before they accumulate",
                "Focus on quality link building, not quantity",
                "Set up alerts for brand mentions (catches negative SEO early)",
                "Document all link building activities for accountability",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                  <span className="text-[#22C55E] mt-1">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-8 p-8 rounded-2xl bg-gradient-to-r from-[#4F7CFF]/20 to-[#4F7CFF]/5 border border-[#4F7CFF]/30">
            <h3 className="font-[family-name:var(--font-syne)] font-bold text-xl text-[#F0F0F5] mb-4">
              Protect Your Site From Toxic Links
            </h3>
            <p className="text-[#8888A0] mb-6">
              Backlinky provides comprehensive backlink audits and toxic link removal services. We 
              identify harmful links, create proper disavow files, and help recover from penalties. 
              Don't let toxic backlinks destroy your rankings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#audit"
                className="inline-flex items-center justify-center px-6 py-3 text-white bg-[#4F7CFF] rounded-lg hover:bg-[#3D6AEE] transition-colors font-medium"
              >
                Get a Toxic Link Audit
              </Link>
              <Link
                href="/link-building-guide/google-penguin-update/"
                className="inline-flex items-center justify-center px-6 py-3 text-[#F0F0F5] border border-white/20 rounded-lg hover:bg-white/5 transition-colors"
              >
                Learn About Penguin Penalties →
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
