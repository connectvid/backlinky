import type { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle, 
  XCircle, 
  Building2,
  Target,
  Clock,
  DollarSign,
  BarChart3,
  Users,
  Globe,
  Scale,
  Code
} from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Backlinky.io vs Page One Power: Full Service Comparison",
  description: "Compare Backlinky.io vs Page One Power for link building. See which agency is better for SaaS vs enterprise, pricing, and service differences.",
  openGraph: {
    title: "Backlinky.io vs Page One Power: Full Service Comparison",
    description: "SaaS-focused vs full-service SEO agency comparison for link building.",
  },
};

const tableOfContents = [
  { id: "overview", title: "Overview" },
  { id: "pricing", title: "Pricing Comparison" },
  { id: "services", title: "Services Comparison" },
  { id: "focus", title: "SaaS vs Enterprise Focus" },
  { id: "use-cases", title: "Best Use Cases" },
  { id: "recommendation", title: "Recommendation" },
];

const comparisonData = [
  { feature: "Starting Price", backlinky: "$3,000/month", pop: "$5,000/month" },
  { feature: "Pricing Model", backlinky: "Tiered Retainers", pop: "Custom Enterprise" },
  { feature: "Primary Focus", backlinky: "SaaS Link Building", pop: "Full-Service SEO" },
  { feature: "Technical SEO", backlinky: "Not included", pop: "Core offering" },
  { feature: "Content Strategy", backlinky: "Link-focused", pop: "Comprehensive" },
  { feature: "Link Building", backlinky: "Core service", pop: "Part of SEO" },
  { feature: "Min Contract", backlinky: "3 months", pop: "6-12 months" },
  { feature: "Turnaround", backlinky: "14-21 days", pop: "30-45 days" },
  { feature: "DR Guarantee", backlinky: "DR 40+", pop: "DR 40+" },
  { feature: "Ideal Client", backlinky: "SaaS, B2B tech", pop: "Large enterprises" },
];

