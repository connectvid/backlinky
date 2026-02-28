import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowRight, ExternalLink } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Link Building Blog — Backlinky.io",
  description: "Expert guides, tutorials, and insights on link building, SEO, and growing organic traffic for SaaS companies.",
};

const pillars = [
  {
    title: "Link Building Guide",
    href: "/link-building-guide/",
    description: "The complete guide to understanding and executing link building campaigns.",
    count: "15 articles",
    featured: true,
  },
  {
    title: "Link Building Strategies",
    href: "/link-building-strategies/",
    description: "Step-by-step tactics for acquiring high-quality backlinks.",
    count: "14 articles",
  },
  {
    title: "Link Building Tools",
    href: "/link-building-tools/",
    description: "Reviews and guides for the best SEO and link building tools.",
    count: "12 articles",
  },
  {
    title: "Link Building by Niche",
    href: "/link-building-for-niche/",
    description: "Industry-specific link building strategies.",
    count: "10 articles",
  },
  {
    title: "Best Link Building Agencies",
    href: "/best-link-building-agencies/",
    description: "Reviews and comparisons of link building services.",
    count: "18 articles",
  },
  {
    title: "SEO Metrics",
    href: "/seo-metrics/",
    description: "Understanding domain authority, link metrics, and SEO KPIs.",
    count: "16 articles",
  },
];

const featuredPosts = [
  {
    title: "The Complete Link Building Guide",
    href: "/link-building-guide/",
    description: "Everything you need to know about link building in 2025.",
    category: "Guide",
    readTime: "25 min read",
  },
  {
    title: "What Are Backlinks?",
    href: "/link-building-guide/what-are-backlinks/",
    description: "The complete beginner's guide to understanding backlinks.",
    category: "Beginner",
    readTime: "12 min read",
  },
  {
    title: "Link Building for SaaS",
    href: "/link-building-for-niche/link-building-for-saas/",
    description: "Specialized strategies for SaaS companies.",
    category: "SaaS",
    readTime: "18 min read",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0F]">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4F7CFF]/15 border border-[#4F7CFF]/20 mb-6">
            <BookOpen className="w-4 h-4 text-[#4F7CFF]" />
            <span className="text-sm text-[#4F7CFF]">The Link Building Knowledge Hub</span>
          </div>
          <h1 className="font-[family-name:var(--font-syne)] font-bold text-4xl md:text-5xl text-[#F0F0F5] mb-6">
            Link Building Blog
          </h1>
          <p className="text-lg text-[#8888A0] max-w-2xl mx-auto">
            Expert guides, tutorials, and insights on link building, SEO, and growing 
            organic traffic for SaaS companies.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-6">
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group p-6 rounded-xl bg-[#111118] border border-white/[0.06] hover:border-[#4F7CFF]/30 transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 rounded-full bg-[#4F7CFF]/10 text-[#4F7CFF] text-xs">
                    {post.category}
                  </span>
                  <span className="text-xs text-[#55556A]">{post.readTime}</span>
                </div>
                <h3 className="font-[family-name:var(--font-syne)] font-semibold text-lg text-[#F0F0F5] group-hover:text-[#4F7CFF] transition-colors mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-[#8888A0] mb-4">{post.description}</p>
                <span className="inline-flex items-center gap-1 text-sm text-[#4F7CFF]">
                  Read Article
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Content Pillars */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-6">
            Browse by Topic
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pillars.map((pillar) => (
              <Link
                key={pillar.href}
                href={pillar.href}
                className={`group p-6 rounded-xl border transition-all ${
                  pillar.featured
                    ? "bg-[#4F7CFF]/5 border-[#4F7CFF]/30"
                    : "bg-[#111118] border-white/[0.06] hover:border-white/[0.12]"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className={`font-[family-name:var(--font-syne)] font-semibold text-lg ${
                    pillar.featured ? "text-[#4F7CFF]" : "text-[#F0F0F5] group-hover:text-[#4F7CFF]"
                  } transition-colors`}>
                    {pillar.title}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-[#55556A] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm text-[#8888A0] mb-3">{pillar.description}</p>
                <span className="text-xs text-[#55556A]">{pillar.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Free Tools CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-4">
            Try Our Free Link Building Tools
          </h2>
          <p className="text-[#8888A0] mb-8">
            Professional-grade SEO tools that usually cost $99+/month. Use them free, forever.
          </p>
          <Link
            href="/free-tools"
            className="inline-flex items-center gap-2 px-6 py-3 text-white bg-[#4F7CFF] rounded-lg hover:bg-[#3D6AEE] transition-colors"
          >
            Explore Free Tools
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
