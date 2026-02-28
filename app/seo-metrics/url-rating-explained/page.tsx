import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, CheckCircle, ArrowLeft } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "URL Rating (UR): The Page-Level Metric That Predicts Rankings",
  description: "URL Rating (UR) is Ahrefs' page-level authority metric. Learn how UR works, how it differs from Domain Rating, and how to use it for competitive analysis and link building.",
};

export default function URLRatingExplained() {
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
              URL Rating (UR): The Page-Level Metric That Predicts Rankings
            </h1>
            <div className="p-6 rounded-xl bg-[#4F7CFF]/5 border border-[#4F7CFF]/20">
              <p className="text-[#F0F0F5] text-lg">
                <strong>URL Rating (UR)</strong> is Ahrefs' page-level authority metric that measures the strength of a specific page's backlink profile on a scale from 0 to 100. Unlike Domain Rating which measures entire websites, UR evaluates individual URLs and serves as one of the strongest predictors of how well a specific page will rank in search results.
              </p>
            </div>
          </header>
          
          <div className="prose prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-4">What Is URL Rating?</h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                URL Rating measures the authority of a specific page based on its backlink profile. Developed by Ahrefs, UR uses the same fundamental calculation as Domain Rating but applies it at the page level rather than the domain level.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                UR scores range from 0 to 100 on a logarithmic scale. The metric considers both the quantity and quality of backlinks pointing to a specific URL, with significant weight given to the UR of linking pages. A backlink from a page with UR 50 passes substantially more authority than one from a page with UR 10.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Ahrefs designed UR to help SEO professionals understand why specific pages rank where they do. While Domain Rating shows overall site strength, UR reveals which individual pages have the authority to compete for competitive keywords.
              </p>
              <p className="text-[#8888A0] leading-relaxed">
                UR correlates strongly with actual Google rankings. Pages ranking in position 1 for competitive keywords typically show UR scores 40+ points higher than pages ranking on page 2. This makes UR invaluable for competitive analysis and ranking difficulty assessment.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-4">How Is UR Different from DR?</h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                While UR and DR share similar calculation methods, they measure authority at different levels and serve different analytical purposes:
              </p>
              
              <div className="overflow-x-auto my-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 text-[#55556A]">Factor</th>
                      <th className="text-left py-3 text-[#55556A]">URL Rating (UR)</th>
                      <th className="text-left py-3 text-[#55556A]">Domain Rating (DR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { factor: "Scope", ur: "Individual page", dr: "Entire domain" },
                      { factor: "Links Measured", ur: "Backlinks to specific URL", dr: "Backlinks to entire domain" },
                      { factor: "Best For", ur: "Page-level competitive analysis", dr: "Domain-level strength comparison" },
                      { factor: "Score Variance", ur: "High variance across pages", dr: "Single score per domain" },
                      { factor: "Calculation Frequency", ur: "Continuous updates", dr: "Continuous updates" },
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-white/[0.06]">
                        <td className="py-3 text-[#F0F0F5] font-medium">{row.factor}</td>
                        <td className="py-3 text-[#8888A0]">{row.ur}</td>
                        <td className="py-3 text-[#8888A0]">{row.dr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                A single domain can have pages with wildly different UR scores. A website with DR 60 might have homepage UR 70, product pages with UR 20-30, and blog posts ranging from UR 5 to UR 50 depending on their backlink profiles.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                UR matters more than DR for determining whether a specific page can rank for a target keyword. A page with DR 30 but UR 40 can outrank pages from DR 70 domains with UR 15. The page-level authority often overrides domain-level signals for specific queries.
              </p>
              <p className="text-[#8888A0] leading-relaxed">
                For link building, both metrics matter. Links from high-DR domains pass more authority generally, but links from high-UR pages provide more concentrated link equity. The ideal backlink comes from a high-DR domain on a page with strong UR.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-4">How Is UR Calculated?</h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Ahrefs calculates URL Rating using a proprietary algorithm that analyzes the backlink profile of individual pages. The calculation follows principles similar to Google's original PageRank algorithm.
              </p>
              
              <p className="text-[#F0F0F5] font-semibold mb-2">Primary calculation factors:</p>
              <ul className="space-y-2 mb-6">
                {[
                  "Number of referring domains to the specific page",
                  "URL Rating of pages linking to the target URL",
                  "Dofollow vs nofollow ratio of incoming links",
                  "Internal link strength from high-UR pages on the same domain",
                  "Link position (content links weighted higher than footer/sidebar)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#8888A0]">
                    <CheckCircle className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                The algorithm uses iterative calculation, similar to PageRank. Each page's UR depends on the UR of pages linking to it, which in turn depends on the UR of pages linking to them. This creates a complex web of authority distribution that requires multiple calculation passes to resolve.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Internal links significantly impact UR. A page with few external backlinks but strong internal links from high-UR pages (like the homepage) can achieve moderate UR scores. This explains why product pages on e-commerce sites often show UR 20-30 even without dedicated link building.
              </p>
              <p className="text-[#8888A0] leading-relaxed">
                Ahrefs discounts nofollow links in UR calculation, focusing primarily on dofollow backlinks that pass ranking equity. This makes UR particularly valuable for link building analysis, as it reflects the actual authority available for ranking improvements.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-4">What Is a Good UR Score?</h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                "Good" URL Rating depends on the keywords you're targeting and your competitive landscape:
              </p>
              
              <div className="overflow-x-auto my-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 text-[#55556A]">UR Range</th>
                      <th className="text-left py-3 text-[#55556A]">Assessment</th>
                      <th className="text-left py-3 text-[#55556A]">Typical Ranking Ability</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { range: "0-10", assessment: "Minimal authority", ranking: "Long-tail keywords only" },
                      { range: "10-30", assessment: "Building authority", ranking: "Low-competition keywords" },
                      { range: "30-50", assessment: "Good authority", ranking: "Moderate competition" },
                      { range: "50-70", assessment: "Strong authority", ranking: "Competitive keywords" },
                      { range: "70-100", assessment: "Elite authority", ranking: "Highly competitive keywords" },
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-white/[0.06]">
                        <td className="py-3 font-mono text-[#4F7CFF]">{row.range}</td>
                        <td className="py-3 text-[#F0F0F5]">{row.assessment}</td>
                        <td className="py-3 text-[#8888A0]">{row.ranking}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                For competitive keyword analysis, examine the UR of pages currently ranking in positions 1-3. If those pages average UR 45, you'll likely need UR 40+ to compete effectively. UR significantly below the ranking average suggests you'll struggle to reach page 1 without substantial link building.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Homepage UR typically exceeds other pages on a domain. A healthy website shows homepage UR 10-20 points higher than the average internal page. Large disparities between homepage UR and internal page UR suggest poor internal linking or lack of deep link building.
              </p>
              <p className="text-[#8888A0] leading-relaxed">
                Remember that UR measures only link-based authority. Content quality, relevance, and user experience also impact rankings. A page with UR 30 and exceptional content can outrank UR 50 pages with thin content.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-4">UR vs Page Authority</h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Moz's Page Authority (PA) serves the same function as Ahrefs' UR—both measure page-level authority. However, they use different methodologies and often show different scores for the same page.
              </p>
              
              <div className="overflow-x-auto my-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 text-[#55556A]">Factor</th>
                      <th className="text-left py-3 text-[#55556A]">URL Rating (Ahrefs)</th>
                      <th className="text-left py-3 text-[#55556A]">Page Authority (Moz)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { factor: "Link Types", ur: "Dofollow only", pa: "All links (dofollow weighted)" },
                      { factor: "Spam Handling", ur: "Algorithmic filtering", pa: "Explicit Spam Score integration" },
                      { factor: "Update Frequency", ur: "Continuous", pa: "Monthly" },
                      { factor: "Scale", ur: "0-100", pa: "1-100" },
                      { factor: "Link Index Size", ur: "3+ trillion URLs", pa: "40+ trillion links" },
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-white/[0.06]">
                        <td className="py-3 text-[#F0F0F5] font-medium">{row.factor}</td>
                        <td className="py-3 text-[#8888A0]">{row.ur}</td>
                        <td className="py-3 text-[#8888A0]">{row.pa}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                Most SEO professionals prefer UR for competitive analysis due to Ahrefs' larger link index and more frequent updates. UR often reflects recent link building activity faster than PA, which updates monthly.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                PA offers value through its Spam Score integration. Pages on manipulative link networks may show inflated UR but lower PA due to Moz's spam detection. Cross-referencing both metrics helps identify potentially problematic pages.
              </p>
              <p className="text-[#8888A0] leading-relaxed">
                For link prospecting, use whichever metric your link building provider references. If they guarantee links on UR 30+ pages, verify using Ahrefs. If they reference PA, use Moz. Alignment between measurement tools prevents reporting discrepancies.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-4">How to Use UR for Link Building Strategy</h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                URL Rating provides actionable insights for link building planning and execution:
              </p>

              <p className="text-[#F0F0F5] font-semibold mb-2">Competitive gap analysis</p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Compare the UR of your target pages against competitors ranking for your desired keywords. If competitors average UR 40 for a keyword and your page shows UR 15, you need approximately 25 points of UR growth through link building to compete effectively.
              </p>

              <p className="text-[#F0F0F5] font-semibold mb-2">Link prospect evaluation</p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Check the UR of pages where you might earn links. A link from a page with UR 30+ provides substantially more value than one from a UR 5 page. Prioritize link opportunities on high-UR pages within relevant content.
              </p>

              <p className="text-[#F0F0F5] font-semibold mb-2">Internal link optimization</p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Identify high-UR pages on your site and ensure they link to important commercial pages. Internal links from UR 40+ pages pass significant authority. A single internal link from your homepage (typically your highest-UR page) can boost product page UR substantially.
              </p>

              <p className="text-[#F0F0F5] font-semibold mb-2">Content prioritization</p>
              <p className="text-[#8888A0] leading-relaxed">
                Focus link building efforts on pages with existing UR momentum. A page that reached UR 25 organically shows link-earning potential and deserves additional investment. Pages stuck at UR 0-5 despite quality content may need content improvements before link building.
              </p>
            </section>

            <div className="p-6 rounded-xl bg-gradient-to-r from-[#4F7CFF]/10 to-transparent border border-[#4F7CFF]/20 mb-12">
              <h3 className="font-semibold text-[#F0F0F5] mb-2">Build Links That Boost Your UR</h3>
              <p className="text-[#8888A0] mb-4">We secure backlinks on high-UR pages that pass maximum authority. Our placements average UR 25+ from relevant, quality sites.</p>
              <Link href="/#pricing" className="inline-flex items-center gap-2 text-[#4F7CFF]">
                View Our Link Building Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-4">Related Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/seo-metrics/domain-rating-explained" className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-[#4F7CFF]/30 transition-colors">
                  <h4 className="text-[#F0F0F5] font-medium mb-1">Domain Rating Explained</h4>
                  <p className="text-sm text-[#8888A0]">Understanding Ahrefs' domain-level authority metric.</p>
                </Link>
                <Link href="/seo-metrics/domain-authority-vs-domain-rating" className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-[#4F7CFF]/30 transition-colors">
                  <h4 className="text-[#F0F0F5] font-medium mb-1">DA vs DR Comparison</h4>
                  <p className="text-sm text-[#8888A0]">Comparing Moz and Ahrefs authority metrics.</p>
                </Link>
                <Link href="/seo-metrics/backlink-profile-analysis" className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-[#4F7CFF]/30 transition-colors">
                  <h4 className="text-[#F0F0F5] font-medium mb-1">Backlink Profile Analysis</h4>
                  <p className="text-sm text-[#8888A0]">How to audit your backlinks and identify UR improvement opportunities.</p>
                </Link>
                <Link href="/link-building-guide" className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-[#4F7CFF]/30 transition-colors">
                  <h4 className="text-[#F0F0F5] font-medium mb-1">Link Building Guide</h4>
                  <p className="text-sm text-[#8888A0]">Complete guide to building backlinks that increase UR.</p>
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
