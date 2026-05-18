// ProgressSection.tsx

import styles from './styles.module.css'

const stats = [
  {
    value: 0,
    label: 'Leçons complétées'
  },
  {
    value: 0,
    label: 'Mots appris'
  },
  {
    value: 0,
    label: 'Points XP'
  }
]

export default function ProgressSection() {
  return (
    <section className={styles.progressSection}>
      <div className="container">

        <div className={styles.statsGrid}>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={styles.statCard}
            >

              <div className={styles.statValue}>
                {stat.value}
              </div>

              <div className={styles.statLabel}>
                {stat.label}
              </div>

            </div>
          ))}
        </div>

        <div className={styles.progressWrapper}>

          <div className={styles.progressHeader}>
            <span>Niveau 1 - Aprenent</span>
            <span>0/100 XP</span>
          </div>

          <div className={styles.progressBar}>
            <div className={styles.progressFill} />
          </div>

        </div>

      </div>
    </section>
  )
}