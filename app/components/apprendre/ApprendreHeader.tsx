// ApprendreHeader.tsx

import Link from 'next/link'
import styles from './styles.module.css'

export default function ApprendreHeader() {
  return (
    <header className={styles.apprendreHeader}>
      <div className={`container ${styles.apprendreHeaderContent}`}>

        <Link href="/" className={styles.backLink}>
          ← Retour
        </Link>

        <h1 className={styles.apprendreTitle}>
      
          <span>Aprén lou biarnés !</span>
        </h1>

    
      </div>
    </header>
  )
}