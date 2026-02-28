import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Link Building Outreach: The Complete Guide to Getting More Responses",
  description:
    "Master link building outreach with proven strategies and templates. Learn how to find prospects, write emails that get responses, and scale your link acquisition.",
  keywords: [
    "link building outreach",
    "outreach email templates",
    "link building emails",
    "guest post outreach",
    "link prospecting",
    "outreach strategy",
    "email outreach",
  ],
  alternates: {
    canonical: "/link-building-guide/link-building-outreach-guide/",
  },
};

export default function LinkBuildingOutreachPage() {
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
              Link Building Outreach: The Complete Guide to Getting More Responses
            </h1>
            <p className="text-lg text-[#8888A0] leading-relaxed">
              91% of link building outreach emails are ignored. Learn the exact strategies, templates, 
              and psychology that separate the 9% who get links from everyone else.
            </p>
          </header>

          {/* Featured Snippet */}
          <div className="p-6 rounded-xl bg-[#4F7CFF]/10 border border-[#4F7CFF]/30 mb-10">
            <p className="text-[#F0F0F5] leading-relaxed">
              <strong>Link building outreach</strong> is the process of contacting website owners, 
              bloggers, and journalists to request backlinks to your content. Successful outreach 
              requires personalized emails, genuine value propositions, and strategic follow-up. 
              The average response rate for cold outreach is 8-12%, but well-executed campaigns achieve 
              20-30% by focusing on relevance, providing clear value, and building relationships rather 
              than making transactional requests. Effective outreach combines prospect research, 
              compelling email copy, and persistent yet respectful follow-up sequences.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-16">
            {/* Section 1 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What is link building outreach?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Link building outreach is the systematic process of identifying relevant websites, 
                finding contact information, and sending personalized requests to earn backlinks. 
                It's the execution layer that transforms link building strategies into actual links.
              </p>
              
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Outreach sits at the intersection of marketing, sales, and relationship building. 
                You're essentially selling the value of your content to website owners who receive 
                dozens of similar requests weekly. Standing out requires strategic differentiation.
              </p>

              <p className="text-[#8888A0] leading-relaxed mb-6">
                Common outreach objectives:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  { objective: "Guest Posting", desc: "Pitching article ideas to relevant blogs"},
                  { objective: "Resource Page Links", desc: "Suggesting your content for curated lists"},
                  { objective: "Broken Link Building", desc: "Offering replacements for dead links"},
                  { objective: "Link Reclamation", desc: "Requesting attribution for unlinked mentions"},
                  { objective: "Skyscraper Technique", desc: "Asking linkers to better content to link to yours"},
                  { objective: "Digital PR", desc: "Pitching stories and data to journalists"},
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                    <h4 className="font-semibold text-[#F0F0F5] mb-1">{item.objective}</h4>
                    <p className="text-sm text-[#8888A0]">{item.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#8888A0] leading-relaxed">
                Successful outreach requires volume and quality. Most campaigns need 100-200 personalized 
                emails to generate 10-20 meaningful responses and 3-5 actual links. Patience and persistence 
                separate successful outreach from abandoned attempts.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                Why does most outreach fail?
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Understanding why outreach fails prevents you from making the same mistakes that 
                cause 91% of emails to be deleted unread.
              </p>

              <p className="text-[#8888A0] leading-relaxed mb-6">
                Common outreach failure reasons:
              </p>
              
              <div className="space-y-4 mb-6">
                {[
                  { reason: "Generic Templates", desc: "Recipients spot mail-merge emails instantly. 'Hi [First Name], I loved your article about [Topic]' screams automation and gets deleted."},
                  { reason: "No Clear Value", desc: "Asking for links without explaining why it benefits the recipient. Self-focused requests get ignored."},
                  { reason: "Irrelevant Targeting", desc: "Pitching SEO content to food bloggers wastes everyone's time. Poor prospect research kills campaigns."},
                  { reason: "Weak Subject Lines", desc: "'Quick question' and 'Link request' trigger instant deletion. Subject lines determine open rates."},
                  { reason: "No Social Proof", desc: "Unknown senders lack credibility. Without demonstrating expertise or authority, requests feel risky."},
                  { reason: "No Follow-Up", desc: "70% of responses come after the first email. Single-email campaigns miss most opportunities."},
                  { reason: "Wrong Timing", desc: "Pitching during holidays, weekends, or industry conference seasons reduces response rates."},
                  { reason: "Too Long", desc: "Wall-of-text emails don't get read. Busy recipients need concise, scannable requests."},
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                    <h4 className="font-semibold text-red-400 mb-1">{item.reason}</h4>
                    <p className="text-sm text-[#8888A0]">{item.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                The response rate formula:
              </p>
              <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06] mb-6">
                <p className="text-[#8888A0] text-sm">
                  Response Rate = Relevance × Value Clarity × Credibility × Timing
                </p>
                <p className="text-xs text-[#55556A] mt-2">
                  Failure in any variable dramatically reduces results.
                </p>
              </div>
              <p className="text-[#8888A0] leading-relaxed">
                Successful outreach requires excellence across all dimensions. Fix each failure point 
                systematically to reach the 20-30% response rate tier.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                How to find outreach prospects?
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Quality prospecting determines 50% of outreach success. Finding the right targets 
                with contact information and relevance triggers takes more time than sending emails—but 
                delivers far better results.
              </p>

              <p className="text-[#8888A0] leading-relaxed mb-6">
                Prospect research process:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-3">Step 1: Define Target Criteria</h3>
                  <p className="text-[#8888A0] text-sm mb-2">Ideal prospects have:</p>
                  <ul className="space-y-1 text-[#8888A0] text-sm">
                    <li>• Domain Rating/Authority aligned with your goals (typically DR 30+)</li>
                    <li>• Organic traffic indicating active readership (10K+ monthly)</li>
                    <li>• Topical relevance to your content</li>
                    <li>• History of linking to external resources</li>
                    <li>• Recent content publication (active within 3 months)</li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-3">Step 2: Build Prospect Lists</h3>
                  <p className="text-[#8888A0] text-sm mb-2">Tools and methods:</p>
                  <ul className="space-y-1 text-[#8888A0] text-sm">
                    <li>• <strong>Ahrefs Content Explorer:</strong> Find content in your niche with author contact</li>
                    <li>• <strong>SEMrush:</strong> Analyze competitor backlink profiles for target sites</li>
                    <li>• <strong>Google Search:</strong> "keyword + write for us", "keyword + guest post"</li>
                    <li>• <strong>Twitter/X:</strong> Search industry hashtags for active bloggers</li>
                    <li>• <strong>LinkedIn:</strong> Find editors and content managers directly</li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-3">Step 3: Find Contact Information</h3>
                  <p className="text-[#8888A0] text-sm mb-2">Contact finding tools:</p>
                  <ul className="space-y-1 text-[#8888A0] text-sm">
                    <li>• <strong>Hunter.io:</strong> Domain-based email finding</li>
                    <li>• <strong>Voila Norbert:</strong> Name + domain email discovery</li>
                    <li>• <strong>LinkedIn:</strong> Direct messaging for B2B outreach</li>
                    <li>• <strong>Twitter:</strong> DM for initial contact, then email</li>
                    <li>• <strong>Contact forms:</strong> Last resort, lower response rates</li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-3">Step 4: Research Personalization Hooks</h3>
                  <p className="text-[#8888A0] text-sm mb-2">Before emailing, identify:</p>
                  <ul className="space-y-1 text-[#8888A0] text-sm">
                    <li>• Recent articles they've published (for specific praise)</li>
                    <li>• Their social media activity and interests</li>
                    <li>• Mutual connections or shared experiences</li>
                    <li>• Specific content gaps you can fill</li>
                    <li>• Their content guidelines or preferences</li>
                  </ul>
                </div>
              </div>

              <p className="text-[#8888A0] leading-relaxed">
                Target 3-5x more prospects than emails you plan to send. Not all contacts will be 
                reachable, and having extra prospects enables A/B testing and campaign optimization.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What makes a good outreach email?
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-4">
                High-converting outreach emails follow proven psychological principles. Every element 
                serves a specific purpose in the persuasion chain.
              </p>

              <p className="text-[#8888A0] leading-relaxed mb-6">
                Anatomy of a high-performing outreach email:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/20">
                  <h4 className="font-semibold text-green-400 mb-2">1. Compelling Subject Line (40-60 characters)</h4>
                  <p className="text-sm text-[#8888A0] mb-2">Create curiosity or promise value:</p>
                  <ul className="space-y-1 text-sm text-[#8888A0]">
                    <li>• "Resource for your [Specific Article]"</li>
                    <li>• "Quick question about [Topic]"</li>
                    <li>• "Loved your take on [Specific Point]"</li>
                    <li>• "I built a tool your readers might like"</li>
                  </ul>
                  <p className="text-xs text-[#55556A] mt-2">Avoid: "Link request", "Quick question", "Guest post pitch"</p>
                </div>

                <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/20">
                  <h4 className="font-semibold text-green-400 mb-2">2. Personalized Opening (1-2 sentences)</h4>
                  <p className="text-sm text-[#8888A0] mb-2">Demonstrate genuine familiarity:</p>
                  <p className="text-sm text-[#8888A0]">"Your recent article on technical SEO audits perfectly captured the crawl budget issues we faced last quarter. The section on JavaScript rendering especially resonated."</p>
                </div>

                <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/20">
                  <h4 className="font-semibold text-green-400 mb-2">3. Value Proposition (2-3 sentences)</h4>
                  <p className="text-sm text-[#8888A0] mb-2">Explain what's in it for them:</p>
                  <p className="text-sm text-[#8888A0]">"I recently published a data study analyzing 10,000 JavaScript-heavy sites that complements your coverage. It includes crawl budget benchmarks your readers could apply immediately."</p>
                </div>

                <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/20">
                  <h4 className="font-semibold text-green-400 mb-2">4. Clear Ask (1 sentence)</h4>
                  <p className="text-sm text-[#8888A0] mb-2">Make the request specific and easy:</p>
                  <p className="text-sm text-[#8888A0]">"Would you consider adding it as a resource in your audit checklist section?"</p>
                </div>

                <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/20">
                  <h4 className="font-semibold text-green-400 mb-2">5. Low-Friction Close</h4>
                  <p className="text-sm text-[#8888A0] mb-2">Remove pressure and provide alternatives:</p>
                  <p className="text-sm text-[#8888A0]">"No worries if it doesn't fit—just thought it might help your readers. Happy to share the raw data if useful for future articles."</p>
                </div>
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                Key principles:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Keep total length under 150 words (busy recipients scan long emails)",
                  "Use their name, not generic greetings",
                  "Lead with them, not you (their content, their readers, their success)",
                  "Include specific URLs (proves you actually found them)",
                  "Sign with full name and credentials",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-[#22C55E] mt-1">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[#8888A0] leading-relaxed">
                <Link href="/free-tools/outreach-email-generator/" className="text-[#4F7CFF] hover:underline">
                  Try our free outreach email generator →
                </Link>
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                How to follow up on outreach?
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Follow-up is where most link building happens. 70% of responses arrive after the first 
                email. Strategic persistence separates professionals from amateurs.
              </p>

              <p className="text-[#8888A0] leading-relaxed mb-6">
                Follow-up sequence framework:
              </p>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 text-[#55556A] font-normal">Email</th>
                      <th className="text-left py-3 text-[#55556A] font-normal">Timing</th>
                      <th className="text-left py-3 text-[#55556A] font-normal">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { email: "Initial", timing: "Day 1", purpose: "Main pitch with value proposition"},
                      { email: "Follow-up 1", timing: "Day 4-5", purpose: "Bumping to top of inbox, brief reminder"},
                      { email: "Follow-up 2", timing: "Day 8-10", purpose: "Adding new value (fresh angle, resource)"},
                      { email: "Final", timing: "Day 14-16", purpose: "Break-up email, leaving door open"},
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-white/[0.06]">
                        <td className="py-3 text-[#F0F0F5]">{row.email}</td>
                        <td className="py-3 text-[#8888A0]">{row.timing}</td>
                        <td className="py-3 text-[#8888A0]">{row.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                Follow-up best practices:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Keep follow-ups shorter than the original (2-3 sentences max)",
                  "Add value in each follow-up, don't just ask again",
                  "Change subject lines for follow-ups to avoid threading issues",
                  "Respect unsubscribe requests immediately",
                  "Track responses to optimize timing for your niche",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-[#22C55E] mt-1">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                When to stop following up:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "They explicitly decline or unsubscribe",
                  "After 3-4 touchpoints without any response",
                  "They mark you as spam (check email tool notifications)",
                  "The site publishes competing content (timing window closed)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-red-400 mt-1">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[#8888A0] leading-relaxed">
                Automation tools like Pitchbox, BuzzStream, or Mailshake manage follow-up sequences 
                at scale while maintaining personalization. Invest in tools once you exceed 50 
                monthly outreach emails.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                Outreach email templates
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Templates accelerate outreach but require customization for each recipient. Use these 
                as frameworks, not copy-paste solutions.
              </p>

              <p className="text-[#8888A0] leading-relaxed mb-6">
                Guest posting template:
              </p>
              
              <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06] mb-6">
                <p className="text-sm text-[#55556A] mb-2">Subject: Guest post idea for [Site Name]</p>
                <div className="text-sm text-[#8888A0] space-y-2">
                  <p>Hi [Name],</p>
                  <p>I've been following [Site Name] for a while—your recent post on [Specific Article] really nailed the challenges of [Specific Point].</p>
                  <p>I'm [Your Name], [Position] at [Company]. I've written for [Publication 1] and [Publication 2] on [Topic], and I have an article idea that would fit perfectly with your audience:</p>
                  <p><strong>"[Article Title]"</strong></p>
                  <p>This piece would cover:</p>
                  <ul className="list-disc list-inside">
                    <li>[Key Point 1]</li>
                    <li>[Key Point 2]</li>
                    <li>[Key Point 3]</li>
                  </ul>
                  <p>I noticed you haven't covered [Specific Angle] yet, and your readers would find the [Specific Value] particularly useful.</p>
                  <p>Worth exploring?</p>
                  <p>[Your Name]<br/>[Title]<br/>[Website]</p>
                </div>
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-6">
                Resource page template:
              </p>
              
              <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06] mb-6">
                <p className="text-sm text-[#55556A] mb-2">Subject: Resource for your [Page Topic] page</p>
                <div className="text-sm text-[#8888A0] space-y-2">
                  <p>Hi [Name],</p>
                  <p>I came across your [Resource Page Name] while researching [Topic]. Impressive collection—you've clearly put serious effort into curating quality resources.</p>
                  <p>I recently published [Content Type] that I think would be a great addition: [Content Title] ([URL])</p>
                  <p>It covers [Brief Description], which complements the [Specific Resource] you already list. My [Specific Audience] readers have found the [Specific Section] especially valuable.</p>
                  <p>If you think it fits, I'd love to see it included. If not, no worries—keep up the great work with the site.</p>
                  <p>Best,<br/>[Your Name]</p>
                </div>
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-6">
                Broken link building template:
              </p>
              
              <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06] mb-6">
                <p className="text-sm text-[#55556A] mb-2">Subject: Broken link on your [Page Name] page</p>
                <div className="text-sm text-[#8888A0] space-y-2">
                  <p>Hi [Name],</p>
                  <p>Quick heads up—I was reading your excellent guide on [Topic] and noticed a broken link in the [Section] section.</p>
                  <p>The link to [Dead Resource] ([Broken URL]) returns a 404.</p>
                  <p>I actually have a guide covering similar ground: [Your Content Title] ([URL]). It includes [Unique Value Proposition] that might make it a good replacement.</p>
                  <p>Either way, thought you'd want to know about the broken link.</p>
                  <p>Cheers,<br/>[Your Name]</p>
                </div>
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                Template customization checklist:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Replace all bracketed placeholders with specific, researched information",
                  "Adjust tone to match the recipient's style (formal vs. casual)",
                  "Remove any sections that don't apply to this specific prospect",
                  "Add one completely personalized sentence referencing their recent work",
                  "Verify all URLs work before sending",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-[#4F7CFF]">□</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[#8888A0] leading-relaxed">
                Never send a template without customization. Recipients can spot generic templates 
                instantly, and sending them damages your reputation and response rates.
              </p>
            </section>
          </div>

          {/* Summary Box */}
          <div className="mt-16 p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
            <h3 className="font-[family-name:var(--font-syne)] font-bold text-lg text-[#F0F0F5] mb-4">
              Outreach Success Checklist
            </h3>
            <ul className="space-y-3">
              {[
                "Research prospects thoroughly before contacting",
                "Personalize every email with specific references",
                "Lead with value, not your request",
                "Keep emails under 150 words",
                "Use compelling, specific subject lines",
                "Follow up 3-4 times over 2 weeks",
                "Track metrics and optimize based on data",
                "Build relationships, not just links",
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
              Let Us Handle Your Outreach
            </h3>
            <p className="text-[#8888A0] mb-6">
              Backlinky runs professional outreach campaigns for SaaS companies. We handle prospect 
              research, personalized email creation, follow-up sequences, and relationship management—
              delivering 20-30% response rates through proven systems refined across thousands of campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#pricing"
                className="inline-flex items-center justify-center px-6 py-3 text-white bg-[#4F7CFF] rounded-lg hover:bg-[#3D6AEE] transition-colors font-medium"
              >
                View Outreach Services
              </Link>
              <Link
                href="/free-tools/outreach-email-generator/"
                className="inline-flex items-center justify-center px-6 py-3 text-[#F0F0F5] border border-white/20 rounded-lg hover:bg-white/5 transition-colors"
              >
                Try Our Email Generator →
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
