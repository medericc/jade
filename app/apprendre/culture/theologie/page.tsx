'use client'

import Link from 'next/link'

import Footer from '../../../components/layout/Footer'

import '../../../components/apprendre/styles.css'

const theologyCards = [
  {
    title: 'Saint Augustin',
    emoji: '📖',
    href: '/apprendre/theologie/augustin',
    description:
      'Découvre les écrits, la pensée et la conversion du grand docteur de l’Église.'
  },
  {
    title: "Sainte Thérèse d'Avila",
    emoji: '⛪',
    href: '/apprendre/theologie/therese',
    description:
      'Explore la mystique chrétienne et les enseignements de la réformatrice du Carmel.'
  },
  {
    title: 'Sainte Catherine de Sienne',
    emoji: '🕊️',
    href: '/apprendre/theologie/catherine',
    description:
      'Découvre la vie, les lettres et la foi profonde de la patronne de l’Europe.'
  },
  {
    title: 'Sainte Hildegarde de Bingen',
    emoji: '🌾',
    href: '/apprendre/theologie/hildegarde',
    description:
      'Découvre la vie dès la conception et l\'âme humaine.'
  },
  {
    title: 'Défense de la foi',
    emoji: '⚔️',
    href: '/apprendre/theologie/defense-foi',
    description:
      'Réponses aux objections, apologétique chrétienne et fondements de la foi.'
  }
]

export default function TheologiePage() {
  return (
    <main className="apprendre-page">
      {/* HEADER */}
      <header className="apprendre-header">
        <div className="container apprendre-header-content">
          <Link href="/apprendre" className="back-link">
            ← Retour
          </Link>

          <h1 className="apprendre-title">
            <span>✝️</span>
            <span>Théologie</span>
          </h1>

          <span className="apprendre-subtitle">
            Foi • Saints • Spiritualité
          </span>
        </div>
      </header>

      {/* HERO */}
      <section className="hero-section">
        <div className="container">
          <div
            style={{
              textAlign: 'center',
              maxWidth: '900px',
              margin: '0 auto'
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                color: 'var(--violet-profond)',
                marginBottom: '1.5rem',
                fontWeight: 800
              }}
            >
              Étudier la foi chrétienne
            </h2>

            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                lineHeight: 1.8,
                color: 'var(--texte-secondaire)'
              }}
            >
              Découvre les grands saints, la spiritualité chrétienne
              et les fondements de la foi catholique à travers
              des enseignements accessibles et structurés.
            </p>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="learning-section">
        <div className="container">
          <div
            className="learning-grid"
            style={{
              gridTemplateColumns:
                'repeat(auto-fit, minmax(240px, 1fr))'
            }}
          >
            {theologyCards.map((card, index) => (
              <Link
                key={card.href}
                href={card.href}
                className={`learning-card ${
                  index % 2 === 0 ? 'white' : 'purple'
                } animate-fade-up`}
              >
                <div className="card-emoji">
                  {card.emoji}
                </div>

                <h3>{card.title}</h3>

                <p>{card.description}</p>

                <div className="card-link">
                  Explorer
                  <span className="card-arrow">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}