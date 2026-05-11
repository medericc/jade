interface Props {
  year: string
  title: string
  desc: string
   delay?: number
}

export default function TimelineCard({ year, title, desc }: Props) {
  return (
    <article className="timeline-card fade-up">
      <span>{year}</span>

      <h3>{title}</h3>

      <p>{desc}</p>
    </article>
  )
}