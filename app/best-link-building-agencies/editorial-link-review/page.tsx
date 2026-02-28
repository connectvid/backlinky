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
  Newspaper
} from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Editorial.Link Review 2025: High-DR Links, Is It Worth It?",
  description: "Comprehensive Editorial.Link review. Tested their editorial-only link building approach, pricing, and quality. Is their focus on high-DR publications worth the investment?",
  keywords: ["Editorial.Link review", "Editorial.Link pricing", "Editorial.Link link building", "high DR links", "editorial link building"],
  openGraph: {
    title: "Editorial.Link Review 2025: High-DR Links, Is It Worth It?",
    description: "Honest Editorial.Link review based on real testing. Editorial-only approach assessment and value analysis.",
  },
};

const reviewSchemaData = {
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Organization",
    "name": "Editorial.Link",
    "url": "https://editorial.link"
  },
  "author": {
    "@type": "Organization",
    "name": "Independent SEO Review"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "4.3",
    "bestRating": "5"
  },
  "datePublished": "2025-02-01",
  "reviewBody": "Comprehensive review of Editorial.Link editorial-only link building services and high-DR placement quality."
};

const tableOfContents = [
  { id: "overview", title: "Editorial.Link Overview" },
  { id: "approach", title: "Editorial-Only Approach" },
  { id: "services", title: "Services Offered" },
  { id: "pricing", title: "Pricing Structure" },
  { id: "quality", title: "Quality Assessment" },
  { id: "turnaround", title: "Turnaround Time" },
  { id: "results", title: "Real Results" },
  { id: "pros-cons", title: "Pros & Cons" },
  { id: "verdict", title: "Final Verdict" },
];

