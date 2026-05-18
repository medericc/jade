import Footer from '../components/layout/Footer'

import ApprendreHeader from '../components/apprendre/ApprendreHeader'
import HeroSection from '../components/apprendre/HeroSection'
import LearningGrid from '../components/apprendre/LearningGrid'
import ProgressSection from '../components/apprendre/ProgressSection'

import '@/app/components/apprendre/styles.module.css'

export default function ApprendrePage() {
  return (
    <main className="apprendre-page">

{/* Le courage de Gaston IV le Croisé, la rigueur morale de Jeanne d’Albret, la foi de Saint Gontran, la défense de Catherine de Navarre, l’amour d’Henri d’Albret, la ténacité de Catherine de Bourbon et, si possible, le génie de Fébus : toute l'âme du Béarn. */}


      <ApprendreHeader />

      <HeroSection />

      <LearningGrid />

      <ProgressSection />

      <Footer />
    </main>
  )
}