import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import HomeSections from '@/components/HomeSections'
import Footer from '@/components/Footer'

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
