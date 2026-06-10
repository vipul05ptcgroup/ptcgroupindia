import type { Metadata } from 'next'
import './globals.css'
import { SITE_URL } from '@/lib/routes'

export const metadata: Metadata = {
  title: {
    default: 'PTC Group India | Diversified Business Group',
    template: '%s | PTC Group India',
  },
  description:
    'PTC Group India is a diversified business group serving chemicals, logistics, organics, beverages, packaging, healthcare, technology and creative industries.',
  applicationName: 'PTC Group India',
  keywords: [
    'PTC Group India',
    'PTC Group',
    'PTCGRAM',
    'PTC Logistics',
    'Indian business group',
    'chemicals',
    'logistics',
    'packaging',
    'Virar',
    'Mumbai',
  ],
  authors: [{ name: 'PTC Group India', url: SITE_URL }],
  creator: 'PTC Group India',
  publisher: 'PTC Group India',
  category: 'Business',
  icons: {
    icon: '/Images/PTC-Group-Mark.png',
    shortcut: '/Images/PTC-Group-Mark.png',
    apple: '/Images/PTC-Group-Mark.png',
  },
  metadataBase: new URL(SITE_URL),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'PTC Group India',
    title: 'PTC Group India | Diversified Business Group',
    description:
      'Explore PTC Group India companies across chemicals, logistics, organics, packaging, healthcare, technology and consumer products.',
    images: [
      {
        url: '/Images/ptc-header-footer-logo.png',
        width: 1485,
        height: 1508,
        alt: 'PTC Group India logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PTC Group India | Diversified Business Group',
    description:
      'Explore PTC Group India companies across chemicals, logistics, organics, packaging, healthcare and technology.',
    images: ['/Images/ptc-header-footer-logo.png'],
  },
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
    legalName: 'PTCGROUP PVT LTD.',
    url: SITE_URL,
    logo: `${SITE_URL}/Images/ptc-header-footer-logo.png`,
    foundingDate: '2009',
    slogan: 'Idea, Profit, Future',
    description:
      'A diversified Indian business group operating across chemicals, logistics, organics, packaging, healthcare, technology and consumer products.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Office no. 201-202, Hirubai Residency',
      addressLocality: 'Virar West',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    email: 'support.ptcgram@gmail.com',
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
    publisher: {
      '@type': 'Organization',
      name: 'PTC Group India',
      url: SITE_URL,
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
