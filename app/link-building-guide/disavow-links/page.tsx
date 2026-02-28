import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How to Disavow Backlinks: Step-by-Step Guide (With Template)",
  description:
    "Learn how to disavow toxic backlinks properly. Follow our step-by-step guide with disavow file templates to recover from link-based penalties.",
  keywords: [
    "disavow backlinks",
    "disavow file",
    "google disavow tool",
    "remove toxic links",
    "disavow links",
    "backlink cleanup",
  ],
  alternates: {
    canonical: "/link-building-guide/disavow-links/",
  },
};

export default function DisavowLinksPage() {
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
              How to Disavow Backlinks: Step-by-Step Guide (With Template)
            </h1>
            <p className="text-lg text-[#8888A0] leading-relaxed">
              Google's Disavow Tool helps you remove the impact of toxic backlinks. Use it correctly 
              to recover from penalties—or incorrectly to damage your own rankings.
            </p>
          </header>

          {/* Featured Snippet */}
          <div className="p-6 rounded-xl bg-[#4F7CFF]/10 border border-[#4F7CFF]/30 mb-10">
            <p className="text-[#F0F0F5] leading-relaxed">
              <strong>To disavow backlinks</strong>, create a text file listing URLs or domains you 
              want Google to ignore, formatted with one entry per line (using "domain:example.com" 
              to block entire domains). Upload this file through Google Search Console's Disavow 
              Links Tool. Disavow only as a last resort after attempting manual removal—incorrect 
              use can harm your rankings by discarding valuable links. Changes typically take effect 
              within 2-8 weeks as Google recrawls the disavowed links.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-16">
            {/* Section 1 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                When should you disavow backlinks?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Disavowing is a last resort, not a first response. Google's algorithms have become 
                sophisticated at ignoring low-quality links automatically. Disavowing unnecessarily 
                can remove valuable link equity and hurt your rankings.
              </p>
              
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Disavow links only when:
              </p>
              
              <div className="space-y-4 mb-6">
                {[
                  { scenario: "Manual Action Received", desc: 'Google Search Console shows an "Unnatural Links" manual action against your site' },
                  { scenario: "Algorithmic Penalty", desc: "Your rankings dropped significantly after a Penguin update and toxic links are clearly the cause" },
                  { scenario: "Negative SEO Attack", desc: "You've identified a deliberate attack with hundreds of spam links pointing to your site" },
                  { scenario: "Past Black Hat Activity", desc: "You or a previous SEO provider built manipulative links that now threaten your site" },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                    <h4 className="font-semibold text-red-400 mb-1">{item.scenario}</h4>
                    <p className="text-sm text-[#8888A0]">{item.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-6">
                Do NOT disavow when:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "You simply notice some low-quality links (Google ignores most automatically)",
                  "A competitor has more links than you (this is not a penalty situation)",
                  "Your rankings haven't actually dropped (disavowing can cause drops)",
                  "You're trying to sculpt PageRank (disavow doesn't work this way)",
                  "Links are simply nofollow (Google already handles these appropriately)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-orange-400 mt-1">⚠</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[#8888A0] leading-relaxed">
                When in doubt, consult an experienced SEO professional before disavowing. The risk 
                of removing good links often exceeds the risk of keeping questionable ones. 
                <Link href="/link-building-guide/toxic-backlinks/" className="text-[#4F7CFF] hover:underline ml-1">
                  Learn to identify truly toxic backlinks →
                </Link>
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                How to find toxic backlinks?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Effective disavowal requires accurately identifying toxic links. Use multiple data 
                sources and clear criteria to build your list.
              </p>
              
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Toxic link indicators:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  { indicator: "Domain Rating (DR)", desc: "DR &lt; 10 with high outbound links (spam sites)" },
                  { indicator: "Traffic", desc: "Zero organic traffic despite existing for years" },
                  { indicator: "Relevance", desc: "Completely unrelated to your niche" },
                  { indicator: "Anchor Text", desc: "Exact-match commercial keywords in bulk" },
                  { indicator: "Link Patterns", desc: "Identical links from hundreds of subdomains" },
                  { indicator: "Content Quality", desc: "Spun, stolen, or nonsensical content" },
                  { indicator: "Index Status", desc: "Pages not indexed by Google" },
                  { indicator: "Geography", desc: "Foreign language sites unrelated to your market" },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                    <h4 className="font-semibold text-[#F0F0F5] mb-1">{item.indicator}</h4>
                    <p className="text-sm text-[#8888A0]">{item.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-6">
                Tools for toxic link identification:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 text-[#55556A] font-normal">Tool</th>
                      <th className="text-left py-3 text-[#55556A] font-normal">Toxicity Signal</th>
                      <th className="text-left py-3 text-[#55556A] font-normal">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { tool: "Ahrefs", signal: "DR, traffic, anchor text patterns", best: "Comprehensive backlink analysis" },
                      { tool: "SEMrush", signal: "Toxic score, authority score", best: "Bulk toxic link detection" },
                      { tool: "Moz", signal: "Spam Score (0-100)", best: "Quick spam assessment" },
                      { tool: "Majestic", signal: "Trust Flow vs Citation Flow", best: "Trust ratio analysis" },
                      { tool: "Manual Review", signal: "Visual site quality check", best: "Final verification before disavow" },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-white/[0.06]">
                        <td className="py-3 text-[#F0F0F5]">{row.tool}</td>
                        <td className="py-3 text-[#8888A0]">{row.signal}</td>
                        <td className="py-3 text-[#8888A0]">{row.best}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#8888A0] leading-relaxed">
                Always manually review sites before disavowing. Automated toxicity scores have 
                false positives—legitimate sites sometimes score poorly due to technical factors.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                How to create a disavow file?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Disavow files follow specific formatting requirements. Errors prevent proper processing 
                and may leave toxic links active.
              </p>
              
              <p className="text-[#8888A0] leading-relaxed mb-6">
                File requirements:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Text file format (.txt extension)",
                  "UTF-8 or 7-bit ASCII encoding",
                  "Maximum file size: 100,000 lines and 2MB",
                  "One URL or domain per line",
                  "Lines starting with # are comments (ignored by Google)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-[#4F7CFF] mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-[#8888A0] leading-relaxed mb-6">
                Disavow file format examples:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <p className="text-sm text-[#55556A] mb-2">Disavow specific URLs:</p>
                  <pre className="text-sm text-[#8888A0]">
                    <code>{`# Individual toxic pages
https://spam-site.com/spam-page.html
https://another-spam.net/bad-link/`}</code>
                  </pre>
                </div>
                
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <p className="text-sm text-[#55556A] mb-2">Disavow entire domains (recommended for spam sites):</p>
                  <pre className="text-sm text-[#8888A0]">
                    <code>{`# Entire spam domains
domain:spam-site.com
domain:another-spam.net
domain:pbn-network.org`}</code>
                  </pre>
                </div>
                
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <p className="text-sm text-[#55556A] mb-2">Complete example with documentation:</p>
                  <pre className="text-sm text-[#8888A0]">
                    <code>{`# Disavow File for example.com
# Created: January 2025
# Reason: Manual action for unnatural links

# PBN Network Links
domain:cheap-links-pbn.com
domain:blog-network-spam.net

# Spam Directory Links
domain:spam-directory.org
domain:auto-approve-directory.com

# Foreign Language Spam
domain:russian-spam-site.ru

# Specific toxic URLs
https://specific-spam-page.com/link-farm/page.html`}</code>
                  </pre>
                </div>
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                Best practices:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Prioritize domain-level disavows over individual URLs (more comprehensive)",
                  "Include comments documenting why you disavowed (helps future reviews)",
                  "Don't include http/https protocols (Google handles both automatically)",
                  "Don't include www prefixes (unless specifically needed)",
                  "Keep a master list of disavowed domains for reference",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-[#22C55E] mt-1">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[#8888A0] leading-relaxed">
                Save your file as disavow.txt or similar. You'll upload this directly to Google Search 
                Console.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                How to submit a disavow file to Google?
              </h2>
              
              <div className="space-y-4 mb-6">
                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-3">Step 1: Access the Disavow Tool</h3>
                  <p className="text-[#8888A0] text-sm">
                    Navigate to Google Search Console → Select your property → Go to the 
                    <a href="https://search.google.com/search-console/disavow-links" target="_blank" rel="noopener noreferrer" className="text-[#4F7CFF] hover:underline ml-1">
                      Disavow Links Tool
                    </a> 
                    . Note: Google warns this is an advanced feature—proceed carefully.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-3">Step 2: Select Your Property</h3>
                  <p className="text-[#8888A0] text-sm">
                    Choose the exact property (domain) you want to disavow links for. The disavowal 
                    applies only to the selected property—submit separately for each subdomain if needed.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-3">Step 3: Upload Your File</h3>
                  <p className="text-[#8888A0] text-sm">
                    Click "Upload disavow list" and select your .txt file. Google validates the format 
                    and reports any errors. Fix errors and re-upload if needed.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-3">Step 4: Confirm Submission</h3>
                  <p className="text-[#8888A0] text-sm">
                    Google shows a confirmation screen with the number of domains/URLs in your file. 
                    Review this count matches your expectations. Click "Submit" to finalize.
                  </p>
                </div>
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                Important submission notes:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Each new upload replaces the previous disavow file (not additive)",
                  "Include all previously disavowed links plus new ones in updated files",
                  "Download your current disavow file before making changes",
                  "Changes take effect as Google recrawls the links (days to weeks)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-[#4F7CFF] mt-1">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[#8888A0] leading-relaxed">
                Save your submission confirmation. Google doesn't send notification emails when 
                disavow files are processed.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What happens after you submit a disavow file?
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Disavowal doesn't produce immediate results. Understanding the timeline helps set 
                realistic expectations and avoids premature additional changes.
              </p>

              <p className="text-[#8888A0] leading-relaxed mb-6">
                Expected timeline:
              </p>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 text-[#55556A] font-normal">Timeframe</th>
                      <th className="text-left py-3 text-[#55556A] font-normal">What Happens</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { time: "0-3 days", event: "Google processes your submission and validates the file" },
                      { time: "1-4 weeks", event: "Googlebot recrawls disavowed links (varies by site crawl frequency)" },
                      { time: "2-8 weeks", event: "Algorithm updates to reflect disavowed links (Penguin/core updates)" },
                      { time: "4-12 weeks", event: "Rankings may improve if toxic links were causing suppression" },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-white/[0.06]">
                        <td className="py-3 text-[#F0F0F5]">{row.time}</td>
                        <td className="py-3 text-[#8888A0]">{row.event}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                Monitoring recovery:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Track rankings daily for target keywords using your preferred rank tracker",
                  "Monitor organic traffic in Google Analytics (week-over-week comparison)",
                  "Check Google Search Console for manual action removal notifications",
                  "Review new backlink acquisition to ensure toxic patterns don't repeat",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-[#4F7CFF] mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-[#8888A0] leading-relaxed">
                If rankings don't improve after 12 weeks, your penalty may have other causes, or 
                you may need to disavow additional links. Consider professional consultation before 
                additional disavowals.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                Common disavow mistakes to avoid
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Disavow errors can harm your site or waste your efforts. Avoid these common pitfalls:
              </p>
              
              <div className="space-y-4 mb-6">
                {[
                  { mistake: "Disavowing Good Links", desc: "Overly aggressive disavowal removes valuable link equity. Manually review every domain before adding to your file." },
                  { mistake: "Forgetting Previous Disavows", desc: "Each upload replaces the previous file. Always include previously disavowed links in updated submissions." },
                  { mistake: "Formatting Errors", desc: 'Missing "domain:" prefix, extra spaces, or wrong file encoding prevents proper processing. Validate before uploading.' },
                  { mistake: "Disavowing Too Quickly", desc: "Google ignores most low-quality links automatically. Disavowing unnecessarily can hurt more than help." },
                  { mistake: "Ignoring Manual Removal First", desc: "For manual actions, attempt link removal before disavowing. Documentation of removal attempts helps reconsideration requests." },
                  { mistake: "Not Monitoring Results", desc: "Submitting a disavow file without tracking outcomes prevents learning what worked and what didn't." },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                    <h4 className="font-semibold text-red-400 mb-1">{item.mistake}</h4>
                    <p className="text-sm text-[#8888A0]">{item.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#8888A0] leading-relaxed">
                When uncertain, seek expert guidance. A professional audit before disavowing can 
                prevent costly mistakes and ensure you're addressing the actual cause of ranking issues.
              </p>
            </section>
          </div>

          {/* Disavow Template Download */}
          <div className="mt-16 p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
            <h3 className="font-[family-name:var(--font-syne)] font-bold text-lg text-[#F0F0F5] mb-4">
              Disavow File Template
            </h3>
            <p className="text-[#8888A0] mb-4">
              Copy this template to create your own disavow file:
            </p>
            <pre className="p-4 rounded bg-[#0A0A0F] text-sm text-[#8888A0] overflow-x-auto mb-4">
              <code>{`# Disavow File for [your-domain.com]
# Created: [Date]
# Reason: [Manual action / Algorithmic penalty / Negative SEO]

# === PBN NETWORKS ===
# [Add PBN domains here]
domain:example-pbn-1.com
domain:example-pbn-2.net

# === SPAM DIRECTORIES ===
# [Add spam directory domains here]
domain:spam-dir-1.org
domain:spam-dir-2.com

# === FOREIGN LANGUAGE SPAM ===
# [Add unrelated foreign language sites here]
domain:foreign-spam.ru
domain:foreign-spam.cn

# === SPECIFIC TOXIC URLs ===
# [Add specific toxic pages here]
https://specific-spam.com/bad-page.html

# === NEGATIVE SEO ATTACKS ===
# [Add negative SEO domains here]
domain:attack-domain-1.com`}</code>
            </pre>
            <p className="text-sm text-[#55556A]">
              Replace bracketed sections with your information. Remove categories that don't apply 
              to your situation.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-8 p-8 rounded-2xl bg-gradient-to-r from-[#4F7CFF]/20 to-[#4F7CFF]/5 border border-[#4F7CFF]/30">
            <h3 className="font-[family-name:var(--font-syne)] font-bold text-xl text-[#F0F0F5] mb-4">
              Need Help With Link Cleanup?
            </h3>
            <p className="text-[#8888A0] mb-6">
              Disavowing incorrectly can damage your rankings. Backlinky provides professional 
              backlink audits and safe disavow file creation. We identify truly toxic links while 
              preserving valuable link equity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#audit"
                className="inline-flex items-center justify-center px-6 py-3 text-white bg-[#4F7CFF] rounded-lg hover:bg-[#3D6AEE] transition-colors font-medium"
              >
                Get a Free Backlink Audit
              </Link>
              <Link
                href="/link-building-guide/white-hat-vs-black-hat-link-building/"
                className="inline-flex items-center justify-center px-6 py-3 text-[#F0F0F5] border border-white/20 rounded-lg hover:bg-white/5 transition-colors"
              >
                Learn Safe Link Building →
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
