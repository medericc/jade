export default function HeroBackground() {
  return (
    <>
      <div className="hero-gradient" />

      <div className="hero-mountains">
        <svg viewBox="0 0 1200 200" preserveAspectRatio="none">
          <path
            d="M0,200 L0,100 Q100,50 200,90 Q300,130 400,70 Q500,10 600,60 Q700,110 800,50 Q900,-10 1000,70 Q1100,150 1200,80 L1200,200 Z"
            fill="#1d0b2f"
          />
        </svg>
      </div>

      <div className="hero-ball" />
    </>
  )
}