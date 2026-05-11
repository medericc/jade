import LearningCard from './LearningCard'
import { learningCards } from './data'

export default function LearningGrid() {
  return (
    <section className="learning-section">
      <div className="container">
        <h2>Qué vòs apréner ?</h2>

        <div className="learning-grid">
          {learningCards.map((card) => (
            <LearningCard key={card.href} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}