import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Link2, Target, BarChart3, AlertCircle, CheckCircle } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Complete Link Building Guide: Everything You Need to Know in 2025",
  description: "Master link building with our comprehensive guide. Learn 8 proven tactics, avoid common mistakes, and build backlinks that actually improve your rankings.",
  openGraph: {
    title: "The Complete Link Building Guide: Everything You Need to Know in 2025",
    description: "Master link building with our comprehensive guide. Learn 8 proven tactics, avoid common mistakes, and build backlinks that actually improve your rankings.",
  },
};

const tableOfContents = [
  { id: "what-is-link-building", title: "What Is Link Building?" },
  { id: "why-links-matter", title: "Why Backlinks Still Matter in 2025" },
  { id: "types-of-backlinks", title: "Types of Backlinks (Ranked by Value)" },
  { id: "link-building-tactics", title: "8 Proven Link Building Tactics" },
  { id: "link-quality", title: "What Makes a Quality Backlink?" },
  { id: "common-mistakes", title: "Common Link Building Mistakes to Avoid" },
  { id: "measuring-success", title: "How to Measure Link Building Success" },
  { id: "getting-started", title: "How to Get Started Today" },
];

const spokeArticles = [
  { href: "/link-building-guide/what-are-backlinks/", title: "What Are Backlinks?", description: "The complete beginner's guide to understanding backlinks" },
  { href: "/link-building-guide/types-of-backlinks/", title: "12 Types of Backlinks", description: "Which link types actually move rankings" },
  { href: "/link-building-guide/dofollow-vs-nofollow/", title: "Dofollow vs Nofollow", description: "Does nofollow still matter in 2025?" },
  { href: "/link-building-guide/how-long-does-link-building-take/", title: "How Long Does Link Building Take?", description: "Real data and timelines" },
  { href: "/link-building-guide/link-building-metrics/", title: "Link Building Metrics", description: "What to track and what to ignore" },
  { href: "/link-building-guide/white-hat-vs-black-hat-link-building/", title: "White Hat vs Black Hat", description: "The full comparison" },
  { href: "/link-building-guide/google-penguin-update/", title: "Google Penguin Update", description: "How it changed link building forever" },
  { href: "/link-building-guide/disavow-links/", title: "How to Disavow Links", description: "Step-by-step guide with template" },
  { href: "/link-building-guide/toxic-backlinks/", title: "Toxic Backlinks", description: "How to find and remove them" },
  { href: "/link-building-guide/anchor-text-guide/", title: "Anchor Text: Complete Guide", description: "Ratios, types & SEO impact" },
  { href: "/link-building-guide/link-velocity/", title: "Link Velocity", description: "How fast should you build links?" },
  { href: "/link-building-guide/internal-linking-for-seo/", title: "Internal Linking for SEO", description: "Multiply your link equity" },
  { href: "/link-building-guide/link-building-for-new-websites/", title: "Link Building for New Websites", description: "Build authority from zero" },
  { href: "/link-building-guide/link-building-cost/", title: "Link Building Cost", description: "Agency pricing guide 2025" },
  { href: "/link-building-guide/link-building-outreach-guide/", title: "Link Building Outreach", description: "Get more responses" },
];

