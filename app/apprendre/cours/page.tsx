import type { Metadata } from 'next'
import CoursClient from './CoursClient'

export const metadata = {
  title: "Cours de béarnais | Apprendre la langue béarnaise pas à pas",
  description:
    "Apprenez le béarnais grâce à des leçons complètes et progressives : grammaire, vocabulaire, prononciation, expressions, règles essentielles et exemples pratiques pour tous les niveaux.",
  keywords: [
    "béarnais",
    "cours de béarnais",
    "apprendre le béarnais",
    "langue béarnaise",
    "grammaire béarnaise",
    "vocabulaire béarnais",
    "prononciation béarnaise",
    "leçons de béarnais",
    "occitan béarnais",
    "apprendre l'occitan",
  ],
}

export default function Page() {
  return <CoursClient />
}