'use client'

import Link from 'next/link'
import { useState, useMemo } from 'react'
import data from '@/data/dictionnaire_bearnais.json' // ← ton JSON ici

export default function DictionnairePage() {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    if (!query) return data

    return data.filter((item) =>
      (item.titre + ' ' + item.search + ' ' + item.definition)
        .toLowerCase()
        .includes(query.toLowerCase())
    )
  }, [query])

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
          --fs-sm: 1rem;
          --fs-base: 1.1rem;
          --fs-md: 1.4rem;
          --fs-lg: 2rem;
          --space-sm: 0.8rem;
          --space-md: 1.2rem;
          --space-lg: 2rem;
        }

        body {
          background: var(--blanc);
          color: var(--texte-principal);
          font-family: system-ui;
        }

        .container {
          max-width: 1100px;
          margin: auto;
          padding: var(--space-md);
        }

        input {
          width: 100%;
          padding: 1rem;
          border-radius: 12px;
          border: 2px solid var(--violet-clair);
          font-size: var(--fs-base);
          outline: none;
        }

        input:focus {
          border-color: var(--violet-profond);
        }

        .card {
          background: var(--jaune-pastel);
          padding: var(--space-md);
          border-radius: 15px;
          margin-bottom: var(--space-md);
          transition: 0.2s;
        }

        .card:hover {
          transform: translateY(-3px);
        }

        .titre {
          font-size: var(--fs-md);
          font-weight: bold;
          color: var(--violet-profond);
        }

        .type {
          font-size: var(--fs-sm);
          color: var(--texte-secondaire);
          margin-bottom: 0.5rem;
        }

        .definition {
          font-size: var(--fs-base);
        }
      `}</style>

      <main>
        {/* HEADER */}
        <header style={{
          background: 'var(--violet-profond)',
          padding: '1rem'
        }}>
          <div className="container" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Link href="/apprendre">
              <span style={{ color: 'var(--jaune-vif)', cursor: 'pointer' }}>
                ← Retour
              </span>
            </Link>

            <h1 style={{ color: 'white' }}>
              📖 Dictionari
            </h1>
          </div>
        </header>

        {/* SEARCH */}
        <section style={{ background: 'var(--violet-tres-clair)', padding: '2rem 0' }}>
          <div className="container">
            <input
              type="text"
              placeholder="Tape un mot... ex: am"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </section>

        {/* RESULTS */}
        <section style={{ padding: '2rem 0' }}>
          <div className="container">
            {results.length === 0 && (
              <p>Aucun résultat</p>
            )}

            {results.map((item) => (
              <div key={item.id} className="card">
                <div className="titre">{item.titre}</div>
                <div className="type">{item.type}</div>
                <div className="definition">{item.definition}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{
          background: 'var(--violet-profond)',
          color: 'white',
          textAlign: 'center',
          padding: '1rem'
        }}>
          © 2026 • Dictionari Biarnés
        </footer>
      </main>
    </>
  )
}