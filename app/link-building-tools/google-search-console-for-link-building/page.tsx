import { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Google Search Console for Link Building: The Free Tool Most SEOs Ignore",
  description: "Learn how to use Google Search Console for link building. Discover links reports, disavow tools, and internal linking insights—all completely free.",
  keywords: ["Google Search Console", "GSC link building", "free link building tools", "disavow tool", "internal linking"],
  openGraph: {
    title: "Google Search Console for Link Building: The Free Tool Most SEOs Ignore",
    description: "Comprehensive guide to using Google Search Console's link data for better link building strategies.",
    type: "article",
  },
};

export default function GoogleSearchConsoleForLinkBuildingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Nav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block px-4 py-2 bg-blue-800 rounded-full text-sm font-semibold mb-4">
              Free Tool Guide 2025
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Google Search Console for Link Building
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-4">
              The Free Tool Most SEOs Ignore
            </p>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto mb-8">
              Unlock the hidden link building power of GSC: links reports, disavow workflows, and internal linking insights—completely free.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-lg">Updated: February 2025</span>
              <span className="bg-white/20 px-4 py-2 rounded-lg">Reading Time: 15 minutes</span>
              <span className="bg-white/20 px-4 py-2 rounded-lg">Price: FREE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Snippet Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-500">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Quick Answer</h2>
          <p className="text-gray-700 leading-relaxed">
            <strong>Google Search Console is the only source of link data directly from Google, making it essential for any serious link building strategy.</strong> The Links report shows your top linking sites, most linked pages, and anchor text distribution—data that often differs from third-party tools. Combined with the disavow tool for toxic link management and internal linking reports for optimization, GSC provides comprehensive link intelligence at zero cost. While less feature-rich than paid tools like <Link href="/link-building-tools/ahrefs-review/" className="text-blue-600 hover:underline">Ahrefs</Link>, its direct-from-Google data makes it an indispensable foundation for link building.
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Table of Contents</h2>
          <nav className="grid md:grid-cols-2 gap-3">
            {[
              { id: "overview", label: "What is Google Search Console?" },
              { id: "links-report", label: "Understanding the Links Report" },
              { id: "external", label: "External Links Analysis" },
              { id: "internal", label: "Internal Linking Insights" },
              { id: "disavow", label: "Disavow Tool Guide" },
              { id: "gsc-vs-paid", label: "GSC vs Paid Tools" },
              { id: "workflows", label: "Link Building Workflows" },
              { id: "tips", label: "Pro Tips & Tricks" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-blue-600 hover:text-blue-800 hover:underline py-2"
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Google Search Console?</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Google Search Console (GSC) is Google's free platform for website owners to monitor their site's performance in Google Search. While most users focus on search analytics and indexing data, GSC contains powerful link building intelligence that's often overlooked.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Unlike third-party tools that estimate Google's view of your links, GSC shows exactly what Google sees. This makes it the definitive source for understanding your backlink profile from Google's perspective.
          </p>
          
          <div className="bg-blue-50 rounded-xl p-6 my-8">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Why GSC Link Data Matters</h3>
            <ul className="space-y-3 text-blue-800">
              <li>• <strong>Direct from Google:</strong> The only tool showing Google's actual link data</li>
              <li>• <strong>Completely free:</strong> No subscription required, ever</li>
              <li>• <strong>Historical data:</strong> See link trends over time</li>
              <li>• <strong>Disavow integration:</strong> The only place to submit disavow files</li>
              <li>• <strong>Internal links:</strong> Unique data not available elsewhere</li>
            </ul>
          </div>
        </section>

        {/* Section 2: Links Report */}
        <section id="links-report" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding the Links Report</h2>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The Links report in GSC is located in the left sidebar under "Links." It contains four main sections, each offering different insights into your link profile.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🔗 External Links</h3>
              <p className="text-gray-600 mb-2">Sites linking to you + pages with most links</p>
              <p className="text-sm text-blue-600">Best for: Competitor analysis, link prospecting</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📄 Top Linked Pages (External)</h3>
              <p className="text-gray-600 mb-2">Your pages receiving the most external links</p>
              <p className="text-sm text-blue-600">Best for: Content strategy, identifying linkable assets</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🏠 Internal Links</h3>
              <p className="text-gray-600 mb-2">How your pages link to each other</p>
              <p className="text-sm text-blue-600">Best for: Site architecture, internal link optimization</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📎 Top Linking Text</h3>
              <p className="text-gray-600 mb-2">Most common anchor text used to link to you</p>
              <p className="text-sm text-blue-600">Best for: Anchor text optimization</p>
            </div>
          </div>

          <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl p-12 text-center my-8">
            <p className="text-gray-500 font-medium">[Screenshot: GSC Links Report Dashboard]</p>
            <p className="text-gray-400 text-sm mt-2">Overview of all four link report sections in Google Search Console</p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Data Limitations</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            While powerful, GSC link data has some limitations to be aware of:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
            <li>Shows a <strong>sample</strong> of links, not every single one</li>
            <li>Updated periodically (not real-time like some paid tools)</li>
            <li>Limited to 100,000 rows when exporting</li>
            <li>No domain authority or link quality metrics</li>
            <li>Cannot see competitors' link profiles</li>
          </ul>
        </section>

        {/* Section 3: External */}
        <section id="external" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">External Links Analysis</h2>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The external links section is where most link building insights live. Here's how to use it effectively.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Top Linking Sites</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            This report shows domains linking to you, sorted by number of linking pages. Use it to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
            <li><strong>Identify link partners:</strong> Sites already linking to you are prime candidates for more links</li>
            <li><strong>Find relationships:</strong> Discover unexpected sites linking to you</li>
            <li><strong>Monitor new links:</strong> Check regularly for new referring domains</li>
            <li><strong>Detect negative SEO:</strong> Spot suspicious new linking domains</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Top Linked Pages</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            This shows your pages receiving the most external links. Valuable for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
            <li>Identifying your most linkable content types</li>
            <li>Finding pages to boost with internal links</li>
            <li>Understanding what content earns links in your niche</li>
            <li>Discovering outdated popular content that needs updates</li>
          </ul>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-8">
            <h4 className="text-lg font-bold text-green-900 mb-3">💡 Strategy: Find Link Patterns</h4>
            <p className="text-green-800">
              Export your top linked pages and analyze what they have in common. Are they tools? Studies? Guides? This pattern reveals what content types work best for link building in your niche.
            </p>
          </div>
        </section>

        {/* Section 4: Internal */}
        <section id="internal" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Internal Linking Insights</h2>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            GSC's internal links report is unique—no other tool provides this data directly from Google's crawl. This makes it invaluable for optimizing your site architecture.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Using the Internal Links Report</h3>
          
          <div className="overflow-x-auto my-6">
            <table className="w-full bg-white rounded-xl shadow">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Metric</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">What It Tells You</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">High Internal Links</td>
                  <td className="px-6 py-4 text-gray-600">Pages with many internal links pointing to them</td>
                  <td className="px-6 py-4 text-gray-600">These are your "power pages"—use them to distribute link equity</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Low Internal Links</td>
                  <td className="px-6 py-4 text-gray-600">Pages with few internal links</td>
                  <td className="px-6 py-4 text-gray-600">Add internal links from high-link pages to boost these</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Zero Internal Links</td>
                  <td className="px-6 py-4 text-gray-600">Orphan pages not linked internally</td>
                  <td className="px-6 py-4 text-gray-600">Add to navigation or link from relevant content</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Internal Linking Best Practices</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4 mb-6">
            <li>Ensure every important page has at least 3-5 internal links</li>
            <li>Use descriptive anchor text for internal links</li>
            <li>Link from high-authority pages to pages needing a boost</li>
            <li>Create content silos with strong internal linking</li>
            <li>Regularly audit for orphan pages</li>
          </ol>
        </section>

        {/* Section 5: Disavow */}
        <section id="disavow" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Disavow Tool Guide</h2>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            When you have toxic backlinks pointing to your site, the Disavow Tool is your last resort for telling Google to ignore them. Use it carefully—incorrect use can harm your SEO.
          </p>

          <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-8">
            <h4 className="text-lg font-bold text-red-900 mb-3">⚠️ Important Warning</h4>
            <p className="text-red-800">
              Only disavow links if you have a manual action penalty for unnatural links, or if you're certain links are harming your site. Google's algorithm is good at ignoring most low-quality links automatically.
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">When to Use the Disavow Tool</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
            <li>You have a manual action for unnatural links</li>
            <li>Negative SEO attack with obvious spam links</li>
            <li>Paid links you can't remove</li>
            <li>Links from link schemes or PBNs</li>
            <li>Significant traffic drop correlated with spam link influx</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mb-4">How to Create a Disavow File</h3>
          
          <div className="space-y-4 my-6">
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="font-bold text-gray-900 mb-2">Step 1: Audit Your Links</h4>
              <p className="text-gray-600">Use GSC Links report + tools like <Link href="/link-building-tools/ahrefs-review/" className="text-blue-600 hover:underline">Ahrefs</Link> or <Link href="/link-building-tools/semrush-review/" className="text-blue-600 hover:underline">SEMrush</Link> to identify toxic links.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="font-bold text-gray-900 mb-2">Step 2: Attempt Removal First</h4>
              <p className="text-gray-600">Contact webmasters to remove links before disavowing. Document your efforts.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="font-bold text-gray-900 mb-2">Step 3: Create Disavow File</h4>
              <p className="text-gray-600">Create a .txt file with one URL or domain per line. Use "domain:" prefix to disavow entire domains.</p>
              <div className="bg-gray-100 p-3 rounded mt-2 text-sm font-mono">
                # Example disavow file<br/>
                domain:spam-site.com<br/>
                https://bad-site.com/link-page/<br/>
                domain:another-spam-domain.net
              </div>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="font-bold text-gray-900 mb-2">Step 4: Submit to GSC</h4>
              <p className="text-gray-600">Go to <a href="https://search.google.com/search-console/disavow-links" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Disavow Links Tool</a> and upload your file.</p>
            </div>
          </div>
        </section>

        {/* Section 6: GSC vs Paid */}
        <section id="gsc-vs-paid" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">GSC vs Paid Link Building Tools</h2>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            How does Google Search Console compare to premium tools like Ahrefs and SEMrush? Here's a detailed comparison.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full bg-white rounded-xl shadow">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-green-900">Google Search Console</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-blue-900">Paid Tools (Ahrefs/SEMrush)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Price</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">FREE</td>
                  <td className="px-6 py-4 text-center">$99-499/month</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Data Source</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">Direct from Google</td>
                  <td className="px-6 py-4 text-center">Third-party crawlers</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Competitor Analysis</td>
                  <td className="px-6 py-4 text-center text-red-500">❌ None</td>
                  <td className="px-6 py-4 text-center text-green-600">✅ Comprehensive</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Link Quality Metrics</td>
                  <td className="px-6 py-4 text-center text-red-500">❌ None</td>
                  <td className="px-6 py-4 text-center text-green-600">✅ DA/DR/AS scores</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Internal Links</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✅ Unique data</td>
                  <td className="px-6 py-4 text-center text-yellow-600">⚠️ Limited</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Historical Data</td>
                  <td className="px-6 py-4 text-center text-yellow-600">Limited (16 months)</td>
                  <td className="px-6 py-4 text-center text-green-600">✅ Extensive</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Disavow Integration</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✅ Native tool</td>
                  <td className="px-6 py-4 text-center text-yellow-600">⚠️ File creation only</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Real-time Updates</td>
                  <td className="px-6 py-4 text-center text-yellow-600">Periodic</td>
                  <td className="px-6 py-4 text-center text-green-600">✅ Near real-time</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
            <h4 className="text-lg font-bold text-blue-900 mb-3">🎯 The Verdict: Use Both</h4>
            <p className="text-blue-800">
              GSC is essential for understanding Google's view of your links and managing disavows. Paid tools are necessary for competitor analysis, prospecting, and link quality assessment. Smart SEOs use GSC as their foundation, supplemented by paid tools for advanced analysis.
            </p>
          </div>
        </section>

        {/* Section 7: Workflows */}
        <section id="workflows" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Link Building Workflows with GSC</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Monthly Link Audit Workflow</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Navigate to Links → External Links</li>
                <li>Review "Top linking sites" for new domains</li>
                <li>Export the list for your records</li>
                <li>Check for any suspicious or unwanted new links</li>
                <li>Identify top referring domains for relationship nurturing</li>
                <li>Reach out to new linkers with thank-you messages</li>
              </ol>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Content Strategy Workflow</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Go to Links → Top linked pages</li>
                <li>Export the list of your most-linked content</li>
                <li>Analyze common themes and formats</li>
                <li>Identify content types that attract links</li>
                <li>Create more content following successful patterns</li>
                <li>Update and improve existing top performers</li>
              </ol>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Internal Link Optimization Workflow</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>View Links → Internal links</li>
                <li>Sort by "Incoming internal links" (ascending)</li>
                <li>Identify important pages with few internal links</li>
                <li>Find pages with many internal links (link sources)</li>
                <li>Add strategic internal links from high-link pages to low-link important pages</li>
                <li>Monitor changes in internal link distribution</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Section 8: Tips */}
        <section id="tips" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pro Tips & Tricks</h2>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">💡 Export Regularly</h3>
              <p className="text-gray-600">GSC only keeps 16 months of data. Export monthly to build your own historical database.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">💡 Compare to Paid Tools</h3>
              <p className="text-gray-600">Compare GSC link counts to Ahrefs/SEMrush. Large discrepancies may indicate crawling issues.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">💡 Monitor New Links</h3>
              <p className="text-gray-600">Set a calendar reminder to check for new linking domains weekly.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">💡 Use URL Inspection</h3>
              <p className="text-gray-600">The URL Inspection tool shows which pages link to specific URLs—useful for finding internal link opportunities.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Master GSC?</h3>
          <p className="text-blue-100 mb-6">If you haven't already, set up Google Search Console for your website today—it's completely free.</p>
          <a 
            href="https://search.google.com/search-console" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg transition-colors"
          >
            Open Google Search Console →
          </a>
        </section>

        {/* Related Articles */}
        <section className="border-t pt-12 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Reviews</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/link-building-tools/free-backlink-checkers/" className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow">
              <p className="font-semibold text-blue-600">Free Backlink Checkers</p>
              <p className="text-gray-600 text-sm">More free link analysis tools</p>
            </Link>
            <Link href="/link-building-tools/ahrefs-review/" className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow">
              <p className="font-semibold text-blue-600">Ahrefs Review</p>
              <p className="text-gray-600 text-sm">Premium link building tool</p>
            </Link>
            <Link href="/link-building-tools/semrush-review/" className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow">
              <p className="font-semibold text-blue-600">SEMrush Review</p>
              <p className="text-gray-600 text-sm">All-in-one SEO platform</p>
            </Link>
            <Link href="/link-building-tools/screaming-frog-review/" className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow">
              <p className="font-semibold text-blue-600">Screaming Frog Guide</p>
              <p className="text-gray-600 text-sm">Technical link analysis</p>
            </Link>
          </div>
        </section>

      </article>

      <Footer />
    </main>
  );
}
