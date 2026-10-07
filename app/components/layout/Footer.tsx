import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">

        <div className={styles.top}>
          <span className={styles.brand}>
            JADE CÉLERIER
          </span>

          <p className={styles.description}>
            Basket • Béarn • Culture
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <span className={styles.motto}> 
            © 2026 Jade Célerier Fan
          </span>

          <span className={styles.location}>
            Dodge City
          </span>

         <a href="https://histoiredubearn.fr" className={styles.motto} target="_blank" rel="noopener noreferrer" > Toque-y Si Gauses ⚜️ </a>
        </div>

      </div>
    </footer>
  )
}