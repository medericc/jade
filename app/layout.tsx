import './globals.css'
import type { Metadata } from 'next'


// Search Console


export const metadata: Metadata = {
  metadataBase: new URL('https://www.ton-domaine.fr'),
  title: {
    default: 'Jade Célérier • Basket, Béarnais, Histoire et Culture',
    template: '%s | Jade Célérier',
  },
  description:
    "Découvrez la carrière de la basketteuse Jade Célérier, apprenez le béarnais grâce à des cours, un dictionnaire et des conjugaisons, et explorez l'histoire du Béarn, l'histoire du monde et les enseignements de grands saints catholiques.",
  keywords: [
    'Jade Célérier',
    'basket',
    'basket féminin',
    'béarnais',
    'langue béarnaise',
    'cours de béarnais',
    'conjugaison béarnaise',
    'dictionnaire béarnais',
    'Béarn',
    'histoire du Béarn',
    'théologie catholique',
    'saints',
    "docteurs de l'Église",
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
     url: '',
    title: 'Jade Célérier • Basket, Béarnais, Histoire et Culture',
    description:
      "Carrière sportive, apprentissage du béarnais et découverte de l'histoire et de la culture du Béarn.",
    siteName: 'Jade Célérier',
     images: [
    {
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Jade Célérier',
    }, ],
  },
 twitter: {
  card: 'summary_large_image',
  title: 'Jade Célérier • Basket, Béarnais, Histoire et Culture',
   description:
      "Carrière sportive, apprentissage du béarnais et découverte de l'histoire et de la culture du Béarn.",
   images: ['/og-image.jpg'],
},
  alternates: {
    canonical: '/',
  },
  icons: {
  icon: '/favicon.ico',
  apple: '/apple-touch-icon.png',
},
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}