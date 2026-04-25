'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function LeconsPage() {

  const [section, setSection] = useState(0)

  const sections = [

    {
      title: 'Partie 0 — Principes de base',
      content: (
        <>
          <h3>1. Principes de base</h3>
          <p>En béarnais, on lit toutes les lettres, y compris les consonnes doubles et finales et les consonnes doublées s&apos;entendent nettement (ex: caddèt, arrecatta).</p>

          <h3>2. Les Consonnes spécifiques</h3>
          <p>lh : Comme le &quot;gli&quot; italien (sourélh).</p>
          <p>th : Se prononce [ty] (bèth).</p>
          <p>h : Toujours fortement aspiré (hilh).</p>
          <p>r vs rr : Le -r- est simple, le -rr- est vigoureusement roulé (pourét vs pourrét).</p>
          <p>y : [y] en début/milieu de mot (you), mais vaut &quot;ill&quot; en fin de mot (pay).</p>
          <p>ny / dy : Se prononcent avec un petit son [d] de transition (minya, bilàdye).</p>
          <p>sch : Se prononce comme un double &quot;ch&quot; (escharre).</p>
          <p>bl / gl : Entre deux voyelles, on double le son [b] ou [g] (agradàble).</p>

          <h3>3. Les Voyelles et Nasales</h3>
          <p>Le -e final : Se prononce [eu] très ouvert, sauf s&apos;il a un point (-ẹ) où il devient [é].</p>
          <p>Le o : Se prononce [ò] ouvert (bol). Devant une voyelle, il devient [w] (boéu).</p>
          <p>Le u : Se prononce [u] (lune). Mais derrière une voyelle, il forme une diphtongue [ou] (au, èu, iu...).</p>
          <p>Groupes -an, -en, -in, -un : On prononce le n (comme &quot;Anne&quot;, &quot;benne&quot;), ce n&apos;est pas nasalisé comme en français. On utilise l&apos;accent circonflexe (â, ê, î, ô, û) pour indiquer une voyelle nasale. Elles sont toujours toniques.</p>

          <h3>4. L&apos;Accent Tonique</h3>
          <p>Sur l&apos;avant-dernière syllabe (Minye) ou sur la dernière syllabe (Que minyam).</p>

          <h3>5. L&apos;Accent Écrit</h3>
          <p>é / è : On met toujours l&apos;accent.</p>
          <p>à, ì, ò, ù : On met l&apos;accent sauf dans deux cas...</p>
          <p>Tréma (ü) : Très rare (flaüte).</p>

          <h3>6. Orthographe</h3>
          <p>Alphabet : 23 lettres. Le V est réservé aux mots français récents. Le K aux noms propres ou unités.</p>
        </>
      )
    },

    {
      title: 'Partie 1 — Être, identité',
      content: (
        <>
          <p>Que souy à noùste/case</p>
          <p>Que soy en ço de Bertoumiu</p>
          <p>Qu’em espagnòus</p>
          <p>Que souy en trî de tribalha...</p>

          <h3>Négation</h3>
          <p>Ne souy pas à lou</p>
          <p>N’èt pas anglés</p>

          <h3>Pronoms</h3>
          <p>éth / éths — ére / éres</p>

          <h3>Présenter</h3>
          <p>Qu’éy beroy</p>
          <p>N’éy pas ére</p>
          <p>Que soun eths</p>
        </>
      )
    },

    {
      title: 'Partie 2 — Articles',
      content: (
        <>
          <p>lou/lous — la/las</p>
          <p>û — ûe</p>
          <p>Que soun guits</p>
          <p>dou — de la</p>
          <p>Qu’éy bén</p>
          <p>Lou Yan e la Cataline</p>
          <p>Pluriel : +s ou invariable</p>
        </>
      )
    },

    {
      title: 'Partie 3 — Possession',
      content: (
        <>
          <p>lou mê / lous mês — la mée / las mées</p>
          <p>lou toû / lous toûs — la toûe / las toûes</p>
          <p>lou soû / lous soûs — la soûe / las soûes</p>
          <p>lou noùste / lous noùstes — la noùste / las noùstes</p>
          <p>lou bòste / lous bòstes — la bòste / las bòstes</p>
          <p>lou lou / lous lous — la loue / las loues</p>

          <p><strong>Qu&apos;éy lou soû !</strong></p>
        </>
      )
    },

    {
      title: 'Partie 4 — Réfléchis',
      content: (
        <>
          <p>me (-m), te (-t), se (-s), nse, pe</p>
          <p>Que-m làbi</p>
          <p>Laba-s</p>
          <p>Portat-p</p>
          <p>Quoan me làbi</p>
        </>
      )
    },

    {
      title: 'Partie 5 — Pronoms',
      content: (
        <>
          <h3>Neutre</h3>
          <p>at, -m at, -p at</p>
          <p>Més dits-l’at !</p>
          <p>que-m-at a dit</p>

          <h3>Précis</h3>
          <p>Balhe-la-mé !</p>
          <p>Croumpe-u-té !</p>
          <p>Que las pe cau</p>

          <h3>Impératif</h3>
          <p>Gahe-lè !</p>
          <p>Dèche-lès !</p>
        </>
      )
    },

    {
      title: 'Partie 6 — Verbes',
      content: (
        <>
          <p>Que cau ha ço qui cau</p>
          <p>Ne cau pas nada</p>
          <p>Caleré</p>

          <p>Youga dou piano</p>
          <p>Ha à las cartes</p>

          <p>Que bouleri</p>
          <p>Qu&apos;aymam</p>
          <p>Que bòu</p>
        </>
      )
    },

    {
      title: 'Partie 7 — Temps',
      content: (
        <>
          <p>Chic / Û din</p>
          <p>Hère</p>
          <p>Trop / Trops</p>
          <p>Prou</p>

          <p>Oun ? Quoan ? Quin ?</p>
          <p>Qu&apos;éy ço qui... ?</p>

          <p>Quin ore éy ?</p>
          <p>Qu&apos;éy sèt ores e quar</p>
          <p>Mieydie / Miéye-noeyt</p>

          <p>Qu’èm lou 17 de yulhét 2026</p>
        </>
      )
    },

    {
      title: 'Partie 8 — Localisation',
      content: (
        <>
          <p>Aciu / Aquiu / Acera</p>
          <p>Aço / Aco / Aquero / Acero</p>

          <p>Aquéste</p>
          <p>Aquéth / Aquére</p>
          <p>Acéth / Acére</p>

          <p>N’èy pas brigue coumprés</p>
          <p>soulide / de sgu / per segu</p>
          <p>nat / nade</p>
          <p>Maugrat qui</p>

          <p>Que soupam</p>
          <p>Que-s y minye plâ</p>
        </>
      )
    }

  ]

  return (
    <main style={{ maxWidth: 1000, margin: 'auto', padding: 20 }}>

      <Link href="/apprendre">← Retour</Link>

      <h1 style={{ fontSize: 32, marginBottom: 20 }}>
        Leçons
      </h1>

      {/* navigation */}
      <div style={{
        display: 'flex',
        overflowX: 'auto',
        gap: 10,
        marginBottom: 20
      }}>
        {sections.map((_, i) => (
          <button
            key={i}
            onClick={() => setSection(i)}
            style={{
              padding: '10px 15px',
              borderRadius: 10,
              border: 'none',
              background: section === i ? '#4B1E6D' : '#eee',
              color: section === i ? '#fff' : '#000',
              whiteSpace: 'nowrap'
            }}
          >
            {i}
          </button>
        ))}
      </div>

      {/* contenu */}
      <div style={{
        background: '#FFF4CC',
        padding: 25,
        borderRadius: 20,
        lineHeight: 1.7
      }}>
        <h2 style={{ marginBottom: 15 }}>
          {sections[section].title}
        </h2>

        {sections[section].content}
      </div>

    </main>
  )
}