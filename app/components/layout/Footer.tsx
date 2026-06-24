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
            Dodge City 🇺🇸
          </span>

          <span className={styles.motto}>
            Toque-y Si Gauses ⚜️
          </span>
        </div>

      </div>
    </footer>
  )
}