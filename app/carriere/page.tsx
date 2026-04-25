'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function CarrierePage() {
  const [activeTab, setActiveTab] = useState('timeline')

  const careerHighlights = [
    {
      year: '2024',
      title: 'Championne WNBA',
      description: 'Titre WNBA avec New York Liberty, première française depuis 15 ans',
      icon: '🏆',
      color: '#FFD700'
    },
    {
      year: '2025',
      title: 'MVP des Finales',
      description: '28 points, 8 passes, 6 rebonds de moyenne en finales WNBA',
      icon: '⭐',
      color: '#FFD700'
    },
    {
      year: '2025',
      title: 'All-Star WNBA',
      description: 'Sélectionnée pour le All-Star Game, 22 points marqués',
      icon: '🌟',
      color: '#FFD700'
    },
    {
      year: '2026',
      title: 'Record de franchise',
      description: '52 points en un match, record historique de Dodge City',
      icon: '🔥',
      color: '#FFD700'
    }
  ]

  const careerTimeline = [
    {
      period: '2020 - 2022',
      team: 'MMBS (Mont-de-Marsan)',
      logo: '🟡',
      league: 'LFB',
      stats: {
        points: '14.2',
        passes: '4.8',
        rebonds: '3.5',
        evaluation: '15.6'
      },
      achievements: [
        'Championne de France Espoirs 2021',
        'Meilleure jeune LFB 2022',
        'Sélectionnée en Équipe de France U20'
      ],
      description: 'Révélation du championnat de France. Développement accéléré sous la houlette de coach Martinez. Première sélection en équipe nationale.',
      games: 56,
      starter: 48,
      color: '#9B6BB7'
    },
    {
      period: '2022 - 2024',
      team: 'Tarbes Gespe Bigorre',
      logo: '🔴',
      league: 'LFB + Eurocup',
      stats: {
        points: '18.7',
        passes: '6.2',
        rebonds: '4.1',
        evaluation: '21.3'
      },
      achievements: [
        'Demi-finaliste Eurocup 2023',
        'All-Star LFB 2023, 2024',
        'Meilleure marqueuse LFB 2024',
        'Draftée WNBA #4 par New York Liberty'
      ],
      description: 'Explosion au plus haut niveau européen. Meneuse titulaire indiscutable. Draft WNBA après une saison exceptionnelle.',
      games: 72,
      starter: 70,
      color: '#FF6B6B'
    },
    {
      period: '2024 - Présent',
      team: 'Dodge City',
      logo: '🟣',
      league: 'WNBA',
      stats: {
        points: '22.4',
        passes: '7.8',
        rebonds: '4.5',
        evaluation: '26.1'
      },
      achievements: [
        'Championne WNBA 2024 (rookie)',
        'MVP des Finales WNBA 2025',
        'All-WNBA First Team 2025',
        'All-Star WNBA 2025, 2026',
        'Record de franchise : 52 pts'
      ],
      description: 'Consécration ultime. Titre WNBA dès sa première saison. Devient le visage de la franchise et une superstar mondiale.',
      games: 68,
      starter: 68,
      color: '#4B1E6D'
    }
  ]

  const seasonStats = [
    { season: '2020-21 (MMBS)', gp: 22, pts: 8.4, ast: 3.2, reb: 2.1, fg: '42%', '3pt': '34%' },
    { season: '2021-22 (MMBS)', gp: 34, pts: 14.2, ast: 4.8, reb: 3.5, fg: '45%', '3pt': '37%' },
    { season: '2022-23 (Tarbes)', gp: 36, pts: 17.1, ast: 5.5, reb: 3.8, fg: '47%', '3pt': '39%' },
    { season: '2023-24 (Tarbes)', gp: 36, pts: 20.3, ast: 6.9, reb: 4.4, fg: '49%', '3pt': '41%' },
    { season: '2024 (Dodge)', gp: 34, pts: 19.8, ast: 6.5, reb: 4.0, fg: '46%', '3pt': '38%' },
    { season: '2025 (Dodge)', gp: 34, pts: 25.1, ast: 9.2, reb: 5.1, fg: '51%', '3pt': '43%' }
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
          --fs-xxl: clamp(2.5rem, 6vw, 4.5rem);
          --space-xs: clamp(0.5rem, 1vw, 0.75rem);
          --space-sm: clamp(0.75rem, 1.5vw, 1rem);
          --space-md: clamp(1rem, 2vw, 1.5rem);
          --space-lg: clamp(1.5rem, 3vw, 2.5rem);
          --space-xl: clamp(2rem, 4vw, 4rem);
          --space-xxl: clamp(3rem, 6vw, 6rem);
        }

        * { box-sizing: border-box; padding: 0; margin: 0; }
        html, body { max-width: 100vw; overflow-x: hidden; background-color: var(--blanc); color: var(--texte-principal); font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif; }
        body { -webkit-font-smoothing: antialiased; }
        a { color: inherit; text-decoration: none; }
        .container { width: 100%; max-width: 1400px; margin-left: auto; margin-right: auto; padding-left: var(--space-md); padding-right: var(--space-md); }
        @media (min-width: 1920px) { .container { max-width: 1800px; } }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }

        @keyframes shine {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .animate-fade-up {
          animation: fadeUp 0.6s ease-out forwards;
        }

        .animate-slide-in {
          animation: slideIn 0.5s ease-out forwards;
        }

        .stat-card {
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(75, 30, 109, 0.15);
        }

        .highlight-card {
          position: relative;
          overflow: hidden;
        }

        .highlight-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--jaune-vif), #FF8C00, var(--jaune-vif));
          background-size: 200% 100%;
          animation: shine 3s linear infinite;
        }
      `}</style>

      <main style={{ minHeight: '100vh' }}>
        
        {/* Header Hero avec photo */}
        <header style={{
          background: 'linear-gradient(135deg, var(--violet-profond) 0%, #2D0A45 100%)',
          padding: 'var(--space-md) 0',
          borderBottom: '4px solid var(--jaune-vif)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Motif de fond basket */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.05,
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='none' stroke='white' stroke-width='2'/%3E%3Cpath d='M10,50 Q50,30 90,50' stroke='white' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }} />
          
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-md)',
              flexWrap: 'wrap',
              marginBottom: 'var(--space-lg)'
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
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-xl)',
              alignItems: 'center'
            }}>
              <div className="animate-fade-up">
                <div style={{
                  display: 'inline-block',
                  background: 'var(--jaune-vif)',
                  color: 'var(--violet-profond)',
                  padding: 'var(--space-xs) var(--space-md)',
                  borderRadius: '30px',
                  fontSize: 'var(--fs-sm)',
                  fontWeight: 'bold',
                  marginBottom: 'var(--space-md)'
                }}>
                  #04 • Meneuse • Dodge City
                </div>
                <h1 style={{
                  fontSize: 'var(--fs-xxl)',
                  color: 'var(--blanc-pur)',
                  fontWeight: '800',
                  lineHeight: 1.2,
                  marginBottom: 'var(--space-md)',
                  textShadow: '4px 4px 8px rgba(0,0,0,0.3)'
                }}>
                  JADE <br />
                  <span style={{ color: 'var(--jaune-vif)' }}>CELERIER</span>
                </h1>
                <p style={{
                  fontSize: 'var(--fs-base)',
                  color: 'var(--violet-tres-clair)',
                  marginBottom: 'var(--space-lg)',
                  maxWidth: '500px'
                }}>
                  Championne WNBA • MVP des Finales • All-Star • 
                  Recordwoman de franchise
                </p>
                
                {/* Stats rapides */}
                <div style={{
                  display: 'flex',
                  gap: 'var(--space-lg)',
                  flexWrap: 'wrap'
                }}>
                  <div>
                    <div style={{ fontSize: 'var(--fs-xxl)', color: 'var(--jaune-vif)', fontWeight: 'bold' }}>22.4</div>
                    <div style={{ color: 'var(--violet-tres-clair)', fontSize: 'var(--fs-sm)' }}>PTS</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 'var(--fs-xxl)', color: 'var(--jaune-vif)', fontWeight: 'bold' }}>7.8</div>
                    <div style={{ color: 'var(--violet-tres-clair)', fontSize: 'var(--fs-sm)' }}>AST</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 'var(--fs-xxl)', color: 'var(--jaune-vif)', fontWeight: 'bold' }}>4.5</div>
                    <div style={{ color: 'var(--violet-tres-clair)', fontSize: 'var(--fs-sm)' }}>REB</div>
                  </div>
                </div>
              </div>

              <div className="animate-fade-up" style={{ animationDelay: '0.2s', textAlign: 'center' }}>
                <div style={{
                  width: '100%',
                  maxWidth: '400px',
                  margin: '0 auto',
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                  overflow: 'hidden',
                  border: '4px solid var(--jaune-vif)',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.4)'
                }}>
                  <img 
                    src="/jadece.png" 
                    alt="Jade Celerier"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Highlights de carrière */}
        <section style={{
          padding: 'var(--space-xl) 0',
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
              🏆 Highlights de carrière
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 'var(--space-md)'
            }}>
              {careerHighlights.map((highlight, index) => (
              <div
  key={index}
  className="group rounded-2xl p-6 bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
>
  {/* Year */}
  <span className="text-sm font-medium text-violet-500">
    {highlight.year}
  </span>

  {/* Title */}
  <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-2">
    {highlight.title}
  </h3>

  {/* Description */}
  <p className="text-sm text-gray-500 leading-relaxed">
    {highlight.description}
  </p>

  {/* Accent line */}
  <div className="mt-4 h-[2px] w-10 bg-violet-500 group-hover:w-20 transition-all duration-300"></div>
</div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline MMBS → Tarbes → Dodge */}
        <section style={{
          padding: 'var(--space-xxl) 0',
          background: 'var(--violet-tres-clair)'
        }}>
          <div className="container">
            <h2 style={{
              fontSize: 'var(--fs-xl)',
              color: 'var(--violet-profond)',
              textAlign: 'center',
              marginBottom: 'var(--space-xl)'
            }}>
              📍 Parcours
            </h2>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-xl)'
            }}>
              {careerTimeline.map((period, index) => (
                <div 
                  key={index}
                  className="animate-slide-in"
                  style={{
                    animationDelay: `${index * 0.15}s`,
                    position: 'relative',
                    paddingLeft: 'var(--space-xl)'
                  }}
                >
                  {/* Ligne de timeline */}
                  <div style={{
                    position: 'absolute',
                    left: '20px',
                    top: '0',
                    bottom: index === careerTimeline.length - 1 ? '50%' : '-50px',
                    width: '3px',
                    background: period.color
                  }} />
                  
                  {/* Point */}
                  <div style={{
                    position: 'absolute',
                    left: '12px',
                    top: '20px',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: period.color,
                    border: '4px solid var(--jaune-vif)',
                    boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)'
                  }} />

                  <div className="stat-card" style={{
                    background: 'var(--blanc-pur)',
                    borderRadius: '20px',
                    padding: 'var(--space-lg)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
                  }}>
                    {/* En-tête */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-md)',
                      marginBottom: 'var(--space-lg)',
                      flexWrap: 'wrap'
                    }}>
                      <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '15px',
                        background: period.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '30px',
                        color: 'white'
                      }}>
                        {period.logo}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{
                          fontSize: 'var(--fs-sm)',
                          color: 'var(--texte-secondaire)'
                        }}>
                          {period.period}
                        </div>
                        <h3 style={{
                          fontSize: 'var(--fs-lg)',
                          color: 'var(--violet-profond)',
                          fontWeight: 'bold'
                        }}>
                          {period.team}
                        </h3>
                        <div style={{
                          display: 'inline-block',
                          background: period.color + '20',
                          color: period.color,
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: 'var(--fs-xs)',
                          fontWeight: 'bold',
                          marginTop: 'var(--space-xs)'
                        }}>
                          {period.league}
                        </div>
                      </div>
                      <div style={{
                        textAlign: 'right'
                      }}>
                        <div style={{
                          fontSize: 'var(--fs-xs)',
                          color: 'var(--texte-secondaire)'
                        }}>
                          Matchs joués
                        </div>
                        <div style={{
                          fontSize: 'var(--fs-lg)',
                          fontWeight: 'bold',
                          color: 'var(--violet-profond)'
                        }}>
                          {period.games}
                          <span style={{
                            fontSize: 'var(--fs-sm)',
                            color: 'var(--texte-secondaire)',
                            marginLeft: '4px'
                          }}>
                            ({period.starter} tit.)
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(4, 1fr)',
                      gap: 'var(--space-sm)',
                      marginBottom: 'var(--space-lg)',
                      padding: 'var(--space-md)',
                      background: 'var(--jaune-pastel)',
                      borderRadius: '15px'
                    }}>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: 'var(--fs-lg)', fontWeight: 'bold', color: 'var(--violet-profond)' }}>
                          {period.stats.points}
                        </div>
                        <div style={{ fontSize: 'var(--fs-xs)', color: 'var(--texte-secondaire)' }}>PTS</div>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: 'var(--fs-lg)', fontWeight: 'bold', color: 'var(--violet-profond)' }}>
                          {period.stats.passes}
                        </div>
                        <div style={{ fontSize: 'var(--fs-xs)', color: 'var(--texte-secondaire)' }}>AST</div>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: 'var(--fs-lg)', fontWeight: 'bold', color: 'var(--violet-profond)' }}>
                          {period.stats.rebonds}
                        </div>
                        <div style={{ fontSize: 'var(--fs-xs)', color: 'var(--texte-secondaire)' }}>REB</div>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: 'var(--fs-lg)', fontWeight: 'bold', color: 'var(--violet-profond)' }}>
                          {period.stats.evaluation}
                        </div>
                        <div style={{ fontSize: 'var(--fs-xs)', color: 'var(--texte-secondaire)' }}>EFF</div>
                      </div>
                    </div>

                    {/* Palmarès */}
                    <div style={{
                      marginBottom: 'var(--space-md)'
                    }}>
                      <h4 style={{
                        fontSize: 'var(--fs-sm)',
                        color: 'var(--violet-profond)',
                        marginBottom: 'var(--space-sm)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-xs)'
                      }}>
                        <span>🏅</span> Palmarès & Distinctions
                      </h4>
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 'var(--space-xs)'
                      }}>
                        {period.achievements.map((achievement, i) => (
                          <span key={i} style={{
                            background: period.color + '15',
                            color: period.color,
                            padding: '4px 12px',
                            borderRadius: '20px',
                            fontSize: 'var(--fs-xs)',
                            border: '1px solid ' + period.color + '30'
                          }}>
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Description */}
                    <p style={{
                      fontSize: 'var(--fs-sm)',
                      color: 'var(--texte-secondaire)',
                      lineHeight: 1.6,
                      fontStyle: 'italic'
                    }}>
                      &quot;{period.description}&quot;
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistiques par saison */}
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
              📊 Statistiques saison par saison
            </h2>

            <div style={{
              overflowX: 'auto',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
            }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                minWidth: '700px'
              }}>
                <thead>
                  <tr style={{
                    background: 'var(--violet-profond)',
                    color: 'var(--blanc-pur)'
                  }}>
                    <th style={{ padding: 'var(--space-md)', textAlign: 'left' }}>Saison</th>
                    <th style={{ padding: 'var(--space-md)', textAlign: 'center' }}>MJ</th>
                    <th style={{ padding: 'var(--space-md)', textAlign: 'center' }}>PTS</th>
                    <th style={{ padding: 'var(--space-md)', textAlign: 'center' }}>AST</th>
                    <th style={{ padding: 'var(--space-md)', textAlign: 'center' }}>REB</th>
                    <th style={{ padding: 'var(--space-md)', textAlign: 'center' }}>FG%</th>
                    <th style={{ padding: 'var(--space-md)', textAlign: 'center' }}>3PT%</th>
                  </tr>
                </thead>
                <tbody>
                  {seasonStats.map((stat, index) => (
                    <tr 
                      key={index}
                      className="animate-fade-up"
                      style={{
                        animationDelay: `${index * 0.05}s`,
                        background: index % 2 === 0 ? 'var(--blanc-pur)' : 'var(--jaune-pastel)',
                        borderBottom: '1px solid var(--violet-tres-clair)'
                      }}
                    >
                      <td style={{ 
                        padding: 'var(--space-md)', 
                        fontWeight: 'bold',
                        color: 'var(--violet-profond)'
                      }}>
                        {stat.season}
                      </td>
                      <td style={{ padding: 'var(--space-md)', textAlign: 'center' }}>{stat.gp}</td>
                      <td style={{ 
                        padding: 'var(--space-md)', 
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: stat.pts > 20 ? 'var(--jaune-vif)' : 'inherit'
                      }}>
                        {stat.pts}
                      </td>
                      <td style={{ padding: 'var(--space-md)', textAlign: 'center' }}>{stat.ast}</td>
                      <td style={{ padding: 'var(--space-md)', textAlign: 'center' }}>{stat.reb}</td>
                      <td style={{ padding: 'var(--space-md)', textAlign: 'center' }}>{stat.fg}</td>
                      <td style={{ padding: 'var(--space-md)', textAlign: 'center' }}>{stat['3pt']}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Citation */}
        <section style={{
          padding: 'var(--space-xl) 0',
          background: 'linear-gradient(135deg, var(--violet-profond), #2D0A45)',
          color: 'var(--blanc-pur)'
        }}>
          <div className="container">
            <div className="animate-fade-up" style={{
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              <div style={{ fontSize: '60px', marginBottom: 'var(--space-md)' }}>💜</div>
              <p style={{
                fontSize: 'var(--fs-lg)',
                fontStyle: 'italic',
                lineHeight: 1.6,
                marginBottom: 'var(--space-lg)'
              }}>
                &quot;De MMBS à Dodge City, chaque étape a construit.&quot;
              </p>
              <p style={{
                fontSize: 'var(--fs-md)',
                color: 'var(--jaune-vif)',
                fontWeight: 'bold'
              }}>
                — Jade Celerier
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
            <p style={{ fontSize: 'var(--fs-base)' }}>
              #04 • Jade Celerier • Dodge City 🏀
            </p>
            <p style={{ marginTop: 'var(--space-xs)', fontSize: 'var(--fs-xs)' }}>
              © 2026 • Carrière officielle
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}