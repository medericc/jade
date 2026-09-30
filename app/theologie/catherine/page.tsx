import type { Metadata } from 'next'
import CatherineClient from './CatherineClient'

export const metadata: Metadata = {
  title: 'Sainte Catherine de Sienne : vie et enseignements spirituels',
  description:
    "Découvrez la vie de sainte Catherine de Sienne, ses enseignements spirituels, ses lettres, son rôle dans l'histoire de l'Église et son influence sur la spiritualité chrétienne.",
  keywords: [
    'Sainte Catherine de Sienne',
    'Catherine de Sienne',
    'vie de Catherine de Sienne',
    'enseignements de Catherine de Sienne',
    'spiritualité de Catherine de Sienne',
    'Docteur de l’Église',
    'saints catholiques',
    'histoire de l’Église',
  ],
  openGraph: {
    title: 'Sainte Catherine de Sienne : vie et enseignements spirituels',
    description:
      "Vie, spiritualité et enseignements de sainte Catherine de Sienne.",
    type: 'article',
  },
}

export default function Page() {
  return <CatherineClient />
}