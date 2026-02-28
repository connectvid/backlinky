import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Broken Link Building: Step-by-Step Process to Steal Competitor Links",
  description:
    "Master broken link building with proven tools and templates. Find dead links, create replacement content, and earn backlinks from authority sites.",
  keywords: [
    "broken link building",
    "broken link building guide",
    "find broken links",
    "broken link outreach",
    "link reclamation",
  ],
  alternates: {
    canonical: "/link-building-strategies/broken-link-building/",
  },
};

const tableOfContents = [
  { id: "what-is", title: "What is broken link building?" },
  { id: "how-to-find", title: "How to find broken links?" },
  { id: "tools", title: "What tools find broken links?" },
  { id: "replacement-content", title: "How to create replacement content?" },
  { id: "email-template", title: "Broken link building email template" },
  { id: "success-rate", title: "Success rate and expectations" },
];

export default function BrokenLinkBuildingPage() {
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
                Broken Link Building: Step-by-Step Process to Steal Competitor Links
              </h1>
              <p className="text-lg text-[#8888A0] leading-relaxed">
                Broken link building delivers 15-25% response rates — 3x higher than guest posting. 
                This guide shows you how to find dead links, create replacement content, and earn 
                backlinks from authority sites that already link to similar resources.
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
                <strong>Broken link building</strong> is the practice of finding dead links on other websites, 
                creating replacement content on your site, and reaching out to suggest your resource as the 
                new link target. This strategy provides value to webmasters by helping them fix user experience 
                issues while earning you contextual backlinks.
              </p>
            </div>

            {/* H2: What is broken link building? */}
            <section id="what-is" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What is broken link building?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Broken link building works because websites constantly change. Pages get deleted, domains 
                expire, and URLs change — leaving dead links across the web. These broken links hurt user 
                experience and SEO. When you identify these dead links and offer a replacement resource, 
                site owners benefit from your help and reward you with a backlink.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                The Broken Link Building Process
              </h3>
              <ol className="list-decimal list-inside space-y-3 text-[#8888A0] mb-8">
                <li><strong>Find broken links</strong> on authority sites in your niche using specialized tools</li>
                <li><strong>Analyze the original content</strong> that was linked using the Wayback Machine</li>
                <li><strong>Create superior replacement content</strong> that serves the same purpose better</li>
                <li><strong>Identify all sites linking</strong> to the broken resource for maximum efficiency</li>
                <li><strong>Craft helpful outreach emails</strong> notifying webmasters of the broken links</li>
                <li><strong>Suggest your content</strong> as the replacement without being pushy</li>
                <li><strong>Track placements</strong> and build relationships for future opportunities</li>
              </ol>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Why Broken Link Building Works So Well
              </h3>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06] text-center">
                  <div className="text-3xl font-bold text-[#22C55E] mb-2">15-25%</div>
                  <div className="text-sm text-[#8888A0]">Average response rate</div>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06] text-center">
                  <div className="text-3xl font-bold text-[#22C55E] mb-2">Value-First</div>
                  <div className="text-sm text-[#8888A0]">Helps webmasters, not just asks</div>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06] text-center">
                  <div className="text-3xl font-bold text-[#22C55E] mb-2">Contextual</div>
                  <div className="text-sm text-[#8888A0]">Links appear naturally in content</div>
                </div>
              </div>
            </section>

            {/* H2: How to find broken links? */}
            <section id="how-to-find" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                How to find broken links?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Finding broken links requires systematic prospecting. You can approach this from two angles: 
                analyzing competitor resources or searching resource pages in your niche.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Method 1: Competitor Resource Analysis
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-[#8888A0] mb-6">
                <li>Identify 5-10 authoritative sites in your niche with resource pages</li>
                <li>Use Ahrefs Site Explorer to analyze their outgoing links</li>
                <li>Filter for 404 errors in the outgoing links report</li>
                <li>Export broken links with referring domains data</li>
                <li>Sort by number of referring domains (more links = bigger opportunity)</li>
                <li>Verify each broken link manually before creating content</li>
              </ol>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Method 2: Resource Page Prospecting
              </h3>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Search for resource pages in your niche using these Google operators:
              </p>
              <div className="bg-[#111118] rounded-lg p-4 mb-6 font-mono text-sm text-[#8888A0] space-y-2">
                <p>your keyword + inurl:resources</p>
                <p>your keyword + intitle:resources</p>
                <p>your keyword + &quot;useful links&quot;</p>
                <p>your keyword + &quot;further reading&quot;</p>
                <p>your keyword + &quot;helpful resources&quot;</p>
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Method 3: Wikipedia Dead Link Mining
              </h3>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Wikipedia articles constantly accumulate dead citations. These represent opportunities 
                because Wikipedia editors actively seek replacements. Search: 
                <code className="bg-[#111118] px-2 py-1 rounded">site:wikipedia.org &quot;dead link&quot; &quot;your keyword&quot;</code>. 
                Create content matching the original citation, then suggest it on the Wikipedia talk page.
              </p>
            </section>

            {/* H2: What tools find broken links? */}
            <section id="tools" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What tools find broken links?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Effective broken link building requires specialized tools for discovery, analysis, and outreach. 
                These are the essential tools for each stage.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Link Discovery Tools
              </h3>
              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-[#F0F0F5]">Ahrefs</h4>
                    <span className="text-xs text-[#55556A]">$99/month</span>
                  </div>
                  <p className="text-sm text-[#8888A0] mb-2">
                    Best broken link checker. Use Site Explorer &gt; Outgoing Links &gt; Broken Links to 
                    find 404s on any website. Export with referring domains for opportunity sizing.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-[#F0F0F5]">Screaming Frog</h4>
                    <span className="text-xs text-[#55556A]">Free / £149/year</span>
                  </div>
                  <p className="text-sm text-[#8888A0] mb-2">
                    Crawl resource pages to find broken outbound links. Set to check external links 
                    and filter for 404 status codes.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-[#F0F0F5]">Check My Links (Chrome Extension)</h4>
                    <span className="text-xs text-[#55556A]">Free</span>
                  </div>
                  <p className="text-sm text-[#8888A0] mb-2">
                    One-click broken link checker for any page. Visit resource pages and click the 
                    extension to highlight broken links instantly.
                  </p>
                </div>
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Content Analysis Tools
              </h3>
              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-2">Wayback Machine</h4>
                  <p className="text-sm text-[#8888A0]">
                    View archived versions of broken URLs to understand what content originally existed. 
                    Essential for creating accurate replacement content.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-2">Ahrefs Content Explorer</h4>
                  <p className="text-sm text-[#8888A0]">
                    Find content similar to the broken resource. Analyze what made the original successful 
                    and identify improvement opportunities.
                  </p>
                </div>
              </div>
            </section>

            {/* H2: How to create replacement content? */}
            <section id="replacement-content" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                How to create replacement content?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Replacement content must objectively improve upon the original broken resource. Site owners 
                will only update links if your content clearly serves their audience better.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                The Skyscraper Method for Broken Links
              </h3>
              <ol className="list-decimal list-inside space-y-3 text-[#8888A0] mb-6">
                <li><strong>Analyze the original content</strong> using Wayback Machine snapshots</li>
                <li><strong>Identify what made it link-worthy</strong> (data, guides, tools, etc.)</li>
                <li><strong>Make it more comprehensive</strong> — expand coverage by 30-50%</li>
                <li><strong>Update outdated information</strong> — refresh statistics and examples</li>
                <li><strong>Improve design and UX</strong> — better formatting, visuals, and navigation</li>
                <li><strong>Add unique value</strong> — original research, case studies, or tools</li>
              </ol>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Content Types That Replace Broken Links Best
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-2">1. Comprehensive Guides</h4>
                  <p className="text-sm text-[#8888A0]">
                    Replace thin listicles with 3,000+ word definitive resources covering every aspect of the topic.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-2">2. Original Research</h4>
                  <p className="text-sm text-[#8888A0]">
                    Replace opinion pieces with data-driven studies, surveys, or original analysis.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-2">3. Free Tools/Calculators</h4>
                  <p className="text-sm text-[#8888A0]">
                    Replace broken tools with functional alternatives that solve the same problem.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-2">4. Updated Statistics</h4>
                  <p className="text-sm text-[#8888A0]">
                    Replace outdated data roundups with current-year statistics and sources.
                  </p>
                </div>
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Content Quality Checklist
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="flex items-center gap-3 text-[#8888A0]">
                    <input type="checkbox" className="rounded border-[#55556A]" readOnly />
                    <span>Longer than the original (minimum 1.5x word count)</span>
                  </label>
                  <label className="flex items-center gap-3 text-[#8888A0]">
                    <input type="checkbox" className="rounded border-[#55556A]" readOnly />
                    <span>More current data and examples</span>
                  </label>
                  <label className="flex items-center gap-3 text-[#8888A0]">
                    <input type="checkbox" className="rounded border-[#55556A]" readOnly />
                    <span>Better visual design and formatting</span>
                  </label>
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 text-[#8888A0]">
                    <input type="checkbox" className="rounded border-[#55556A]" readOnly />
                    <span>Original insights or unique angle</span>
                  </label>
                  <label className="flex items-center gap-3 text-[#8888A0]">
                    <input type="checkbox" className="rounded border-[#55556A]" readOnly />
                    <span>Professional images and graphics</span>
                  </label>
                  <label className="flex items-center gap-3 text-[#8888A0]">
                    <input type="checkbox" className="rounded border-[#55556A]" readOnly />
                    <span>Clear value proposition in intro</span>
                  </label>
                </div>
              </div>
            </section>

            {/* H2: Broken link building email template */}
            <section id="email-template" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                Broken link building email template
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                The best broken link outreach emails lead with value and make linking to your content 
                the obvious next step. Here are proven templates for different scenarios.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Template 1: Single Broken Link (15-20% Success Rate)
              </h3>
              <div className="bg-[#111118] rounded-lg p-6 mb-6 font-mono text-sm text-[#8888A0] whitespace-pre-wrap">
                {`Subject: Broken link on your [Topic] resources page

Hi [Name],

I was researching [topic] and came across your excellent resources page at [URL].

I noticed the link to [Broken Page Title] ([Broken URL]) appears to be broken — it returns a 404 error.

I recently published [Your Content Title] ([Your URL]), which covers similar ground with updated 2025 data and additional [specific value add]. It might serve as a useful replacement for your readers.

Either way, thought you'd want to know about the broken link.

Best,
[Your Name]
[Your Title]
[Your Website]`}
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Template 2: Multiple Broken Links (20-25% Success Rate)
              </h3>
              <div className="bg-[#111118] rounded-lg p-6 mb-6 font-mono text-sm text-[#8888A0] whitespace-pre-wrap">
                {`Subject: Found 3 broken links on your [Page Title] page

Hi [Name],

Big fan of your [Site Name] resources — I reference them often in my work.

While reviewing your [Page Title] page ([URL]), I found 3 links that appear to be broken:

1. [Link Anchor Text] — [Broken URL]
2. [Link Anchor Text] — [Broken URL]
3. [Link Anchor Text] — [Broken URL]

I actually created [Your Content Title] ([Your URL]) last month, which could replace the first broken link. It includes [specific improvements over original].

Happy to share the other broken links if helpful, or feel free to check them yourself with any link checker tool.

Thanks for maintaining such a valuable resource.

[Your Name]
[Your Website]`}
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Template 3: Resource Page Suggestion
              </h3>
              <div className="bg-[#111118] rounded-lg p-6 mb-6 font-mono text-sm text-[#8888A0] whitespace-pre-wrap">
                {`Subject: Resource suggestion for [Page Title]

Hi [Name],

Your [Page Title] resource list has been incredibly helpful for [specific use case].

I noticed you don't currently include anything on [specific subtopic]. I recently published [Your Content Title], which [brief description of value].

It might be a useful addition alongside your existing resources on [related topic they already link to].

Either way, appreciate the work you put into curating these lists.

[Your Name]
[Your Title]
[Your Website]`}
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Outreach Best Practices
              </h3>
              <ul className="space-y-2 text-[#8888A0] mb-6">
                <li>✓ Send one follow-up 5-7 days after initial email if no response</li>
                <li>✓ Personalize each email with specific page and link details</li>
                <li>✓ Keep emails under 150 words for maximum readability</li>
                <li>✓ Use your real name and professional email domain</li>
                <li>✓ Include your URL in the signature, not the body (less promotional)</li>
                <li>✓ Track responses to identify your best-performing templates</li>
              </ul>
            </section>

            {/* H2: Success rate and expectations */}
            <section id="success-rate" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                Success rate and expectations
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Broken link building requires realistic expectations. While response rates exceed guest posting, 
                the process demands time investment in content creation and prospecting.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Realistic Success Metrics
              </h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 px-3 text-[#55556A]">Metric</th>
                      <th className="text-left py-3 px-3 text-[#55556A]">Industry Average</th>
                      <th className="text-left py-3 px-3 text-[#55556A]">Optimized Campaign</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#8888A0]">
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-3">Email Open Rate</td>
                      <td className="py-3 px-3">35-45%</td>
                      <td className="py-3 px-3 text-[#22C55E]">50-60%</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-3">Response Rate</td>
                      <td className="py-3 px-3">10-15%</td>
                      <td className="py-3 px-3 text-[#22C55E]">20-25%</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-3">Link Placement Rate</td>
                      <td className="py-3 px-3">5-8%</td>
                      <td className="py-3 px-3 text-[#22C55E]">12-18%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3">Time Per Link</td>
                      <td className="py-3 px-3">4-6 hours</td>
                      <td className="py-3 px-3 text-[#22C55E]">2-3 hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Monthly Production Targets
              </h3>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                A single link builder working full-time can realistically secure 8-15 broken link placements 
                per month. This requires finding 150-200 broken link opportunities, creating 3-5 replacement 
                content pieces, and sending 100-150 personalized outreach emails.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Scaling Broken Link Building
              </h3>
              <p className="text-[#8888A0] leading-relaxed">
                To scale beyond 20 links per month, build systems: hire VAs for prospecting, create 
                standardized content templates, and use outreach automation tools like Pitchbox or 
                BuzzStream. The key efficiency gain comes from finding broken links with many referring 
                domains — one piece of replacement content can earn 10-20 links.
              </p>
            </section>

            {/* CTA Section */}
            <section className="mb-16">
              <div className="p-8 rounded-2xl bg-gradient-to-r from-[#4F7CFF]/20 to-[#4F7CFF]/5 border border-[#4F7CFF]/30">
                <h3 className="font-[family-name:var(--font-syne)] font-bold text-xl text-[#F0F0F5] mb-3 text-center">
                  Scale Broken Link Building Without the Work
                </h3>
                <p className="text-[#8888A0] text-center mb-6 max-w-2xl mx-auto">
                  Our team runs full broken link campaigns: prospecting, content creation, and outreach. 
                  We average 15-20 links per month per client from DR 40+ sites.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/#pricing"
                    className="inline-flex items-center justify-center px-6 py-3 text-white bg-[#4F7CFF] rounded-lg hover:bg-[#3D6AEE] transition-colors font-medium"
                  >
                    View Campaign Pricing
                  </Link>
                  <Link
                    href="/link-building-strategies/resource-page-link-building/"
                    className="inline-flex items-center justify-center px-6 py-3 text-[#F0F0F5] border border-white/20 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    Resource Page Strategy
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
                <Link href="/link-building-strategies/resource-page-link-building/" className="text-[#4F7CFF] hover:underline">
                  Resource Page Link Building →
                </Link>
                <Link href="/link-building-strategies/skyscraper-technique/" className="text-[#4F7CFF] hover:underline">
                  Skyscraper Technique →
                </Link>
                <Link href="/link-building-strategies/link-reclamation/" className="text-[#4F7CFF] hover:underline">
                  Link Reclamation Guide →
                </Link>
                <Link href="/free-tools/backlink-gap-analyzer/" className="text-[#4F7CFF] hover:underline">
                  Backlink Gap Analyzer →
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
