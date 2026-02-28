import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/*',
        '/*.json$',
        '/_next/*',
        '/private/*',
        '/admin/*',
        '/draft/*',
      ],
    },
    sitemap: 'https://backlinky.io/sitemap.xml',
    host: 'https://backlinky.io',
  };
}
