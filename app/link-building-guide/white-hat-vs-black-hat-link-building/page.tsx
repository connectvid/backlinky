import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "White Hat vs Black Hat Link Building: The Full Comparison (2025)",
  description:
    "Understand the critical differences between white hat and black hat link building. Learn which tactics Google penalizes and how to build links safely.",
  keywords: [
    "white hat link building",
    "black hat link building",
    "grey hat SEO",
    "link building penalties",
    "Google penalties",
    "link spam",
    "buying links",
  ],
  alternates: {
    canonical: "/link-building-guide/white-hat-vs-black-hat-link-building/",
  },
};

export default function WhiteHatVsBlackHatPage() {
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
              White Hat vs Black Hat Link Building: The Full Comparison (2025)
            </h1>
            <p className="text-lg text-[#8888A0] leading-relaxed">
              The wrong link building approach can destroy your rankings overnight. This guide 
              breaks down exactly what Google penalizes, what tactics carry risk, and how to build 
              links that last.
            </p>
          </header>

          {/* Featured Snippet */}
          <div className="p-6 rounded-xl bg-[#4F7CFF]/10 border border-[#4F7CFF]/30 mb-10">
            <p className="text-[#F0F0F5] leading-relaxed">
              <strong>White hat link building</strong> earns links through quality content and genuine 
              relationships, following Google's guidelines completely. <strong>Black hat link building</strong> 
              manipulates rankings through link schemes, PBNs, and purchased links, violating Google's 
              guidelines and risking severe penalties. <strong>Grey hat tactics</strong> operate in 
              ambiguous territory—technically compliant but ethically questionable. White hat delivers 
              sustainable long-term growth; black hat provides short-term gains followed by potential 
              site destruction.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto mb-16">
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-6">
              White Hat vs Black Hat Comparison
            </h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="text-left py-3 text-[#55556A] font-normal">Aspect</th>
                  <th className="text-left py-3 text-[#22C55E] font-normal">White Hat</th>
                  <th className="text-left py-3 text-[#EF4444] font-normal">Black Hat</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { aspect: "Approach", white: "Earn links naturally", black: "Create/manipulate links" },
                  { aspect: "Time to Results", white: "3-6 months", black: "2-4 weeks" },
                  { aspect: "Sustainability", white: "Permanent gains", black: "Temporary, high risk" },
                  { aspect: "Cost", white: "$3,000-$15,000/month", black: "$500-$2,000/month" },
                  { aspect: "Google Stance", white: "Encouraged", black: "Actively penalized" },
                  { aspect: "Penalty Risk", white: "None", black: "Algorithmic or manual action" },
                  { aspect: "Recovery Time", white: "N/A", black: "6-24 months if possible" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/[0.06]">
                    <td className="py-3 text-[#F0F0F5] font-medium">{row.aspect}</td>
                    <td className="py-3 text-[#8888A0]">{row.white}</td>
                    <td className="py-3 text-[#8888A0]">{row.black}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Content Sections */}
          <div className="space-y-16">
            {/* Section 1 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What is white hat link building?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                White hat link building earns backlinks through merit, quality content, and genuine 
                relationships. Every link represents an editorial decision by the linking site that 
                your content provides value to their audience.
              </p>
              
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Core white hat tactics:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  { tactic: "Content Marketing", desc: "Create comprehensive guides, studies, and resources worth linking to" },
                  { tactic: "Digital PR", desc: "Earn media coverage through newsworthy stories and data" },
                  { tactic: "Guest Posting", desc: "Write valuable content for relevant industry publications" },
                  { tactic: "HARO", desc: "Provide expert commentary to journalists" },
                  { tactic: "Resource Pages", desc: "Get listed on curated industry resource lists" },
                  { tactic: "Broken Link Building", desc: "Help webmasters fix broken links with your content" },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-lg bg-green-500/5 border border-green-500/20">
                    <h4 className="font-semibold text-green-400 mb-1">{item.tactic}</h4>
                    <p className="text-sm text-[#8888A0]">{item.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                White hat characteristics:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Links are editorially given, not requested as a transaction",
                  "Content provides genuine value to the linking site's audience",
                  "Relationships are built on mutual benefit, not link exchange",
                  "Tactics would be pursued even if links had no SEO value",
                  "Activities could be presented to Google without concern",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-[#22C55E] mt-1">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[#8888A0] leading-relaxed">
                White hat link building requires patience but delivers compound returns. Links earned 
                through merit tend to persist longer, drive more referral traffic, and withstand 
                algorithm updates.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What is black hat link building?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Black hat link building manipulates search rankings through artificial link schemes. 
                These tactics violate Google's Webmaster Guidelines and risk algorithmic penalties or 
                manual actions that can destroy years of SEO progress.
              </p>
              
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Black hat tactics to avoid:
              </p>
              
              <div className="space-y-4 mb-6">
                {[
                  { tactic: "Private Blog Networks (PBNs)", desc: "Networks of sites built solely to link to money sites", risk: "Extreme" },
                  { tactic: "Link Farms", desc: "Directories or sites that sell links to anyone", risk: "Extreme" },
                  { tactic: "Automated Link Building", desc: "Software that creates thousands of spam links", risk: "Extreme" },
                  { tactic: "Hacked Links", desc: "Injecting links into sites without permission", risk: "Extreme + Legal" },
                  { tactic: "Widget Links", desc: "Embedding links in widgets or embeds distributed for links", risk: "High" },
                  { tactic: "Hidden Links", desc: "Links invisible to users but seen by search engines", risk: "High" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                    <div className="flex-1">
                      <h4 className="font-semibold text-red-400 mb-1">{item.tactic}</h4>
                      <p className="text-sm text-[#8888A0]">{item.desc}</p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded bg-red-500/20 text-red-400 shrink-0">
                      {item.risk}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-[#8888A0] leading-relaxed">
                Black hat tactics share common characteristics: they scale quickly, require minimal 
                effort, provide short-term ranking boosts, and eventually trigger penalties. The 
                temporary gains never justify the permanent damage to your site's reputation.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What is grey hat link building?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Grey hat link building occupies the ambiguous space between white and black hat. 
                These tactics aren't explicitly prohibited but violate the spirit of Google's guidelines. 
                They carry moderate risk that increases over time as Google refines its algorithms.
              </p>
              
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Common grey hat tactics:
              </p>
              
              <div className="space-y-4 mb-6">
                {[
                  { tactic: "Paid Guest Posts", desc: "Paying for placement on real sites with real audiences", status: "Borderline - must use sponsored attribute" },
                  { tactic: "Link Reclamation at Scale", desc: "Aggressively requesting links from brand mentions", status: "Low risk but aggressive" },
                  { tactic: "Scholarship Links", desc: "Creating scholarships primarily for .edu links", status: "Increasingly scrutinized" },
                  { tactic: "Expired Domain 301s", desc: "Buying expired domains and redirecting for authority", status: "Against guidelines if purely for SEO" },
                  { tactic: "EBook/Guide Syndication", desc: "Mass distribution of content with embedded links", status: "Depends on quality and relevance" },
                  { tactic: "Link Exchanges", desc: "Reciprocal linking arrangements between sites", status: "Excessive exchanges violate guidelines" },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-lg bg-yellow-500/5 border border-yellow-500/20">
                    <h4 className="font-semibold text-yellow-400 mb-1">{item.tactic}</h4>
                    <p className="text-sm text-[#8888A0] mb-2">{item.desc}</p>
                    <p className="text-xs text-yellow-500/70">{item.status}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#8888A0] leading-relaxed">
                Grey hat tactics require careful judgment. What works today may trigger penalties 
                tomorrow as Google updates its algorithms. When in doubt, choose the approach you 
                could explain to a Google engineer without embarrassment.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What are Google's link spam penalties?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Google deploys two types of penalties for link building violations: algorithmic 
                penalties applied automatically and manual actions imposed by human reviewers. Both 
                devastate organic traffic.
              </p>
              
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Algorithmic penalties:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  { name: "Penguin", trigger: "Unnatural link patterns and over-optimization", impact: "Rankings drop for specific keywords" },
                  { name: "Link Spam Update", trigger: "Paid links, link schemes, and spam", impact: "Site-wide or partial ranking drops" },
                  { name: "Helpful Content", trigger: "Content created primarily for SEO", impact: "Reduced visibility across site" },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                    <h4 className="font-semibold text-red-400 mb-2">{item.name}</h4>
                    <p className="text-xs text-[#8888A0] mb-1"><strong>Trigger:</strong> {item.trigger}</p>
                    <p className="text-xs text-[#8888A0]"><strong>Impact:</strong> {item.impact}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                Manual actions:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Unnatural links to your site - Google detected paid or spam links pointing to you",
                  "Unnatural links from your site - You're linking out in manipulative patterns",
                  "Pure spam - Site uses aggressive spam techniques",
                  "Cloaking and sneaky redirects - Showing different content to users and search engines",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-red-400 mt-1">⚠</span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                Manual actions appear in Google Search Console with specific examples of violating 
                links. Recovery requires:
              </p>
              <ol className="space-y-2 mb-6">
                {[
                  "Removing or disavowing all violating links",
                  "Documenting your cleanup efforts",
                  "Submitting a reconsideration request",
                  "Waiting 2-4 weeks for human review",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-[#4F7CFF] font-mono w-6">{i + 1}.</span>
                    {item}
                  </li>
                ))}
              </ol>
              <p className="text-[#8888A0] leading-relaxed">
                <Link href="/link-building-guide/google-penguin-update/" className="text-[#4F7CFF] hover:underline">
                  Learn more about Penguin and algorithm penalties →
                </Link>
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What link building tactics should you avoid?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Certain tactics carry disproportionate risk relative to potential reward. Avoid these 
                completely regardless of short-term temptation.
              </p>
              
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Tactics to never use:
              </p>
              
              <div className="space-y-4 mb-6">
                {[
                  { tactic: "PBNs", reason: "Google's AI detects patterns in hosting, content, and linking. 95% of PBNs get deindexed within 12 months." },
                  { tactic: "Bulk Directory Submissions", reason: "Automated submissions to thousands of worthless directories trigger spam filters immediately." },
                  { tactic: "Exact Match Anchor Manipulation", reason: "More than 10% exact match anchors in your profile invites Penguin penalties." },
                  { tactic: "Link Buying from Marketplaces", reason: "Public link sellers are Google's first targets. Purchased links rarely last 6 months." },
                  { tactic: "Article Spinning/Syndication", reason: "Duplicate or near-duplicate content across sites with embedded links creates clear footprints." },
                  { tactic: "Private WHOIS with Link Building", reason: "Hidden ownership combined with aggressive link building screams manipulation to Google." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                    <span className="text-red-400 font-bold shrink-0">✗</span>
                    <div>
                      <h4 className="font-semibold text-red-400 mb-1">{item.tactic}</h4>
                      <p className="text-sm text-[#8888A0]">{item.reason}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[#8888A0] leading-relaxed">
                Red flags when evaluating link services:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Guarantees of specific rankings or traffic increases",
                  "Prices below $100 for 'high DR' links (real high-DR links cost $300-$1000+)",
                  "Promises of hundreds of links per month",
                  "Refusal to disclose which sites will link to you",
                  "No content requirements or editorial standards",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-orange-400 mt-1">⚠</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[#8888A0] leading-relaxed">
                <Link href="/link-building-guide/toxic-backlinks/" className="text-[#4F7CFF] hover:underline">
                  Learn to identify toxic backlinks →
                </Link>
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                Is buying links ever safe?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Google's guidelines explicitly prohibit buying or selling links that pass PageRank. 
                However, the reality of link building is more nuanced than a simple prohibition.
              </p>
              
              <p className="text-[#8888A0] leading-relaxed mb-6">
                What Google prohibits:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Exchanging money for links (dofollow links in exchange for payment)",
                  "Exchanging goods or services for links",
                  "Sending products for review with the expectation of a link",
                  "Link exchanges (\"I'll link to you if you link to me\")",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-red-400 mt-1">✗</span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-[#8888A0] leading-relaxed mb-6">
                Acceptable alternatives:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Paying for sponsored content with rel=\"sponsored\" or rel=\"nofollow\" attributes",
                  "Paying for advertising that includes nofollow links",
                  "Hiring agencies for outreach and content creation (not link buying)",
                  "Paying for directory listings in relevant, curated directories",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-[#22C55E] mt-1">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-[#8888A0] leading-relaxed">
                The safest approach: invest in content and outreach rather than direct link purchases. 
                If you choose to pay for placement, use sponsored attributes and accept that these 
                links won't pass ranking power. 
                <Link href="/link-building-guide/link-building-cost/" className="text-[#4F7CFF] hover:underline ml-1">
                  See typical link building costs →
                </Link>
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What is the safest link building approach?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Sustainable link building combines multiple white hat tactics, maintains natural 
                patterns, and prioritizes long-term value over short-term gains.
              </p>
              
              <p className="text-[#8888A0] leading-relaxed mb-6">
                The safest approach follows these principles:
              </p>
              
              <div className="space-y-4 mb-6">
                {[
                  { title: "Earn Before Asking", desc: "Create link-worthy content before outreach. If your content doesn't deserve links, no tactic will work sustainably." },
                  { title: "Diversify Tactics", desc: "No single tactic should generate more than 30% of your links. Spread across guest posts, PR, resource pages, and natural mentions." },
                  { title: "Prioritize Relevance", desc: "A DR 30 link from a relevant site beats a DR 60 link from an unrelated one every time." },
                  { title: "Vary Anchor Text", desc: "Maintain 40-50% branded anchors. Over-optimization invites penalties." },
                  { title: "Build Relationships", desc: "Long-term partnerships with editors and site owners generate recurring link opportunities." },
                  { title: "Monitor Your Profile", desc: "Monthly audits catch toxic links, unusual patterns, and potential issues before they trigger penalties." },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-lg bg-green-500/5 border border-green-500/20">
                    <h4 className="font-semibold text-green-400 mb-1">{item.title}</h4>
                    <p className="text-sm text-[#8888A0]">{item.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-6">
                Monthly link building checklist:
              </p>
              <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06] mb-6">
                <ul className="space-y-2">
                  {[
                    "Audit new backlinks for quality and relevance",
                    "Check anchor text distribution for over-optimization",
                    "Review referring domain growth rate (target 10-20% monthly)",
                    "Disavow any toxic or spam links identified",
                    "Verify no sudden spikes in link velocity",
                    "Confirm no manual actions in Google Search Console",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                      <span className="text-[#4F7CFF]">□</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-[#8888A0] leading-relaxed">
                Safe link building takes longer but delivers lasting results. The sites that dominate 
                competitive SERPs year after year built their authority through consistent, ethical 
                practices—not shortcuts.
              </p>
            </section>
          </div>

          {/* Summary Box */}
          <div className="mt-16 p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
            <h3 className="font-[family-name:var(--font-syne)] font-bold text-lg text-[#F0F0F5] mb-4">
              White Hat vs Black Hat Summary
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-[#22C55E] font-semibold mb-2">Choose White Hat</h4>
                <ul className="space-y-2">
                  {[
                    "Content marketing and digital PR",
                    "Guest posting on relevant sites",
                    "HARO and journalist outreach",
                    "Resource page link building",
                    "Broken link building",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#8888A0] text-sm">
                      <span className="text-[#22C55E]">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[#EF4444] font-semibold mb-2">Avoid Completely</h4>
                <ul className="space-y-2">
                  {[
                    "PBNs and link farms",
                    "Buying links directly",
                    "Automated link building",
                    "Exact match anchor manipulation",
                    "Hacked or injected links",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#8888A0] text-sm">
                      <span className="text-[#EF4444]">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-8 p-8 rounded-2xl bg-gradient-to-r from-[#4F7CFF]/20 to-[#4F7CFF]/5 border border-[#4F7CFF]/30">
            <h3 className="font-[family-name:var(--font-syne)] font-bold text-xl text-[#F0F0F5] mb-4">
              Build Links That Last
            </h3>
            <p className="text-[#8888A0] mb-6">
              Backlinky specializes in 100% white-hat link building for SaaS companies. We earn links 
              through quality content, genuine relationships, and proven outreach systems. No PBNs. 
              No shortcuts. Just sustainable authority building.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#pricing"
                className="inline-flex items-center justify-center px-6 py-3 text-white bg-[#4F7CFF] rounded-lg hover:bg-[#3D6AEE] transition-colors font-medium"
              >
                View Our White-Hat Services
              </Link>
              <Link
                href="/link-building-guide/disavow-links/"
                className="inline-flex items-center justify-center px-6 py-3 text-[#F0F0F5] border border-white/20 rounded-lg hover:bg-white/5 transition-colors"
              >
                Learn About Disavowing Links →
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
