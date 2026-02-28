import type { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  Star, 
  CheckCircle, 
  XCircle, 
  DollarSign, 
  Clock, 
  BarChart3,
  Target,
  Shield,
  Zap,
  Users,
  Award,
  Building2,
  Globe
} from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Stan Ventures Review 2025: Affordable Link Building That Works?",
  description: "Independent Stan Ventures review after $6,000+ in orders. Tested their affordable guest posts, niche edits, and white-label services. Real quality assessment and value analysis.",
  keywords: ["Stan Ventures review", "Stan Ventures pricing", "Stan Ventures link building", "affordable link building", "white label link building"],
  openGraph: {
    title: "Stan Ventures Review 2025: Affordable Link Building That Works?",
    description: "Honest Stan Ventures review based on real testing. Budget-friendly link building quality assessment and value analysis.",
  },
};

const reviewSchemaData = {
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Organization",
    "name": "Stan Ventures",
    "url": "https://stanventures.com"
  },
  "author": {
    "@type": "Organization",
    "name": "Independent SEO Review"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "4.1",
    "bestRating": "5"
  },
  "datePublished": "2025-02-01",
  "reviewBody": "Comprehensive review of Stan Ventures affordable link building and white-label services."
};

const tableOfContents = [
  { id: "overview", title: "Stan Ventures Overview" },
  { id: "budget-positioning", title: "Budget Positioning" },
  { id: "services", title: "Services Offered" },
  { id: "pricing", title: "Pricing Structure" },
  { id: "quality", title: "Quality Assessment" },
  { id: "turnaround", title: "Turnaround Time" },
  { id: "results", title: "Real Results" },
  { id: "pros-cons", title: "Pros & Cons" },
  { id: "verdict", title: "Final Verdict" },
];

