import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import HomeSections from '@/components/HomeSections'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://ptcgroupindia.in'

export const metadata: Metadata = {
  alternates: {
    canonical: `${SITE_URL}/`,
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
