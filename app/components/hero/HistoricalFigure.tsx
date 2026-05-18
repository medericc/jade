import styles from './historicalFigure.module.css'

interface Props {
  icon: string
  name: string
}

export default function HistoricalFigure({ icon, name }: Props) {
  return (
    <div className={`${styles.historicalCard} fade-up`}>
      <div className={styles.historicalAvatar}>
        <span>{icon}</span>
      </div>

      <p>{name}</p>
    </div>
  )
}