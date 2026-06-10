import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import HomeSections from '@/components/HomeSections'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import { getCanonicalUrl } from '@/lib/routes'

export const metadata: Metadata = {
  title: {
    absolute: 'PTC Group India | Chemicals, Logistics & Diversified Businesses',
  },
  description:
    'Discover PTC Group India and its growing portfolio of companies in chemicals, logistics, organics, packaging, healthcare, beverages, technology and creative services.',
  alternates: {
    canonical: getCanonicalUrl('/'),
  },
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <HomeSections />
      <Footer />
    </main>
  )
}
