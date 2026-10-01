import type { Metadata } from 'next'
import CoursClient from './CoursClient'

export const metadata = {
  title: "Cours de Béarnais | Apprendre la langue béarnaise pas à pas",
  description:
    "Apprenez le béarnais grâce à des leçons complètes et progressives : grammaire, vocabulaire, prononciation, expressions, règles essentielles et exemples pratiques pour tous les niveaux.",

}

export default function Page() {
  return <CoursClient />
}