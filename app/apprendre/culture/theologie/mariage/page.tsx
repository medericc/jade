import type { Metadata } from 'next'
import MariageClient from './MariageClient'

export const metadata: Metadata = {
  title: 'Signification sponsale du corps | Théologie du Corps',
  description:
    "Qu'est-ce que la signification sponsale du corps ? Découvrez cette notion centrale de la Théologie du Corps de saint Jean-Paul II : homme et femme, don de soi, mariage, chasteté, communion et rédemption.",
  keywords: [
    'signification sponsale du corps',
    'signification sponsale',
    'théologie du corps',
    'Jean-Paul II',
    'saint Jean-Paul II',
    'mariage chrétien',
    'don de soi',
    'communion des personnes',
    'homme et femme',
    'chasteté',
    'concupiscence',
    'rédemption',
    'saint Augustin',
  ],
  openGraph: {
    title: 'Signification sponsale du corps | Théologie du Corps',
    description:
      "Comprendre la signification sponsale du corps selon saint Jean-Paul II.",
    type: 'article',
  },
}

export default function Page() {
  return <MariageClient />
}