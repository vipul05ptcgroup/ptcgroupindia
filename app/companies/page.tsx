import Navbar from '@/components/Navbar'
import CompaniesSection from '@/components/CompaniesSection'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://ptcgroupindia.in'

export const metadata: Metadata = {
  alternates: {
    canonical: `${SITE_URL}/companies`,
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
