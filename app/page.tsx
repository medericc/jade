import HeroSection from './components/hero/HeroSection'
import CareerSection from './components/career/CareerSection'
import FanZoneSection from './components/fanzone/FanZoneSection'
import Footer from './components/layout/Footer'


export default function HomePage() {
  return (
    <main>
     <section aria-labelledby="hero-heading">
        <HeroSection />
      </section>

      <section aria-labelledby="career-heading">
        <CareerSection />
      </section>

      <section aria-labelledby="fan-zone-heading">
        <FanZoneSection />
      </section>
      <Footer />
    </main>
  )
}