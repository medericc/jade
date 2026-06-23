import Link from 'next/link'
import TimelineCard from './TimelineCard'
import Button from '../ui/Button'
import styles from './career.module.css'

const career = [
  {
    year: '-2021',
    title: 'Début à Malaussane',
    desc: 'Commence le Basket-ball'
  },
  {
    year: '-2025',
    title: 'Entrée au TGB',
    desc: 'Continue le Basket en Bigorre'
  },
  {
    year: '-2025',
    title: 'Début en LFB',
    desc: 'Joue ses premiers matchs en LFB'
  },
  {
    year: '2025-',
    title: 'En NJCAA à Dodge',
    desc: 'Continue sa carrière aux USA'
  }
]

export default function CareerSection() {
  return (
    <section className={styles.careerSection}>
      <div className="container">

        <div className={styles.sectionHeader}>
          <span className={styles.badge}>Parcours</span>
          <h2 id="career-heading">Sa Carrière</h2>
          <p>
            Une multitude de clubs en quelques années
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