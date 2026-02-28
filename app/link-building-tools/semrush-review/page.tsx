import { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SEMrush Review 2025: Link Building Features, Pricing & Verdict",
  description: "In-depth SEMrush review focused on link building capabilities. Explore Backlink Analytics, Link Building Tool, audit features, pricing plans, and whether it's right for your SEO strategy.",
  keywords: ["SEMrush review", "SEMrush link building", "SEMrush pricing", "Backlink Analytics", "Link Building Tool"],
  openGraph: {
    title: "SEMrush Review 2025: Link Building Features, Pricing & Verdict",
    description: "Complete SEMrush review with focus on link building toolkit, pricing breakdown, and feature analysis for 2025.",
    type: "article",
  },
};

export default function SemrushReviewPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Nav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block px-4 py-2 bg-orange-800 rounded-full text-sm font-semibold mb-4">
              Tool Review 2025
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              SEMrush Review 2025: Link Building Features, Pricing & Verdict
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto mb-8">
              A comprehensive analysis of SEMrush's link building toolkit, Backlink Analytics, and how it compares for SEO professionals.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-lg">Updated: February 2025</span>
              <span className="bg-white/20 px-4 py-2 rounded-lg">Reading Time: 16 minutes</span>
              <span className="bg-white/20 px-4 py-2 rounded-lg">Rating: 8.8/10</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Snippet Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-orange-600">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Quick Answer</h2>
          <p className="text-gray-700 leading-relaxed">
            <strong>SEMrush is the most comprehensive all-in-one SEO platform for 2025, with strong link building capabilities through its Backlink Analytics and dedicated Link Building Tool.</strong> Starting at $119.95/month, it offers excellent value for agencies needing integrated workflows across SEO, content, and PPC. While its backlink database trails Ahrefs slightly, the built-in outreach management and CRM features make it ideal for teams executing full-cycle link building campaigns.
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Table of Contents</h2>
          <nav className="grid md:grid-cols-2 gap-3">
            {[
              { id: "overview", label: "What is SEMrush?" },
              { id: "link-building-toolkit", label: "Link Building Toolkit" },
              { id: "backlink-analytics", label: "Backlink Analytics" },
              { id: "link-building-tool", label: "Link Building Tool (CRM)" },
              { id: "backlink-audit", label: "Backlink Audit Features" },
              { id: "pricing", label: "Pricing Plans" },
              { id: "pros-cons", label: "Pros and Cons" },
              { id: "verdict", label: "Final Verdict" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-orange-600 hover:text-orange-800 hover:underline py-2"
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is SEMrush?</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            SEMrush is an all-in-one digital marketing platform founded in 2008 by Oleg Shchegolev and Dmitry Melnikov. While it started as an SEO tool, it has evolved into a comprehensive marketing suite covering SEO, content marketing, competitor research, PPC, and social media management. The platform now serves over 10 million users worldwide and processes more than 20 billion keywords and 43 trillion backlinks.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            For link building specifically, SEMrush offers a unique advantage: integration. Unlike standalone link research tools, SEMrush connects backlink data with keyword research, content analysis, and outreach management in a single workflow. This makes it particularly valuable for agencies and marketing teams who need to manage multiple aspects of digital marketing without switching between platforms.
          </p>
          
          <div className="bg-orange-50 rounded-xl p-6 my-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Statistics (2025)</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-orange-600">10M+</p>
                <p className="text-gray-600 text-sm">Active Users</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-orange-600">43T</p>
                <p className="text-gray-600 text-sm">Backlinks in Database</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-orange-600">20B+</p>
                <p className="text-gray-600 text-sm">Keywords Tracked</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Link Building Toolkit */}
        <section id="link-building-toolkit" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">SEMrush Link Building Toolkit Overview</h2>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            SEMrush's link building capabilities are organized into several interconnected tools. Understanding how each component works—and more importantly, how they work together—is key to maximizing the platform's value.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🔗 Backlink Analytics</h3>
              <p className="text-gray-600">Analyze any domain's backlink profile, referring domains, anchor text distribution, and link authority scores.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📧 Link Building Tool</h3>
              <p className="text-gray-600">Built-in CRM for managing link prospects, outreach campaigns, and tracking response rates.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🔍 Backlink Audit</h3>
              <p className="text-gray-600">Identify toxic links, analyze link quality, and generate disavow files to protect your site.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📊 Bulk Analysis</h3>
              <p className="text-gray-600">Compare up to 200 domains simultaneously for competitive link gap analysis.</p>
            </div>
          </div>

          <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl p-12 text-center my-8">
            <p className="text-gray-500 font-medium">[Screenshot: SEMrush Link Building Dashboard]</p>
            <p className="text-gray-400 text-sm mt-2">Unified dashboard showing backlink overview, new/lost links, and authority score trends</p>
          </div>
        </section>

        {/* Section 3: Backlink Analytics */}
        <section id="backlink-analytics" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Backlink Analytics Deep Dive</h2>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Backlink Analytics is SEMrush's equivalent to Ahrefs' Site Explorer. It provides comprehensive data about any domain's link profile, with several unique metrics and visualization options.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Authority Score (AS)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            SEMrush uses Authority Score (0-100) as its primary domain strength metric. Unlike Domain Authority (Moz) or Domain Rating (Ahrefs), Authority Score is calculated based on:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
            <li><strong>Link Power:</strong> Quality and quantity of backlinks</li>
            <li><strong>Organic Traffic:</strong> Estimated monthly search visits</li>
            <li><strong>Spam Factors:</strong> Irregular link patterns, traffic anomalies</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            This multi-factor approach can provide a more holistic view of a site's value, though some SEOs prefer the pure backlink-focused metrics of competitors.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Key Reports</h3>
          
          <div className="overflow-x-auto my-6">
            <table className="w-full bg-white rounded-xl shadow">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Report</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Data Provided</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Best Used For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Backlinks</td>
                  <td className="px-6 py-4 text-gray-600">Individual linking URLs with attributes</td>
                  <td className="px-6 py-4 text-gray-600">Detailed link analysis</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Referring Domains</td>
                  <td className="px-6 py-4 text-gray-600">Unique domains linking to target</td>
                  <td className="px-6 py-4 text-gray-600">Diversity assessment</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Anchors</td>
                  <td className="px-6 py-4 text-gray-600">Distribution of anchor text</td>
                  <td className="px-6 py-4 text-gray-600">Optimization analysis</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Indexed Pages</td>
                  <td className="px-6 py-4 text-gray-600">Top linked-to pages on domain</td>
                  <td className="px-6 py-4 text-gray-600">Content strategy insights</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Referring IPs</td>
                  <td className="px-6 py-4 text-gray-600">IP diversity of link sources</td>
                  <td className="px-6 py-4 text-gray-600">PBN detection</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Backlink Gap Analysis</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Backlink Gap tool allows comparison of up to 5 competitors simultaneously. It identifies domains linking to your competitors but not to you, with filtering options for domain authority, link type, and more. The visualization clearly shows which competitor has the most referring domains in common, helping prioritize outreach targets.
          </p>
        </section>

        {/* Section 4: Link Building Tool */}
        <section id="link-building-tool" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Link Building Tool: Built-in Outreach CRM</h2>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            This is where SEMrush differentiates itself from pure research tools like Ahrefs. The Link Building Tool provides a complete workflow from prospect discovery to outreach tracking, eliminating the need for separate spreadsheet management or third-party CRM systems.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">How It Works</h3>
          
          <div className="space-y-4 my-6">
            <div className="flex items-start bg-white rounded-lg shadow p-4">
              <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</span>
              <div>
                <p className="font-semibold text-gray-900">Prospect Discovery</p>
                <p className="text-gray-600">Enter target keywords and competitors; SEMrush finds relevant link opportunities</p>
              </div>
            </div>
            <div className="flex items-start bg-white rounded-lg shadow p-4">
              <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</span>
              <div>
                <p className="font-semibold text-gray-900">Qualification</p>
                <p className="text-gray-600">Review prospects, view authority scores, and add promising targets to your list</p>
              </div>
            </div>
            <div className="flex items-start bg-white rounded-lg shadow p-4">
              <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</span>
              <div>
                <p className="font-semibold text-gray-900">Contact Acquisition</p>
                <p className="text-gray-600">SEMrush attempts to find contact information for each prospect domain</p>
              </div>
            </div>
            <div className="flex items-start bg-white rounded-lg shadow p-4">
              <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</span>
              <div>
                <p className="font-semibold text-gray-900">Outreach Management</p>
                <p className="text-gray-600">Send emails directly from SEMrush or via connected email, track opens and replies</p>
              </div>
            </div>
            <div className="flex items-start bg-white rounded-lg shadow p-4">
              <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">5</span>
              <div>
                <p className="font-semibold text-gray-900">Progress Tracking</p>
                <p className="text-gray-600">Monitor link acquisition status through the built-in pipeline (To Reach Out → Contacted → In Progress → Acquired)</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-8">
            <h4 className="text-lg font-bold text-green-900 mb-3">💡 Pro Tip: Gmail Integration</h4>
            <p className="text-green-800">
              Connect your Gmail or G Suite account to send outreach emails directly through SEMrush. This keeps all communication centralized and allows automatic tracking of opens, clicks, and replies without manual data entry.
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Comparison with Dedicated Outreach Tools</h3>
          
          <div className="overflow-x-auto my-6">
            <table className="w-full bg-white rounded-xl shadow">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-orange-900">SEMrush</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Pitchbox</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">BuzzStream</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Prospect Discovery</td>
                  <td className="px-6 py-4 text-center text-green-600">Built-in</td>
                  <td className="px-6 py-4 text-center text-green-600">Built-in</td>
                  <td className="px-6 py-4 text-center text-yellow-600">Basic</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Email Finding</td>
                  <td className="px-6 py-4 text-center text-yellow-600">Moderate</td>
                  <td className="px-6 py-4 text-center text-green-600">Advanced</td>
                  <td className="px-6 py-4 text-center text-yellow-600">Basic</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Automated Follow-ups</td>
                  <td className="px-6 py-4 text-center text-red-500">❌</td>
                  <td className="px-6 py-4 text-center text-green-600">✅</td>
                  <td className="px-6 py-4 text-center text-green-600">✅</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Pipeline Management</td>
                  <td className="px-6 py-4 text-center text-green-600">✅</td>
                  <td className="px-6 py-4 text-center text-green-600">✅</td>
                  <td className="px-6 py-4 text-center text-green-600">✅</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Price (with outreach)</td>
                  <td className="px-6 py-4 text-center">From $119/mo</td>
                  <td className="px-6 py-4 text-center">From $495/mo</td>
                  <td className="px-6 py-4 text-center">From $24/mo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: Backlink Audit */}
        <section id="backlink-audit" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Backlink Audit and Link Quality Analysis</h2>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The Backlink Audit tool is essential for maintaining a healthy link profile and recovering from algorithmic penalties. It analyzes your entire backlink portfolio and categorizes links by toxicity level.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Toxic Score Calculation</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            SEMrush assigns each referring domain a Toxic Score (0-100) based on over 45 toxic markers including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
            <li>Unnatural link source patterns</li>
            <li>Low authority scores with high outbound links</li>
            <li>Suspicious anchor text distribution</li>
            <li>Link network footprints</li>
            <li>Spam TLD associations</li>
          </ul>

          <div className="grid md:grid-cols-3 gap-4 my-8">
            <div className="bg-green-50 rounded-lg p-4 text-center border border-green-200">
              <p className="text-2xl font-bold text-green-700">0-45</p>
              <p className="text-green-800 font-semibold">Non-Toxic</p>
              <p className="text-green-600 text-sm">Keep these links</p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4 text-center border border-yellow-200">
              <p className="text-2xl font-bold text-yellow-700">46-60</p>
              <p className="text-yellow-800 font-semibold">Potentially Toxic</p>
              <p className="text-yellow-600 text-sm">Manual review needed</p>
            </div>
            <div className="bg-red-50 rounded-lg p-4 text-center border border-red-200">
              <p className="text-2xl font-bold text-red-700">61-100</p>
              <p className="text-red-800 font-semibold">Toxic</p>
              <p className="text-red-600 text-sm">Consider disavowing</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Disavow Tool Integration</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            SEMrush simplifies the disavow process by allowing you to mark toxic links directly in the interface and automatically generate a properly formatted disavow.txt file for submission to Google Search Console. This eliminates the technical complexity of manual disavow file creation.
          </p>
        </section>

        {/* Section 6: Pricing */}
        <section id="pricing" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">SEMrush Pricing Breakdown (2025)</h2>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            SEMrush offers three main subscription tiers, with pricing that reflects its all-in-one positioning. Unlike Ahrefs, SEMrush includes most features at all levels—limits increase with higher tiers rather than features being locked.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full bg-white rounded-xl shadow">
              <thead className="bg-orange-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Plan</th>
                  <th className="px-6 py-4 text-left">Monthly Price</th>
                  <th className="px-6 py-4 text-left">Annual Price</th>
                  <th className="px-6 py-4 text-left">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-bold text-gray-900">Pro</td>
                  <td className="px-6 py-4 text-gray-700">$119.95</td>
                  <td className="px-6 py-4 text-gray-700">$99.95/mo (17% savings)</td>
                  <td className="px-6 py-4 text-gray-600">Freelancers, small teams</td>
                </tr>
                <tr className="bg-orange-50">
                  <td className="px-6 py-4 font-bold text-orange-900">Guru ⭐</td>
                  <td className="px-6 py-4 text-orange-700 font-semibold">$229.95</td>
                  <td className="px-6 py-4 text-orange-700 font-semibold">$191.62/mo (17% savings)</td>
                  <td className="px-6 py-4 text-gray-600">Growing agencies</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold text-gray-900">Business</td>
                  <td className="px-6 py-4 text-gray-700">$449.95</td>
                  <td className="px-6 py-4 text-gray-700">$374.95/mo (17% savings)</td>
                  <td className="px-6 py-4 text-gray-600">Large agencies, enterprises</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Link Building Limits by Plan</h3>
          
          <div className="overflow-x-auto my-6">
            <table className="w-full bg-white rounded-xl shadow">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Pro</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-orange-900 bg-orange-50">Guru</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Business</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Projects</td>
                  <td className="px-6 py-4 text-center">5</td>
                  <td className="px-6 py-4 text-center bg-orange-50 font-semibold">15</td>
                  <td className="px-6 py-4 text-center">40</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Keywords Tracked</td>
                  <td className="px-6 py-4 text-center">500</td>
                  <td className="px-6 py-4 text-center bg-orange-50 font-semibold">1,500</td>
                  <td className="px-6 py-4 text-center">5,000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Results per Report</td>
                  <td className="px-6 py-4 text-center">10,000</td>
                  <td className="px-6 py-4 text-center bg-orange-50 font-semibold">30,000</td>
                  <td className="px-6 py-4 text-center">50,000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Reports/Day</td>
                  <td className="px-6 py-4 text-center">3,000</td>
                  <td className="px-6 py-4 text-center bg-orange-50 font-semibold">5,000</td>
                  <td className="px-6 py-4 text-center">10,000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Content Marketing Platform</td>
                  <td className="px-6 py-4 text-center text-red-500">❌</td>
                  <td className="px-6 py-4 text-center bg-orange-50 text-green-600">✅</td>
                  <td className="px-6 py-4 text-center text-green-600">✅</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Share of Voice</td>
                  <td className="px-6 py-4 text-center text-red-500">❌</td>
                  <td className="px-6 py-4 text-center bg-orange-50 text-green-600">✅</td>
                  <td className="px-6 py-4 text-center text-green-600">✅</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
            <h4 className="text-lg font-bold text-blue-900 mb-3">💰 Value Tip: Annual Billing</h4>
            <p className="text-blue-800">
              SEMrush offers a 17% discount for annual billing, plus occasional promotional offers that can reach 30% off. For the Guru plan, annual billing saves approximately $460/year—enough to cover additional tools or outreach resources.
            </p>
          </div>
        </section>

        {/* Section 7: Pros & Cons */}
        <section id="pros-cons" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">SEMrush Pros and Cons</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                <span className="mr-2">✅</span> Pros
              </h3>
              <ul className="space-y-3">
                {[
                  "True all-in-one platform (SEO, content, PPC, social)",
                  "Built-in outreach CRM eliminates tool switching",
                  "Excellent for competitive intelligence",
                  "Content Marketing Platform for topic research",
                  "Regular feature updates and improvements",
                  "Strong reporting and white-label capabilities",
                  "Historical data available at all tiers",
                  "Good value for agencies managing multiple clients"
                ].map((pro, i) => (
                  <li key={i} className="flex items-start text-green-800">
                    <span className="mr-2">•</span>{pro}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                <span className="mr-2">❌</span> Cons
              </h3>
              <ul className="space-y-3">
                {[
                  "Backlink database smaller than Ahrefs",
                  "Link Building Tool email finder less accurate than dedicated tools",
                  "No automated follow-up sequences in outreach",
                  "Interface can feel overwhelming for beginners",
                  "Limits on reports can be restrictive for heavy users",
                  "No free trial (only free plan with limited features)",
                  "Learning curve for advanced features",
                  "Social media tools are basic compared to dedicated platforms"
                ].map((con, i) => (
                  <li key={i} className="flex items-start text-red-800">
                    <span className="mr-2">•</span>{con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 8: Verdict */}
        <section id="verdict" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Verdict: Is SEMrush Right for You?</h2>
          
          <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <p className="text-orange-200 text-sm uppercase tracking-wide mb-2">Overall Rating</p>
                <p className="text-6xl font-bold">8.8<span className="text-3xl text-orange-300">/10</span></p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-2xl font-bold">Strongly Recommended</p>
                <p className="text-orange-200">For agencies and integrated marketing teams</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Who Should Choose SEMrush?</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Digital marketing agencies managing SEO + PPC + content</li>
                <li>In-house teams needing integrated workflows</li>
                <li>Link builders who want built-in outreach CRM</li>
                <li>Content marketers needing topic research + optimization</li>
                <li>Businesses prioritizing competitive intelligence</li>
                <li>Users who prefer one tool over multiple subscriptions</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Who Should Look Elsewhere?</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Pure link researchers (consider <Link href="/link-building-tools/ahrefs-review/" className="text-blue-600 hover:underline">Ahrefs</Link>)</li>
                <li>Budget-focused users needing only backlink data</li>
                <li>Advanced outreach automation needs (consider <Link href="/link-building-tools/pitchbox-review/" className="text-blue-600 hover:underline">Pitchbox</Link>)</li>
                <li>Users who prioritize largest backlink database</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">SEMrush vs Ahrefs for Link Building</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The choice between SEMrush and Ahrefs often comes down to workflow preferences:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
            <li><strong>Choose SEMrush if:</strong> You want integrated outreach management, need content marketing tools, or manage multiple marketing channels</li>
            <li><strong>Choose Ahrefs if:</strong> You prioritize backlink data depth, want faster index updates, or focus exclusively on link building and SEO</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Read our complete <Link href="/link-building-tools/ahrefs-vs-semrush/" className="text-blue-600 hover:underline font-semibold">Ahrefs vs SEMrush comparison</Link> for a detailed feature-by-feature breakdown.
          </p>

          <div className="bg-gray-100 rounded-xl p-8 text-center mt-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Start with SEMrush</h4>
            <p className="text-gray-600 mb-6">Try their free plan with limited features, or start a 7-day free trial of Pro/Guru plans.</p>
            <a 
              href="https://semrush.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
            >
              Visit SEMrush.com →
            </a>
          </div>
        </section>

        {/* Related Articles */}
        <section className="border-t pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Reviews</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/link-building-tools/ahrefs-vs-semrush/" className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow">
              <p className="font-semibold text-blue-600">Ahrefs vs SEMrush 2025</p>
              <p className="text-gray-600 text-sm">Head-to-head comparison for link building</p>
            </Link>
            <Link href="/link-building-tools/ahrefs-review/" className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow">
              <p className="font-semibold text-blue-600">Ahrefs Review 2025</p>
              <p className="text-gray-600 text-sm">Complete feature and pricing analysis</p>
            </Link>
            <Link href="/link-building-tools/pitchbox-review/" className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow">
              <p className="font-semibold text-blue-600">Pitchbox Review</p>
              <p className="text-gray-600 text-sm">Advanced outreach automation tool</p>
            </Link>
            <Link href="/link-building-tools/moz-pro-review/" className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow">
              <p className="font-semibold text-blue-600">Moz Pro Review</p>
              <p className="text-gray-600 text-sm">Alternative SEO platform comparison</p>
            </Link>
          </div>
        </section>

      </article>

      <Footer />
    </main>
  );
}
