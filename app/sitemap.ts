import type { MetadataRoute } from 'next'
// Pages détaillées présentes dans Timeline.tsx
const cultureHistorySlugs = [
  // Histoire du Béarn
  'fondement',
  'souverain',
  'republique',
  'navarre',
  'monarchie-absolue',
  'la-terreur',

  // Histoire du monde
  'eglise',
  'naissance-france',
  'capet',
  'sainte-jeanne',
  'calviniste',
  'paris',
  'revolution-france',
  'technologie',
]
  const base = 'https://www.jadecelerierbearn.com'


export default function sitemap(): MetadataRoute.Sitemap {

  return [
    {
      url: `${base}/`,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${base}/carriere`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/apprendre`,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${base}/apprendre/cours`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/apprendre/conjugaison`,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${base}/apprendre/dictionnaire`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/apprendre/culture`,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
     ...cultureHistorySlugs.map((slug) => ({
      url: `${base}/apprendre/culture/histoire/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
  ]
}