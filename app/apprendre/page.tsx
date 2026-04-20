'use client'

import Link from 'next/link'

export default function ApprendrePage() {
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
          --fs-xxl: clamp(2.5rem, 6vw, 4.5rem);
          --space-xs: clamp(0.5rem, 1vw, 0.75rem);
          --space-sm: clamp(0.75rem, 1.5vw, 1rem);
          --space-md: clamp(1rem, 2vw, 1.5rem);
          --space-lg: clamp(1.5rem, 3vw, 2.5rem);
          --space-xl: clamp(2rem, 4vw, 4rem);
          --space-xxl: clamp(3rem, 6vw, 6rem);
        }

        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }

        html, body {
          max-width: 100vw;
          overflow-x: hidden;
          background-color: var(--blanc);
          color: var(--texte-principal);
          font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
        }

        body {
          -webkit-font-smoothing: antialiased;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .container {
          width: 100%;
          max-width: 1400px;
          margin-left: auto;
          margin-right: auto;
          padding-left: var(--space-md);
          padding-right: var(--space-md);
        }

        @media (min-width: 1920px) {
          .container { max-width: 1800px; }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        .animate-fade-up {
          animation: fadeUp 0.5s ease-out forwards;
        }

        .animate-slide-in {
          animation: slideIn 0.4s ease-out forwards;
        }
      `}</style>

      <main style={{ minHeight: '100vh' }}>
        
        {/* Header avec retour */}
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
            <Link href="/">
              <span style={{
                color: 'var(--jaune-vif)',
                fontSize: 'var(--fs-md)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-xs)'
              }}>
                ← Retour
              </span>
            </Link>
            <h1 style={{
              color: 'var(--blanc-pur)',
              fontSize: 'var(--fs-xl)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-sm)',
              flexWrap: 'wrap'
            }}>
              <span>🗣️</span>
              <span>Aprén lo biarnés !</span>
              <span style={{
                fontSize: 'var(--fs-base)',
                color: 'var(--jaune-vif)',
                marginLeft: 'auto'
              }}>
                Apprends le béarnais
              </span>
            </h1>
          </div>
        </header>

        {/* Hero section */}
        <section style={{
          background: 'linear-gradient(135deg, var(--violet-tres-clair) 0%, var(--jaune-pastel) 100%)',
          padding: 'var(--space-xl) 0'
        }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-xl)',
              alignItems: 'center'
            }}>
              <div className="animate-fade-up">
                <h2 style={{
                  fontSize: 'var(--fs-lg)',
                  color: 'var(--violet-profond)',
                  marginBottom: 'var(--space-md)'
                }}>
                  La lenga nosta, lo noste tresaur
                </h2>
                <p style={{
                  fontSize: 'var(--fs-base)',
                  color: 'var(--texte-principal)',
                  marginBottom: 'var(--space-lg)',
                  lineHeight: 1.6
                }}>
                  Le béarnais, langue de Gaston Fébus et des rois de Navarre, 
                  est parlé depuis plus de 1000 ans dans nos vallées.
                  Aujourd&apos;hui, plus de 50 000 personnes le parlent encore !
                </p>
                <div style={{
                  display: 'flex',
                  gap: 'var(--space-sm)',
                  flexWrap: 'wrap'
                }}>
                  <span style={{
                    background: 'var(--violet-profond)',
                    color: 'var(--blanc-pur)',
                    padding: 'var(--space-xs) var(--space-md)',
                    borderRadius: '20px',
                    fontSize: 'var(--fs-sm)'
                  }}>
                    🇫🇷 → 🏔️
                  </span>
                  <span style={{
                    background: 'var(--jaune-vif)',
                    color: 'var(--violet-profond)',
                    padding: 'var(--space-xs) var(--space-md)',
                    borderRadius: '20px',
                    fontSize: 'var(--fs-sm)',
                    fontWeight: 'bold'
                  }}>
                    5 leçons gratuites
                  </span>
                </div>
              </div>
              
              <div className="animate-fade-up" style={{
                animationDelay: '0.2s',
                background: 'var(--blanc-pur)',
                padding: 'var(--space-lg)',
                borderRadius: '30px',
                boxShadow: '0 10px 30px rgba(75, 30, 109, 0.15)'
              }}>
                <div style={{
                  fontSize: 'var(--fs-xxl)',
                  textAlign: 'center',
                  marginBottom: 'var(--space-md)'
                }}>
                  💬
                </div>
                <p style={{
                  fontSize: 'var(--fs-md)',
                  color: 'var(--violet-profond)',
                  fontStyle: 'italic',
                  textAlign: 'center'
                }}>
                  &quot;Qui parla biarnés, parla la lenga deus reis&quot;
                </p>
                <p style={{
                  textAlign: 'center',
                  color: 'var(--texte-secondaire)',
                  marginTop: 'var(--space-sm)'
                }}>
                  Proverbe béarnais
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Menu des sections */}
        <section style={{
          padding: 'var(--space-xxl) 0',
          background: 'var(--blanc-pur)'
        }}>
          <div className="container">
            <h2 style={{
              fontSize: 'var(--fs-xl)',
              color: 'var(--violet-profond)',
              textAlign: 'center',
              marginBottom: 'var(--space-xl)'
            }}>
              Qué vòs apréner ?
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--space-lg)'
            }}>
              
              {/* Carte Conjugaison */}
              <Link href="/apprendre/conjugaison">
                <div className="animate-fade-up" style={{
                  animationDelay: '0.1s',
                  background: 'var(--jaune-pastel)',
                  padding: 'var(--space-xl) var(--space-lg)',
                  borderRadius: '20px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  border: '2px solid transparent',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.borderColor = 'var(--jaune-vif)'
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(75, 30, 109, 0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'transparent'
                  e.currentTarget.style.boxShadow = 'none'
                }}>
                  <div style={{ fontSize: '60px', marginBottom: 'var(--space-md)' }}>📝</div>
                  <h3 style={{
                    fontSize: 'var(--fs-md)',
                    color: 'var(--violet-profond)',
                    marginBottom: 'var(--space-sm)'
                  }}>
                    Conjugason
                  </h3>
                  <p style={{
                    color: 'var(--texte-secondaire)',
                    fontSize: 'var(--fs-sm)',
                    lineHeight: 1.5
                  }}>
                    Apprends à conjuguer les verbes essentiels : être, avoir, aller, faire...
                  </p>
                  <span style={{
                    marginTop: 'var(--space-md)',
                    color: 'var(--violet-profond)',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-xs)'
                  }}>
                    Commencer → 
                  </span>
                </div>
              </Link>

              {/* Carte Phrases */}
              <Link href="/apprendre/phrases">
                <div className="animate-fade-up" style={{
                  animationDelay: '0.2s',
                  background: 'var(--violet-tres-clair)',
                  padding: 'var(--space-xl) var(--space-lg)',
                  borderRadius: '20px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  border: '2px solid transparent',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.borderColor = 'var(--jaune-vif)'
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(75, 30, 109, 0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'transparent'
                  e.currentTarget.style.boxShadow = 'none'
                }}>
                  <div style={{ fontSize: '60px', marginBottom: 'var(--space-md)' }}>💬</div>
                  <h3 style={{
                    fontSize: 'var(--fs-md)',
                    color: 'var(--violet-profond)',
                    marginBottom: 'var(--space-sm)'
                  }}>
                    Frasas correntas
                  </h3>
                  <p style={{
                    color: 'var(--texte-secondaire)',
                    fontSize: 'var(--fs-sm)',
                    lineHeight: 1.5
                  }}>
                    Salutations, présentations, expressions de tous les jours...
                  </p>
                  <span style={{
                    marginTop: 'var(--space-md)',
                    color: 'var(--violet-profond)',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-xs)'
                  }}>
                    Découvrir → 
                  </span>
                </div>
              </Link>

              {/* Carte Exercices */}
              <Link href="/apprendre/exercices">
                <div className="animate-fade-up" style={{
                  animationDelay: '0.3s',
                  background: 'var(--jaune-vif)',
                  padding: 'var(--space-xl) var(--space-lg)',
                  borderRadius: '20px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  border: '2px solid transparent',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.borderColor = 'var(--violet-profond)'
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(75, 30, 109, 0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'transparent'
                  e.currentTarget.style.boxShadow = 'none'
                }}>
                  <div style={{ fontSize: '60px', marginBottom: 'var(--space-md)' }}>🎯</div>
                  <h3 style={{
                    fontSize: 'var(--fs-md)',
                    color: 'var(--violet-profond)',
                    marginBottom: 'var(--space-sm)'
                  }}>
                    Exercicis
                  </h3>
                  <p style={{
                    color: 'var(--texte-principal)',
                    fontSize: 'var(--fs-sm)',
                    lineHeight: 1.5
                  }}>
                    Teste tes connaissances avec des quiz interactifs et gagne des points !
                  </p>
                  <span style={{
                    marginTop: 'var(--space-md)',
                    color: 'var(--violet-profond)',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-xs)'
                  }}>
                    Jouer → 
                  </span>
                </div>
              </Link>

              {/* Carte Vocabulaire */}
              <Link href="/apprendre/vocabulaire">
                <div className="animate-fade-up" style={{
                  animationDelay: '0.4s',
                  background: 'var(--blanc-pur)',
                  padding: 'var(--space-xl) var(--space-lg)',
                  borderRadius: '20px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  border: '2px solid var(--violet-clair)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.borderColor = 'var(--jaune-vif)'
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(75, 30, 109, 0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'var(--violet-clair)'
                  e.currentTarget.style.boxShadow = 'none'
                }}>
                  <div style={{ fontSize: '60px', marginBottom: 'var(--space-md)' }}>📚</div>
                  <h3 style={{
                    fontSize: 'var(--fs-md)',
                    color: 'var(--violet-profond)',
                    marginBottom: 'var(--space-sm)'
                  }}>
                    Vocabulari
                  </h3>
                  <p style={{
                    color: 'var(--texte-secondaire)',
                    fontSize: 'var(--fs-sm)',
                    lineHeight: 1.5
                  }}>
                    Animaux, nourriture, famille, nature... Enrichis ton vocabulaire !
                  </p>
                  <span style={{
                    marginTop: 'var(--space-md)',
                    color: 'var(--violet-profond)',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-xs)'
                  }}>
                    Explorer → 
                  </span>
                </div>
              </Link>

              {/* Carte Culture */}
              <Link href="/apprendre/culture">
                <div className="animate-fade-up" style={{
                  animationDelay: '0.5s',
                  background: 'linear-gradient(135deg, var(--violet-profond), var(--violet-clair))',
                  padding: 'var(--space-xl) var(--space-lg)',
                  borderRadius: '20px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  border: '2px solid transparent',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.borderColor = 'var(--jaune-vif)'
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(75, 30, 109, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'transparent'
                  e.currentTarget.style.boxShadow = 'none'
                }}>
                  <div style={{ fontSize: '60px', marginBottom: 'var(--space-md)' }}>🏔️</div>
                  <h3 style={{
                    fontSize: 'var(--fs-md)',
                    color: 'var(--blanc-pur)',
                    marginBottom: 'var(--space-sm)'
                  }}>
                    Cultura
                  </h3>
                  <p style={{
                    color: 'var(--jaune-pastel)',
                    fontSize: 'var(--fs-sm)',
                    lineHeight: 1.5
                  }}>
                    Histoire, chants, traditions... Plonge dans l&apos;âme du Béarn !
                  </p>
                  <span style={{
                    marginTop: 'var(--space-md)',
                    color: 'var(--jaune-vif)',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-xs)'
                  }}>
                    Découvrir → 
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats de progression */}
        <section style={{
          padding: 'var(--space-xl) 0',
          background: 'var(--violet-tres-clair)'
        }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 'var(--space-lg)',
              textAlign: 'center'
            }}>
              <div className="animate-fade-up">
                <div style={{
                  fontSize: 'var(--fs-xxl)',
                  fontWeight: 'bold',
                  color: 'var(--violet-profond)'
                }}>
                  0
                </div>
                <div style={{ color: 'var(--texte-secondaire)' }}>Leçons complétées</div>
              </div>
              <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <div style={{
                  fontSize: 'var(--fs-xxl)',
                  fontWeight: 'bold',
                  color: 'var(--violet-profond)'
                }}>
                  0
                </div>
                <div style={{ color: 'var(--texte-secondaire)' }}>Mots appris</div>
              </div>
              <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div style={{
                  fontSize: 'var(--fs-xxl)',
                  fontWeight: 'bold',
                  color: 'var(--violet-profond)'
                }}>
                  0
                </div>
                <div style={{ color: 'var(--texte-secondaire)' }}>Points XP</div>
              </div>
            </div>
            
            {/* Barre de progression */}
            <div className="animate-fade-up" style={{
              animationDelay: '0.3s',
              marginTop: 'var(--space-xl)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 'var(--space-xs)',
                fontSize: 'var(--fs-sm)'
              }}>
                <span>Niveau 1 - Aprenent</span>
                <span>0/100 XP</span>
              </div>
              <div style={{
                width: '100%',
                height: '12px',
                background: 'var(--blanc-pur)',
                borderRadius: '10px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: '0%',
                  height: '100%',
                  background: 'var(--jaune-vif)',
                  transition: 'width 0.5s'
                }} />
              </div>
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
            <p style={{ fontSize: 'var(--fs-base)' }}>
              Adishatz e bona sòrt ! 👋
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