export default function BacklinkyVsPageOnePower() {
  return (
    <main className="min-h-screen bg-[#0A0A0F]">
      <Nav />
      
      <article className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm text-[#55556A] mb-6">
            <Link href="/best-link-building-agencies/" className="hover:text-[#4F7CFF]">Best Link Building Agencies</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-[#8888A0]">Backlinky vs Page One Power</span>
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
              Backlinky.io vs Page One Power: Full Service Comparison
            </h1>
            <p className="text-lg text-[#8888A0] leading-relaxed mb-6">
              Compare a SaaS-focused link building specialist against a full-service SEO agency. 
              Understand the key differences in pricing, services, and which is better suited 
              for your specific needs.
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
                Overview: Specialized vs Full-Service
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-6">
                <strong className="text-[#F0F0F5]">Backlinky.io</strong> and <strong className="text-[#F0F0F5]">Page One Power</strong> 
                represent two different agency models. Backlinky is a specialized link building 
                service focused exclusively on SaaS companies. Page One Power is a comprehensive 
                SEO agency offering link building as part of broader search optimization services.
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
                        <th className="text-center py-3 px-3 text-[#8888A0] font-normal">Page One Power</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row) => (
                        <tr key={row.feature} className="border-b border-white/[0.06]">
                          <td className="py-3 px-3 text-[#F0F0F5]">{row.feature}</td>
                          <td className="py-3 px-3 text-center text-[#4F7CFF] font-medium">{row.backlinky}</td>
                          <td className="py-3 px-3 text-center text-[#8888A0]">{row.pop}</td>
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
                    A specialized link building agency built exclusively for SaaS companies. 
                    Focuses solely on acquiring high-quality backlinks with transparent pricing 
                    and fast turnaround. No technical SEO or broader services—just expert link 
                    building for B2B tech.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-3">Page One Power</h3>
                  <p className="text-sm text-[#8888A0] leading-relaxed">
                    A full-service SEO agency offering comprehensive search optimization including 
                    technical SEO, content strategy, and link building. Better suited for large 
                    enterprises needing holistic SEO support rather than specialized link building.
                  </p>
                </div>
              </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Pricing Comparison
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 rounded-xl bg-[#111118] border border-[#4F7CFF]/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#4F7CFF]/20 flex items-center justify-center">
                      <span className="text-[#4F7CFF] font-bold">B</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#F0F0F5]">Backlinky.io</h3>
                      <span className="text-sm text-[#4F7CFF]">Transparent Tiers</span>
                    </div>
                  </div>
                  <ul className="space-y-3 text-sm text-[#8888A0]">
                    <li className="flex items-center justify-between p-2 rounded bg-[#0A0A0F]">
                      <span><strong className="text-[#F0F0F5]">Starter</strong></span>
                      <span className="text-[#22C55E] font-medium">$3,000/mo</span>
                    </li>
                    <li className="flex items-center justify-between p-2 rounded bg-[#0A0A0F]">
                      <span><strong className="text-[#F0F0F5]">Growth</strong></span>
                      <span className="text-[#22C55E] font-medium">$5,000/mo</span>
                    </li>
                    <li className="flex items-center justify-between p-2 rounded bg-[#0A0A0F]">
                      <span><strong className="text-[#F0F0F5]">Scale</strong></span>
                      <span className="text-[#22C55E] font-medium">$10,000/mo</span>
                    </li>
                    <li className="flex items-center justify-between p-2 rounded bg-[#0A0A0F]">
                      <span><strong className="text-[#F0F0F5]">Enterprise</strong></span>
                      <span className="text-[#22C55E] font-medium">$15,000+/mo</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-white/[0.06]">
                    <p className="text-sm text-[#8888A0]">
                      <span className="text-[#22C55E]">✓</span> Content included &nbsp;|&nbsp; 
                      <span className="text-[#22C55E]">✓</span> 3-month minimum
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#55556A]/20 flex items-center justify-center">
                      <span className="text-[#8888A0] font-bold">P</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#F0F0F5]">Page One Power</h3>
                      <span className="text-sm text-[#8888A0]">Custom Enterprise</span>
                    </div>
                  </div>
                  <ul className="space-y-3 text-sm text-[#8888A0]">
                    <li className="flex items-center justify-between p-2 rounded bg-[#0A0A0F]">
                      <span><strong className="text-[#F0F0F5]">Entry</strong></span>
                      <span className="text-[#8888A0] font-medium">$5,000+/mo</span>
                    </li>
                    <li className="flex items-center justify-between p-2 rounded bg-[#0A0A0F]">
                      <span><strong className="text-[#F0F0F5]">Growth</strong></span>
                      <span className="text-[#8888A0] font-medium">$10,000+/mo</span>
                    </li>
                    <li className="flex items-center justify-between p-2 rounded bg-[#0A0A0F]">
                      <span><strong className="text-[#F0F0F5]">Scale</strong></span>
                      <span className="text-[#8888A0] font-medium">$20,000+/mo</span>
                    </li>
                    <li className="flex items-center justify-between p-2 rounded bg-[#0A0A0F]">
                      <span><strong className="text-[#F0F0F5]">Enterprise</strong></span>
                      <span className="text-[#8888A0] font-medium">$30,000+/mo</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-white/[0.06]">
                    <p className="text-sm text-[#8888A0]">
                      <span className="text-yellow-500">◯</span> Custom scope &nbsp;|&nbsp; 
                      <span className="text-yellow-500">◯</span> 6-12 month minimum
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                <h4 className="font-semibold text-[#F0F0F5] mb-2">Key Pricing Difference</h4>
                <p className="text-sm text-[#8888A0]">
                  Backlinky offers transparent, tiered pricing specifically for link building 
                  with clear deliverables. Page One Power creates custom scopes combining multiple 
                  SEO services (technical, content, links), making direct price comparison difficult 
                  but generally resulting in higher overall investment.
                </p>
              </div>
            </section>

            {/* Services */}
            <section id="services" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Services Comparison
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-6">
                The fundamental difference between these agencies is scope. Here's what each 
                provides:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-[#111118] border border-[#4F7CFF]/30">
                  <h3 className="font-semibold text-[#F0F0F5] mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-[#4F7CFF]" />
                    Backlinky.io (Link Building Focused)
                  </h3>
                  <ul className="space-y-3 text-sm text-[#8888A0]">
                    {[
                      { service: "Guest Posting", desc: "DR 40+ sites with content" },
                      { service: "Niche Edits", desc: "Relevant existing content" },
                      { service: "Digital PR", desc: "Data-driven link campaigns" },
                      { service: "Linkable Assets", desc: "Custom content creation" },
                      { service: "Competitor Analysis", desc: "Backlink gap research" },
                      { service: "White-Label", desc: "For agencies" },
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 p-2 rounded bg-[#0A0A0F]">
                        <CheckCircle className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[#F0F0F5] font-medium">{item.service}</span>
                          <span className="text-[#55556A]"> — {item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 p-3 rounded bg-[#0A0A0F]">
                    <p className="text-xs text-[#55556A]">
                      <strong className="text-[#F0F0F5]">Not included:</strong> Technical SEO, 
                      on-page optimization, content strategy beyond link assets
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-4 flex items-center gap-2">
                    <Code className="w-5 h-5 text-[#8888A0]" />
                    Page One Power (Full-Service SEO)
                  </h3>
                  <ul className="space-y-3 text-sm text-[#8888A0]">
                    {[
                      { service: "Technical SEO", desc: "Site audits, optimization" },
                      { service: "Content Strategy", desc: "Full content planning" },
                      { service: "Link Building", desc: "Strategic placements" },
                      { service: "SEO Consulting", desc: "Strategy and guidance" },
                      { service: "Keyword Research", desc: "Comprehensive analysis" },
                      { service: "Analytics", desc: "Performance tracking" },
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 p-2 rounded bg-[#0A0A0F]">
                        <CheckCircle className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[#F0F0F5] font-medium">{item.service}</span>
                          <span className="text-[#55556A]"> — {item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 p-3 rounded bg-[#0A0A0F]">
                    <p className="text-xs text-[#55556A]">
                      <strong className="text-[#F0F0F5]">Scope:</strong> Link building is one 
                      component of broader SEO engagement
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Focus */}
            <section id="focus" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                SaaS Focus vs Enterprise Full-Service
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-6">
                The choice between these agencies often comes down to your primary needs:
              </p>

              <div className="space-y-6 mb-8">
                <div className="p-6 rounded-xl bg-gradient-to-r from-[#4F7CFF]/10 to-transparent border border-[#4F7CFF]/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Building2 className="w-6 h-6 text-[#4F7CFF]" />
                    <h3 className="font-semibold text-[#F0F0F5]">Backlinky: SaaS Specialist</h3>
                  </div>
                  <p className="text-sm text-[#8888A0] leading-relaxed mb-4">
                    Backlinky focuses exclusively on SaaS and B2B technology companies. This 
                    specialization means:
                  </p>
                  <ul className="space-y-2 text-sm text-[#8888A0]">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                      Deep understanding of SaaS buyer personas and content
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                      Established relationships with SaaS-relevant publications
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                      Faster turnaround due to streamlined processes
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                      Transparent pricing without enterprise overhead
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="w-6 h-6 text-[#8888A0]" />
                    <h3 className="font-semibold text-[#F0F0F5]">Page One Power: Enterprise Generalist</h3>
                  </div>
                  <p className="text-sm text-[#8888A0] leading-relaxed mb-4">
                    Page One Power serves large enterprises across industries with comprehensive 
                    SEO. Their approach includes:
                  </p>
                  <ul className="space-y-2 text-sm text-[#8888A0]">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                      Holistic SEO strategy beyond just links
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                      Technical SEO expertise for complex sites
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                      Experience with Fortune 500 companies
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                      Full content strategy and execution
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Best Use Cases for Each
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-3">Choose Backlinky.io When:</h3>
                  <ul className="space-y-3 text-sm text-[#8888A0]">
                    {[
                      "You run a SaaS or B2B tech company",
                      "You specifically need link building (not full SEO)",
                      "Your technical SEO is already solid",
                      "You want faster results (2-3 weeks vs 4-6)",
                      "You prefer transparent, tiered pricing",
                      "Your budget is $3,000-15,000/month",
                      "You want dedicated link building expertise"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h3 className="font-semibold text-[#F0F0F5] mb-3">Choose Page One Power When:</h3>
                  <ul className="space-y-3 text-sm text-[#8888A0]">
                    {[
                      "You need comprehensive SEO (not just links)",
                      "Your site has significant technical issues",
                      "You want content strategy as part of the engagement",
                      "You're a large enterprise with complex needs",
                      "You have budget for $10,000+/month",
                      "You need cross-functional SEO support",
                      "You prefer one agency for all SEO needs"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Recommendation */}
            <section id="recommendation" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Final Recommendation
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-6">
                For most SaaS companies, <strong className="text-[#4F7CFF]">Backlinky.io is the better choice</strong> for 
                link building specifically. The specialized focus, faster turnaround, transparent 
                pricing, and SaaS expertise deliver better ROI for link acquisition.
              </p>

              <p className="text-[#8888A0] leading-relaxed mb-6">
                However, if your website has significant technical SEO issues, or if you need 
                comprehensive content strategy alongside link building, Page One Power's full-service 
                approach may be warranted—assuming you have the budget for their higher price point 
                and longer engagement terms.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-2">Winner for SaaS Link Building</h4>
                  <p className="text-2xl font-bold text-[#4F7CFF] mb-1">Backlinky.io</p>
                  <p className="text-sm text-[#8888A0]">
                    Specialized, faster, transparent pricing
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-2">Winner for Full-Service SEO</h4>
                  <p className="text-2xl font-bold text-[#8888A0] mb-1">Page One Power</p>
                  <p className="text-sm text-[#8888A0]">
                    Comprehensive, enterprise-focused
                  </p>
                </div>
              </div>
            </section>

          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#4F7CFF]/20 to-[#4F7CFF]/5 border border-[#4F7CFF]/30 text-center">
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
              Need Specialized SaaS Link Building?
            </h2>
            <p className="text-[#8888A0] mb-6 max-w-2xl mx-auto">
              Get a free backlink audit and see why SaaS companies choose Backlinky for 
              predictable, high-quality link building.
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
                { href: "/best-link-building-agencies/backlinky-vs-linkbuilder-io/", title: "Backlinky vs LinkBuilder.io", desc: "Campaign comparison" },
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
