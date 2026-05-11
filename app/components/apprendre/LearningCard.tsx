'use client'

import Link from 'next/link'

type Props = {
  href: string
  emoji: string
  title: string
  description: string
  button: string
  variant: 'yellow' | 'purple' | 'white' | 'gradient'
}

export default function LearningCard({
  href,
  emoji,
  title,
  description,
  button,
  variant
}: Props) {
  return (
    <Link href={href} className={`learning-card ${variant}`}>
      <div className="emoji">{emoji}</div>

      <h3>{title}</h3>

      <p>{description}</p>

      <span>{button}</span>
    </Link>
  )
}