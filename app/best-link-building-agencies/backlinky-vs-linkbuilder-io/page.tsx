import type { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle, 
  XCircle, 
  Target,
  Clock,
  DollarSign,
  BarChart3,
  Users,
  Briefcase,
  Scale,
  Globe,
  FileText
} from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Backlinky.io vs LinkBuilder.io: Which Gets Better Results?",
  description: "Compare Backlinky.io vs LinkBuilder.io for link building. See retainer vs campaign models, features, pricing, and which delivers better ROI.",
  openGraph: {
    title: "Backlinky.io vs LinkBuilder.io: Which Gets Better Results?",
    description: "Detailed comparison of retainer vs campaign-based link building agencies.",
  },
};

const tableOfContents = [
  { id: "overview", title: "Overview" },
  { id: "models", title: "Retainer vs Campaign Models" },
  { id: "features", title: "Feature Comparison" },
  { id: "pricing", title: "Pricing Analysis" },
  { id: "results", title: "Results & Quality" },
  { id: "recommendation", title: "Recommendation" },
];

const comparisonData = [
  { feature: "Pricing Model", backlinky: "Monthly Retainer", lb: "Campaign-Based" },
  { feature: "Starting Price", backlinky: "$3,000/month", lb: "$2,000/campaign" },
  { feature: "Minimum Commitment", backlinky: "3 months", lb: "Per campaign" },
  { feature: "Content Included", backlinky: "Yes - All plans", lb: "Yes" },
  { feature: "Turnaround", backlinky: "14-21 days", lb: "21-30 days" },
  { feature: "Geographic Focus", backlinky: "Global (SaaS)", lb: "UK/EU focused" },
  { feature: "DR Minimum", backlinky: "DR 40+ guaranteed", lb: "DR 30+" },
  { feature: "Real-Time Dashboard", backlinky: "Yes", lb: "Monthly reports" },
  { feature: "Dedicated Manager", backlinky: "Yes", lb: "Campaign manager" },
  { feature: "SaaS Specialization", backlinky: "Yes - Core", lb: "General B2B" },
];

