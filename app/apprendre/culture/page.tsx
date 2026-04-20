'use client'

import Link from 'next/link'

export default function CulturePage() {
  const culturalItems = [
    {
      title: 'Gaston Fébus',
      icon: '👑',
      description: 'Comte de Foix et seigneur de Béarn (1331-1391). Auteur du "Livre de la chasse", il fit du Béarn une principauté souveraine.',
      bearnais: 'Gaston III de Fois-Biarn'
    },
    {
      title: 'Jeanne d\'Albret',
      icon: '⚜️',
      description: 'Reine de Navarre (1555-1572), mère d\'Henri IV. Elle imposa le calvinisme dans ses États et protégea la langue béarnaise.',
      bearnais: 'Joana III de Labrit'
    },
    {
      title: 'La Hèsta deu Cèu',
      icon: '🎭',
      description: 'Fête traditionnelle célébrée à Pau, avec danses, chants et costumes béarnais. A lieu chaque année en septembre.',
      bearnais: 'Hèsta tradicionau'
    },
    {
      title: 'L\'immortèla de Pau',
      icon: '🌸',
      description: 'Fleur emblématique du Béarn, qui ne fane jamais. Symbole d\'amour éternel et de fidélité.',
      bearnais: 'La flor qui\'s passa pas'
    },
    {
      title: 'Lo Cèu de Pau',
      icon: '🎵',
      description: 'Hymne béarnais, chanté lors des grandes occasions. "Aqueras montanhas que tan nautas sòn..."',
      bearnais: 'Imne biarnés'
    },
    {
      title: 'La Garbura',
      icon: '🥘',
      description: 'Soupe traditionnelle béarnaise à base de chou, haricots, confit de canard et légumes du jardin.',
      bearnais: 'Sopa biarnesa'
    }
  ]

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
          --space-xxl: clamp(3rem, 6vw, 6rem);
        }

        * { box-sizing: border-box; padding: 0; margin: 0; }
        html, body { max-width: 100vw; overflow-x: hidden; background-color: var(--blanc); color: var(--texte-principal); font-family: system-ui, sans-serif; }
        body { -webkit-font-smoothing: antialiased; }
        a { color: inherit; text-decoration: none; }
        .container { width: 100%; max-width: 1200px; margin-left: auto; margin-right: auto; padding-left: var(--space-md); padding-right: var(--space-md); }
        @media (min-width: 1920px) { .container { max-width: 1600px; } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-up { animation: fadeUp 0.5s ease-out forwards; }
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
              <span>🏔️</span> Cultura biarnesa
            </h1>
          </div>
        </header>

        <section style={{
          padding: 'var(--space-xxl) 0',
          background: 'linear-gradient(135deg, var(--violet-tres-clair) 0%, var(--jaune-pastel) 100%)'
        }}>
          <div className="container">
            <div className="animate-fade-up" style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
              <h2 style={{ fontSize: 'var(--fs-xl)', color: 'var(--violet-profond)' }}>
                Lo noste eretatge
              </h2>
              <p style={{ fontSize: 'var(--fs-base)', color: 'var(--texte-secondaire)' }}>
                Découvre l&apos;histoire et les traditions du Béarn
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-lg)'
            }}>
              {culturalItems.map((item, index) => (
                <div key={index} className="animate-fade-up" style={{
                  animationDelay: `${index * 0.1}s`,
                  background: 'var(--blanc-pur)',
                  padding: 'var(--space-lg)',
                  borderRadius: '20px',
                  boxShadow: '0 10px 30px rgba(75, 30, 109, 0.1)',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(75, 30, 109, 0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(75, 30, 109, 0.1)'
                }}>
                  <div style={{ fontSize: '50px', marginBottom: 'var(--space-md)' }}>
                    {item.icon}
                  </div>
                  <h3 style={{
                    fontSize: 'var(--fs-md)',
                    color: 'var(--violet-profond)',
                    marginBottom: 'var(--space-xs)'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: 'var(--fs-xs)',
                    color: 'var(--jaune-vif)',
                    marginBottom: 'var(--space-sm)',
                    fontStyle: 'italic'
                  }}>
                    {item.bearnais}
                  </p>
                  <p style={{
                    fontSize: 'var(--fs-sm)',
                    color: 'var(--texte-secondaire)',
                    lineHeight: 1.6
                  }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer style={{ padding: 'var(--space-lg) 0', background: 'var(--violet-profond)', color: 'var(--blanc-pur)', textAlign: 'center' }}>
          <div className="container">
            <p style={{ fontSize: 'var(--fs-base)' }}>
              Que viva lo Biarn ! 🏔️⚜️
            </p>
            <p style={{ marginTop: 'var(--space-xs)', fontSize: 'var(--fs-xs)' }}>
              © 2026 • Aprén lo biarnés
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}