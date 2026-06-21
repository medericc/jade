import type { Metadata } from 'next'
import DicoClient from './DicoClient'

export const metadata = {
  title:
    "Dictionnaire béarnais français | Traduction et définitions",
  description:
    "Consultez un dictionnaire béarnais-français avec des centaines de mots, définitions et traductions pour apprendre la langue béarnaise.",
}

export default function Page() {
  return <DicoClient />
}