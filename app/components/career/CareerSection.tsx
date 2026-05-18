import Link from 'next/link'
import TimelineCard from './TimelineCard'
import Button from '../ui/Button'
import styles from './career.module.css'

const career = [
  {
    year: '2022',
    title: 'Draft WNBA',
    desc: 'Sélectionnée par les New York Liberty'
  },
  {
    year: '2023',
    title: 'Championne de France',
    desc: 'Titre avec l’Élan Béarnais'
  },
  {
    year: '2024',
    title: 'MVP LFB',
    desc: 'Meilleure joueuse du championnat'
  },
  {
    year: '2025',
    title: 'Euroleague',
    desc: 'Final Four avec l’Élan'
  }
]

export default function CareerSection() {
  return (
    <section className={styles.careerSection}>
      <div className="container">

        <div className={styles.sectionHeader}>
          <span className={styles.badge}>Parcours</span>
          <h2>Sa Carrière</h2>
          <p>
            Une progression constante entre ambition,
            leadership et culture béarnaise.
          </p>
        </div>

        <div className={styles.careerGrid}>
          {career.map((item, index) => (
            <TimelineCard
              key={item.year}
              year={item.year}
              title={item.title}
              desc={item.desc}
              delay={index * 0.15}
            />
          ))}
        </div>

        <div className={styles.careerCta}>
          
            <Button href="/carriere" variant="primary" size="lg" > Voir le parcours complet </Button>
         
        </div>

      </div>
    </section>
  )
}