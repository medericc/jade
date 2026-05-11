import Footer from '../components/layout/Footer'

import ApprendreHeader from '../components/apprendre/ApprendreHeader'
import HeroSection from '../components/apprendre/HeroSection'
import LearningGrid from '../components/apprendre/LearningGrid'
import ProgressSection from '../components/apprendre/ProgressSection'

import '@/components/apprendre/styles.css'

export default function ApprendrePage() {
  return (
    <main className="apprendre-page">
      <ApprendreHeader />

      <HeroSection />

      <LearningGrid />

      <ProgressSection />

      <Footer />
    </main>
  )
}