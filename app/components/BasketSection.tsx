import styles from './basket.module.css'

export default function SeoSection() {
  return (
    <section className={styles.seoSection}>
      <div className="container">
        <div className={styles.seoContent}>

          <span className={styles.badge}>
            Basket • Béarn • Culture
          </span>

          <h2>
            Jade Célérier, basket et culture béarnaise
          </h2>

          <div className={styles.text}>
        <p>
  Le parcours de Jade dans le basket avec les
  différentes étapes de sa carrière, de ses débuts à Malaussane (MMBS) jusqu’à son
  passage aux États-Unis (Dodge City). Retrouvez son histoire, son actualité,
  ses moments forts et l’univers qui accompagne son parcours
  sportif.
</p>

<p>
  Découvrez également le <strong>béarnais</strong>, apprenez la langue, la
  conjugaison, consultez un dictionnaire complet avec des ressources
  accessibles pour apprendre à votre rythme.
</p>

<p>
  Entre <strong>basket, Béarn, langue et culture</strong>,
  un univers qui relie une aventure sportive à un territoire et aux changements sociétaux dans le monde guidés par la Vérité.
</p>
          </div>

          <div className={styles.keywords} aria-label="Thématiques du site">
            <span>Basket</span>
            <span>Jade Célérier</span>
            <span>Béarn</span>
            <span>Béarnais</span>
            <span>Culture</span>
            <span>Monde</span>
          </div>

        </div>
      </div>
    </section>
  )
}