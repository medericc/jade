'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import data from '@/data/dictionnaire_bearnais.json'
import { Nunito } from 'next/font/google'
import { Search } from 'lucide-react'
const nunito = Nunito({
  subsets: ['latin'],
})
const ITEMS_PER_PAGE = 20

export default function DictionnairePage() {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)

  // NORMALIZE
  function normalize(str: string) {
    return str
      ?.normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim()
  }


  // SEARCH + SCORE
  const results = useMemo(() => {
    const q = normalize(query)

    // PAS DE RECHERCHE
    if (!q) {
      return [...data].sort((a, b) =>
        a.titre.localeCompare(b.titre)
      )
    }

    const scored = data
      .map((item) => {
        const titre = normalize(item.titre || '')
        const definition = normalize(item.definition || '')
        const type = normalize(item.type || '')
        const search = normalize(item.search || '')

        let score = 0

        // EXACT TITRE
        if (titre === q) score += 1000

        // TITRE COMMENCE PAR
        if (titre.startsWith(q)) score += 500

        // TITRE CONTIENT
        if (titre.includes(q)) score += 200

        // DEFINITION EXACTE
        if (definition === q) score += 150

        // DEFINITION COMMENCE PAR
        if (definition.startsWith(q)) score += 120

        // DEFINITION CONTIENT
        if (definition.includes(q)) score += 80

        // SEARCH
        if (search.includes(q)) score += 50

        // TYPE
        if (type.includes(q)) score += 10

        return {
          ...item,
          score,
        }
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)

    return scored
  }, [query])

  // PAGINATION
  const totalPages = Math.ceil(
    results.length / ITEMS_PER_PAGE
  )

  const paginatedResults = results.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  )

  return (
    <>
      <style jsx global>{`
        :root {
      --violet-profond: #2a0c45;
--violet-clair: #8c63b5;

--fond-page: #f3eef8;
--fond-recherche: #ede4f7;

--jaune-pastel: #fff4cc;
--jaune-vif: #f3c623;

--texte-principal: #2d0a45;
--texte-secondaire: #6b4b7a;

          --violet-clair: #9b6bb7;
        
          --jaune-vif: #ffd700;
          --jaune-pastel: #fff4cc;
         
          --texte-principal: #2d0a45;
          --texte-secondaire: #6b4b7a;

          --fs-sm: 1rem;
          --fs-base: 1.1rem;
          --fs-md: 1.5rem;
        }

        body {
          background: var(--blanc);
          color: var(--texte-principal);
          font-family: system-ui;
          margin: 0;
        }

        .container {
          max-width: 1100px;
          margin: auto;
          padding: 1.2rem;
        }

        input {
          width: 100%;
          padding: 1rem;
          border-radius: 14px;
          border: 2px solid var(--violet-clair);
          font-size: var(--fs-base);
          outline: none;
          box-sizing: border-box;
        }

        input:focus {
          border-color: var(--violet-profond);
        }

      .card {
      position: relative;
overflow: hidden;
  background: linear-gradient(
    145deg,
    #fff9de,
    #fff4cc
  );

  padding: 1.3rem;

  border-radius: 18px;

  margin-bottom: 1rem;

  border: 1px solid rgba(75,30,109,.08);

  box-shadow:
    0 4px 10px rgba(0,0,0,.03),
    0 10px 25px rgba(75,30,109,.06);

  transition: all .25s ease;
}

      .card:hover {
  transform: translateY(-4px);

  box-shadow:
    0 15px 35px rgba(75,30,109,.12);
}
.card::after {
  content: '';

  position: absolute;

  top: 0;
  right: 0;

  width: 120px;
  height: 120px;

  border-radius: 50%;

  background:
    radial-gradient(
      rgba(255,215,0,.20),
      transparent
    );

  transform:
    translate(40px,-40px);
}
        .titre {
          font-size: var(--fs-md);
          font-weight: bold;
          color: var(--violet-profond);
          margin-bottom: 0.4rem;
        }

    .type {
          font-size: var(--fs-sm);
          color: var(--texte-secondaire);
          margin-bottom: 0.8rem;
          font-style: italic;
        }

        .definition {
          font-size: var(--fs-base);
          line-height: 1.5;
        }

        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }

        button {
          background: var(--violet-profond);
          color: white;
          border: none;
          padding: 0.8rem 1rem;
          border-radius: 12px;
          cursor: pointer;
          font-size: 1rem;
        }

        button:hover {
          opacity: 0.9;
        }

        button:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

     .count {
  font-size: 1rem;

  font-weight: 600;

  color: var(--violet-profond);

  margin-bottom: 1.5rem;
}
      `}</style>

      <main>
        {/* HEADER */}
    <header
  style={{
    background: '#2a0c45',
    padding: '1.25rem 0 2rem'
  }}
>
  <div
    className="container"
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '2rem'
    }}
  >
    <Link href="/apprendre">
      <button
        style={{
          background: 'rgba(255,255,255,.08)',
          color: '#f3c623',
          border: '1px solid rgba(255,255,255,.15)',
          padding: '.6rem 1rem',
          borderRadius: '12px',
          fontWeight: 700
        }}
      >
        ← Retour
      </button>
    </Link>

    <h1
      style={{
        color: 'white',
        margin: 0,
        fontSize: '2.2rem',
        fontWeight: 800,
        textAlign: 'center'
      }}
    >
      📖 Dicciounàri Biarnés
    </h1>
  </div>
</header>
<main className={nunito.className}>
        {/* SEARCH */}
       <section
  style={{
    background: '#ede4f7',
    padding: '3rem 0',
  }}
>
  <div className="container">
    <div
      style={{
        position: 'relative',
        maxWidth: '850px',
        margin: '0 auto',
      }}
    >
      <Search
        size={20}
        style={{
          position: 'absolute',
          left: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#9b6bb7',
          pointerEvents: 'none',
        }}
      />

      <input
        type="text"
        placeholder="Tape un mot... ex: abitua"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
          setPage(1)
        }}
        style={{
          paddingLeft: '48px',
        }}
      />
    </div>
  </div>
</section>

        {/* RESULTS */}
      <section
  style={{
    padding:'2rem 0',
    background:'#f3eef8',
    minHeight:'100vh'
  }}
>
          <div className="container">
            <div className="count">
              {results.length} résultat(s)
            </div>

            {paginatedResults.length === 0 && (
              <p>Aucun résultat trouvé.</p>
            )}

            {paginatedResults.map((item) => (
              <div key={item.id} className="card">
                <div className="titre">
                  {item.titre}
                </div>

                <div className="type">
                  {item.type}
                </div>

                <div className="definition">
                  {item.definition}
                </div>
              </div>
            ))}

            {/* PAGINATION */}

            {totalPages > 1 && (
              <div className="pagination">
                <button
                  onClick={() =>
                    setPage((p) => Math.max(1, p - 1))
                  }
                  disabled={page === 1}
                >
                  ← Précédent
                </button>

                <span>
                  Page {page} / {totalPages}
                </span>

                <button
                  onClick={() =>
                    setPage((p) =>
                      Math.min(totalPages, p + 1)
                    )
                  }
                  disabled={page === totalPages}
                >
                  Suivant →
                </button>
              </div>
            )}
          </div>
        </section>
</main>
        {/* FOOTER */}
        <footer
          style={{
            background: 'var(--violet-profond)',
            color: 'white',
            textAlign: 'center',
            padding: '1rem',
          }}
        >
          © 2026 • Dicciounàri Biarnés
        </footer>
      </main>
    </>
  )
}