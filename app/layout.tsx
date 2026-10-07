import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'

// Search Console

const siteUrl = 'https://www.jadecelerierbearn.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Jade Célérier | Basket, Béarnais et Culture',
    template: '%s | Jade Célérier',
  },

  description:
    "Jade Célérier, sa carrière de basket, ainsi que des ressources pour apprendre le béarnais : cours, conjugaison, dictionnaire, culture du Béarn et du Monde dans la Vérité.",

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

    const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Jade Célérier",
    "url": siteUrl,
    "logo": `${siteUrl}/favicon.svg`,
  }

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jade Célérier",
    "url": siteUrl,
    "image": `${siteUrl}/jadece.png`,
    "jobTitle": "Joueuse de basket",
    "sameAs": [
      "https://www.instagram.com/lena_jade_backcourt/",
    ],
  }

  return (
    <html lang="fr">
 <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
      </head>
      <body>
        
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-Q5FNLCZYQ9" strategy="afterInteractive" /> <Script id="google-analytics" strategy="afterInteractive"> {` window.dataLayer = window.dataLayer || []; function gtag(){window.dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-Q5FNLCZYQ9'); `} </Script>
        {children}</body>
    </html>
  )
}