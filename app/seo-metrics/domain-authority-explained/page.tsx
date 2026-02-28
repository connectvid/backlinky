import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, CheckCircle, ArrowLeft } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Domain Authority (DA) Explained: Moz's Metric and How to Use It",
  description: "Domain Authority (DA) is Moz's search engine ranking score that predicts how well a website will rank. Learn how DA is calculated, what scores mean, and how to improve your Domain Authority.",
};

export default function DomainAuthorityExplained() {
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
              Domain Authority (DA) Explained: Moz's Metric and How to Use It
            </h1>
            <div className="p-6 rounded-xl bg-[#4F7CFF]/5 border border-[#4F7CFF]/20">
              <p className="text-[#F0F0F5] text-lg">
                <strong>Domain Authority (DA)</strong> is a search engine ranking score developed by Moz that predicts how well a website will rank on search engine result pages. DA scores range from 1 to 100 on a logarithmic scale, with higher scores indicating greater ranking potential based on backlink strength and other factors.
              </p>
            </div>
          </header>
          
          <div className="prose prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-4">What Is Domain Authority?</h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Domain Authority is a proprietary metric created by Moz in 2010 to help SEO professionals understand and compare website strength. The score estimates a site's ability to rank in search engine results based on machine learning analysis of multiple ranking factors.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Moz developed DA to address a fundamental SEO challenge: before this metric, comparing websites required manual analysis of dozens of factors. DA consolidates these factors into a single score that provides an at-a-glance assessment of relative authority.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                DA operates on a logarithmic scale from 1 to 100. This means improvements become exponentially harder as scores increase. Moving from DA 10 to 20 requires significantly less effort than moving from DA 60 to 70. The logarithmic nature reflects how Google's algorithms work—gaining authority at high levels requires substantially more trust signals.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                In 2019, Moz released Domain Authority 2.0, a major algorithm update that improved correlation with Google rankings by approximately 15%. The new version incorporates spam detection more heavily and better handles link manipulation attempts.
              </p>
              <p className="text-[#8888A0] leading-relaxed">
                Domain Authority serves as a comparative metric, not an absolute one. A DA of 40 means different things depending on your industry and competitors. The metric provides most value when comparing your site against direct competitors or tracking your own progress over time.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-4">How Is DA Calculated?</h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Moz uses a machine learning model to calculate Domain Authority by analyzing multiple factors that correlate with search engine rankings. The algorithm examines approximately 40 factors, though the exact weightings remain proprietary.
              </p>
              
              <p className="text-[#F0F0F5] font-semibold mb-2">Primary calculation factors include:</p>
              <ul className="space-y-2 mb-6">
                {[
                  "Linking root domains: The number of unique domains linking to your site (40% weight)",
                  "Total backlink count: The total number of inbound links across all pages",
                  "Authority of linking sites: The DA of domains that link to you",
                  "Link distribution: How evenly links are distributed across your site",
                  "Spam Score: Moz's proprietary spam detection metric (27 spam flags)",
                  "Content quality signals: Factors indicating content depth and relevance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#8888A0]">
                    <CheckCircle className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                The machine learning model trains on actual search engine results pages, learning which factors best predict rankings. As Google's algorithm evolves, Moz updates their DA calculation to maintain correlation accuracy.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Moz's Link Explorer index contains over 40 trillion links and updates approximately monthly. When Moz discovers new links to your site—or loses visibility of existing ones—your DA may change even if you haven't actively built or lost links.
              </p>
              <p className="text-[#8888A0] leading-relaxed">
                The Spam Score integration sets DA apart from some competing metrics. Sites exhibiting spammy characteristics receive lower DA scores regardless of their raw backlink count. This helps filter out private blog networks, link farms, and other manipulative link schemes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-4">What Is a Good Domain Authority?</h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                "Good" Domain Authority depends entirely on context—your industry, site age, and competitive landscape determine what score you should target:
              </p>
              
              <div className="overflow-x-auto my-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 text-[#55556A]">DA Range</th>
                      <th className="text-left py-3 text-[#55556A]">Category</th>
                      <th className="text-left py-3 text-[#55556A]">Typical Site Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { range: "1-20", category: "New Site", type: "Recently launched websites" },
                      { range: "20-40", category: "Building", type: "1-2 year old sites with some links" },
                      { range: "40-60", category: "Good", type: "Established sites with quality content" },
                      { range: "60-80", category: "Strong", type: "Major industry players" },
                      { range: "80-100", category: "Elite", type: "Major news sites, Google, Facebook" },
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-white/[0.06]">
                        <td className="py-3 font-mono text-[#4F7CFF]">{row.range}</td>
                        <td className="py-3 text-[#F0F0F5]">{row.category}</td>
                        <td className="py-3 text-[#8888A0]">{row.type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                For most businesses, DA 40-60 represents a solid achievement that enables ranking for competitive keywords. Sites in this range typically have established content libraries, active link building programs, and consistent publishing schedules.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Local businesses often compete effectively with DA 20-40, as local search results factor in geographic relevance and Google Business Profile optimization more heavily than domain authority. A local plumber doesn't need DA 70 to rank in their service area.
              </p>
              <p className="text-[#8888A0] leading-relaxed">
                Competitive analysis matters more than absolute scores. If your competitors average DA 35, achieving DA 40 puts you at an advantage. If they average DA 65, you'll need to reach that level to compete for the same keywords. Always benchmark against your actual competition, not generic industry averages.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-4">How to Improve Your DA?</h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Improving Domain Authority requires a sustained focus on building quality backlinks and eliminating spam signals. Here's a proven approach:
              </p>

              <p className="text-[#F0F0F5] font-semibold mb-2">1. Build high-quality backlinks from diverse sources</p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Focus on earning links from sites with DA higher than yours. A single link from a DA 60 site provides more authority than ten links from DA 10 sites. Prioritize editorial links within content over footer or sidebar links.
              </p>

              <p className="text-[#F0F0F5] font-semibold mb-2">2. Increase referring domain count</p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Moz weighs linking root domains heavily in DA calculation. Earning links from 100 different domains typically improves DA more than earning 100 links from the same domain. Diversify your link sources across different sites, industries, and content types.
              </p>

              <p className="text-[#F0F0F5] font-semibold mb-2">3. Remove toxic backlinks</p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Use Moz's Spam Score or <Link href="/free-tools/backlink-anchor-text-analyzer" className="text-[#4F7CFF] hover:underline">our free backlink analyzer</Link> to identify potentially harmful links. Disavow links from sites with high Spam Scores or obvious link scheme participation. Cleaning your profile often produces faster DA improvements than new link building.
              </p>

              <p className="text-[#F0F0F5] font-semibold mb-2">4. Create linkable assets</p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Develop content that naturally attracts links: original research, comprehensive guides, free tools, and data studies. Linkable assets continue earning backlinks over time without ongoing effort, providing compound returns on your content investment.
              </p>

              <p className="text-[#F0F0F5] font-semibold mb-2">5. Fix technical SEO issues</p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Ensure search engines can crawl and index your content effectively. Fix broken links, improve site speed, and implement proper canonical tags. Technical issues prevent link equity from flowing properly throughout your site.
              </p>

              <p className="text-[#8888A0] leading-relaxed">
                Expect improvements to take 2-4 months to reflect in DA scores, as Moz updates their index monthly and there's inherent delay between link acquisition and index updates.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-4">DA vs PA: What's the Difference?</h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Moz offers two authority metrics: Domain Authority (DA) and Page Authority (PA). Understanding the distinction helps you optimize at the right level.
              </p>
              
              <div className="overflow-x-auto my-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 text-[#55556A]">Factor</th>
                      <th className="text-left py-3 text-[#55556A]">Domain Authority (DA)</th>
                      <th className="text-left py-3 text-[#55556A]">Page Authority (PA)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { factor: "Scope", da: "Entire domain", pa: "Individual page" },
                      { factor: "Use Case", da: "Comparing websites", pa: "Analyzing specific pages" },
                      { factor: "Calculation", da: "Links to entire domain", pa: "Links to specific page" },
                      { factor: "Scale", da: "1-100", pa: "1-100" },
                      { factor: "Typical Range", da: "10-90 for most sites", pa: "Higher variance per page" },
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-white/[0.06]">
                        <td className="py-3 text-[#F0F0F5] font-medium">{row.factor}</td>
                        <td className="py-3 text-[#8888A0]">{row.da}</td>
                        <td className="py-3 text-[#8888A0]">{row.pa}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                Domain Authority predicts how well pages across your entire site will rank. High DA provides a foundation that helps all pages perform better, but doesn't guarantee any specific page will rank well.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                <Link href="/seo-metrics/url-rating-explained" className="text-[#4F7CFF] hover:underline">Page Authority</Link> predicts how well a specific page will rank. A page with high PA can outrank pages on higher-DA domains if it has stronger direct backlinks and better content optimization.
              </p>
              <p className="text-[#8888A0] leading-relaxed">
                For link building strategy, focus on DA when evaluating potential link sources—links from high-DA sites pass more authority. Focus on PA when analyzing why specific competitors outrank you or which of your pages need additional link building support.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-4">Limitations of Domain Authority</h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Domain Authority provides valuable insights, but understanding its limitations prevents misinterpretation:
              </p>

              <p className="text-[#F0F0F5] font-semibold mb-2">DA is not a Google ranking factor</p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Google does not use Moz's Domain Authority in its algorithm. DA estimates ranking potential based on correlations, but Google considers hundreds of factors that DA cannot fully capture. A lower-DA site can outrank a higher-DA site through superior content, user experience, or relevance.
              </p>

              <p className="text-[#F0F0F5] font-semibold mb-2">DA fluctuates without site changes</p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Your DA can change even when you haven't gained or lost any backlinks. Moz updates their link index monthly, and changes to other websites in their database affect relative scoring. A competitor building many links can lower your relative DA without any action on your part.
              </p>

              <p className="text-[#F0F0F5] font-semibold mb-2">DA doesn't measure relevance</p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Domain Authority measures backlink strength, not topical relevance. A DA 60 site about gardening provides less SEO value to a finance website than a DA 40 finance site. Always consider relevance alongside authority when evaluating link opportunities.
              </p>

              <p className="text-[#F0F0F5] font-semibold mb-2">New sites show artificially low DA</p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Moz's logarithmic scale compresses scores at the bottom end. New sites with legitimate quality content often show DA 1-10 even when they've earned some quality links. Don't panic if your new site shows low DA—focus on steady improvement rather than absolute scores.
              </p>

              <p className="text-[#8888A0] leading-relaxed">
                Use DA as one input among many for SEO decisions. Combine it with traffic analysis, keyword rankings, conversion data, and manual site review for a complete picture of your SEO performance.
              </p>
            </section>

            <div className="p-6 rounded-xl bg-gradient-to-r from-[#4F7CFF]/10 to-transparent border border-[#4F7CFF]/20 mb-12">
              <h3 className="font-semibold text-[#F0F0F5] mb-2">Need Help Building Authority?</h3>
              <p className="text-[#8888A0] mb-4">Our link building service delivers DA 40+ backlinks from relevant, high-quality sites. We focus on sustainable authority growth that improves your rankings.</p>
              <Link href="/#pricing" className="inline-flex items-center gap-2 text-[#4F7CFF]">
                View Link Building Packages <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-4">Related Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/seo-metrics/domain-authority-vs-domain-rating" className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-[#4F7CFF]/30 transition-colors">
                  <h4 className="text-[#F0F0F5] font-medium mb-1">DA vs DR Comparison</h4>
                  <p className="text-sm text-[#8888A0]">Understand the differences between Moz's DA and Ahrefs' DR metrics.</p>
                </Link>
                <Link href="/seo-metrics/domain-rating-explained" className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-[#4F7CFF]/30 transition-colors">
                  <h4 className="text-[#F0F0F5] font-medium mb-1">Domain Rating Explained</h4>
                  <p className="text-sm text-[#8888A0]">Complete guide to Ahrefs' alternative authority metric.</p>
                </Link>
                <Link href="/seo-metrics/spam-score-explained" className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-[#4F7CFF]/30 transition-colors">
                  <h4 className="text-[#F0F0F5] font-medium mb-1">Spam Score Explained</h4>
                  <p className="text-sm text-[#8888A0]">How Moz detects spam and why it affects your DA score.</p>
                </Link>
                <Link href="/seo-metrics/how-to-increase-domain-authority" className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-[#4F7CFF]/30 transition-colors">
                  <h4 className="text-[#F0F0F5] font-medium mb-1">How to Increase DA</h4>
                  <p className="text-sm text-[#8888A0]">Step-by-step strategies for improving your Domain Authority.</p>
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
