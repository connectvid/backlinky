import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle, Clock, AlertCircle, TrendingUp, DollarSign, Users, Target } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Link Building for New Websites: Complete Guide to Building Authority from Zero",
  description: "Learn how to build links for new websites. Get your first backlinks, understand the Google Sandbox, and follow a realistic 6-month roadmap to SEO success.",
  keywords: ["link building for new websites", "how to get backlinks for new site", "first backlinks new website", "new website link building strategy"],
  openGraph: {
    title: "Link Building for New Websites: Complete Guide to Building Authority from Zero",
    description: "Learn how to build links for new websites. Get your first backlinks, understand the Google Sandbox, and follow a realistic 6-month roadmap to SEO success.",
  },
};

const firstTenLinks = [
  { name: "Social Media Profiles", priority: "Essential", time: "Day 1" },
  { name: "Google Business Profile", priority: "Essential", time: "Day 1" },
  { name: "Industry Directories", priority: "High", time: "Week 1" },
  { name: "Local Citation Sites", priority: "High", time: "Week 1" },
  { name: "Partner/Supplier Sites", priority: "High", time: "Week 2" },
  { name: "Guest Post on Niche Blog", priority: "Medium", time: "Week 2-3" },
  { name: "HARO Response", priority: "Medium", time: "Week 3-4" },
  { name: "Resource Page Listing", priority: "Medium", time: "Week 4" },
  { name: "Podcast Interview", priority: "Medium", time: "Month 2" },
  { name: "Community Forum Bio", priority: "Low", time: "Month 2" },
];

const roadmapData = [
  { month: "Month 1", focus: "Foundation Building", links: "5-10", dr: "0-10", activities: "Social profiles, directories, GBP optimization" },
  { month: "Month 2", focus: "First Quality Links", links: "5-8", dr: "10-20", activities: "Guest posts, HARO responses, partner links" },
  { month: "Month 3", focus: "Niche Expansion", links: "8-12", dr: "20-30", activities: "Resource pages, podcast interviews, broken link building" },
  { month: "Month 4", focus: "Content-Driven Links", links: "10-15", dr: "30-40", activities: "Linkable assets, data studies, infographics" },
  { month: "Month 5", focus: "Authority Building", links: "12-15", dr: "40-50", activities: "Digital PR, expert roundups, collaborations" },
  { month: "Month 6", focus: "Sustainable Growth", links: "15-20", dr: "50-60", activities: "Scale what works, content updates, link reclamation" },
];

const faqs = [
  {
    question: "Can I rank a new website without backlinks?",
    answer: "It's extremely difficult. While Google considers hundreds of factors, backlinks remain the strongest ranking signal. A new website with zero backlinks competing against established sites with thousands of links will struggle to rank for competitive keywords, regardless of content quality."
  },
  {
    question: "How long does it take for new website backlinks to show effect?",
    answer: "Typically 2-6 weeks for Google to discover and index new backlinks, with ranking effects becoming noticeable within 1-3 months. However, during the Google Sandbox period (first 3-6 months), you may see minimal movement regardless of link building efforts."
  },
  {
    question: "Should I buy links for my new website?",
    answer: "Avoid buying links, especially for new sites. Google's algorithms are highly sensitive to unnatural link patterns on new domains. One bad link can trigger a manual action that sets you back months. Focus on earning links through quality content and genuine outreach."
  },
  {
    question: "How many backlinks do I need to escape the Sandbox?",
    answer: "There's no specific number. The Sandbox is more about time and trust signals than link count. However, 20-30 quality referring domains with diverse anchor text, gradual acquisition, and from relevant sites can help establish trust faster."
  },
  {
    question: "Are nofollow links worth it for new sites?",
    answer: "Yes, absolutely. Nofollow links from high-traffic sites (social media, Wikipedia, news sites) drive referral traffic and build brand awareness. Google's stance has evolved—they may use nofollow links as hints for ranking, and they definitely help with natural link profile diversity."
  },
  {
    question: "What's the biggest link building mistake new sites make?",
    answer: "Building links too fast. New websites acquiring 50+ links in their first month triggers algorithmic suspicion. Another major mistake is neglecting content quality—building links to thin, unhelpful content wastes effort. Focus on creating valuable content first, then earning links to it."
  },
];

