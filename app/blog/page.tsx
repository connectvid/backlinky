"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";
import { BookOpen, ArrowRight, ExternalLink, Search, Filter, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// All articles from across the site
const allArticles = [
  // Link Building Guide
  { title: "What Are Backlinks?", href: "/link-building-guide/what-are-backlinks/", description: "The complete beginner's guide to understanding backlinks and their role in SEO.", category: "Guide", readTime: "12 min read", date: "2025-01-15" },
  { title: "Types of Backlinks", href: "/link-building-guide/types-of-backlinks/", description: "Explore different backlink types and which ones drive the most SEO value.", category: "Guide", readTime: "15 min read", date: "2025-01-18" },
  { title: "Dofollow vs Nofollow Links", href: "/link-building-guide/dofollow-vs-nofollow/", description: "Understand the difference between followed and nofollowed links.", category: "Guide", readTime: "10 min read", date: "2025-01-20" },
  { title: "Link Building for New Websites", href: "/link-building-guide/link-building-for-new-websites/", description: "How to build your first backlinks when you're starting from zero.", category: "Guide", readTime: "18 min read", date: "2025-01-22" },
  { title: "How Long Does Link Building Take?", href: "/link-building-guide/how-long-does-link-building-take/", description: "Realistic timelines for seeing results from your link building efforts.", category: "Guide", readTime: "8 min read", date: "2025-01-25" },
  { title: "Link Building Cost Guide", href: "/link-building-guide/link-building-cost/", description: "Pricing breakdowns for DIY, agencies, and everything in between.", category: "Guide", readTime: "14 min read", date: "2025-01-28" },
  { title: "Link Building Metrics Explained", href: "/link-building-guide/link-building-metrics/", description: "Understanding DA, DR, traffic value, and other key link metrics.", category: "Guide", readTime: "16 min read", date: "2025-02-01" },
  { title: "White Hat vs Black Hat Link Building", href: "/link-building-guide/white-hat-vs-black-hat-link-building/", description: "The difference between risky and sustainable link building practices.", category: "Guide", readTime: "12 min read", date: "2025-02-03" },
  { title: "Google Penguin Update Guide", href: "/link-building-guide/google-penguin-update/", description: "How Penguin changed link building and how to stay compliant.", category: "Guide", readTime: "20 min read", date: "2025-02-05" },
  { title: "Toxic Backlinks Guide", href: "/link-building-guide/toxic-backlinks/", description: "Identify, remove, and disavow harmful backlinks hurting your SEO.", category: "Guide", readTime: "14 min read", date: "2025-02-08" },
  { title: "How to Disavow Links", href: "/link-building-guide/disavow-links/", description: "Step-by-step guide to using Google's Disavow Tool correctly.", category: "Guide", readTime: "10 min read", date: "2025-02-10" },
  { title: "Anchor Text Guide", href: "/link-building-guide/anchor-text-guide/", description: "Optimize your anchor text distribution for maximum SEO benefit.", category: "Guide", readTime: "13 min read", date: "2025-02-12" },
  { title: "Link Velocity Explained", href: "/link-building-guide/link-velocity/", description: "Understanding the speed of link acquisition and its impact on SEO.", category: "Guide", readTime: "11 min read", date: "2025-02-14" },
  { title: "Link Building Outreach Guide", href: "/link-building-guide/link-building-outreach-guide/", description: "Master the art of email outreach for link building success.", category: "Guide", readTime: "22 min read", date: "2025-02-16" },
  { title: "Internal Linking for SEO", href: "/link-building-guide/internal-linking-for-seo/", description: "Maximize your site's link equity with strategic internal linking.", category: "Guide", readTime: "15 min read", date: "2025-02-18" },
  { title: "Google Link Spam Update", href: "/link-building-guide/google-link-spam-update/", description: "What changed in 2024-2025 and how to stay compliant.", category: "Guide", readTime: "18 min read", date: "2025-02-20" },
  { title: "Link Building Statistics 2025", href: "/link-building-guide/link-building-statistics/", description: "50+ data points you need to know about link building.", category: "Guide", readTime: "25 min read", date: "2025-02-22" },
  
  // Link Building Strategies
  { title: "Guest Posting Guide", href: "/link-building-strategies/guest-posting-guide/", description: "How to land guest posts on high-authority sites in your niche.", category: "Strategy", readTime: "20 min read", date: "2025-01-10" },
  { title: "Broken Link Building", href: "/link-building-strategies/broken-link-building/", description: "Turn broken links into opportunities with this proven tactic.", category: "Strategy", readTime: "16 min read", date: "2025-01-12" },
  { title: "Skyscraper Technique", href: "/link-building-strategies/skyscraper-technique/", description: "Brian Dean's famous technique for earning high-quality backlinks.", category: "Strategy", readTime: "14 min read", date: "2025-01-14" },
  { title: "Digital PR Link Building", href: "/link-building-strategies/digital-pr-link-building/", description: "Earn media coverage and backlinks with newsworthy campaigns.", category: "Strategy", readTime: "18 min read", date: "2025-01-16" },
  { title: "Resource Page Link Building", href: "/link-building-strategies/resource-page-link-building/", description: "Get listed on curated resource pages in your industry.", category: "Strategy", readTime: "12 min read", date: "2025-01-19" },
  { title: "HARO Link Building", href: "/link-building-strategies/haro-link-building/", description: "Respond to journalist queries and earn authoritative backlinks.", category: "Strategy", readTime: "15 min read", date: "2025-01-21" },
  { title: "Niche Edits Guide", href: "/link-building-strategies/niche-edits-guide/", description: "Add links to existing content for faster SEO results.", category: "Strategy", readTime: "13 min read", date: "2025-01-24" },
  { title: "Link Reclamation", href: "/link-building-strategies/link-reclamation/", description: "Reclaim lost links and unlinked brand mentions.", category: "Strategy", readTime: "11 min read", date: "2025-01-26" },
  { title: "Skyscraper Technique 2.0", href: "/link-building-strategies/skyscraper-technique/", description: "Updated methods for the classic link building approach.", category: "Strategy", readTime: "14 min read", date: "2025-01-29" },
  { title: "Competitor Backlink Analysis", href: "/link-building-strategies/competitor-backlink-analysis/", description: "Reverse-engineer your competitors' link building success.", category: "Strategy", readTime: "17 min read", date: "2025-01-31" },
  { title: "Linkable Assets", href: "/link-building-strategies/linkable-assets/", description: "Create content that naturally attracts backlinks.", category: "Strategy", readTime: "19 min read", date: "2025-02-02" },
  { title: "Podcast Link Building", href: "/link-building-strategies/podcast-link-building/", description: "Leverage podcast appearances for quality backlinks.", category: "Strategy", readTime: "12 min read", date: "2025-02-04" },
  { title: "Scholarship Link Building", href: "/link-building-strategies/scholarship-link-building/", description: "Use scholarships to earn .edu backlinks.", category: "Strategy", readTime: "10 min read", date: "2025-02-06" },
  { title: "Wikipedia Link Building", href: "/link-building-strategies/wikipedia-link-building/", description: "Earn links from one of the web's most authoritative sites.", category: "Strategy", readTime: "13 min read", date: "2025-02-09" },
  
  // Link Building Tools
  { title: "Ahrefs Review", href: "/link-building-tools/ahrefs-review/", description: "Comprehensive review of the industry's favorite SEO tool.", category: "Tools", readTime: "15 min read", date: "2025-01-08" },
  { title: "SEMrush Review", href: "/link-building-tools/semrush-review/", description: "Full analysis of SEMrush's link building capabilities.", category: "Tools", readTime: "14 min read", date: "2025-01-09" },
  { title: "Ahrefs vs SEMrush", href: "/link-building-tools/ahrefs-vs-semrush/", description: "Head-to-head comparison of the two SEO giants.", category: "Tools", readTime: "18 min read", date: "2025-01-11" },
  { title: "Moz Pro Review", href: "/link-building-tools/moz-pro-review/", description: "Is Moz still relevant for modern link building?", category: "Tools", readTime: "12 min read", date: "2025-01-13" },
  { title: "Majestic SEO Review", href: "/link-building-tools/majestic-seo-review/", description: "Deep dive into Majestic's Trust Flow and Citation Flow metrics.", category: "Tools", readTime: "11 min read", date: "2025-01-15" },
  { title: "BuzzStream Review", href: "/link-building-tools/buzzstream-review/", description: "Email outreach and relationship management for link builders.", category: "Tools", readTime: "13 min read", date: "2025-01-17" },
  { title: "Pitchbox Review", href: "/link-building-tools/pitchbox-review/", description: "Advanced outreach automation for link building at scale.", category: "Tools", readTime: "14 min read", date: "2025-01-20" },
  { title: "Hunter.io Review", href: "/link-building-tools/hunter-review/", description: "Find verified email addresses for your outreach campaigns.", category: "Tools", readTime: "10 min read", date: "2025-01-22" },
  { title: "Screaming Frog Review", href: "/link-building-tools/screaming-frog-review/", description: "Technical SEO and link auditing with this powerful crawler.", category: "Tools", readTime: "16 min read", date: "2025-01-25" },
  { title: "Google Search Console for Link Building", href: "/link-building-tools/google-search-console-for-link-building/", description: "Free link data and insights from Google.", category: "Tools", readTime: "12 min read", date: "2025-01-27" },
  { title: "Free Backlink Checkers", href: "/link-building-tools/free-backlink-checkers/", description: "Best free tools for checking backlinks without a paid subscription.", category: "Tools", readTime: "9 min read", date: "2025-01-30" },
  { title: "Link Building CRM", href: "/link-building-tools/link-building-crm/", description: "Manage your outreach pipeline like a sales professional.", category: "Tools", readTime: "14 min read", date: "2025-02-01" },
  
  // Link Building by Niche
  { title: "Link Building for SaaS", href: "/link-building-for-niche/link-building-for-saas/", description: "Specialized strategies for software companies.", category: "Niche", readTime: "18 min read", date: "2025-01-05" },
  { title: "Link Building for E-commerce", href: "/link-building-for-niche/link-building-for-ecommerce/", description: "Build links that drive product sales and rankings.", category: "Niche", readTime: "16 min read", date: "2025-01-07" },
  { title: "B2B Link Building", href: "/link-building-for-niche/b2b-link-building/", description: "Strategies for business-to-business companies.", category: "Niche", readTime: "17 min read", date: "2025-01-09" },
  { title: "Local Link Building", href: "/link-building-for-niche/local-link-building/", description: "Build local citations and links for better local SEO.", category: "Niche", readTime: "14 min read", date: "2025-01-12" },
  { title: "Link Building for Law Firms", href: "/link-building-for-niche/link-building-for-law-firms/", description: "Navigate the competitive legal SEO landscape.", category: "Niche", readTime: "19 min read", date: "2025-01-14" },
  { title: "Link Building for Real Estate", href: "/link-building-for-niche/link-building-for-real-estate/", description: "Earn links in the highly competitive real estate market.", category: "Niche", readTime: "15 min read", date: "2025-01-16" },
  { title: "Link Building for Healthcare", href: "/link-building-for-niche/link-building-for-healthcare/", description: "Build authority in the sensitive medical space.", category: "Niche", readTime: "18 min read", date: "2025-01-19" },
  { title: "Link Building for Startups", href: "/link-building-for-niche/link-building-for-startups/", description: "Bootstrap your way to quality backlinks on a budget.", category: "Niche", readTime: "13 min read", date: "2025-01-21" },
  { title: "Link Building for Agencies", href: "/link-building-for-niche/link-building-for-agencies/", description: "Scale link building across multiple client accounts.", category: "Niche", readTime: "16 min read", date: "2025-01-24" },
  { title: "Link Building for Blogs", href: "/link-building-for-niche/link-building-for-blogs/", description: "Grow your blog's authority with strategic backlinks.", category: "Niche", readTime: "14 min read", date: "2025-01-26" },
  { title: "White Label Link Building", href: "/link-building-for-niche/white-label-link-building/", description: "Outsource link building for your agency clients.", category: "Niche", readTime: "12 min read", date: "2025-01-29" },
  
  // Best Link Building Agencies
  { title: "Backlinky Review", href: "/best-link-building-agencies/backlinky-review/", description: "In-depth review of Backlinky's link building services.", category: "Agencies", readTime: "12 min read", date: "2025-01-03" },
  { title: "Fat Joe Review", href: "/best-link-building-agencies/fatjoe-review/", description: "Analysis of Fat Joe's link building and content services.", category: "Agencies", readTime: "11 min read", date: "2025-01-04" },
  { title: "Rhino Rank Review", href: "/best-link-building-agencies/rhino-rank-review/", description: "Review of Rhino Rank's niche edit services.", category: "Agencies", readTime: "10 min read", date: "2025-01-06" },
  { title: "LinkBuilder.io Review", href: "/best-link-building-agencies/linkbuilder-io-review/", description: "Comprehensive review of LinkBuilder.io agency.", category: "Agencies", readTime: "13 min read", date: "2025-01-08" },
  { title: "Page One Power Review", href: "/best-link-building-agencies/page-one-power-review/", description: "Enterprise link building with Page One Power.", category: "Agencies", readTime: "14 min read", date: "2025-01-10" },
  { title: "Userp Review", href: "/best-link-building-agencies/userp-review/", description: "Digital PR and link building with Userp.", category: "Agencies", readTime: "11 min read", date: "2025-01-11" },
  { title: "Stan Ventures Review", href: "/best-link-building-agencies/stan-ventures-review/", description: "White-label link building services review.", category: "Agencies", readTime: "12 min read", date: "2025-01-13" },
  { title: "Editorial.Link Review", href: "/best-link-building-agencies/editorial-link-review/", description: "Premium editorial link building analysis.", category: "Agencies", readTime: "10 min read", date: "2025-01-15" },
  { title: "Backlinky vs Fat Joe", href: "/best-link-building-agencies/backlinky-vs-fatjoe/", description: "Head-to-head comparison of two popular agencies.", category: "Agencies", readTime: "15 min read", date: "2025-01-17" },
  { title: "Backlinky vs Rhino Rank", href: "/best-link-building-agencies/backlinky-vs-rhino-rank/", description: "Comparing Backlinky and Rhino Rank services.", category: "Agencies", readTime: "14 min read", date: "2025-01-19" },
  { title: "Backlinky vs LinkBuilder.io", href: "/best-link-building-agencies/backlinky-vs-linkbuilder-io/", description: "Which agency delivers better results?", category: "Agencies", readTime: "16 min read", date: "2025-01-21" },
  { title: "How to Choose a Link Building Agency", href: "/best-link-building-agencies/how-to-choose-link-building-agency/", description: "Key factors to consider when hiring an agency.", category: "Agencies", readTime: "18 min read", date: "2025-01-23" },
  { title: "Link Building Agency Red Flags", href: "/best-link-building-agencies/link-building-agency-red-flags/", description: "Warning signs to watch for when evaluating agencies.", category: "Agencies", readTime: "13 min read", date: "2025-01-25" },
  { title: "Managed Link Building Services", href: "/best-link-building-agencies/managed-link-building/", description: "End-to-end link building solutions explained.", category: "Agencies", readTime: "14 min read", date: "2025-01-27" },
  { title: "Cheap Link Building Services", href: "/best-link-building-agencies/cheap-link-building-services/", description: "Are budget link building services worth the risk?", category: "Agencies", readTime: "12 min read", date: "2025-01-29" },
  { title: "Link Building Agency Alternatives", href: "/best-link-building-agencies/link-building-agency-alternatives/", description: "Other options besides traditional agencies.", category: "Agencies", readTime: "11 min read", date: "2025-01-31" },
  { title: "Link Building Agencies for SaaS", href: "/best-link-building-agencies/link-building-agencies-for-saas/", description: "Specialized agencies for software companies.", category: "Agencies", readTime: "13 min read", date: "2025-02-02" },
  { title: "Link Building Agencies for Law Firms", href: "/best-link-building-agencies/link-building-agencies-for-law-firms/", description: "Agencies that understand legal SEO.", category: "Agencies", readTime: "14 min read", date: "2025-02-04" },
  
  // SEO Metrics
  { title: "Domain Authority Explained", href: "/seo-metrics/domain-authority-explained/", description: "Understanding Moz's Domain Authority metric.", category: "Metrics", readTime: "12 min read", date: "2025-01-02" },
  { title: "Domain Rating Explained", href: "/seo-metrics/domain-rating-explained/", description: "How Ahrefs' Domain Rating works and what it means.", category: "Metrics", readTime: "11 min read", date: "2025-01-03" },
  { title: "DA vs DR: What's the Difference?", href: "/seo-metrics/domain-authority-vs-domain-rating/", description: "Comparing Moz DA and Ahrefs DR metrics.", category: "Metrics", readTime: "13 min read", date: "2025-01-05" },
  { title: "Authority Score Explained", href: "/seo-metrics/authority-score-explained/", description: "Understanding SEMrush's Authority Score metric.", category: "Metrics", readTime: "10 min read", date: "2025-01-07" },
  { title: "How to Increase Domain Authority", href: "/seo-metrics/how-to-increase-domain-authority/", description: "Proven strategies to boost your DA score.", category: "Metrics", readTime: "16 min read", date: "2025-01-09" },
  { title: "What is a Good Domain Rating?", href: "/seo-metrics/what-is-a-good-domain-rating/", description: "Benchmarking your DR against competitors.", category: "Metrics", readTime: "9 min read", date: "2025-01-11" },
  { title: "PageRank Explained", href: "/seo-metrics/pagerank-explained/", description: "The original Google ranking algorithm explained.", category: "Metrics", readTime: "14 min read", date: "2025-01-13" },
  { title: "Trust Flow Explained", href: "/seo-metrics/trust-flow-explained/", description: "Understanding Majestic's Trust Flow metric.", category: "Metrics", readTime: "11 min read", date: "2025-01-15" },
  { title: "URL Rating Explained", href: "/seo-metrics/url-rating-explained/", description: "Page-level authority with Ahrefs UR.", category: "Metrics", readTime: "10 min read", date: "2025-01-17" },
  { title: "Link Equity Explained", href: "/seo-metrics/link-equity-explained/", description: "How link juice flows and dissipates.", category: "Metrics", readTime: "13 min read", date: "2025-01-19" },
  { title: "Referring Domains vs Backlinks", href: "/seo-metrics/referring-domains-vs-backlinks/", description: "Why domain diversity matters more than link count.", category: "Metrics", readTime: "12 min read", date: "2025-01-21" },
  { title: "Natural Link Profile", href: "/seo-metrics/natural-link-profile/", description: "What a healthy backlink profile looks like.", category: "Metrics", readTime: "15 min read", date: "2025-01-23" },
  { title: "Backlink Profile Analysis", href: "/seo-metrics/backlink-profile-analysis/", description: "How to audit and analyze your backlinks.", category: "Metrics", readTime: "18 min read", date: "2025-01-25" },
  { title: "Spam Score Explained", href: "/seo-metrics/spam-score-explained/", description: "Understanding and reducing your spam score.", category: "Metrics", readTime: "11 min read", date: "2025-01-27" },
  { title: "Link Building ROI", href: "/seo-metrics/link-building-roi/", description: "Measuring the return on your link building investment.", category: "Metrics", readTime: "14 min read", date: "2025-01-29" },
  { title: "Organic Traffic Value", href: "/seo-metrics/organic-traffic-value/", description: "Calculate the dollar value of your organic traffic.", category: "Metrics", readTime: "12 min read", date: "2025-01-31" },
];

const categories = ["All", "Guide", "Strategy", "Tools", "Niche", "Agencies", "Metrics"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 12;

  // Filter articles
  const filteredArticles = allArticles.filter((article) => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort by date (newest first)
  const sortedArticles = filteredArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Pagination
  const totalPages = Math.ceil(sortedArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const paginatedArticles = sortedArticles.slice(startIndex, startIndex + articlesPerPage);

  // Recent articles (latest 6)
  const recentArticles = allArticles
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6);

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

      {/* Recent Articles */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-6">
            Recent Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {recentArticles.map((post) => (
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

      {/* Search and Filter */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] pt-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#55556A]" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-10 pr-4 py-2.5 bg-[#111118] border border-white/[0.06] rounded-lg text-[#F0F0F5] placeholder-[#55556A] focus:outline-none focus:border-[#4F7CFF]/50"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              <Filter className="w-4 h-4 text-[#55556A] flex-shrink-0" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? "bg-[#4F7CFF] text-white"
                      : "bg-[#111118] text-[#8888A0] hover:text-[#F0F0F5] border border-white/[0.06]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <p className="mt-4 text-sm text-[#55556A]">
            Showing {paginatedArticles.length} of {filteredArticles.length} articles
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>
      </section>

      {/* All Articles Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {paginatedArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {paginatedArticles.map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="group p-5 rounded-xl bg-[#111118] border border-white/[0.06] hover:border-[#4F7CFF]/30 transition-all"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 rounded-full bg-[#4F7CFF]/10 text-[#4F7CFF] text-xs">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-syne)] font-semibold text-[#F0F0F5] group-hover:text-[#4F7CFF] transition-colors mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#8888A0] mb-3 line-clamp-2">{post.description}</p>
                  <div className="flex items-center gap-2 text-xs text-[#55556A]">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-[#8888A0]">No articles found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                  setCurrentPage(1);
                }}
                className="mt-4 text-[#4F7CFF] hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg bg-[#111118] border border-white/[0.06] text-[#F0F0F5] disabled:opacity-50 disabled:cursor-not-allowed hover:border-[#4F7CFF]/30 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 rounded-lg text-sm transition-colors ${
                    currentPage === page
                      ? "bg-[#4F7CFF] text-white"
                      : "bg-[#111118] text-[#8888A0] border border-white/[0.06] hover:text-[#F0F0F5]"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg bg-[#111118] border border-white/[0.06] text-[#F0F0F5] disabled:opacity-50 disabled:cursor-not-allowed hover:border-[#4F7CFF]/30 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Content Pillars */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] pt-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#F0F0F5] mb-6">
            Browse by Topic
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Link Building Guide", href: "/link-building-guide/", description: "The complete guide to understanding and executing link building campaigns.", count: "17 articles", featured: true },
              { title: "Link Building Strategies", href: "/link-building-strategies/", description: "Step-by-step tactics for acquiring high-quality backlinks.", count: "14 articles" },
              { title: "Link Building Tools", href: "/link-building-tools/", description: "Reviews and guides for the best SEO and link building tools.", count: "12 articles" },
              { title: "Link Building by Niche", href: "/link-building-for-niche/", description: "Industry-specific link building strategies.", count: "11 articles" },
              { title: "Best Link Building Agencies", href: "/best-link-building-agencies/", description: "Reviews and comparisons of link building services.", count: "18 articles" },
              { title: "SEO Metrics", href: "/seo-metrics/", description: "Understanding domain authority, link metrics, and SEO KPIs.", count: "16 articles" },
            ].map((pillar) => (
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
