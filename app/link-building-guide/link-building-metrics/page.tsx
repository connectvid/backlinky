import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Link Building Metrics: What to Track and What to Ignore",
  description:
    "Cut through the noise and focus on the link building metrics that actually matter. Learn which KPIs drive rankings and which vanity metrics waste your time.",
  keywords: [
    "link building metrics",
    "domain rating",
    "domain authority",
    "URL rating",
    "referring domains",
    "backlink analysis",
    "link building KPIs",
  ],
  alternates: {
    canonical: "/link-building-guide/link-building-metrics/",
  },
};

export default function LinkBuildingMetricsPage() {
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
              Link Building Metrics: What to Track and What to Ignore
            </h1>
            <p className="text-lg text-[#8888A0] leading-relaxed">
              SEO tools spit out hundreds of metrics. This guide cuts through the noise to show you 
              exactly which numbers predict ranking success and which ones distract from real progress.
            </p>
          </header>

          {/* Featured Snippet */}
          <div className="p-6 rounded-xl bg-[#4F7CFF]/10 border border-[#4F7CFF]/30 mb-10">
            <p className="text-[#F0F0F5] leading-relaxed">
              <strong>The five link building metrics that matter most</strong> are Domain Rating (DR), 
              number of referring domains, organic traffic of linking sites, referring domain growth 
              rate, and anchor text distribution. These metrics directly correlate with ranking 
              improvements. Ignore total backlink count, Domain Authority (as a standalone metric), 
              citation flow, and any metric that doesn't connect to actual search visibility.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-16">
            {/* Section 1 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What metrics matter for link building?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Effective link building measurement requires focusing on leading indicators that predict 
                ranking improvements rather than lagging indicators that merely describe past activity. 
                The right metrics guide strategy; the wrong ones waste resources.
              </p>
              
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Metrics that directly impact rankings:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  { title: "Domain Rating (DR)", desc: "Ahrefs metric predicting a site's ranking power (0-100 scale)", priority: "High" },
                  { title: "Referring Domains", desc: "Count of unique domains linking to you (more important than total links)", priority: "High" },
                  { title: "Linking Site Traffic", desc: "Organic traffic of sites linking to you indicates quality", priority: "High" },
                  { title: "Domain Growth Rate", desc: "Month-over-month increase in new referring domains", priority: "Medium" },
                  { title: "Anchor Text Ratio", desc: "Distribution of branded, exact match, and partial match anchors", priority: "Medium" },
                  { title: "Dofollow Ratio", desc: "Percentage of links passing ranking power (target 60-80%)", priority: "Medium" },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-[#F0F0F5]">{item.title}</h4>
                      <span className={`text-xs px-2 py-1 rounded ${item.priority === 'High' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                        {item.priority}
                      </span>
                    </div>
                    <p className="text-sm text-[#8888A0]">{item.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#8888A0] leading-relaxed">
                Track these metrics monthly. Improvements in DR and referring domains typically 
                precede ranking improvements by 4-12 weeks. 
                <Link href="/link-building-guide/types-of-backlinks/" className="text-[#4F7CFF] hover:underline ml-1">
                  Focus on quality backlink types →
                </Link>
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What is Domain Rating?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Domain Rating (DR) is Ahrefs' proprietary metric measuring the strength of a website's 
                backlink profile on a 0-100 logarithmic scale. Higher DR predicts better ability to 
                rank in search results.
              </p>
              
              <p className="text-[#8888A0] leading-relaxed mb-4">
                DR calculation factors:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Number of unique domains linking to the site",
                  "DR of the linking domains (higher DR sites pass more value)",
                  "Number of unique domains each linking site links to",
                  "Dofollow vs nofollow status of links",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-[#4F7CFF] mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-[#8888A0] leading-relaxed mb-6">
                DR benchmarks by website maturity:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 text-[#55556A] font-normal">DR Range</th>
                      <th className="text-left py-3 text-[#55556A] font-normal">Description</th>
                      <th className="text-left py-3 text-[#55556A] font-normal">Typical Timeframe</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { range: "0-20", desc: "New websites", time: "0-12 months" },
                      { range: "20-40", desc: "Established small sites", time: "1-2 years" },
                      { range: "40-60", desc: "Growing authority sites", time: "2-4 years" },
                      { range: "60-80", desc: "Industry leaders", time: "4-7 years" },
                      { range: "80-100", desc: "Major brands", time: "7+ years" },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-white/[0.06]">
                        <td className="py-3 text-[#F0F0F5]">{row.range}</td>
                        <td className="py-3 text-[#8888A0]">{row.desc}</td>
                        <td className="py-3 text-[#8888A0]">{row.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[#8888A0] leading-relaxed">
                DR is not a Google metric. It predicts but doesn't guarantee rankings. A DR 30 site 
                with targeted content can outrank a DR 70 site for specific queries. Use DR as a 
                comparative tool, not an absolute measure. 
                <Link href="/seo-metrics/domain-rating-explained/" className="text-[#4F7CFF] hover:underline ml-1">
                  Read our complete DR guide →
                </Link>
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What is URL Rating?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                URL Rating (UR) measures the strength of an individual page's backlink profile on the 
                same 0-100 scale as DR. While DR evaluates entire domains, UR evaluates specific URLs.
              </p>
              
              <p className="text-[#8888A0] leading-relaxed mb-4">
                UR matters because links from high-UR pages pass more authority than links from 
                low-UR pages, even on the same domain. A link from a New York Times article with 
                UR 70 delivers more value than a link from an archived NYT page with UR 5.
              </p>

              <p className="text-[#8888A0] leading-relaxed mb-6">
                When evaluating link opportunities, prioritize:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Links from pages with UR 20+ over UR 5 pages",
                  "Contextual links in content over sidebar/footer links",
                  "Fresh, recently published content over outdated articles",
                  "Pages with organic traffic over orphaned pages",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-[#4F7CFF] mt-1">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[#8888A0] leading-relaxed">
                UR helps identify the best pages to target for link building on a given domain. 
                A DR 50 site might have pages ranging from UR 1 to UR 40. Focus your outreach on 
                their strongest content.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What is the difference between backlinks and referring domains?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                This distinction trips up many SEO practitioners. Understanding the difference prevents 
                misguided strategies and wasted budgets.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-2">Total Backlinks</h3>
                  <p className="text-[#8888A0] text-sm mb-3">
                    The complete count of all links pointing to your site, including multiple links 
                    from the same domain.
                  </p>
                  <p className="text-sm text-[#55556A]">
                    Example: One website links to you 50 times = 50 backlinks
                  </p>
                </div>
                
                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-2">Referring Domains</h3>
                  <p className="text-[#8888A0] text-sm mb-3">
                    The count of unique websites linking to you. Multiple links from the same domain 
                    count as one referring domain.
                  </p>
                  <p className="text-sm text-[#55556A]">
                    Example: One website links to you 50 times = 1 referring domain
                  </p>
                </div>
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                Referring domains matter more than total backlinks. Google's algorithm weights unique 
                linking domains far more heavily than multiple links from the same site. The second, 
                third, and fourth links from one domain deliver diminishing returns.
              </p>

              <p className="text-[#8888A0] leading-relaxed mb-6">
                A healthy growth pattern shows:
              </p>
              <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06] mb-6">
                <ul className="space-y-2">
                  {[
                    "Consistent month-over-month growth in referring domains (target 10-20% increase)",
                    "Total backlinks growing slightly faster than domains (indicates natural deep linking)",
                    "New domains from diverse IP ranges and geographic locations",
                    "Balanced mix of high-DR and mid-DR referring sites",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                      <span className="text-[#22C55E] mt-1">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-[#8888A0] leading-relaxed">
                Focus your link building on acquiring new referring domains rather than securing 
                additional links from existing referrers. 
                <Link href="/link-building-guide/link-velocity/" className="text-[#4F7CFF] hover:underline ml-1">
                  Understand safe link acquisition speed →
                </Link>
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                How important is anchor text?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Anchor text remains a significant ranking factor. The clickable text of a link tells 
                Google what the destination page is about, influencing which keywords the page can rank for.
              </p>
              
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Optimal anchor text distribution:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 text-[#55556A] font-normal">Anchor Type</th>
                      <th className="text-center py-3 text-[#55556A] font-normal">Target %</th>
                      <th className="text-left py-3 text-[#55556A] font-normal">Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { type: "Branded", pct: "40-50%", example: "Backlinky" },
                      { type: "Naked URL", pct: "15-25%", example: "https://backlinky.io" },
                      { type: "Generic", pct: "10-15%", example: "click here, read more" },
                      { type: "Partial Match", pct: "10-20%", example: "link building services by Backlinky" },
                      { type: "Exact Match", pct: "1-5%", example: "link building services" },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-white/[0.06]">
                        <td className="py-3 text-[#F0F0F5]">{row.type}</td>
                        <td className="py-3 text-center text-[#4F7CFF]">{row.pct}</td>
                        <td className="py-3 text-[#8888A0]">{row.example}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                Warning signs in your anchor profile:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "More than 10% exact match anchors triggers Penguin scrutiny",
                  "Missing branded anchors suggests unnatural link building",
                  "Over-optimized commercial keywords indicate manipulation",
                  "Identical anchors across multiple links look automated",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-orange-400 mt-1">⚠</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[#8888A0] leading-relaxed">
                <Link href="/link-building-guide/anchor-text-guide/" className="text-[#4F7CFF] hover:underline">
                  Read our complete anchor text optimization guide →
                </Link>
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What metrics are vanity metrics?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Vanity metrics look impressive but don't correlate with ranking improvements or business 
                outcomes. Tracking these wastes time and leads to poor strategic decisions.
              </p>
              
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Metrics to ignore:
              </p>
              
              <div className="space-y-4 mb-6">
                {[
                  { metric: "Total Backlink Count", reason: "1000 links from 10 domains beats 100 links from 100 domains" },
                  { metric: "Citation Flow", reason: "Majestic metric without proven correlation to rankings" },
                  { metric: "Trust Flow", reason: "Similarly unproven; DR and traffic matter more" },
                  { metric: "Link Velocity (raw)", reason: "Speed without quality context means nothing" },
                  { metric: "Linking Page Count", reason: "Focus on unique domains, not total pages" },
                  { metric: "Social Shares of Linking Content", reason: "Social signals don't impact link value" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-red-500/5 border border-red-500/10">
                    <span className="text-red-400 font-semibold w-32 shrink-0">{item.metric}</span>
                    <span className="text-[#8888A0]">{item.reason}</span>
                  </div>
                ))}
              </div>

              <p className="text-[#8888A0] leading-relaxed">
                When evaluating link building success, always connect metrics to outcomes. A decrease 
                in total backlinks with an increase in referring domains and rankings represents progress, 
                not failure. Focus on the metrics that predict and explain ranking changes.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                How to build a link building dashboard?
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-6">
                An effective link building dashboard tracks leading indicators monthly and connects 
                link activity to ranking outcomes. Here's a template structure:
              </p>

              <div className="space-y-6 mb-6">
                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-3">Monthly Tracking Metrics</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Domain Rating (DR)",
                      "Referring Domains (total)",
                      "New Referring Domains (this month)",
                      "Lost Referring Domains (this month)",
                      "Average DR of New Links",
                      "Dofollow Percentage",
                      "Anchor Text Distribution",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-[#8888A0] text-sm">
                        <span className="text-[#4F7CFF]">□</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-3">Quarterly Review Metrics</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Ranking changes for target keywords",
                      "Organic traffic growth",
                      "Referring domain growth rate %",
                      "Top linking domains by authority",
                      "Toxic link ratio",
                      "Link acquisition cost per domain",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-[#8888A0] text-sm">
                        <span className="text-[#4F7CFF]">□</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-3">Recommended Tools</h3>
                  <ul className="space-y-2 text-[#8888A0] text-sm">
                    <li><strong className="text-[#F0F0F5]">Ahrefs:</strong> Primary source for DR, referring domains, and backlink analysis</li>
                    <li><strong className="text-[#F0F0F5]">Google Search Console:</strong> Free ranking and click data directly from Google</li>
                    <li><strong className="text-[#F0F0F5]">Google Analytics:</strong> Organic traffic trends and referral traffic</li>
                    <li><strong className="text-[#F0F0F5]">Looker Studio:</strong> Free dashboard creation connecting multiple data sources</li>
                  </ul>
                </div>
              </div>

              <p className="text-[#8888A0] leading-relaxed">
                Review your dashboard weekly for operational issues (sudden link losses) and monthly 
                for strategic adjustments. Correlate link building activities with ranking changes 
                to identify which tactics deliver the best ROI.
              </p>
            </section>
          </div>

          {/* Summary Box */}
          <div className="mt-16 p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
            <h3 className="font-[family-name:var(--font-syne)] font-bold text-lg text-[#F0F0F5] mb-4">
              Key Metrics Checklist
            </h3>
            <ul className="space-y-3">
              {[
                "Track Domain Rating monthly as your primary authority metric",
                "Prioritize referring domains over total backlink count",
                "Monitor organic traffic of linking sites as a quality indicator",
                "Maintain natural anchor text distribution with 40-50% branded",
                "Aim for 60-80% dofollow ratio in your backlink profile",
                "Ignore vanity metrics like total backlinks and citation flow",
                "Connect link metrics to ranking and traffic outcomes",
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
              Get Links That Move Your Metrics
            </h3>
            <p className="text-[#8888A0] mb-6">
              Backlinky focuses on the metrics that matter. We build referring domains from sites 
              with real traffic, improving your DR and driving measurable ranking improvements. 
              Every link we build targets sites with DR 40+ and verified organic traffic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#pricing"
                className="inline-flex items-center justify-center px-6 py-3 text-white bg-[#4F7CFF] rounded-lg hover:bg-[#3D6AEE] transition-colors font-medium"
              >
                View Our Approach
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