export default function StanVenturesReview() {
  return (
    <main className="min-h-screen bg-[#0A0A0F]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchemaData) }}
      />
      <Nav />
      
      <article className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 text-sm text-[#4F7CFF] mb-4">
              <Building2 className="w-4 h-4" />
              <Link href="/best-link-building-agencies/" className="hover:underline">Agency Reviews</Link>
              <span className="text-[#55556A]">·</span>
              <span className="text-[#55556A]">Independent Review</span>
            </div>
            <h1 className="font-[family-name:var(--font-syne)] font-bold text-3xl md:text-4xl lg:text-5xl text-[#F0F0F5] mb-6 leading-tight">
              Stan Ventures Review 2025: Affordable Link Building That Works?
            </h1>
            
            {/* Review Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-600"}`} />
                ))}
              </div>
              <span className="text-[#F0F0F5] font-medium">4.1/5</span>
              <span className="text-[#55556A]">|</span>
              <span className="text-[#8888A0]">Reviewed February 2025</span>
              <span className="text-[#55556A]">|</span>
              <span className="text-[#8888A0]">$6,000+ Tested</span>
            </div>

            {/* 40-Word Overview */}
            <p className="text-lg text-[#8888A0] leading-relaxed border-l-4 border-[#4F7CFF] pl-6">
              Stan Ventures is an India-based agency offering affordable link building services with white-label options. After spending $6,000+ on their guest posts and niche edits, I found them a decent budget option for agencies and small businesses, though quality varies by tier.
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
                Stan Ventures Overview
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Stan Ventures is an India-based digital marketing agency founded in 2008 that has carved out a niche in affordable link building services. Led by Dinesh Kumar, they've built a business model around providing cost-effective SEO solutions primarily for agencies and budget-conscious businesses.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Their value proposition is straightforward: offer link building services at prices significantly below US and UK competitors while maintaining acceptable quality standards. They achieve this through lower operational costs in India and streamlined processes focused on volume.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                For this review, I tested Stan Ventures over four months, spending $6,000+ on guest posts, niche edits, and their white-label services. The testing covered multiple niches to assess their versatility and quality consistency.
              </p>
              
              {/* Key Stats Box */}
              <div className="grid md:grid-cols-4 gap-4 my-8">
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06] text-center">
                  <div className="text-2xl font-bold text-[#4F7CFF] mb-1">2008</div>
                  <div className="text-sm text-[#8888A0]">Founded</div>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06] text-center">
                  <div className="text-2xl font-bold text-[#22C55E] mb-1">$70</div>
                  <div className="text-sm text-[#8888A0]">Starting Price</div>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06] text-center">
                  <div className="text-2xl font-bold text-[#F0F0F5] mb-1">India</div>
                  <div className="text-sm text-[#8888A0]">Headquarters</div>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06] text-center">
                  <div className="text-2xl font-bold text-[#F0F0F5] mb-1">DR 20+</div>
                  <div className="text-sm text-[#8888A0]">Minimum Guarantee</div>
                </div>
              </div>
            </section>

            {/* Budget Positioning */}
            <section id="budget-positioning" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Budget Positioning
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Stan Ventures occupies a specific position in the market: affordable link building for those who can't justify premium agency pricing. They're not competing with uSERP or Page One Power on quality—they're competing with FATJOE and Rhino Rank on price.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Their pricing is typically 30-50% lower than comparable US-based services. This makes them attractive to:
              </p>
              <ul className="space-y-2 my-4">
                {[
                  "Small agencies reselling link building services",
                  "Bootstrapped startups with limited SEO budgets",
                  "Affiliate marketers needing volume",
                  "Local businesses testing link building",
                  "Companies needing tier 2 link diversity"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[#8888A0]">
                    <CheckCircle className="w-4 h-4 text-[#22C55E]" /> {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Services */}
            <section id="services" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Services Offered
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Stan Ventures offers a standard range of link building services with particular strength in white-label offerings for agencies.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 my-6">
                {[
                  { 
                    title: "Guest Posting", 
                    desc: "Guest posts on blogs across various DR tiers. Content included at lower quality levels, or you can provide your own.",
                    icon: <Zap className="w-5 h-5 text-[#4F7CFF]" />
                  },
                  { 
                    title: "Niche Edits", 
                    desc: "Link insertions into existing content. Often their strongest offering in terms of value for money.",
                    icon: <Target className="w-5 h-5 text-[#4F7CFF]" />
                  },
                  { 
                    title: "White Label Link Building", 
                    desc: "Reseller-friendly service with unbranded reports. Popular with agencies looking for margin on link building.",
                    icon: <Shield className="w-5 h-5 text-[#4F7CFF]" />
                  },
                  { 
                    title: "Content Creation", 
                    desc: "SEO content writing service. Quality varies—acceptable for tier 2 content, but review carefully for money sites.",
                    icon: <BarChart3 className="w-5 h-5 text-[#4F7CFF]" />
                  },
                  { 
                    title: "Link Packages", 
                    desc: "Bundled offerings combining multiple link types. Decent value for testing their services.",
                    icon: <Award className="w-5 h-5 text-[#4F7CFF]" />
                  },
                  { 
                    title: "SEO Services", 
                    desc: "Broader SEO including on-page optimization and technical audits. Less specialized than their link building.",
                    icon: <Building2 className="w-5 h-5 text-[#4F7CFF]" />
                  },
                ].map((service) => (
                  <div key={service.title} className="p-5 rounded-lg bg-[#111118] border border-white/[0.06]">
                    <div className="flex items-center gap-3 mb-3">
                      {service.icon}
                      <h4 className="font-semibold text-[#F0F0F5]">{service.title}</h4>
                    </div>
                    <p className="text-sm text-[#8888A0]">{service.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Pricing Structure
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Stan Ventures' pricing is among the most competitive in the industry. Their lower operational costs in India allow them to undercut Western competitors significantly.
              </p>
              
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 px-3 text-[#55556A] font-normal">DR Range</th>
                      <th className="text-center py-3 px-3 text-[#55556A] font-normal">Guest Post</th>
                      <th className="text-center py-3 px-3 text-[#55556A] font-normal">Niche Edit</th>
                      <th className="text-left py-3 px-3 text-[#55556A] font-normal">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-3 text-[#F0F0F5] font-medium">DR 20-30</td>
                      <td className="py-3 px-3 text-center text-[#8888A0]">$70-90</td>
                      <td className="py-3 px-3 text-center text-[#8888A0]">$50-70</td>
                      <td className="py-3 px-3 text-[#8888A0]">Entry level</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-3 text-[#F0F0F5] font-medium">DR 30-40</td>
                      <td className="py-3 px-3 text-center text-[#8888A0]">$100-130</td>
                      <td className="py-3 px-3 text-center text-[#8888A0]">$80-100</td>
                      <td className="py-3 px-3 text-[#8888A0]">Best value</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-3 text-[#F0F0F5] font-medium">DR 40-50</td>
                      <td className="py-3 px-3 text-center text-[#8888A0]">$160-200</td>
                      <td className="py-3 px-3 text-center text-[#8888A0]">$130-160</td>
                      <td className="py-3 px-3 text-[#8888A0]">Higher quality</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-3 text-[#F0F0F5] font-medium">DR 50+</td>
                      <td className="py-3 px-3 text-center text-[#8888A0]">$250+</td>
                      <td className="py-3 px-3 text-center text-[#8888A0]">$200+</td>
                      <td className="py-3 px-3 text-[#8888A0]">Limited inventory</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-lg bg-[#4F7CFF]/5 border border-[#4F7CFF]/20 mt-4">
                <p className="text-sm text-[#8888A0]">
                  <strong className="text-[#F0F0F5]">Volume Discounts:</strong> White-label and bulk orders receive 15-30% discounts depending on volume. This makes them particularly attractive for agencies.
                </p>
              </div>
            </section>

            {/* Quality Assessment */}
            <section id="quality" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Quality Assessment
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Quality is the trade-off for Stan Ventures' competitive pricing. While not poor, it's noticeably below premium agencies. Here's the honest breakdown:
              </p>
              
              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-3 mt-6">
                Site Quality
              </h3>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                The sites Stan Ventures uses are generally legitimate—real blogs with actual content histories. However, they tend to be smaller sites with limited traffic. Most DR 20-30 sites had under 1,000 monthly visitors. DR 40+ placements were better but availability was limited.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-3 mt-6">
                Content Quality
              </h3>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Content quality is acceptable but not exceptional. Guest posts are readable and on-topic but lack the depth and polish of premium agencies. For tier 2 links or supporting content, it's fine. For your main money site, consider providing your own content.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-3 mt-6">
                Communication Quality
              </h3>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                The India timezone can cause communication delays for US and UK clients. Response times averaged 12-24 hours, which is acceptable but slower than some competitors. Language barriers were minimal but occasionally present in complex requests.
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <div className="text-2xl font-bold text-[#22C55E] mb-2">~70%</div>
                  <p className="text-sm text-[#8888A0]">Links I'd Keep</p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <div className="text-2xl font-bold text-yellow-500 mb-2">~20%</div>
                  <p className="text-sm text-[#8888A0]">Marginal Quality</p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <div className="text-2xl font-bold text-red-400 mb-2">~10%</div>
                  <p className="text-sm text-[#8888A0]">Rejected</p>
                </div>
              </div>
            </section>

            {/* Turnaround */}
            <section id="turnaround" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Turnaround Time
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Stan Ventures delivers reasonably quickly, typically within 10-21 days depending on the service and tier.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <Clock className="w-6 h-6 text-[#22C55E] mb-2" />
                  <h4 className="font-semibold text-[#F0F0F5] mb-1">Niche Edits</h4>
                  <p className="text-sm text-[#8888A0]">7-14 days average</p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <Clock className="w-6 h-6 text-[#4F7CFF] mb-2" />
                  <h4 className="font-semibold text-[#F0F0F5] mb-1">Guest Posts</h4>
                  <p className="text-sm text-[#8888A0]">10-21 days average</p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <Clock className="w-6 h-6 text-[#8888A0] mb-2" />
                  <h4 className="font-semibold text-[#F0F0F5] mb-1">DR 50+ Orders</h4>
                  <p className="text-sm text-[#8888A0]">21-30 days average</p>
                </div>
              </div>
            </section>

            {/* Results */}
            <section id="results" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Real Results
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Results from Stan Ventures are modest but positive when expectations are realistic:
              </p>
              
              <div className="space-y-4 my-6">
                <div className="p-5 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-[#F0F0F5]">Affiliate Site (DR 18)</span>
                    <span className="text-[#22C55E]">+15% organic traffic</span>
                  </div>
                  <p className="text-sm text-[#8888A0]">35 DR 25-35 links over 4 months. Gradual improvement in long-tail rankings. Positive ROI achieved.</p>
                </div>
                <div className="p-5 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-[#F0F0F5]">Local Business (DR 25)</span>
                    <span className="text-[#22C55E]">+12% local visibility</span>
                  </div>
                  <p className="text-sm text-[#8888A0]">20 mixed links combined with citations. Modest but measurable improvement in local pack presence.</p>
                </div>
              </div>

              <p className="text-[#8888A0] leading-relaxed">
                The pattern is clear: Stan Ventures works for lower-competition niches and supporting link diversity, but won't move the needle significantly in competitive spaces alone.
              </p>
            </section>

            {/* Pros & Cons */}
            <section id="pros-cons" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Pros & Cons
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-[#22C55E]/5 border border-[#22C55E]/10">
                  <h4 className="font-semibold text-[#22C55E] mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> Pros
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Very competitive pricing",
                      "Good white-label options for agencies",
                      "Acceptable quality for the price",
                      "Volume discounts available",
                      "Decent turnaround times",
                      "Legitimate sites (not PBNs)",
                      "Flexible packages",
                      "16+ years in business"
                    ].map((pro, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#8888A0]">
                        <CheckCircle className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/10">
                  <h4 className="font-semibold text-red-400 mb-4 flex items-center gap-2">
                    <XCircle className="w-5 h-5" /> Cons
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Quality below premium alternatives",
                      "Timezone delays for Western clients",
                      "Content quality is basic",
                      "DR 50+ inventory limited",
                      "Communication can be slow",
                      "Not suitable for high-stakes niches",
                      "Less rigorous vetting than top agencies",
                      "Variable quality consistency"
                    ].map((con, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#8888A0]">
                        <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Final Verdict */}
            <section id="verdict" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Final Verdict
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Stan Ventures delivers acceptable value for their price point. They're not a premium service and don't pretend to be. For agencies needing white-label fulfillment or businesses with limited budgets, they offer a viable option.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                The key is setting realistic expectations. You're not getting uSERP quality at these prices, and that's okay if you understand the trade-offs. Use Stan Ventures for volume, tier 2 links, or testing—not for your primary authority building.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Rating: <strong className="text-[#F0F0F5]">4.1/5</strong> — Recommended for budget-conscious buyers and agencies needing affordable white-label fulfillment with acceptable quality.
              </p>
            </section>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#4F7CFF]/20 to-[#4F7CFF]/5 border border-[#4F7CFF]/30 text-center">
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
              Compare All Link Building Agencies
            </h2>
            <p className="text-[#8888A0] mb-6 max-w-2xl mx-auto">
              See how Stan Ventures compares to other agencies at different price points. Get a free audit to find the right fit for your budget and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/best-link-building-agencies/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white bg-[#4F7CFF] rounded-lg hover:bg-[#3D6AEE] transition-colors font-medium text-lg"
              >
                See All Agency Reviews
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/#audit"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-[#F0F0F5] border border-white/20 rounded-lg hover:bg-white/5 transition-colors text-lg"
              >
                Get Free Audit
              </Link>
            </div>
          </div>

          {/* Related Reviews */}
          <div className="mt-16 pt-12 border-t border-white/[0.06]">
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-xl text-[#F0F0F5] mb-6">
              More Agency Reviews
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { href: "/best-link-building-agencies/backlinky-review/", title: "Backlinky.io Review", desc: "SaaS-specialized link building with guaranteed DR 40+" },
                { href: "/best-link-building-agencies/rhino-rank-review/", title: "Rhino Rank Review", desc: "Budget-friendly curated links from $30" },
                { href: "/best-link-building-agencies/fatjoe-review/", title: "FATJOE Review", desc: "Full-service link building with self-serve platform" },
                { href: "/best-link-building-agencies/linkbuilder-io-review/", title: "LinkBuilder.io Review", desc: "Custom campaign-based link building" },
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
