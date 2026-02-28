"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowLeft, Copy, Check, RefreshCw, Sparkles } from "lucide-react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

type LinkType = "guest-post" | "niche-edit" | "broken-link" | "resource-page" | "skyscraper";

const emailTemplates: Record<LinkType, (data: { yourSite: string; targetSite: string; topic: string }) => string> = {
  "guest-post": (data) => `Subject: Guest post idea for ${data.targetSite}

Hi there,

I came across ${data.targetSite} while researching ${data.topic} — really enjoyed your recent content on the subject.

I'm [Your Name] from ${data.yourSite}. We specialize in [your expertise] and have been featured on [Site 1], [Site 2], and [Site 3].

I'd love to contribute a guest post to ${data.targetSite}. Here are a few ideas that would resonate with your audience:

1. [Specific Title Related to Their Content]
2. [Another Relevant Title]
3. [Third Title Option]

The piece would be 1,500+ words, completely original, and tailored to your editorial guidelines. Happy to share writing samples if helpful.

What do you think? Would any of these work for your upcoming content calendar?

Best,
[Your Name]
${data.yourSite}`,

  "niche-edit": (data) => `Subject: Quick suggestion for your ${data.topic} article

Hi there,

I was reading your article on ${data.topic} and noticed it covers [specific section] really well.

I actually just published a comprehensive resource on ${data.topic} at ${data.yourSite} that goes deeper on [specific subtopic you mention]. It includes [specific value: original research, case study, data, etc.].

Might be a helpful addition to your piece for readers who want to go further. Here's the link: [URL]

Either way, thanks for the great content!

Best,
[Your Name]`,

  "broken-link": (data) => `Subject: Found a broken link on your site

Hi there,

Big fan of ${data.targetSite} — I reference your content often in my work.

I was reading your article on ${data.topic} and noticed one of the links appears to be broken: [URL]

I actually have a similar resource on ${data.topic} at ${data.yourSite} that could work as a replacement if you're looking to fix it. No pressure either way — just wanted to give you a heads up.

Keep up the great work!

Best,
[Your Name]
${data.yourSite}`,

  "resource-page": (data) => `Subject: Resource suggestion for ${data.targetSite}

Hi there,

I came across your resource page on ${data.topic} — excellent collection of links.

I wanted to suggest adding our guide to the list. We've put together what I think is the most comprehensive resource on ${data.topic} available: [URL]

It's helped [X people/companies] achieve [specific result] and has been shared [X times].

Feel free to check it out. If you think it would be valuable for your readers, we'd be honored to be included.

Thanks for maintaining such a helpful resource!

Best,
[Your Name]
${data.yourSite}`,

  "skyscraper": (data) => `Subject: Noticed your link to [Original Resource]

Hi there,

I saw that you linked to [Original Resource] in your article about ${data.topic} — great choice, it's a solid piece.

I wanted to let you know that we recently published a more comprehensive, up-to-date version at ${data.yourSite}. Our guide covers:

- [Key improvement 1]
- [Key improvement 2]
- [Key improvement 3]

It also includes [unique element: original research, case studies, expert quotes, etc.].

Thought it might be worth a mention if you want to give your readers the most current resource on the topic.

Either way, thanks for the consistently great content!

Best,
[Your Name]
${data.yourSite}`,
};

