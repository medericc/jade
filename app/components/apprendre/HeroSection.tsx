export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div>
          <h2>La lenga nosta, lo noste tresaur</h2>

          <p>
            Le béarnais, langue de Gaston Fébus et des rois de Navarre,
            est parlé depuis plus de 1000 ans dans nos vallées.
            Aujourd&apos;hui, plus de 50 000 personnes le parlent encore !
          </p>

          <div className="hero-tags">
            <span>🇫🇷 → 🏔️</span>
            <span className="highlight">
              5 leçons gratuites
            </span>
          </div>
        </div>

        <div className="quote-card">
          <div className="quote-emoji">💬</div>

          <p>
            &quot;Qui parla biarnés, parla la lenga deus reis&quot;
          </p>

          <span>Proverbe béarnais</span>
        </div>
      </div>
    </section>
  )
}