'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function PhrasesPage() {
  const [selectedCategory, setSelectedCategory] = useState('salutations')
  const [showTranslation, setShowTranslation] = useState<number | null>(null)

  const categories = {
    salutations: {
      name: 'Salutacions',
      phrases: [
        { bearnais: 'Adishatz !', francais: 'Bonjour / Au revoir !' },
        { bearnais: 'Bona jornada !', francais: 'Bonne journée !' },
        { bearnais: 'Bonsoir !', francais: 'Bonsoir !' },
        { bearnais: 'A deman !', francais: 'À demain !' },
        { bearnais: 'Au reveire !', francais: 'Au revoir !' },
        { bearnais: 'Adiu !', francais: 'Salut !' }
      ]
    },
    presentations: {
      name: 'Presentacions',
      phrases: [
        { bearnais: 'Com t\'apèras ?', francais: 'Comment t\'appelles-tu ?' },
        { bearnais: 'Que m\'apèri...', francais: 'Je m\'appelle...' },
        { bearnais: 'Encantat/Encantada !', francais: 'Enchanté/Enchantée !' },
        { bearnais: 'D\'on ès ?', francais: 'D\'où es-tu ?' },
        { bearnais: 'Que sòi de Pau', francais: 'Je suis de Pau' },
        { bearnais: 'Quin vas ?', francais: 'Comment vas-tu ?' }
      ]
    },
    quotidien: {
      name: 'Vida vidanta',
      phrases: [
        { bearnais: 'Que vau plan', francais: 'Ça va bien' },
        { bearnais: 'Merci plan !', francais: 'Merci beaucoup !' },
        { bearnais: 'De nada', francais: 'De rien' },
        { bearnais: 'Per favor', francais: 'S\'il vous plaît' },
        { bearnais: 'Pardon !', francais: 'Pardon / Excusez-moi !' },
        { bearnais: 'Que compreni pas', francais: 'Je ne comprends pas' }
      ]
    },
    expressions: {
      name: 'Expressions bearnesas',
      phrases: [
        { bearnais: 'Que plau !', francais: 'Il pleut !' },
        { bearnais: 'Que hè calor !', francais: 'Il fait chaud !' },
        { bearnais: 'Que hè heret !', francais: 'Il fait froid !' },
        { bearnais: 'Quin aquò va ?', francais: 'Comment ça va ?' },
        { bearnais: 'A plaser !', francais: 'Avec plaisir !' },
        { bearnais: 'Bona nuèit !', francais: 'Bonne nuit !' }
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
        
        {/* Header */}
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
              <span style={{
                color: 'var(--jaune-vif)',
                fontSize: 'var(--fs-md)',
                cursor: 'pointer'
              }}>
                ← Retour
              </span>
            </Link>
            <h1 style={{
              color: 'var(--blanc-pur)',
              fontSize: 'var(--fs-lg)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-sm)'
            }}>
              <span>💬</span>
              Frasas correntas
            </h1>
          </div>
        </header>

        {/* Catégories */}
        <section style={{
          padding: 'var(--space-lg) 0',
          background: 'var(--violet-tres-clair)'
        }}>
          <div className="container">
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--space-sm)',
              justifyContent: 'center'
            }}>
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
                    transition: 'all 0.3s',
                    background: selectedCategory === key ? 'var(--jaune-vif)' : 'var(--blanc-pur)',
                    color: selectedCategory === key ? 'var(--violet-profond)' : 'var(--texte-secondaire)',
                    boxShadow: selectedCategory === key ? '0 5px 15px rgba(75, 30, 109, 0.2)' : 'none'
                  }}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Liste des phrases */}
        <section style={{
          padding: 'var(--space-xl) 0',
          background: 'var(--blanc-pur)'
        }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gap: 'var(--space-md)'
            }}>
              {categories[selectedCategory as keyof typeof categories].phrases.map((phrase, index) => (
                <div 
                  key={index}
                  className="animate-fade-up"
                  style={{
                    animationDelay: `${index * 0.05}s`,
                    background: 'var(--jaune-pastel)',
                    padding: 'var(--space-lg)',
                    borderRadius: '15px',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    border: '2px solid transparent'
                  }}
                  onClick={() => setShowTranslation(showTranslation === index ? null : index)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--jaune-vif)'
                    e.currentTarget.style.transform = 'scale(1.01)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'transparent'
                    e.currentTarget.style.transform = 'scale(1)'
                  }}
                >
                  <div style={{
                    fontSize: 'var(--fs-md)',
                    color: 'var(--violet-profond)',
                    fontWeight: 'bold',
                    marginBottom: showTranslation === index ? 'var(--space-sm)' : '0'
                  }}>
                    {phrase.bearnais}
                  </div>
                  
                  {showTranslation === index && (
                    <div style={{
                      fontSize: 'var(--fs-base)',
                      color: 'var(--texte-secondaire)',
                      paddingTop: 'var(--space-sm)',
                      borderTop: '1px dashed var(--violet-clair)'
                    }}>
                      → {phrase.francais}
                    </div>
                  )}
                  
                  <div style={{
                    position: 'absolute',
                    right: 'var(--space-lg)',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--violet-clair)',
                    fontSize: 'var(--fs-sm)'
                  }}>
                    {showTranslation === index ? '👆' : '👆 Cliquer'}
                  </div>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="animate-fade-up" style={{
              animationDelay: '0.3s',
              marginTop: 'var(--space-lg)',
              padding: 'var(--space-md)',
              background: 'var(--violet-tres-clair)',
              borderRadius: '15px',
              textAlign: 'center'
            }}>
              <p style={{ color: 'var(--texte-secondaire)', fontSize: 'var(--fs-sm)' }}>
                💡 <strong>Astuce :</strong> Clique sur une phrase pour voir sa traduction !
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          padding: 'var(--space-lg) 0',
          background: 'var(--violet-profond)',
          color: 'var(--blanc-pur)',
          textAlign: 'center'
        }}>
          <div className="container">
            <p>© 2026 • Aprén lo biarnés</p>
          </div>
        </footer>
      </main>
    </>
  )
}