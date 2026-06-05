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
    title: 'Counyuguesoû',
    description:
      'Apprends à conjuguer les verbes essentiels : être, avoir, aller, faire...',
    button: 'Alenga →',
    variant: 'yellow'
  },
  {
    href: '/apprendre/cours',
    emoji: '💬',
    title: 'Mantûes Leçoûs',
    description:
      'Salutations, présentations, expressions de tous les jours...',
    button: 'Apréne →',
    variant: 'purple'
  },
  {
    href: '/apprendre/dictionnaire',
    emoji: '📚',
    title: 'Dicciounàri',
    description:
      'Animaux, nourriture, famille, nature... Enrichis ton vocabulaire !',
    button: 'Esploura →',
    variant: 'white'
  },
  {
    href: '/apprendre/culture',
    emoji: '🏔️',
    title: 'Culture',
    description:
      "Apprenez le béarnais en immersion dans des textes en version française et béarnaise pour maîtriser la langue tout en découvrant l'histoire.",
    button: 'Descoubri →',
    variant: 'gradient'
  }
]