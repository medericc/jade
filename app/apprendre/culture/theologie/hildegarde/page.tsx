'use client'

import Footer from '@/app/components/layout/Footer'
import { useState } from 'react'
import styles from './hildegarde.module.css'
import Link from 'next/link'


export default function HildegardePage() {

   const [langue, setLangue] = useState<'fr' | 'be'>('fr')

  return (
    <>
      <main className="hildegarde-page">

       <header className={styles.hildegardeHeader}>
    <div className={`container ${styles.hildegardeHeaderContent}`}>
      <Link
        href="/apprendre/culture"
        className={styles.backLink}
      >
        ← Retour
      </Link>

      <h1 className={styles.hildegardeTitle}>
       
        <span>Hildegarde de Bingen</span>
      </h1>
    
     <div
    style={{
      display: 'flex',
      alignItems: 'center',
      background: '#fff',
      border: '2px solid #f3c623',
      borderRadius: '999px',
      padding: '4px',
    }}
  >
    <button
      onClick={() => setLangue('fr')}
      style={{
        border: 'none',
        background:
          langue === 'fr'
            ? '#2a0c45'
            : 'transparent',
        color:
          langue === 'fr'
            ? '#fff'
            : '#2a0c45',
        fontWeight: 700,
        padding: '.65rem 1rem',
        borderRadius: '999px',
        cursor: 'pointer',
      }}
    >
      🇫🇷
    </button>

    <button
      onClick={() => setLangue('be')}
      style={{
        border: 'none',
        background:
          langue === 'be'
            ? '#2a0c45'
            : 'transparent',
        padding: '.65rem 1rem',
        
        borderRadius: '999px',
        cursor: 'pointer',
      }}
    >
      <img
        src="/bearn.png"
        alt="Béarn"
        style={{
          width: '24px',
          height: '24px',
          objectFit: 'contain',
        }}
      />
    </button>
  </div>
    </div>
     
  </header>
        {/* HERO */}
        <section className="hero">
      <div className={styles.hildegardeHeaderContent2}>
      <Link
        href="/apprendre/culture"
        className={styles.backLink2}
      >
        ← Retour
      </Link>

   
     <div
    style={{
      display: 'flex',
      alignItems: 'center',
      background: '#fff',
      border: '2px solid #2a0c45',
      borderRadius: '999px',
      padding: '4px',
    }}
  >
    <button
      onClick={() => setLangue('fr')}
      style={{
        border: 'none',
        background:
          langue === 'fr'
            ? '#2a0c45'
            : 'transparent',
        color:
          langue === 'fr'
            ? '#fff'
            : '#2a0c45',
        fontWeight: 700,
        padding: '.65rem 1rem',
        borderRadius: '999px',
        cursor: 'pointer',
      }}
    >
      🇫🇷
    </button>

    <button
      onClick={() => setLangue('be')}
      style={{
        border: 'none',
        background:
          langue === 'be'
            ? '#2a0c45'
            : 'transparent',
        padding: '.65rem 1rem',
        
        borderRadius: '999px',
        cursor: 'pointer',
      }}
    >
      <img
        src="/bearn.png"
        alt="Béarn"
        style={{
          width: '24px',
          height: '24px',
          objectFit: 'contain',
        }}
      />
    </button>
  </div>
    </div>
          <div className="container">
            <div className="hero-card">
              <span className="badge">🌿 Visionnaire du Moyen Âge</span>

              <h1> {langue === 'fr'
    ? 'La vie de la conception'
    : 'La vita de la concepcion'}</h1>

              <p>
  {langue === 'fr' ? (
    <>
                Sainte Hildegarde de Bingen contemple la naissance de l’être humain
                comme une œuvre cosmique :
                le corps reçoit progressivement sa forme,
                puis Dieu y insuffle l’âme,
                feu vivant destiné à conduire l’homme vers la lumière,
                par la croissance jusqu&lsquo;à l&lsquo;âge mûr.
          
            </>
  ) : (
    <>
      Santa Hildegarda de Bingen contempla la neishença
      de l’òmi com ua òbra cosmica...
          
          
          
             </>
  )}
</p>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="intro-section">
          <div className="container">
            <div className="intro-box">
              <h2>✨ Le mystère de l’âme et du corps</h2>

              <p>
                Pour Hildegarde,
                la conception n’est pas un simple phénomène biologique.
                Le corps humain est façonné peu à peu dans le sein maternel,
                comme une terre fertile préparée à recevoir un feu venu de Dieu.
              </p>

              <p>
                Lorsque le corps est prêt,
                Dieu insuffle l’âme :
                une réalité spirituelle,
                lumineuse,
                vivante,
                comparable à une sphère de feu parcourant tout l’être humain.
              </p>
            </div>
          </div>
        </section>
 <section className="content-section alt">
          <div className="container">
            <div className="grid">
              <div className="card full dark">
                 <h3>💞 L’importance de l’union des parents</h3>

        <p>
          Hildegarde explique que le foie entretient la chaleur vitale
          en réchauffant le cœur,
          tandis que le poumon le protège et l’enveloppe.
          
        </p>

        <p>
          Déjà dans le sein maternel,
          l’âme commence à éveiller doucement les cinq sens de l’enfant,
          comme une présence spirituelle qui prépare peu à peu
          « l’homme extérieur » avant la naissance.
        </p>

        <p>
          Mais Hildegarde insiste surtout sur un point essentiel :
          l’état intérieur des parents au moment de l’acte
          influence profondément l’enfant à venir.
          Une union vécue dans la charité,
          l’amour sincère et la paix du cœur
          favorise selon elle la naissance d’un être harmonieux,
          prudent et vertueux.
        </p>

        <p>
          À l’inverse,
          une conception marquée par l’amertume,
          la colère,
          les vices ou l’absence d’amour
          peut troubler cette harmonie.
          L’enfant risque alors de porter une complexion plus difficile :
          tempérament sombre,
          colère,
          tristesse ou comportements désordonnés.
        </p>

        <p>
          Hildegarde décrit aussi certains déséquilibres entre le père et la mère :
          si l’amour véritable habite l’un mais non l’autre,
          l’enfant pourra naître plus fragile,
          plus instable ou peiner davantage à trouver la joie et l’équilibre.
        </p>

        <p>
          Elle associe également les phases de la lune
          aux dispositions naturelles de l’enfant :
          certaines périodes favoriseraient l’orgueil ou la dureté,
          tandis que d’autres annonceraient fidélité,
          santé et bonheur.
        </p>

        <p>
          Pourtant,
          rien n’est totalement figé.
          Même lorsqu’une naissance semble marquée par des difficultés,
          Hildegarde affirme que Dieu peut encore transformer cette nature.
          Comme des épices adoucissent un aliment amer,
          la force spirituelle,
          une vie droite
          et une bonne manière de vivre
          peuvent guérir et rééquilibrer l’être humain.
        </p>

        <p>
          Ainsi,
          malgré les faiblesses ou les désordres présents au moment de la conception,
          la grâce divine demeure toujours capable d’aider,
          de réparer
          et de conduire l’être humain vers davantage d’harmonie.
        </p>
              </div>
            </div>
          </div>
        </section>
        {/* SECTION 1 */}
        <section className="content-section">
          <div className="container">
            <div className="grid">
              <div className="card large">
                <h3>🌱 La formation de l’enfant</h3>

                <p>
                  Hildegarde décrit la génération humaine comme une union
                  entre la « semence » masculine
                  et la force de gestation féminine.
                </p>

                <p>
                  Le corps prend forme progressivement grâce à la chaleur maternelle,
                  comme le lait devenant fromage,
                  chair puis os.
                </p>

                <p>
                  Une fois cette structure préparée,
                  Dieu donne l’âme.
                  C’est seulement alors que l’enfant commence à bouger dans le sein,
                  semblable à un fruit vivant sous la rosée.
                </p>
              </div>

              <div className="card purple">
                <h3>🔥 L’âme</h3>

                <p>
                  L’âme est décrite comme :
                </p>

                <ul>
                  <li>une sphère de feu</li>
                  <li>un vent chaud et puissant</li>
                  <li>une sève parcourant le corps</li>
                  <li>une lumière intérieure</li>
                </ul>

                <p>
                  Elle anime le sang,
                  la respiration,
                  les sens
                  et la croissance de l’être humain.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 */}
           <section className="content-section alt">
          <div className="container">
            <div className="card full dark">
              <h3>❤️ Le cœur, siège de l’âme</h3>

              <p>
                Hildegarde place principalement l’âme dans le cœur,
                “comme dans une maison”.
              </p>

              <p>
                Le cœur devient le centre vivant de l’être :
                les pensées y entrent et en sortent,
                puis montent vers le cerveau
                afin d’être discernées et ordonnées.
              </p>

              <p>
                Le cerveau diffuse ensuite sa force dans tout le corps
                comme la rosée humidifie la terre.
                Les yeux,
                les oreilles
                et le nez
                sont les fenêtres par lesquelles l’âme contemple le monde.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3 */}
        <section className="content-section">
          <div className="container">
            <div className="grid">
              <div className="card">
                <h3>⚖️ Entendement et volonté</h3>

                <p>
                  L’âme agit principalement par deux puissances :
                  l’entendement et la volonté.
                </p>

                <p>
                  L’entendement discerne le bien et le mal,
                  comme un homme séparant le grain de la paille.
                </p>

                <p>
                  La volonté,
                  enracinée dans le cœur,
                  transforme l’intention en action
                  et gouverne les passions grâce à la crainte de Dieu.
                </p>
              </div>

              <div className="card gold">
                <h3>🌳 L’âme comme une sève</h3>

                <p>
                  Hildegarde compare l’âme à une sève vivante.
                </p>

                <p>
                  Dans l’enfance,
                  elle ressemble à un bourgeon fragile.
                  Dans la jeunesse,
                  elle fleurit avec vigueur.
                  Dans la maturité,
                  elle atteint sa pleine sagesse.
                </p>

                <p>
                  Puis,
                  dans la vieillesse,
                  ses forces semblent se retirer
                  comme la sève d’un arbre durant l’hiver.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 */}
        <section className="content-section alt">
          <div className="container">
            <div className="card full dark">
              <h3>🌑 Le péché et la noirceur de l’âme</h3>

              <p>
                Les œuvres humaines laissent une véritable empreinte sur l’âme.
              </p>

              <p>
                Les bonnes œuvres la couvrent de lumière
                et d’un éclat semblable à l’or.
                Le péché comme la fornication,
                au contraire,
                la recouvre de ténèbres,
                comme un poison rongeant intérieurement.
              </p>

              <p>
                Une âme qui persiste dans le mal
                perd progressivement la vision du divin
                et devient incapable de s’élever vers Dieu.
              </p>

              <blockquote>
                La lumière ou la noirceur de l’âme
                révèle finalement toute la vérité de l’existence humaine.
              </blockquote>
            </div>
          </div>
        </section>

        {/* FINAL */}
        <section className="final-section">
          <div className="container">
            <div className="final-box">
              <h2>✨ Une vision profondément spirituelle de l’homme</h2>

              <p>
                Chez Hildegarde,
                le corps,
                l’âme,
                la morale
                et même les émotions humaines
                forment une unité vivante.
              </p>

              <p>
                L’être humain est un reflet miniature du cosmos :
                appelé à rayonner par la lumière divine,
                mais capable aussi de s’assombrir par le péché.
              </p>

              <p>
                Toute la vie spirituelle consiste alors
                à laisser cette lumière intérieure
                illuminer de nouveau l’âme entière.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </main>

      <style jsx>{`
       .hildegarde-page {
  min-height: 100vh;
--or: #f4c542;
 background:
  linear-gradient(
    180deg,
    #24103b 0%,
    #13081f 45%,
    #09060d 100%
  );

  color: #2d0a45;
}

.hero {
  padding: 5rem 0 4rem;
}

.hero-card {
  position: relative;

  overflow: hidden;

  background:
    linear-gradient(
      135deg,
      #4b1e6d 0%,
      #6f3b95 100%
    );

  border-radius: 36px;

  padding: 4rem;

  box-shadow:
    0 25px 60px rgba(75,30,109,.22);
}

.hero-card::before {
  content: '';

  position: absolute;

  top: -150px;
  right: -150px;

  width: 350px;
  height: 350px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(255,255,255,.15),
      transparent 70%
    );
}

.badge {
  display: inline-block;

  margin-bottom: 1.5rem;

  padding: .55rem 1rem;

  border-radius: 999px;

  background: rgba(255,255,255,.12);

  backdrop-filter: blur(8px);

  color: white;

  font-weight: 700;
}

.hero h1 {
  font-size: clamp(3rem,6vw,5rem);

  line-height: 1.05;

  margin-bottom: 1.5rem;

  font-weight: 900;

  color: white;
}

.hero p {
  max-width: 900px;

  font-size: 1.12rem;

  line-height: 1.9;

  color: rgba(255,255,255,.92);
}

        .intro-section,
        .content-section,
        .final-section {
          padding: 2rem 0 5rem;
        }

        .intro-box,
.card,
.final-box {
  background: white;

  border-radius: 30px;

  padding: 3rem;

  box-shadow:
    0 10px 35px rgba(0,0,0,.06);

  transition:
    transform .3s ease,
    box-shadow .3s ease;
}

.intro-box:hover,
.card:hover,
.final-box:hover {
  transform: translateY(-4px);

  box-shadow:
    0 18px 45px rgba(0,0,0,.10);
}

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .card h3 {
          font-size: 1.7rem;
          margin-bottom: 1.5rem;
          color: #4b1e6d;
        }

        .large {
          min-height: 100%;
        }

       .purple {
  background:
    linear-gradient(
      135deg,
      #f3ebff,
      #ffffff
    );
}

.gold {
  background:
    linear-gradient(
      135deg,
      #fff6d6,
      #ffffff
    );
}

.dark {
  background:
    linear-gradient(
      135deg,
      #3f185d,
      #5f2d83
    );

  color: white;
}

        .dark h3,
        .dark blockquote {
          color: #ffe27a;
        }

        .dark p {
          color: rgba(255,255,255,0.92);
        }

        .full {
          width: 100%;
        }

        ul {
          margin: 1rem 0 1.5rem 1.2rem;
        }

        li {
          margin-bottom: 0.7rem;
        }

        blockquote {
          margin-top: 2rem;
          font-size: 1.4rem;
          font-style: italic;
          line-height: 1.7;
        }

       .final-box {
  text-align: center;

  background:
    linear-gradient(
      135deg,
      #fff8df,
      #ffffff
    );

  border: 2px solid #ffe27a;
}

.final-box h2 {
  color: #4b1e6d;

  font-size: 2.3rem;

  margin-bottom: 1.5rem;
}

        @media (max-width: 768px) {
          .hero-card,
          .intro-box,
          .card,
          .final-box {
            padding: 2rem;
          }

          .hero {
            padding-top: 3rem;
          }

        .back-wrapper {
  max-width: 1250px;

  margin: 0 auto;

  padding: 1.5rem;
}

.back-header {
  display: flex;

  justify-content: space-between;

  align-items: center;
}

.toggle {
  display: flex;

  align-items: center;

  background: white;

  border: 2px solid #f3c623;

  border-radius: 999px;

  padding: 4px;

  box-shadow:
    0 6px 18px rgba(42,12,69,.08);
}
        }

@media (max-width: 1100px) {

  .intro-section,
  .content-section,
  .final-section {
    padding: 1rem 0 3rem;
  }
    .hero {
     padding: 1rem 0 3rem;
}

}
@media (max-width: 768px) {

  .intro-section,
  .content-section,
  .final-section {
    padding: .5rem 0 1.5rem;
  }
.hero {
  padding: .5rem 0 1.5rem;
}
}





      `}</style>
    </>
  )
}