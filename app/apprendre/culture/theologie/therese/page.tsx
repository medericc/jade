import type { Metadata } from 'next'
import ThereseClient from './ThereseClient'

export const metadata = {
  title:
    'Sainte Hildegarde de Bingen : âme, corps et conception',
  description:
    "Les enseignements de Sainte Hildegarde de Bingen sur l'âme humaine, la conception, la croissance spirituelle, le péché et la lumière intérieure.",
  keywords: [
    'Sainte Hildegarde',
    'Hildegarde de Bingen',
    'âme',
    'corps',
    'conception',
    'théologie catholique',
    'docteur de l Église',
    'spiritualité chrétienne',
  ],
  openGraph: {
  title:
    "Les Sept Demeures du Château intérieur de Sainte Thérèse d'Avila",

  description:
    "Résumé complet des Sept Demeures du Château intérieur, le grand traité spirituel de Sainte Thérèse d'Avila.",

  type: "article",
},
}

export default function Page() {
  return <ThereseClient />
}