export default function OutreachEmailGenerator() {
  const [linkType, setLinkType] = useState<LinkType>("guest-post");
  const [yourSite, setYourSite] = useState("");
  const [targetSite, setTargetSite] = useState("");
  const [topic, setTopic] = useState("");
  const [generated, setGenerated] = useState("");
  const [copied, setCopied] = useState(false);

  const generateEmail = () => {
    const template = emailTemplates[linkType];
    const email = template({ yourSite: yourSite || "yourdomain.com", targetSite: targetSite || "their site", topic: topic || "this topic" });
    setGenerated(email);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generated);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const linkTypes: { value: LinkType; label: string; description: string }[] = [
    { value: "guest-post", label: "Guest Post", description: "Pitch a guest article" },
    { value: "niche-edit", label: "Niche Edit", description: "Suggest a link insertion" },
    { value: "broken-link", label: "Broken Link", description: "Report and replace dead links" },
    { value: "resource-page", label: "Resource Page", description: "Get listed on curated pages" },
    { value: "skyscraper", label: "Skyscraper", description: "Promote better content" },
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0F]">
      <Nav />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Link href="/free-tools" className="inline-flex items-center gap-2 text-[#8888A0] hover:text-[#F0F0F5] transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Free Tools
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#F59E0B]/15">
                <Mail className="w-6 h-6 text-[#F59E0B]" />
              </div>
              <h1 className="font-[family-name:var(--font-syne)] font-bold text-3xl md:text-4xl text-[#F0F0F5]">
                Outreach Email Generator
              </h1>
            </div>
            <p className="text-[#8888A0] max-w-2xl">
              Generate personalized outreach email templates that get responses. Choose your link building strategy and fill in the details.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="space-y-6">
              <div className="p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
                <h3 className="font-[family-name:var(--font-syne)] font-semibold text-lg text-[#F0F0F5] mb-4">Link Building Strategy</h3>
                <div className="grid grid-cols-1 gap-2">
                  {linkTypes.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => setLinkType(type.value)}
                      className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                        linkType === type.value
                          ? "bg-[#4F7CFF]/10 border-[#4F7CFF]/50 text-[#F0F0F5]"
                          : "bg-[#0A0A0F] border-white/[0.06] text-[#8888A0] hover:border-white/[0.12]"
                      }`}
                    >
                      <span className="font-medium">{type.label}</span>
                      <span className="text-sm opacity-70">{type.description}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-xl bg-[#111118] border border-white/[0.06]">
                <h3 className="font-[family-name:var(--font-syne)] font-semibold text-lg text-[#F0F0F5] mb-4">Campaign Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-[#8888A0] mb-2">Your Website</label>
                    <input
                      type="text"
                      value={yourSite}
                      onChange={(e) => setYourSite(e.target.value)}
                      placeholder="yourdomain.com"
                      className="w-full px-4 py-3 rounded-lg bg-[#0A0A0F] border border-white/[0.06] text-[#F0F0F5] placeholder-[#55556A] focus:outline-none focus:border-[#4F7CFF]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#8888A0] mb-2">Target Website</label>
                    <input
                      type="text"
                      value={targetSite}
                      onChange={(e) => setTargetSite(e.target.value)}
                      placeholder="targetsite.com"
                      className="w-full px-4 py-3 rounded-lg bg-[#0A0A0F] border border-white/[0.06] text-[#F0F0F5] placeholder-[#55556A] focus:outline-none focus:border-[#4F7CFF]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#8888A0] mb-2">Topic/Keyword</label>
                    <input
                      type="text"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      placeholder="e.g., link building strategies"
                      className="w-full px-4 py-3 rounded-lg bg-[#0A0A0F] border border-white/[0.06] text-[#F0F0F5] placeholder-[#55556A] focus:outline-none focus:border-[#4F7CFF]"
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={generateEmail}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 text-white bg-[#4F7CFF] rounded-xl hover:bg-[#3D6AEE] transition-colors font-medium"
              >
                <Sparkles className="w-5 h-5" />
                Generate Email
              </button>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              {generated ? (
                <div className="h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-[family-name:var(--font-syne)] font-semibold text-lg text-[#F0F0F5]">Generated Email</h3>
                    <div className="flex gap-2">
                      <button
                        onClick={generateEmail}
                        className="p-2 rounded-lg bg-[#111118] border border-white/[0.06] text-[#8888A0] hover:text-[#F0F0F5] transition-colors"
                        title="Regenerate"
                      >
                        <RefreshCw className="w-4 h-4" />
                      </button>
                      <button
                        onClick={copyToClipboard}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#111118] border border-white/[0.06] text-[#8888A0] hover:text-[#F0F0F5] transition-colors"
                      >
                        {copied ? <Check className="w-4 h-4 text-[#22C55E]" /> : <Copy className="w-4 h-4" />}
                        {copied ? "Copied!" : "Copy"}
                      </button>
                    </div>
                  </div>
                  <div className="flex-1 p-6 rounded-xl bg-[#111118] border border-white/[0.06] font-mono text-sm text-[#F0F0F5] whitespace-pre-wrap leading-relaxed overflow-auto max-h-[600px]">
                    {generated}
                  </div>
                  <p className="text-xs text-[#55556A] mt-4">
                    Pro tip: Always personalize the template with specific details about their content before sending.
                  </p>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center p-12 rounded-xl bg-[#111118] border border-white/[0.06] border-dashed">
                  <div className="text-center">
                    <Mail className="w-12 h-12 text-[#55556A] mx-auto mb-4" />
                    <p className="text-[#8888A0]">Fill in the details and click Generate to create your email</p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
