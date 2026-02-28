import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Link Reclamation: How to Recover Lost and Unlinked Brand Mentions",
  description:
    "Recover lost backlinks and convert unlinked brand mentions into links. Step-by-step guide to link reclamation with email templates and monitoring setup.",
  keywords: [
    "link reclamation",
    "recover lost backlinks",
    "unlinked brand mentions",
    "lost link recovery",
    "brand mention link building",
  ],
  alternates: {
    canonical: "/link-building-strategies/link-reclamation/",
  },
};

const tableOfContents = [
  { id: "what-is", title: "What is link reclamation?" },
  { id: "find-unlinked", title: "How to find unlinked brand mentions" },
  { id: "find-lost", title: "How to find lost backlinks" },
  { id: "email-template", title: "Link reclamation email template" },
  { id: "how-often", title: "How often to check for lost links" },
];

export default function LinkReclamationPage() {
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
                Link Reclamation: How to Recover Lost and Unlinked Brand Mentions
              </h1>
              <p className="text-lg text-[#8888A0] leading-relaxed">
                Link reclamation delivers 40-60% success rates — the highest of any link building tactic. 
                This guide shows you how to find lost backlinks, convert unlinked mentions, and set up 
                monitoring systems that protect your link equity automatically.
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
                <strong>Link reclamation</strong> is the process of recovering lost backlinks or converting 
                unlinked brand mentions into actual links. When websites mention your brand without linking, 
                or when existing backlinks break or get removed, link reclamation helps you recover that 
                link equity through direct outreach to site owners.
              </p>
            </div>

            {/* H2: What is link reclamation? */}
            <section id="what-is" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What is link reclamation?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Link reclamation operates on a simple principle: the easiest links to acquire are ones 
                you should already have. Sites mentioning your brand already know who you are. Sites 
                that previously linked to you found value in your content. Reclaiming these links 
                requires minimal persuasion because the relationship already exists.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Two Types of Link Reclamation
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-2">Unlinked Brand Mentions</h4>
                  <p className="text-sm text-[#8888A0]">
                    Sites mentioning your brand, products, or executives without linking. You contact 
                    them requesting a link be added to the existing mention.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-2">Lost Backlinks</h4>
                  <p className="text-sm text-[#8888A0]">
                    Previously existing backlinks that were removed or now return 404 errors. You 
                    contact site owners to restore the link or fix the broken URL.
                  </p>
                </div>
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Why Link Reclamation Delivers the Highest Success Rates
              </h3>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06] text-center">
                  <div className="text-3xl font-bold text-[#22C55E] mb-2">40-60%</div>
                  <div className="text-sm text-[#8888A0]">Success rate</div>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06] text-center">
                  <div className="text-3xl font-bold text-[#22C55E] mb-2">Low Effort</div>
                  <div className="text-sm text-[#8888A0]">Relationship exists</div>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06] text-center">
                  <div className="text-3xl font-bold text-[#22C55E] mb-2">High Quality</div>
                  <div className="text-sm text-[#8888A0]">Natural editorial links</div>
                </div>
              </div>
            </section>

            {/* H2: How to find unlinked brand mentions */}
            <section id="find-unlinked" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                How to find unlinked brand mentions
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Finding unlinked mentions requires monitoring tools that scan the web for your brand 
                name and filter out results that already link to you.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Tools for Finding Unlinked Mentions
              </h3>
              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-[#F0F0F5]">Ahrefs Content Explorer</h4>
                    <span className="text-xs text-[#55556A]">Included in all plans</span>
                  </div>
                  <p className="text-sm text-[#8888A0] mb-2">
                    Search your brand name, then filter for pages that do not link to your domain. 
                    Export for outreach.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-[#F0F0F5]">Mention.com</h4>
                    <span className="text-xs text-[#55556A]">$41-333/month</span>
                  </div>
                  <p className="text-sm text-[#8888A0] mb-2">
                    Real-time brand monitoring across web and social. Set up alerts for your brand, 
                    products, and executives.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-[#F0F0F5]">Google Alerts</h4>
                    <span className="text-xs text-[#55556A]">Free</span>
                  </div>
                  <p className="text-sm text-[#8888A0] mb-2">
                    Basic but free monitoring. Set up alerts for &quot;Your Brand&quot; with quotes for exact 
                    match mentions. Manual checking required.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-[#F0F0F5]">Brand24</h4>
                    <span className="text-xs text-[#55556A]">$79-399/month</span>
                  </div>
                  <p className="text-sm text-[#8888A0] mb-2">
                    Social listening platform with web monitoring. Good for tracking brand sentiment 
                    alongside mention discovery.
                  </p>
                </div>
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                What to Monitor for Unlinked Mentions
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-3 text-[#8888A0]">
                    <input type="checkbox" className="rounded border-[#55556A]" readOnly />
                    <span>Brand name (including common misspellings)</span>
                  </label>
                  <label className="flex items-center gap-3 text-[#8888A0]">
                    <input type="checkbox" className="rounded border-[#55556A]" readOnly />
                    <span>Product names</span>
                  </label>
                  <label className="flex items-center gap-3 text-[#8888A0]">
                    <input type="checkbox" className="rounded border-[#55556A]" readOnly />
                    <span>CEO/founder names</span>
                  </label>
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 text-[#8888A0]">
                    <input type="checkbox" className="rounded border-[#55556A]" readOnly />
                    <span>Campaign or product launch names</span>
                  </label>
                  <label className="flex items-center gap-3 text-[#8888A0]">
                    <input type="checkbox" className="rounded border-[#55556A]" readOnly />
                    <span>Unique product features or technology</span>
                  </label>
                  <label className="flex items-center gap-3 text-[#8888A0]">
                    <input type="checkbox" className="rounded border-[#55556A]" readOnly />
                    <span>Company slogans or taglines</span>
                  </label>
                </div>
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Vetting Unlinked Mentions
              </h3>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Not every mention warrants outreach. Prioritize mentions that:
              </p>
              <ul className="space-y-2 text-[#8888A0] mb-6">
                <li>• Come from sites with DR 30+</li>
                <li>• Appear in positive or neutral context</li>
                <li>• Are on pages with organic traffic</li>
                <li>• Represent genuine editorial mentions (not directory listings)</li>
                <li>• Are recent (published within last 6 months for best response)</li>
              </ul>
            </section>

            {/* H2: How to find lost backlinks */}
            <section id="find-lost" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                How to find lost backlinks
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Lost backlinks occur when pages are deleted, content is updated, or sites change 
                their linking policies. Finding and recovering these links protects your existing 
                link equity.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Using Ahrefs to Find Lost Links
              </h3>
              <ol className="list-decimal list-inside space-y-3 text-[#8888A0] mb-8">
                <li>Enter your domain in Ahrefs Site Explorer</li>
                <li>Go to Backlinks report</li>
                <li>Click &quot;Lost&quot; tab to see recently removed backlinks</li>
                <li>Filter by lost reason (page not found, redirect, removed, etc.)</li>
                <li>Set date range (last 30-90 days)</li>
                <li>Filter for DR 30+ to focus on valuable links</li>
                <li>Export the list for outreach</li>
              </ol>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Understanding Lost Link Reasons
              </h3>
              <div className="space-y-3 mb-6">
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-1">Not Found (404)</h4>
                  <p className="text-sm text-[#8888A0]">
                    The linking page was deleted. Check Wayback Machine for archived version. 
                    If valuable, reach out to suggest alternative page on their site or offer updated content.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-1">Removed</h4>
                  <p className="text-sm text-[#8888A0]">
                    Link was intentionally deleted. Contact site owner to understand why. 
                    Often fixable by updating your content or addressing their concern.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-1">Redirect</h4>
                  <p className="text-sm text-[#8888A0]">
                    Linking page redirects to new URL. Verify link still exists on new page. 
                    If lost, treat as removed link.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-1">Crawl Error</h4>
                  <p className="text-sm text-[#8888A0]">
                    Ahrefs could not access the page. May be temporary. Check manually before outreach.
                  </p>
                </div>
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Other Sources of Lost Links
              </h3>
              <ul className="space-y-2 text-[#8888A0] mb-6">
                <li>• <strong>Google Search Console:</strong> Check Crawl Stats for 404s on pages that previously had links</li>
                <li>• <strong>Wayback Machine:</strong> Compare historical snapshots of your top pages</li>
                <li>• <strong>SEMrush Backlink Audit:</strong> Identify toxic or lost links with their monitoring tool</li>
                <li>• <strong>Moz Link Explorer:</strong> Track discovered and lost links over time</li>
              </ul>
            </section>

            {/* H2: Link reclamation email template */}
            <section id="email-template" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                Link reclamation email template
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Link reclamation emails should be brief and assumptive. The site already knows you; 
                no need for lengthy introductions.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Unlinked Brand Mention Template (50%+ Success Rate)
              </h3>
              <div className="bg-[#111118] rounded-lg p-6 mb-6 font-mono text-sm text-[#8888A0] whitespace-pre-wrap">
                {`Subject: Quick favor regarding your [Article Title] post

Hi [Name],

Thanks for mentioning [Your Brand] in your recent article on [Topic] ([URL]).

I noticed the mention doesn't include a link to our site. Would you mind adding one? It would help your readers who want to learn more about [specific context].

Here's the link if helpful: [your URL]

Either way, appreciate the mention!

Best,
[Your Name]
[Your Title]
[Your Brand]`}
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Lost Link Recovery Template (40% Success Rate)
              </h3>
              <div className="bg-[#111118] rounded-lg p-6 mb-6 font-mono text-sm text-[#8888A0] whitespace-pre-wrap">
                {`Subject: Broken link on [Page Title]

Hi [Name],

I was reviewing sites that have linked to [Your Brand] and noticed the link on your [Page Title] page ([URL]) appears to be broken.

It looks like the page was removed or the URL changed.

Would you be open to updating the link? Here's the current working URL: [your URL]

If the original context no longer fits your content, no worries — just wanted to flag it in case it was unintentional.

Thanks,
[Your Name]
[Your Brand]`}
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Link Reclamation Best Practices
              </h3>
              <ul className="space-y-2 text-[#8888A0] mb-6">
                <li>• Send within 1-2 weeks of mention detection for highest response rates</li>
                <li>• Keep emails under 100 words — this is a small request, not a pitch</li>
                <li>• Never demand or sound entitled — always frame as a favor</li>
                <li>• Include the specific URL where the mention appears</li>
                <li>• Make it easy — provide the exact link you want them to add</li>
                <li>• One follow-up maximum if no response after 7 days</li>
              </ul>
            </section>

            {/* H2: How often to check for lost links */}
            <section id="how-often" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                How often to check for lost links
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Consistent monitoring catches lost links while recovery is still possible. Set up 
                automated alerts and schedule regular manual reviews.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Link Reclamation Monitoring Schedule
              </h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 px-3 text-[#55556A]">Activity</th>
                      <th className="text-left py-3 px-3 text-[#55556A]">Frequency</th>
                      <th className="text-left py-3 px-3 text-[#55556A]">Tools Needed</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#8888A0]">
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-3">Check lost backlinks</td>
                      <td className="py-3 px-3">Weekly</td>
                      <td className="py-3 px-3">Ahrefs/SEMrush</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-3">Review unlinked mentions</td>
                      <td className="py-3 px-3">Weekly</td>
                      <td className="py-3 px-3">Mention/Brand24</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-3">Outreach execution</td>
                      <td className="py-3 px-3">As needed</td>
                      <td className="py-3 px-3">Email + tracking sheet</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3">Full backlink audit</td>
                      <td className="py-3 px-3">Quarterly</td>
                      <td className="py-3 px-3">Multiple tools</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Setting Up Automated Alerts
              </h3>
              <div className="space-y-3 mb-6">
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-1">Ahrefs Lost Links Alert</h4>
                  <p className="text-sm text-[#8888A0]">
                    Set up weekly email alerts in Ahrefs for lost backlinks with DR 30+. Review 
                    and outreach within 48 hours of alert.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-1">Google Alerts</h4>
                  <p className="text-sm text-[#8888A0]">
                    Create daily alerts for your brand name in quotes. Check each mention for 
                    missing links within 24 hours.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-1">Mention Real-Time Alerts</h4>
                  <p className="text-sm text-[#8888A0]">
                    Configure instant Slack or email notifications for new brand mentions. 
                    Fast response maximizes success rates.
                  </p>
                </div>
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Expected Link Reclamation Volume
              </h3>
              <p className="text-[#8888A0] leading-relaxed">
                Established brands can expect 5-20 link reclamation opportunities per month. 
                Newer brands may see 1-5 monthly. The volume grows with brand awareness — 
                invest in PR and content marketing to generate more mention opportunities.
              </p>
            </section>

            {/* CTA Section */}
            <section className="mb-16">
              <div className="p-8 rounded-2xl bg-gradient-to-r from-[#4F7CFF]/20 to-[#4F7CFF]/5 border border-[#4F7CFF]/30">
                <h3 className="font-[family-name:var(--font-syne)] font-bold text-xl text-[#F0F0F5] mb-3 text-center">
                  Done-For-You Link Reclamation
                </h3>
                <p className="text-[#8888A0] text-center mb-6 max-w-2xl mx-auto">
                  Our team monitors your brand 24/7 and executes reclamation outreach within 48 hours 
                  of mention detection. Average clients recover 15-25 links monthly with zero effort.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/#pricing"
                    className="inline-flex items-center justify-center px-6 py-3 text-white bg-[#4F7CFF] rounded-lg hover:bg-[#3D6AEE] transition-colors font-medium"
                  >
                    View Reclamation Services
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
                <Link href="/link-building-strategies/haro-link-building/" className="text-[#4F7CFF] hover:underline">
                  HARO Link Building →
                </Link>
                <Link href="/link-building-strategies/digital-pr-link-building/" className="text-[#4F7CFF] hover:underline">
                  Digital PR Guide →
                </Link>
                <Link href="/seo-metrics/domain-rating-explained/" className="text-[#4F7CFF] hover:underline">
                  Understanding Domain Rating →
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
