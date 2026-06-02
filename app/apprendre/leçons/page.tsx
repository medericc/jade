'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function LeconsPage() {
  const [lesson, setLesson] = useState(0)

  const lessons = [
    {
      title: 'Leçon 1 — Principes de base',
      icon: '📚',
      sections: [
        {
          title: 'Principes de base',
          content: [
            "En béarnais, on lit toutes les lettres, y compris les consonnes doubles et finales.",
            "Les consonnes doublées s'entendent nettement (caddèt, arrecatta)."
          ]
        },
        {
          title: 'Consonnes spécifiques',
          content: [
            "lh : comme le « ill » français (sourélh).",
            "th : se prononce [ty] (bèth).",
            "h : toujours fortement aspiré (hilh).",
            "r vs rr : le -r- est simple, le -rr- est fortement roulé (pourét / pourrét).",
            "y : son « i » en début ou milieu de mot, mais « ill » en fin de mot (pay).",
            "ny / dy : avec un léger son [d] de transition (minya, bilàdye).",
            "sch : double son « ch » (escharre).",
            "bl / gl : entre deux voyelles, le son est renforcé (agradàble)."
          ]
        },
        {
          title: 'Voyelles et nasales',
          content: [
            "Le -e final se prononce [eu] très ouvert.",
            "Le -ẹ final se prononce [é].",
            "Le o se prononce [ò] ouvert (bol).",
            "Devant une voyelle, le o devient [w] (boéu).",
            "Le u se prononce [u].",
            "Après une voyelle il forme souvent une diphtongue (au, èu, iu...).",
            "Les groupes an, en, in, un ne sont pas nasalisés comme en français.",
            "Les voyelles nasales utilisent l'accent circonflexe : â, ê, î, ô, û."
          ]
        },
        {
          title: 'Accent tonique',
          content: [
            "L'accent tonique tombe généralement sur l'avant-dernière syllabe.",
            "Il peut aussi tomber sur la dernière syllabe selon la forme verbale."
          ]
        },
        {
          title: 'Accent écrit',
          content: [
            "é et è portent toujours un accent.",
            "à, ì, ò et ù portent généralement un accent.",
            "Le tréma (ü) est rare (flaüte)."
          ]
        },
        {
          title: 'Orthographe',
          content: [
            "Alphabet de 23 lettres.",
            "Le V est réservé aux emprunts français récents.",
            "Le K est réservé aux noms propres ou unités."
          ]
        },
        {
          title: 'Particule verbale',
          content: [
            "Le verbe conjugué est précédé de « que ».",
            "À la forme négative on utilise « ne ... pas ».",
            "Exemple : Que minyi.",
            "Exemple négatif : Ne minyi pas."
          ]
        }
      ]
    },

    {
      title: 'Leçon 2 — Être et identité',
      icon: '👤',
      sections: [
        {
          title: 'Exemples',
          content: [
            "Que souy à noùste/case.",
            "Que souy en ço de Bertoumiu.",
            "Qu’em espagnòus.",
            "Que souy en trî de tribalha ta esta lou purmè arriba à Riu di Janèyrou."
          ]
        },
        {
          title: 'Négation',
          content: [
            "Tu n’es pas de Madri.",
            "Ne souy pas à lou.",
            "E bousauts, n’èt pas anglés."
          ]
        },
        {
          title: 'Pronoms de 3e personne',
          content: [
            "éth / éths",
            "ére / éres"
          ]
        },
        {
          title: 'Présenter quelqu’un',
          content: [
            "Qu’éy beroy.",
            "N’éy pas ére.",
            "Que soun eths."
          ]
        }
      ]
    }
  ]

  const current = lessons[lesson]

  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#f8f6ff',
        padding: '20px'
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto'
        }}
      >
        <Link
          href="/apprendre"
          style={{
            color: '#6d28d9',
            textDecoration: 'none',
            fontWeight: 600
          }}
        >
          ← Retour
        </Link>

        <h1
          style={{
            fontSize: 'clamp(2rem,4vw,4rem)',
            marginTop: 20,
            marginBottom: 30
          }}
        >
          Leçons de Béarnais
        </h1>

        <div
          style={{
            background: 'white',
            padding: 20,
            borderRadius: 20,
            boxShadow: '0 10px 30px rgba(0,0,0,.08)',
            marginBottom: 25
          }}
        >
          <label
            style={{
              display: 'block',
              marginBottom: 10,
              fontWeight: 700
            }}
          >
            Choisir une leçon
          </label>

          <select
            value={lesson}
            onChange={(e) => setLesson(Number(e.target.value))}
            style={{
              width: '100%',
              padding: 14,
              borderRadius: 12,
              border: '1px solid #ddd',
              fontSize: 16
            }}
          >
            {lessons.map((l, i) => (
              <option key={i} value={i}>
                {l.title}
              </option>
            ))}
          </select>
        </div>

        <div
          style={{
            background: 'linear-gradient(135deg,#6d28d9,#9333ea)',
            color: 'white',
            padding: 25,
            borderRadius: 24,
            marginBottom: 25
          }}
        >
          <div
            style={{
              fontSize: 50,
              marginBottom: 10
            }}
          >
            {current.icon}
          </div>

          <h2
            style={{
              margin: 0,
              fontSize: 'clamp(1.5rem,3vw,2.5rem)'
            }}
          >
            {current.title}
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gap: 20
          }}
        >
          {current.sections.map((section, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                borderRadius: 20,
                padding: 22,
                boxShadow: '0 8px 25px rgba(0,0,0,.06)'
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                  color: '#6d28d9'
                }}
              >
                {section.title}
              </h3>

              {section.content.map((line, i) => (
                <p
                  key={i}
                  style={{
                    lineHeight: 1.8,
                    marginBottom: 10
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}