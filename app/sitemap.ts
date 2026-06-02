import type { MetadataRoute } from 'next'
import { COMPANIES } from '@/lib/companies'
import { getCanonicalUrl, getCompanyPath } from '@/lib/routes'

const NOW = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: getCanonicalUrl('/'),
      lastModified: NOW,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: getCanonicalUrl('/about'),
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: getCanonicalUrl('/companies'),
      lastModified: NOW,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: getCanonicalUrl('/contact'),
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  const companyPages: MetadataRoute.Sitemap = COMPANIES.map((company) => ({
    url: getCanonicalUrl(getCompanyPath(company)),
    lastModified: NOW,
    changeFrequency: 'monthly',
    priority: 0.75,
  }))

  // Keep these arrays ready for future product/category/blog routes.
  const productPages: MetadataRoute.Sitemap = []
  const categoryPages: MetadataRoute.Sitemap = []
  const blogPages: MetadataRoute.Sitemap = []

  return [...staticPages, ...companyPages, ...productPages, ...categoryPages, ...blogPages]
}
