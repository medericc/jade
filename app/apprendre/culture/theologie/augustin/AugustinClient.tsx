'use client'
import { useState } from 'react'
import Link from 'next/link'

import Footer from '../../../../components/layout/Footer'

import styles from './augustin.module.css'
import Image from 'next/image'




const teachings = [
  {
    titleFr: 'Le but et la connaissance de soi',
       titleBe: 'Lou but e la counechence de se',
    textFr: `Personne ne se connaît assez pour savoir ce qu'il sera demain. Tout l'effort de la prière doit converger vers un seul but : la vie éternelle. La prière est puissamment aidée par les jeûnes et surtout par les aumônes (« chercher Dieu avec ses mains »). La prière est incompatible avec l'espoir placé dans les richesses incertaines. Méprisons le faste pour embrasser la vie véritable.`,
    textBe: `Arrés ne se counèche  proû ta sabe  ço qui sera doumâ . Toute la pregari deu ana de cap à la bite eternau. La pregari qu'ey aydade p'ous dousyoas e sustout p'as deyoâs (« cerca Diu dap las soûes mas »). La pregari ne ba pas dap l'espoer hicat déns las richésses. Despudìm lou luxe ta embrassa la bite beritàblẹ.`
  },

  {
    titleFr: 'La nature de la demande',
      titleBe: 'La pratique des moines et la nature de la demande',
  
    textFr: `Les moines d'Égypte privilégient des prières brèves et fréquentes pour maintenir une attention vigilante sans se lasser. La prière se réalise souvent mieux dans les larmes que dans les grands discours. Si une demande ne peut pas se rapporter au Notre Père (ex : demander des richesses par cupidité), elle est "charnelle" ou illicite. Celui qui ne vit que pour les plaisirs des sens est considéré mort spirituellement.`,
    textBe: `Les moines d'Égypte privilégient des prières brèves et fréquentes pour maintenir une attention vigilante sans se lasser. La prière se réalise souvent mieux dans les larmes que dans les grands discours. Si une demande ne peut pas se rapporter au Notre Père (ex : demander des richesses par cupidité), elle est "charnelle" ou illicite.`
  },

  {
    titleFr: 'La santé, l’amitié et la volonté de Dieu',
     titleBe: 'La santat, l\'amistat e la boulentat de Diu',
  
    textFr: `La santé et l'amitié sont des biens précieux, mais passagers, utiles que s'ils nous aident à acquérir le mérite de la vie éternelle. On doit aimer Dieu pour lui-même, et s'aimer soi-même (ou son prochain) en vue de Dieu. Nous pouvons demander la fin d'une souffrance alors qu'elle nous est utile pour notre humilité ou notre patience. Dieu peut refuser une demande par bonté (Paul) ou l'accorder pour nous laisser constater l'absurdité de nos propres caprices (Israélites au désert).`,
    textBe: `La santat e l'amistat que soun bês precious, mé qui pàssen, utìles soùnque" si-ns ayden a-d obtiénẹ lou merite de la bite eternale. Que cau ayma Diu tad eth-medich, e ayma-s se-medich (ou lou sou proche") en l'esperance de Diu. Que poudém demanda la fì d'ûe doulénci alabéts qu'ey utìle ta la nouste umilitat ou la nouste pacience. Diu pot refusat ûe demande per bountat (Pol) ou la da ta-ns decha bede la peguesse de las noustes caprìcis (Isuraelìtes au desert).`
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
    <Image
  src="/fra.webp"
alt="Drapeau de la France"
  width={24}
  height={24}
  style={{
    objectFit: "contain",
  }}
/>
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
    <Image
  src="/bearn.png"
  alt="Drapeau du Béarn"
  width={24}
  height={24}
  style={{
    objectFit: "contain",
  }}
/>
    </button>
  </div>
    </div>
  
  </header>

  {/* HERO */}
  <section className={styles.heroSection2}>



 <div className={styles.catherineHeaderContent2}>
  <Link
    href="/apprendre/culture"
    className={styles.backLink2}
  >
    ← Retour
  </Link>

 
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
    <Image
  src="/bearn.png"
  alt="Drapeau du Béarn"
  width={24}
  height={24}
  style={{
    objectFit: "contain",
  }}
/>
    </button>
  </div>
    </div>


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
    Quin prega suban
      <br />
      Sen Augustin
    </>
  )}
</h2>

     <p>
  {langue === 'fr'
    ? '« Se tromper était humain, mais persévérer dans l’erreur, c’est l’orgueil satanique. »'
    : '« Troumpa-s qu\'ere uma , mé perserbera déns l\'errou, qu\'ey l\'ourgulh satanique. »'}
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


 {langue === 'fr' ? (
    <>
          « Le célibat ou le mariage virginal
          permet de se préparer au paradis
          où nous serons seuls. »

   </>

 ) : (   
 <>
   «  Lou celibatàri ou lou maridadye bieryinaumen permet de-s prepara tau paradis ounseram souls. »

  </>
  )}

        </p>

        <span className={styles.quoteAuthor}>
      {langue === 'fr' ? (
    <>     — Saint Augustin
   </>

 ) : (   
 <>   
  — Sen Augustin
 </>
  )}
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
    : 'Ensegnamens sus la pregari'}
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
    : '« Tu que-ns as heyts ta tu, Segnou, e lou nouste co demoùre chéns repaus tan qui ne-s repause pas dehén tu. »'}
</p>

       <span className={styles.quoteAuthor}>
      {langue === 'fr' ? (
    <>     — Saint Augustin
   </>

 ) : (   
 <>   
  — Sen Augustin
 </>
  )}
        </span>

      </div>

    </div>
  </section>

  <Footer />

</main>
  )
}