import Link from 'next/link'

import Button from '../ui/Button'

import './fanzone.css'

const stats = [
  {
    value: '127K',
    label: 'Followers'
  },
  {
    value: '45K',
    label: 'Likes'
  },
  {
    value: '892',
    label: 'Posts'
  }
]

const socials = [
  '📸 Instagram',
  '🐦 X (Twitter)',
  '🎥 TikTok'
]

export default function FanZoneSection() {
  return (
    <section className="section fanzone-section">
      <div className="container fanzone-layout">
        <div className="fanzone-left">
          <span className="section-badge">Communauté</span>

          <h2>Fan Zone</h2>

          <p>
            Retrouve les highlights, les moments forts et toute la communauté
            autour de Jade Célerier.
          </p>

          <div className="fan-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="fan-stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="social-buttons">
            {socials.map((social) => (
              <button key={social}>{social}</button>
            ))}
          </div>
        </div>

        <div className="fanzone-card">
          <div className="fanzone-icon">🗣️</div>

          <h3>E tù, que parles biarnés ?</h3>

          <p>
            Apprends la langue de Gaston Fébus et plonge dans la culture
            béarnaise.
          </p>

          <Link href="/apprendre">
         <Button
  href="/apprendre"
  variant="secondary"
  size="lg"
  fullWidth
>
  Commencer l’aventure
</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}