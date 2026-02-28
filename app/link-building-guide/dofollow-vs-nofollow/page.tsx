import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dofollow vs Nofollow Backlinks: Does Nofollow Still Matter in 2025?",
  description:
    "Understand the critical differences between dofollow and nofollow links. Learn how Google treats each type and what ratio your backlink profile needs.",
  keywords: [
    "dofollow vs nofollow",
    "dofollow backlinks",
    "nofollow links",
    "sponsored links",
    "UGC links",
    "link attributes",
    "link juice",
  ],
  alternates: {
    canonical: "/link-building-guide/dofollow-vs-nofollow/",
  },
};

export default function DofollowVsNofollowPage() {
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
              Dofollow vs Nofollow Backlinks: Does Nofollow Still Matter in 2025?
            </h1>
            <p className="text-lg text-[#8888A0] leading-relaxed">
              Google changed how it treats nofollow links in 2019. Understand what this means for your 
              link building strategy and how to optimize your backlink profile for maximum impact.
            </p>
          </header>

          {/* Featured Snippet */}
          <div className="p-6 rounded-xl bg-[#4F7CFF]/10 border border-[#4F7CFF]/30 mb-10">
            <p className="text-[#F0F0F5] leading-relaxed">
              <strong>Dofollow links pass ranking power and authority</strong> from the linking site to 
              yours, while <strong>nofollow links instruct search engines not to follow or pass authority</strong>. 
              However, since 2019, Google treats nofollow as a hint rather than a directive, potentially 
              using these links for crawling and ranking in some cases. A healthy backlink profile 
              maintains a 60:40 to 80:20 ratio of dofollow to nofollow links.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-16">
            {/* Section 1 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What is the difference between dofollow and nofollow links?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                The fundamental difference between dofollow and nofollow links lies in how search 
                engines treat them when crawling and ranking pages. This distinction affects which 
                links contribute to your SEO performance.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="p-6 rounded-xl bg-green-500/5 border border-green-500/20">
                  <h3 className="font-[family-name:var(--font-syne)] font-bold text-lg text-green-400 mb-3">
                    Dofollow Links
                  </h3>
                  <p className="text-[#8888A0] text-sm mb-3">
                    The default link type. Search engines follow these links and pass ranking authority 
                    from the source page to the destination.
                  </p>
                  <div className="p-3 rounded bg-[#111118]">
                    <code className="text-xs text-[#8888A0]">
                      &lt;a href="https://example.com"&gt;Link Text&lt;/a&gt;
                    </code>
                  </div>
                </div>
                
                <div className="p-6 rounded-xl bg-orange-500/5 border border-orange-500/20">
                  <h3 className="font-[family-name:var(--font-syne)] font-bold text-lg text-orange-400 mb-3">
                    Nofollow Links
                  </h3>
                  <p className="text-[#8888A0] text-sm mb-3">
                    Contains a rel="nofollow" attribute. Historically instructed search engines not to 
                    pass authority, now treated as a hint.
                  </p>
                  <div className="p-3 rounded bg-[#111118]">
                    <code className="text-xs text-[#8888A0]">
                      &lt;a href="https://example.com" rel="nofollow"&gt;Link Text&lt;/a&gt;
                    </code>
                  </div>
                </div>
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                Dofollow links represent editorial endorsements. When a website links to your content 
                without restrictions, they're essentially voting for your credibility. Search engines 
                count these votes when determining rankings.
              </p>
              <p className="text-[#8888A0] leading-relaxed">
                Nofollow links were introduced in 2005 to combat comment spam. Bloggers could add 
                nofollow to user-generated links, preventing spammers from gaining SEO benefits. The 
                attribute signaled: "I don't vouch for this link."
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                Does Google follow nofollow links?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Yes. In March 2019, Google fundamentally changed how it treats nofollow links. The 
                search engine announced that nofollow would become a hint rather than a directive, 
                meaning Google could choose to follow and use nofollow links for ranking purposes.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Google's official statement: "For crawling and indexing purposes, nofollow will become 
                a hint as of March 1, 2020. For ranking purposes, nofollow is already a hint."
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                This change means:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Google may crawl pages through nofollow links, discovering content it might otherwise miss",
                  "Nofollow links potentially contribute to rankings, though with less weight than dofollow",
                  "The search engine uses machine learning to determine when nofollow links represent genuine endorsements",
                  "High-quality nofollow links from authoritative sites carry more implicit value",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-[#4F7CFF] mt-1">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[#8888A0] leading-relaxed">
                While nofollow links don't pass the same ranking power as dofollow, they remain valuable 
                for traffic, brand exposure, and potentially indirect SEO benefits. 
                <Link href="/link-building-guide/types-of-backlinks/" className="text-[#4F7CFF] hover:underline ml-1">
                  Learn about all backlink types →
                </Link>
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What are sponsored and UGC link attributes?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Alongside the nofollow change in 2019, Google introduced two new link attributes to 
                provide more granular control over how links should be treated: sponsored and UGC.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-2">rel="sponsored"</h3>
                  <p className="text-[#8888A0] text-sm mb-3">
                    Identifies links created as part of advertisements, sponsorships, or other compensation 
                    agreements. Required for paid links to comply with Google's guidelines.
                  </p>
                  <code className="text-xs text-[#8888A0] block p-2 rounded bg-[#0A0A0F]">
                    &lt;a href="https://example.com" rel="sponsored"&gt;Link Text&lt;/a&gt;
                  </code>
                </div>
                
                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-2">rel="ugc"</h3>
                  <p className="text-[#8888A0] text-sm mb-3">
                    Stands for User Generated Content. Identifies links within user-generated content 
                    such as comments, forum posts, and reviews.
                  </p>
                  <code className="text-xs text-[#8888A0] block p-2 rounded bg-[#0A0A0F]">
                    &lt;a href="https://example.com" rel="ugc"&gt;Link Text&lt;/a&gt;
                  </code>
                </div>
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                You can combine these attributes when appropriate:
              </p>
              <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06] mb-6">
                <code className="text-sm text-[#8888A0]">
                  &lt;a href="https://example.com" rel="nofollow sponsored"&gt;Link Text&lt;/a&gt;
                </code>
              </div>
              <p className="text-[#8888A0] leading-relaxed">
                Using these attributes correctly helps Google understand the context of your links and 
                prevents potential penalties for undisclosed paid links. Always mark sponsored content 
                appropriately to maintain compliance.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                Do nofollow links help SEO?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Yes, nofollow links help SEO in multiple ways, even if they don't pass the same ranking 
                power as dofollow links. Their value extends beyond direct ranking signals.
              </p>
              
              <p className="text-[#8888A0] leading-relaxed mb-6">
                How nofollow links benefit your SEO:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  { title: "Referral Traffic", desc: "Nofollow links from major sites drive qualified visitors who convert" },
                  { title: "Brand Signals", desc: "Mentions and links build brand entity recognition in Google's knowledge graph" },
                  { title: "Link Diversity", desc: "Natural profiles include both types; 100% dofollow looks suspicious" },
                  { title: "Crawling Discovery", desc: "Google may follow nofollow links to discover and index new pages" },
                  { title: "Indirect Rankings", desc: "Traffic from nofollow links can lead to organic shares and dofollow links" },
                  { title: "Trust Signals", desc: "Links from trusted sources like Wikipedia build credibility regardless of attribute" },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                    <h4 className="font-semibold text-[#F0F0F5] mb-1">{item.title}</h4>
                    <p className="text-sm text-[#8888A0]">{item.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#8888A0] leading-relaxed">
                A link from a major publication like The New York Times with nofollow delivers more 
                value than a dofollow link from an unknown blog. Context, authority, and traffic potential 
                matter more than the technical attribute alone.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What is the ideal dofollow to nofollow ratio?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                A natural backlink profile contains both dofollow and nofollow links. The exact ratio 
                varies by industry and website type, but certain ranges indicate healthy link building 
                practices.
              </p>
              
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Recommended dofollow to nofollow ratios:
              </p>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 text-[#55556A] font-normal">Profile Type</th>
                      <th className="text-center py-3 text-[#55556A] font-normal">Dofollow %</th>
                      <th className="text-center py-3 text-[#55556A] font-normal">Nofollow %</th>
                      <th className="text-left py-3 text-[#55556A] font-normal">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { type: "Conservative", dofollow: "60%", nofollow: "40%", notes: "Very safe,常见于大型企业网站" },
                      { type: "Balanced", dofollow: "70%", nofollow: "30%", notes: "Recommended for most sites" },
                      { type: "Aggressive", dofollow: "80%", nofollow: "20%", notes: "Maximum ranking power focus" },
                      { type: "Natural", dofollow: "65-75%", nofollow: "25-35%", notes: "What most organic profiles show" },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-white/[0.06]">
                        <td className="py-3 text-[#F0F0F5]">{row.type}</td>
                        <td className="py-3 text-center text-[#22C55E]">{row.dofollow}</td>
                        <td className="py-3 text-center text-[#8888A0]">{row.nofollow}</td>
                        <td className="py-3 text-[#8888A0]">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                Warning signs in your ratio:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "100% dofollow links suggest manipulation (no natural profile is entirely dofollow)",
                  "Less than 50% dofollow indicates wasted link building potential",
                  "Sudden shifts in ratio may trigger algorithmic review",
                  "Ratios varying significantly from industry norms warrant investigation",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-orange-400 mt-1">⚠</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[#8888A0] leading-relaxed">
                Check your current ratio using tools like Ahrefs, SEMrush, or Google Search Console. 
                <Link href="/link-building-guide/link-building-metrics/" className="text-[#4F7CFF] hover:underline ml-1">
                  Learn which metrics to track →
                </Link>
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                How to check if a link is dofollow or nofollow?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Identifying whether a link passes authority requires inspecting the HTML code or using 
                specialized tools. Multiple methods exist depending on your technical comfort level.
              </p>
              
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Manual inspection methods:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-3">Method 1: Browser Inspect Tool</h3>
                  <ol className="space-y-2 text-[#8888A0] text-sm">
                    <li>1. Right-click on the link and select "Inspect" or "Inspect Element"</li>
                    <li>2. Look at the HTML code in the developer tools panel</li>
                    <li>3. Check for rel="nofollow", rel="sponsored", or rel="ugc" attributes</li>
                    <li>4. If no rel attribute exists, the link is dofollow by default</li>
                  </ol>
                </div>
                
                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-3">Method 2: Browser Extensions</h3>
                  <p className="text-[#8888A0] text-sm mb-2">
                    Install extensions that highlight nofollow links automatically:
                  </p>
                  <ul className="space-y-1 text-[#8888A0] text-sm">
                    <li>• NoFollow (Chrome/Firefox) - Outlines nofollow links in red</li>
                    <li>• SEO Minion - Shows link attributes on hover</li>
                    <li>• MozBar - Displays followed vs nofollowed in link analysis</li>
                  </ul>
                </div>
                
                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-3">Method 3: SEO Tools</h3>
                  <p className="text-[#8888A0] text-sm mb-2">
                    Professional tools analyze your entire backlink profile:
                  </p>
                  <ul className="space-y-1 text-[#8888A0] text-sm">
                    <li>• Ahrefs Site Explorer - Shows dofollow ratio for any site</li>
                    <li>• SEMrush Backlink Analytics - Filters links by attribute</li>
                    <li>• Majestic - Tags followed vs nofollowed links in reports</li>
                  </ul>
                </div>
              </div>

              <p className="text-[#8888A0] leading-relaxed">
                Regular monitoring helps ensure your link building efforts deliver expected value. 
                If you paid for links advertised as dofollow but received nofollow, address this 
                immediately with your provider.
              </p>
            </section>
          </div>

          {/* Summary Box */}
          <div className="mt-16 p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
            <h3 className="font-[family-name:var(--font-syne)] font-bold text-lg text-[#F0F0F5] mb-4">
              Key Takeaways
            </h3>
            <ul className="space-y-3">
              {[
                "Dofollow links pass ranking power; nofollow links provide other SEO benefits",
                "Google treats nofollow as a hint, potentially using these links for rankings",
                "Use rel='sponsored' for paid links and rel='ugc' for user-generated content",
                "Maintain a 60:40 to 80:20 dofollow to nofollow ratio for a natural profile",
                "Quality matters more than the attribute - a nofollow link from a major site beats a dofollow from a spam site",
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
              Build a Balanced Backlink Profile
            </h3>
            <p className="text-[#8888A0] mb-6">
              Backlinky builds link profiles with optimal dofollow to nofollow ratios. We focus on 
              dofollow links from relevant, authoritative sites while maintaining natural diversity 
              that Google's algorithms trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#pricing"
                className="inline-flex items-center justify-center px-6 py-3 text-white bg-[#4F7CFF] rounded-lg hover:bg-[#3D6AEE] transition-colors font-medium"
              >
                View Link Building Packages
              </Link>
              <Link
                href="/link-building-guide/anchor-text-guide/"
                className="inline-flex items-center justify-center px-6 py-3 text-[#F0F0F5] border border-white/20 rounded-lg hover:bg-white/5 transition-colors"
              >
                Learn About Anchor Text →
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
