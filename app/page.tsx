import HeroSection from './components/hero/HeroSection'
import CareerSection from './components/career/CareerSection'
import FanZoneSection from './components/fanzone/FanZoneSection'
import Footer from './components/layout/Footer'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <CareerSection />
      <FanZoneSection />
      <Footer />
    </main>
  )
}