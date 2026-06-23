import Image from 'next/image'
import styles from './playerSpotlight.module.css'

export default function PlayerSpotlight() {
  return (
    <div className={`${styles.playerWrapper} fade-up`}>

   
      {/* JOUEUSE */}
      <div className={styles.playerImageWrapper}>
        <Image
          src="/jadece.png"
          alt="Jade Celerier"
          fill
          priority
          className={styles.playerImage}
        />

        <div className={styles.playerOverlay} />
      </div>

      <h1 id="hero-heading">JADE CELERIER</h1>
      <p>#04 • Meneuse • Dodge City</p>
    </div>
  )
}