import HeroBackground from './HeroBackground'
import HistoricalFigure from './HistoricalFigure'
import PlayerSpotlight from './PlayerSpotlight'
import Button from '../ui/Button'

import './hero.css'

const figures = [
  {
    icon: '👑',
    name: 'Gaston Fébus'
  },
  {
    icon: '⚔️',
    name: 'Gaston IV'
  },
  {
    icon: '👸',
    name: 'Catherine de Bourbon'
  },
  {
    icon: '⚜️',
    name: 'Jeanne d’Albret'
  }
]

export default function HeroSection() {
  return (
    <section className="hero-section">
      <HeroBackground />

      <div className="container hero-content">
        <div className="historical-grid">
          {figures.map((figure) => (
            <HistoricalFigure
              key={figure.name}
              icon={figure.icon}
              name={figure.name}
            />
          ))}
        </div>

        <PlayerSpotlight />

        <div className="hero-bottom fade-up">
          <blockquote>
            “Après la pluie viendra le soleil”
          </blockquote>

          <Button href="/apprendre">
            Commencer l’aventure
          </Button>
        </div>
      </div>
    </section>
  )
}