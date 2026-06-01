// LearningGrid.tsx

import LearningCard from './LearningCard'
import { learningCards } from './data'
import styles from './styles.module.css'

export default function LearningGrid() {
  return (
    <section className={styles.learningSection}>
      <div className="container">

        <h2 className={styles.sectionTitle}>
          Que bos apréne ?
        </h2>

        <div className={styles.learningGrid}>
          {learningCards.map((card) => (
            <LearningCard
              key={card.href}
              {...card}
            />
          ))}
        </div>

      </div>
    </section>
  )
}