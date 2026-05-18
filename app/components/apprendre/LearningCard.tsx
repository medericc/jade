// LearningCard.tsx

'use client'

import Link from 'next/link'
import styles from './styles.module.css'

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
    <Link
      href={href}
      className={`${styles.learningCard} ${styles[variant]}`}
    >

      <div className={styles.cardEmoji}>
        {emoji}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <span className={styles.cardLink}>
        {button}

        <span className={styles.cardArrow}>
          →
        </span>
      </span>

    </Link>
  )
}