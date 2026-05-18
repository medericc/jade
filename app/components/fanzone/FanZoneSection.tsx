import Link from 'next/link'

import Button from '../ui/Button'
import styles from './fan.module.css'


const stats = [
  { value: '127K', label: 'Followers' },
  { value: '45K', label: 'Likes' },
  { value: '892', label: 'Posts' }
]

const socials = [
  '📸 Instagram',
  '🐦 X (Twitter)',
  '🎥 TikTok'
]

export default function FanZoneSection() {
  return (
    <section className={styles.fanzoneSection}>
      <div className={`container ${styles.fanzoneLayout}`}>

        {/* LEFT SIDE */}
        <div className={styles.fanzoneLeft}>
          <span className={styles.sectionBadge}>Communauté</span>

          <h2>Fan Zone</h2>

          <p>
            Retrouve les highlights, les moments forts et toute la communauté
            autour de Jade Célerier.
          </p>

          <div className={styles.fanStats}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.fanStatCard}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.socialButtons}>
            {socials.map((social) => (
              <button key={social}>{social}</button>
            ))}
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className={styles.fanzoneCard}>
          <div className={styles.fanzoneIcon}>🗣️</div>

          <h3>E tù, que parles biarnés ?</h3>

          <p>
            Apprends la langue de Gaston Fébus et plonge dans la culture
            béarnaise.
          </p>

          <Link href="/apprendre">
         <Button
  href="/apprendre"
  variant="secondary"
  size="lg"
  fullWidth
>
  Commencer l’aventure
</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}