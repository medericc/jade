interface Props {
  icon: string
  name: string
}

export default function HistoricalFigure({ icon, name }: Props) {
  return (
    <div className="historical-card fade-up">
      <div className="historical-avatar">
        <span>{icon}</span>
      </div>

      <p>{name}</p>
    </div>
  )
}