import HeroSection from './components/hero/HeroSection'
import CareerSection from './components/career/CareerSection'
import FanZoneSection from './components/fanzone/FanZoneSection'
import Footer from './components/layout/Footer'

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accueil",
  description:
    "Découvrez Jade Célérier, basketteuse béarnaise, son parcours, sa communauté et des ressources pour apprendre le béarnais et explorer la culture du Béarn et du Monde dans la vérité catholique.",
};
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Jade Célérier",
      "jobTitle": "Basketteuse",
    }),
  }}
/>
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