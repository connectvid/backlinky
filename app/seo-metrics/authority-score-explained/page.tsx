import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, CheckCircle, ArrowLeft } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Authority Score Explained: SEMrush's Domain Metric Guide",
  description: "Authority Score is SEMrush's domain authority metric. Learn how it's calculated, how it compares to DA and DR, what constitutes a good score, and how to improve it.",
};

export default function AuthorityScoreExplained() {
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
              Authority Score Explained: SEMrush's Domain Metric Guide
            </h1>
            <div className="p-6 rounded-xl bg-[#4F7CFF]/5 border border-[#4F7CFF]/20">
              <p className="text-[#F0F0F5] text-lg">
                <strong>Authority Score</strong> is SEMrush's compound metric that measures a website's overall quality and SEO performance on a scale from 0 to 100. Unlike metrics that focus solely on backlinks, Authority Score incorporates link data, organic traffic estimates, and spam signals to provide a holistic domain strength assessment. Higher scores indicate stronger overall SEO health and ranking potential.
              </p>
            </div>
          </header>
          
          <div className="prose prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-4">What Is Authority Score?</h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Authority Score (AS) is a proprietary metric developed by SEMrush to help SEO professionals evaluate website quality and competitive strength. Launched in 2020, AS represents SEMrush's most comprehensive attempt to quantify domain authority using their extensive data sources.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                SEMrush designed Authority Score to address limitations in existing metrics. While Domain Authority focuses primarily on links and Domain Rating emphasizes backlink strength, Authority Score incorporates traffic data to identify sites with strong link profiles but poor user engagement—a common PBN signature.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Authority Score updates regularly as SEMrush refreshes their databases. Their link index, organic traffic estimates, and spam detection systems all feed into AS calculations. This multi-source approach makes AS particularly stable compared to single-factor metrics.
              </p>
              <p className="text-[#8888A0] leading-relaxed">
                The metric serves multiple use cases: competitive benchmarking, link prospect evaluation, site acquisition due diligence, and SEO progress tracking. Many SEMrush users prefer AS as their primary authority metric because it aligns closely with their existing workflow in the SEMrush ecosystem.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-4">How Is Authority Score Calculated?</h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                SEMrush calculates Authority Score using a proprietary algorithm that weighs multiple factors:
              </p>
              
              <p className="text-[#F0F0F5] font-semibold mb-2">Primary calculation components:</p>
              <ul className="space-y-2 mb-6">
                {[
                  "Link power: Total backlinks, referring domains, and authority of linking sites (40% weight)",
                  "Organic traffic: Estimated monthly visits from organic search (35% weight)",
                  "Spam factors: Presence of toxic links, unnatural patterns, and manipulation signals (15% weight)",
                  "Domain characteristics: Age, history, and technical health indicators (10% weight)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#8888A0]">
                    <CheckCircle className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                The organic traffic component distinguishes Authority Score from purely link-based metrics. SEMrush uses their traffic analytics data to estimate actual search visibility. Sites with impressive link profiles but minimal traffic receive lower AS scores, reflecting the disconnect between artificial authority and real-world performance.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                SEMrush's spam detection analyzes over 45 markers of unnatural linking behavior. Toxic links identified through this analysis reduce Authority Score proportionally to their severity and quantity. This spam integration helps filter out private blog networks that might otherwise appear authoritative.
              </p>
              <p className="text-[#8888A0] leading-relaxed">
                Authority Score uses a logarithmic scale from 0 to 100, similar to other authority metrics. The scale compresses at the top—moving from AS 70 to 80 requires substantially more improvement than moving from AS 20 to 30. This reflects how Google's algorithms work, where top positions demand exponentially more authority.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-4">Authority Score vs Other Metrics</h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Comparing Authority Score to DA and DR reveals important differences:
              </p>
              
              <div className="overflow-x-auto my-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 text-[#55556A]">Factor</th>
                      <th className="text-left py-3 text-[#55556A]">Authority Score (SEMrush)</th>
                      <th className="text-left py-3 text-[#55556A]">Domain Authority (Moz)</th>
                      <th className="text-left py-3 text-[#55556A]">Domain Rating (Ahrefs)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { factor: "Primary Inputs", as: "Links + Traffic + Spam", da: "Links + Spam", dr: "Links only" },
                      { factor: "Traffic Data", as: "Included (35%)", da: "Not included", dr: "Not included" },
                      { factor: "Spam Detection", as: "45+ markers", da: "27 spam flags", dr: "Algorithmic only" },
                      { factor: "Update Frequency", as: "Weekly", da: "Monthly", dr: "Continuous" },
                      { factor: "Scale", as: "0-100", da: "1-100", dr: "0-100" },
                      { factor: "Best For", as: "Overall SEO health", da: "Ranking prediction", dr: "Link strength" },
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-white/[0.06]">
                        <td className="py-3 text-[#F0F0F5] font-medium">{row.factor}</td>
                        <td className="py-3 text-[#8888A0]">{row.as}</td>
                        <td className="py-3 text-[#8888A0]">{row.da}</td>
                        <td className="py-3 text-[#8888A0]">{row.dr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                Authority Score's traffic integration provides unique insights. A site with strong backlinks but poor content might show DR 60 but AS 40. This divergence flags potential quality issues that purely link-based metrics miss.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                DR typically shows the highest scores for any given site due to Ahrefs' focus on dofollow link volume. DA often shows the lowest scores due to Moz's spam integration and conservative calculation. AS usually falls between the two, reflecting its balanced approach.
              </p>
              <p className="text-[#8888A0] leading-relaxed">
                For link building analysis, DR remains the most popular metric among professionals due to Ahrefs' extensive link index. However, AS provides valuable cross-validation. Sites with high DR but low AS warrant investigation for potential quality issues.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-4">What Is a Good Authority Score?</h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Authority Score benchmarks vary by industry and competitive landscape:
              </p>
              
              <div className="overflow-x-auto my-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 text-[#55556A]">Authority Score</th>
                      <th className="text-left py-3 text-[#55556A]">Category</th>
                      <th className="text-left py-3 text-[#55556A]">Typical Site Characteristics</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { score: "0-20", category: "New/Unestablished", characteristics: "New sites, minimal content, few backlinks" },
                      { score: "20-40", category: "Growing", characteristics: "Some traffic, emerging backlink profile" },
                      { score: "40-60", category: "Good", characteristics: "Consistent traffic, quality content, solid links" },
                      { score: "60-80", category: "Strong", characteristics: "High traffic, strong links, established authority" },
                      { score: "80-100", category: "Elite", characteristics: "Major brands, industry leaders, massive traffic" },
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-white/[0.06]">
                        <td className="py-3 font-mono text-[#4F7CFF]">{row.score}</td>
                        <td className="py-3 text-[#F0F0F5]">{row.category}</td>
                        <td className="py-3 text-[#8888A0]">{row.characteristics}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                Most established businesses operate in the AS 40-60 range. This level indicates healthy SEO fundamentals: consistent content production, quality backlink acquisition, and meaningful organic traffic. Sites below AS 40 typically struggle to rank for competitive keywords.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                AS 60+ represents strong competitive positioning. Sites in this range usually dominate their niches or compete effectively in broader markets. Reaching this level requires sustained investment in content and link building over 1-2+ years.
              </p>
              <p className="text-[#8888A0] leading-relaxed">
                AS 80+ belongs to major brands and industry titans: HubSpot, Salesforce, major news outlets. These scores reflect years of authority building and massive content libraries. Few businesses need this level of authority to achieve their SEO goals.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-4">How to Improve Authority Score</h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Improving Authority Score requires addressing all three of its core components:
              </p>

              <p className="text-[#F0F0F5] font-semibold mb-2">Build high-quality backlinks</p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Link power contributes 40% to AS calculation. Focus on earning links from high-AS domains with relevant content. Quality matters more than quantity—a single link from an AS 80 site provides more benefit than dozens from AS 20 sites.
              </p>

              <p className="text-[#F0F0F5] font-semibold mb-2">Increase organic traffic</p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Traffic contributes 35% to AS. Improve rankings through content optimization, technical SEO fixes, and strategic internal linking. Target long-tail keywords for quicker wins while building authority for competitive terms. Higher traffic directly boosts AS.
              </p>

              <p className="text-[#F0F0F5] font-semibold mb-2">Eliminate toxic links</p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Spam factors reduce AS by up to 15%. Regularly audit your backlink profile and disavow toxic links identified by SEMrush's toxicity score. Cleaning your profile often produces faster AS improvements than new link building.
              </p>

              <p className="text-[#F0F0F5] font-semibold mb-2">Publish consistent quality content</p>
              <p className="text-[#8888A0] leading-relaxed">
                Content drives both traffic and link acquisition. Regular publishing signals site health to SEMrush's algorithms. Focus on comprehensive, original content that attracts both readers and backlinks naturally.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-4">Using Authority Score for Link Prospecting</h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Authority Score provides valuable insights for evaluating link opportunities:
              </p>

              <p className="text-[#F0F0F5] font-semibold mb-2">Minimum quality thresholds</p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Prioritize link opportunities on sites with AS 30+. Links from lower-AS sites provide minimal authority transfer. The sweet spot for most niches falls between AS 40-70—authoritative enough to matter, accessible enough to earn.
              </p>

              <p className="text-[#F0F0F5] font-semibold mb-2">Traffic verification</p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Check that linking sites have meaningful organic traffic in SEMrush. A site with AS 50 but zero traffic likely has artificial link building in its own profile. Real authority correlates with real visitors.
              </p>

              <p className="text-[#F0F0F5] font-semibold mb-2">Competitive benchmarking</p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Compare your AS against competitors using SEMrush's Domain Overview. Identify AS gaps that explain ranking disparities. Target link building to close these authority gaps systematically.
              </p>

              <p className="text-[#F0F0F5] font-semibold mb-2">Toxic link identification</p>
              <p className="text-[#8888A0] leading-relaxed">
                SEMrush's toxicity score integrates with Authority Score. Sites with high toxicity scores (above 40%) likely participate in link schemes despite potentially decent AS. Avoid these for sustainable link building.
              </p>
            </section>

            <div className="p-6 rounded-xl bg-gradient-to-r from-[#4F7CFF]/10 to-transparent border border-[#4F7CFF]/20 mb-12">
              <h3 className="font-semibold text-[#F0F0F5] mb-2">Build Authority Score the Right Way</h3>
              <p className="text-[#8888A0] mb-4">We build links that improve your Authority Score through genuine quality. Our placements come from sites with real traffic, strong AS, and editorial standards—not manipulated metrics.</p>
              <Link href="/#pricing" className="inline-flex items-center gap-2 text-[#4F7CFF]">
                View Our Link Building Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-4">Related Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/seo-metrics/domain-authority-vs-domain-rating" className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-[#4F7CFF]/30 transition-colors">
                  <h4 className="text-[#F0F0F5] font-medium mb-1">DA vs DR Comparison</h4>
                  <p className="text-sm text-[#8888A0]">How Moz and Ahrefs metrics compare to Authority Score.</p>
                </Link>
                <Link href="/seo-metrics/domain-authority-explained" className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-[#4F7CFF]/30 transition-colors">
                  <h4 className="text-[#F0F0F5] font-medium mb-1">Domain Authority Explained</h4>
                  <p className="text-sm text-[#8888A0]">Complete guide to Moz's authority metric.</p>
                </Link>
                <Link href="/seo-metrics/domain-rating-explained" className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-[#4F7CFF]/30 transition-colors">
                  <h4 className="text-[#F0F0F5] font-medium mb-1">Domain Rating Explained</h4>
                  <p className="text-sm text-[#8888A0]">Understanding Ahrefs' DR metric.</p>
                </Link>
                <Link href="/link-building-guide" className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-[#4F7CFF]/30 transition-colors">
                  <h4 className="text-[#F0F0F5] font-medium mb-1">Link Building Guide</h4>
                  <p className="text-sm text-[#8888A0]">Strategies for building authority through links.</p>
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
