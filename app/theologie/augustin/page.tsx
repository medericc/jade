import type { Metadata } from 'next'
import AugustinClient from './AugustinClient'

export const metadata: Metadata = {
  title: 'Saint Augustin et la prière : enseignements sur Dieu et le bonheur',
  description:
    "Que dit saint Augustin sur la prière, le désir de Dieu, la vie éternelle et le vrai bonheur ? Découvrez ses principaux enseignements dans la tradition chrétienne.",
  keywords: [
    'Saint Augustin',
    'Saint Augustin prière',
    'prière selon saint Augustin',
    'enseignement de saint Augustin',
    'saint Augustin Dieu',
    'saint Augustin bonheur',
    'vie éternelle',
    'théologie catholique',
  ],
  openGraph: {
    title: 'Saint Augustin et la prière : enseignements sur Dieu et le bonheur',
    description:
      "Les enseignements de saint Augustin sur la prière, le désir de Dieu, la vie éternelle et le bonheur.",
    type: 'article',
  },
}

export default function Page() {
  return <AugustinClient />
}