
import styles from './footer.module.css'
export default function Footer() {
  return (
   <footer className={styles.footer}>
  <div className={styles.footerGlow} />

  <div className={`container ${styles.footerContent}`}>
    <div>
      <span className={styles.footerBrand}>
        JADE CÉLERIER
      </span>

      <p className={styles.footerDescription}>
        Basket, Béarn, héritage et ambition réunis dans une même énergie.
      </p>
    </div>

    <div className={styles.footerDivider} />

    <div className={styles.footerBottom}>
      <span>© 2026 • Jade Célerier Fan • Dodge City</span>
      <span>Toque-y Si Gauses 🏀⚜️</span>
    </div>
  </div>
</footer>
  )
}