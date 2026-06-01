// HeroSection.tsx

import styles from './styles.module.css'

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.heroGrid}`}>

        <div className={styles.heroContent}>

          <h2>
            La noùste léncou, lou noùste tresor
          </h2>

          <p>
            Le béarnais, langue de Gaston Fébus et des rois de Navarre,
            est parlé depuis plus de 1000 ans dans nos vallées.
            Aujourd&apos;hui, plus de 50 000 personnes le parlent encore !
          </p>

          <div className={styles.heroTags}>

         

            <span className={`${styles.heroTag} ${styles.secondary}`}>
              Leçons gratuites
            </span>

          </div>

        </div>

        <div className={styles.quoteCard}>

          <div className={styles.quoteEmoji}>
            💬
          </div>

          <p className={styles.quoteText}>
            &quot;Que tieni lou Biarn qui de Diu&quot;
          </p>

          <span className={styles.quoteAuthor}>
            Gastoû Febus
          </span>

        </div>

      </div>
    </section>
  )
}