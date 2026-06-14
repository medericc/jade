// app/histoire/page.tsx

import Timeline from '../../components/Timeline'
import Link from 'next/link'
export const metadata = {
  title: 'Culture Béarnaise',
}

export default function HistoirePage() {
  return (
    <main
      style={{
        background: '#f3eef8',
        minHeight: '100vh',
      }}
    >
      {/* HERO */}

      <section
        style={{
          background:
            'linear-gradient(180deg,#2a0c45 0%, #3f1764 100%)',
          padding: '5rem 1rem',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >

<div
  style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
    padding: '0 clamp(.5rem, 4vw, 4rem)',
    gap: '1rem',
  }}
>
  {/* Bouton retour */}
 <Link
  href="/apprendre"
  style={{
    textDecoration: 'none',
  }}
>
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '.5rem',
      background: '#fff',
      border: '2px solid #f3c623',
      borderRadius: '999px',
      padding: '.7rem 1.1rem',
      color: '#2a0c45',
      fontWeight: 700,
      boxShadow: '0 6px 18px rgba(42,12,69,.08)',
      whiteSpace: 'nowrap',
    }}
  >
    <span>←</span>
    Retour
  </div>
</Link>

  
</div>

          <div
            style={{
              color: '#f3c623',
              fontWeight: 700,
              letterSpacing: '.15em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            📜 Culture
          </div>

          <h1
            style={{
              color: 'white',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 800,
              margin: 0,
            }}
          >
            Histoire du Béarn
          </h1>

          <p
            style={{
              color: '#d8c7e8',
              fontSize: '1.2rem',
              marginTop: '1.5rem',
              lineHeight: 1.8,
            }}
          >
            Découvrez les événements, les personnages et les
            transformations qui ont façonné l&apos;histoire du Béarn
            et du monde.
          </p>
        </div>
      </section>

      {/* TIMELINE */}

      <section
        style={{
          padding: '5rem 1rem',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <Timeline />
        </div>
      </section>

      {/* CHIFFRES */}

    {/* THÉOLOGIE */}

{/* THÉOLOGIE */}

<section
  style={{
    padding: '0 1rem 5rem',
  }}
>
  <div
    style={{
      maxWidth: '1200px',
      margin: '0 auto',
    }}
  >
    <div
      style={{
        textAlign: 'center',
        marginBottom: '3rem',
      }}
    >
      <div
        style={{
          color: '#f3c623',
          fontWeight: 700,
          letterSpacing: '.15em',
          textTransform: 'uppercase',
          marginBottom: '.75rem',
        }}
      >
        ✠ Théologie
      </div>

      <h2
        style={{
          color: '#2a0c45',
          fontSize: 'clamp(2rem,4vw,3rem)',
          fontWeight: 800,
          marginBottom: '1rem',
        }}
      >
        Maîtres spirituels et défenseurs de la Foi
      </h2>

      <p
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          color: '#6b4b7a',
          lineHeight: 1.7,
        }}
      >
        Découvrez les enseignements des saints,
        docteurs de l&apos;Église et grandes figures
        de la tradition catholique.
      </p>

      {/* Carte visible uniquement sur desktop moyen */}
      <div
        className="theologie-message"
        style={{
          maxWidth: '850px',
          margin: '2rem auto 0',
          background:
            'linear-gradient(180deg,#fff9de,#fff4cc)',
          borderRadius: '22px',
          padding: '1.75rem',
          border: '2px solid #f3c623',
          color: '#2a0c45',
          fontWeight: 600,
          lineHeight: 1.8,
          boxShadow:
            '0 10px 25px rgba(42,12,69,.08)',
          display: 'none',
        }}
      >
        ✠ Découvrez les enseignements des saints,
        docteurs de l&apos;Église et grandes figures
        de la tradition catholique.
      </div>
    </div>

    {/* 4 cartes principales */}
    <div
      className="theologie-grid"
      style={{
        display: 'grid',
    }}
    >

      <div
  className="theologie-intro-card"
  style={{
    display: 'none',
    background:
      'linear-gradient(180deg,#fff9de,#fff4cc)',
    borderRadius: '22px',
    padding: '2rem',
    height: '100%',
    boxShadow:
      '0 10px 25px rgba(42,12,69,.08)',
  }}
>
 
</div>
      {[
        {
          titre: 'Saint Augustin sur la prière',
          slug: 'augustin',
          icon: '🙏',
        },
        {
          titre: 'Sainte Catherine de Sienne',
          slug: 'catherine',
          icon: '🌹',
        },
        {
          titre: 'Sainte Hildegarde et la Vie',
          slug: 'hildegarde',
          icon: '🌿',
        },
        {
          titre: "Sainte Thérèse d'Avila",
          slug: 'therese',
          icon: '⛪',
        },
         {
          titre: "Saint Thomas d'Aquin",
          slug: 'thomasdaquin',
          icon: '📖',
        },
      ].map((item) => (
        <Link
          key={item.slug}
          href={`culture/${item.slug}`}
          style={{
            textDecoration: 'none',
          }}
        >
          <div
            style={{
              background:
                'linear-gradient(180deg,#fff9de,#fff4cc)',
              borderRadius: '22px',
              padding: '2rem',
              height: '96%',
              boxShadow:
                '0 10px 25px rgba(42,12,69,.08)',
              transition: 'all .25s ease',
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                fontSize: '2rem',
                marginBottom: '1rem',
              }}
            >
              {item.icon}
            </div>

            <h3
              style={{
                color: '#2a0c45',
                fontSize: '1.25rem',
                fontWeight: 800,
                marginBottom: '.75rem',
              }}
            >
              {item.titre}
            </h3>

            <div
              style={{
                color: '#8c63b5',
                fontWeight: 600,
              }}
            >
              Découvrir →
            </div>
          </div>
        </Link>
      ))}

    
    </div>

    {/* Défense de la Foi */}
    <Link
      href="https://www.youtube.com/@france_jeunesse"
      style={{
        textDecoration: 'none',
        display: 'block',
        marginTop: '1.5rem',
      }}
    >
      <div
        style={{
          background:
            'linear-gradient(180deg,#fff9de,#fff4cc)',
          borderRadius: '22px',
          padding: '2rem',
          boxShadow:
            '0 10px 25px rgba(42,12,69,.08)',
          cursor: 'pointer',
          border: '2px solid #f3c623',
        }}
      >
        <div
          style={{
            fontSize: '2rem',
             textAlign: 'center',
            marginBottom: '1rem',
          }}
        >
          📺
        </div>

        <h3
          style={{
            color: '#2a0c45',
            fontSize: '1.4rem',
            fontWeight: 800,
             textAlign: 'center',
            marginBottom: '.75rem',
          }}
        >
          Films et Animés Chrétiens
        </h3>

        <p
          style={{
            color: '#6b4b7a',
            lineHeight: 1.7,
             textAlign: 'center',
            marginBottom: '1rem',
          }}
        >
         Chroniques de Saints, de la Bible ou de l&apos;Histoire
        </p>

       
      </div>
    </Link>
  </div>
</section>
    </main>
  )
}