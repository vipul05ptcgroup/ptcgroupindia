import type { MetadataRoute } from 'next'

const SITE_URL =
  process.env.SITE_URL ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://ptcgroupindia.in'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin',
          '/admin/',
          '/private',
          '/private/',
          '/api',
          '/api/',
          '/_next/',
          '/tmp/',
          '/draft/',
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
