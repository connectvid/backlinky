import { MetadataRoute } from 'next';

// Base URL for the site
const BASE_URL = 'https://backlinky.io';

// Define all page routes with their metadata
const routes = {
  // Homepage
  home: { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
  
  // Pillar pages
  pillars: [
    { path: '/best-link-building-agencies', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/link-building-strategies', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/link-building-guide', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/link-building-tools', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/link-building-for-niche', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/seo-metrics', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/free-tools', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/blog', priority: 0.9, changeFrequency: 'weekly' as const },
  ],
  
  // Best link building agencies section (spoke articles)
  agencyPages: [
    { path: '/best-link-building-agencies/backlinky-review', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/best-link-building-agencies/fatjoe-review', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/best-link-building-agencies/linkbuilder-io-review', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/best-link-building-agencies/rhino-rank-review', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/best-link-building-agencies/userp-review', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/best-link-building-agencies/page-one-power-review', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/best-link-building-agencies/stan-ventures-review', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/best-link-building-agencies/editorial-link-review', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/best-link-building-agencies/backlinky-vs-fatjoe', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/best-link-building-agencies/backlinky-vs-linkbuilder-io', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/best-link-building-agencies/backlinky-vs-rhino-rank', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/best-link-building-agencies/backlinky-vs-userp', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/best-link-building-agencies/backlinky-vs-page-one-power', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/best-link-building-agencies/how-to-choose-link-building-agency', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/best-link-building-agencies/link-building-agency-red-flags', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/best-link-building-agencies/cheap-link-building-services', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/best-link-building-agencies/managed-link-building', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/best-link-building-agencies/link-building-agencies-for-law-firms', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/best-link-building-agencies/link-building-agencies-for-saas', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/best-link-building-agencies/link-building-agency-alternatives', priority: 0.8, changeFrequency: 'weekly' as const },
  ],
  
  // Link building strategies section (spoke articles)
  strategyPages: [
    { path: '/link-building-strategies/broken-link-building', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-strategies/guest-posting-guide', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-strategies/skyscraper-technique', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-strategies/resource-page-link-building', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-strategies/niche-edits-guide', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-strategies/digital-pr-link-building', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-strategies/haro-link-building', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-strategies/competitor-backlink-analysis', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-strategies/link-reclamation', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-strategies/wikipedia-link-building', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-strategies/scholarship-link-building', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-strategies/podcast-link-building', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-strategies/linkable-assets', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-strategies/link-building-for-ecommerce', priority: 0.8, changeFrequency: 'weekly' as const },
  ],
  
  // Link building guide section (spoke articles)
  guidePages: [
    { path: '/link-building-guide/what-are-backlinks', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-guide/types-of-backlinks', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-guide/dofollow-vs-nofollow', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-guide/anchor-text-guide', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-guide/link-building-outreach-guide', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-guide/link-building-cost', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-guide/how-long-does-link-building-take', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-guide/link-building-for-new-websites', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-guide/white-hat-vs-black-hat-link-building', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-guide/toxic-backlinks', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-guide/disavow-links', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-guide/google-penguin-update', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-guide/link-velocity', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-guide/link-building-metrics', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-guide/internal-linking-for-seo', priority: 0.8, changeFrequency: 'weekly' as const },
  ],
  
  // Link building tools section (spoke articles)
  toolPages: [
    { path: '/link-building-tools/ahrefs-review', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-tools/semrush-review', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-tools/moz-pro-review', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-tools/majestic-seo-review', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-tools/buzzstream-review', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-tools/pitchbox-review', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-tools/hunter-review', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-tools/screaming-frog-review', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-tools/free-backlink-checkers', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-tools/google-search-console-for-link-building', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-tools/ahrefs-vs-semrush', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-tools/link-building-crm', priority: 0.8, changeFrequency: 'weekly' as const },
  ],
  
  // Link building for niche section (spoke articles)
  nichePages: [
    { path: '/link-building-for-niche/link-building-for-saas', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-for-niche/link-building-for-ecommerce', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-for-niche/link-building-for-blogs', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-for-niche/b2b-link-building', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-for-niche/link-building-for-startups', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-for-niche/local-link-building', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-for-niche/link-building-for-agencies', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-for-niche/link-building-for-law-firms', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-for-niche/link-building-for-healthcare', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-for-niche/link-building-for-real-estate', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/link-building-for-niche/white-label-link-building', priority: 0.8, changeFrequency: 'weekly' as const },
  ],
  
  // SEO metrics section (spoke articles)
  metricsPages: [
    { path: '/seo-metrics/domain-authority-explained', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/seo-metrics/domain-rating-explained', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/seo-metrics/how-to-increase-domain-authority', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/seo-metrics/authority-score-explained', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/seo-metrics/trust-flow-explained', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/seo-metrics/pagerank-explained', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/seo-metrics/spam-score-explained', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/seo-metrics/url-rating-explained', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/seo-metrics/referring-domains-vs-backlinks', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/seo-metrics/natural-link-profile', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/seo-metrics/backlink-profile-analysis', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/seo-metrics/link-equity-explained', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/seo-metrics/domain-authority-vs-domain-rating', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/seo-metrics/link-building-roi', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/seo-metrics/organic-traffic-value', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/seo-metrics/what-is-a-good-domain-rating', priority: 0.8, changeFrequency: 'weekly' as const },
  ],
  
  // Free tools section
  freeToolPages: [
    { path: '/free-tools/backlink-anchor-text-analyzer', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/free-tools/backlink-gap-analyzer', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/free-tools/link-building-roi-calculator', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/free-tools/outreach-email-generator', priority: 0.9, changeFrequency: 'weekly' as const },
  ],
};

// Combine all routes
const allRoutes = [
  routes.home,
  ...routes.pillars,
  ...routes.agencyPages,
  ...routes.strategyPages,
  ...routes.guidePages,
  ...routes.toolPages,
  ...routes.nichePages,
  ...routes.metricsPages,
  ...routes.freeToolPages,
];

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();
  
  return allRoutes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

// Generate sitemap with 85+ pages
export const dynamic = 'force-static';
