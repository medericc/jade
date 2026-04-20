import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Basket & Béarn • La Joueuse Pro',
  description: 'Carrière de basketteuse professionnelle et apprentissage du béarnais',
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