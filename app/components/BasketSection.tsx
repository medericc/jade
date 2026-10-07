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
  Suivez le parcours de Jade dans le basket et <strong>apprenez le béarnais</strong>. De ses débuts à Malaussane (MMBS) jusqu’à son
  passage aux États-Unis (Conquistadors de Dodge City). Retrouvez son histoire, son actualité,
  ses moments forts et l’univers qui accompagne son parcours
  sportif.
</p>

<p>
  Découvrez le béarnais tout en explorant la carrière de <strong>Jade Célérier</strong>, maîtrisez la langue, sa
  conjugaison, consultez un <strong>dictionnaire</strong> complet avec des ressources
  accessibles pour <strong>apprendre</strong> à votre rythme.
</p>

<p>
  Entre <strong>basket, Béarn, langue et culture</strong>,
 voici un univers qui relie une aventure sportive à un territoire et aux <strong>changements sociétaux et politiques</strong> dans le monde, guidés par la Vérité.
</p>
          </div>

        
        </div>
      </div>
    </section>
  )
}