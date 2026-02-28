import React from "react";
import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Backlinky.io — Link Building Agency for SaaS Companies",
  description: "Backlinky builds high-authority backlinks for SaaS companies. Managed link building, guest posting, and niche edits that move rankings. Get a free audit.",
  openGraph: {
    title: "Backlinky.io — Link Building That Moves Rankings",
    description: "Backlinky builds high-authority backlinks for SaaS companies. Managed link building, guest posting, and niche edits that move rankings. Get a free audit.",
    images: ["/og-image.png"],
    url: "https://backlinky.io",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Backlinky.io — Link Building That Moves Rankings",
    description: "Backlinky builds high-authority backlinks for SaaS companies. Get a free audit.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://backlinky.io",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Organization Schema with complete details
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Backlinky",
  "url": "https://backlinky.io",
  "logo": "https://backlinky.io/logo.png",
  "sameAs": [
    "https://twitter.com/backlinky",
    "https://linkedin.com/company/backlinky",
    "https://facebook.com/backlinky",
    "https://instagram.com/backlinky"
  ],
  "description": "Link building agency specializing in SaaS companies. We build high-authority backlinks that move rankings.",
  "foundingDate": "2023",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": ["English"]
  }
};

// ProfessionalService Schema for local SEO and service-specific markup
const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Backlinky",
  "url": "https://backlinky.io",
  "description": "Link building agency specializing in SaaS companies",
  "serviceType": "Link Building",
  "areaServed": "Worldwide",
  "priceRange": "$$",
  "provider": {
    "@type": "Organization",
    "name": "Backlinky"
  }
};

// WebSite Schema with search action
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Backlinky",
  "url": "https://backlinky.io",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://backlinky.io/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

// Combine all schemas into a single JSON-LD array
const schemaData = [
  organizationSchema,
  professionalServiceSchema,
  websiteSchema
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body
        className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
