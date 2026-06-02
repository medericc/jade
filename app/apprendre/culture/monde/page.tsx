// app/histoire/page.tsx

import Timeline from '@/components/Timeline'

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
            transformations qui ont façonné l'histoire du Béarn
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
          <h2
            style={{
              textAlign: 'center',
              color: '#2a0c45',
              fontSize: '2rem',
              fontWeight: 800,
              marginBottom: '3rem',
            }}
          >
            Quelques repères
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit,minmax(220px,1fr))',
              gap: '1.5rem',
            }}
          >
            {[
              ['2000+', 'Ans d’histoire'],
              ['30', 'Vicomtes'],
              ['5', 'Dynasties'],
              ['100+', 'Sources'],
            ].map(([value, label]) => (
              <div
                key={label}
                style={{
                  background:
                    'linear-gradient(180deg,#fff9de,#fff4cc)',
                  padding: '2rem',
                  borderRadius: '20px',
                  textAlign: 'center',
                  boxShadow:
                    '0 10px 30px rgba(42,12,69,.08)',
                }}
              >
                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: '#2a0c45',
                  }}
                >
                  {value}
                </div>

                <div
                  style={{
                    marginTop: '.5rem',
                    color: '#6b4b7a',
                    fontWeight: 600,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}