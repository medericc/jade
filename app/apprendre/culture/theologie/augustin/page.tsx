'use client'

import Link from 'next/link'

import Footer from '../../../../components/layout/Footer'

import styles from './augustin.module.css'

const teachings = [
  {
    title: 'La connaissance de soi et le but de la prière',
    text: `Personne ne se connaît assez pour savoir ce qu'il sera demain. Tout l'effort de la prière doit converger vers un seul but : la vie éternelle. La prière est puissamment aidée par les jeûnes et surtout par les aumônes (« chercher Dieu avec ses mains »). La prière est incompatible avec l'espoir placé dans les richesses incertaines. Méprisons le faste pour embrasser la vie véritable. Celui qui ne vit que pour les plaisirs des sens est considéré mort spirituellement.`
  },

  {
    title: 'La pratique des moines et la nature de la demande',
    text: `Les moines d'Égypte privilégient des prières brèves et fréquentes pour maintenir une attention vigilante sans se lasser. La prière se réalise souvent mieux dans les larmes que dans les grands discours. Si une demande ne peut pas se rapporter au Notre Père (ex : demander des richesses par cupidité), elle est "charnelle" ou illicite.`
  },

  {
    title: 'La santé, l’amitié et la volonté de Dieu',
    text: `La santé et l'amitié sont des biens précieux, mais passagers, utiles que s'ils nous aident à acquérir le mérite de la vie éternelle. On doit aimer Dieu pour lui-même, et s'aimer soi-même (ou son prochain) en vue de Dieu. Nous pouvons demander la fin d'une souffrance alors qu'elle nous est utile pour notre humilité ou notre patience. Dieu peut refuser une demande par bonté (Paul) ou l'accorder nous laisser constater l'absurdité de nos propres caprices (Israélites au désert).`
  },

  {
    title: 'Les limites et l’orientation des soins',
    text: `Il est permis de prier pour la santé (intégrité de l'âme et du corps), l'amitié (l'affection envers les proches et même les ennemis) et le nécessaire (nourriture et vêtement) pour maintenir un état convenable sans tomber dans l'excès ou l'orgueil. Par nécessité pour servir Dieu, ne pas laisser la « concupiscence » guider ces soins, rester orienté vers 1 seule fin.`
  },

  {
    title: 'La prière comme désir du cœur',
    text: `La véritable prière est un "désir continuel" nourri par la foi, l'espérance et la charité. La prière ne sert pas à informer Dieu, mais à exercer et dilater notre désir. Plus notre désir est grand, plus nous devenons capables de recevoir les dons que Dieu prépare. Les paroles ne sont là que pour nous rappeler à nous-mêmes ce que nous demandons et pour ranimer notre ferveur quand elle s'attiédit.`
  },

  {
    title: 'Le vrai bonheur et la fin de la prière',
    text: `L'homme heureux n'est pas celui qui fait ce qu'il veut (car on peut vouloir le mal), mais celui qui a tout ce qu'il veut, à condition de ne vouloir que ce qui convient. La prière ne cessera que lorsque nous serons dans la terre des vivants, là où l'on ne demande plus le bien, mais où on le contemple.`
  }
]

export default function SaintAugustinPage() {
  return (
   <main className={styles.augustinPage}>

  {/* HEADER */}
  <header className={styles.augustinHeader}>
    <div className={`container ${styles.augustinHeaderContent}`}>

      <Link
        href="/apprendre/culture/theologie"
        className={styles.backLink}
      >
        ← Retour
      </Link>

      <h1 className={styles.augustinTitle}>
        <span>📖</span>
        <span>Saint Augustin</span>
      </h1>

    </div>
  </header>

  {/* HERO */}
  <section className={styles.heroSection}>
    <div className="container">

      <div className={styles.heroContent}>

        <h2>
          Comment prier selon
          <br />
          Saint Augustin
        </h2>

        <p>
          « Se tromper était humain,
          mais persévérer dans l’erreur,
          c’est l’orgueil satanique. »
        </p>

      </div>

    </div>
  </section>

  {/* QUOTE */}
  <section className={styles.quoteSection}>
    <div className="container">

      <div className={styles.quoteCard}>

        <div className={styles.quoteEmoji}>
          🕊️
        </div>

        <p className={styles.quoteText}>
          « Le célibat ou le mariage virginal
          permet de se préparer au paradis
          où nous serons seuls. »
        </p>

        <span className={styles.quoteAuthor}>
          — Saint Augustin
        </span>

      </div>

    </div>
  </section>

  {/* LEARNING */}
  <section className={styles.learningSection}>
    <div className="container">

      <h2 className={styles.sectionTitle}>
        Enseignements sur la prière
      </h2>

      <div className={styles.learningGrid}>

        {teachings.map((teaching, index) => (

          <article
            key={index}
            className={`
              ${styles.learningCard}
              ${index % 2 === 0
                ? styles.white
                : styles.purple}
            `}
          >

            <div className={styles.cardIcon}>
              ✝️
            </div>

            <h3>
              {teaching.title}
            </h3>

            <p>
              {teaching.text}
            </p>

          </article>

        ))}

      </div>

    </div>
  </section>

  {/* FINAL QUOTE */}
  <section className={styles.finalQuoteSection}>
    <div className="container">

      <div className={styles.quoteCard}>

        <div className={styles.quoteEmoji}>
          🔥
        </div>

        <p className={styles.quoteText}>
          « Tu nous as faits pour toi Seigneur,
          et notre cœur est sans repos
          tant qu’il ne repose pas en toi. »
        </p>

        <span className={styles.quoteAuthor}>
          — Saint Augustin
        </span>

      </div>

    </div>
  </section>

  <Footer />

</main>
  )
}