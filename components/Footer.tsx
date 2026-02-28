"use client";

import Link from "next/link";
import { Link2, Twitter, Linkedin } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Managed Link Building", href: "#pricing" },
    { label: "Guest Posting", href: "#services" },
    { label: "Niche Edits", href: "#services" },
    { label: "Digital PR", href: "#services" },
    { label: "White Label", href: "#services" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Free Tools", href: "/free-tools" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Link Building Guide", href: "/link-building-guide" },
    { label: "Pricing", href: "#pricing" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "team@backlinky.io", href: "mailto:team@backlinky.io" },
  ],
};

export default function Footer() {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Link2 className="w-6 h-6 text-[#4F7CFF]" />
              <span className="font-[family-name:var(--font-syne)] font-bold text-xl text-[#F0F0F5]">
                Backlinky
              </span>
            </Link>
            <p className="text-sm text-[#8888A0] mb-6 max-w-xs">
              The link building agency built for SaaS brands that want to rank and stay ranked.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com/backlinky"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#55556A] hover:text-[#F0F0F5] transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/backlinky"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#55556A] hover:text-[#F0F0F5] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-[family-name:var(--font-syne)] font-semibold text-[#F0F0F5] mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#8888A0] hover:text-[#F0F0F5] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-[family-name:var(--font-syne)] font-semibold text-[#F0F0F5] mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#8888A0] hover:text-[#F0F0F5] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-[family-name:var(--font-syne)] font-semibold text-[#F0F0F5] mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#8888A0] hover:text-[#F0F0F5] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#55556A]">
            © 2025 Backlinky.io · All rights reserved · White-hat link building for SaaS
          </p>
          <p className="text-sm text-[#55556A]">
            Built for SaaS companies that want to rank.
          </p>
        </div>
      </div>
    </footer>
  );
}
