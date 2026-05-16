'use client'

import data from '@/data/culture/bearn.json'

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