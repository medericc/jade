import './globals.css'
import type { Metadata } from 'next'


// Search Console

const siteUrl = 'https://www.ton-domaine.fr'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Jade Célérier | Basket, Béarnais et Culture',
    template: '%s | Jade Célérier',
  },

  description:
    "Découvrez Jade Célérier, sa carrière dans le basket, ainsi que des ressources pour apprendre le béarnais : cours, conjugaison, dictionnaire et culture du Béarn et du Monde dans la Vérité.",

  applicationName: 'Jade Célérier',

  authors: [
    {
      name: 'Jade Célérier',
    },
  ],

  creator: 'Jade Célérier',
  publisher: 'Jade Célérier',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName: 'Jade Célérier',
    title: 'Jade Célérier | Basket, Béarnais et Culture',
    description:
      "Carrière sportive, apprentissage du béarnais et découverte de la culture et de l'histoire du Béarn.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jade Célérier – Basket, Béarnais et Culture',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Jade Célérier | Basket, Béarnais et Culture',
    description:
      "Carrière sportive, apprentissage du béarnais et découverte de la culture du Béarn.",
    images: ['/og-image.jpg'],
  },

  icons: {
    icon: [
      {
        url: '/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  appleWebApp: {
    capable: true,
    title: 'Jade Célérier',
    statusBarStyle: 'default',
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