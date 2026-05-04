'use client'

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-10 p-6">

      <h1 className="text-4xl font-bold">Théologie</h1>

      {/* BLOCS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        
        <div className="p-6 bg-white shadow-xl rounded-2xl text-center">
          <h2 className="text-xl font-semibold mb-2">Foi</h2>
          <p>Comprendre les fondements de la foi chrétienne et ses vérités essentielles.</p>
        </div>

        <div className="p-6 bg-white shadow-xl rounded-2xl text-center">
          <h2 className="text-xl font-semibold mb-2">Tradition</h2>
          <p>Explorer la transmission apostolique et l’héritage de l’Église.</p>
        </div>

        <div className="p-6 bg-white shadow-xl rounded-2xl text-center">
          <h2 className="text-xl font-semibold mb-2">Doctrine</h2>
          <p>Approfondir les enseignements et la pensée théologique.</p>
        </div>

      </div>

      {/* BOUTON */}
      <a
        href="https://appcatholique.com/heresies"
        target="_blank"
        className="mt-6 px-8 py-4 bg-black text-white rounded-2xl text-lg font-semibold hover:scale-105 transition"
      >
        Défense de la foi
      </a>

    </main>
  );
}