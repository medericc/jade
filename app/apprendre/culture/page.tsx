// app/apprendre/culture/page.tsx

import Timeline from '../../components/Timeline'
import Link from 'next/link'



type Carte =
  | {
      titre: string
      slug: string
      icon: string
    }
  | {
      titre: string
      href: string
      icon: string
    }



export const metadata = {
  title: 'Culture Béarnaise - Histoire du Béarn, du Monde et Théologie',
  description:
    "Découvrez l'histoire du Béarn, du Monde et les grandes figures historiques, les saints, docteurs de l'Église et les enseignements de la tradition catholique.",
  keywords: [
    'Béarn',
    'histoire du Béarn',
    'histoire du Monde',
    'culture béarnaise',
    'théologie catholique',
    'saints catholiques',
    'saint Augustin',
    'sainte Hildegarde',
    'saint Thomas d’Aquin',
  ],
   alternates: {
    canonical: '/apprendre/culture',
  },
  openGraph: {
  title: 'Culture Béarnaise',
  description:
    "Histoire du Béarn, du Monde et grandes figures spirituelles.",
  type: 'website',
}
}
const cartes : Carte[] = [
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
  {
    titre: 'Films et Animés Chrétiens',
    href: 'https://www.youtube.com/@france_jeunesse',
    icon: '📺',
  },
]
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

          <h2
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
          </h2>
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
  
>

     
      {cartes.map((item) => {
  const href =
    'href' in item
      ? item.href
      : `culture/theologie/${item.slug}`

  return (
    <Link
      key={item.titre}
      href={href}
      target={'href' in item ? '_blank' : undefined}
      rel={'href' in item ? 'noopener noreferrer' : undefined}
      style={{
        textDecoration: 'none',
      }}
    >
      <article
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
            color: '#5b21b6',
            fontWeight: 600,
          }}
        >
          Découvrir →
        </div>
      </article>
    </Link>
  )
})}
    
    </div>

   
  </div>
</section>


<section
  style={{
    padding: '0 1rem 5rem',
  }}
>
  <div
    style={{
      maxWidth: 950,
      margin: '0 auto',
       background: '#fff',
      borderRadius: 28,
      padding: '3rem 2rem',
      boxShadow:
        '0 12px 30px rgba(42,12,69,.08)',
      textAlign: 'center',
    }}
  >
    <div
      style={{
        color: '#b8941f',
        fontWeight: 700,
        letterSpacing: '.15em',
        textTransform: 'uppercase',
        marginBottom: '1rem',
      }}
    >
      ✦ Béarn ✦
    </div>

    <h2
      style={{
        color: '#2a0c45',
        fontSize: 'clamp(2.4rem,5vw,4rem)',
        fontWeight: 800,
        margin: 0,
        marginBottom: '2rem',
      }}
    >
      L&apos;âme du Béarn
    </h2>

    <p
      style={{
        color: '#4b5563',
        fontSize: 'clamp(1.2rem,2vw,1.5rem)',
        lineHeight: 2,
        margin: 0,
        fontWeight: 500,
      }}
    >
      La hargne de Gaston IV le Croisé, la rigueur morale
      de Jeanne d&apos;Albret, la foi de Saint Gontran, la
      défense de Catherine de Navarre, la pragmaticité
      d&apos;Henri d&apos;Albret, la ténacité de Catherine de
      Bourbon et, si possible, le génie de Fébus.
    </p>
  </div>
</section>
    </main>
  )
}