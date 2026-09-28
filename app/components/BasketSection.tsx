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
              Découvrez Jade Célérier, son parcours dans le basket et les
              différentes étapes de sa carrière, de ses débuts jusqu’à son
              aventure aux États-Unis. Retrouvez son histoire, son actualité,
              ses moments forts et l’univers qui accompagne son parcours
              sportif.
            </p>

            <p>
              Le site permet également de découvrir le <strong>béarnais</strong>
              et la richesse de la culture du Béarn. Que vous souhaitiez
              apprendre quelques mots et expressions, découvrir la
              conjugaison, consulter un dictionnaire ou mieux comprendre
              cette langue et son patrimoine, vous trouverez des ressources
              accessibles pour apprendre à votre rythme.
            </p>

            <p>
              Entre <strong>basket, Béarn, langue et culture</strong>, découvrez
              un univers qui relie une aventure sportive à un territoire, son
              histoire et son identité. Explorez le parcours de Jade Célérier,
              apprenez le béarnais et plongez dans la culture du Béarn et du
              Monde dans la Vérité.
            </p>
          </div>

          <div className={styles.keywords} aria-label="Thématiques du site">
            <span>Basket</span>
            <span>Jade Célérier</span>
            <span>Béarn</span>
            <span>Béarnais</span>
            <span>Culture</span>
            <span>Langue béarnaise</span>
          </div>

        </div>
      </div>
    </section>
  )
}