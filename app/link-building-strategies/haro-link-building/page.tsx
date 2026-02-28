import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HARO Link Building: How to Get DR 70+ Backlinks for Free",
  description:
    "Master HARO link building with proven pitch templates. Get featured in Forbes, Entrepreneur, and major publications. Step-by-step guide for 2025.",
  keywords: [
    "HARO link building",
    "Help A Reporter Out",
    "HARO pitches",
    "HARO success rate",
    "digital PR",
    "journalist outreach",
  ],
  alternates: {
    canonical: "/link-building-strategies/haro-link-building/",
  },
};

const tableOfContents = [
  { id: "what-is", title: "What is HARO?" },
  { id: "how-works", title: "How does HARO work?" },
  { id: "winning-pitches", title: "How to write winning HARO pitches?" },
  { id: "categories", title: "What HARO categories should you choose?" },
  { id: "success-rate", title: "What is the success rate for HARO?" },
  { id: "alternatives", title: "HARO alternatives and competitors" },
];

export default function HAROLinkBuildingPage() {
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
                HARO Link Building: How to Get DR 70+ Backlinks for Free
              </h1>
              <p className="text-lg text-[#8888A0] leading-relaxed">
                HARO delivers backlinks from Forbes, Business Insider, and Entrepreneur without payment. 
                This guide shows you how to write pitches with 8% success rates and earn 5-10 high-authority 
                links monthly — completely free.
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
                <strong>HARO</strong> (Help A Reporter Out) is a free service connecting journalists with expert 
                sources. Three times daily, HARO emails contain queries from reporters at major publications 
                seeking quotes, insights, and sources. Respond with valuable input to earn media mentions 
                and high-authority backlinks.
              </p>
            </div>

            {/* H2: What is HARO? */}
            <section id="what-is" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What is HARO?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                HARO operates as an email-based matchmaking service between journalists and sources. 
                Founded in 2008 and acquired by Cision in 2018, HARO now serves 75,000+ journalists and 
                1 million+ sources. Major publications including The New York Times, Forbes, and Wall 
                Street Journal regularly use HARO to find expert commentary.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                How HARO Fits Into Your Link Building Strategy
              </h3>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                HARO serves three strategic purposes for SEO professionals:
              </p>
              <ol className="list-decimal list-inside space-y-3 text-[#8888A0] mb-6">
                <li><strong>High-Authority Link Acquisition:</strong> Earn backlinks from DR 70-90+ publications that would cost $2,000-$10,000 through PR agencies</li>
                <li><strong>Brand Authority Building:</strong> Position yourself or clients as industry experts quoted in major media</li>
                <li><strong>Referral Traffic Generation:</strong> Featured articles drive targeted visitors interested in your expertise</li>
              </ol>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06] text-center">
                  <div className="text-3xl font-bold text-[#22C55E] mb-2">3x Daily</div>
                  <div className="text-sm text-[#8888A0]">Email delivery schedule</div>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06] text-center">
                  <div className="text-3xl font-bold text-[#22C55E] mb-2">75,000+</div>
                  <div className="text-sm text-[#8888A0]">Active journalists</div>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06] text-center">
                  <div className="text-3xl font-bold text-[#22C55E] mb-2">DR 70+</div>
                  <div className="text-sm text-[#8888A0]">Average publication authority</div>
                </div>
              </div>
            </section>

            {/* H2: How does HARO work? */}
            <section id="how-works" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                How does HARO work?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                HARO operates on a simple email distribution system. Understanding the workflow helps you 
                respond faster and win more placements.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                The HARO Process Step-by-Step
              </h3>
              <ol className="list-decimal list-inside space-y-3 text-[#8888A0] mb-6">
                <li><strong>Sign up as a source</strong> at helpareporter.com (free). Select relevant industry categories.</li>
                <li><strong>Receive emails</strong> at 5:35 AM, 12:35 PM, and 5:35 PM ET Monday through Friday.</li>
                <li><strong>Scan queries</strong> for relevant opportunities matching your expertise.</li>
                <li><strong>Craft responses</strong> following journalist specifications (usually 100-300 words).</li>
                <li><strong>Submit before deadlines</strong> (typically 24-72 hours from email distribution).</li>
                <li><strong>Track responses</strong> and follow up if journalists request clarification.</li>
                <li><strong>Monitor publications</strong> for your quote and backlink over the following weeks.</li>
              </ol>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                HARO Email Schedule (All Times Eastern)
              </h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 px-3 text-[#55556A]">Edition</th>
                      <th className="text-left py-3 px-3 text-[#55556A]">Delivery Time</th>
                      <th className="text-left py-3 px-3 text-[#55556A]">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#8888A0]">
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-3">Morning</td>
                      <td className="py-3 px-3">5:35 AM ET</td>
                      <td className="py-3 px-3">Breaking news, daily coverage</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-3">Afternoon</td>
                      <td className="py-3 px-3">12:35 PM ET</td>
                      <td className="py-3 px-3">Feature articles, evergreen content</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3">Evening</td>
                      <td className="py-3 px-3">5:35 PM ET</td>
                      <td className="py-3 px-3">Tomorrow&apos;s coverage, weekend features</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-[#8888A0] leading-relaxed">
                The afternoon edition typically contains the highest-quality queries because journalists 
                have had the morning to plan feature articles. Prioritize scanning this edition first 
                if time is limited.
              </p>
            </section>

            {/* H2: How to write winning HARO pitches? */}
            <section id="winning-pitches" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                How to write winning HARO pitches?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Most HARO pitches fail because they are generic, self-promotional, or arrive too late. 
                Winning pitches follow a specific structure that makes journalists&apos; jobs easier.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                The HARO Pitch Framework (8% Success Rate)
              </h3>
              <div className="bg-[#111118] rounded-lg p-6 mb-6 font-mono text-sm text-[#8888A0] whitespace-pre-wrap">
                {`Subject: RE: [Exact Query Title] — [Your Specific Angle]

Hi [Journalist Name],

[CREDENTIALS — 1 sentence establishing expertise]
I am the [Title] at [Company], where we [relevant accomplishment/statistic]. 

[THE QUOTE — 2-3 sentences directly answering their question]
[Provide specific, actionable insight they can quote verbatim. Include a concrete number or example.]

[SUPPORTING DETAILS — 1-2 sentences with context]
[Add brief context explaining why this matters or how you discovered this insight.]

[BIO — 2-3 sentences for attribution]
[Your full name] is [title] at [company], where [what you do]. [Relevant credential 1]. [Relevant credential 2].

[CALL TO ACTION]
Happy to provide additional details or examples if helpful.

Best,
[Name]
[Email]
[Website URL]
[LinkedIn URL]`}
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                HARO Pitch Rules That Increase Success
              </h3>
              <div className="space-y-3 mb-6">
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-1">Rule 1: Respond Within 2 Hours</h4>
                  <p className="text-sm text-[#8888A0]">
                    Journalists often select sources from the first 20 responses. Set up email alerts 
                    and respond immediately to relevant queries.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-1">Rule 2: Provide Ready-to-Publish Quotes</h4>
                  <p className="text-sm text-[#8888A0]">
                    Journalists copy-paste directly from HARO responses. Write quotable sentences 
                    they can use without editing.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-1">Rule 3: Include Specific Numbers</h4>
                  <p className="text-sm text-[#8888A0]">
                    Quotes with statistics get used 3x more often. Include percentages, dollar amounts, 
                    or timeframes in every pitch.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-1">Rule 4: Keep Under 300 Words</h4>
                  <p className="text-sm text-[#8888A0]">
                    Journalists scanning 100+ responses ignore lengthy pitches. Be concise and lead 
                    with your best insight.
                  </p>
                </div>
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                HARO Pitch Mistakes That Guarantee Rejection
              </h3>
              <ul className="space-y-2 text-[#8888A0] mb-6">
                <li>❌ Attaching press releases or PDFs (journalists do not open them)</li>
                <li>❌ Pitching off-topic because &quot;you might find this interesting&quot;</li>
                <li>❌ Sending pitches 12+ hours after the query distributed</li>
                <li>❌ Including multiple attachments or large files</li>
                <li>❌ Writing in first person about your company history</li>
                <li>❌ Forgetting to include your website URL for backlink</li>
                <li>❌ Using AI-generated generic responses without personalization</li>
              </ul>
            </section>

            {/* H2: What HARO categories should you choose? */}
            <section id="categories" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What HARO categories should you choose?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                HARO offers industry-specific categories beyond the general source list. Selecting the 
                right categories reduces email volume while increasing relevance.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                HARO Category Options
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-2">Business & Finance</h4>
                  <p className="text-sm text-[#8888A0]">
                    Best for: Fintech, SaaS, investing, entrepreneurship, banking
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-2">Technology</h4>
                  <p className="text-sm text-[#8888A0]">
                    Best for: Software, AI, cybersecurity, IT, hardware
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-2">Lifestyle & Fitness</h4>
                  <p className="text-sm text-[#8888A0]">
                    Best for: Health, wellness, fitness, nutrition, mental health
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-2">Travel</h4>
                  <p className="text-sm text-[#8888A0]">
                    Best for: Hospitality, tourism, airlines, booking platforms
                  </p>
                </div>
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Category Selection Strategy
              </h3>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Select 2-3 categories maximum. Spreading across too many categories dilutes your focus 
                and increases the chance of responding to irrelevant queries. Choose categories where 
                you have demonstrable expertise and client case studies. Quality beats quantity in HARO success.
              </p>
            </section>

            {/* H2: What is the success rate for HARO? */}
            <section id="success-rate" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What is the success rate for HARO?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                HARO success rates vary dramatically based on pitch quality, response speed, and expertise 
                relevance. Understanding realistic expectations helps you optimize effort.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Realistic HARO Success Rates
              </h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 px-3 text-[#55556A]">Pitch Quality</th>
                      <th className="text-left py-3 px-3 text-[#55556A]">Success Rate</th>
                      <th className="text-left py-3 px-3 text-[#55556A]">Links per 100 Pitches</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#8888A0]">
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-3">Basic (slow, generic)</td>
                      <td className="py-3 px-3">1-2%</td>
                      <td className="py-3 px-3">1-2 links</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-3">Good (relevant, fast)</td>
                      <td className="py-3 px-3">3-5%</td>
                      <td className="py-3 px-3">3-5 links</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3">Excellent (expert, quotable)</td>
                      <td className="py-3 px-3 text-[#22C55E]">8-15%</td>
                      <td className="py-3 px-3">8-15 links</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Time Investment vs. Results
              </h3>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Expect to spend 30-45 minutes daily scanning and responding to HARO queries. At an 8% 
                success rate, this generates 2-3 high-authority links per month. With DR 70+ links valued 
                at $500-$2,000 each, HARO delivers $1,500-$6,000 in monthly link value for 15-20 hours of work.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Tracking Your HARO Results
              </h3>
              <p className="text-[#8888A0] leading-relaxed">
                Create a spreadsheet tracking: query date, journalist, publication, response sent date, 
                and outcome. Monitor which pitch angles and topics generate the most placements. Refine 
                your approach based on data, not guesswork. Most HARO links appear 2-8 weeks after pitching.
              </p>
            </section>

            {/* H2: HARO alternatives and competitors */}
            <section id="alternatives" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                HARO alternatives and competitors
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                HARO is the largest platform but not the only option. These alternatives often have less 
                competition and higher success rates.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Top HARO Alternatives for 2025
              </h3>
              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-1">Qwoted (Free/Paid)</h4>
                  <p className="text-sm text-[#8888A0] mb-2">
                    Journalist-focused platform with direct messaging. Higher success rates than HARO 
                    due to lower competition. Paid plans offer priority alerts.
                  </p>
                  <p className="text-xs text-[#55556A]">Best for: B2B, finance, technology experts</p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-1">SourceBottle (Free)</h4>
                  <p className="text-sm text-[#8888A0] mb-2">
                    Popular in Australia, UK, and Canada. Strong focus on lifestyle, health, and 
                    consumer topics. Lower volume but quality opportunities.
                  </p>
                  <p className="text-xs text-[#55556A]">Best for: Lifestyle, health, consumer brands</p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-1">Terkel (Free)</h4>
                  <p className="text-sm text-[#8888A0] mb-2">
                    Newer platform with AI-powered matching. Connects experts with publishers 
                    seeking quotes. Growing rapidly among SEO professionals.
                  </p>
                  <p className="text-xs text-[#55556A]">Best for: SEO, marketing, business experts</p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-1">Featured.com (Paid)</h4>
                  <p className="text-sm text-[#8888A0] mb-2">
                    Premium platform ($99/month). Direct access to journalists at major publications. 
                    Guaranteed response consideration.
                  </p>
                  <p className="text-xs text-[#55556A]">Best for: Established experts, agencies</p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-1">Twitter/X Journalist Hashtags (Free)</h4>
                  <p className="text-sm text-[#8888A0] mb-2">
                    Search #journorequest, #prrequest, and #HARO on Twitter. Many journalists post 
                    queries directly. Fastest response opportunity.
                  </p>
                  <p className="text-xs text-[#55556A]">Best for: Fast responders, trending topics</p>
                </div>
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-4">
                Multi-Platform Strategy
              </h3>
              <p className="text-[#8888A0] leading-relaxed">
                Combine HARO with 2-3 alternatives for maximum coverage. Each platform attracts different 
                journalists and publication types. Qwoted excels for B2B, SourceBottle for lifestyle, 
                and Terkel for marketing topics. Test each platform for 30 days to identify your highest-ROI channels.
              </p>
            </section>

            {/* CTA Section */}
            <section className="mb-16">
              <div className="p-8 rounded-2xl bg-gradient-to-r from-[#4F7CFF]/20 to-[#4F7CFF]/5 border border-[#4F7CFF]/30">
                <h3 className="font-[family-name:var(--font-syne)] font-bold text-xl text-[#F0F0F5] mb-3 text-center">
                  Done-For-You HARO Link Building
                </h3>
                <p className="text-[#8888A0] text-center mb-6 max-w-2xl mx-auto">
                  Our team monitors HARO daily and pitches on your behalf. We&apos;ve secured 400+ links 
                  from Forbes, Business Insider, and Entrepreneur. You provide expertise; we handle everything else.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/#pricing"
                    className="inline-flex items-center justify-center px-6 py-3 text-white bg-[#4F7CFF] rounded-lg hover:bg-[#3D6AEE] transition-colors font-medium"
                  >
                    View HARO Packages
                  </Link>
                  <Link
                    href="/link-building-strategies/digital-pr-link-building/"
                    className="inline-flex items-center justify-center px-6 py-3 text-[#F0F0F5] border border-white/20 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    Explore Digital PR
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
                  Digital PR for Link Building →
                </Link>
                <Link href="/link-building-strategies/podcast-link-building/" className="text-[#4F7CFF] hover:underline">
                  Podcast Link Building →
                </Link>
                <Link href="/link-building-guide/link-building-cost/" className="text-[#4F7CFF] hover:underline">
                  Link Building Pricing →
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
