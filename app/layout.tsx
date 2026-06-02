import type { Metadata } from 'next'
import './globals.css'
import { SITE_URL } from '@/lib/routes'

export const metadata: Metadata = {
  title: 'PTC Group India - Idea. Profit. Future.',
  description:
    'PTC Group India is a diversified conglomerate spanning chemicals, logistics, organics, beverages, packaging, technology and creative services.',
  keywords: 'PTC Group, PTCGRAM, PTC Logistics, chemicals, logistics, organics, Mumbai, India',
  icons: {
    icon: '/Images/Favicon.png',
    shortcut: '/Images/Favicon.png',
    apple: '/Images/Favicon.png',
  },
  metadataBase: new URL(SITE_URL),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PTC Group India',
    url: SITE_URL,
    logo: `${SITE_URL}/Images/Logo.png`,
    sameAs: [
      'https://ptcgram.com',
      'https://ptclogistics.in',
      'https://ilika.in',
      'https://thefuturex.in/',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-97108-79879',
      contactType: 'customer service',
      areaServed: 'IN',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PTC Group India',
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/companies?query={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <html lang="en">
      <body className="antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        {children}
      </body>
    </html>
  )
}
