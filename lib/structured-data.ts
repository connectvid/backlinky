/**
 * Structured Data Utilities
 * 
 * Helper functions for generating Schema.org JSON-LD markup
 * for various page types and content structures.
 */

// Base URL for all schema references
const BASE_URL = 'https://backlinky.io';

// Organization Information
const ORGANIZATION = {
  name: 'Backlinky',
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  sameAs: [
    'https://twitter.com/backlinky',
    'https://linkedin.com/company/backlinky',
    'https://facebook.com/backlinky',
  ],
  description: 'Link building agency specializing in SaaS companies. We build high-authority backlinks that move rankings.',
};

interface ArticleSchemaParams {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  authorUrl?: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface ProductSchemaParams {
  name: string;
  description: string;
  image?: string;
  price?: number;
  priceCurrency?: string;
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
}

/**
 * Generate Article schema markup for blog posts and articles
 */
export function generateArticleSchema({
  title,
  description,
  url,
  image = '/og-image.png',
  datePublished,
  dateModified,
  authorName = 'Backlinky Team',
  authorUrl = BASE_URL,
}: ArticleSchemaParams): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: image.startsWith('http') ? image : `${BASE_URL}${image}`,
    url: url.startsWith('http') ? url : `${BASE_URL}${url}`,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: authorName,
      url: authorUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: ORGANIZATION.name,
      logo: {
        '@type': 'ImageObject',
        url: ORGANIZATION.logo,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url.startsWith('http') ? url : `${BASE_URL}${url}`,
    },
  };
}

/**
 * Generate FAQPage schema markup for FAQ sections
 */
export function generateFAQSchema(faqs: FAQItem[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate BreadcrumbList schema markup for navigation
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]): object {
  const itemListElement = items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.label,
    item: item.href.startsWith('http') ? item.href : `${BASE_URL}${item.href}`,
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement,
  };
}

/**
 * Generate Organization schema markup
 */
export function generateOrganizationSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: ORGANIZATION.name,
    url: ORGANIZATION.url,
    logo: ORGANIZATION.logo,
    sameAs: ORGANIZATION.sameAs,
    description: ORGANIZATION.description,
  };
}

/**
 * Generate ProfessionalService schema markup (for service-based businesses)
 */
export function generateProfessionalServiceSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: ORGANIZATION.name,
    url: ORGANIZATION.url,
    logo: ORGANIZATION.logo,
    sameAs: ORGANIZATION.sameAs,
    description: ORGANIZATION.description,
    serviceType: 'Link Building',
    areaServed: 'Worldwide',
    priceRange: '$$',
  };
}

/**
 * Generate Product schema markup for tools and services
 */
export function generateProductSchema({
  name,
  description,
  image = '/og-image.png',
  price,
  priceCurrency = 'USD',
  availability = 'InStock',
}: ProductSchemaParams): object {
  const product: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: name,
    description: description,
    image: image.startsWith('http') ? image : `${BASE_URL}${image}`,
    brand: {
      '@type': 'Brand',
      name: ORGANIZATION.name,
    },
    url: BASE_URL,
  };

  if (price !== undefined) {
    product.offers = {
      '@type': 'Offer',
      price: price,
      priceCurrency: priceCurrency,
      availability: `https://schema.org/${availability}`,
      url: BASE_URL,
      seller: {
        '@type': 'Organization',
        name: ORGANIZATION.name,
      },
    };
  }

  return product;
}

/**
 * Generate WebSite schema markup with search action
 */
export function generateWebSiteSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: ORGANIZATION.name,
    url: ORGANIZATION.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Generate WebPage schema markup
 */
export function generateWebPageSchema({
  title,
  description,
  url,
  image = '/og-image.png',
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
}): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: url.startsWith('http') ? url : `${BASE_URL}${url}`,
    image: image.startsWith('http') ? image : `${BASE_URL}${image}`,
    publisher: {
      '@type': 'Organization',
      name: ORGANIZATION.name,
      logo: {
        '@type': 'ImageObject',
        url: ORGANIZATION.logo,
      },
    },
  };
}

/**
 * Generate HowTo schema markup for guides and tutorials
 */
export function generateHowToSchema({
  title,
  description,
  steps,
  image = '/og-image.png',
}: {
  title: string;
  description: string;
  steps: { name: string; text: string }[];
  image?: string;
}): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description: description,
    image: image.startsWith('http') ? image : `${BASE_URL}${image}`,
    totalTime: 'PT30M',
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

/**
 * Generate SoftwareApplication schema for tools
 */
export function generateSoftwareAppSchema({
  name,
  description,
  applicationCategory = 'BusinessApplication',
  price = 0,
  priceCurrency = 'USD',
}: {
  name: string;
  description: string;
  applicationCategory?: string;
  price?: number;
  priceCurrency?: string;
}): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: name,
    description: description,
    applicationCategory: applicationCategory,
    offers: {
      '@type': 'Offer',
      price: price,
      priceCurrency: priceCurrency,
    },
    operatingSystem: 'Any',
    author: {
      '@type': 'Organization',
      name: ORGANIZATION.name,
    },
  };
}

/**
 * Utility function to safely inject JSON-LD into the page
 */
export function injectJSONLD(schema: object): string {
  return JSON.stringify(schema);
}

// Re-export for convenience
export { BASE_URL, ORGANIZATION };
