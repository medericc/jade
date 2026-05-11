type CardVariant =
  | 'yellow'
  | 'purple'
  | 'white'
  | 'gradient'

export type LearningCardType = {
  href: string
  emoji: string
  title: string
  description: string
  button: string
  variant: CardVariant
}

export const learningCards: LearningCardType[] = [
  {
    href: '/apprendre/conjugaison',
    emoji: '📝',
    title: 'Conjugason',
    description:
      'Apprends à conjuguer les verbes essentiels : être, avoir, aller, faire...',
    button: 'Commencer →',
    variant: 'yellow'
  },
  {
    href: '/apprendre/phrases',
    emoji: '💬',
    title: 'Frasas correntas',
    description:
      'Salutations, présentations, expressions de tous les jours...',
    button: 'Découvrir →',
    variant: 'purple'
  },
  {
    href: '/apprendre/dictionnaire',
    emoji: '📚',
    title: 'Vocabulari',
    description:
      'Animaux, nourriture, famille, nature... Enrichis ton vocabulaire !',
    button: 'Explorer →',
    variant: 'white'
  },
  {
    href: '/apprendre/culture',
    emoji: '🏔️',
    title: 'Cultura',
    description:
      "Histoire, chants, traditions... Plonge dans l'âme du Béarn !",
    button: 'Découvrir →',
    variant: 'gradient'
  }
]