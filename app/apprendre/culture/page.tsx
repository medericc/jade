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

        <a href="/culture/theologie" className="px-6 py-3 bg-black text-white rounded-xl">
          Théologie
        </a>
      </div>

    </main>
  );
}