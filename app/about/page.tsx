import Navbar from '@/components/Navbar'
import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import { getCanonicalUrl, SITE_URL } from '@/lib/routes'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about PTC Group India, its journey since 2009, multi-sector business portfolio, values, capabilities and commitment to long-term partnerships.',
  alternates: {
    canonical: getCanonicalUrl('/about'),
  },
  openGraph: {
    title: 'About PTC Group India',
    description: 'Learn about the journey, values and diversified portfolio of PTC Group India.',
    url: getCanonicalUrl('/about'),
  },
}

export default function AboutPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE_URL}/about` },
    ],
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <AboutSection />
      <Footer />
    </main>
  )
}
