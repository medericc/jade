'use client'

import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/* Styles globaux intégrés directement */}
      <style jsx global>{`
        :root {
          /* Couleurs Béarn + Basket */
          --violet-profond: #4B1E6D;
          --violet-clair: #9B6BB7;
          --violet-tres-clair: #E9DDF2;
          --jaune-vif: #FFD700;
          --jaune-pastel: #FFF4CC;
          --blanc: #FDFBF7;
          --blanc-pur: #FFFFFF;
          
          /* Texte */
          --texte-principal: #2D0A45;
          --texte-secondaire: #6B4B7A;
          
          /* Typographie fluide */
          --fs-xs: clamp(0.75rem, 1.5vw, 0.875rem);
          --fs-sm: clamp(0.875rem, 2vw, 1rem);
          --fs-base: clamp(1rem, 2.5vw, 1.125rem);
          --fs-md: clamp(1.25rem, 3vw, 1.5rem);
          --fs-lg: clamp(1.5rem, 4vw, 2.5rem);
          --fs-xl: clamp(2rem, 5vw, 3.5rem);
          --fs-xxl: clamp(2.5rem, 6vw, 4.5rem);
          
          /* Espacements */
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

        html,
        body {
          max-width: 100vw;
          overflow-x: hidden;
          background-color: var(--blanc);
          color: var(--texte-principal);
          font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        }

        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
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
          .container {
            max-width: 1800px;
          }
        }

        /* Animations */
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        .animate-fade-up {
          animation: fadeUp 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      <main style={{ minHeight: '100vh' }}>
        
        {/* SECTION HERO - Gaston Fébus, Gaston IV le Croisé, Catherine de Bourbon, Jeanne d'Albret, Montagnes */}
        <section style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'var(--space-xl) 0',
          overflow: 'hidden',
          isolation: 'isolate'
        }}>
          
          {/* Fond avec dégradé montagnes */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(180deg, 
              #E9DDF2 0%, 
              #C4A8D9 20%,
              #9B6BB7 40%,
              #4B1E6D 70%,
              #2D0A45 100%)`,
            zIndex: 0
          }} />
          
          {/* Silhouettes de montagnes (SVG) */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '40%',
            zIndex: 1
          }}>
            <svg viewBox="0 0 1200 200" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
              <path d="M0,200 L0,100 Q100,50 200,90 Q300,130 400,70 Q500,10 600,60 Q700,110 800,50 Q900,-10 1000,70 Q1100,150 1200,80 L1200,200 Z" 
                    fill="#2D0A45" opacity="0.8" />
              <path d="M0,200 L0,140 Q150,90 300,120 Q450,150 600,100 Q750,50 900,110 Q1050,170 1200,100 L1200,200 Z" 
                    fill="#1A0630" opacity="0.6" />
            </svg>
          </div>

          {/* Lune/Ballon stylisé */}
          <div style={{
            position: 'absolute',
            top: '10%',
            right: '5%',
            width: 'clamp(80px, 20vw, 200px)',
            height: 'clamp(80px, 20vw, 200px)',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 30% 30%, var(--jaune-vif), #FF8C00)',
            boxShadow: '0 0 60px rgba(255, 215, 0, 0.5)',
            zIndex: 2,
            animation: 'float 8s ease-in-out infinite'
          }} />

          <div className="container" style={{ position: 'relative', zIndex: 10 }}>
            
            {/* Personnages historiques en cercle */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 'var(--space-lg)',
              marginBottom: 'var(--space-xl)'
            }}>
              
              {/* Gaston Fébus */}
              <div className="animate-fade-up" style={{ animationDelay: '0.1s', textAlign: 'center' }}>
                <div style={{
                  width: 'clamp(80px, 15vw, 150px)',
                  height: 'clamp(80px, 15vw, 150px)',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--violet-profond), var(--violet-clair))',
                  border: '3px solid var(--jaune-vif)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto var(--space-sm)',
                  boxShadow: '0 10px 30px rgba(75, 30, 109, 0.4)'
                }}>
                  <span style={{ fontSize: 'clamp(40px, 8vw, 70px)' }}>👑</span>
                </div>
                <p style={{ 
                  color: 'var(--blanc-pur)', 
                  fontWeight: 'bold',
                  fontSize: 'var(--fs-sm)',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                }}>
                  Gaston Fébus
                </p>
              </div>

              {/* Gaston IV le Croisé - NOUVEAU */}
              <div className="animate-fade-up" style={{ animationDelay: '0.15s', textAlign: 'center' }}>
                <div style={{
                  width: 'clamp(80px, 15vw, 150px)',
                  height: 'clamp(80px, 15vw, 150px)',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--violet-profond), var(--violet-clair))',
                  border: '3px solid var(--jaune-vif)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto var(--space-sm)',
                  boxShadow: '0 10px 30px rgba(75, 30, 109, 0.4)'
                }}>
                  <span style={{ fontSize: 'clamp(40px, 8vw, 70px)' }}>⚔️</span>
                </div>
                <p style={{ 
                  color: 'var(--blanc-pur)', 
                  fontWeight: 'bold',
                  fontSize: 'var(--fs-sm)',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                }}>
                  Gaston IV le Croisé
                </p>
              </div>

              {/* Catherine de Bourbon */}
              <div className="animate-fade-up" style={{ animationDelay: '0.2s', textAlign: 'center' }}>
                <div style={{
                  width: 'clamp(80px, 15vw, 150px)',
                  height: 'clamp(80px, 15vw, 150px)',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--violet-profond), var(--violet-clair))',
                  border: '3px solid var(--jaune-vif)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto var(--space-sm)',
                  boxShadow: '0 10px 30px rgba(75, 30, 109, 0.4)'
                }}>
                  <span style={{ fontSize: 'clamp(40px, 8vw, 70px)' }}>👸</span>
                </div>
                <p style={{ 
                  color: 'var(--blanc-pur)', 
                  fontWeight: 'bold',
                  fontSize: 'var(--fs-sm)',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                }}>
                  Catherine de Bourbon
                </p>
              </div>

              {/* Jeanne d'Albret */}
              <div className="animate-fade-up" style={{ animationDelay: '0.3s', textAlign: 'center' }}>
                <div style={{
                  width: 'clamp(80px, 15vw, 150px)',
                  height: 'clamp(80px, 15vw, 150px)',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--violet-profond), var(--violet-clair))',
                  border: '3px solid var(--jaune-vif)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto var(--space-sm)',
                  boxShadow: '0 10px 30px rgba(75, 30, 109, 0.4)'
                }}>
                  <span style={{ fontSize: 'clamp(40px, 8vw, 70px)' }}>⚜️</span>
                </div>
                <p style={{ 
                  color: 'var(--blanc-pur)', 
                  fontWeight: 'bold',
                  fontSize: 'var(--fs-sm)',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                }}>
                  Jeanne d&apos;Albret
                </p>
              </div>
            </div>

            {/* La Joueuse au centre */}
            <div style={{
              textAlign: 'center',
              marginBottom: 'var(--space-xl)'
            }}>
              <div className="animate-float" style={{
                display: 'inline-block',
                position: 'relative'
              }}>
                {/* Photo de Jade Celerier */}
                <div style={{
                  width: 'clamp(200px, 40vw, 400px)',
                  height: 'clamp(250px, 50vw, 500px)',
                  margin: '0 auto',
                  position: 'relative',
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                  overflow: 'hidden',
                  border: '4px solid var(--jaune-vif)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  background: 'var(--violet-profond)'
                }}>
                  <img 
                    src="/jadece.png" 
                    alt="Jade Celerier - Joueuse pro de basket"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top'
                    }}
                  />
                  
                  {/* Effet de lumière sur l'image */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(255,215,0,0.2) 0%, transparent 50%)',
                    pointerEvents: 'none'
                  }} />
                </div>
                
                {/* Nom de la joueuse */}
                <h1 style={{
                  fontSize: 'var(--fs-xxl)',
                  color: 'var(--blanc-pur)',
                  textShadow: '4px 4px 8px rgba(0,0,0,0.3)',
                  marginTop: 'var(--space-md)',
                  fontWeight: '800',
                  letterSpacing: '2px'
                }}>
                  JADE CELERIER
                </h1>
                <p style={{
                  fontSize: 'var(--fs-md)',
                  color: 'var(--jaune-vif)',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  fontWeight: '600'
                }}>
                  #04 • Meneuse • Dodge City
                </p>
              </div>
            </div>

            {/* Slogan */}
            <div className="animate-fade-up" style={{ 
              animationDelay: '0.5s',
              textAlign: 'center',
              marginBottom: 'var(--space-xl)'
            }}>
              <p style={{
                fontSize: 'var(--fs-lg)',
                color: 'var(--blanc-pur)',
                fontStyle: 'italic',
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
              }}>
                &quot;Après la pluie viendra le soleil&quot;
              </p>
            </div>
          </div>

          {/* Scroll indicator */}
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'var(--blanc-pur)',
            animation: 'pulse 2s infinite',
            zIndex: 10
          }}>
            ↓
          </div>
        </section>

        {/* SECTION CARRIÈRE */}
        <section style={{
          padding: 'var(--space-xxl) 0',
          background: 'var(--blanc-pur)'
        }}>
          <div className="container">
            <h2 style={{
              fontSize: 'var(--fs-xl)',
              color: 'var(--violet-profond)',
              textAlign: 'center',
              marginBottom: 'var(--space-xl)',
              borderBottom: '4px solid var(--jaune-vif)',
              display: 'inline-block',
              paddingBottom: 'var(--space-xs)'
            }}>
              Sa Carrière
            </h2>

            {/* Timeline style */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 'var(--space-lg)',
              marginTop: 'var(--space-xl)'
            }}>
              {[
                { year: '2022', title: 'Draft WNBA', desc: 'Sélectionnée par les New York Liberty' },
                { year: '2023', title: 'Championne de France', desc: 'Titre avec l\'Élan Béarnais' },
                { year: '2024', title: 'MVP LFB', desc: 'Meilleure joueuse du championnat' },
                { year: '2025', title: 'Euroleague', desc: 'Final Four avec l\'Élan' }
              ].map((item, i) => (
                <div key={i} className="animate-fade-up" style={{
                  animationDelay: `${i * 0.1}s`,
                  background: 'var(--jaune-pastel)',
                  padding: 'var(--space-lg)',
                  borderRadius: '20px',
                  borderLeft: '6px solid var(--violet-profond)',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.05)'
                }}>
                  <div style={{
                    fontSize: 'var(--fs-lg)',
                    fontWeight: 'bold',
                    color: 'var(--violet-profond)',
                    marginBottom: 'var(--space-sm)'
                  }}>
                    {item.year}
                  </div>
                  <h3 style={{
                    fontSize: 'var(--fs-md)',
                    color: 'var(--texte-principal)',
                    marginBottom: 'var(--space-xs)'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--texte-secondaire)' }}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Bouton "Voir le parcours complet" */}
            <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
              <Link href="/carriere">
                <button style={{
                  background: 'var(--violet-profond)',
                  color: 'var(--blanc-pur)',
                  padding: 'var(--space-sm) var(--space-xl)',
                  fontSize: 'var(--fs-base)',
                  fontWeight: 'bold',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  border: '2px solid var(--jaune-vif)',
                  boxShadow: '0 4px 15px rgba(75, 30, 109, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--jaune-vif)'
                  e.currentTarget.style.color = 'var(--violet-profond)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--violet-profond)'
                  e.currentTarget.style.color = 'var(--blanc-pur)'
                }}>
                  Voir le parcours complet →
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION FAN ZONE */}
        <section style={{
          padding: 'var(--space-xxl) 0',
          background: 'var(--violet-tres-clair)'
        }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--space-xl)',
              alignItems: 'center'
            }}>
              {/* Stats Fan */}
              <div className="animate-fade-up">
                <h2 style={{
                  fontSize: 'var(--fs-xl)',
                  color: 'var(--violet-profond)',
                  marginBottom: 'var(--space-lg)'
                }}>
                  Fan Zone
                </h2>
                
                <div style={{
                  display: 'flex',
                  gap: 'var(--space-lg)',
                  marginBottom: 'var(--space-lg)'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      fontSize: 'var(--fs-xxl)',
                      fontWeight: 'bold',
                      color: 'var(--violet-profond)'
                    }}>
                      127K
                    </div>
                    <div style={{ color: 'var(--texte-secondaire)' }}>Followers</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      fontSize: 'var(--fs-xxl)',
                      fontWeight: 'bold',
                      color: 'var(--violet-profond)'
                    }}>
                      45K
                    </div>
                    <div style={{ color: 'var(--texte-secondaire)' }}>Likes</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      fontSize: 'var(--fs-xxl)',
                      fontWeight: 'bold',
                      color: 'var(--violet-profond)'
                    }}>
                      892
                    </div>
                    <div style={{ color: 'var(--texte-secondaire)' }}>Posts</div>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  gap: 'var(--space-sm)',
                  flexWrap: 'wrap'
                }}>
                  <button style={{
                    background: 'var(--blanc-pur)',
                    border: '2px solid var(--violet-profond)',
                    color: 'var(--violet-profond)',
                    padding: 'var(--space-sm) var(--space-md)',
                    borderRadius: '30px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}>
                    📸 Instagram
                  </button>
                  <button style={{
                    background: 'var(--blanc-pur)',
                    border: '2px solid var(--violet-profond)',
                    color: 'var(--violet-profond)',
                    padding: 'var(--space-sm) var(--space-md)',
                    borderRadius: '30px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}>
                    🐦 X (Twitter)
                  </button>
                  <button style={{
                    background: 'var(--blanc-pur)',
                    border: '2px solid var(--violet-profond)',
                    color: 'var(--violet-profond)',
                    padding: 'var(--space-sm) var(--space-md)',
                    borderRadius: '30px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}>
                    🎥 TikTok
                  </button>
                </div>
              </div>

              {/* CTA Béarnais */}
              <div className="animate-fade-up" style={{
                animationDelay: '0.2s',
                background: 'var(--jaune-vif)',
                padding: 'var(--space-xl)',
                borderRadius: '30px',
                textAlign: 'center',
                boxShadow: '0 20px 40px rgba(75, 30, 109, 0.2)'
              }}>
                <div style={{ fontSize: '60px', marginBottom: 'var(--space-md)' }}>🗣️</div>
                <h3 style={{
                  fontSize: 'var(--fs-lg)',
                  color: 'var(--violet-profond)',
                  marginBottom: 'var(--space-md)'
                }}>
                  E tù, que parles biarnés ?
                </h3>
                <p style={{
                  color: 'var(--texte-principal)',
                  marginBottom: 'var(--space-lg)',
                  fontSize: 'var(--fs-base)'
                }}>
                  Apprends la langue de Gaston Fébus et deviens un vrai Béarnais !
                </p>
                <Link href="/apprendre">
                  <button style={{
                    background: 'var(--violet-profond)',
                    color: 'var(--blanc-pur)',
                    border: 'none',
                    padding: 'var(--space-md) var(--space-xl)',
                    fontSize: 'var(--fs-md)',
                    fontWeight: 'bold',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    width: '100%',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--blanc-pur)'
                    e.currentTarget.style.color = 'var(--violet-profond)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--violet-profond)'
                    e.currentTarget.style.color = 'var(--blanc-pur)'
                  }}>
                    Commencer l&apos;aventure →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer minimal */}
        <footer style={{
          padding: 'var(--space-lg) 0',
          background: 'var(--violet-profond)',
          color: 'var(--blanc-pur)',
          textAlign: 'center'
        }}>
          <div className="container">
            <p>© 2026 • Jade Célerier Fan • Dodge City</p>
            <p style={{ marginTop: 'var(--space-xs)', fontSize: 'var(--fs-xs)' }}>
              Toque-y Si Gauses 🏀⚜️
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}