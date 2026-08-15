import type { Metadata } from 'next'
import ThereseClient from './ThereseClient'

export const metadata: Metadata = {
  title: 'Les 7 Demeures du Château intérieur de Thérèse d’Avila',
  description:
    "Résumé des 7 Demeures du Château intérieur de sainte Thérèse d’Avila : conversion, prière, oraison, vie spirituelle et union transformante avec Dieu.",
  keywords: [
    '7 Demeures',
    'Sept Demeures',
    'Château intérieur',
    'Sainte Thérèse d’Avila',
    'Thérèse d’Avila',
    'Château intérieur résumé',
    'Sept Demeures résumé',
    'oraison',
    'vie spirituelle',
    'mystique chrétienne',
    'union à Dieu',
    'Docteur de l’Église',
  ],
  openGraph: {
    title: 'Les 7 Demeures du Château intérieur de Thérèse d’Avila',
    description:
      "Résumé des 7 Demeures du Château intérieur de sainte Thérèse d’Avila.",
    type: 'article',
  },
}

export default function Page() {
  return <ThereseClient />
}