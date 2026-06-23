import Link from 'next/link'

import Button from '../ui/Button'
import styles from './fan.module.css'


const stats = [
  { value: '1.9K', label: 'Followers' },
  { value: '1K', label: 'Likes' },
  { value: '10', label: 'Posts' }
]

const socials = [
  {
    label: '📸 Instagram',
    href: 'https://www.instagram.com/lena_jade_backcourt/',
  },
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
    <Link
      key={social.label}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <button>{social.label}</button>
    </Link>
  ))}
</div>
        </div>

        {/* RIGHT CARD */}
        <div className={styles.fanzoneCard}>
          <div className={styles.fanzoneIcon}>🗣️</div>

          <h3 id="fan-zone-heading">E tù, que parles biarnés ?</h3>

          <p>
            Apprends la langue de Gaston Fébus et plonge dans la culture
            béarnaise.
          </p>

          
         <Button
  href="/apprendre"
  variant="secondary"
  size="lg"
  fullWidth
>
  Commencer l’aventure
</Button>
          
        </div>
      </div>
    </section>
  )
}