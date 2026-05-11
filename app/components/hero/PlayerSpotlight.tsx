import Image from 'next/image'

export default function PlayerSpotlight() {
  return (
    <div className="player-wrapper fade-up">
      <div className="player-image-wrapper">
        <Image
          src="/jadece.png"
          alt="Jade Celerier"
          fill
          priority
          className="player-image"
        />

        <div className="player-overlay" />
      </div>

      <h1>JADE CELERIER</h1>

      <p>#04 • Meneuse • Dodge City</p>
    </div>
  )
}