import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Internal Linking for SEO: The Strategy That Multiplies Your Link Equity",
  description:
    "Master internal linking to boost rankings and distribute link equity. Learn the hub and spoke model, anchor text strategies, and best practices.",
  keywords: [
    "internal linking",
    "internal linking SEO",
    "hub and spoke model",
    "link equity",
    "orphan pages",
    "internal link strategy",
    "site architecture",
  ],
  alternates: {
    canonical: "/link-building-guide/internal-linking-for-seo/",
  },
};

export default function InternalLinkingPage() {
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
              Internal Linking for SEO: The Strategy That Multiplies Your Link Equity
            </h1>
            <p className="text-lg text-[#8888A0] leading-relaxed">
              Internal linking is the most underutilized SEO tactic. Learn how to distribute authority, 
              improve crawlability, and boost rankings with strategic internal links.
            </p>
          </header>

          {/* Featured Snippet */}
          <div className="p-6 rounded-xl bg-[#4F7CFF]/10 border border-[#4F7CFF]/30 mb-10">
            <p className="text-[#F0F0F5] leading-relaxed">
              <strong>Internal linking</strong> connects pages within your website, distributing link 
              equity (ranking power) from high-authority pages to lower-authority ones. Strategic 
              internal linking improves crawlability, establishes topical authority through content 
              clusters, and helps pages rank faster by signaling importance to search engines. The 
              hub and spoke model organizes content around pillar pages (hubs) that link to related 
              subtopics (spokes), creating clear topical authority signals that Google rewards with 
              higher rankings for competitive keywords.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-16">
            {/* Section 1 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What is internal linking?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Internal links are hyperlinks that point from one page on a domain to a different page 
                on the same domain. Unlike external backlinks that pass authority between websites, 
                internal links distribute authority within your website.
              </p>
              
              <p className="text-[#8888A0] leading-relaxed mb-4">
                While external backlinks get most SEO attention, internal links provide significant 
                ranking benefits you directly control. You can't force other sites to link to you, 
                but you can optimize your internal link structure immediately.
              </p>

              <p className="text-[#8888A0] leading-relaxed mb-6">
                Internal links serve three primary SEO functions:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  { func: "Authority Distribution", desc: "Transfer ranking power from strong pages to weaker ones needing boost" },
                  { func: "Crawl Efficiency", desc: "Help search engines discover and index all your important pages" },
                  { func: "Topical Authority", desc: "Establish expertise through connected content clusters" },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                    <h4 className="font-semibold text-[#F0F0F5] mb-2">{item.func}</h4>
                    <p className="text-sm text-[#8888A0]">{item.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#8888A0] leading-relaxed">
                Every internal link is an opportunity to tell Google which pages matter most and how 
                your content relates thematically.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                How does internal linking help SEO?
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Internal linking delivers measurable SEO improvements across multiple dimensions:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-2">1. Link Equity Distribution</h3>
                  <p className="text-[#8888A0] text-sm">
                    Your homepage and key landing pages typically receive the most external backlinks. 
                    Internal links transfer this authority deeper into your site, boosting product pages, 
                    blog posts, and other content that rarely earns direct backlinks. A page with 10 
                    internal links from high-authority pages often outranks competitors with more 
                    backlinks but poor internal linking.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-2">2. Improved Crawl Budget Efficiency</h3>
                  <p className="text-[#8888A0] text-sm">
                    Search engines allocate limited crawl resources to each site. Strategic internal 
                    links ensure crawlers discover your most important pages quickly and frequently. 
                    Well-linked pages get crawled daily; orphaned pages might wait weeks between crawls.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-2">3. Ranking Boost for Target Keywords</h3>
                  <p className="text-[#8888A0] text-sm">
                    Internal anchor text provides relevance signals. Links to your pricing page using 
                    "SaaS pricing" as anchor text reinforce that page's topical relevance. Multiple 
                    internal links with consistent, relevant anchors compound ranking signals.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-2">4. User Engagement Metrics</h3>
                  <p className="text-[#8888A0] text-sm">
                    Internal links keep visitors on your site longer, reducing bounce rates and 
                    increasing pages per session. These behavioral signals indirectly influence rankings 
                    by demonstrating content quality and user satisfaction.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-2">5. Faster Indexing of New Content</h3>
                  <p className="text-[#8888A0] text-sm">
                    New blog posts linked from your homepage or popular articles get discovered and 
                    indexed within hours rather than days or weeks. Internal links are the fastest 
                    way to get new content into Google's index.
                  </p>
                </div>
              </div>

              <p className="text-[#8888A0] leading-relaxed">
                Studies consistently show that optimizing internal linking structure delivers 10-30% 
                ranking improvements without acquiring a single new backlink.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What is the hub and spoke model?
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-4">
                The hub and spoke model (also called pillar-cluster or topic cluster architecture) 
                organizes content around central pillar pages that broadly cover a topic, with spoke 
                pages diving deeper into specific subtopics.
              </p>

              <p className="text-[#8888A0] leading-relaxed mb-6">
                Hub and spoke structure:
              </p>
              
              <div className="p-6 rounded-xl bg-[#111118] border border-white/[0.06] mb-6">
                <div className="text-center mb-4">
                  <div className="inline-block px-6 py-3 rounded-lg bg-[#4F7CFF]/20 border border-[#4F7CFF]/40">
                    <span className="font-semibold text-[#F0F0F5]">HUB: Pillar Page</span>
                    <p className="text-sm text-[#8888A0]">"The Complete Guide to Link Building"</p>
                    <p className="text-xs text-[#55556A]">Broad topic, comprehensive coverage, targets head keywords</p>
                  </div>
                </div>
                <div className="flex justify-center gap-4 flex-wrap">
                  {[
                    "Guest Posting Guide",
                    "Link Building Metrics",
                    "Anchor Text Strategy",
                    "Link Velocity",
                    "Toxic Backlinks",
                  ].map((spoke, i) => (
                    <div key={i} className="px-4 py-2 rounded bg-[#0A0A0F] border border-white/[0.06] text-sm text-[#8888A0]">
                      {spoke}
                    </div>
                  ))}
                </div>
                <p className="text-center text-xs text-[#55556A] mt-4">SPOKES: Cluster Content → Link to Hub</p>
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-6">
                How hub and spoke internal linking works:
              </p>
              <ol className="space-y-3 mb-6">
                {[
                  "Pillar page links to all related spoke pages, distributing authority downward",
                  "Each spoke page links back to the pillar, reinforcing the pillar's importance",
                  "Spokes link to each other when topically relevant, creating topic depth signals",
                  "External backlinks to any cluster page benefit the entire topic network",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-[#4F7CFF] font-mono w-6">{i + 1}.</span>
                    {item}
                  </li>
                ))}
              </ol>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                Benefits of hub and spoke architecture:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Establishes topical authority by demonstrating comprehensive coverage",
                  "Creates clear content hierarchy that search engines easily understand",
                  "Distributes link equity efficiently throughout related content",
                  "Improves user experience by organizing related information logically",
                  "Enables ranking for both broad (pillar) and long-tail (spoke) keywords",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-[#22C55E] mt-1">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[#8888A0] leading-relaxed">
                <Link href="/link-building-guide/" className="text-[#4F7CFF] hover:underline">
                  See our hub and spoke structure in action →
                </Link>
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                How to optimize anchor text for internal links?
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Internal link anchor text optimization differs from external backlink anchor text. 
                You have complete control, so strategic precision matters more than artificial variety.
              </p>

              <p className="text-[#8888A0] leading-relaxed mb-6">
                Internal anchor text best practices:
              </p>
              
              <div className="space-y-4 mb-6">
                {[
                  { tip: "Use Descriptive Keywords", desc: 'Unlike external links where you avoid exact match, internal links should use relevant keywords. Linking to your pricing page with "pricing" or "plans" reinforces topical relevance.' },
                  { tip: "Avoid Generic Phrases", desc: 'Minimize "click here," "read more," and "learn more." These waste opportunity to send relevance signals. Reserve generic anchors for when context makes the destination obvious.' },
                  { tip: "Vary Your Anchors", desc: 'Don\'t use identical anchor text for every link to a page. Mix "link building guide," "guide to link building," and "link building strategies" for natural variation.' },
                  { tip: "Keep It Concise", desc: "Ideal internal anchors are 2-5 words. Long sentences as anchors appear spammy and reduce readability." },
                  { tip: "Match User Intent", desc: "Anchor text should accurately describe what users find when clicking. Misleading anchors increase bounce rates and hurt UX signals." },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-lg bg-green-500/5 border border-green-500/20">
                    <h4 className="font-semibold text-green-400 mb-1">{item.tip}</h4>
                    <p className="text-sm text-[#8888A0]">{item.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                Internal anchor text formula by location:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 text-[#55556A] font-normal">Context</th>
                      <th className="text-left py-3 text-[#55556A] font-normal">Anchor Type</th>
                      <th className="text-left py-3 text-[#55556A] font-normal">Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { context: "Body content links", type: "Keyword-rich, descriptive", example: "link building strategies" },
                      { context: "Navigation menus", type: "Short labels", example: "Services, Pricing" },
                      { context: "Breadcrumb links", type: "Category names", example: "Blog &gt; Link Building" },
                      { context: "Footer links", type: "Standard labels", example: "About, Contact" },
                      { context: "Related posts", type: "Article titles", example: "10 Link Building Tactics" },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-white/[0.06]">
                        <td className="py-3 text-[#F0F0F5]">{row.context}</td>
                        <td className="py-3 text-[#8888A0]">{row.type}</td>
                        <td className="py-3 text-[#8888A0]">{row.example}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#8888A0] leading-relaxed">
                <Link href="/link-building-guide/anchor-text-guide/" className="text-[#4F7CFF] hover:underline">
                  Learn more about anchor text optimization →
                </Link>
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What are orphan pages?
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Orphan pages are pages on your website with no internal links pointing to them. 
                They're disconnected from your site architecture, making them difficult for search 
                engines to discover and users to find.
              </p>

              <p className="text-[#8888A0] leading-relaxed mb-6">
                Problems caused by orphan pages:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  { problem: "Poor Indexation", desc: "Without internal links, Google may never find or index the page" },
                  { problem: "Wasted Authority", desc: "Even if indexed, orphan pages receive no link equity from your site" },
                  { problem: "Crawl Budget Waste", desc: "Search engines waste resources discovering orphaned content inefficiently" },
                  { problem: "Poor User Experience", desc: "Users can only reach orphan pages through external links or direct URL entry" },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                    <h4 className="font-semibold text-red-400 mb-1">{item.problem}</h4>
                    <p className="text-sm text-[#8888A0]">{item.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-6">
                How to identify orphan pages:
              </p>
              <ol className="space-y-3 mb-6">
                {[
                  "Crawl your site with Screaming Frog, Sitebulb, or DeepCrawl",
                  "Export all discovered URLs",
                  "Cross-reference with server log files or analytics to find accessed pages not in crawl",
                  'Check Google Search Console Coverage report for "Discovered - not indexed" pages',
                  "Review XML sitemap against crawled pages for discrepancies",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-[#4F7CFF] font-mono w-6">{i + 1}.</span>
                    {item}
                  </li>
                ))}
              </ol>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                Fixing orphan pages:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Add contextual internal links from relevant existing content",
                  "Include orphan pages in navigation menus or footers if broadly relevant",
                  "Link from hub pages in your topic cluster architecture",
                  "Create new content that naturally references orphan pages",
                  "Consider removing truly orphaned pages with no traffic or strategic value",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-[#22C55E] mt-1">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[#8888A0] leading-relaxed">
                Regular site audits should identify and eliminate orphan pages. Every valuable page 
                deserves at least one internal link pathway.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                Best internal linking tools
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Multiple tools help audit, optimize, and automate internal linking at scale. Choose 
                based on your site size and optimization needs.
              </p>

              <p className="text-[#8888A0] leading-relaxed mb-6">
                Recommended internal linking tools:
              </p>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 text-[#55556A] font-normal">Tool</th>
                      <th className="text-left py-3 text-[#55556A] font-normal">Primary Function</th>
                      <th className="text-left py-3 text-[#55556A] font-normal">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { tool: "Screaming Frog", function: "Crawl analysis, orphan page detection", best: "Technical SEO audits" },
                      { tool: "Sitebulb", function: "Internal link visualization, crawl maps", best: "Visual site architecture analysis" },
                      { tool: "Ahrefs", function: "Internal backlink analysis, opportunity finder", best: "Identifying internal link opportunities" },
                      { tool: "Link Whisper", function: "AI internal link suggestions", best: "WordPress automated linking" },
                      { tool: "Yoast SEO", function: "Internal linking suggestions", best: "WordPress content optimization" },
                      { tool: "Surfer SEO", function: "Internal link recommendations", best: "Content optimization workflows" },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-white/[0.06]">
                        <td className="py-3 text-[#F0F0F5]">{row.tool}</td>
                        <td className="py-3 text-[#8888A0]">{row.function}</td>
                        <td className="py-3 text-[#8888A0]">{row.best}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                Internal linking workflow:
              </p>
              <ol className="space-y-3 mb-6">
                {[
                  "Quarterly: Crawl site to identify orphan pages and broken internal links",
                  "Monthly: Review internal link distribution using Ahrefs or Sitebulb",
                  "Weekly: Add contextual internal links to new content during publication",
                  "Ongoing: Monitor key pages' internal link counts, ensuring balanced distribution",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-[#4F7CFF] font-mono w-6">{i + 1}.</span>
                    {item}
                  </li>
                ))}
              </ol>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                Internal linking metrics to track:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Internal links per page (aim for 3-5 minimum on important pages)",
                  "Click depth from homepage (keep important content within 3 clicks)",
                  "Orphan page count (target zero)",
                  "Broken internal links (target zero)",
                  "Distribution of internal link authority (use tools like Sitebulb)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-[#4F7CFF]">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[#8888A0] leading-relaxed">
                Manual internal linking often outperforms automated solutions. Automated tools suggest 
                relevant connections, but human judgment ensures contextual appropriateness and strategic 
                authority distribution.
              </p>
            </section>
          </div>

          {/* Summary Box */}
          <div className="mt-16 p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
            <h3 className="font-[family-name:var(--font-syne)] font-bold text-lg text-[#F0F0F5] mb-4">
              Internal Linking Checklist
            </h3>
            <ul className="space-y-3">
              {[
                "Implement hub and spoke content architecture",
                "Link to important pages from your homepage",
                "Add 3-5 contextual internal links to every new piece of content",
                "Use descriptive, keyword-rich anchor text",
                "Eliminate orphan pages by adding internal links",
                "Fix all broken internal links",
                "Ensure important pages are within 3 clicks of homepage",
                "Audit internal link structure quarterly",
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
              Multiply Your Link Building Results
            </h3>
            <p className="text-[#8888A0] mb-6">
              Internal linking amplifies the impact of every backlink you earn. Backlinky helps SaaS 
              companies implement hub and spoke architecture and optimize internal link distribution 
              to maximize the value of their link building investments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#pricing"
                className="inline-flex items-center justify-center px-6 py-3 text-white bg-[#4F7CFF] rounded-lg hover:bg-[#3D6AEE] transition-colors font-medium"
              >
                Get SEO Services
              </Link>
              <Link
                href="/link-building-guide/link-building-strategies/"
                className="inline-flex items-center justify-center px-6 py-3 text-[#F0F0F5] border border-white/20 rounded-lg hover:bg-white/5 transition-colors"
              >
                Explore Link Building Strategies →
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
