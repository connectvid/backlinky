import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, CheckCircle, ArrowLeft } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Trust Flow Explained: Majestic's Most Misunderstood SEO Metric",
  description: "Trust Flow measures backlink quality based on proximity to trusted seed sites. Learn how Majestic calculates Trust Flow, how it differs from Citation Flow, and how to improve your score.",
};

export default function TrustFlowExplained() {
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
              Trust Flow Explained: Majestic's Most Misunderstood SEO Metric
            </h1>
            <div className="p-6 rounded-xl bg-[#4F7CFF]/5 border border-[#4F7CFF]/20">
              <p className="text-[#F0F0F5] text-lg">
                <strong>Trust Flow</strong> is a Majestic SEO metric that measures the quality of backlinks based on their proximity to trusted seed sites. Scores range from 0 to 100, with higher scores indicating that a site's backlinks come from sources closer to trusted authorities like universities, government sites, and major news organizations.
              </p>
            </div>
          </header>
          
          <div className="prose prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-4">What Is Trust Flow?</h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Trust Flow measures backlink quality by analyzing how close a site's link profile is to a carefully selected set of trusted seed sites. Majestic's algorithm maps the web as a network of links and calculates distance from these trusted sources.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Majestic selected approximately 1,000 seed sites manually based on their editorial rigor and trustworthiness. These include major universities (.edu domains), government websites (.gov domains), established news organizations, and other authoritative sources that maintain strict editorial standards.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                The calculation works similarly to how Google's original PageRank flowed through links. When a trusted seed site links to another site, that site gains trust. When that site links to another, some trust flows further, but the amount decreases with each link hop away from the original seed.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Trust Flow scores range from 0 to 100 on a logarithmic scale. Sites directly linked from seed sites might show Trust Flow 40-50. Sites two hops away typically show 20-30. Sites three or more hops away show progressively lower scores unless they have multiple trust pathways.
              </p>
              <p className="text-[#8888A0] leading-relaxed">
                Unlike metrics that simply count backlinks, Trust Flow specifically measures link quality and editorial trust. A site with 1,000 low-quality links but no connection to trusted sources shows low Trust Flow. A site with 50 links from respected publications shows high Trust Flow.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-4">How Is Trust Flow Calculated?</h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Majestic calculates Trust Flow using a proprietary algorithm that traces backlink pathways from millions of websites back to their trusted seed set. The process involves several steps:
              </p>
              
              <p className="text-[#F0F0F5] font-semibold mb-2">Seed site selection</p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Majestic manually selected seed sites based on editorial standards, not popularity. Major news outlets with fact-checking processes, academic institutions with peer review, and government agencies with strict publishing controls form the foundation.
              </p>

              <p className="text-[#F0F0F5] font-semibold mb-2">Link graph mapping</p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Majestic maps the entire web as a directed graph, with each link representing a connection between nodes. Their historic index contains over 1 trillion URLs, providing comprehensive coverage of the link ecosystem.
              </p>

              <p className="text-[#F0F0F5] font-semibold mb-2">Distance calculation</p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                The algorithm calculates the shortest path from each website back to any seed site. Sites directly linked from seeds receive maximum trust. Each additional link hop reduces the trust passed, creating a decay function similar to original PageRank.
              </p>

              <p className="text-[#F0F0F5] font-semibold mb-2">Multiple pathway consideration</p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Sites with multiple independent pathways to trusted sources receive higher Trust Flow than sites with single pathways. A site linked from five different university sites gains more trust than a site linked from one university site with five links.
              </p>

              <p className="text-[#8888A0] leading-relaxed">
                Majestic updates Trust Flow as they crawl and discover new links. Their fresh index updates daily, while their historic index provides longitudinal data spanning years. Both indices calculate Trust Flow, though fresh index scores reflect more recent link activity.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-4">Trust Flow vs Citation Flow</h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Majestic offers two complementary metrics: Trust Flow (quality) and Citation Flow (quantity). Understanding both provides a complete picture of backlink profile health.
              </p>
              
              <div className="overflow-x-auto my-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 text-[#55556A]">Factor</th>
                      <th className="text-left py-3 text-[#55556A]">Trust Flow</th>
                      <th className="text-left py-3 text-[#55556A]">Citation Flow</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { factor: "Measures", tf: "Link quality/proximity to trust", cf: "Link quantity/influence" },
                      { factor: "Calculation Basis", tf: "Distance from seed sites", cf: "Total link volume" },
                      { factor: "Scale", tf: "0-100", cf: "0-100" },
                      { factor: "What It Predicts", tf: "Ranking trustworthiness", cf: "Ranking potential/volume" },
                      { factor: "Manipulation Resistance", tf: "High (hard to fake trust)", cf: "Low (easy to buy links)" },
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-white/[0.06]">
                        <td className="py-3 text-[#F0F0F5] font-medium">{row.factor}</td>
                        <td className="py-3 text-[#8888A0]">{row.tf}</td>
                        <td className="py-3 text-[#8888A0]">{row.cf}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                Citation Flow measures link volume without quality weighting. A site with 10,000 spam links shows high Citation Flow but low Trust Flow. Citation Flow correlates with visibility potential—sites with high CF can rank for more keywords—but doesn't indicate ranking quality or stability.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                The ratio between Trust Flow and Citation Flow reveals backlink profile quality. A healthy site maintains TF:CF ratio of 0.5 or higher (Trust Flow at least half of Citation Flow). Ratios below 0.3 suggest manipulative link building or participation in low-quality networks.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Some legitimate sites show low TF:CF ratios naturally. Very large sites with millions of pages (Wikipedia, major news sites) often have high Citation Flow from internal linking and extensive content, making their ratio appear lower despite high trust.
              </p>
              <p className="text-[#8888A0] leading-relaxed">
                For link building analysis, prioritize sites with both high Trust Flow and healthy TF:CF ratios. A site with TF 40 and CF 50 (ratio 0.8) provides more valuable links than a site with TF 30 and CF 80 (ratio 0.375).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-4">What Is a Good Trust Flow Score?</h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Trust Flow benchmarks vary by industry and site type, but general guidelines apply:
              </p>
              
              <div className="overflow-x-auto my-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 text-[#55556A]">Trust Flow</th>
                      <th className="text-left py-3 text-[#55556A]">Category</th>
                      <th className="text-left py-3 text-[#55556A]">Link Profile Quality</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { tf: "0-10", category: "Minimal trust", quality: "Few quality backlinks" },
                      { tf: "10-20", category: "Building trust", quality: "Some quality links emerging" },
                      { tf: "20-30", category: "Good trust", quality: "Established quality backlink profile" },
                      { tf: "30-40", category: "Strong trust", quality: "Links from respected publications" },
                      { tf: "40+", category: "Elite trust", quality: "Links from major authorities" },
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-white/[0.06]">
                        <td className="py-3 font-mono text-[#4F7CFF]">{row.tf}</td>
                        <td className="py-3 text-[#F0F0F5]">{row.category}</td>
                        <td className="py-3 text-[#8888A0]">{row.quality}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                Most established websites in competitive niches show Trust Flow between 20 and 40. Sites above TF 40 have earned links from major publications, universities, or government sources. Sites above TF 60 represent the most trusted destinations on the web.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                New websites typically start with Trust Flow 0-5. Building to TF 15+ within the first year indicates successful link building from quality sources. TF growth plateaus naturally as sites mature—moving from TF 30 to 40 requires substantially more effort than moving from TF 10 to 20.
              </p>
              <p className="text-[#8888A0] leading-relaxed">
                Compare your Trust Flow against direct competitors rather than generic benchmarks. If your competitors average TF 25, achieving TF 30 gives you a trust advantage. If they average TF 50, you'll need to reach that level to compete for the same keywords.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-4">How to Improve Trust Flow</h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Improving Trust Flow requires earning links from sites that themselves have high Trust Flow. Here's how to approach it:
              </p>

              <p className="text-[#F0F0F5] font-semibold mb-2">Earn links from high-TF sites</p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Focus link building on sites with Trust Flow 30+. Each link from a high-TF site creates a trust pathway from seed sites. Use Majestic's tools to identify high-TF sites in your niche for outreach targeting.
              </p>

              <p className="text-[#F0F0F5] font-semibold mb-2">Target educational and government links</p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                .edu and .gov domains typically show very high Trust Flow due to their proximity to seed sites. While these links are difficult to earn, even one university link can significantly boost your Trust Flow. Create resources that educational institutions would reference.
              </p>

              <p className="text-[#F0F0F5] font-semibold mb-2">Remove or disavow toxic links</p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Low-quality links from spam networks dilute your Trust Flow. Use <Link href="/free-tools/backlink-anchor-text-analyzer" className="text-[#4F7CFF] hover:underline">backlink analysis tools</Link> to identify potentially harmful links and disavow them. Cleaning your profile often improves Trust Flow faster than new link building.
              </p>

              <p className="text-[#F0F0F5] font-semibold mb-2">Build topical trust clusters</p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Earning multiple links from related high-TF sites creates stronger trust signals than scattered links. If you earn links from five marketing publications with TF 35+, your marketing content gains topical authority that transfers to your entire domain.
              </p>

              <p className="text-[#F0F0F5] font-semibold mb-2">Create original research</p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Original data and research naturally attract links from trusted sources. Studies, surveys, and data analyses get cited by journalists, academics, and industry publications—all sources with high Trust Flow. One comprehensive study can generate dozens of high-TF backlinks.
              </p>

              <p className="text-[#8888A0] leading-relaxed">
                Trust Flow improvements typically appear in Majestic within 2-4 weeks of link acquisition. Unlike some metrics that update monthly, Majestic's fresh index reflects new links relatively quickly, allowing you to track trust building progress in near real-time.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-4">Trust Flow for Link Building Analysis</h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Trust Flow provides unique insights for evaluating link opportunities that other metrics miss:
              </p>

              <p className="text-[#F0F0F5] font-semibold mb-2">Identifying manipulated authority</p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Sites with high Domain Rating but low Trust Flow likely built authority through quantity-based tactics rather than quality editorial links. These sites may provide less ranking value than their DR suggests. Cross-reference Trust Flow to identify potentially inflated metrics.
              </p>

              <p className="text-[#F0F0F5] font-semibold mb-2">Discovering hidden gems</p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Some niche sites show modest DR but high Trust Flow due to focused editorial standards. A site with DR 25 but TF 30 likely has carefully curated outbound links and provides more value than a site with DR 40 but TF 15.
              </p>

              <p className="text-[#F0F0F5] font-semibold mb-2">Evaluating PBN risk</p>
              <p className="text-[#8888A0] leading-relaxed">
                Private blog networks typically show high Citation Flow but low Trust Flow due to artificial linking patterns. The TF:CF ratio serves as a quick PBN detection signal—legitimate sites rarely maintain ratios below 0.3 for extended periods.
              </p>
            </section>

            <div className="p-6 rounded-xl bg-gradient-to-r from-[#4F7CFF]/10 to-transparent border border-[#4F7CFF]/20 mb-12">
              <h3 className="font-semibold text-[#F0F0F5] mb-2">Build High-Trust Backlinks</h3>
              <p className="text-[#8888A0] mb-4">Our link building service focuses on quality over quantity. We target sites with strong Trust Flow to build lasting authority for your domain.</p>
              <Link href="/#pricing" className="inline-flex items-center gap-2 text-[#4F7CFF]">
                View Our Link Building Packages <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-4">Related Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/seo-metrics/backlink-profile-analysis" className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-[#4F7CFF]/30 transition-colors">
                  <h4 className="text-[#F0F0F5] font-medium mb-1">Backlink Profile Analysis</h4>
                  <p className="text-sm text-[#8888A0]">Complete guide to auditing your backlinks using Trust Flow and other metrics.</p>
                </Link>
                <Link href="/seo-metrics/natural-link-profile" className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-[#4F7CFF]/30 transition-colors">
                  <h4 className="text-[#F0F0F5] font-medium mb-1">Natural Link Profile</h4>
                  <p className="text-sm text-[#8888A0]">What natural link profiles look like and how Trust Flow fits in.</p>
                </Link>
                <Link href="/seo-metrics/spam-score-explained" className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-[#4F7CFF]/30 transition-colors">
                  <h4 className="text-[#F0F0F5] font-medium mb-1">Spam Score Explained</h4>
                  <p className="text-sm text-[#8888A0]">How spam detection complements Trust Flow analysis.</p>
                </Link>
                <Link href="/link-building-strategies" className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-[#4F7CFF]/30 transition-colors">
                  <h4 className="text-[#F0F0F5] font-medium mb-1">Link Building Strategies</h4>
                  <p className="text-sm text-[#8888A0]">Strategies for earning high-trust backlinks.</p>
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
