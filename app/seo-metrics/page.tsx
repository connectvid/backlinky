import type { Metadata } from "next";
import Link from "next/link";
import { 
  BarChart3, 
  ArrowRight, 
  Target, 
  TrendingUp, 
  Shield, 
  Link2, 
  Globe, 
  Activity,
  Award,
  AlertTriangle,
  CheckCircle,
  Zap,
  PieChart,
  ExternalLink
} from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SEO Metrics Explained: The Complete Guide to Link Building Metrics in 2025",
  description: "Master SEO metrics with our comprehensive guide. Learn about Domain Rating, Domain Authority, Trust Flow, Spam Score, and 12+ metrics that impact your rankings.",
  openGraph: {
    title: "SEO Metrics Explained: The Complete Guide to Link Building Metrics in 2025",
    description: "Master SEO metrics with our comprehensive guide. Learn about Domain Rating, Domain Authority, Trust Flow, Spam Score, and 12+ metrics that impact your rankings.",
  },
};

const tableOfContents = [
  { id: "introduction", title: "Introduction to SEO Metrics" },
  { id: "domain-rating", title: "Domain Rating (DR) Explained" },
  { id: "da-vs-dr", title: "Domain Authority vs Domain Rating" },
  { id: "domain-authority", title: "Domain Authority (DA) Explained" },
  { id: "url-rating", title: "URL Rating (UR) Explained" },
  { id: "trust-flow", title: "Trust Flow Explained" },
  { id: "spam-score", title: "Spam Score Explained" },
  { id: "pagerank", title: "PageRank Explained" },
  { id: "referring-domains", title: "Referring Domains vs Backlinks" },
  { id: "link-equity", title: "Link Equity Explained" },
  { id: "organic-traffic", title: "Organic Traffic Value" },
  { id: "good-domain-rating", title: "What Is a Good Domain Rating?" },
  { id: "increase-da", title: "How to Increase Domain Authority" },
  { id: "backlink-analysis", title: "Backlink Profile Analysis" },
  { id: "link-building-roi", title: "Link Building ROI" },
  { id: "natural-profile", title: "Natural Link Profile" },
  { id: "authority-score", title: "Authority Score Explained" },
];

const spokeArticles = [
  { href: "/seo-metrics/what-is-domain-rating/", title: "What Is Domain Rating?", description: "Complete DR guide with benchmarks" },
  { href: "/seo-metrics/what-is-domain-authority/", title: "What Is Domain Authority?", description: "Moz DA explained in detail" },
  { href: "/seo-metrics/da-vs-dr/", title: "DA vs DR: Key Differences", description: "Which metric should you trust?" },
  { href: "/seo-metrics/what-is-url-rating/", title: "What Is URL Rating?", description: "Page-level authority metrics" },
  { href: "/seo-metrics/what-is-trust-flow/", title: "What Is Trust Flow?", description: "Majestic's trust metric explained" },
  { href: "/seo-metrics/what-is-spam-score/", title: "What Is Spam Score?", description: "Identify toxic backlinks" },
  { href: "/seo-metrics/what-is-pagerank/", title: "What Is PageRank?", description: "Google's original ranking factor" },
  { href: "/seo-metrics/what-is-link-equity/", title: "What Is Link Equity?", description: "How link juice flows" },
  { href: "/seo-metrics/referring-domains-vs-backlinks/", title: "Referring Domains vs Backlinks", description: "Which matters more?" },
  { href: "/seo-metrics/what-is-citation-flow/", title: "What Is Citation Flow?", description: "Majestic's volume metric" },
  { href: "/seo-metrics/what-is-authority-score/", title: "What Is Authority Score?", description: "Semrush's composite metric" },
  { href: "/seo-metrics/natural-link-profile/", title: "Natural Link Profile", description: "What makes a healthy profile" },
];

