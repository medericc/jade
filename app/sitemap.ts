import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.ton-domaine.fr'

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
    {
      url: `${base}/apprendre/culture/theologie/augustin`,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${base}/apprendre/culture/theologie/catherine`,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${base}/apprendre/culture/theologie/hildegarde`,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${base}/apprendre/culture/theologie/therese`,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${base}/apprendre/culture/theologie/thomasdaquin`,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ]
}