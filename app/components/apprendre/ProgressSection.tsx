const stats = [
  {
    value: 0,
    label: 'Leçons complétées'
  },
  {
    value: 0,
    label: 'Mots appris'
  },
  {
    value: 0,
    label: 'Points XP'
  }
]

export default function ProgressSection() {
  return (
    <section className="progress-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <div className="value">{stat.value}</div>

              <div>{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="progress-wrapper">
          <div className="progress-header">
            <span>Niveau 1 - Aprenent</span>
            <span>0/100 XP</span>
          </div>

          <div className="progress-bar">
            <div className="progress-fill" />
          </div>
        </div>
      </div>
    </section>
  )
}