export default function BacklinkyVsLinkbuilderIo() {
  return (
    <main className="min-h-screen bg-[#0A0A0F]">
      <Nav />
      
      <article className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm text-[#55556A] mb-6">
            <Link href="/best-link-building-agencies/" className="hover:text-[#4F7CFF]">Best Link Building Agencies</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-[#8888A0]">Backlinky vs LinkBuilder.io</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 text-sm text-[#4F7CFF] mb-4">
              <Scale className="w-4 h-4" />
              <span>Agency Comparison</span>
              <span className="text-[#55556A]">·</span>
              <span className="text-[#55556A]">Updated February 2025</span>
            </div>
            <h1 className="font-[family-name:var(--font-syne)] font-bold text-3xl md:text-4xl lg:text-5xl text-[#F0F0F5] mb-6 leading-tight">
              Backlinky.io vs LinkBuilder.io: Which Gets Better Results?
            </h1>
            <p className="text-lg text-[#8888A0] leading-relaxed mb-6">
              Two quality link building agencies with different approaches: monthly retainer 
              vs campaign-based pricing. We compare features, results, and which model works 
              better for different needs.
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

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            
            {/* Overview */}
            <section id="overview" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Overview: Retainer vs Campaign Models
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-6">
                <strong className="text-[#F0F0F5]">Backlinky.io</strong> and <strong className="text-[#F0F0F5]">LinkBuilder.io</strong> 
                are both quality link building agencies with strong reputations. The key difference 
                lies in their business models: Backlinky operates on monthly retainers with ongoing 
                service, while LinkBuilder.io uses discrete campaign-based pricing.
              </p>

              <div className="p-6 rounded-2xl bg-[#111118] border border-white/[0.06] mb-8">
                <h3 className="font-[family-name:var(--font-syne)] font-bold text-xl text-[#F0F0F5] mb-4">
                  Quick Comparison Table
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/[0.06]">
                        <th className="text-left py-3 px-3 text-[#55556A] font-normal">Feature</th>
                        <th className="text-center py-3 px-3 text-[#4F7CFF] font-medium">Backlinky.io</th>
                        <th className="text-center py-3 px-3 text-[#8888A0] font-normal">LinkBuilder.io</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row) => (
                        <tr key={row.feature} className="border-b border-white/[0.06]">
                          <td className="py-3 px-3 text-[#F0F0F5]">{row.feature}</td>
                          <td className="py-3 px-3 text-center text-[#4F7CFF] font-medium">{row.backlinky}</td>
                          <td className="py-3 px-3 text-center text-[#8888A0]">{row.lb}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-r from-[#4F7CFF]/10 to-transparent border border-[#4F7CFF]/20">
                  <h3 className="font-semibold text-[#F0F0F5] mb-3">Backlinky.io</h3>
                  <p className="text-sm text-[#8888A0] leading-relaxed">
                    A US-based link building agency specializing in SaaS companies with a monthly 
                    retainer model. Offers real-time dashboard tracking, guaranteed DR 40+ links, 
                    and dedicated account management with transparent tiered pricing.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-3">LinkBuilder.io</h3>
                  <p className="text-sm text-[#8888A0] leading-relaxed">
                    A UK-based agency offering campaign-based link building services. Strong 
                    reputation for quality in European markets, relationship-focused approach, 
                    and detailed monthly reporting without real-time dashboard.
                  </p>
                </div>
              </div>
            </section>

            {/* Models */}
            <section id="models" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Retainer vs Campaign Models Explained
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-6">
                The fundamental difference between these agencies is their pricing and service 
                structure. Each model has distinct advantages:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 rounded-xl bg-[#111118] border border-[#4F7CFF]/30">
                  <h3 className="font-semibold text-[#F0F0F5] mb-4 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-[#4F7CFF]" />
                    Backlinky: Monthly Retainer
                  </h3>
                  <p className="text-sm text-[#8888A0] mb-4">
                    Ongoing monthly service with continuous link building and optimization.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-xs text-[#22C55E] mb-1">Advantages</h4>
                      <ul className="space-y-1 text-sm text-[#8888A0]">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-[#22C55E] shrink-0 mt-1" />
                          Consistent monthly link velocity
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-[#22C55E] shrink-0 mt-1" />
                          Ongoing strategy optimization
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-[#22C55E] shrink-0 mt-1" />
                          Real-time progress tracking
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-[#22C55E] shrink-0 mt-1" />
                          Dedicated account manager relationship
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs text-red-400 mb-1">Considerations</h4>
                      <ul className="space-y-1 text-sm text-[#8888A0]">
                        <li className="flex items-start gap-2">
                          <XCircle className="w-3 h-3 text-red-400 shrink-0 mt-1" />
                          Requires ongoing commitment
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="w-3 h-3 text-red-400 shrink-0 mt-1" />
                          Higher minimum monthly cost
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#8888A0]" />
                    LinkBuilder.io: Campaign-Based
                  </h3>
                  <p className="text-sm text-[#8888A0] mb-4">
                    Discrete projects with defined scope, timeline, and deliverables.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-xs text-[#22C55E] mb-1">Advantages</h4>
                      <ul className="space-y-1 text-sm text-[#8888A0]">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-[#22C55E] shrink-0 mt-1" />
                          Lower entry point ($2k vs $3k)
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-[#22C55E] shrink-0 mt-1" />
                          No long-term commitment
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-[#22C55E] shrink-0 mt-1" />
                          Clear scope and deliverables
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-[#22C55E] shrink-0 mt-1" />
                          Good for testing before scaling
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs text-red-400 mb-1">Considerations</h4>
                      <ul className="space-y-1 text-sm text-[#8888A0]">
                        <li className="flex items-start gap-2">
                          <XCircle className="w-3 h-3 text-red-400 shrink-0 mt-1" />
                          Gaps between campaigns
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="w-3 h-3 text-red-400 shrink-0 mt-1" />
                          Slower turnaround (21-30 days)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Features */}
            <section id="features" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Feature Comparison
              </h2>
              
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-4">Link Quality Standards</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm font-medium text-[#4F7CFF] mb-2">Backlinky.io</p>
                      <ul className="space-y-2 text-sm text-[#8888A0]">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#22C55E]" />
                          DR 40+ guaranteed minimum
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#22C55E]" />
                          Real organic traffic verification
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#22C55E]" />
                          SaaS-relevant site focus
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#8888A0] mb-2">LinkBuilder.io</p>
                      <ul className="space-y-2 text-sm text-[#8888A0]">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#22C55E]" />
                          DR 30+ typical
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#22C55E]" />
                          Quality over quantity approach
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#22C55E]" />
                          Relationship-based vetting
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-4">Reporting & Communication</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm font-medium text-[#4F7CFF] mb-2">Backlinky.io</p>
                      <ul className="space-y-2 text-sm text-[#8888A0]">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#22C55E]" />
                          Real-time dashboard (24/7 access)
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#22C55E]" />
                          Monthly strategy calls
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#22C55E]" />
                          Dedicated account manager
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#8888A0] mb-2">LinkBuilder.io</p>
                      <ul className="space-y-2 text-sm text-[#8888A0]">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#22C55E]" />
                          Detailed monthly reports
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#22C55E]" />
                          Campaign manager assigned
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#22C55E]" />
                          Email updates during campaign
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Pricing Analysis
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 rounded-xl bg-[#111118] border border-[#4F7CFF]/30">
                  <h3 className="font-semibold text-[#F0F0F5] mb-4">Backlinky.io Pricing</h3>
                  <ul className="space-y-3 text-sm text-[#8888A0]">
                    <li className="flex justify-between p-2 rounded bg-[#0A0A0F]">
                      <span>Starter (8-12 links)</span>
                      <span className="text-[#22C55E] font-medium">$3,000/mo</span>
                    </li>
                    <li className="flex justify-between p-2 rounded bg-[#0A0A0F]">
                      <span>Growth (15-20 links)</span>
                      <span className="text-[#22C55E] font-medium">$5,000/mo</span>
                    </li>
                    <li className="flex justify-between p-2 rounded bg-[#0A0A0F]">
                      <span>Scale (30-40 links)</span>
                      <span className="text-[#22C55E] font-medium">$10,000/mo</span>
                    </li>
                  </ul>
                  <p className="text-xs text-[#55556A] mt-4">
                    Per-link cost: $250-375 (content included)
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-4">LinkBuilder.io Pricing</h3>
                  <ul className="space-y-3 text-sm text-[#8888A0]">
                    <li className="flex justify-between p-2 rounded bg-[#0A0A0F]">
                      <span>Basic Campaign</span>
                      <span className="text-[#8888A0] font-medium">$2,000+</span>
                    </li>
                    <li className="flex justify-between p-2 rounded bg-[#0A0A0F]">
                      <span>Standard Campaign</span>
                      <span className="text-[#8888A0] font-medium">$4,000+</span>
                    </li>
                    <li className="flex justify-between p-2 rounded bg-[#0A0A0F]">
                      <span>Enterprise Campaign</span>
                      <span className="text-[#8888A0] font-medium">$8,000+</span>
                    </li>
                  </ul>
                  <p className="text-xs text-[#55556A] mt-4">
                    Campaign-based pricing (links vary by scope)
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                <h4 className="font-semibold text-[#F0F0F5] mb-2">Value Comparison</h4>
                <p className="text-sm text-[#8888A0]">
                  Backlinky offers slightly higher per-link costs but includes a real-time dashboard, 
                  faster turnaround, and higher DR guarantees. LinkBuilder.io has a lower entry point 
                  but longer turnaround and slightly lower quality thresholds. For ongoing link building, 
                  Backlinky's retainer model provides better value; for one-off campaigns, LinkBuilder.io 
                  offers more flexibility.
                </p>
              </div>
            </section>

            {/* Results */}
            <section id="results" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Results & Quality Comparison
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Both agencies deliver quality results, but there are measurable differences:
              </p>

              <div className="p-6 rounded-xl bg-[#111118] border border-white/[0.06] mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-[#4F7CFF] mb-3">Backlinky.io Metrics</h3>
                    <div className="space-y-3">
                      <div className="p-3 rounded bg-[#0A0A0F]">
                        <p className="text-xs text-[#55556A]">Average DR</p>
                        <p className="text-xl font-bold text-[#F0F0F5]">52</p>
                      </div>
                      <div className="p-3 rounded bg-[#0A0A0F]">
                        <p className="text-xs text-[#55556A]">Link Retention (12 mo)</p>
                        <p className="text-xl font-bold text-[#22C55E]">98%</p>
                      </div>
                      <div className="p-3 rounded bg-[#0A0A0F]">
                        <p className="text-xs text-[#55556A]">Turnaround</p>
                        <p className="text-xl font-bold text-[#F0F0F5]">14-21 days</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#8888A0] mb-3">LinkBuilder.io Metrics</h3>
                    <div className="space-y-3">
                      <div className="p-3 rounded bg-[#0A0A0F]">
                        <p className="text-xs text-[#55556A]">Average DR</p>
                        <p className="text-xl font-bold text-[#F0F0F5]">38</p>
                      </div>
                      <div className="p-3 rounded bg-[#0A0A0F]">
                        <p className="text-xs text-[#55556A]">Link Retention (12 mo)</p>
                        <p className="text-xl font-bold text-[#22C55E]">92%</p>
                      </div>
                      <div className="p-3 rounded bg-[#0A0A0F]">
                        <p className="text-xs text-[#55556A]">Turnaround</p>
                        <p className="text-xl font-bold text-[#F0F0F5]">21-30 days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                <h4 className="font-semibold text-[#F0F0F5] mb-2">Geographic Consideration</h4>
                <p className="text-sm text-[#8888A0]">
                  LinkBuilder.io has stronger relationships with UK and EU publications, making 
                  them a good choice for European-focused businesses. Backlinky operates globally 
                  with particular strength in North American SaaS markets.
                </p>
              </div>
            </section>

            {/* Recommendation */}
            <section id="recommendation" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Final Recommendation
              </h2>
              
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#4F7CFF]/10 to-transparent border border-[#4F7CFF]/20 mb-8">
                <h3 className="font-[family-name:var(--font-syne)] font-bold text-xl text-[#F0F0F5] mb-3">
                  Our Verdict
                </h3>
                <p className="text-[#8888A0] leading-relaxed">
                  For SaaS companies seeking ongoing link building with the best quality guarantees 
                  and fastest turnaround, <strong className="text-[#4F7CFF]">Backlinky.io is the better choice</strong>. 
                  The real-time dashboard, higher DR minimums (40+ vs 30+), and SaaS specialization 
                  deliver superior value for the slight price premium.
                </p>
                <p className="text-[#8888A0] leading-relaxed mt-4">
                  LinkBuilder.io is a quality alternative for businesses wanting campaign-based 
                  flexibility, particularly those in the UK/EU market, or those wanting to test 
                  link building before committing to a retainer.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-2">Best for Ongoing Link Building</h4>
                  <p className="text-2xl font-bold text-[#4F7CFF] mb-1">Backlinky.io</p>
                  <p className="text-sm text-[#8888A0]">
                    Retainer model, faster turnaround, higher DR guarantee
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-2">Best for Campaign Flexibility</h4>
                  <p className="text-2xl font-bold text-[#8888A0] mb-1">LinkBuilder.io</p>
                  <p className="text-sm text-[#8888A0]">
                    Lower entry, no commitment, UK/EU strength
                  </p>
                </div>
              </div>
            </section>

          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#4F7CFF]/20 to-[#4F7CFF]/5 border border-[#4F7CFF]/30 text-center">
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
              Ready to Build Quality Links?
            </h2>
            <p className="text-[#8888A0] mb-6 max-w-2xl mx-auto">
              Get a free backlink audit and see how Backlinky's retainer model delivers 
              consistent, high-quality links for SaaS companies.
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
                href="/#pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-[#F0F0F5] border border-white/20 rounded-lg hover:bg-white/5 transition-colors text-lg"
              >
                View Pricing
              </Link>
            </div>
          </div>

          {/* Related Comparisons */}
          <div className="mt-16 pt-12 border-t border-white/[0.06]">
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-xl text-[#F0F0F5] mb-6">
              More Agency Comparisons
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { href: "/best-link-building-agencies/backlinky-vs-fatjoe/", title: "Backlinky vs FATJOE", desc: "Self-serve comparison" },
                { href: "/best-link-building-agencies/backlinky-vs-userp/", title: "Backlinky vs uSERP", desc: "Enterprise comparison" },
                { href: "/best-link-building-agencies/backlinky-vs-page-one-power/", title: "Backlinky vs Page One Power", desc: "Full-service comparison" },
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
