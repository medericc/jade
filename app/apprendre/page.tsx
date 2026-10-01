import Footer from '../components/layout/Footer'

import ApprendreHeader from '../components/apprendre/ApprendreHeader'
import HeroSection from '../components/apprendre/HeroSection'
import LearningGrid from '../components/apprendre/LearningGrid'

export const metadata = {
  title: "Apprendre le Béarnais | Cours, Conjugaison, Dictionnaire et Culture",
  description:
    "Découvrez le béarnais grâce à des cours gratuits, une conjugaison complète, un dictionnaire, des ressources culturelles et l'histoire du Béarn.",

}
export default function ApprendrePage() {
  return (
    <main className="apprendre-page">



      <ApprendreHeader />

      <HeroSection />

      <LearningGrid />



      <Footer />
    </main>
  )
}