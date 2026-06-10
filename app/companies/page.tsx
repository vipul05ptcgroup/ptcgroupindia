import Navbar from '@/components/Navbar'
import CompaniesSection from '@/components/CompaniesSection'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import { getCanonicalUrl, SITE_URL } from '@/lib/routes'

export const metadata: Metadata = {
  title: 'Our Companies',
  description:
    'Explore PTC Group India companies and brands across chemicals, logistics, organics, packaging, healthcare, beverages, technology and creative services.',
  alternates: {
    canonical: getCanonicalUrl('/companies'),
  },
  openGraph: {
    title: 'PTC Group India Companies and Brands',
    description: 'Explore the diversified companies and brands within PTC Group India.',
    url: getCanonicalUrl('/companies'),
  },
}

export default function CompaniesPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Companies', item: `${SITE_URL}/companies` },
    ],
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <CompaniesSection />
      <Footer />
    </main>
  )
}
