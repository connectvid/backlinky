import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wikipedia Link Building: How to Get (and Keep) Wikipedia Backlinks",
  description:
    "Learn how to get Wikipedia backlinks through legitimate citations. Step-by-step guide to finding citation opportunities and adding links without getting reverted.",
  keywords: [
    "wikipedia link building",
    "wikipedia backlinks",
    "wikipedia citations",
    "wikipedia SEO",
    "wikipedia links",
  ],
  alternates: {
    canonical: "/link-building-strategies/wikipedia-link-building/",
  },
};

const tableOfContents = [
  { id: "nofollow", title: "Are Wikipedia links nofollow?" },
  { id: "why-matter", title: "Why Wikipedia links still matter" },
  { id: "find-opportunities", title: "How to find Wikipedia citation opportunities" },
  { id: "add-citations", title: "How to add citations without getting reverted" },
  { id: "credibility", title: "Building credibility for Wikipedia citations" },
];

export default function WikipediaLinkBuildingPage() {
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
                Wikipedia Link Building: How to Get (and Keep) Wikipedia Backlinks
              </h1>
              <p className="text-lg text-[#8888A0] leading-relaxed">
                Wikipedia citations drive referral traffic and establish credibility. This guide shows 
                you how to find citation opportunities, add legitimate references, and build the 
                authority needed for Wikipedia editors to accept your contributions.
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
                <strong>Wikipedia link building</strong> involves adding your website as a citation 
                on relevant Wikipedia articles. While Wikipedia links are nofollow and do not directly 
                pass SEO authority, they drive significant referral traffic, establish credibility, 
                and often lead to followed links from other sites that reference Wikipedia. Success 
                requires finding articles needing citations, creating authoritative source content, 
                and contributing value to the Wikipedia community.
              </p>
            </div>

            {/* H2: Are Wikipedia links nofollow? */}
            <section id="nofollow" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                Are Wikipedia links nofollow?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Yes, all external links on Wikipedia are nofollow. Wikipedia implemented this policy 
                in 2007 to combat spam and manipulation. Understanding what this means for your SEO 
                strategy is essential before investing effort in Wikipedia citations.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Understanding Nofollow Links
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-2">What Nofollow Means</h4>
                  <p className="text-sm text-[#8888A0]">
                    The nofollow attribute tells search engines not to pass ranking authority through 
                    the link. Google's algorithm treats it as a hint rather than a directive, but 
                    generally does not count it for PageRank.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-2">Why Wikipedia Uses Nofollow</h4>
                  <p className="text-sm text-[#8888A0]">
                    Wikipedia receives thousands of spam link attempts daily. Nofollow prevents SEO 
                    manipulation and maintains content quality by removing the primary incentive for 
                    spam citations.
                  </p>
                </div>
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Direct SEO Impact of Wikipedia Links
              </h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 px-3 text-[#55556A]">SEO Factor</th>
                      <th className="text-left py-3 px-3 text-[#55556A]">Wikipedia Link Impact</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#8888A0]">
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-3">PageRank/Authority Transfer</td>
                      <td className="py-3 px-3">None (nofollow)</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-3">Anchor Text Optimization</td>
                      <td className="py-3 px-3">Minimal (title attribute only)</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-3">Referral Traffic</td>
                      <td className="py-3 px-3 text-[#22C55E]">High potential</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3">Brand Authority Signals</td>
                      <td className="py-3 px-3 text-[#22C55E]">Strong indirect benefit</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* H2: Why Wikipedia links still matter */}
            <section id="why-matter" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                Why Wikipedia links still matter
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Despite being nofollow, Wikipedia citations provide significant indirect SEO and 
                business value. Understanding these benefits explains why major brands invest in 
                Wikipedia presence.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Benefits of Wikipedia Citations
              </h3>
              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-2">1. Massive Referral Traffic</h4>
                  <p className="text-sm text-[#8888A0]">
                    Wikipedia articles rank for millions of keywords. A citation on a popular page 
                    can drive thousands of monthly visitors. High-intent users researching topics 
                    click through to cited sources for deeper information.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-2">2. Secondary Link Generation</h4>
                  <p className="text-sm text-[#8888A0]">
                    Bloggers, journalists, and researchers use Wikipedia as a starting point. 
                    Citations on Wikipedia often get referenced in articles that do pass link equity. 
                    One Wikipedia citation can spawn 5-10 followed backlinks.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-2">3. Brand Authority and Trust</h4>
                  <p className="text-sm text-[#8888A0]">
                    Being cited on Wikipedia establishes your site as a legitimate authority. 
                    Display Wikipedia citations on your site as trust signals to visitors.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-2">4. Knowledge Panel Influence</h4>
                  <p className="text-sm text-[#8888A0]">
                    Google pulls information from Wikipedia for Knowledge Panels. Citations can 
                    influence how your brand appears in search results.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06] text-center">
                  <div className="text-3xl font-bold text-[#22C55E] mb-2">DR 95+</div>
                  <div className="text-sm text-[#8888A0]">Wikipedia domain authority</div>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06] text-center">
                  <div className="text-3xl font-bold text-[#22C55E] mb-2">1B+</div>
                  <div className="text-sm text-[#8888A0]">Monthly page views</div>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06] text-center">
                  <div className="text-3xl font-bold text-[#22C55E] mb-2">#1</div>
                  <div className="text-sm text-[#8888A0]">Rank for many terms</div>
                </div>
              </div>
            </section>

            {/* H2: How to find Wikipedia citation opportunities */}
            <section id="find-opportunities" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                How to find Wikipedia citation opportunities
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Wikipedia marks articles needing citations with specific tags. Finding these 
                opportunities is the first step toward adding legitimate references.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Wikipedia Citation Needed Tags
              </h3>
              <div className="space-y-3 mb-8">
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-1">[citation needed]</h4>
                  <p className="text-sm text-[#8888A0]">
                    Most common tag. Indicates a specific claim needs a source. These are the 
                    easiest opportunities for adding citations.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-1">[unreliable source?]</h4>
                  <p className="text-sm text-[#8888A0]">
                    Existing citation is questionable. Opportunity to replace with your 
                    higher-quality source if you have superior content.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-1">[dead link]</h4>
                  <p className="text-sm text-[#8888A0]">
                    Previous citation no longer works. High-priority fix opportunity. 
                    Replace with your content on the same topic.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-1">[needs additional citations]</h4>
                  <p className="text-sm text-[#8888A0]">
                    Article-level tag indicating multiple sections need sources. 
                    Broader opportunity but requires more comprehensive content.
                  </p>
                </div>
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Search Methods for Citation Opportunities
              </h3>
              <div className="space-y-3 mb-6">
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-1">Method 1: Google Search</h4>
                  <p className="text-sm text-[#8888A0] mb-2">
                    Search: <code className="bg-[#0A0A0F] px-2 py-1 rounded">site:wikipedia.org &quot;citation needed&quot; &quot;your keyword&quot;</code>
                  </p>
                  <p className="text-sm text-[#8888A0]">
                    Replace &quot;your keyword&quot; with topics where you have authoritative content.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-1">Method 2: WikiGrabber Tool</h4>
                  <p className="text-sm text-[#8888A0]">
                    Free tool that searches Wikipedia for articles with citation needed tags 
                    by keyword. Export results for analysis.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-1">Method 3: Manual Browsing</h4>
                  <p className="text-sm text-[#8888A0]">
                    Visit articles in your niche. Look for [citation needed] tags in sections 
                    where your content provides the missing information.
                  </p>
                </div>
              </div>
            </section>

            {/* H2: How to add citations without getting reverted */}
            <section id="add-citations" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                How to add citations without getting reverted
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Wikipedia editors aggressively remove spam citations. Following proper procedures 
                maximizes the chance your contribution survives.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Wikipedia Citation Best Practices
              </h3>
              <ol className="list-decimal list-inside space-y-3 text-[#8888A0] mb-8">
                <li><strong>Create a Wikipedia account</strong> — Edits from registered accounts with history carry more weight than anonymous IP edits</li>
                <li><strong>Build edit history first</strong> — Make 10-20 minor edits (grammar fixes, formatting) on other articles before adding citations</li>
                <li><strong>Edit incrementally</strong> — Add one citation per edit session. Mass additions trigger spam filters</li>
                <li><strong>Use proper citation format</strong> — Follow Wikipedia&apos;s Citation Style 1 format exactly</li>
                <li><strong>Provide value, not just links</strong> — Improve the article content while adding your citation</li>
                <li><strong>Disclose conflicts of interest</strong> — Use the Talk page to disclose if citing your own site</li>
              </ol>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                The Proper Citation Process
              </h3>
              <div className="bg-[#111118] rounded-lg p-6 mb-6 font-mono text-sm text-[#8888A0] whitespace-pre-wrap">
                {`Step 1: Find [citation needed] tag in relevant article

Step 2: Verify your content supports the specific claim

Step 3: Create or log into Wikipedia account

Step 4: Click "Edit" on the article

Step 5: Add citation using proper format:

<ref>{{cite web
|url=https://yoursite.com/page
|title=Article Title
|website=Your Site Name
|date=Publication Date
|access-date=Today's Date}}</ref>

Step 6: Add edit summary: "Added citation for [specific claim]"

Step 7: Preview and verify formatting

Step 8: Submit edit

Step 9: Monitor for 48 hours in case of reversion`}
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Common Mistakes That Cause Reversion
              </h3>
              <ul className="space-y-2 text-[#8888A0] mb-6">
                <li>❌ Adding citations to non-notable or promotional content</li>
                <li>❌ Citing your site on articles directly about your company (conflict of interest)</li>
                <li>❌ Bulk adding citations across multiple articles in one session</li>
                <li>❌ Using bare URLs instead of proper citation format</li>
                <li>❌ Adding citations that do not actually support the claim</li>
                <li>❌ Ignoring Talk page discussions about your edits</li>
              </ul>
            </section>

            {/* H2: Building credibility for Wikipedia citations */}
            <section id="credibility" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                Building credibility for Wikipedia citations
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Wikipedia only cites authoritative sources. Building your site&apos;s credibility 
                before attempting citations significantly increases success rates.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                What Makes a Site Wikipedia-Worthy
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="space-y-2">
                  <h4 className="font-semibold text-[#22C55E]">✓ Authority Signals</h4>
                  <ul className="text-sm text-[#8888A0] space-y-1">
                    <li>• Original research or data</li>
                    <li>• Expert authorship credentials</li>
                    <li>• Industry recognition or awards</li>
                    <li>• Media coverage of your content</li>
                    <li>• Academic or professional citations</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-red-400">✗ Red Flags</h4>
                  <ul className="text-sm text-[#8888A0] space-y-1">
                    <li>• Anonymous authorship</li>
                    <li>• Promotional or sales-focused content</li>
                    <li>• No clear editorial standards</li>
                    <li>• Copied or thin content</li>
                    <li>• No contact information or about page</li>
                  </ul>
                </div>
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Building Wikipedia Credibility Over Time
              </h3>
              <div className="space-y-3 mb-6">
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-1">Phase 1: Content Authority (Months 1-6)</h4>
                  <p className="text-sm text-[#8888A0]">
                    Publish comprehensive, original research in your niche. Build external backlinks 
                    from other respected sites to establish domain authority.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-1">Phase 2: Citations by Others (Months 6-12)</h4>
                  <p className="text-sm text-[#8888A0]">
                    Promote your research to journalists and bloggers. Get cited in industry publications 
                    without self-promotion. Build case studies of others citing your work.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-1">Phase 3: Wikipedia Contribution (Months 12+)</h4>
                  <p className="text-sm text-[#8888A0]">
                    Once other sites cite your content organically, Wikipedia editors are more likely 
                    to accept your citations. Start with articles where your content fills clear gaps.
                  </p>
                </div>
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Wikipedia Success Timeline
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 px-3 text-[#55556A]">Timeframe</th>
                      <th className="text-left py-3 px-3 text-[#55556A]">Activity</th>
                      <th className="text-left py-3 px-3 text-[#55556A]">Expected Results</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#8888A0]">
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-3">Months 1-3</td>
                      <td className="py-3 px-3">Create authoritative content</td>
                      <td className="py-3 px-3">0 citations</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-3">Months 4-6</td>
                      <td className="py-3 px-3">Promote content, earn mentions</td>
                      <td className="py-3 px-3">0-1 citations</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-3">Months 7-12</td>
                      <td className="py-3 px-3">Begin Wikipedia contributions</td>
                      <td className="py-3 px-3">1-3 citations (mixed success)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3">Year 2+</td>
                      <td className="py-3 px-3">Established Wikipedia contributor</td>
                      <td className="py-3 px-3">3-10+ citations</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* CTA Section */}
            <section className="mb-16">
              <div className="p-8 rounded-2xl bg-gradient-to-r from-[#4F7CFF]/20 to-[#4F7CFF]/5 border border-[#4F7CFF]/30">
                <h3 className="font-[family-name:var(--font-syne)] font-bold text-xl text-[#F0F0F5] mb-3 text-center">
                  Build Authority Worth Citing
                </h3>
                <p className="text-[#8888A0] text-center mb-6 max-w-2xl mx-auto">
                  Wikipedia citations come naturally to sites with true authority. Our content and 
                  digital PR services help you build the credibility and recognition that earns 
                  citations from Wikipedia and other authoritative sources.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/link-building-strategies/digital-pr-link-building/"
                    className="inline-flex items-center justify-center px-6 py-3 text-white bg-[#4F7CFF] rounded-lg hover:bg-[#3D6AEE] transition-colors font-medium"
                  >
                    Digital PR Services
                  </Link>
                  <Link
                    href="/link-building-strategies/linkable-assets/"
                    className="inline-flex items-center justify-center px-6 py-3 text-[#F0F0F5] border border-white/20 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    Build Linkable Assets
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
                <Link href="/link-building-strategies/digital-pr-link-building/" className="text-[#4F7CFF] hover:underline">
                  Digital PR Guide →
                </Link>
                <Link href="/link-building-strategies/linkable-assets/" className="text-[#4F7CFF] hover:underline">
                  Linkable Assets →
                </Link>
                <Link href="/link-building-strategies/haro-link-building/" className="text-[#4F7CFF] hover:underline">
                  HARO Link Building →
                </Link>
                <Link href="/link-building-strategies/skyscraper-technique/" className="text-[#4F7CFF] hover:underline">
                  Skyscraper Technique →
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