export default function SEOMetricsPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0F]">
      <Nav />
      
      <article className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 text-sm text-[#4F7CFF] mb-4">
              <BarChart3 className="w-4 h-4" />
              <span>SEO Metrics Hub</span>
              <span className="text-[#55556A]">·</span>
              <span className="text-[#55556A]">Updated January 2025</span>
            </div>
            <h1 className="font-[family-name:var(--font-syne)] font-bold text-3xl md:text-4xl lg:text-5xl text-[#F0F0F5] mb-6 leading-tight">
              SEO Metrics Explained: The Complete Guide to Link Building Metrics in 2025
            </h1>
            <p className="text-lg text-[#8888A0] leading-relaxed">
              Understanding SEO metrics is essential for effective link building. This comprehensive 
              guide breaks down 17+ key metrics — from Domain Rating to Trust Flow — so you can 
              evaluate backlink quality, track progress, and make data-driven decisions that improve 
              your rankings.
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
            
            {/* Introduction */}
            <section id="introduction" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Introduction to SEO Metrics
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                SEO metrics are quantitative measurements used to evaluate website authority, backlink 
                quality, and search engine optimization performance. These metrics help SEO professionals 
                identify valuable link opportunities, assess competitor strength, and track the impact 
                of link building campaigns on organic rankings.
              </p>
              <div className="p-6 rounded-xl bg-[#4F7CFF]/5 border border-[#4F7CFF]/20 my-6">
                <p className="text-[#F0F0F5] font-medium mb-2">The Simple Definition</p>
                <p className="text-[#8888A0]">
                  SEO metrics are numerical scores and measurements that indicate how authoritative, 
                  trustworthy, and valuable a website or webpage is in the eyes of search engines. 
                  They help predict ranking potential and guide link building strategy.
                </p>
              </div>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                At Backlinky, we analyze thousands of backlinks monthly using these metrics to identify 
                the highest-quality link opportunities for our clients. Understanding what each metric 
                measures — and what it doesn't — is crucial for building a sustainable SEO strategy 
                that delivers long-term results.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 my-6">
                {[
                  { title: "Authority Metrics", desc: "DR, DA, AS — measure overall site strength" },
                  { title: "Quality Metrics", desc: "Trust Flow, Spam Score — assess link quality" },
                  { title: "Volume Metrics", desc: "Referring domains, backlinks — measure link quantity" },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                    <h4 className="font-semibold text-[#F0F0F5] mb-2">{item.title}</h4>
                    <p className="text-sm text-[#8888A0]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Domain Rating */}
            <section id="domain-rating" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Domain Rating (DR) Explained
              </h2>
              
              <div className="p-6 rounded-xl bg-[#4F7CFF]/5 border border-[#4F7CFF]/20 mb-6">
                <p className="text-[#F0F0F5] font-medium mb-2">Featured Snippet Definition</p>
                <p className="text-[#8888A0]">
                  Domain Rating (DR) is an Ahrefs metric that shows the relative strength of a website's 
                  backlink profile on a logarithmic scale from 0 to 100. Higher scores indicate stronger 
                  backlink profiles and greater ranking potential in search results.
                </p>
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-3">
                How Domain Rating Is Calculated
              </h3>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Ahrefs calculates Domain Rating based on three main factors: the number of unique 
                referring domains, the DR of those referring domains, and how many unique domains 
                each referring domain links to. The calculation uses a logarithmic scale, meaning 
                it's much harder to increase from DR 70 to 80 than from DR 20 to 30.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                The key factor is that links from high-DR sites pass more "DR value" than links 
                from low-DR sites. Additionally, if a high-DR site links to many other sites, 
                the value it passes to each one is diluted.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-3">
                What's a Good Domain Rating?
              </h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 text-[#55556A] font-normal">DR Range</th>
                      <th className="text-left py-3 text-[#55556A] font-normal">Interpretation</th>
                      <th className="text-left py-3 text-[#55556A] font-normal">Typical Site Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { dr: "0-20", interp: "New or low-authority site", type: "Personal blogs, new startups" },
                      { dr: "20-40", interp: "Growing authority", type: "Small businesses, niche sites" },
                      { dr: "40-60", interp: "Established authority", type: "Mid-size companies, popular blogs" },
                      { dr: "60-80", interp: "High authority", type: "Major publications, large brands" },
                      { dr: "80-100", interp: "Extreme authority", type: "Global brands, news sites" },
                    ].map((row) => (
                      <tr key={row.dr} className="border-b border-white/[0.06]">
                        <td className="py-3 text-[#F0F0F5] font-medium">{row.dr}</td>
                        <td className="py-3 text-[#8888A0]">{row.interp}</td>
                        <td className="py-3 text-[#8888A0]">{row.type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-3">
                How to Improve Domain Rating
              </h3>
              <ul className="space-y-2 my-4">
                {[
                  "Build backlinks from higher-DR websites in your niche",
                  "Increase the number of unique referring domains (not just total links)",
                  "Focus on dofollow links rather than nofollow",
                  "Remove or disavow toxic backlinks that may be dragging you down",
                  "Create linkable assets that naturally attract backlinks",
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <CheckCircle className="w-4 h-4 text-[#22C55E] shrink-0 mt-1" />
                    {tip}
                  </li>
                ))}
              </ul>

              <p className="text-[#8888A0] leading-relaxed">
                <Link href="/seo-metrics/what-is-domain-rating/" className="text-[#4F7CFF] hover:underline">
                  Learn everything about Domain Rating →
                </Link>
              </p>
            </section>

            {/* DA vs DR */}
            <section id="da-vs-dr" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Domain Authority vs Domain Rating
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Domain Authority (DA) and Domain Rating (DR) are the two most commonly cited authority 
                metrics in SEO. While they attempt to measure similar things — website authority and 
                ranking potential — they come from different tools and use different calculation methods.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 text-[#55556A] font-normal">Feature</th>
                      <th className="text-left py-3 text-[#55556A] font-normal">Domain Authority (DA)</th>
                      <th className="text-left py-3 text-[#55556A] font-normal">Domain Rating (DR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feat: "Source", da: "Moz", dr: "Ahrefs" },
                      { feat: "Scale", da: "0-100", dr: "0-100" },
                      { feat: "Based On", da: "Linking root domains, total links, MozRank, MozTrust", dr: "Backlink profile strength only" },
                      { feat: "Update Frequency", da: "Monthly", dr: "Daily" },
                      { feat: "Best For", da: "Predicting ranking potential", dr: "Evaluating backlink strength" },
                      { feat: "Free Version", da: "Limited (10 queries/month)", dr: "Limited (site verification required)" },
                    ].map((row) => (
                      <tr key={row.feat} className="border-b border-white/[0.06]">
                        <td className="py-3 text-[#F0F0F5] font-medium">{row.feat}</td>
                        <td className="py-3 text-[#8888A0]">{row.da}</td>
                        <td className="py-3 text-[#8888A0]">{row.dr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                <strong className="text-[#F0F0F5]">Which should you use?</strong> Both metrics have value. 
                DR is better for evaluating pure backlink strength and is updated more frequently. 
                DA incorporates more factors including machine learning predictions of ranking potential. 
                Many SEO professionals use both — DR for link prospecting and DA for competitive analysis.
              </p>

              <p className="text-[#8888A0] leading-relaxed">
                <Link href="/seo-metrics/da-vs-dr/" className="text-[#4F7CFF] hover:underline">
                  See the detailed DA vs DR comparison →
                </Link>
              </p>
            </section>

            {/* Domain Authority */}
            <section id="domain-authority" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Domain Authority (DA) Explained
              </h2>
              
              <div className="p-6 rounded-xl bg-[#4F7CFF]/5 border border-[#4F7CFF]/20 mb-6">
                <p className="text-[#F0F0F5] font-medium mb-2">Featured Snippet Definition</p>
                <p className="text-[#8888A0]">
                  Domain Authority (DA) is a Moz-developed search engine ranking score that predicts 
                  how likely a website is to rank on search engine result pages. Scores range from 
                  1 to 100, with higher scores indicating greater ability to rank.
                </p>
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-3">
                How Domain Authority Is Calculated
              </h3>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Moz calculates DA using a machine learning model that evaluates multiple factors, 
                including linking root domains, total number of backlinks, MozRank (link popularity), 
                and MozTrust (link trustworthiness). The model is trained against actual Google search 
                results to predict ranking ability.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                DA 2.0, released in 2019, improved the model significantly. It now uses a neural network 
                and factors in spam detection, link manipulation patterns, and the quality of linking 
                domains more heavily than quantity.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-3">
                What's a Good Domain Authority?
              </h3>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Domain Authority is best used as a comparative metric rather than an absolute one. 
                A "good" DA depends entirely on your competitive landscape. If your competitors have 
                DA 30-40, then DA 35+ is good for your niche. If competitors have DA 70+, you'll need 
                to aim much higher.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-3">
                How to Improve Domain Authority
              </h3>
              <ul className="space-y-2 my-4">
                {[
                  "Earn links from high-DA websites in your industry",
                  "Remove toxic backlinks using Moz's Spam Score as a guide",
                  "Build a diverse backlink profile from various domain types",
                  "Create high-quality, shareable content that earns natural links",
                  "Focus on dofollow links from authoritative editorial sources",
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <CheckCircle className="w-4 h-4 text-[#22C55E] shrink-0 mt-1" />
                    {tip}
                  </li>
                ))}
              </ul>

              <p className="text-[#8888A0] leading-relaxed">
                <Link href="/seo-metrics/what-is-domain-authority/" className="text-[#4F7CFF] hover:underline">
                  Read the complete Domain Authority guide →
                </Link>
              </p>
            </section>

            {/* URL Rating */}
            <section id="url-rating" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                URL Rating (UR) Explained
              </h2>
              
              <div className="p-6 rounded-xl bg-[#4F7CFF]/5 border border-[#4F7CFF]/20 mb-6">
                <p className="text-[#F0F0F5] font-medium mb-2">Featured Snippet Definition</p>
                <p className="text-[#8888A0]">
                  URL Rating (UR) is an Ahrefs metric that measures the strength of a specific page's 
                  backlink profile on a scale from 0 to 100. Unlike Domain Rating which measures entire 
                  websites, UR evaluates individual URLs and their ranking potential.
                </p>
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-3">
                How URL Rating Is Calculated
              </h3>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                UR uses the same basic calculation as DR but applies it at the page level. It considers 
                both internal and external links pointing to a specific URL. Internal links from high-UR 
                pages on the same site can significantly boost a page's UR, which is why internal 
                linking strategy matters.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-3">
                UR vs DR: When to Use Each
              </h3>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-2 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#4F7CFF]" />
                    Use Domain Rating (DR) When:
                  </h4>
                  <ul className="text-sm text-[#8888A0] space-y-1">
                    <li>• Evaluating overall site authority</li>
                    <li>• Comparing competitors at domain level</li>
                    <li>• Prospecting for guest post opportunities</li>
                    <li>• Setting site-wide authority goals</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-2 flex items-center gap-2">
                    <Link2 className="w-4 h-4 text-[#4F7CFF]" />
                    Use URL Rating (UR) When:
                  </h4>
                  <ul className="text-sm text-[#8888A0] space-y-1">
                    <li>• Analyzing specific competitor pages</li>
                    <li>• Evaluating niche edit opportunities</li>
                    <li>• Planning internal link structure</li>
                    <li>• Assessing link building targets</li>
                  </ul>
                </div>
              </div>

              <p className="text-[#8888A0] leading-relaxed">
                <Link href="/seo-metrics/what-is-url-rating/" className="text-[#4F7CFF] hover:underline">
                  Learn more about URL Rating →
                </Link>
              </p>
            </section>

            {/* Trust Flow */}
            <section id="trust-flow" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Trust Flow Explained
              </h2>
              
              <div className="p-6 rounded-xl bg-[#4F7CFF]/5 border border-[#4F7CFF]/20 mb-6">
                <p className="text-[#F0F0F5] font-medium mb-2">Featured Snippet Definition</p>
                <p className="text-[#8888A0]">
                  Trust Flow is a Majestic metric that measures the quality of links pointing to a 
                  website based on proximity to trusted seed sites. Scores range from 0 to 100, with 
                  higher scores indicating links from more trustworthy, authoritative sources.
                </p>
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-3">
                How Trust Flow Is Calculated
              </h3>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Majestic's Trust Flow algorithm starts with a manually-reviewed set of trusted seed 
                sites (major universities, government sites, etc.). It then analyzes how many "hops" 
                away a site is from these trusted seeds. Sites directly linked to seed sites have 
                very high Trust Flow. Each hop away reduces the trust score.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                This approach is fundamentally different from DR or DA. While those metrics focus 
                on link volume and strength, Trust Flow emphasizes link quality and proximity to 
                genuinely authoritative sources.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-3">
                Trust Flow vs Citation Flow
              </h3>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Citation Flow measures link volume — the number of links pointing to a site. The 
                ratio between Trust Flow and Citation Flow (TF/CF ratio) is particularly valuable. 
                A healthy ratio is typically 0.5 or higher. Ratios below 0.4 may indicate manipulative 
                link building or low-quality link profiles.
              </p>

              <p className="text-[#8888A0] leading-relaxed">
                <Link href="/seo-metrics/what-is-trust-flow/" className="text-[#4F7CFF] hover:underline">
                  Deep dive into Trust Flow and Citation Flow →
                </Link>
              </p>
            </section>

            {/* Spam Score */}
            <section id="spam-score" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Spam Score Explained
              </h2>
              
              <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20 mb-6">
                <p className="text-[#F0F0F5] font-medium mb-2">Featured Snippet Definition</p>
                <p className="text-[#8888A0]">
                  Spam Score is a Moz metric that indicates the percentage of sites with similar 
                  features that have been penalized or banned by Google. Scores range from 0% to 
                  100%, with higher percentages suggesting greater similarity to known spam sites.
                </p>
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-3">
                How Spam Score Is Calculated
              </h3>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Moz analyzes 27 different spam flags to calculate Spam Score. These include low 
                number of pages, large site with few links, ratio of followed to nofollowed links, 
                thin content, external links in navigation, and many others. Sites with more flags 
                receive higher Spam Scores.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-3">
                Spam Score Risk Levels
              </h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 text-[#55556A] font-normal">Score</th>
                      <th className="text-left py-3 text-[#55556A] font-normal">Risk Level</th>
                      <th className="text-left py-3 text-[#55556A] font-normal">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { score: "0-30%", risk: "Low Risk", action: "Generally safe for link building" },
                      { score: "31-60%", risk: "Medium Risk", action: "Investigate further before linking" },
                      { score: "61-100%", risk: "High Risk", action: "Avoid or disavow these links" },
                    ].map((row) => (
                      <tr key={row.score} className="border-b border-white/[0.06]">
                        <td className="py-3 text-[#F0F0F5] font-medium">{row.score}</td>
                        <td className="py-3 text-[#8888A0]">{row.risk}</td>
                        <td className="py-3 text-[#8888A0]">{row.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-3">
                How to Reduce Spam Score
              </h3>
              <ul className="space-y-2 my-4">
                {[
                  "Disavow toxic backlinks pointing to your site",
                  "Remove spammy external links from your pages",
                  "Add more substantial, unique content to thin pages",
                  "Ensure proper balance of followed vs nofollowed links",
                  "Remove any links to known spam or low-quality sites",
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <CheckCircle className="w-4 h-4 text-[#22C55E] shrink-0 mt-1" />
                    {tip}
                  </li>
                ))}
              </ul>

              <p className="text-[#8888A0] leading-relaxed">
                <Link href="/seo-metrics/what-is-spam-score/" className="text-[#4F7CFF] hover:underline">
                  Complete guide to Spam Score →
                </Link>
              </p>
            </section>

            {/* PageRank */}
            <section id="pagerank" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                PageRank Explained
              </h2>
              
              <div className="p-6 rounded-xl bg-[#4F7CFF]/5 border border-[#4F7CFF]/20 mb-6">
                <p className="text-[#F0F0F5] font-medium mb-2">Featured Snippet Definition</p>
                <p className="text-[#8888A0]">
                  PageRank is Google's original algorithm for ranking web pages based on the quantity 
                  and quality of links pointing to them. While Google no longer publicly displays 
                  PageRank scores, the underlying concept remains central to how Google evaluates 
                  link authority.
                </p>
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-3">
                How PageRank Works
              </h3>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                PageRank operates on the principle that links are votes. A link from page A to page 
                B is interpreted as a vote by page A for page B. However, not all votes are equal. 
                Votes from pages that are themselves important (have high PageRank) carry more weight.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                The algorithm also uses a damping factor (typically 0.85) that models the probability 
                that a random web surfer will continue clicking links versus jumping to a random page. 
                This creates the "random surfer model" that underlies PageRank calculations.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-3">
                Is PageRank Still Used Today?
              </h3>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Yes. While Google discontinued the public PageRank toolbar in 2016, former Google 
                employees have confirmed that PageRank (or an evolved version of it) is still used 
                in Google's ranking algorithm. Modern PageRank likely incorporates additional factors 
                like link context, anchor text, and user behavior signals.
              </p>

              <p className="text-[#8888A0] leading-relaxed">
                <Link href="/seo-metrics/what-is-pagerank/" className="text-[#4F7CFF] hover:underline">
                  Learn the history and current status of PageRank →
                </Link>
              </p>
            </section>

            {/* Referring Domains vs Backlinks */}
            <section id="referring-domains" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Referring Domains vs Backlinks
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Understanding the difference between referring domains and backlinks is fundamental 
                to SEO. While these terms are sometimes used interchangeably, they measure different 
                things — and the distinction matters for your link building strategy.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-2 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#4F7CFF]" />
                    Referring Domains
                  </h4>
                  <p className="text-sm text-[#8888A0] mb-2">
                    The number of unique websites that link to your site. If example.com links to 
                    you 10 times, that's 1 referring domain.
                  </p>
                  <p className="text-sm text-[#22C55E]">More important for SEO authority</p>
                </div>
                <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                  <h4 className="font-semibold text-[#F0F0F5] mb-2 flex items-center gap-2">
                    <Link2 className="w-4 h-4 text-[#4F7CFF]" />
                    Backlinks
                  </h4>
                  <p className="text-sm text-[#8888A0] mb-2">
                    The total number of individual links pointing to your site. If example.com 
                    links to you 10 times, that's 10 backlinks.
                  </p>
                  <p className="text-sm text-[#8888A0]">Less important than unique domains</p>
                </div>
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-3">
                Why Referring Domains Matter More
              </h3>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Google's algorithm places significantly more weight on the number of unique referring 
                domains than on total backlink count. Ten links from one domain don't carry ten times 
                the value — they might only carry 2-3x the value of a single link. Diversity of 
                linking domains signals broader endorsement and trust.
              </p>

              <p className="text-[#8888A0] leading-relaxed">
                <Link href="/seo-metrics/referring-domains-vs-backlinks/" className="text-[#4F7CFF] hover:underline">
                  Detailed comparison with data →
                </Link>
              </p>
            </section>

            {/* Link Equity */}
            <section id="link-equity" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Link Equity Explained
              </h2>
              
              <div className="p-6 rounded-xl bg-[#4F7CFF]/5 border border-[#4F7CFF]/20 mb-6">
                <p className="text-[#F0F0F5] font-medium mb-2">Featured Snippet Definition</p>
                <p className="text-[#8888A0]">
                  Link equity (also called "link juice") is the value and authority passed from one 
                  page to another through hyperlinks. Pages with more equity to pass can boost the 
                  rankings of pages they link to, while nofollow links and certain technical factors 
                  can prevent equity from flowing.
                </p>
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-3">
                How Link Equity Flows
              </h3>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                When a page links to another page, it passes a portion of its link equity. The amount 
                passed depends on several factors: the linking page's authority, the number of other 
                links on the page (equity is divided among all links), whether the link is followed 
                or nofollowed, and the relevance between the pages.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-3">
                Factors That Affect Link Equity
              </h3>
              <ul className="space-y-2 my-4">
                {[
                  "Dofollow vs Nofollow — dofollow links pass equity, nofollow links generally don't",
                  "Link position — links in main content pass more equity than footer/sidebar links",
                  "Link relevance — topically relevant links pass more value",
                  "Linking page authority — higher authority pages pass more equity",
                  "Number of outbound links — equity is divided among all links on the page",
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <Zap className="w-4 h-4 text-[#4F7CFF] shrink-0 mt-1" />
                    {tip}
                  </li>
                ))}
              </ul>

              <p className="text-[#8888A0] leading-relaxed">
                <Link href="/seo-metrics/what-is-link-equity/" className="text-[#4F7CFF] hover:underline">
                  Complete guide to maximizing link equity →
                </Link>
              </p>
            </section>

            {/* Organic Traffic Value */}
            <section id="organic-traffic" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Organic Traffic Value
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-4">
                While not a traditional link metric, organic traffic value is one of the most important 
                indicators of backlink quality. Sites with genuine organic traffic are more likely to 
                be legitimate, trusted sources — exactly the kind of links Google values most.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-3">
                Why Traffic Matters for Link Quality
              </h3>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Google doesn't just look at links in isolation — it evaluates whether the linking 
                site is actually used by real people. A link from a DR 60 site with zero traffic 
                is often less valuable than a link from a DR 30 site with 10,000 monthly visitors. 
                Traffic indicates that Google already trusts and ranks the site.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-3">
                Traffic Benchmarks by Niche
              </h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 text-[#55556A] font-normal">Niche</th>
                      <th className="text-left py-3 text-[#55556A] font-normal">Good Monthly Traffic</th>
                      <th className="text-left py-3 text-[#55556A] font-normal">Excellent Traffic</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { niche: "B2B SaaS", good: "1,000+", excellent: "10,000+" },
                      { niche: "E-commerce", good: "5,000+", excellent: "50,000+" },
                      { niche: "News/Media", good: "50,000+", excellent: "500,000+" },
                      { niche: "Local Business", good: "500+", excellent: "5,000+" },
                    ].map((row) => (
                      <tr key={row.niche} className="border-b border-white/[0.06]">
                        <td className="py-3 text-[#F0F0F5] font-medium">{row.niche}</td>
                        <td className="py-3 text-[#8888A0]">{row.good}</td>
                        <td className="py-3 text-[#22C55E]">{row.excellent}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* What Is a Good Domain Rating */}
            <section id="good-domain-rating" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                What Is a Good Domain Rating?
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-4">
                "Good" Domain Rating is entirely relative to your competitive landscape. A DR 30 
                might be excellent in a niche where competitors have DR 15-25, but poor in a space 
                dominated by DR 70+ sites. The key is understanding where you stand relative to 
                direct competitors, not comparing yourself to global giants like Amazon or Wikipedia.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-3">
                DR Benchmarks by Business Stage
              </h3>
              <div className="space-y-4 my-6">
                {[
                  { stage: "Startup (0-2 years)", target: "DR 20-35", timeline: "6-12 months" },
                  { stage: "Growing Business (2-5 years)", target: "DR 35-55", timeline: "12-24 months" },
                  { stage: "Established Company (5+ years)", target: "DR 55-75", timeline: "24-36 months" },
                  { stage: "Market Leader", target: "DR 75+", timeline: "3+ years" },
                ].map((item) => (
                  <div key={item.stage} className="flex items-center gap-4 p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                    <div className="w-32 shrink-0">
                      <span className="font-medium text-[#F0F0F5]">{item.stage}</span>
                    </div>
                    <div className="flex-1">
                      <span className="text-[#4F7CFF] font-semibold">{item.target}</span>
                    </div>
                    <div className="text-sm text-[#8888A0]">{item.timeline}</div>
                  </div>
                ))}
              </div>

              <p className="text-[#8888A0] leading-relaxed mb-4">
                <strong className="text-[#F0F0F5]">Important:</strong> DR should never be your only 
                metric. A site with DR 25 but high relevance, good traffic, and strong content can 
                provide more value than a DR 60 site in an unrelated niche with no traffic.
              </p>
            </section>

            {/* How to Increase Domain Authority */}
            <section id="increase-da" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                How to Increase Domain Authority
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Increasing Domain Authority requires a consistent, long-term approach to building 
                high-quality backlinks. Unlike some quick-win SEO tactics, DA growth comes from 
                sustained effort and genuine relationship building.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-3">
                Proven Strategies to Increase DA
              </h3>
              <div className="space-y-4 my-6">
                {[
                  { 
                    title: "Create Linkable Assets", 
                    desc: "Develop comprehensive guides, original research, free tools, and calculators that naturally attract links from journalists and bloggers.",
                    icon: Target
                  },
                  { 
                    title: "Guest Post on Authority Sites", 
                    desc: "Write high-quality content for reputable sites in your niche. Focus on sites with DA 40+ for maximum impact.",
                    icon: Globe
                  },
                  { 
                    title: "Leverage Digital PR", 
                    desc: "Use HARO and similar platforms to earn links from news sites and major publications. These carry significant authority.",
                    icon: Award
                  },
                  { 
                    title: "Build Resource Page Links", 
                    desc: "Get your best content listed on curated resource pages in your industry. These pages exist to link out to valuable resources.",
                    icon: Link2
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                    <item.icon className="w-6 h-6 text-[#4F7CFF] shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#F0F0F5] mb-1">{item.title}</h4>
                      <p className="text-sm text-[#8888A0]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-3">
                Timeline Expectations
              </h3>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Realistic DA growth takes time. Expect to see meaningful movement (5-10 points) 
                within 3-6 months of consistent link building. Larger jumps (15-20+ points) typically 
                require 12-18 months of sustained effort. The logarithmic nature of DA means gains 
                become progressively harder as your score increases.
              </p>
            </section>

            {/* Backlink Profile Analysis */}
            <section id="backlink-analysis" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Backlink Profile Analysis
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Regular backlink profile analysis is essential for maintaining SEO health and 
                identifying growth opportunities. A comprehensive analysis examines the quantity, 
                quality, and diversity of your backlinks.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-3">
                Key Elements of Backlink Analysis
              </h3>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                {[
                  { title: "Total Referring Domains", desc: "Count of unique sites linking to you" },
                  { title: "Domain Authority Distribution", desc: "Breakdown of links by DA/DR ranges" },
                  { title: "Anchor Text Distribution", desc: "Analysis of link text patterns" },
                  { title: "Link Velocity", desc: "Rate of new link acquisition" },
                  { title: "Link Types", desc: "Editorial, directory, comment, etc." },
                  { title: "Geographic Distribution", desc: "Countries of linking sites" },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                    <h4 className="font-semibold text-[#F0F0F5] mb-1">{item.title}</h4>
                    <p className="text-sm text-[#8888A0]">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-3">
                Red Flags to Watch For
              </h3>
              <ul className="space-y-2 my-4">
                {[
                  "Sudden spike in low-quality links (potential negative SEO)",
                  "Over-optimized anchor text (exact match keywords dominating)",
                  "High percentage of links from same C-class IPs",
                  "Links from foreign language sites in unrelated niches",
                  "Excessive sitewide links (footers, sidebars)",
                ].map((flag, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                    {flag}
                  </li>
                ))}
              </ul>

              {/* Tool CTA */}
              <div className="p-6 rounded-xl bg-[#4F7CFF]/10 border border-[#4F7CFF]/30 my-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#4F7CFF]/20">
                    <PieChart className="w-6 h-6 text-[#4F7CFF]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#F0F0F5] mb-2">Analyze Your Anchor Text Distribution</h4>
                    <p className="text-sm text-[#8888A0] mb-4">
                      Use our free Backlink Anchor Text Analyzer to check your anchor text ratios 
                      and identify potential over-optimization issues.
                    </p>
                    <Link 
                      href="/free-tools/backlink-anchor-text-analyzer/" 
                      className="inline-flex items-center gap-2 text-[#4F7CFF] hover:underline"
                    >
                      Try the Free Analyzer
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Link Building ROI */}
            <section id="link-building-roi" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Link Building ROI
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Measuring the return on investment from link building helps justify budget allocation 
                and optimize strategy. While direct attribution can be challenging, several key 
                metrics can help you understand the value generated.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-3">
                Key ROI Metrics to Track
              </h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 text-[#55556A] font-normal">Metric</th>
                      <th className="text-left py-3 text-[#55556A] font-normal">How to Calculate</th>
                      <th className="text-left py-3 text-[#55556A] font-normal">Why It Matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { metric: "Cost Per Link", calc: "Total spend ÷ Links acquired", why: "Benchmarks efficiency" },
                      { metric: "Organic Traffic Value", calc: "Traffic increase × CPC", why: "Shows monetary value" },
                      { metric: "Ranking Improvements", calc: "Track target keywords", why: "Direct SEO impact" },
                      { metric: "Revenue Attribution", calc: "Conversion value from organic", why: "Business impact" },
                    ].map((row) => (
                      <tr key={row.metric} className="border-b border-white/[0.06]">
                        <td className="py-3 text-[#F0F0F5] font-medium">{row.metric}</td>
                        <td className="py-3 text-[#8888A0]">{row.calc}</td>
                        <td className="py-3 text-[#8888A0]">{row.why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-3">
                Industry Benchmarks
              </h3>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Quality white-hat link building typically costs $300-$800 per link, depending on 
                DA/DR requirements and niche competitiveness. Guest posts on DA 40+ sites generally 
                range from $200-$500, while DR 60+ editorial links from major publications can cost 
                $1,000+ or require significant PR effort.
              </p>

              {/* ROI Calculator CTA */}
              <div className="p-6 rounded-xl bg-[#4F7CFF]/10 border border-[#4F7CFF]/30 my-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#4F7CFF]/20">
                    <BarChart3 className="w-6 h-6 text-[#4F7CFF]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#F0F0F5] mb-2">Calculate Your Link Building ROI</h4>
                    <p className="text-sm text-[#8888A0] mb-4">
                      Use our free Link Building ROI Calculator to estimate the potential return 
                      on your link building investment based on your metrics.
                    </p>
                    <Link 
                      href="/free-tools/link-building-roi-calculator/" 
                      className="inline-flex items-center gap-2 text-[#4F7CFF] hover:underline"
                    >
                      Use the ROI Calculator
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Natural Link Profile */}
            <section id="natural-profile" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Natural Link Profile
              </h2>
              
              <div className="p-6 rounded-xl bg-[#4F7CFF]/5 border border-[#4F7CFF]/20 mb-6">
                <p className="text-[#F0F0F5] font-medium mb-2">Featured Snippet Definition</p>
                <p className="text-[#8888A0]">
                  A natural link profile is a diverse, organic collection of backlinks that reflects 
                  genuine editorial endorsements rather than manipulated link building. It features 
                  varied anchor text, links from different domain types, and a mix of followed and 
                  nofollowed links acquired over time.
                </p>
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-3">
                Characteristics of a Natural Link Profile
              </h3>
              <div className="space-y-4 my-6">
                {[
                  { 
                    title: "Diverse Anchor Text", 
                    desc: "Mix of branded anchors (50%+), natural phrases, URLs, and occasional exact match keywords. No single anchor dominates."
                  },
                  { 
                    title: "Varied Link Sources", 
                    desc: "Links from blogs, news sites, directories, social media, forums, and industry publications — not just one type."
                  },
                  { 
                    title: "Gradual Acquisition", 
                    desc: "Links build up steadily over time with natural fluctuations, not sudden spikes followed by silence."
                  },
                  { 
                    title: "Relevant Context", 
                    desc: "Links appear in contextually relevant content, not in unrelated sidebars or footers."
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                    <CheckCircle className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-[#F0F0F5] mb-1">{item.title}</h4>
                      <p className="text-sm text-[#8888A0]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-3">
                Anchor Text Distribution Targets
              </h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 text-[#55556A] font-normal">Anchor Type</th>
                      <th className="text-left py-3 text-[#55556A] font-normal">Target %</th>
                      <th className="text-left py-3 text-[#55556A] font-normal">Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { type: "Branded", target: "40-60%", example: "Backlinky", "ex2": "Backlinky.io" },
                      { type: "Natural/Generic", target: "20-30%", example: "click here", "ex2": "read more" },
                      { type: "URL", target: "10-20%", example: "https://backlinky.io", "ex2": "backlinky.io/blog" },
                      { type: "Exact Match", target: "1-5%", example: "link building agency", "ex2": "SEO services" },
                      { type: "Partial Match", target: "5-10%", example: "our link building guide", "ex2": "Backlinky SEO tools" },
                    ].map((row) => (
                      <tr key={row.type} className="border-b border-white/[0.06]">
                        <td className="py-3 text-[#F0F0F5] font-medium">{row.type}</td>
                        <td className="py-3 text-[#8888A0]">{row.target}</td>
                        <td className="py-3 text-[#8888A0]">{row.example}, {row.ex2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[#8888A0] leading-relaxed">
                <Link href="/seo-metrics/natural-link-profile/" className="text-[#4F7CFF] hover:underline">
                  Learn how to build and maintain a natural link profile →
                </Link>
              </p>
            </section>

            {/* Authority Score */}
            <section id="authority-score" className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                Authority Score Explained
              </h2>
              
              <div className="p-6 rounded-xl bg-[#4F7CFF]/5 border border-[#4F7CFF]/20 mb-6">
                <p className="text-[#F0F0F5] font-medium mb-2">Featured Snippet Definition</p>
                <p className="text-[#8888A0]">
                  Authority Score is Semrush's composite metric that measures overall domain quality 
                  and SEO performance on a scale from 0 to 100. It combines backlink data, organic 
                  search traffic, and spam factors to provide a comprehensive authority measurement.
                </p>
              </div>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-3">
                How Authority Score Is Calculated
              </h3>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Semrush calculates Authority Score using a weighted algorithm that considers: the 
                number and quality of referring domains, the number of backlinks, organic search 
                traffic estimates, and a spam score component that penalizes manipulative link patterns. 
                The formula emphasizes link quality over quantity.
              </p>

              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-3">
                Authority Score vs Other Metrics
              </h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 text-[#55556A] font-normal">Metric</th>
                      <th className="text-left py-3 text-[#55556A] font-normal">Primary Factor</th>
                      <th className="text-left py-3 text-[#55556A] font-normal">Unique Feature</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { metric: "Authority Score", factor: "Backlinks + Traffic", unique: "Incorporates organic traffic data" },
                      { metric: "Domain Rating", factor: "Backlinks only", unique: "Pure backlink strength measurement" },
                      { metric: "Domain Authority", factor: "Backlinks + ML prediction", unique: "Machine learning ranking prediction" },
                    ].map((row) => (
                      <tr key={row.metric} className="border-b border-white/[0.06]">
                        <td className="py-3 text-[#F0F0F5] font-medium">{row.metric}</td>
                        <td className="py-3 text-[#8888A0]">{row.factor}</td>
                        <td className="py-3 text-[#8888A0]">{row.unique}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[#8888A0] leading-relaxed">
                <Link href="/seo-metrics/what-is-authority-score/" className="text-[#4F7CFF] hover:underline">
                  Complete guide to Semrush Authority Score →
                </Link>
              </p>
            </section>

            {/* Metric Dashboard Concept */}
            <section className="mb-16">
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-4">
                SEO Metrics Dashboard: What to Track
              </h2>
              
              <p className="text-[#8888A0] leading-relaxed mb-4">
                An effective SEO metrics dashboard combines multiple metrics to give you a complete 
                picture of your link building performance and website authority. Here's what every 
                link builder should monitor:
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-6">
                {[
                  { 
                    title: "Authority Metrics", 
                    items: ["Domain Rating (Ahrefs)", "Domain Authority (Moz)", "Authority Score (Semrush)"]
                  },
                  { 
                    title: "Volume Metrics", 
                    items: ["Referring Domains", "Total Backlinks", "New/Lost Links"]
                  },
                  { 
                    title: "Quality Metrics", 
                    items: ["Trust Flow (Majestic)", "Spam Score (Moz)", "Organic Traffic"]
                  },
                ].map((col) => (
                  <div key={col.title} className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                    <h4 className="font-semibold text-[#F0F0F5] mb-3">{col.title}</h4>
                    <ul className="space-y-2">
                      {col.items.map((item, i) => (
                        <li key={i} className="text-sm text-[#8888A0] flex items-center gap-2">
                          <Activity className="w-3 h-3 text-[#4F7CFF]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <p className="text-[#8888A0] leading-relaxed">
                Track these metrics monthly to identify trends, spot issues early, and demonstrate 
                the value of your link building efforts to stakeholders.
              </p>
            </section>

            {/* Final CTA */}
            <section className="mb-16">
              <div className="p-8 rounded-2xl bg-gradient-to-r from-[#4F7CFF]/20 to-[#4F7CFF]/5 border border-[#4F7CFF]/30 text-center">
                <h3 className="font-[family-name:var(--font-syne)] font-bold text-xl text-[#F0F0F5] mb-2">
                  Ready to Improve Your SEO Metrics?
                </h3>
                <p className="text-[#8888A0] mb-6">
                  Backlinky specializes in building high-quality backlinks that improve DR, DA, and 
                  all the metrics that matter. Get DR 40+ links from real sites with organic traffic.
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
              Deep Dive: Individual Metric Guides
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {spokeArticles.map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="group p-4 rounded-lg bg-[#111118] border border-white/[0.06] hover:border-[#4F7CFF]/30 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium text-[#F0F0F5] group-hover:text-[#4F7CFF] transition-colors mb-1">
                        {article.title}
                      </h4>
                      <p className="text-sm text-[#8888A0]">{article.description}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-[#55556A] group-hover:text-[#4F7CFF] shrink-0 ml-2" />
                  </div>
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
