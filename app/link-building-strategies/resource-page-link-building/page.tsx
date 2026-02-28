import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resource Page Link Building: Find and Get Listed on Authority Pages",
  description:
    "Master resource page link building with proven search operators and outreach templates. Get listed on curated resource pages for high-quality backlinks.",
  keywords: [
    "resource page link building",
    "resource page links",
    "resource page outreach",
    "link building resources",
    "curated links",
  ],
  alternates: {
    canonical: "/link-building-strategies/resource-page-link-building/",
  },
};

const tableOfContents = [
  { id: "what-are", title: "What are resource pages?" },
  { id: "how-to-find", title: "How to find resource pages?" },
  { id: "how-to-qualify", title: "How to qualify resource pages?" },
  { id: "outreach-template", title: "Resource page outreach template" },
  { id: "success-rate", title: "Success rate and scaling" },
];

export default function ResourcePageLinkBuildingPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#0A0A0F]">
        <article className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="mb-12">
              <div className="flex items-center gap-2 text-sm text-[#4F7CFF] mb-4">
                <span>Link Building Strategies</span>
                <span className="text-[#55556A]">·</span>
                <span className="text-[#55556A]">Updated February 2025</span>
              </div>
              <h1 className="font-[family-name:var(--font-syne)] font-bold text-3xl md:text-4xl lg:text-5xl text-[#F0F0F5] mb-6 leading-tight">
                Resource Page Link Building: Find and Get Listed on Authority Pages
              </h1>
              <p className="text-lg text-[#8888A0] leading-relaxed">
                Resource pages exist specifically to link out to useful tools and content. This guide 
                shows you how to find 100+ relevant resource pages, qualify the best opportunities, 
                and craft pitches that earn permanent backlinks.
              </p>
            </header>

            {/* Table of Contents */}
            <div className="p-6 rounded-xl bg-[#111118] border border-white/[0.06] mb-12">
              <h2 className="font-[family-name:var(--font-syne)] font-semibold text-lg text-[#F0F0F5] mb-4">
                Table of Contents
              </h2>
              <nav className="grid md:grid-cols-2 gap-2">
                {tableOfContents.map((item, index) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center gap-2 text-[#8888A0] hover:text-[#4F7CFF] transition-colors py-1"
                  >
                    <span className="text-[#55556A] w-6">{index + 1}.</span>
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Featured Snippet */}
            <div className="p-6 rounded-xl bg-[#4F7CFF]/5 border border-[#4F7CFF]/20 mb-12">
              <p className="text-[#F0F0F5] leading-relaxed">
                <strong>Resource pages</strong> are curated lists of helpful links and tools for a specific 
                topic. Universities, industry associations, and authority blogs maintain these pages to 
                provide value to their audiences. Resource page link building involves finding these pages 
                and suggesting your content as a valuable addition.
              </p>
            </div>

            {/* H2: What are resource pages? */}
            <section id="what-are" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What are resource pages?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Resource pages serve as curated directories of useful content for specific audiences. 
                Unlike regular blog posts, resource pages exist primarily to link to external resources. 
                This makes them ideal link building targets — site owners actively want to add valuable 
                links to these pages.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Common Types of Resource Pages
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-2">Educational Resources</h4>
                  <p className="text-sm text-[#8888A0]">
                    University pages linking to learning materials, research tools, and study guides. 
                    Often .edu domains with high authority.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-2">Industry Roundups</h4>
                  <p className="text-sm text-[#8888A0]">
                    Trade associations and industry blogs curating the best tools and guides for their niche.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-2">Tool Directories</h4>
                  <p className="text-sm text-[#8888A0]">
                    Lists of software, calculators, and utilities for specific use cases or professions.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-2">Beginner Guides</h4>
                  <p className="text-sm text-[#8888A0]">
                    Collections of introductory content for people new to a topic or industry.
                  </p>
                </div>
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Why Resource Page Links Are Valuable
              </h3>
              <ul className="space-y-2 text-[#8888A0] mb-6">
                <li>• <strong>Editorially placed:</strong> Links are contextually relevant and reviewed by humans</li>
                <li>• <strong>Typically permanent:</strong> Resource pages rarely remove links once added</li>
                <li>• <strong>Relevant traffic:</strong> Visitors browsing resources are actively seeking solutions</li>
                <li>• <strong>Diverse link profile:</strong> Builds natural-looking backlink diversity</li>
                <li>• <strong>Easier acquisition:</strong> Lower competition than guest posting</li>
              </ul>
            </section>

            {/* H2: How to find resource pages? */}
            <section id="how-to-find" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                How to find resource pages?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Finding resource pages requires specific search operators that surface curated link lists. 
                Combine these operators with your target keywords for relevant results.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Essential Resource Page Search Operators
              </h3>
              <div className="bg-[#111118] rounded-lg p-4 mb-6 font-mono text-sm text-[#8888A0] space-y-2">
                <p>your keyword + inurl:resources</p>
                <p>your keyword + intitle:resources</p>
                <p>your keyword + &quot;useful links&quot;</p>
                <p>your keyword + &quot;helpful resources&quot;</p>
                <p>your keyword + &quot;further reading&quot;</p>
                <p>your keyword + &quot;tool roundup&quot;</p>
                <p>your keyword + &quot;best tools&quot; + inurl:links</p>
                <p>your keyword + &quot;student resources&quot; + site:.edu</p>
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Finding .edu Resource Pages
              </h3>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Educational resource pages carry extra authority. Use these searches to find them:
              </p>
              <div className="bg-[#111118] rounded-lg p-4 mb-6 font-mono text-sm text-[#8888A0] space-y-2">
                <p>site:.edu + your keyword + &quot;resources&quot;</p>
                <p>site:.edu + your keyword + &quot;reference&quot;</p>
                <p>site:.edu + your keyword + &quot;library&quot;</p>
                <p>site:.edu + &quot;subject guide&quot; + your keyword</p>
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Using Ahrefs for Resource Page Prospecting
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-[#8888A0] mb-6">
                <li>Enter a competitor URL in Ahrefs Site Explorer</li>
                <li>Navigate to Backlinks report</li>
                <li>Filter for Referring page title containing &quot;resources&quot;</li>
                <li>Export the list and deduplicate</li>
                <li>Repeat with 3-5 competitors for comprehensive coverage</li>
                <li>Filter results by Domain Rating (target DR 30+)</li>
              </ol>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Building Your Resource Page Target List
              </h3>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Track your prospects systematically. Aim to build a list of 100-200 qualified resource 
                pages before starting outreach. Quality matters more than quantity — 50 targeted pages 
                outperform 500 random ones.
              </p>
            </section>

            {/* H2: How to qualify resource pages? */}
            <section id="how-to-qualify" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                How to qualify resource pages?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Not all resource pages deliver value. Some are abandoned, spammy, or buried deep in 
                site architecture. Apply these filters to focus on worthwhile targets.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Resource Page Vetting Checklist
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="space-y-3">
                  <h4 className="font-semibold text-[#22C55E]">✓ Quality Indicators</h4>
                  <label className="flex items-center gap-3 text-[#8888A0]">
                    <input type="checkbox" className="rounded border-[#55556A]" readOnly />
                    <span>Domain Rating 30+</span>
                  </label>
                  <label className="flex items-center gap-3 text-[#8888A0]">
                    <input type="checkbox" className="rounded border-[#55556A]" readOnly />
                    <span>Page indexed by Google</span>
                  </label>
                  <label className="flex items-center gap-3 text-[#8888A0]">
                    <input type="checkbox" className="rounded border-[#55556A]" readOnly />
                    <span>Updated within last 2 years</span>
                  </label>
                  <label className="flex items-center gap-3 text-[#8888A0]">
                    <input type="checkbox" className="rounded border-[#55556A]" readOnly />
                    <span>Under 100 outbound links</span>
                  </label>
                  <label className="flex items-center gap-3 text-[#8888A0]">
                    <input type="checkbox" className="rounded border-[#55556A]" readOnly />
                    <span>Relevant to your niche (70%+)</span>
                  </label>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-red-400">✗ Red Flags</h4>
                  <label className="flex items-center gap-3 text-[#8888A0]">
                    <input type="checkbox" className="rounded border-[#55556A]" readOnly />
                    <span>No traffic or rankings</span>
                  </label>
                  <label className="flex items-center gap-3 text-[#8888A0]">
                    <input type="checkbox" className="rounded border-[#55556A]" readOnly />
                    <span>200+ outbound links</span>
                  </label>
                  <label className="flex items-center gap-3 text-[#8888A0]">
                    <input type="checkbox" className="rounded border-[#55556A]" readOnly />
                    <span>Spammy backlink profile</span>
                  </label>
                  <label className="flex items-center gap-3 text-[#8888A0]">
                    <input type="checkbox" className="rounded border-[#55556A]" readOnly />
                    <span>Clearly selling all links</span>
                  </label>
                  <label className="flex items-center gap-3 text-[#8888A0]">
                    <input type="checkbox" className="rounded border-[#55556A]" readOnly />
                    <span>Abandoned (no updates in 3+ years)</span>
                  </label>
                </div>
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Understanding Resource Page Value Tiers
              </h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 px-3 text-[#55556A]">Tier</th>
                      <th className="text-left py-3 px-3 text-[#55556A]">Characteristics</th>
                      <th className="text-left py-3 px-3 text-[#55556A]">Priority</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#8888A0]">
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-3">Tier 1</td>
                      <td className="py-3 px-3">.edu domains, DR 60+, active curation</td>
                      <td className="py-3 px-3 text-[#22C55E]">High</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-3">Tier 2</td>
                      <td className="py-3 px-3">Industry sites, DR 40-60, regular updates</td>
                      <td className="py-3 px-3 text-[#22C55E]">High</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-3">Tier 3</td>
                      <td className="py-3 px-3">Blogs, DR 30-40, moderate activity</td>
                      <td className="py-3 px-3 text-yellow-400">Medium</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3">Tier 4</td>
                      <td className="py-3 px-3">Low DR, outdated, or high link density</td>
                      <td className="py-3 px-3 text-red-400">Skip</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* H2: Resource page outreach template */}
            <section id="outreach-template" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                Resource page outreach template
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Resource page outreach succeeds when you demonstrate clear value addition. Site owners 
                maintain these pages to help their audience — show them how your content serves that goal.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Primary Outreach Template (12-18% Success Rate)
              </h3>
              <div className="bg-[#111118] rounded-lg p-6 mb-6 font-mono text-sm text-[#8888A0] whitespace-pre-wrap">
                {`Subject: Resource suggestion for [Page Title]

Hi [Name],

I came across your [Page Title] resource page while researching [topic]. You've put together a really helpful collection — particularly liked the section on [specific existing resource].

I recently published [Your Content Title] ([URL]), which [brief description of value proposition]. It covers [key topics] and includes [unique feature like original data, calculator, etc.].

I believe it would be a valuable addition alongside your existing resources on [related topic already on their page]. Happy to share more details if helpful.

Either way, thanks for maintaining such a comprehensive resource list.

Best,
[Your Name]
[Your Title]
[Your Website]
[Your Email]`}
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Alternative: Content Gap Approach
              </h3>
              <div className="bg-[#111118] rounded-lg p-6 mb-6 font-mono text-sm text-[#8888A0] whitespace-pre-wrap">
                {`Subject: Missing resource for [Topic] page?

Hi [Name],

Your [Page Title] resource page is one of the most comprehensive I've found on [topic].

I noticed you don't currently have anything covering [specific subtopic]. I recently created [Your Content Title], which [description of how it fills the gap].

It might complement your existing resources on [related topics already listed]. Would you consider adding it?

Thanks for the great resource,
[Your Name]`}
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Follow-Up Strategy
              </h3>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Send one follow-up 7 days after your initial email. Keep it brief:
              </p>
              <div className="bg-[#111118] rounded-lg p-6 mb-6 font-mono text-sm text-[#8888A0] whitespace-pre-wrap">
                {`Subject: Re: Resource suggestion

Hi [Name],

Quick follow-up on my resource suggestion from last week.

I understand you're busy — no pressure if now isn't a good time to review.

[Your Name]`}
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Outreach Best Practices
              </h3>
              <ul className="space-y-2 text-[#8888A0] mb-6">
                <li>✓ Reference specific resources already on their page (proves you looked)</li>
                <li>✓ Keep emails under 150 words</li>
                <li>✓ Use professional email from your domain (not Gmail)</li>
                <li>✓ Send Tuesday-Thursday, 8-10 AM recipient's time zone</li>
                <li>✓ Track responses and iterate on messaging</li>
                <li>✓ Personalize the first sentence for each outreach</li>
              </ul>
            </section>

            {/* H2: Success rate and scaling */}
            <section id="success-rate" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                Success rate and scaling
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Resource page link building offers predictable results with systematic execution. 
                Understanding realistic metrics helps you plan campaigns and set expectations.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Resource Page Link Building Metrics
              </h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 px-3 text-[#55556A]">Metric</th>
                      <th className="text-left py-3 px-3 text-[#55556A]">Typical Range</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#8888A0]">
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-3">Response Rate</td>
                      <td className="py-3 px-3">15-25%</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-3">Link Placement Rate</td>
                      <td className="py-3 px-3">8-15%</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-3">Average Links Per 100 Outreach</td>
                      <td className="py-3 px-3">8-15 links</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-3">Time Per Link (including prospecting)</td>
                      <td className="py-3 px-3">2-3 hours</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3">Average Domain Authority</td>
                      <td className="py-3 px-3">DR 35-55</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Scaling Resource Page Link Building
              </h3>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                To scale beyond 20 links per month, implement these systems:
              </p>
              <div className="space-y-3 mb-6">
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-1">1. VA Prospecting System</h4>
                  <p className="text-sm text-[#8888A0]">
                    Train virtual assistants to find resource pages using your search operators 
                    and populate tracking spreadsheets with qualifying data.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-1">2. Outreach Automation</h4>
                  <p className="text-sm text-[#8888A0]">
                    Use tools like BuzzStream or Pitchbox for template management, sending, 
                    and response tracking at scale.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-1">3. Content Creation Pipeline</h4>
                  <p className="text-sm text-[#8888A0]">
                    Build a library of linkable resources (guides, tools, studies) that appeal 
                    to different resource page categories.
                  </p>
                </div>
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Monthly Production Targets
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 px-3 text-[#55556A]">Activity</th>
                      <th className="text-left py-3 px-3 text-[#55556A]">Solo Operator</th>
                      <th className="text-left py-3 px-3 text-[#55556A]">With VA Support</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#8888A0]">
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-3">Pages Found</td>
                      <td className="py-3 px-3">100-150</td>
                      <td className="py-3 px-3">300-500</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-3">Outreach Sent</td>
                      <td className="py-3 px-3">75-100</td>
                      <td className="py-3 px-3">200-300</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3">Links Earned</td>
                      <td className="py-3 px-3">8-15</td>
                      <td className="py-3 px-3">25-40</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* CTA Section */}
            <section className="mb-16">
              <div className="p-8 rounded-2xl bg-gradient-to-r from-[#4F7CFF]/20 to-[#4F7CFF]/5 border border-[#4F7CFF]/30">
                <h3 className="font-[family-name:var(--font-syne)] font-bold text-xl text-[#F0F0F5] mb-3 text-center">
                  Scale Your Resource Page Link Building
                </h3>
                <p className="text-[#8888A0] text-center mb-6 max-w-2xl mx-auto">
                  Our team has identified 15,000+ resource pages across industries. 
                  We handle prospecting, vetting, and outreach to deliver 20-30 DR 35+ links monthly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/#pricing"
                    className="inline-flex items-center justify-center px-6 py-3 text-white bg-[#4F7CFF] rounded-lg hover:bg-[#3D6AEE] transition-colors font-medium"
                  >
                    View Resource Page Packages
                  </Link>
                  <Link
                    href="/link-building-strategies/broken-link-building/"
                    className="inline-flex items-center justify-center px-6 py-3 text-[#F0F0F5] border border-white/20 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    Broken Link Building
                  </Link>
                </div>
              </div>
            </section>

            {/* Related Links */}
            <div className="p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-lg text-[#F0F0F5] mb-4">
                Continue Learning
              </h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <Link href="/link-building-strategies/broken-link-building/" className="text-[#4F7CFF] hover:underline">
                  Broken Link Building →
                </Link>
                <Link href="/link-building-strategies/skyscraper-technique/" className="text-[#4F7CFF] hover:underline">
                  Skyscraper Technique →
                </Link>
                <Link href="/link-building-strategies/linkable-assets/" className="text-[#4F7CFF] hover:underline">
                  Building Linkable Assets →
                </Link>
                <Link href="/free-tools/outreach-email-generator/" className="text-[#4F7CFF] hover:underline">
                  Free Outreach Templates →
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
