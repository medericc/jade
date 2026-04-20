'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ConjugaisonPage() {
  const [selectedVerb, setSelectedVerb] = useState('estre')
  const [selectedTense, setSelectedTense] = useState('present')

  const verbs = {
    estre: {
      name: 'Estre (Être)',
      present: ['que sòi', 'qu\'ès', 'qu\'ei', 'que sèm', 'qu\'ètz', 'que sòn'],
      passe: ['qu\'èri', 'qu\'ères', 'qu\'ère', 'qu\'èrem', 'qu\'èretz', 'qu\'èren'],
      futur: ['que serèi', 'que seràs', 'que serà', 'que seram', 'que seratz', 'que seràn']
    },
    aver: {
      name: 'Aver (Avoir)',
      present: ['qu\'èi', 'qu\'as', 'qu\'a', 'qu\'avèm', 'qu\'avètz', 'qu\'an'],
      passe: ['qu\'avèvi', 'qu\'avèves', 'qu\'avève', 'qu\'avèvem', 'qu\'avèvetz', 'qu\'avèven'],
      futur: ['qu\'aurèi', 'qu\'auràs', 'qu\'aurà', 'qu\'auram', 'qu\'auratz', 'qu\'auràn']
    },
    parlar: {
      name: 'Parlar (Parler)',
      present: ['que parli', 'que parlas', 'que parla', 'que parlam', 'que parlatz', 'que parlan'],
      passe: ['que parlèvi', 'que parlèves', 'que parlève', 'que parlèvem', 'que parlèvetz', 'que parlèven'],
      futur: ['que parlarèi', 'que parlaràs', 'que parlarà', 'que parlaram', 'que parlaratz', 'que parlaràn']
    },
    har: {
      name: 'Har (Faire)',
      present: ['que hèi', 'que hès', 'que hè', 'que hèm', 'que hètz', 'que hèn'],
      passe: ['que hasèvi', 'que hasèves', 'que hasève', 'que hasèvem', 'que hasèvetz', 'que hasèven'],
      futur: ['que harèi', 'que haràs', 'que harà', 'que haram', 'que haratz', 'que haràn']
    }
  }

  const tenses = {
    present: 'Present',
    passe: 'Passat (Imparfait)',
    futur: 'Futur'
  }

  const pronouns = ['Jo', 'Tu', 'Eth/Era', 'Nosauts', 'Vosauts', 'Eth/Eras']

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
          --fs-xl: clamp(2rem, 5vw, 3.5rem);
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
              <span>📝</span>
              Conjugason
            </h1>
          </div>
        </header>

        {/* Sélecteurs */}
        <section style={{
          padding: 'var(--space-lg) 0',
          background: 'var(--violet-tres-clair)'
        }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 'var(--space-md)'
            }}>
              
              {/* Sélecteur de verbe */}
              <div className="animate-fade-up">
                <label style={{
                  display: 'block',
                  marginBottom: 'var(--space-xs)',
                  color: 'var(--violet-profond)',
                  fontWeight: 'bold'
                }}>
                  Vèrbe :
                </label>
                <select 
                  value={selectedVerb}
                  onChange={(e) => setSelectedVerb(e.target.value)}
                  style={{
                    width: '100%',
                    padding: 'var(--space-sm)',
                    fontSize: 'var(--fs-base)',
                    borderRadius: '10px',
                    border: '2px solid var(--violet-clair)',
                    background: 'var(--blanc-pur)',
                    color: 'var(--texte-principal)',
                    cursor: 'pointer'
                  }}
                >
                  {Object.entries(verbs).map(([key, verb]) => (
                    <option key={key} value={key}>{verb.name}</option>
                  ))}
                </select>
              </div>

              {/* Sélecteur de temps */}
              <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <label style={{
                  display: 'block',
                  marginBottom: 'var(--space-xs)',
                  color: 'var(--violet-profond)',
                  fontWeight: 'bold'
                }}>
                  Temps :
                </label>
                <select 
                  value={selectedTense}
                  onChange={(e) => setSelectedTense(e.target.value)}
                  style={{
                    width: '100%',
                    padding: 'var(--space-sm)',
                    fontSize: 'var(--fs-base)',
                    borderRadius: '10px',
                    border: '2px solid var(--violet-clair)',
                    background: 'var(--blanc-pur)',
                    color: 'var(--texte-principal)',
                    cursor: 'pointer'
                  }}
                >
                  {Object.entries(tenses).map(([key, name]) => (
                    <option key={key} value={key}>{name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Tableau de conjugaison */}
        <section style={{
          padding: 'var(--space-xl) 0',
          background: 'var(--blanc-pur)'
        }}>
          <div className="container">
            <div className="animate-fade-up" style={{
              background: 'var(--jaune-pastel)',
              borderRadius: '20px',
              padding: 'var(--space-lg)',
              boxShadow: '0 10px 30px rgba(75, 30, 109, 0.1)'
            }}>
              <h2 style={{
                fontSize: 'var(--fs-md)',
                color: 'var(--violet-profond)',
                marginBottom: 'var(--space-lg)',
                textAlign: 'center'
              }}>
                {verbs[selectedVerb as keyof typeof verbs].name} - {tenses[selectedTense as keyof typeof tenses]}
              </h2>
              
              <div style={{
                display: 'grid',
                gap: 'var(--space-sm)'
              }}>
                {pronouns.map((pronoun, index) => (
                  <div key={index} style={{
                    display: 'grid',
                    gridTemplateColumns: '120px 1fr',
                    alignItems: 'center',
                    padding: 'var(--space-sm)',
                    borderBottom: '1px solid var(--violet-clair)'
                  }}>
                    <span style={{
                      fontWeight: 'bold',
                      color: 'var(--violet-profond)'
                    }}>
                      {pronoun}
                    </span>
                    <span style={{
                      fontSize: 'var(--fs-md)',
                      color: 'var(--texte-principal)',
                      fontFamily: 'monospace'
                    }}>
                      {verbs[selectedVerb as keyof typeof verbs][selectedTense as keyof typeof tenses][index]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Note grammaticale */}
            <div className="animate-fade-up" style={{
              animationDelay: '0.2s',
              marginTop: 'var(--space-lg)',
              padding: 'var(--space-md)',
              background: 'var(--violet-tres-clair)',
              borderRadius: '15px'
            }}>
              <p style={{ color: 'var(--texte-secondaire)', fontSize: 'var(--fs-sm)' }}>
                <strong>💡 Nòta :</strong> En béarnais, le &quot;que&quot; énonciatif 
                s&apos;utilise devant le verbe dans les phrases affirmatives.
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