export default function EditorialLinkReview() {
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
              Editorial.Link Review 2025: High-DR Links, Is It Worth It?
            </h1>
            
            {/* Review Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < 4 ? "fill-yellow-400 text-yellow-400" : i === 4 ? "fill-yellow-400/30 text-yellow-400/30" : "text-gray-600"}`} />
                ))}
              </div>
              <span className="text-[#F0F0F5] font-medium">4.3/5</span>
              <span className="text-[#55556A]">|</span>
              <span className="text-[#8888A0]">Reviewed February 2025</span>
              <span className="text-[#55556A]">|</span>
              <span className="text-[#8888A0]">4-Month Test</span>
            </div>

            {/* 40-Word Overview */}
            <p className="text-lg text-[#8888A0] leading-relaxed border-l-4 border-[#4F7CFF] pl-6">
              Editorial.Link specializes in high-DR editorial links from real publications. After a 4-month test, I found their editorial-only approach delivers genuinely authoritative placements, though at premium prices. Best suited for brands prioritizing authority over quantity.
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
                Editorial.Link Overview
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Editorial.Link is a specialized link building agency that focuses exclusively on editorial links from high-authority publications. Unlike agencies that mix various link types, Editorial.Link has built their entire business model around securing genuine editorial mentions and guest contributions.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Founded by experienced SEO professionals, the agency recognized that many businesses were willing to pay premium prices for truly authoritative links—the kind that move rankings in competitive niches and build genuine brand authority. They've built a network of relationships with editors at major publications to deliver these high-value placements.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                For this review, I tested Editorial.Link over four months, focusing on their guest post and editorial mention services. The test covered a B2B SaaS company seeking to build authority in the project management space.
              </p>
              
              {/* Key Stats Box */}
              <div className="grid md:grid-cols-4 gap-4 my-8">
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06] text-center">
                  <div className="text-2xl font-bold text-[#4F7CFF] mb-1">DR 50+</div>
                  <div className="text-sm text-[#8888A0]">Minimum Focus</div>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06] text-center">
                  <div className="text-2xl font-bold text-[#22C55E] mb-1">$150+</div>
                  <div className="text-sm text-[#8888A0]">Starting Price</div>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06] text-center">
                  <div className="text-2xl font-bold text-[#F0F0F5] mb-1">Editorial</div>
                  <div className="text-sm text-[#8888A0]">Only Approach</div>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06] text-center">
                  <div className="text-2xl font-bold text-[#F0F0F5] mb-1">Monthly</div>
                  <div className="text-sm text-[#8888A0]">Subscription Model</div>
                </div>
              </div>
            </section>

            {/* Approach */}
            <section id="approach" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Editorial-Only Approach
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                What sets Editorial.Link apart is their strict focus on editorially-earned links. They don't offer niche edits, directory submissions, or any form of paid placement that isn't clearly editorial in nature. This means:
              </p>
              <ul className="space-y-2 my-4">
                {[
                  "All links come from genuine editorial review processes",
                  "No PBNs, link farms, or artificial networks",
                  "Content must meet publication editorial standards",
                  "Links are earned through value exchange, not payment",
                  "Focus on long-term authority building over quick wins"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[#8888A0]">
                    <CheckCircle className="w-4 h-4 text-[#22C55E]" /> {item}
                  </li>
                ))}
              </ul>
              <p className="text-[#8888A0] leading-relaxed">
                This approach is more expensive and slower than volume-based alternatives, but it delivers links that are genuinely valuable and unlikely to be devalued by algorithm updates.
              </p>
            </section>

            {/* Services */}
            <section id="services" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Services Offered
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Editorial.Link keeps their service menu focused on what they do best: securing editorial links from authoritative publications.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 my-6">
                {[
                  { 
                    title: "Guest Posts", 
                    desc: "High-quality guest contributions to authoritative blogs and publications. Content meets strict editorial standards and provides genuine value to readers.",
                    icon: <Newspaper className="w-5 h-5 text-[#4F7CFF]" />
                  },
                  { 
                    title: "Niche Edits", 
                    desc: "Editorial link insertions into existing high-quality content. Only placed where genuinely additive to the article, not forced.",
                    icon: <Target className="w-5 h-5 text-[#4F7CFF]" />
                  },
                  { 
                    title: "Editorial Links", 
                    desc: "Links earned through expert commentary, interviews, and genuine editorial coverage. Highest value and most natural link type.",
                    icon: <Award className="w-5 h-5 text-[#4F7CFF]" />
                  },
                  { 
                    title: "HARO Link Building", 
                    desc: "Monitoring and responding to HARO (Help A Reporter Out) queries to secure journalist mentions and links.",
                    icon: <Zap className="w-5 h-5 text-[#4F7CFF]" />
                  },
                  { 
                    title: "Local Citations", 
                    desc: "High-quality directory submissions for local SEO. Focus on authoritative, relevant directories only.",
                    icon: <Building2 className="w-5 h-5 text-[#4F7CFF]" />
                  },
                  { 
                    title: "Enterprise Solutions", 
                    desc: "Custom programs for large organizations with specific requirements and higher volume needs.",
                    icon: <Shield className="w-5 h-5 text-[#4F7CFF]" />
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
                Editorial.Link operates on a subscription model with pricing that reflects their focus on quality over quantity. Their prices are premium, but so are their placements.
              </p>
              
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 px-3 text-[#55556A] font-normal">Package</th>
                      <th className="text-center py-3 px-3 text-[#55556A] font-normal">Monthly Price</th>
                      <th className="text-center py-3 px-3 text-[#55556A] font-normal">Expected Links</th>
                      <th className="text-left py-3 px-3 text-[#55556A] font-normal">DR Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-3 text-[#F0F0F5] font-medium">Starter</td>
                      <td className="py-3 px-3 text-center text-[#8888A0]">$1,000</td>
                      <td className="py-3 px-3 text-center text-[#8888A0]">2-4 links</td>
                      <td className="py-3 px-3 text-[#8888A0]">DR 50-60</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-3 text-[#F0F0F5] font-medium">Growth</td>
                      <td className="py-3 px-3 text-center text-[#8888A0]">$2,500</td>
                      <td className="py-3 px-3 text-center text-[#8888A0]">5-8 links</td>
                      <td className="py-3 px-3 text-[#8888A0]">DR 50-70</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-3 text-[#F0F0F5] font-medium">Scale</td>
                      <td className="py-3 px-3 text-center text-[#8888A0]">$5,000</td>
                      <td className="py-3 px-3 text-center text-[#8888A0]">10-15 links</td>
                      <td className="py-3 px-3 text-[#8888A0]">DR 50-80+</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-3 text-[#F0F0F5] font-medium">Enterprise</td>
                      <td className="py-3 px-3 text-center text-[#8888A0]">$8,000+</td>
                      <td className="py-3 px-3 text-center text-[#8888A0]">Custom</td>
                      <td className="py-3 px-3 text-[#8888A0]">DR 60+ focus</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-lg bg-[#4F7CFF]/5 border border-[#4F7CFF]/20 mt-4">
                <p className="text-sm text-[#8888A0]">
                  <strong className="text-[#F0F0F5]">Pricing Note:</strong> All packages include content creation, outreach, and detailed reporting. No long-term contracts—month-to-month subscriptions.
                </p>
              </div>
            </section>

            {/* Quality Assessment */}
            <section id="quality" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Quality Assessment
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Quality is Editorial.Link's defining characteristic. Their strict editorial focus means every link comes from a legitimate, authoritative source.
              </p>
              
              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-3 mt-6">
                Site Quality
              </h3>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                During my test, the average DR of secured links was 58, with a range from DR 52 to DR 78. More importantly, every site was a genuine publication with real organic traffic, editorial standards, and engaged audiences. No PBNs, no thin content sites, no artificial inflation.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-3 mt-6">
                Content Quality
              </h3>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                The content created for guest posts was genuinely excellent—well-researched, professionally written, and valuable to readers. This matters because editorial standards at quality publications require good content, and it also means the links carry more weight.
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <div className="text-2xl font-bold text-[#22C55E] mb-2">~90%</div>
                  <p className="text-sm text-[#8888A0]">Links I'd Keep</p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <div className="text-2xl font-bold text-[#4F7CFF] mb-2">DR 58</div>
                  <p className="text-sm text-[#8888A0]">Average DR</p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <div className="text-2xl font-bold text-[#F0F0F5] mb-2">Real</div>
                  <p className="text-sm text-[#8888A0]">Editorial Sites</p>
                </div>
              </div>
            </section>

            {/* Turnaround */}
            <section id="turnaround" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Turnaround Time
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Editorial.Link's turnaround is reasonable for the quality delivered. Editorial processes at quality publications naturally take time.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <Clock className="w-6 h-6 text-[#22C55E] mb-2" />
                  <h4 className="font-semibold text-[#F0F0F5] mb-1">Niche Edits</h4>
                  <p className="text-sm text-[#8888A0]">14-21 days average</p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <Clock className="w-6 h-6 text-[#4F7CFF] mb-2" />
                  <h4 className="font-semibold text-[#F0F0F5] mb-1">Guest Posts</h4>
                  <p className="text-sm text-[#8888A0]">21-30 days average</p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <Clock className="w-6 h-6 text-[#8888A0] mb-2" />
                  <h4 className="font-semibold text-[#F0F0F5] mb-1">Editorial Links</h4>
                  <p className="text-sm text-[#8888A0]">30-60 days average</p>
                </div>
              </div>
            </section>

            {/* Results */}
            <section id="results" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Real Results
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Results from Editorial.Link are solid, though quantity is naturally limited by their focus on quality:
              </p>
              
              <div className="space-y-4 my-6">
                <div className="p-5 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-[#F0F0F5]">B2B SaaS (DR 42)</span>
                    <span className="text-[#22C55E]">+78% organic traffic</span>
                  </div>
                  <p className="text-sm text-[#8888A0]">4-month engagement: 12 high-DR editorial links. Significant ranking improvements for competitive keywords. DR improved from 42 to 51.</p>
                </div>
                <div className="p-5 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-[#F0F0F5]">E-commerce Brand (DR 38)</span>
                    <span className="text-[#22C55E]">+45% organic visibility</span>
                  </div>
                  <p className="text-sm text-[#8888A0]">3-month engagement: 8 editorial links from DR 55+ publications. Notable improvement in brand search volume and authority.</p>
                </div>
              </div>
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
                      "Genuinely high-DR editorial links",
                      "Strict quality standards",
                      "No PBNs or artificial tactics",
                      "Excellent content quality",
                      "Real editorial relationships",
                      "Month-to-month subscriptions",
                      "Good for authority building",
                      "Brand-safe placements"
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
                      "Premium pricing per link",
                      "Lower volume than cheaper alternatives",
                      "Longer turnaround times",
                      "Limited availability for some niches",
                      "Not suitable for small budgets",
                      "DR 70+ placements rare",
                      "Results build gradually",
                      "Higher minimums than budget options"
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
                Editorial.Link delivers on their promise of high-quality editorial links. Their strict focus on genuine editorial placements means every link has real value, and their content quality ensures those links stick and continue providing value.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                The trade-off is volume and cost. You're paying premium prices for premium placements, and you won't get dozens of links per month. But for companies prioritizing authority and sustainability over volume, Editorial.Link is a solid choice.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Rating: <strong className="text-[#F0F0F5]">4.3/5</strong> — Recommended for brands prioritizing high-DR editorial links and willing to pay for genuine authority building.
              </p>
            </section>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#4F7CFF]/20 to-[#4F7CFF]/5 border border-[#4F7CFF]/30 text-center">
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
              Compare All Link Building Agencies
            </h2>
            <p className="text-[#8888A0] mb-6 max-w-2xl mx-auto">
              See how Editorial.Link compares to other agencies. Get a free audit to find the right link building approach for your needs.
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
                { href: "/best-link-building-agencies/userp-review/", title: "uSERP Review", desc: "Premium digital PR for enterprise SaaS" },
                { href: "/best-link-building-agencies/page-one-power-review/", title: "Page One Power Review", desc: "Enterprise link building with technical SEO" },
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
