import type { Metadata } from 'next'
import HildegardeClient from './HildegardeClient'

export const metadata: Metadata = {
  title: 'Sainte Hildegarde de Bingen : âme, corps et vie spirituelle',
  description:
    "Découvrez la pensée de sainte Hildegarde de Bingen sur l'âme, le corps, la vie spirituelle, le péché, la croissance intérieure et la lumière de Dieu.",
  keywords: [
    'Sainte Hildegarde de Bingen',
    'Hildegarde de Bingen',
    'âme et corps',
    'spiritualité de Hildegarde',
    'enseignements de Hildegarde',
    'théologie catholique',
    'Docteur de l’Église',
    'spiritualité chrétienne',
  ],
  openGraph: {
    title: 'Sainte Hildegarde de Bingen : âme, corps et vie spirituelle',
    description:
      "La pensée de sainte Hildegarde de Bingen sur l'âme, le corps et la vie spirituelle.",
    type: 'article',
  },
}

export default function Page() {
  return <HildegardeClient />
}