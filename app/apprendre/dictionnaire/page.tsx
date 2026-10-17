import type { Metadata } from 'next'
import DicoClient from './DicoClient'

export const metadata = {
  title:
    "Dictionnaire et traduction béarnais français",
  description:
    "Traduire en béarnais ou en français : dictionnaire gratuit de + de 11 000 mots avec définitions et traductions",
 alternates: { canonical: '/apprendre/dictionnaire' },
  }

export default function Page() {
  return <DicoClient />
}