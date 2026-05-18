import styles from './career.module.css'

interface Props {
  year: string
  title: string
  desc: string
  delay?: number
}

export default function TimelineCard({
  year,
  title,
  desc,
  delay = 0
}: Props) {
  return (
    <article
      className={styles.timelineCard}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={styles.timelineGlow} />

      <span className={styles.timelineYear}>
        {year}
      </span>

      <div className={styles.timelineContent}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </article>
  )
}