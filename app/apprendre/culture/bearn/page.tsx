'use client'

import data from '@/data/culture/bearn.json'


// un dessin de la personne dessus
// pour le json : {
//   "id": 1,
//   "title": "Fébus",
//   "date": "1390",
//   "fr": "...",
//   "bearnais": "...",
//   "tags": ["croisade"]
// }


export default function Page() {
  return (
    <main className="p-6 space-y-10">

      {data.map((block, index) => (
        <section
          key={index}
          className="grid grid-cols-2 gap-6"
        >
          <div>
            <p className="whitespace-pre-line">
              {block.fr}
            </p>
          </div>

          <div>
            <p className="whitespace-pre-line">
              {block.bearnais || "—"}
            </p>
          </div>
        </section>
      ))}

    </main>
  )
}