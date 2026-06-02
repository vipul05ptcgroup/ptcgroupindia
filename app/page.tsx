import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import HomeSections from '@/components/HomeSections'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import { getCanonicalUrl } from '@/lib/routes'

export const metadata: Metadata = {
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
