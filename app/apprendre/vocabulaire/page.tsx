'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function VocabulairePage() {
  const [selectedCategory, setSelectedCategory] = useState('animaux')

  const categories = {
    animaux: {
      name: 'Animaus',
      icon: '🐕',
      words: [
        { bearnais: 'Lo can', francais: 'Le chien' },
        { bearnais: 'La gata', francais: 'La chatte' },
        { bearnais: 'Lo cavau', francais: 'Le cheval' },
        { bearnais: 'La vaca', francais: 'La vache' },
        { bearnais: 'Lo porc', francais: 'Le cochon' },
        { bearnais: 'La pola', francais: 'La poule' },
        { bearnais: 'Lo moton', francais: 'Le mouton' },
        { bearnais: 'L\'ors', francais: 'L\'ours' }
      ]
    },
    familha: {
      name: 'Familha',
      icon: '👨‍👩‍👧‍👦',
      words: [
        { bearnais: 'Lo pair', francais: 'Le père' },
        { bearnais: 'La mair', francais: 'La mère' },
        { bearnais: 'Lo hrair', francais: 'Le frère' },
        { bearnais: 'La sòr', francais: 'La sœur' },
        { bearnais: 'Lo hilh', francais: 'Le fils' },
        { bearnais: 'La hilha', francais: 'La fille' },
        { bearnais: 'Lo pairbon', francais: 'Le grand-père' },
        { bearnais: 'La mairbon', francais: 'La grand-mère' }
      ]
    },
    natura: {
      name: 'Natura',
      icon: '🏔️',
      words: [
        { bearnais: 'La montanha', francais: 'La montagne' },
        { bearnais: 'L\'arriu', francais: 'La rivière' },
        { bearnais: 'Lo bòsc', francais: 'La forêt' },
        { bearnais: 'La flor', francais: 'La fleur' },
        { bearnais: 'L\'aubre', francais: 'L\'arbre' },
        { bearnais: 'Lo só', francais: 'Le soleil' },
        { bearnais: 'La lua', francais: 'La lune' },
        { bearnais: 'Lestela', francais: 'L\'étoile' }
      ]
    },
    cosina: {
      name: 'Cosina',
      icon: '🍲',
      words: [
        { bearnais: 'Lo pan', francais: 'Le pain' },
        { bearnais: 'Lo vin', francais: 'Le vin' },
        { bearnais: 'Lo fromatge', francais: 'Le fromage' },
        { bearnais: 'La sopa', francais: 'La soupe' },
        { bearnais: 'La carn', francais: 'La viande' },
        { bearnais: 'Lo peish', francais: 'Le poisson' },
        { bearnais: 'Las cèrbas', francais: 'Les légumes' },
        { bearnais: 'Lo mèu', francais: 'Le miel' }
      ]
    }
  }

  return (
    <>
      <style jsx global>{`
        :root {
          --violet-profond: #4B1E6D;
          --violet-clair: #9B6BB7;
          --violet-tres-clair: #E9DDF2;
          --jaune-vif: #FFD700;
          --jaune-pastel: #FFF4CC;
          --blanc: #FDFBF7;
          --blanc-pur: #FFFFFF;
          --texte-principal: #2D0A45;
          --texte-secondaire: #6B4B7A;
          --fs-xs: clamp(0.75rem, 1.5vw, 0.875rem);
          --fs-sm: clamp(0.875rem, 2vw, 1rem);
          --fs-base: clamp(1rem, 2.5vw, 1.125rem);
          --fs-md: clamp(1.25rem, 3vw, 1.5rem);
          --fs-lg: clamp(1.5rem, 4vw, 2.5rem);
          --space-xs: clamp(0.5rem, 1vw, 0.75rem);
          --space-sm: clamp(0.75rem, 1.5vw, 1rem);
          --space-md: clamp(1rem, 2vw, 1.5rem);
          --space-lg: clamp(1.5rem, 3vw, 2.5rem);
          --space-xl: clamp(2rem, 4vw, 4rem);
        }

        * { box-sizing: border-box; padding: 0; margin: 0; }
        html, body { max-width: 100vw; overflow-x: hidden; background-color: var(--blanc); color: var(--texte-principal); font-family: system-ui, sans-serif; }
        body { -webkit-font-smoothing: antialiased; }
        a { color: inherit; text-decoration: none; }
        .container { width: 100%; max-width: 1200px; margin-left: auto; margin-right: auto; padding-left: var(--space-md); padding-right: var(--space-md); }
        @media (min-width: 1920px) { .container { max-width: 1600px; } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-up { animation: fadeUp 0.4s ease-out forwards; }
      `}</style>

      <main style={{ minHeight: '100vh' }}>
        
        <header style={{
          background: 'var(--violet-profond)',
          padding: 'var(--space-md) 0',
          borderBottom: '3px solid var(--jaune-vif)'
        }}>
          <div className="container" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-md)',
            flexWrap: 'wrap'
          }}>
            <Link href="/apprendre">
              <span style={{ color: 'var(--jaune-vif)', fontSize: 'var(--fs-md)', cursor: 'pointer' }}>
                ← Retour
              </span>
            </Link>
            <h1 style={{ color: 'var(--blanc-pur)', fontSize: 'var(--fs-lg)' }}>
              <span>📚</span> Vocabulari
            </h1>
          </div>
        </header>

        <section style={{ padding: 'var(--space-lg) 0', background: 'var(--violet-tres-clair)' }}>
          <div className="container">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-sm)', justifyContent: 'center' }}>
              {Object.entries(categories).map(([key, cat]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  style={{
                    padding: 'var(--space-sm) var(--space-lg)',
                    fontSize: 'var(--fs-base)',
                    borderRadius: '30px',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    background: selectedCategory === key ? 'var(--jaune-vif)' : 'var(--blanc-pur)',
                    color: selectedCategory === key ? 'var(--violet-profond)' : 'var(--texte-secondaire)'
                  }}
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: 'var(--space-xl) 0', background: 'var(--blanc-pur)' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: 'var(--space-md)'
            }}>
              {categories[selectedCategory as keyof typeof categories].words.map((word, index) => (
                <div key={index} className="animate-fade-up" style={{
                  animationDelay: `${index * 0.03}s`,
                  background: 'var(--jaune-pastel)',
                  padding: 'var(--space-md)',
                  borderRadius: '15px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: 'var(--fs-md)', color: 'var(--violet-profond)', fontWeight: 'bold', marginBottom: 'var(--space-xs)' }}>
                    {word.bearnais}
                  </div>
                  <div style={{ fontSize: 'var(--fs-sm)', color: 'var(--texte-secondaire)' }}>
                    {word.francais}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer style={{ padding: 'var(--space-lg) 0', background: 'var(--violet-profond)', color: 'var(--blanc-pur)', textAlign: 'center' }}>
          <div className="container">
            <p>© 2026 • Aprén lo biarnés</p>
          </div>
        </footer>
      </main>
    </>
  )
}