export default function LinkBuildingGuide() {
  return (
    <main className="min-h-screen bg-[#0A0A0F]">
      <Nav />
      
      <article className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 text-sm text-[#4F7CFF] mb-4">
              <BookOpen className="w-4 h-4" />
              <span>Link Building Guide</span>
              <span className="text-[#55556A]">·</span>
              <span className="text-[#55556A]">Updated January 2025</span>
            </div>
            <h1 className="font-[family-name:var(--font-syne)] font-bold text-3xl md:text-4xl lg:text-5xl text-[#F0F0F5] mb-6 leading-tight">
              The Complete Link Building Guide: Everything You Need to Know in 2025
            </h1>
            <p className="text-lg text-[#8888A0] leading-relaxed">
              Link building remains the #1 ranking factor in SEO. This comprehensive guide covers 
              everything from basic concepts to advanced tactics — based on 1,200+ successful campaigns 
              and the latest Google algorithm updates.
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
            <section id="what-is-link-building" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                What Is Link Building?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Link building is the practice of acquiring hyperlinks from other websites to your own. 
                A hyperlink (usually just called a link) is a way for users to navigate between pages 
                on the internet. Search engines like Google use links to crawl the web and rank pages.
              </p>
              <div className="p-6 rounded-xl bg-[#4F7CFF]/5 border border-[#4F7CFF]/20 my-6">
                <p className="text-[#F0F0F5] font-medium mb-2">The Simple Definition</p>
                <p className="text-[#8888A0]">
                  Link building is the process of getting other websites to link to pages on your website. 
                  These links help users navigate between pages and help search engines determine 
                  which pages are authoritative and trustworthy.
                </p>
              </div>
              <p className="text-[#8888A0] leading-relaxed">
                At Backlinky, we've executed over 1,200 link building campaigns for SaaS companies. 
                The data is clear: websites with more high-quality backlinks consistently rank higher 
                than their competitors.{" "}
                <Link href="/link-building-guide/what-are-backlinks/" className="text-[#4F7CFF] hover:underline">
                  Learn more about what backlinks are →
                </Link>
              </p>
            </section>

            <section id="why-links-matter" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Why Backlinks Still Matter in 2025
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Despite countless algorithm updates, backlinks remain Google's #1 ranking factor. 
                Here's why they're irreplaceable:
              </p>
              <div className="grid md:grid-cols-3 gap-4 my-6">
                {[
                  { title: "Discovery", desc: "Links help Google find and index new pages" },
                  { title: "Authority", desc: "Links act as votes of confidence and trust" },
                  { title: "Relevance", desc: "Contextual links signal topical relevance" },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                    <h4 className="font-semibold text-[#F0F0F5] mb-2">{item.title}</h4>
                    <p className="text-sm text-[#8888A0]">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#8888A0] leading-relaxed">
                Google's own documentation confirms this. In their "How Search Works" guide, they state: 
                "If other prominent websites on the subject link to the page, that's a good sign that 
                the information is of high quality."
              </p>
            </section>

            <section id="types-of-backlinks" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Types of Backlinks (Ranked by Value)
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Not all backlinks are created equal. Here's how different link types stack up:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 text-[#55556A] font-normal">Link Type</th>
                      <th className="text-center py-3 text-[#55556A] font-normal">Value</th>
                      <th className="text-center py-3 text-[#55556A] font-normal">Difficulty</th>
                      <th className="text-center py-3 text-[#55556A] font-normal">Risk</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { type: "Editorial", value: "10/10", difficulty: "Very Hard", risk: "None" },
                      { type: "HARO / Digital PR", value: "9/10", difficulty: "Hard", risk: "None" },
                      { type: "Guest Posts", value: "8/10", difficulty: "Medium", risk: "Low" },
                      { type: "Niche Edits", value: "7/10", difficulty: "Medium", risk: "Medium" },
                      { type: "Resource Pages", value: "6/10", difficulty: "Medium", risk: "None" },
                      { type: "Directories", value: "3/10", difficulty: "Easy", risk: "None" },
                    ].map((row) => (
                      <tr key={row.type} className="border-b border-white/[0.06]">
                        <td className="py-3 text-[#F0F0F5]">{row.type}</td>
                        <td className="py-3 text-center text-[#22C55E]">{row.value}</td>
                        <td className="py-3 text-center text-[#8888A0]">{row.difficulty}</td>
                        <td className="py-3 text-center text-[#8888A0]">{row.risk}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#8888A0] leading-relaxed">
                <Link href="/link-building-guide/types-of-backlinks/" className="text-[#4F7CFF] hover:underline">
                  See the complete breakdown of all 12 backlink types →
                </Link>
              </p>
            </section>

            <section id="link-building-tactics" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                8 Proven Link Building Tactics
              </h2>
              <div className="space-y-6">
                {[
                  { 
                    num: "01", 
                    title: "Digital PR & HARO", 
                    desc: "Respond to journalist queries and earn high-DR links from news sites.",
                    link: "/link-building-strategies/haro-link-building/"
                  },
                  { 
                    num: "02", 
                    title: "Guest Posting", 
                    desc: "Write valuable content for relevant blogs in your niche.",
                    link: "/link-building-strategies/guest-posting-guide/"
                  },
                  { 
                    num: "03", 
                    title: "Niche Edits", 
                    desc: "Add your link to existing, indexed content on relevant sites.",
                    link: "/link-building-strategies/niche-edits-guide/"
                  },
                  { 
                    num: "04", 
                    title: "Broken Link Building", 
                    desc: "Find dead links, create replacement content, and suggest your link.",
                    link: "/link-building-strategies/broken-link-building/"
                  },
                  { 
                    num: "05", 
                    title: "Resource Page Link Building", 
                    desc: "Get listed on curated resource pages in your industry.",
                    link: "/link-building-strategies/resource-page-link-building/"
                  },
                  { 
                    num: "06", 
                    title: "Skyscraper Technique", 
                    desc: "Create better content than what's ranking, then steal their links.",
                    link: "/link-building-strategies/skyscraper-technique/"
                  },
                  { 
                    num: "07", 
                    title: "Link Reclamation", 
                    desc: "Find unlinked brand mentions and request the link.",
                    link: "/link-building-strategies/link-reclamation/"
                  },
                  { 
                    num: "08", 
                    title: "Create Linkable Assets", 
                    desc: "Build free tools, data studies, and comprehensive guides.",
                    link: "/link-building-strategies/linkable-assets/"
                  },
                ].map((tactic) => (
                  <div key={tactic.num} className="flex gap-4 p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                    <span className="font-[family-name:var(--font-jetbrains-mono)] text-2xl text-[#4F7CFF] font-bold">{tactic.num}</span>
                    <div>
                      <h4 className="font-semibold text-[#F0F0F5] mb-1">{tactic.title}</h4>
                      <p className="text-sm text-[#8888A0] mb-2">{tactic.desc}</p>
                      <Link href={tactic.link} className="text-sm text-[#4F7CFF] hover:underline">
                        Learn this tactic →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="link-quality" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                What Makes a Quality Backlink?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                A single high-quality backlink can be worth more than 100 low-quality ones. 
                Here's what to look for:
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                {[
                  { icon: Target, title: "Relevance", desc: "The linking site should be topically related to yours" },
                  { icon: BarChart3, title: "Authority", desc: "Higher DR/DA sites pass more link equity" },
                  { icon: Link2, title: "Context", desc: "Links within content body are more valuable than footer/sidebar" },
                  { icon: CheckCircle, title: "Traffic", desc: "Real sites with organic traffic are more trustworthy" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                    <item.icon className="w-5 h-5 text-[#4F7CFF] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-[#F0F0F5] mb-1">{item.title}</h4>
                      <p className="text-sm text-[#8888A0]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[#8888A0] leading-relaxed">
                <Link href="/link-building-guide/link-building-metrics/" className="text-[#4F7CFF] hover:underline">
                  Learn which link building metrics actually matter →
                </Link>
              </p>
            </section>

            <section id="common-mistakes" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Common Link Building Mistakes to Avoid
              </h2>
              <div className="space-y-4">
                {[
                  { mistake: "Buying links in bulk", solution: "Focus on quality over quantity — 5 great links beat 50 poor ones" },
                  { mistake: "Exact match anchor text", solution: "Use natural, varied anchors — branded anchors should dominate" },
                  { mistake: "Ignoring relevance", solution: "A DR 30 link from a relevant site beats a DR 60 link from an unrelated one" },
                  { mistake: "Building too fast", solution: "Natural link velocity varies — sudden spikes look suspicious" },
                  { mistake: "Neglecting link maintenance", solution: "Monitor your backlinks — 15-20% of links disappear each year" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 p-4 rounded-lg bg-red-500/5 border border-red-500/10">
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[#F0F0F5] font-medium mb-1">{item.mistake}</p>
                      <p className="text-sm text-[#8888A0]">{item.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="measuring-success" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                How to Measure Link Building Success
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Track these key metrics to evaluate your link building campaigns:
              </p>
              <div className="p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
                <ul className="space-y-3">
                  {[
                    "Domain Rating (DR) or Domain Authority (DA) growth",
                    "Number of referring domains (more important than total backlinks)",
                    "Organic traffic increases (the ultimate goal)",
                    "Keyword ranking improvements",
                    "Referral traffic from linked pages",
                  ].map((metric) => (
                    <li key={metric} className="flex items-center gap-3 text-[#8888A0]">
                      <CheckCircle className="w-4 h-4 text-[#22C55E] shrink-0" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section id="getting-started" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                How to Get Started Today
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Ready to build links? Here's your 30-day action plan:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { day: "Days 1-7", task: "Audit your current backlink profile and identify gaps" },
                  { day: "Days 8-14", task: "Set up HARO alerts and respond to relevant queries" },
                  { day: "Days 15-21", task: "Create a linkable asset (tool, guide, or study)" },
                  { day: "Days 22-30", task: "Launch your first guest post or niche edit campaign" },
                ].map((phase) => (
                  <div key={phase.day} className="flex gap-4 items-center p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                    <span className="font-[family-name:var(--font-jetbrains-mono)] text-sm text-[#4F7CFF] w-24 shrink-0">{phase.day}</span>
                    <span className="text-[#F0F0F5]">{phase.task}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA */}
              <div className="p-8 rounded-2xl bg-gradient-to-r from-[#4F7CFF]/20 to-[#4F7CFF]/5 border border-[#4F7CFF]/30 text-center">
                <h3 className="font-[family-name:var(--font-syne)] font-bold text-xl text-[#F0F0F5] mb-2">
                  Want Us to Handle Your Link Building?
                </h3>
                <p className="text-[#8888A0] mb-6">
                  We specialize in white-hat link building for SaaS companies. 
                  Get DR 40+ links every month, guaranteed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/#pricing"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white bg-[#4F7CFF] rounded-lg hover:bg-[#3D6AEE] transition-colors font-medium"
                  >
                    View Pricing
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/#audit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-[#F0F0F5] border border-white/20 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    Get Free Audit
                  </Link>
                </div>
              </div>
            </section>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-12 border-t border-white/[0.06]">
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-xl text-[#F0F0F5] mb-6">
              Deep Dive: Link Building Topics
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {spokeArticles.slice(0, 8).map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="group p-4 rounded-lg bg-[#111118] border border-white/[0.06] hover:border-[#4F7CFF]/30 transition-colors"
                >
                  <h4 className="font-medium text-[#F0F0F5] group-hover:text-[#4F7CFF] transition-colors mb-1">
                    {article.title}
                  </h4>
                  <p className="text-sm text-[#8888A0]">{article.description}</p>
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
