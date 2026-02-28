import { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Screaming Frog SEO Spider: Complete Guide for Link Building",
  description: "Master Screaming Frog for link building. Learn to find broken links, analyze redirect chains, and audit site structure for link opportunities.",
  keywords: ["Screaming Frog", "SEO Spider", "broken link building", "redirect chains", "site audit", "link building"],
  openGraph: {
    title: "Screaming Frog SEO Spider: Complete Guide for Link Building",
    description: "Comprehensive Screaming Frog guide focused on link building applications including broken link finding and site structure analysis.",
    type: "article",
  },
};

export default function ScreamingFrogReviewPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Nav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-600 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block px-4 py-2 bg-gray-700 rounded-full text-sm font-semibold mb-4">
              Tool Review 2025
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Screaming Frog SEO Spider: Complete Guide for Link Building
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Master the industry's favorite crawling tool for broken link building, redirect analysis, and technical link audits.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-lg">Updated: February 2025</span>
              <span className="bg-white/20 px-4 py-2 rounded-lg">Reading Time: 15 minutes</span>
              <span className="bg-white/20 px-4 py-2 rounded-lg">Rating: 9.3/10</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Snippet Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-gray-600">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Quick Answer</h2>
          <p className="text-gray-700 leading-relaxed">
            <strong>Screaming Frog SEO Spider is the most powerful desktop crawling tool for technical SEO and link building.</strong> Its free version handles 500 URLs, while the £199/year paid license unlocks unlimited crawling, JavaScript rendering, and advanced link analysis. For link builders, it's invaluable for finding broken links (404s), analyzing redirect chains, auditing outbound links, and discovering internal linking opportunities. The 9.3/10 rating reflects its unmatched depth for technical link analysis at an unbeatable price point.
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Table of Contents</h2>
          <nav className="grid md:grid-cols-2 gap-3">
            {[
              { id: "overview", label: "What is Screaming Frog?" },
              { id: "free-vs-paid", label: "Free vs Paid Version" },
              { id: "broken-links", label: "Finding Broken Links" },
              { id: "redirects", label: "Analyzing Redirect Chains" },
              { id: "outbound", label: "Outbound Link Audits" },
              { id: "internal", label: "Internal Link Opportunities" },
              { id: "competitors", label: "Analyzing Competitors" },
              { id: "workflows", label: "Link Building Workflows" },
              { id: "verdict", label: "Final Verdict" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-gray-700 hover:text-gray-900 hover:underline py-2"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        
        {/* Section 1: Overview */}
        <section id="overview" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Screaming Frog SEO Spider?</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Screaming Frog SEO Spider is a desktop website crawler developed by the UK-based agency Screaming Frog. Launched in 2010, it has become the industry standard for technical SEO audits and is equally powerful for link building analysis.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Unlike cloud-based tools, Screaming Frog runs locally on your computer, giving you complete control over the crawling process and enabling analysis of sites behind firewalls or login walls. This local processing also means faster results for smaller sites.
          </p>
          
          <div className="bg-gray-100 rounded-xl p-6 my-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Screaming Frog Overview</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-gray-700">2010</p>
                <p className="text-gray-600 text-sm">Launched</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-gray-700">£199</p>
                <p className="text-gray-600 text-sm">Per Year (Paid)</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-gray-700">Desktop</p>
                <p className="text-gray-600 text-sm">Windows/Mac/Linux</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Free vs Paid */}
        <section id="free-vs-paid" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Free vs Paid Version</h2>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Screaming Frog operates on a freemium model. Understanding the differences helps you decide if the paid version is worth the investment for your link building needs.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full bg-white rounded-xl shadow">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Feature</th>
                  <th className="px-6 py-4 text-center">Free</th>
                  <th className="px-6 py-4 text-center bg-green-700">Paid (£199/yr)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">URLs per Crawl</td>
                  <td className="px-6 py-4 text-center text-yellow-600">500</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">Unlimited</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Crawl Configuration</td>
                  <td className="px-6 py-4 text-center text-yellow-600">Limited</td>
                  <td className="px-6 py-4 text-center text-green-600">Full Control</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">JavaScript Rendering</td>
                  <td className="px-6 py-4 text-center text-red-500">❌</td>
                  <td className="px-6 py-4 text-center text-green-600">✅</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Custom Extraction</td>
                  <td className="px-6 py-4 text-center text-red-500">❌</td>
                  <td className="px-6 py-4 text-center text-green-600">✅</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Google Analytics Integration</td>
                  <td className="px-6 py-4 text-center text-red-500">❌</td>
                  <td className="px-6 py-4 text-center text-green-600">✅</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Scheduled Crawls</td>
                  <td className="px-6 py-4 text-center text-red-500">❌</td>
                  <td className="px-6 py-4 text-center text-green-600">✅</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Save Crawls</td>
                  <td className="px-6 py-4 text-center text-red-500">❌</td>
                  <td className="px-6 py-4 text-center text-green-600">✅</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
            <h4 className="text-lg font-bold text-blue-900 mb-3">💡 For Link Building: Paid is Worth It</h4>
            <p className="text-blue-800">
              While the free version works for small sites, serious link building requires analyzing competitors and large resource pages. The unlimited crawling and save functionality alone justify the £199/year price for active link builders.
            </p>
          </div>
        </section>

        {/* Section 3: Broken Links */}
        <section id="broken-links" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Finding Broken Links for Link Building</h2>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Broken link building is one of the most effective link building strategies, and Screaming Frog is the perfect tool for finding opportunities at scale.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Step-by-Step: Finding Broken Links</h3>
          
          <div className="space-y-4 my-6">
            <div className="flex items-start bg-white rounded-lg shadow p-4">
              <span className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</span>
              <div>
                <p className="font-semibold text-gray-900">Enter Target URL</p>
                <p className="text-gray-600 text-sm">Input the website you want to analyze in the search bar</p>
              </div>
            </div>
            <div className="flex items-start bg-white rounded-lg shadow p-4">
              <span className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</span>
              <div>
                <p className="font-semibold text-gray-900">Configure Crawl Settings</p>
                <p className="text-gray-600 text-sm">Set crawl depth and speed based on site size</p>
              </div>
            </div>
            <div className="flex items-start bg-white rounded-lg shadow p-4">
              <span className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</span>
              <div>
                <p className="font-semibold text-gray-900">Start Crawl</p>
                <p className="text-gray-600 text-sm">Click "Start" and wait for the crawl to complete</p>
              </div>
            </div>
            <div className="flex items-start bg-white rounded-lg shadow p-4">
              <span className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</span>
              <div>
                <p className="font-semibold text-gray-900">Filter by 404 Status</p>
                <p className="text-gray-600 text-sm">Go to Response Codes tab → Filter: Client Error (4xx)</p>
              </div>
            </div>
            <div className="flex items-start bg-white rounded-lg shadow p-4">
              <span className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">5</span>
              <div>
                <p className="font-semibold text-gray-900">Check Inlinks</p>
                <p className="text-gray-600 text-sm">Click on a broken URL to see which pages link to it</p>
              </div>
            </div>
            <div className="flex items-start bg-white rounded-lg shadow p-4">
              <span className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">6</span>
              <div>
                <p className="font-semibold text-gray-900">Export and Outreach</p>
                <p className="text-gray-600 text-sm">Export the data and contact sites linking to broken pages</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-8">
            <h4 className="text-lg font-bold text-green-900 mb-3">💡 Pro Tip: Prioritize High-Value Targets</h4>
            <p className="text-green-800">
              Sort broken links by "Inlinks" column to find the most-linked-to broken pages. These represent the highest-value opportunities—sites already invested in linking to that topic.
            </p>
          </div>
        </section>

        {/* Section 4: Redirects */}
        <section id="redirects" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Analyzing Redirect Chains</h2>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Redirect chains waste link equity and slow down user experience. Screaming Frog helps identify and fix these issues.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Finding Redirect Chains</h3>
          
          <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl p-12 text-center my-8">
            <p className="text-gray-500 font-medium">[Screenshot: Redirect Chain Report]</p>
            <p className="text-gray-400 text-sm mt-2">Screaming Frog showing redirect chains with hop counts</p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">How to Analyze Redirects</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4 mb-6">
            <li>Run a crawl of your target site</li>
            <li>Go to Response Codes tab</li>
            <li>Filter by Redirection (3xx)</li>
            <li>Look at the "Redirect URL" and "Redirect Type" columns</li>
            <li>Identify chains longer than 1 hop (URL → Redirect → Final)</li>
            <li>Export for fixing or outreach</li>
          </ol>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Link Building Application</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            When analyzing competitor backlinks, use Screaming Frog to check if any links go through redirects. If a link points to a redirected URL, the site might not know about the redirect. Reach out and suggest updating the link to the final destination—often your own content if you've created a replacement resource.
          </p>
        </section>

        {/* Section 5: Outbound */}
        <section id="outbound" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Outbound Link Audits</h2>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Analyzing where sites link out can reveal patterns, opportunities, and potential partnerships.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">What to Look For</h3>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="font-bold text-gray-900 mb-2">External Link Analysis</h4>
              <p className="text-gray-600 text-sm">See all outbound links from a site. Filter by follow/nofollow to understand their linking patterns.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="font-bold text-gray-900 mb-2">Anchor Text Distribution</h4>
              <p className="text-gray-600 text-sm">Analyze what anchor text sites use when linking externally. This informs your outreach approach.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="font-bold text-gray-900 mb-2">Link Destination Patterns</h4>
              <p className="text-gray-600 text-sm">Identify which types of sites/content they link to most often.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="font-bold text-gray-900 mb-2">Orphan Pages</h4>
              <p className="text-gray-600 text-sm">Find pages with no internal links pointing to them—these may need promotion.</p>
            </div>
          </div>
        </section>

        {/* Section 6: Internal */}
        <section id="internal" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Internal Link Opportunities</h2>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            While external links are the focus of most link building, internal linking is equally important for SEO and can be analyzed with Screaming Frog.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Finding Internal Link Gaps</h3>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 my-8">
            <h4 className="text-lg font-bold text-yellow-900 mb-3">Strategy: Power Page Promotion</h4>
            <ol className="list-decimal list-inside space-y-2 text-yellow-800">
              <li>Identify your highest-authority pages (most backlinks)</li>
              <li>Find related content that lacks internal links</li>
              <li>Add contextual internal links from authority pages</li>
              <li>Pass link equity to pages needing a boost</li>
            </ol>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Using the Inlinks Tab</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Inlinks tab shows which pages link to any given URL. Sort by "Inlinks" to find:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
            <li>Orphan pages (0 inlinks) that need internal links</li>
            <li>Under-linked important content</li>
            <li>Pages with excessive internal links (potential dilution)</li>
          </ul>
        </section>

        {/* Section 7: Competitors */}
        <section id="competitors" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Analyzing Competitor Sites</h2>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Screaming Frog can crawl competitor sites to uncover their content structure, internal linking strategy, and potential link opportunities.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">What to Analyze on Competitor Sites</h3>
          
          <div className="overflow-x-auto my-6">
            <table className="w-full bg-white rounded-xl shadow">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Analysis Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">What You Learn</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Page Titles</td>
                  <td className="px-6 py-4 text-gray-600">Content themes and keyword targeting</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">URL Structure</td>
                  <td className="px-6 py-4 text-gray-600">Site architecture and content organization</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Word Count</td>
                  <td className="px-6 py-4 text-gray-600">Content depth standards in your niche</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Outbound Links</td>
                  <td className="px-6 py-4 text-gray-600">Who they link to and linking patterns</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Response Codes</td>
                  <td className="px-6 py-4 text-gray-600">Broken pages you can create replacements for</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 8: Workflows */}
        <section id="workflows" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Link Building Workflows</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Workflow 1: Resource Page Link Building</h3>
              <div className="space-y-3">
                <p className="text-gray-700"><strong>Goal:</strong> Find resource pages in your niche that might link to your content</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create a list of authority sites in your niche</li>
                  <li>Crawl each site with Screaming Frog</li>
                  <li>Filter URLs for keywords like "resources", "links", "tools"</li>
                  <li>Review pages manually to confirm relevance</li>
                  <li>Check outbound links to see if they link to similar content</li>
                  <li>Extract contact info and outreach with your resource</li>
                </ol>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Workflow 2: Broken Link Building at Scale</h3>
              <div className="space-y-3">
                <p className="text-gray-700"><strong>Goal:</strong> Find broken links with many referring domains</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                  <li>Use <Link href="/link-building-tools/ahrefs-review/" className="text-blue-600 hover:underline">Ahrefs</Link> or <Link href="/link-building-tools/semrush-review/" className="text-blue-600 hover:underline">SEMrush</Link> to find broken pages with backlinks</li>
                  <li>Crawl those broken URLs with Screaming Frog</li>
                  <li>Use "Inlinks" to see which sites still link to the broken page</li>
                  <li>Create superior replacement content</li>
                  <li>Contact linking sites with broken link notification + replacement</li>
                </ol>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Workflow 3: Link Reclamation</h3>
              <div className="space-y-3">
                <p className="text-gray-700"><strong>Goal:</strong> Reclaim lost or broken links pointing to your site</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                  <li>Get list of referring domains from your SEO tool</li>
                  <li>Crawl each referring page with Screaming Frog</li>
                  <li>Check if your link is still present</li>
                  <li>Identify 404 errors or removed links</li>
                  <li>Reach out to restore or fix the link</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Verdict */}
        <section id="verdict" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Verdict</h2>
          
          <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-2xl p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <p className="text-gray-300 text-sm uppercase tracking-wide mb-2">Overall Rating</p>
                <p className="text-6xl font-bold">9.3<span className="text-3xl text-gray-400">/10</span></p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-2xl font-bold">Essential Tool</p>
                <p className="text-gray-300">For technical link building</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Who Should Use Screaming Frog?</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Technical SEOs and link builders</li>
                <li>Anyone doing broken link building</li>
                <li>Agencies conducting site audits</li>
                <li>Content marketers analyzing competitors</li>
                <li>Anyone who needs detailed crawl data</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Value Proposition</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                At £199/year (approximately $250), Screaming Frog is one of the best values in SEO software. No other tool provides this depth of technical analysis at anywhere near this price point. The free version's 500-URL limit is generous enough for many small site analyses.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 text-center mt-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Download Screaming Frog</h4>
            <p className="text-gray-600 mb-6">Free version available. Paid license unlocks unlimited crawling.</p>
            <a 
              href="https://www.screamingfrog.co.uk/seo-spider/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-bold py-4 px-8 rounded-lg transition-colors"
            >
              Download Free Version →
            </a>
          </div>
        </section>

        {/* Related Articles */}
        <section className="border-t pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Reviews</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/link-building-tools/ahrefs-review/" className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow">
              <p className="font-semibold text-blue-600">Ahrefs Review</p>
              <p className="text-gray-600 text-sm">For finding broken link opportunities</p>
            </Link>
            <Link href="/link-building-tools/semrush-review/" className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow">
              <p className="font-semibold text-blue-600">SEMrush Review</p>
              <p className="text-gray-600 text-sm">Alternative site audit capabilities</p>
            </Link>
            <Link href="/link-building-tools/free-backlink-checkers/" className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow">
              <p className="font-semibold text-blue-600">Free Backlink Checkers</p>
              <p className="text-gray-600 text-sm">No-cost link analysis tools</p>
            </Link>
            <Link href="/link-building-tools/google-search-console-for-link-building/" className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow">
              <p className="font-semibold text-blue-600">Google Search Console</p>
              <p className="text-gray-600 text-sm">Free link data from Google</p>
            </Link>
          </div>
        </section>

      </article>

      <Footer />
    </main>
  );
}
