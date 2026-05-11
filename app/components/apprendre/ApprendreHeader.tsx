import Link from 'next/link'

export default function ApprendreHeader() {
  return (
    <header className="apprendre-header">
      <div className="container header-content">
        <Link href="/" className="back-link">
          ← Retour
        </Link>

        <h1>
          <span>🗣️</span>
          <span>Aprén lo biarnés !</span>
        </h1>

        <span className="subtitle">
          Apprends le béarnais
        </span>
      </div>
    </header>
  )
}