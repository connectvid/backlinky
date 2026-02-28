import type { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  AlertTriangle,
  Shield,
  XCircle,
  CheckCircle,
  Search,
  FileText,
  DollarSign,
  Clock,
  Users,
  Globe,
  Link2,
  AlertOctagon,
  Flag
} from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "10 Link Building Agency Red Flags: Avoid Getting Scammed",
  description: "Learn the 10 warning signs of bad link building agencies. Protect your site from penalties and wasted budget with our comprehensive vetting guide.",
  openGraph: {
    title: "10 Link Building Agency Red Flags: Avoid Getting Scammed",
    description: "Protect your site: 10 warning signs of bad link building agencies and how to vet providers.",
  },
};

const tableOfContents = [
  { id: "introduction", title: "Introduction" },
  { id: "red-flags", title: "10 Red Flags to Watch For" },
  { id: "vetting", title: "How to Vet Agencies" },
  { id: "what-to-do", title: "What If You Spot Red Flags?" },
  { id: "green-flags", title: "Green Flags (Good Signs)" },
];

const redFlags = [
  {
    number: 1,
    title: "Guaranteed Rankings or DA/DR Scores",
    icon: TrendingUp,
    severity: "Critical",
    explanation: "No agency can guarantee specific rankings because Google controls the algorithm. Promises of 'guaranteed #1 rankings' or specific Domain Authority scores are lies used to close sales. Ethical agencies promise process, not outcomes.",
    whatToAsk: "What outcomes can you realistically expect in 3, 6, and 12 months?",
    goodAnswer: "A range of expected results based on similar clients, with clear caveats about variables outside their control."
  },
  {
    number: 2,
    title: "Links Under $30 Each",
    icon: DollarSign,
    severity: "Critical",
    explanation: "Quality link building requires research, outreach, content creation, and relationship management. These activities cost $100-300+ per link. Anyone selling links for $5-30 is using PBNs, automated spam, or link farms that will harm your site.",
    whatToAsk: "Walk me through your cost structure for a typical link. Where does my money go?",
    goodAnswer: "Detailed breakdown showing costs for prospecting, outreach, content, and placement. Should total $150+ per link."
  },
  {
    number: 3,
    title: "Owned Network of Websites",
    icon: Globe,
    severity: "Critical",
    explanation: "If an agency owns the sites they place links on, they're operating a PBN (Private Blog Network). This is explicitly against Google's guidelines and a fast track to manual penalties. Real agencies build relationships with independent publishers.",
    whatToAsk: "Do you own or operate any of the websites where you place links?",
    goodAnswer: "A clear 'no' with explanation of how they find and vet independent sites through outreach."
  },
  {
    number: 4,
    title: "No Sample Placements or Portfolio",
    icon: FileText,
    severity: "High",
    explanation: "Legitimate agencies are proud of their work and eager to show examples. Refusal to share recent placements suggests they're hiding low-quality sites, using black-hat methods, or don't actually have experience. Always verify samples are real and recent.",
    whatToAsk: "Can you show me 5-10 examples of links you've built in the past 3 months?",
    goodAnswer: "Immediate provision of live links with details about the campaign and client (with permission)."
  },
  {
    number: 5,
    title: "No Content Creation Process",
    icon: FileText,
    severity: "High",
    explanation: "Quality links require valuable content that publishers want to host. If an agency doesn't create content (or includes it without additional cost), they're likely buying links directly—which violates Google's guidelines and risks penalties.",
    whatToAsk: "Who writes the content for guest posts? Can I see samples?",
    goodAnswer: "Introduction to their content team, writing samples, and editorial process. Content should be original and high-quality."
  },
  {
    number: 6,
    title: "Guaranteed Exact-Match Anchor Text",
    icon: Link2,
    severity: "High",
    explanation: "Over-optimized anchor text (exact keyword matches) is a clear Penguin penalty trigger. Natural link profiles have varied anchors including branded terms, URLs, and generic text. Agencies promising specific anchors are using manipulative tactics.",
    whatToAsk: "How do you determine anchor text for links?",
    goodAnswer: "Explanation of natural anchor distribution with emphasis on contextual relevance over keyword optimization."
  },
  {
    number: 7,
    title: "Instant or Overnight Delivery",
    icon: Clock,
    severity: "High",
    explanation: "Real outreach takes time: prospecting (1-2 weeks), outreach (2-4 weeks), content creation (1-2 weeks), and placement (1-2 weeks). Promises of links in 24-48 hours indicate automated networks, not genuine outreach.",
    whatToAsk: "What's your typical timeline from order to live link?",
    goodAnswer: "2-4 weeks minimum with clear explanation of each phase and why it takes time."
  },
  {
    number: 8,
    title: "Bulk Packages (50+ Links)",
    icon: Users,
    severity: "Medium-High",
    explanation: "Natural link acquisition doesn't happen in bulk. Getting 50+ links in a month is unnatural and triggers algorithmic scrutiny. Bulk packages often indicate low-quality directory submissions, comment spam, or automated web 2.0 links.",
    whatToAsk: "What's the maximum number of links you'd recommend per month for my site?",
    goodAnswer: "Conservative estimate based on your site's age and existing link profile, typically 10-30 for established sites."
  },
  {
    number: 9,
    title: "No Reporting or Transparency",
    icon: Search,
    severity: "Medium-High",
    explanation: "You should receive detailed reports showing exactly where links are placed, with live URLs and metrics. Vague reporting ('we built 20 links this month') or refusal to share placement details suggests they're hiding poor quality or fake links.",
    whatToAsk: "What does your monthly report include? Can I see a sample?",
    goodAnswer: "Detailed report with live URLs, site metrics (DR, traffic), placement context, and traffic/ranking impact."
  },
  {
    number: 10,
    title: "No Link Replacement Guarantee",
    icon: Shield,
    severity: "Medium",
    explanation: "Even quality links occasionally get removed (site changes, content updates). Reputable agencies guarantee link replacements for 6-12 months. No replacement policy means you'll pay again if links disappear—which they will with low-quality providers.",
    whatToAsk: "What happens if a link is removed within 6 months?",
    goodAnswer: "Clear replacement policy at no additional cost, typically 6-12 months."
  }
];

