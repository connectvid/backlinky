import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "12 Types of Backlinks: Which Ones Actually Move Rankings",
  description:
    "Discover the 12 types of backlinks that impact SEO rankings. Learn which link types deliver results and which ones waste your time.",
  keywords: [
    "types of backlinks",
    "backlink types",
    "editorial backlinks",
    "guest post backlinks",
    "HARO link building",
    "dofollow vs nofollow",
    "quality backlinks",
  ],
  alternates: {
    canonical: "/link-building-guide/types-of-backlinks/",
  },
};

export default function TypesOfBacklinksPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0F]">
      <Nav />

      <article className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 text-sm text-[#4F7CFF] mb-4">
              <span>Link Building Guide</span>
              <span className="text-[#55556A]">·</span>
              <span className="text-[#55556A]">Updated January 2025</span>
            </div>
            <h1 className="font-[family-name:var(--font-syne)] font-bold text-3xl md:text-4xl lg:text-5xl text-[#F0F0F5] mb-6 leading-tight">
              12 Types of Backlinks: Which Ones Actually Move Rankings
            </h1>
            <p className="text-lg text-[#8888A0] leading-relaxed">
              Not all backlinks deliver equal value. This guide breaks down 12 backlink types, 
              ranks them by SEO impact, and shows you exactly where to focus your link building efforts.
            </p>
          </header>

          {/* Featured Snippet */}
          <div className="p-6 rounded-xl bg-[#4F7CFF]/10 border border-[#4F7CFF]/30 mb-10">
            <p className="text-[#F0F0F5] leading-relaxed">
              <strong>Backlinks come in 12 distinct types</strong> ranging from high-value editorial links 
              to low-value directory submissions. Editorial backlinks from major publications deliver the 
              strongest ranking power, while guest posts, niche edits, and HARO links provide the best 
              balance of value and attainability for most websites.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto mb-16">
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#F0F0F5] mb-6">
              Backlink Types Comparison
            </h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="text-left py-3 text-[#55556A] font-normal">Type</th>
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
                  { type: "Broken Link Building", value: "7/10", difficulty: "Medium", risk: "None" },
                  { type: "Testimonials", value: "5/10", difficulty: "Easy", risk: "None" },
                  { type: "Image Links", value: "4/10", difficulty: "Easy", risk: "Low" },
                  { type: "Social Profiles", value: "2/10", difficulty: "Easy", risk: "None" },
                  { type: "Directories", value: "3/10", difficulty: "Easy", risk: "None" },
                  { type: "Scholarship", value: "4/10", difficulty: "Medium", risk: "High" },
                  { type: "PBN / Spam", value: "1/10", difficulty: "Easy", risk: "Very High" },
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

          {/* Content Sections */}
          <div className="space-y-16">
            {/* Section 1 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What are the different types of backlinks?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Backlinks fall into 12 primary categories based on how they're acquired, where they appear, 
                and the value they provide. Understanding these distinctions helps you build a diversified 
                link profile that Google trusts.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Each backlink type serves a different purpose in your SEO strategy. High-value links like 
                editorial mentions establish authority. Medium-value tactics like guest posting build 
                relevance at scale. Low-value links like social profiles create natural diversity.
              </p>
              <p className="text-[#8888A0] leading-relaxed">
                The key is balance. A natural backlink profile contains multiple link types in varying 
                proportions. Over-reliance on any single tactic triggers algorithmic scrutiny. 
                <Link href="/link-building-guide/link-building-metrics/" className="text-[#4F7CFF] hover:underline">
                  Track your link diversity with the right metrics →
                </Link>
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What are editorial backlinks?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Editorial backlinks are links that journalists, bloggers, and content creators place 
                organically within their content because your website provides genuine value. These links 
                require no outreach, no payment, and no reciprocal arrangement.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Major publications like Forbes, TechCrunch, and industry-specific blogs provide editorial 
                links when your content, data, or expertise enhances their story. These links carry maximum 
                weight because they represent authentic third-party validation.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Editorial links typically appear in:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "News articles citing your data or research",
                  "Industry roundups featuring your expertise",
                  "Product reviews and comparisons",
                  "Expert commentary on trending topics",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-[#4F7CFF] mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[#8888A0] leading-relaxed">
                Attracting editorial links requires creating genuinely newsworthy content: original research, 
                data studies, free tools, or unique insights. Most websites earn 1-3 editorial links monthly 
                through consistent digital PR efforts.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What are guest post backlinks?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Guest post backlinks come from articles you write for other websites in your niche. You 
                provide valuable content, and the host site allows a link back to your website within the 
                author bio or article body.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Guest posting remains one of the most scalable white-hat link building tactics. A single 
                well-placed guest post on a DR 50+ site in your niche passes significant authority and 
                drives targeted referral traffic.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Effective guest posting follows these principles:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  { title: "Target relevance first", desc: "A DR 30 site in your niche beats a DR 60 unrelated site" },
                  { title: "Prioritize traffic", desc: "Sites with 10K+ monthly visitors deliver real value" },
                  { title: "Write original content", desc: "Duplicate or spun content gets rejected or removed" },
                  { title: "Follow guidelines", desc: "Respect editorial standards to build relationships" },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                    <h4 className="font-semibold text-[#F0F0F5] mb-1">{item.title}</h4>
                    <p className="text-sm text-[#8888A0]">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#8888A0] leading-relaxed">
                <Link href="/link-building-strategies/guest-posting-guide/" className="text-[#4F7CFF] hover:underline">
                  Learn our complete guest posting system →
                </Link>
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What are niche edit backlinks?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Niche edit backlinks (also called curated links) are links added to existing, indexed 
                content on established websites. Instead of creating new content, you identify relevant 
                articles and request your link be added where it adds value.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                These links provide faster impact than guest posts because they appear on pages that 
                Google has already crawled and ranked. The existing page authority transfers immediately 
                to your site.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Niche edits work best when:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "The linking page already ranks for relevant keywords",
                  "Your link adds genuine value to existing content",
                  "The anchor text fits naturally in the context",
                  "The site maintains editorial standards",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-[#4F7CFF] mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[#8888A0] leading-relaxed">
                The primary risk with niche edits comes from over-optimized anchor text. Keep your anchor 
                natural and contextual to avoid triggering spam filters.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What is HARO link building?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                HARO (Help A Reporter Out) connects journalists with expert sources. When you provide 
                valuable commentary to a journalist's query, they may quote you and include a backlink 
                to your website in their article.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                HARO links deliver exceptional value because they come from major publications like 
                Business Insider, Forbes, Entrepreneur, and industry-specific outlets. A single HARO 
                placement on a DR 80+ news site can move rankings significantly.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Success with HARO requires:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  { title: "Speed", desc: "Respond within 2-4 hours of query publication" },
                  { title: "Brevity", desc: "Keep responses under 200 words" },
                  { title: "Credentials", desc: "Establish your expertise immediately" },
                  { title: "Quotes", desc: "Provide quotable, quoteworthy statements" },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                    <h4 className="font-semibold text-[#F0F0F5] mb-1">{item.title}</h4>
                    <p className="text-sm text-[#8888A0]">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#8888A0] leading-relaxed">
                Most sources see a 5-10% success rate with HARO. Submitting 50 qualified responses monthly 
                typically yields 3-5 quality links.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What are directory backlinks?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Directory backlinks come from website listings organized by category or location. These 
                include general business directories (Yelp, Yellow Pages), industry-specific directories, 
                and local citation sources.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Directory links provide minimal direct ranking power in 2025. Google's algorithm has 
                devalued these links significantly because they're easy to acquire and don't represent 
                genuine editorial endorsements.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Despite low individual value, directories serve important purposes:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Local SEO: Google Business Profile and local citations improve local rankings",
                  "Brand consistency: NAP (Name, Address, Phone) consistency builds trust",
                  "Referral traffic: Some niche directories send qualified visitors",
                  "Link diversity: A few directory links create natural profile variation",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-[#4F7CFF] mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[#8888A0] leading-relaxed">
                Focus on 10-20 high-quality, relevant directories. Avoid mass submission services and 
                low-quality directories that accept any site.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What are resource page backlinks?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Resource page backlinks come from curated lists of helpful tools, guides, and resources 
                in a specific industry. These pages exist to help readers find the best resources for 
                a particular topic.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Resource page link building involves finding relevant resource pages, creating content 
                that deserves inclusion, and reaching out to suggest your addition. When successful, 
                these links drive targeted traffic and provide solid authority transfer.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Find resource pages using these search operators:
              </p>
              <div className="p-4 rounded-lg bg-[#111118] border border-white/[0.06] mb-6">
                <code className="text-sm text-[#8888A0] block mb-2">
                  [your keyword] + "resources"
                </code>
                <code className="text-sm text-[#8888A0] block mb-2">
                  [your keyword] + "useful links"
                </code>
                <code className="text-sm text-[#8888A0] block mb-2">
                  [your keyword] + "helpful resources"
                </code>
                <code className="text-sm text-[#8888A0] block">
                  [your keyword] + "best tools"
                </code>
              </div>
              <p className="text-[#8888A0] leading-relaxed">
                Success rates for resource page outreach range from 5-15%. Having genuinely valuable 
                resources dramatically improves your chances.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What is broken link building?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Broken link building identifies dead links on relevant websites, creates replacement 
                content, and suggests your link as the fix. This technique provides value to website 
                owners while earning you quality backlinks.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                The process works because broken links hurt user experience and SEO. Site owners want 
                to fix them but often lack the time to find replacements. You solve their problem while 
                earning a link.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                The broken link building workflow:
              </p>
              <ol className="space-y-3 mb-6">
                {[
                  "Find relevant pages with broken links using tools like Ahrefs or Check My Links",
                  "Identify what content used to exist at the broken URL using Wayback Machine",
                  "Create superior replacement content on the same topic",
                  "Reach out to site owners with a helpful notification and your replacement link",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-[#4F7CFF] font-mono w-6">{i + 1}.</span>
                    {item}
                  </li>
                ))}
              </ol>
              <p className="text-[#8888A0] leading-relaxed">
                <Link href="/link-building-strategies/broken-link-building/" className="text-[#4F7CFF] hover:underline">
                  Learn the complete broken link building process →
                </Link>
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What are social profile backlinks?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Social profile backlinks come from your profiles on social media platforms, forums, 
                and community sites. These include links from Twitter, LinkedIn, Reddit, Quora, and 
                industry-specific communities.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Nearly all social profile links use the nofollow attribute, meaning they pass minimal 
                direct ranking power. However, these links serve important purposes in your overall 
                SEO strategy.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Social profile links provide:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Brand entity signals that help Google understand your business",
                  "Referral traffic from engaged community members",
                  "Link profile diversity that appears natural to algorithms",
                  "Citations that reinforce NAP consistency for local SEO",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-[#4F7CFF] mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[#8888A0] leading-relaxed">
                Create profiles on 20-30 relevant platforms. Complete all profile fields and include 
                your website URL where permitted.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What are image backlinks?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Image backlinks occur when other websites use your images (infographics, photos, charts) 
                and link back to your site as the source. These links typically use your domain or 
                "image source" as anchor text.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Infographics drive the most image backlinks because they present complex data in 
                visually digestible formats. A single viral infographic can attract 50-200 backlinks 
                from diverse sources.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Maximizing image backlinks:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  { title: "Create embed codes", desc: "Make it easy for others to share your images properly" },
                  { title: "Add watermarks", desc: "Brand your images so source attribution is obvious" },
                  { title: "Use reverse image search", desc: "Find unauthorized uses and request proper attribution" },
                  { title: "Submit to directories", desc: "List infographics on visual content aggregators" },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-lg bg-[#111118] border border-white/[0.06]">
                    <h4 className="font-semibold text-[#F0F0F5] mb-1">{item.title}</h4>
                    <p className="text-sm text-[#8888A0]">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#8888A0] leading-relaxed">
                Image backlinks provide moderate SEO value but excellent brand exposure and referral traffic.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What are testimonial backlinks?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Testimonial backlinks come from reviews and testimonials you provide to products or 
                services you use. Many companies feature customer testimonials on their websites with 
                a link back to the customer's site.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                These links offer excellent value for minimal effort. Writing a 100-word testimonial 
                takes 10 minutes and can earn a permanent dofollow link from a relevant site.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Target companies for testimonial links:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "SaaS tools you actively use (project management, analytics, marketing tools)",
                  "Agencies you've worked with (design, development, marketing)",
                  "Courses and training programs you've completed",
                  "Professional services you regularly engage",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                    <span className="text-[#4F7CFF] mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[#8888A0] leading-relaxed">
                Focus on companies in complementary niches rather than direct competitors for maximum relevance.
              </p>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                What are scholarship backlinks?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Scholarship backlinks come from educational institutions linking to your scholarship 
                page. Universities maintain scholarship resource pages for students, and your contribution 
                earns a listing with a backlink.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Edu domains carry inherent authority because educational institutions are highly trusted 
                by search engines. A .edu backlink provides significant ranking power compared to typical 
                commercial sites.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                However, scholarship link building carries risks:
              </p>
              <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/20 mb-6">
                <ul className="space-y-2">
                  {[
                    "Google has targeted scholarship link schemes in algorithm updates",
                    "Low-quality scholarship pages damage your reputation",
                    "Many universities now scrutinize scholarship submissions more carefully",
                    "Cost of funding scholarships ($500-$2000+) must justify the link value",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#8888A0]">
                      <span className="text-red-400 mt-1">⚠</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-[#8888A0] leading-relaxed">
                If pursuing scholarship links, create a genuine, valuable scholarship program with clear 
                criteria and legitimate awards. Avoid thin scholarship pages created solely for links.
              </p>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="font-[family-name:var(--font-syne)] font-bold text-2xl md:text-3xl text-[#F0F0F5] mb-6">
                Which type of backlink should you focus on?
              </h2>
              <p className="text-[#8888A0] leading-relaxed mb-4">
                Your ideal backlink mix depends on your website's current authority, niche competition, 
                and available resources. New websites should focus on attainable tactics; established 
                sites should pursue premium editorial links.
              </p>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Recommended backlink focus by website stage:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 text-[#55556A] font-normal">Website Stage</th>
                      <th className="text-left py-3 text-[#55556A] font-normal">Primary Focus</th>
                      <th className="text-left py-3 text-[#55556A] font-normal">Monthly Volume</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { stage: "New (DR 0-20)", focus: "Guest posts, directories, testimonials", volume: "5-10 links" },
                      { stage: "Growing (DR 20-40)", focus: "HARO, niche edits, broken links", volume: "10-15 links" },
                      { stage: "Established (DR 40-60)", focus: "Digital PR, editorial mentions", volume: "15-25 links" },
                      { stage: "Authority (DR 60+)", focus: "Premium editorial, thought leadership", volume: "20-40 links" },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-white/[0.06]">
                        <td className="py-3 text-[#F0F0F5]">{row.stage}</td>
                        <td className="py-3 text-[#8888A0]">{row.focus}</td>
                        <td className="py-3 text-[#8888A0]">{row.volume}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#8888A0] leading-relaxed mb-6">
                Regardless of your stage, maintain link diversity. A natural profile contains multiple 
                link types, anchor text variations, and a mix of dofollow and nofollow links.
              </p>
              <p className="text-[#8888A0] leading-relaxed">
                <Link href="/link-building-guide/white-hat-vs-black-hat-link-building/" className="text-[#4F7CFF] hover:underline">
                  Learn which tactics to avoid →
                </Link>
              </p>
            </section>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#4F7CFF]/20 to-[#4F7CFF]/5 border border-[#4F7CFF]/30">
            <h3 className="font-[family-name:var(--font-syne)] font-bold text-xl text-[#F0F0F5] mb-4">
              Need Help Building the Right Types of Backlinks?
            </h3>
            <p className="text-[#8888A0] mb-6">
              Backlinky builds diverse, high-quality backlink profiles for SaaS companies. 
              We focus on the link types that actually move rankings — editorial mentions, 
              guest posts, and strategic niche edits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#pricing"
                className="inline-flex items-center justify-center px-6 py-3 text-white bg-[#4F7CFF] rounded-lg hover:bg-[#3D6AEE] transition-colors font-medium"
              >
                View Our Link Building Services
              </Link>
              <Link
                href="/link-building-guide/dofollow-vs-nofollow/"
                className="inline-flex items-center justify-center px-6 py-3 text-[#F0F0F5] border border-white/20 rounded-lg hover:bg-white/5 transition-colors"
              >
                Learn About Dofollow vs Nofollow →
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
