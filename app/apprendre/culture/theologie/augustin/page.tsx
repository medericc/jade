'use client'

import Link from 'next/link'

import Footer from '../../../../components/layout/Footer'

import '../../../../components/apprendre/styles.css'

const teachings = [
  {
    title: 'La connaissance de soi et le but de la prière',
    text: `Personne ne se connaît assez pour savoir ce qu'il sera demain. Tout l'effort de la prière doit converger vers un seul but : la vie éternelle. La prière est puissamment aidée par les jeûnes et surtout par les aumônes (« chercher Dieu avec ses mains »). La prière est incompatible avec l'espoir placé dans les richesses incertaines. Méprisons le faste pour embrasser la vie véritable. Celui qui ne vit que pour les plaisirs des sens est considéré mort spirituellement.`
  },

  {
    title: 'La pratique des moines et la nature de la demande',
    text: `Les moines d'Égypte privilégient des prières brèves et fréquentes pour maintenir une attention vigilante sans se lasser. La prière se réalise souvent mieux dans les larmes que dans les grands discours. Si une demande ne peut pas se rapporter au Notre Père (ex : demander des richesses par cupidité), elle est "charnelle" ou illicite.`
  },

  {
    title: 'La santé, l’amitié et la volonté de Dieu',
    text: `La santé et l'amitié sont des biens précieux, mais passagers, utiles que s'ils nous aident à acquérir le mérite de la vie éternelle. On doit aimer Dieu pour lui-même, et s'aimer soi-même (ou son prochain) en vue de Dieu. Nous pouvons demander la fin d'une souffrance alors qu'elle nous est utile pour notre humilité ou notre patience. Dieu peut refuser une demande par bonté (Paul) ou l'accorder nous laisser constater l'absurdité de nos propres caprices (Israélites au désert).`
  },

  {
    title: 'Les limites et l’orientation des soins',
    text: `Il est permis de prier pour la santé (intégrité de l'âme et du corps), l'amitié (l'affection envers les proches et même les ennemis) et le nécessaire (nourriture et vêtement) pour maintenir un état convenable sans tomber dans l'excès ou l'orgueil. Par nécessité pour servir Dieu, ne pas laisser la « concupiscence » guider ces soins, rester orienté vers 1 seule fin.`
  },

  {
    title: 'La prière comme désir du cœur',
    text: `La véritable prière est un "désir continuel" nourri par la foi, l'espérance et la charité. La prière ne sert pas à informer Dieu, mais à exercer et dilater notre désir. Plus notre désir est grand, plus nous devenons capables de recevoir les dons que Dieu prépare. Les paroles ne sont là que pour nous rappeler à nous-mêmes ce que nous demandons et pour ranimer notre ferveur quand elle s'attiédit.`
  },

  {
    title: 'Le vrai bonheur et la fin de la prière',
    text: `L'homme heureux n'est pas celui qui fait ce qu'il veut (car on peut vouloir le mal), mais celui qui a tout ce qu'il veut, à condition de ne vouloir que ce qui convient. La prière ne cessera que lorsque nous serons dans la terre des vivants, là où l'on ne demande plus le bien, mais où on le contemple.`
  }
]

export default function SaintAugustinPage() {
  return (
    <main className="apprendre-page">
      {/* HEADER */}
      <header className="apprendre-header">
        <div className="container apprendre-header-content">
          <Link
            href="/apprendre/theologie"
            className="back-link"
          >
            ← Retour
          </Link>

          <h1 className="apprendre-title">
            <span>📖</span>
            <span>Saint Augustin</span>
          </h1>
        </div>
      </header>

      {/* HERO */}
      <section className="hero-section">
        <div className="container">
          <div
            style={{
              maxWidth: '950px',
              margin: '0 auto',
              textAlign: 'center'
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                color: 'var(--violet-profond)',
                fontWeight: 900,
                marginBottom: '1.5rem'
              }}
            >
              Comment prier selon Saint Augustin
            </h2>

            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.9,
                color: 'var(--texte-secondaire)'
              }}
            >
             « Se tromper était humain, mais persévérer dans l’erreur, c’est l’orgueil satanique. »
            </p>
          </div>
        </div>
      </section>

      {/* CADRE */}
      <section
        style={{
          padding: '2rem 0 4rem'
        }}
      >
        <div className="container">
          <div
            className="quote-card"
            style={{
              maxWidth: '1000px',
              margin: '0 auto'
            }}
          >
            <div className="quote-emoji">🕊️</div>

            <p className="quote-text">
              « Le célibat ou le mariage virginal permet
              de se préparer au paradis où nous serons seuls. »
            </p>

            <p className="quote-author">
              — Saint Augustin
            </p>
          </div>
        </div>
      </section>

      {/* ENSEIGNEMENTS */}
      <section className="learning-section">
        <div className="container">
          <h2 className="section-title">
            Enseignements sur la prière
          </h2>

          <div
            className="learning-grid"
            style={{
              gridTemplateColumns:
                'repeat(auto-fit, minmax(350px, 1fr))'
            }}
          >
            {teachings.map((teaching, index) => (
              <div
                key={index}
                className={`learning-card ${
                  index % 2 === 0
                    ? 'white'
                    : 'purple'
                }`}
                style={{
                  alignItems: 'flex-start',
                  textAlign: 'left'
                }}
              >
                <div
                  style={{
                    fontSize: '2rem',
                    marginBottom: '1rem'
                  }}
                >
                  ✝️
                </div>

                <h3
                  style={{
                    marginBottom: '1rem',
                    lineHeight: 1.3
                  }}
                >
                  {teaching.title}
                </h3>

                <p
                  style={{
                    lineHeight: 1.9,
                    fontSize: '1rem'
                  }}
                >
                  {teaching.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CITATION FINALE */}
      <section
        style={{
          padding: '5rem 0'
        }}
      >
        <div className="container">
          <div
            className="quote-card"
            style={{
              maxWidth: '900px',
              margin: '0 auto'
            }}
          >
            <div className="quote-emoji">🔥</div>

            <p className="quote-text">
              « Tu nous as faits pour toi Seigneur,
              et notre cœur est sans repos
              tant qu’il ne repose pas en toi. »
            </p>

            <p className="quote-author">
              — Saint Augustin
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}