const greenFlags = [
  "Detailed, transparent answers to vetting questions",
  "Willingness to provide references from current clients",
  "Clear content creation process with samples",
  "Realistic timelines (2-4 weeks minimum)",
  "Focus on relevance and traffic, not just DA/DR",
  "Questions about your business goals and audience",
  "Educational approach rather than pressure tactics",
  "Transparent pricing without hidden fees",
  "Case studies with verifiable before/after data",
  "Specialization in your industry or niche"
];

// Need to import this for the redFlags array
import { TrendingUp } from "lucide-react";

export default function LinkBuildingAgencyRedFlags() {
  return (
    <main className="min-h-screen bg-[#0A0A0F]">
      <Nav />
      
      <article className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm text-[#55556A] mb-6">
            <Link href="/best-link-building-agencies/" className="hover:text-[#4F7CFF]">Best Link Building Agencies</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-[#8888A0]">Agency Red Flags</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 text-sm text-red-400 mb-4">
              <AlertOctagon className="w-4 h-4" />
              <span>Warning Guide</span>
              <span className="text-[#55556A]">·</span>
              <span className="text-[#55556A]">Updated February 2025</span>
            </div>
            <h1 className="font-[family-name:var(--font-syne)] font-bold text-3xl md:text-4xl lg:text-5xl text-[#F0F0F5] mb-6 leading-tight">
              10 Link Building Agency Red Flags: Avoid Getting Scammed
            </h1>
            <p className="text-lg text-[#8888A0] leading-relaxed mb-6">
              The link building industry is filled with scams, low-quality providers, and black-hat 
              operators. Learn the warning signs that separate legitimate agencies from those that 
              will waste your budget and potentially destroy your search rankings.
            </p>
            
            {/* Featured Snippet */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/20 mb-6">
              <p className="text-[#8888A0] leading-relaxed">
                The most critical link building agency red flags include: <strong className="text-[#F0F0F5]">guaranteed rankings</strong> 
                (no agency controls Google), <strong className="text-[#F0F0F5]">links under $30</strong> (indicates PBNs or spam), 
                <strong className="text-[#F0F0F5]">owned networks</strong> (violates Google's guidelines), refusal to show samples, 
                no content creation, <strong className="text-[#F0F0F5]">overnight delivery promises</strong>, and bulk packages. 
                These warning signs indicate high risk of penalties and wasted budget.
              </p>
            </div>
          </header>

          {/* Warning Box */}
          <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20 mb-12">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-400 shrink-0 mt-1" />
              <div>
                <h3 className="font-[family-name:var(--font-syne)] font-bold text-xl text-red-400 mb-2">
                  Why This Matters
                </h3>
                <p className="text-[#8888A0] leading-relaxed">
                  A Google penalty from bad link building can take 6-12 months to recover from—if 
                  recovery is even possible. We've seen companies lose 70%+ of their organic traffic 
                  overnight from penalties. Spending time vetting agencies upfront is infinitely 
                  better than spending months (and more money) cleaning up the mess later.
                </p>
              </div>
            </div>
          </div>

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

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            
            {/* Introduction */}
            <section id="introduction" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Why Agency Vetting Is Critical
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-6">
                The link building industry operates with minimal regulation and lots of opacity. 
                Anyone can claim to be an expert, show fake portfolios, and sell harmful services 
                before disappearing. Meanwhile, the consequences of bad link building fall entirely 
                on you—Google penalizes your site, not the agency that built the bad links.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10 text-center">
                  <p className="text-3xl font-bold text-red-400 mb-1">$5,000+</p>
                  <p className="text-sm text-[#8888A0]">Average cost to recover from a penalty</p>
                </div>
                <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10 text-center">
                  <p className="text-3xl font-bold text-red-400 mb-1">6-12 mo</p>
                  <p className="text-sm text-[#8888A0]">Typical recovery timeline</p>
                </div>
                <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10 text-center">
                  <p className="text-3xl font-bold text-red-400 mb-1">70%+</p>
                  <p className="text-sm text-[#8888A0]">Traffic loss from manual actions</p>
                </div>
              </div>

              <p className="text-[#8888A0] leading-relaxed">
                The red flags below are based on analysis of 200+ link building providers, interviews 
                with penalized site owners, and Google's own guidelines. Spotting even one of these 
                should make you proceed with extreme caution—or walk away entirely.
              </p>
            </section>

            {/* Red Flags */}
            <section id="red-flags" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                10 Red Flags to Watch For
              </h2>
              
              <div className="space-y-6">
                {redFlags.map((flag) => (
                  <div key={flag.number} className="p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                        <span className="text-red-400 font-bold">{flag.number}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-semibold text-[#F0F0F5]">{flag.title}</h3>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            flag.severity === 'Critical' ? 'bg-red-500/20 text-red-400' :
                            flag.severity === 'High' ? 'bg-orange-500/20 text-orange-400' :
                            'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {flag.severity}
                          </span>
                        </div>
                        <p className="text-sm text-[#8888A0] leading-relaxed">{flag.explanation}</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-white/[0.06]">
                      <div>
                        <p className="text-xs text-[#55556A] mb-1">What to Ask:</p>
                        <p className="text-sm text-[#8888A0]">{flag.whatToAsk}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#55556A] mb-1">Good Answer:</p>
                        <p className="text-sm text-[#22C55E]">{flag.goodAnswer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Vetting */}
            <section id="vetting" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                How to Vet Link Building Agencies
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Beyond watching for red flags, actively vet agencies using this systematic approach:
              </p>

              <div className="space-y-6 mb-8">
                <div className="p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#4F7CFF]/20 flex items-center justify-center text-[#4F7CFF] font-bold">1</div>
                    <h3 className="font-semibold text-[#F0F0F5]">Check Their Own Backlinks</h3>
                  </div>
                  <p className="text-sm text-[#8888A0] leading-relaxed">
                    Use Ahrefs or SEMrush to analyze the agency's own backlink profile. If they 
                    can't build quality links to their own site, they can't do it for you. Look 
                    for: referring domain quality, link growth pattern, and anchor text distribution.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#4F7CFF]/20 flex items-center justify-center text-[#4F7CFF] font-bold">2</div>
                    <h3 className="font-semibold text-[#F0F0F5]">Request and Verify Sample Links</h3>
                  </div>
                  <p className="text-sm text-[#8888A0] leading-relaxed">
                    Ask for 5-10 recent examples. Then verify: Are the links still live? What's 
                    the site's organic traffic? Is the content quality acceptable? Is the link 
                    contextually relevant? Check using Ahrefs, SimilarWeb, and manual review.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#4F7CFF]/20 flex items-center justify-center text-[#4F7CFF] font-bold">3</div>
                    <h3 className="font-semibold text-[#F0F0F5]">Speak With References</h3>
                  </div>
                  <p className="text-sm text-[#8888A0] leading-relaxed">
                    Request 2-3 current client references. Ask about: communication quality, 
                    actual results vs promises, link retention rates, and whether they'd recommend 
                    the agency. Be wary of agencies that refuse to provide references.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#4F7CFF]/20 flex items-center justify-center text-[#4F7CFF] font-bold">4</div>
                    <h3 className="font-semibold text-[#F0F0F5]">Review Content Samples</h3>
                  </div>
                  <p className="text-sm text-[#8888A0] leading-relaxed">
                    If they create content (and they should), request writing samples. Quality 
                    should be publication-ready, not spun or generic. Poor content indicates 
                    poor link sources and suggests they cut corners.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#4F7CFF]/20 flex items-center justify-center text-[#4F7CFF] font-bold">5</div>
                    <h3 className="font-semibold text-[#F0F0F5]">Start With a Trial</h3>
                  </div>
                  <p className="text-sm text-[#8888A0] leading-relaxed">
                    Never commit to long-term contracts upfront. Start with 1-3 months to evaluate 
                    quality. Measure: link quality, communication, timeliness, and early ranking 
                    impact. Scale only after proven results.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-r from-[#4F7CFF]/10 to-transparent border border-[#4F7CFF]/20">
                <h3 className="font-semibold text-[#F0F0F5] mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#4F7CFF]" />
                  Agency Vetting Checklist
                </h3>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  {[
                    "Check their own backlink profile",
                    "Request 5-10 sample placements",
                    "Verify samples are live and quality",
                    "Ask for 2-3 client references",
                    "Review content creation samples",
                    "Understand their outreach process",
                    "Get clear timeline expectations",
                    "Review reporting format and frequency",
                    "Confirm link replacement policy",
                    "Start with trial period (1-3 months)"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4 rounded border-[#55556A]" readOnly />
                      <span className="text-[#8888A0]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* What to Do */}
            <section id="what-to-do" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                What If You Spot Red Flags?
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-6">
                If you identify red flags during your evaluation, here's how to proceed:
              </p>

              <div className="space-y-6 mb-8">
                <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/10">
                  <h3 className="font-semibold text-red-400 mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5" />
                    Critical Red Flags: Walk Away Immediately
                  </h3>
                  <p className="text-sm text-[#8888A0] leading-relaxed mb-3">
                    If you see guaranteed rankings, links under $30, owned PBN networks, or refusal 
                    to show samples—walk away. These aren't misunderstandings; they're intentional 
                    deception. No explanation makes these acceptable.
                  </p>
                  <p className="text-sm text-[#8888A0]">
                    <strong className="text-[#F0F0F5]">What to do:</strong> Politely end the conversation. 
                    Don't feel obligated to explain. Your site's safety is more important than their feelings.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-yellow-500/5 border border-yellow-500/10">
                  <h3 className="font-semibold text-yellow-500 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Medium Red Flags: Ask for Explanation
                  </h3>
                  <p className="text-sm text-[#8888A0] leading-relaxed mb-3">
                    For issues like vague reporting, no replacement policy, or slightly optimistic 
                    timelines—ask for clarification. Sometimes there's a reasonable explanation, 
                    but often these indicate sloppiness or corner-cutting.
                  </p>
                  <p className="text-sm text-[#8888A0]">
                    <strong className="text-[#F0F0F5]">What to do:</strong> Ask direct questions. If answers 
                    are evasive or unsatisfactory, add it to your concern list. Multiple yellow flags = one red flag.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-3 flex items-center gap-2">
                    <Flag className="w-5 h-5 text-[#4F7CFF]" />
                    Already Working With a Bad Agency?
                  </h3>
                  <p className="text-sm text-[#8888A0] leading-relaxed">
                    If you suspect your current agency is using harmful tactics: 1) Stop all work 
                    immediately, 2) Document all links they've built, 3) Audit the links using 
                    Ahrefs/Search Console, 4) Disavow any toxic links, 5) Consider professional 
                    penalty recovery help if traffic has dropped. Don't delay—penalties get harder 
                    to recover from over time.
                  </p>
                </div>
              </div>
            </section>

            {/* Green Flags */}
            <section id="green-flags" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Green Flags: Signs of a Good Agency
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-6">
                It's not all about avoiding bad agencies—here are positive signs that indicate 
                a quality provider:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {greenFlags.map((flag, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-[#22C55E]/5 border border-[#22C55E]/10">
                    <CheckCircle className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#8888A0]">{flag}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#4F7CFF]/20 to-[#4F7CFF]/5 border border-[#4F7CFF]/30 text-center">
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
              Want an Agency With Zero Red Flags?
            </h2>
            <p className="text-[#8888A0] mb-6 max-w-2xl mx-auto">
              Backlinky operates with full transparency: guaranteed DR 40+ links, real-time 
              dashboard, content included, and no long-term contracts. See for yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#audit"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white bg-[#4F7CFF] rounded-lg hover:bg-[#3D6AEE] transition-colors font-medium text-lg"
              >
                Get Free Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/best-link-building-agencies/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-[#F0F0F5] border border-white/20 rounded-lg hover:bg-white/5 transition-colors text-lg"
              >
                See All Agencies
              </Link>
            </div>
          </div>

          {/* Related Resources */}
          <div className="mt-16 pt-12 border-t border-white/[0.06]">
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-xl text-[#F0F0F5] mb-6">
              Related Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { href: "/best-link-building-agencies/how-to-choose-link-building-agency/", title: "How to Choose an Agency", desc: "Complete selection guide" },
                { href: "/link-building-guide/white-hat-vs-black-hat-link-building/", title: "White Hat vs Black Hat", desc: "Safe vs risky tactics" },
                { href: "/link-building-guide/toxic-backlinks/", title: "Toxic Backlinks", desc: "How to identify and remove" },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="group p-4 rounded-lg bg-[#111118] border border-white/[0.06] hover:border-[#4F7CFF]/30 transition-colors"
                >
                  <h4 className="font-medium text-[#F0F0F5] group-hover:text-[#4F7CFF] transition-colors mb-1">
                    {article.title}
                  </h4>
                  <p className="text-sm text-[#8888A0]">{article.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
