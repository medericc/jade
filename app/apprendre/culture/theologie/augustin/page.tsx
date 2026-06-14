'use client'
import { useState } from 'react'
import Link from 'next/link'

import Footer from '../../../../components/layout/Footer'

import styles from './augustin.module.css'

const teachings = [
  {
    titleFr: 'Le but et la connaissance de soi',
       titleBe: 'La connaissance de soi et le but de la prière',
    textFr: `Personne ne se connaît assez pour savoir ce qu'il sera demain. Tout l'effort de la prière doit converger vers un seul but : la vie éternelle. La prière est puissamment aidée par les jeûnes et surtout par les aumônes (« chercher Dieu avec ses mains »). La prière est incompatible avec l'espoir placé dans les richesses incertaines. Méprisons le faste pour embrasser la vie véritable.`,
    textBe: `Personne ne se connaît assez pour savoir ce qu'il sera demain. Tout l'effort de la prière doit converger vers un seul but : la vie éternelle. La prière est puissamment aidée par les jeûnes et surtout par les aumônes (« chercher Dieu avec ses mains »). La prière est incompatible avec l'espoir placé dans les richesses incertaines. Méprisons le faste pour embrasser la vie véritable. Celui qui ne vit que pour les plaisirs des sens est considéré mort spirituellement.`
  },

  {
    titleFr: 'La nature de la demande',
      titleBe: 'La pratique des moines et la nature de la demande',
  
    textFr: `Les moines d'Égypte privilégient des prières brèves et fréquentes pour maintenir une attention vigilante sans se lasser. La prière se réalise souvent mieux dans les larmes que dans les grands discours. Si une demande ne peut pas se rapporter au Notre Père (ex : demander des richesses par cupidité), elle est "charnelle" ou illicite. Celui qui ne vit que pour les plaisirs des sens est considéré mort spirituellement.`,
    textBe: `Les moines d'Égypte privilégient des prières brèves et fréquentes pour maintenir une attention vigilante sans se lasser. La prière se réalise souvent mieux dans les larmes que dans les grands discours. Si une demande ne peut pas se rapporter au Notre Père (ex : demander des richesses par cupidité), elle est "charnelle" ou illicite.`
  },

  {
    titleFr: 'La santé, l’amitié et la volonté de Dieu',
     titleBe: 'La santé, l’amitié et la volonté de Dieu',
  
    textFr: `La santé et l'amitié sont des biens précieux, mais passagers, utiles que s'ils nous aident à acquérir le mérite de la vie éternelle. On doit aimer Dieu pour lui-même, et s'aimer soi-même (ou son prochain) en vue de Dieu. Nous pouvons demander la fin d'une souffrance alors qu'elle nous est utile pour notre humilité ou notre patience. Dieu peut refuser une demande par bonté (Paul) ou l'accorder pour nous laisser constater l'absurdité de nos propres caprices (Israélites au désert).`,
    textBe: `La santé et l'amitié sont des biens précieux, mais passagers, utiles que s'ils nous aident à acquérir le mérite de la vie éternelle. On doit aimer Dieu pour lui-même, et s'aimer soi-même (ou son prochain) en vue de Dieu. Nous pouvons demander la fin d'une souffrance alors qu'elle nous est utile pour notre humilité ou notre patience. Dieu peut refuser une demande par bonté (Paul) ou l'accorder nous laisser constater l'absurdité de nos propres caprices (Israélites au désert).`
  },

  

  {
    titleFr: 'La prière comme désir du cœur',
      titleBe: 'La prière comme désir du cœur',
   
    textFr: `La véritable prière est un "désir continuel" nourri par la foi, l'espérance et la charité. La prière ne sert pas à informer Dieu, mais à exercer et dilater notre désir. Plus notre désir est grand, plus nous devenons capables de recevoir les dons que Dieu prépare. Les paroles ne sont là que pour nous rappeler à nous-mêmes ce que nous demandons et pour ranimer notre ferveur quand elle s'attiédit.`,
    textBe: `La véritable prière est un "désir continuel" nourri par la foi, l'espérance et la charité. La prière ne sert pas à informer Dieu, mais à exercer et dilater notre désir. Plus notre désir est grand, plus nous devenons capables de recevoir les dons que Dieu prépare. Les paroles ne sont là que pour nous rappeler à nous-mêmes ce que nous demandons et pour ranimer notre ferveur quand elle s'attiédit.`
  },
{
    titleFr: 'L’orientation des soins',
    titleBe: 'Les limites et l’orientation des soins',
  
    textFr: `Il est permis de prier pour la santé (intégrité de l'âme et du corps), l'amitié (l'affection envers les proches) et le nécessaire (nourriture et vêtement) pour maintenir un état convenable sans tomber dans l'excès ou l'orgueil. Par nécessité pour servir Dieu, ne pas laisser la concupiscence guider ces soins, rester orienté vers 1 seule fin.`,
    textBe: `Il est permis de prier pour la santé (intégrité de l'âme et du corps), l'amitié (l'affection envers les proches et même les ennemis) et le nécessaire (nourriture et vêtement) pour maintenir un état convenable sans tomber dans l'excès ou l'orgueil. Par nécessité pour servir Dieu, ne pas laisser la « concupiscence » guider ces soins, rester orienté vers 1 seule fin.`
  },
  {
    titleFr: 'Le vrai bonheur',
     titleBe: 'Le vrai bonheur et la fin de la prière',
    textFr: `L'homme heureux n'est pas celui qui fait ce qu'il veut (car on peut vouloir le mal), mais celui qui a tout ce qu'il veut, à condition de ne vouloir que ce qui convient. La prière ne cessera que lorsque nous serons dans la terre des vivants, là où l'on ne demande plus le bien, mais où on le contemple.`,
    textBe: `L'homme heureux n'est pas celui qui fait ce qu'il veut (car on peut vouloir le mal), mais celui qui a tout ce qu'il veut, à condition de ne vouloir que ce qui convient. La prière ne cessera que lorsque nous serons dans la terre des vivants, là où l'on ne demande plus le bien, mais où on le contemple.`
  }
]

