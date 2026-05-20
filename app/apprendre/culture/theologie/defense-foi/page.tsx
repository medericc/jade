'use client'

import data from '@/data/culture/theologie.json'
import styles from './defense.module.css'
import Link from 'next/link'

export default function Page() {
  return (
    <main className={styles.theologiePage}>
<header className={styles.header}>
  <div className={`container ${styles.headerContent}`}>
    <Link
      href="/apprendre/culture"
      className={styles.backLink}
    >
      ← Retour
    </Link>
  </div>
</header>
      {/* HERO */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              ✨ Théologie Catholique
            </div>

            <h1 className={styles.heroTitle}>
              Explorer la pensée,
              <br />
              la foi et la sagesse
              <br />
              de l’Église
            </h1>

            <p className={styles.heroText}>
              Une traversée spirituelle et intellectuelle
              à travers les grands thèmes de la théologie,
              les saints, la doctrine et la contemplation.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.contentSection}>
        <div className="container">

          <div className={styles.contentGrid}>
            {data.map((block, index) => (
              <article
                key={index}
                className={`${styles.contentCard} ${
                  index % 2 === 0
                    ? styles.white
                    : styles.purple
                }`}
              >
                <div className={styles.cardTop}>
                  <div className={styles.cardIcon}>
                    ✝️
                  </div>

                  <span className={styles.cardNumber}>
                    0{index + 1}
                  </span>
                </div>

                <div className={styles.cardContent}>
                  <p className={styles.cardText}>
                    {block.fr}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

    </main>
  )
}