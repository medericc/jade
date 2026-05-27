'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import data from '@/data/dictionnaire_bearnais.json'

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
          --violet-profond: #4b1e6d;
          --violet-clair: #9b6bb7;
          --violet-tres-clair: #e9ddf2;
          --jaune-vif: #ffd700;
          --jaune-pastel: #fff4cc;
          --blanc: #fdfbf7;
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
          background: var(--jaune-pastel);
          padding: 1.2rem;
          border-radius: 18px;
          margin-bottom: 1rem;
          transition: 0.2s;
          border: 2px solid transparent;
        }

        .card:hover {
          transform: translateY(-3px);
          border-color: var(--violet-clair);
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
          margin-bottom: 1.5rem;
          color: var(--texte-secondaire);
        }
      `}</style>

      <main>
        {/* HEADER */}
        <header
          style={{
            background: 'var(--violet-profond)',
            padding: '1rem',
          }}
        >
          <div
            className="container"
            style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
            }}
          >
            <Link href="/apprendre">
              <span
                style={{
                  color: 'var(--jaune-vif)',
                  cursor: 'pointer',
                }}
              >
                ← Retour
              </span>
            </Link>

            <h1 style={{ color: 'white', margin: 0 }}>
              📖 Dictionari
            </h1>
          </div>
        </header>

        {/* SEARCH */}
        <section
          style={{
            background: 'var(--violet-tres-clair)',
            padding: '2rem 0',
          }}
        >
          <div className="container">
            <input
              type="text"
              placeholder="Tape un mot... ex: abitua"
              value={query}
            onChange={(e) => {
  setQuery(e.target.value)
  setPage(1)
}}
            />
          </div>
        </section>

        {/* RESULTS */}
        <section style={{ padding: '2rem 0' }}>
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

        {/* FOOTER */}
        <footer
          style={{
            background: 'var(--violet-profond)',
            color: 'white',
            textAlign: 'center',
            padding: '1rem',
          }}
        >
          © 2026 • Dictionari Biarnés
        </footer>
      </main>
    </>
  )
}