export default function LinkBuildingForNewWebsites() {
  return (
    <main className="min-h-screen bg-[#0A0A0F]">
      <Nav />
      
      <article className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 text-sm text-[#4F7CFF] mb-4">
              <BookOpen className="w-4 h-4" />
              <Link href="/link-building-guide/" className="hover:underline">Link Building Guide</Link>
              <span className="text-[#55556A]">·</span>
              <span className="text-[#55556A]">Updated February 2025</span>
            </div>
            <h1 className="font-[family-name:var(--font-syne)] font-bold text-3xl md:text-4xl lg:text-5xl text-[#F0F0F5] mb-6 leading-tight">
              Link Building for New Websites: How to Build Authority from Zero
            </h1>
            
            {/* Featured Snippet - 40 words */}
            <div className="p-6 rounded-xl bg-[#4F7CFF]/5 border border-[#4F7CFF]/20 mb-6">
              <p className="text-[#F0F0F5] leading-relaxed">
                New websites should start link building immediately with foundational links (social profiles, directories), 
                then progress to guest posts and HARO responses. Expect the Google Sandbox effect for 3-6 months. 
                Aim for 5-10 quality links per month from relevant, DR 30+ sites.
              </p>
            </div>
            
            <p className="text-lg text-[#8888A0] leading-relaxed">
              Starting a new website is exciting, but building backlinks from scratch feels overwhelming. 
              Unlike established sites with existing authority, you're starting at DR 0 with zero trust signals. 
              This guide shows exactly how to get your first backlinks and build momentum—even when nobody knows your brand yet.
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            
            {/* H2: What Is the Google Sandbox */}
            <section className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                What Is the Google Sandbox and How Long Does It Last?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                The <strong className="text-[#F0F0F5]">Google Sandbox</strong> is an unofficial filter that limits new websites from ranking well 
                in search results, regardless of content quality or backlinks. It's Google's way of preventing spam— 
                they wait to see if your site provides consistent value before giving it full ranking power.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <Clock className="w-5 h-5 text-[#4F7CFF] mb-2" />
                  <h4 className="font-semibold text-[#F0F0F5] mb-1">Typical Duration</h4>
                  <p className="text-sm text-[#8888A0]">3-6 months for most niches</p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <AlertCircle className="w-5 h-5 text-amber-400 mb-2" />
                  <h4 className="font-semibold text-[#F0F0F5] mb-1">Competitive Niches</h4>
                  <p className="text-sm text-[#8888A0]">6-12 months (finance, health, legal)</p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <TrendingUp className="w-5 h-5 text-[#22C55E] mb-2" />
                  <h4 className="font-semibold text-[#F0F0F5] mb-1">Signs of Exit</h4>
                  <p className="text-sm text-[#8888A0]">Sudden ranking jumps, featured snippets</p>
                </div>
              </div>
              
              <p className="text-[#8888A0] leading-relaxed mb-4">
                During the Sandbox period, your link building efforts may show minimal ranking improvement, 
                but they're still valuable. You're building authority that will pay off once the Sandbox lifts. 
                Think of this phase as planting seeds—you won't see the harvest immediately.
              </p>
              
              <div className="p-4 rounded-lg bg-amber-500/5 border border-amber-500/10 my-6">
                <p className="text-[#F0F0F5] font-medium mb-2">Key Insight</p>
                <p className="text-[#8888A0] text-sm">
                  Don't judge your link building success by rankings in months 1-3. Focus on metrics you control: 
                  number of outreach emails sent, links acquired, and referring domain growth. Rankings will follow.
                </p>
              </div>
            </section>

            {/* H2: First 10 Backlinks */}
            <section className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                What Are the First 10 Backlinks Every New Site Should Get?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Not all first links are equal. Here's the exact sequence we recommend for new websites, 
                ordered by priority and ease of acquisition:
              </p>
              
              {/* First 10 Links Checklist Table */}
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 text-[#55556A] font-normal">Priority</th>
                      <th className="text-left py-3 text-[#55556A] font-normal">Link Source</th>
                      <th className="text-left py-3 text-[#55556A] font-normal">Timeline</th>
                    </tr>
                  </thead>
                  <tbody>
                    {firstTenLinks.map((link, index) => (
                      <tr key={index} className="border-b border-white/[0.06]">
                        <td className="py-3">
                          <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                            link.priority === "Essential" ? "bg-[#4F7CFF]/20 text-[#4F7CFF]" :
                            link.priority === "High" ? "bg-[#22C55E]/20 text-[#22C55E]" :
                            link.priority === "Medium" ? "bg-amber-500/20 text-amber-400" :
                            "bg-[#55556A]/20 text-[#8888A0]"
                          }`}>
                            {link.priority}
                          </span>
                        </td>
                        <td className="py-3 text-[#F0F0F5]">{link.name}</td>
                        <td className="py-3 text-[#8888A0]">{link.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <p className="text-[#8888A0] leading-relaxed">
                These first 10 links create a foundation of trust signals. They show Google that your 
                business is legitimate and established across the web. Don't skip the "foundation" links 
                in favor of chasing high-DR backlinks early on—natural link profiles include a mix of both.
              </p>
            </section>

            {/* H2: How to Get Free Backlinks */}
            <section className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                How to Get Free Backlinks for a New Website?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                You don't need a big budget to build links. Here are proven free strategies that work for new sites:
              </p>
              
              <div className="space-y-4 my-6">
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-2">1. HARO (Help A Reporter Out)</h4>
                  <p className="text-sm text-[#8888A0] mb-2">
                    Sign up for free at helpareporter.com. You'll receive 3 daily emails with journalist queries. 
                    Respond quickly (within hours) with concise, valuable insights. New sites can land links from 
                    DR 70+ news sites within their first month.
                  </p>
                  <p className="text-sm text-[#22C55E]">Success rate: ~5-10% · Link quality: Very High</p>
                </div>
                
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-2">2. Guest Posting (Free Opportunities)</h4>
                  <p className="text-sm text-[#8888A0] mb-2">
                    Search for "write for us" + your niche. Many blogs accept free guest posts from quality writers. 
                    Focus on sites with DR 30+ and real organic traffic. Provide genuinely helpful content, not promotional fluff.
                  </p>
                  <p className="text-sm text-[#22C55E]">Success rate: ~10-20% · Link quality: High</p>
                </div>
                
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-2">3. Resource Page Link Building</h4>
                  <p className="text-sm text-[#8888A0] mb-2">
                    Find resource pages in your niche ("useful resources" or "helpful links" pages). 
                    Create content that genuinely deserves to be listed, then reach out suggesting your addition.
                  </p>
                  <p className="text-sm text-[#22C55E]">Success rate: ~5-15% · Link quality: Medium-High</p>
                </div>
                
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-2">4. Link Reclamation</h4>
                  <p className="text-sm text-[#8888A0] mb-2">
                    Set up Google Alerts for your brand name and key personnel. When someone mentions you without 
                    linking, send a polite email requesting the link. Even new brands get mentioned occasionally.
                  </p>
                  <p className="text-sm text-[#22C55E]">Success rate: ~60-80% · Link quality: Varies</p>
                </div>
              </div>
              
              <p className="text-[#8888A0] leading-relaxed">
                Free link building requires time investment—expect to spend 5-10 hours per quality link acquired. 
                The trade-off is zero financial cost and complete control over anchor text and linking context. 
                <Link href="/link-building-guide/link-building-outreach-guide/" className="text-[#4F7CFF] hover:underline"> Learn advanced outreach techniques →</Link>
              </p>
            </section>

            {/* H2: When Should a New Website Start Building Links? */}
            <section className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                When Should a New Website Start Building Links?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                <strong className="text-[#F0F0F5]">Start immediately.</strong> There's no benefit to waiting. 
                In fact, the sooner you begin building links, the sooner you'll accumulate authority and escape the Google Sandbox.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="p-5 rounded-xl bg-[#22C55E]/5 border border-[#22C55E]/20">
                  <h4 className="font-semibold text-[#22C55E] mb-3">Start Now If You Have:</h4>
                  <ul className="space-y-2">
                    {[
                      "5+ pages of quality content",
                      "Clear value proposition",
                      "Professional design & branding",
                      "Working contact page"
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-[#8888A0]">
                        <CheckCircle className="w-4 h-4 text-[#22C55E] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-5 rounded-xl bg-amber-500/5 border border-amber-500/20">
                  <h4 className="font-semibold text-amber-400 mb-3">Wait 2-4 Weeks If You Have:</h4>
                  <ul className="space-y-2">
                    {[
                      "Thin or placeholder content",
                      "Coming soon pages",
                      "No clear target keywords",
                      "Incomplete site structure"
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-[#8888A0]">
                        <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <p className="text-[#8888A0] leading-relaxed">
                Some SEOs recommend waiting until you have substantial content (50+ pages). This is outdated advice. 
                Modern link building can focus on specific valuable pages—you don't need a massive site to attract links. 
                One incredible guide or free tool can earn links regardless of your overall site size.
              </p>
            </section>

            {/* H2: 6-Month Link Building Roadmap */}
            <section className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                What Is a Realistic 6-Month Link Building Roadmap?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Here's a month-by-month breakdown of what new websites can realistically achieve with consistent effort:
              </p>
              
              {/* 6-Month Roadmap Table */}
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 text-[#55556A] font-normal">Month</th>
                      <th className="text-left py-3 text-[#55556A] font-normal">Focus</th>
                      <th className="text-center py-3 text-[#55556A] font-normal">Links</th>
                      <th className="text-center py-3 text-[#55556A] font-normal">Target DR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {roadmapData.map((row, index) => (
                      <tr key={index} className="border-b border-white/[0.06]">
                        <td className="py-3 text-[#4F7CFF] font-medium">{row.month}</td>
                        <td className="py-3">
                          <div className="text-[#F0F0F5] font-medium">{row.focus}</div>
                          <div className="text-[#8888A0] text-xs">{row.activities}</div>
                        </td>
                        <td className="py-3 text-center text-[#F0F0F5]">{row.links}</td>
                        <td className="py-3 text-center text-[#22C55E]">{row.dr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06] my-6">
                <h4 className="font-semibold text-[#F0F0F5] mb-3">Expected 6-Month Totals:</h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[#4F7CFF]">55-80</div>
                    <div className="text-xs text-[#8888A0]">Referring Domains</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#22C55E]">50-60</div>
                    <div className="text-xs text-[#8888A0]">Domain Rating</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#F0F0F5]">5,000+</div>
                    <div className="text-xs text-[#8888A0]">Organic Traffic</div>
                  </div>
                </div>
              </div>
              
              <p className="text-[#8888A0] leading-relaxed">
                This roadmap assumes 5-10 hours of link building work per week. If you're investing less time, 
                adjust expectations proportionally. The key is consistency—10 links every month beats 50 links one month and none the next. 
                <Link href="/link-building-guide/how-long-does-link-building-take/" className="text-[#4F7CFF] hover:underline"> See detailed timeline expectations →</Link>
              </p>
            </section>

            {/* H2: Free vs Paid Links */}
            <section className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Free vs Paid Links for New Sites: Which First?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Every new website faces this decision. Here's our recommended approach based on budget and timeline:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <div className="flex items-center gap-2 mb-4">
                    <DollarSign className="w-5 h-5 text-[#22C55E]" />
                    <h4 className="font-semibold text-[#F0F0F5]">Zero Budget Approach</h4>
                  </div>
                  <ul className="space-y-2 mb-4">
                    <li className="text-sm text-[#8888A0]">• HARO responses (free)</li>
                    <li className="text-sm text-[#8888A0]">• Guest posting (free opportunities)</li>
                    <li className="text-sm text-[#8888A0]">• Resource page outreach</li>
                    <li className="text-sm text-[#8888A0]">• Social profile links</li>
                    <li className="text-sm text-[#8888A0]">• Partner/ supplier link exchanges</li>
                  </ul>
                  <p className="text-sm text-[#8888A0]">
                    <strong className="text-[#F0F0F5]">Timeline:</strong> 6-12 months to DR 40
                  </p>
                </div>
                
                <div className="p-5 rounded-xl bg-[#4F7CFF]/5 border border-[#4F7CFF]/20">
                  <div className="flex items-center gap-2 mb-4">
                    <DollarSign className="w-5 h-5 text-[#4F7CFF]" />
                    <h4 className="font-semibold text-[#F0F0F5]">With Budget ($500-1000/mo)</h4>
                  </div>
                  <ul className="space-y-2 mb-4">
                    <li className="text-sm text-[#8888A0]">• Premium guest posts (paid)</li>
                    <li className="text-sm text-[#8888A0]">• Niche edits on aged content</li>
                    <li className="text-sm text-[#8888A0]">• Directory submissions</li>
                    <li className="text-sm text-[#8888A0]">• Digital PR campaigns</li>
                    <li className="text-sm text-[#8888A0]">• Link building tools access</li>
                  </ul>
                  <p className="text-sm text-[#8888A0]">
                    <strong className="text-[#F0F0F5]">Timeline:</strong> 3-6 months to DR 40
                  </p>
                </div>
              </div>
              
              <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/10 my-6">
                <p className="text-[#F0F0F5] font-medium mb-2">⚠️ Warning for New Sites</p>
                <p className="text-[#8888A0] text-sm">
                  Never buy links in bulk packages ("500 backlinks for $50"). These are toxic, automated links 
                  that will trigger penalties. If investing in paid links, choose individual, vetted opportunities 
                  from relevant sites with real traffic.
                </p>
              </div>
              
              <p className="text-[#8888A0] leading-relaxed">
                For most new websites, we recommend starting with free methods to learn the process, 
                then gradually introducing paid tactics once you understand quality signals. 
                SaaS companies looking for faster growth should consider 
                <Link href="/link-building-for-niche/link-building-for-saas/" className="text-[#4F7CFF] hover:underline"> specialized SaaS link building strategies →</Link>
              </p>
            </section>

            {/* H2: When to Hire an Agency */}
            <section className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                When Should You Hire a Link Building Agency?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                DIY link building is time-intensive. Here's when hiring an agency makes sense for new websites:
              </p>
              
              <div className="space-y-4 my-6">
                <div className="flex gap-4 p-4 rounded-lg bg-[#22C55E]/5 border border-[#22C55E]/20">
                  <CheckCircle className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[#F0F0F5] mb-1">✓ You Have Budget but No Time</h4>
                    <p className="text-sm text-[#8888A0]">
                      If your time is worth $100+ per hour, paying an agency $2-5k/month for 10-15 links 
                      is economically rational compared to 50+ hours of DIY work.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-4 rounded-lg bg-[#22C55E]/5 border border-[#22C55E]/20">
                  <CheckCircle className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[#F0F0F5] mb-1">✓ You Need Results Fast</h4>
                    <p className="text-sm text-[#8888A0]">
                      Agencies have established relationships and processes. What takes you 3 months 
                      might take them 3 weeks.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-4 rounded-lg bg-[#22C55E]/5 border border-[#22C55E]/20">
                  <CheckCircle className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[#F0F0F5] mb-1">✓ You Want to Avoid Mistakes</h4>
                    <p className="text-sm text-[#8888A0]">
                      New websites are vulnerable to penalties. An experienced agency knows what to avoid 
                      and how to build links safely.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-4 rounded-lg bg-amber-500/5 border border-amber-500/20">
                  <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[#F0F0F5] mb-1">⚠️ Wait If You're Pre-Revenue</h4>
                    <p className="text-sm text-[#8888A0]">
                      Don't spend $3,000/month on links if you haven't validated your business model yet. 
                      Start with free methods and invest in agencies once you have revenue.
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-[#8888A0] leading-relaxed">
                If you decide to hire, look for agencies with transparent processes, real case studies, 
                and clear reporting. Avoid anyone promising "guaranteed rankings" or suspiciously cheap links.
              </p>
            </section>

            {/* H2: How Many Links Does a New Website Need? */}
            <section className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                How Many Links Does a New Website Need?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                There's no magic number, but here are realistic targets based on your goals:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="p-5 rounded-xl bg-[#111118] border border-white/[0.06] text-center">
                  <Target className="w-8 h-8 text-[#8888A0] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-[#F0F0F5] mb-1">20-30</div>
                  <div className="text-sm text-[#8888A0] mb-2">Referring Domains</div>
                  <p className="text-xs text-[#55556A]">To escape the Sandbox and see initial rankings</p>
                </div>
                <div className="p-5 rounded-xl bg-[#4F7CFF]/5 border border-[#4F7CFF]/20 text-center">
                  <Target className="w-8 h-8 text-[#4F7CFF] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-[#F0F0F5] mb-1">50-100</div>
                  <div className="text-sm text-[#8888A0] mb-2">Referring Domains</div>
                  <p className="text-xs text-[#55556A]">To compete for medium-competition keywords</p>
                </div>
                <div className="p-5 rounded-xl bg-[#22C55E]/5 border border-[#22C55E]/20 text-center">
                  <Target className="w-8 h-8 text-[#22C55E] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-[#F0F0F5] mb-1">200+</div>
                  <div className="text-sm text-[#8888A0] mb-2">Referring Domains</div>
                  <p className="text-xs text-[#55556A]">To compete for high-competition keywords</p>
                </div>
              </div>
              
              <p className="text-[#8888A0] leading-relaxed mb-4">
                <strong className="text-[#F0F0F5]">Important:</strong> These numbers refer to referring domains (unique websites linking to you), 
                not total backlinks. One site linking to you 100 times is less valuable than 100 different sites linking once.
              </p>
              
              <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                <p className="text-[#F0F0F5] font-medium mb-2">Quality Over Quantity</p>
                <p className="text-[#8888A0] text-sm">
                  A new website with 20 links from DR 50+ relevant sites will outperform one with 200 links from 
                  DR 10-20 irrelevant sites. Focus on acquiring links that your competitors would want but can't easily get.
                </p>
              </div>
            </section>

            {/* Realistic Expectations Section */}
            <section className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Realistic Expectations for New Website Link Building
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Let's set honest expectations. Link building for new websites is harder than for established sites. 
                Here's what to expect:
              </p>
              
              <div className="space-y-4 mb-6">
                {[
                  { label: "Response Rates", value: "Expect 5-15% response rates on cold outreach for new sites (vs 20-30% for established brands)" },
                  { label: "Link Acquisition Speed", value: "First 3 months: 3-5 quality links per month with consistent effort" },
                  { label: "Ranking Impact", value: "Minimal ranking changes in months 1-3, noticeable improvements in months 4-6" },
                  { label: "DR Growth", value: "Realistic DR growth: 0 → 30 in 3 months, 30 → 50 in 6 months with consistent link building" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-3 p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                    <Users className="w-5 h-5 text-[#4F7CFF] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#F0F0F5] font-medium">{item.label}:</span>
                      <span className="text-[#8888A0]"> {item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-[#8888A0] leading-relaxed">
                The good news? Every link you build compounds. Your 50th link will be easier to acquire than your 5th 
                because you'll have established authority and credibility. Stay consistent, focus on quality, 
                and trust the process.
              </p>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                Frequently Asked Questions About New Website Link Building
              </h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="p-5 rounded-xl bg-[#111118] border border-white/[0.06]">
                    <h3 className="font-semibold text-[#F0F0F5] mb-3">{faq.question}</h3>
                    <p className="text-[#8888A0] text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <section className="mb-16">
              <div className="p-8 rounded-2xl bg-gradient-to-r from-[#4F7CFF]/20 to-[#4F7CFF]/5 border border-[#4F7CFF]/30 text-center">
                <h3 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-3">
                  Ready to Accelerate Your New Site's Growth?
                </h3>
                <p className="text-[#8888A0] mb-6 max-w-2xl mx-auto">
                  Building links for a new website takes time and expertise. At Backlinky, we specialize in 
                  helping new SaaS companies build authority fast. Get your first 20+ quality backlinks 
                  without the learning curve.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/#pricing"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white bg-[#4F7CFF] rounded-lg hover:bg-[#3D6AEE] transition-colors font-medium"
                  >
                    View Link Building Packages
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/#audit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-[#F0F0F5] border border-white/20 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    Get Free Backlink Audit
                  </Link>
                </div>
              </div>
            </section>

            {/* Internal Links */}
            <section className="mb-8">
              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-lg text-[#F0F0F5] mb-4">
                Related Resources
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                <Link href="/link-building-guide/" className="p-3 rounded-lg bg-[#111118] border border-white/[0.06] hover:border-[#4F7CFF]/30 transition-colors text-[#8888A0] hover:text-[#4F7CFF]">
                  ← Complete Link Building Guide
                </Link>
                <Link href="/link-building-guide/how-long-does-link-building-take/" className="p-3 rounded-lg bg-[#111118] border border-white/[0.06] hover:border-[#4F7CFF]/30 transition-colors text-[#8888A0] hover:text-[#4F7CFF]">
                  How Long Does Link Building Take? →
                </Link>
                <Link href="/link-building-for-niche/link-building-for-saas/" className="p-3 rounded-lg bg-[#111118] border border-white/[0.06] hover:border-[#4F7CFF]/30 transition-colors text-[#8888A0] hover:text-[#4F7CFF]">
                  Link Building for SaaS Companies →
                </Link>
                <Link href="/" className="p-3 rounded-lg bg-[#111118] border border-white/[0.06] hover:border-[#4F7CFF]/30 transition-colors text-[#8888A0] hover:text-[#4F7CFF]">
                  Backlinky Homepage →
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
