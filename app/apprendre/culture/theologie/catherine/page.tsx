'use client'

import Link from 'next/link'

import Footer from '../../../../components/layout/Footer'

import '../../../../components/apprendre/styles.css'

const teachings = [
  `Ne pas corriger un pécheur par peur ou polir ses phrases par confort social, c'est comme un médecin qui met un pansement sur une plaie purulente sans la nettoyer. On peut même accomplir soi-même sa pénitence car ce péché est seulement endormi en nous.`,

  `L'amour-propre est le poison du monde et produit tous les péchés. Il faut vouloir le salut des âmes et faire la volonté de Dieu, pas la sienne. Tout le bien et le mal se font par l'intermédiaire du prochain.`,

  `Les pécheurs en tentant les hommes deviennent les instruments qui éprouvent et renforcent la vertu des serviteurs de Dieu. La vertu dans la difficulté a + de valeur que dans la joie, comme un jardinier qui perd son jardin et continue de travailler la terre (il aime vraiment). Un laïc qui obéit avec un immense amour a plus de mérite qu'un religieux qui obéit par simple habitude.`,

  `On ne peut pas suivre le Christ à notre convenance il faut suivre son chemin d'humilité. Les pécheurs souffrent comme les saints mais leur souffrance est inutile. Un petit acte fait avec charité a + de poids que des souffrances subies sans amour. On souffre non pas pour soi, mais par amour pour Dieu et par douleur de voir les autres s'égarer.`,

  `Ne jamais juger la volonté des autres et ne se sentir offensé que par celui qui offense Dieu. Si Dieu te fait sentir la souffrance de cette âme, c'est pour que tu l'aides. Même une pensée égoïste nuit au prochain, tu le prives d'une prière.`,

  `Dieu veut que le riche ait besoin du pauvre et que le savant ait besoin de l'ignorant. Pour nous forcer à la charité. Si tu avais tous les talents, tu n'aurais pas besoin des autres et tu tomberais dans l'orgueil. Dieu nous utilise comme ses mains (ministres) pour distribuer ses dons. Si tu as quelque chose, c'est pour le donner à celui qui ne l'a pas.`,

  `Si tu n'utilises pas ta raison pour chercher la Vérité, tu marches à l'aveugle et tu finis par aimer le mal en croyant que c'est un bien. Si tu sors le vase (ton âme) de la fontaine (Dieu) pour donner à boire aux autres, il se vide vite. Si tu es triste car on ne te rend pas ton amour, c'est que ton amour est encore "imparfait" et centré sur toi.`,

  `Dans la vie spirituelle, celui qui n'avance pas recule. Il faut passer de la peur du châtiment à l'amour de la vertu. Personne ne peut "sortir" de la main de Dieu. Soit on y demeure par la miséricorde (en l'aimant), soit on y demeure sous sa justice (en subissant les conséquences de ses actes). Si la tentation te déplaît, c'est la preuve que Dieu est en toi.`,

  `Dieu retire le sentiment de sa présence pour nous empêcher de devenir des "enfants gâtés" qui ne cherchent que les bonbons spirituels (chrétiens mercenaires) pour qu'on comprenne que le péché est un néant et qu'on retourne à lui. Comme une mère qui arrête d'allaiter son enfant pour qu'il commence à manger de la nourriture solide (la "chair" du Christ crucifié). Ne pas s'aimer soi-même à travers Dieu.`,

  `Un chrétien qui pèche est plus coupable qu'un païen car + on reçoit, + on est redevable. Le démon ne peut nous faire tomber que si nous donnons notre consentement. Dieu permet la tentation pour qu'on prouve notre amour et grandisse en connaissance de nous. Il faut vider ses attachements mondains pour que Dieu entre.`,

  `Pour ceux qui ne peuvent pas pleurer physiquement (Dieu le fait pour t'empêcher de devenir orgueilleux ou de te satisfaire de ta propre émotion), c'est le désir ardent du cœur qui compte autant que l'eau des yeux (l'œil traduit ce que le cœur ressent, un cœur plein d'amour-propre donne des larmes égoïstes). La perfection, c'est de pleurer sur les péchés du monde et la perte des âmes.`,

  `Ceux qui attaquent l'Église ne peuvent pas atteindre Dieu, mais ils perdent la "grâce", ce qui les mène à la damnation s'ils ne se repentent pas. Toucher à un prêtre (ou par mépris), c'est offenser Dieu directement. Le prêtre est un trésor dans un vase d'argile.`,

  `Dieu donne à chacun les secours dont il a besoin, c'est le bon et vrai médecin. S'il permet une épreuve c'est pour ta sanctification. La faim, la soif, la perte d'argent, les insultes, le froid permettent un but précis : le salut. La sodomie ou la masturbation sont des abominations, même les démons (par noblesse de nature angélique) en sont horrifiés.`
]