export default function SaintAugustinPage() {
   const [langue, setLangue] = useState<'fr' | 'be'>('fr')

  return (
   <main className={styles.augustinPage}>

  {/* HEADER */}
  <header className={styles.augustinHeader}>
  <div
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12rem', // règle l'espace ici
     marginTop: '1rem',
    marginBottom: '1rem',
  }}
>
  <Link
    href="/apprendre/culture"
    className={styles.backLink}
  >
    ← Retour
  </Link>

  <h1 className={styles.augustinTitle}>
    <span>Saint Augustin</span>
  </h1>

  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      background: '#fff',
      border: '2px solid #f3c623',
      borderRadius: '999px',
      padding: '4px',
    }}
  >
    <button
      onClick={() => setLangue('fr')}
      style={{
        border: 'none',
        background:
          langue === 'fr'
            ? '#2a0c45'
            : 'transparent',
        color:
          langue === 'fr'
            ? '#fff'
            : '#2a0c45',
        fontWeight: 700,
        padding: '.65rem 1rem',
        borderRadius: '999px',
        cursor: 'pointer',
      }}
    >
      🇫🇷
    </button>

    <button
      onClick={() => setLangue('be')}
      style={{
        border: 'none',
        background:
          langue === 'be'
            ? '#2a0c45'
            : 'transparent',
        padding: '.65rem 1rem',
        
        borderRadius: '999px',
        cursor: 'pointer',
      }}
    >
      <img
        src="/bearn.png"
        alt="Béarn"
        style={{
          width: '24px',
          height: '24px',
          objectFit: 'contain',
        }}
      />
    </button>
  </div>
    </div>
    <div
  style={{
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '1rem',
  }}
>
 
</div>
  </header>

  {/* HERO */}
  <section className={styles.heroSection}>
    <div className="container">

      <div className={styles.heroContent}>

       <h2>
  {langue === 'fr' ? (
    <>
      Comment prier selon
      <br />
      Saint Augustin
    </>
  ) : (
    <>
      Cossí pregar segon
      <br />
      Sent Augustin
    </>
  )}
</h2>

     <p>
  {langue === 'fr'
    ? '« Se tromper était humain, mais persévérer dans l’erreur, c’est l’orgueil satanique. »'
    : '« S’enganar qu’èra uman, mes demorar dens l’error qu’ei l’orgulh satanic. »'}
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
  {langue === 'fr'
    ? 'Enseignements sur la prière'
    : 'Ensenhaments sus la pregària'}
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
  {langue === 'fr'
    ? teaching.titleFr
    : teaching.titleBe}
</h3>

<p>
  {langue === 'fr'
    ? teaching.textFr
    : teaching.textBe}
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
  {langue === 'fr'
    ? '« Tu nous as faits pour toi Seigneur, et notre cœur est sans repos tant qu’il ne repose pas en toi. »'
    : '« Senhor, que ns has hèits entà tu, e lo nòste còr n’a pas de repaus tant que non repausa en tu. »'}
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