'use client'

import Link from 'next/link'

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-6">
      
      <h1 className="text-3xl font-bold">Culture</h1>

      <div className="flex gap-4">
        <a href="/culture/bearn" className="px-6 py-3 bg-black text-white rounded-xl">
          Béarn
        </a>

        <a href="/culture/monde" className="px-6 py-3 bg-black text-white rounded-xl">
          Monde
        </a>
 {/* L’évangéliste Jean (qui reconnaissait l’autorité du pape Clément sur lui) retrace la Genèse et St Jean Damascène dira que Marie est la première née de la nouvelle création (“Anne portait le paradis en son sein”). Elle n’a pas besoin de l’eau du baptême car elle est l’arche (comme Noé, sauvé du péché, sur les eaux qui l’engloutisse, par la grâce de Dieu) et avec l’arche d’alliance on remporte toutes nos batailles ! */}

        <a href="/culture/theologie" className="px-6 py-3 bg-black text-white rounded-xl">
          Théologie
        </a>
      </div>

    </main>
  );
}