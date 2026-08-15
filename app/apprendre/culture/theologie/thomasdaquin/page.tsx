import type { Metadata } from 'next'
import ThomasClient from './ThomasClient'

export const metadata: Metadata = {
  title: 'Saint Thomas d’Aquin : résumé de la Somme théologique',
  description:
    "Résumé de la Somme théologique de saint Thomas d’Aquin : foi, raison, Dieu, vertus, passions, morale et vie chrétienne.",
  keywords: [
    'Saint Thomas d’Aquin',
    'Somme théologique',
    'Somme théologique résumé',
    'résumé saint Thomas d’Aquin',
    'thomisme',
    'théologie de saint Thomas',
    'vertus',
    'morale',
    'philosophie médiévale',
    'théologie catholique',
  ],
  openGraph: {
    title: 'Saint Thomas d’Aquin : résumé de la Somme théologique',
    description:
      'Les grandes idées de la Somme théologique de saint Thomas d’Aquin.',
    type: 'article',
  },
}

export default function Page() {
  return <ThomasClient />
}