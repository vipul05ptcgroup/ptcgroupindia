import type { MetadataRoute } from 'next'
import { SITE_URL, getCanonicalUrl } from '@/lib/routes'

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
    sitemap: getCanonicalUrl('/sitemap.xml'),
    host: SITE_URL,
  }
}
