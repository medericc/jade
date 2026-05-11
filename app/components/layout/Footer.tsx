import './footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow" />

      <div className="container footer-content">
        <div>
          <span className="footer-brand">JADE CÉLERIER</span>
          <p>
            Basket, Béarn, héritage et ambition réunis dans une même énergie.
          </p>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <span>© 2026 • Jade Célerier Fan • Dodge City</span>
          <span>Toque-y Si Gauses 🏀⚜️</span>
        </div>
      </div>
    </footer>
  )
}