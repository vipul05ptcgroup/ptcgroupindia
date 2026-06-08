import Navbar from '@/components/Navbar'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import { getCanonicalUrl, SITE_URL } from '@/lib/routes'

export const metadata: Metadata = {
  alternates: {
    canonical: getCanonicalUrl('/contact'),
  },
}

export default function ContactPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: `${SITE_URL}/contact` },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What chemical products can I enquire about?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can ask about availability, pricing, and specifications for solvents, acids, and specialty products.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I request logistics and freight quotations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide quotations for road, air, and sea freight movements.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you support import and export shipment planning?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we help with international shipment planning and documentation support.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I discuss bulk orders and wholesale requirements?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we support large-volume requirements with dedicated account support.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer distribution partnership opportunities?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, you can connect with us to explore product and logistics network partnerships.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I submit custom or niche product requirements?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, share your custom requirement and our team will provide tailored support.',
        },
      },
    ],
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <ContactSection />
      <Footer />
    </main>
  )
}