export default function CatherinePage() {
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
            <span>🕊️</span>
            <span>Sainte Catherine de Sienne</span>
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
                fontSize: 'clamp(2.3rem, 5vw, 4.5rem)',
                color: 'var(--violet-profond)',
                fontWeight: 900,
                marginBottom: '1.5rem'
              }}
            >
              Une femme simple qui parla aux puissants
            </h2>

            <p
              style={{
                fontSize: '1.15rem',
                lineHeight: 1.9,
                color: 'var(--texte-secondaire)'
              }}
            >
              Sainte Catherine de Sienne, simple religieuse laïque
              dominicaine du XIVe siècle, fut le
              personnage politique majeur qui
              fait revenir le pape à Rome.
            </p>
          </div>
        </div>
      </section>

      {/* CITATION */}
      <section
        style={{
          padding: '2rem 0'
        }}
      >
        <div className="container">
          <div
            className="quote-card"
            style={{
              maxWidth: '950px',
              margin: '0 auto'
            }}
          >
            <div className="quote-emoji">✉️</div>

            <p className="quote-text">
              « Vous n’avez pas été bien ferme.
              Je prie pour que vous agissiez en homme viril.
              Ayez faim du salut de vos brebis. »
            </p>

            <p className="quote-author">
              — Sainte Catherine au pape
            </p>
          </div>
        </div>
      </section>

      {/* DOCTEUR */}
      <section
        style={{
          padding: '2rem 0 5rem'
        }}
      >
        <div className="container">
          <div
            style={{
              maxWidth: '1000px',
              margin: '0 auto',
              background: 'white',
              borderRadius: '30px',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-md)',
              border: '2px solid var(--violet-tres-clair)'
            }}
          >
            <h3
              style={{
                fontSize: '2rem',
                color: 'var(--violet-profond)',
                marginBottom: '1.5rem',
                fontWeight: 800
              }}
            >
              Docteur de l’Église
            </h3>

            <p
              style={{
                lineHeight: 1.9,
                color: 'var(--texte-principal)',
                fontSize: '1.05rem'
              }}
            >
              Une femme sans instruction universitaire,
              n’ayant jamais étudié dans une école de théologie
              ni ouvert de manuel de droit canon,
              fut pourtant reconnue comme parfaitement conforme
              à l’orthodoxie après examen de ses écrits.
              L’Église l’a proclamée Docteur de l’Église,
              reconnaissant dans ses paroles une sagesse
              inspirée par l’Esprit Saint.
            </p>
          </div>
        </div>
      </section>

      {/* ENSEIGNEMENTS */}
      <section className="learning-section">
        <div className="container">
          <h2 className="section-title">
            Enseignements spirituels
          </h2>

          <div
            className="learning-grid"
            style={{
              gridTemplateColumns:
                'repeat(auto-fit, minmax(320px, 1fr))'
            }}
          >
            {teachings.map((text, index) => (
              <div
                key={index}
                className={`learning-card ${
                  index % 2 === 0
                    ? 'white'
                    : 'purple'
                }`}
                style={{
                  textAlign: 'left',
                  alignItems: 'flex-start'
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

                <p
                  style={{
                    lineHeight: 1.9,
                    fontSize: '1rem'
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIN */}
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
              « La Vierge Marie à Sainte Bernadette (souvent malade) : « Je ne vous promets pas de vous rendre heureuse dans ce monde, mais dans l&lsquo;autre. »
            </p>

           
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}