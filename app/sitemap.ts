import type { MetadataRoute } from 'next'
import { COMPANIES } from '@/lib/companies'

const SITE_URL =
  process.env.SITE_URL ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://ptcgroupindia.in'

const NOW = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: NOW,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/companies`,
      lastModified: NOW,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  const companyPages: MetadataRoute.Sitemap = COMPANIES.map((company) => ({
    url: `${SITE_URL}/companies/${company.id}`,
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
