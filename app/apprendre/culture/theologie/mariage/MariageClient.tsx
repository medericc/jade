'use client'

import Link from 'next/link'
import { useState } from 'react'
import Footer from '../../../../components/layout/Footer'

import styles from './mariage.module.css'
import Image from 'next/image'

const teachingsF = [
  `Le monde a été créé pour l’homme, lui-même façonné à l’image de Dieu. En tant que premier homme, Adam incarne une unité indissociable entre l'âme et le corps — le corps étant la manifestation même de la personne, à travers lequel s'expriment sa liberté et son identité. D'abord seul, en relation directe avec Dieu, Adam nomme les animaux, affirmant ainsi sa place singulière au-dessus du reste de la création. La femme est ensuite tirée de sa côte, révélant qu'elle partage exactement la même nature que l'homme (Ish / Ishshah). Le péché est venu brouiller cette vision originelle, il faut se redécouvrir pleinement à la lumière du dessein de Dieu.`,


  `L’homme et la femme ont été créés avec des corps complémentaires, configurés l’un pour l’autre. L’homme et la femme ne sont pas deux individus simplement posés l’un à côté de l’autre : ils existent l'un pour l'autre et se donnent l'un à l'autre, reflétant ainsi l’unité même de Dieu. En devenant « une seule chair », ils s'unissent dans une profonde bi-subjectivité (« Mon bien-aimé est à moi, et je suis à lui »). Dans cette alliance, aucun des deux époux n'est plus seul maître de son propre corps, qu'il s'agisse de leur union intime ou de leur vie de prière commune. La maternité est une participation au mystère de Dieu (naissance de Caïn).`,

  `Le mariage est un sacrement (signe visible qui transmet un mystère, réalité invisible) où les époux sont eux-mêmes les auteurs et les ministres (une communion d'amour entre deux personnes, reflétant l'image même de Dieu). Il rend manifeste l’amour de Dieu (don total et inconditionnel). En s'unissant, les époux deviennent cocréateurs et affirment la continuité de l'humanité face à la mort en recevant la grâce divine pour vivre selon l'Esprit et modeler sa vie sur l'amour du Christ. Il reflète l'amour éternel, fidèle et créateur de Dieu : rechercher le bien de l'autre et établir une égalité et un équilibre spirituel (Tobie appelait son épouse sa « sœur »).`,

  `Tout comme l’Église est soumise à Dieu et que le Christ (tête de l’Église) s'est livré pour elle, le mari est appelé à être le chef (la tête) de sa femme, en l'aimant comme le Christ aime son Église. La femme est, par analogie, le corps de son mari, qu'il se doit de nourrir et de protéger. L'homme doit être un guide moral, un modèle de vertu et de maîtrise de soi. Dans cette dynamique, l'autre doit toujours être considéré comme un sujet et non comme un objet. Réduire l'autre à un objet d'utilisation pour satisfaire ses propres pulsions appauvrit la richesse de la féminité et de la masculinité car recevoir l'autre constitue un accueil actif et respectueux de sa personne.`,

  `La concupiscence (le terrain où se jouent nos choix moraux) pousse à s'approprier l'autre plutôt qu'à entrer en communion avec lui. Elle est le fruit de la chute, mais elle ne définit pas l'humain car il conserve une aspiration profonde à être aimé pour ce qu'il est. La grâce de la rédemption vient guérir cette déformation de la bonté originelle. Pour cela, il s'agit de vivre selon l'Esprit, non pas en suivant un instinct aveugle, mais guidé par un cœur purifié qui désire le bien de l'autre. L'homme est le théâtre d'un combat spirituel, appelé à la sainteté, où il doit choisir de se laisser guérir par Dieu pour passer du désir de consommer à celui d'aimer.`,


  `L'humilité consiste à reconnaître sa propre faiblesse. L'homme n'est pas le maître de la vie, mais le serviteur du dessein de Dieu, respectant la vie comme un don reçu de Lui. Les époux doivent se regarder avec la paix d'un regard intérieur, sans rupture entre ce que le corps exprime à l'extérieur et ce qu'il vit à l'intérieur, avec une même forme de chasteté et de pudeur. Le désir ne s'oppose pas à la dignité de la personne et les gestes d'affection deviennent de véritables signes de communion personnelle pour exprimer l'amour de multiples manières, faisant évoluer l'amour passionnel (éros) vers un amour oblatif et désintéressé (agapè).`,

  `À l’inverse de l’herméneutique du soupçon, il convient de vivre l’herméneutique du sacrement : un appel à la vérité lancé par le Christ grâce à la rédemption. Il s'agit ainsi d’apporter sur l'autre un regard empreint de la pureté du cœur, libre de toute suspicion. On ne peut pas quitter son conjoint sous prétexte de rechercher une plus grande chasteté ou une gloire personnelle car cela l'expose au danger et se refuser l'un à l'autre ne peut se faire que d'un commun accord (consentement mutuel des deux époux), chacun ayant un droit sur le corps de l'autre dans le cadre de l'alliance conjugale.`,

  `Si un des deux époux a commis un adultère, les époux sont invités à méditer sur leur condition commune et sur leur salut ; il ne devrait pas leur être difficile de se réconcilier. Cependant, si une réconciliation s'avère impossible, la continence et l'abstinence doivent être adoptées, à moins que n'intervienne la mort physique de l'un des conjoints. Si des époux se séparent et que l'un d'eux se remarie du vivant de son conjoint, il commet un adultère. Celui ou celle qui épouse une personne divorcée commet également un adultère puisqu’il ne faut commettre un péché ni pour en éviter un autre, ni pour le justifier.`,   


]

const teachingsB = [
 ``,


  ``,

  ``,

  ``,

  ``,


  ``,

  ``,

  ``,   

]

export default function CatherinePage() {
const [langue, setLangue] =
  useState<'fr' | 'be'>('fr')

const teachings =
  langue === 'fr'
    ? teachingsF
    : teachingsB
  return (
  <main className={styles.catherinePage}>
  {/* HEADER */}
  <header className={styles.catherineHeader}>
    <div className={`container ${styles.catherineHeaderContent}`}>
      <Link
        href="/apprendre/culture"
        className={styles.backLink}
      >
        ← Retour
      </Link>

      <h1 className={styles.catherineTitle}>
       
        <span>SIGNIFICATION SPONSALE</span>
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
        zIndex: 9999,
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
        zIndex: 9999,
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
        zIndex: 9999,
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
        zIndex: 9999,
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
  
  
  
   
   
  </section>

  {/* QUOTE */}
  <section className={styles.quoteSection}>
    <div className="container">
      <div className={styles.quoteCard}>
        <div className={styles.quoteEmoji}>
          ✉️
        </div>

        <p className={styles.quoteText}>


            {langue === 'fr'  ?
          '« Jésus déplace le centre de gravité sur l\'intention (se libérer de la convoitise, la fidélité doit habiter le désir profond). »' :
           '« Yésu desplace lou céntre de grabitat sus l’entencioû (libera-s de la guigne, la fidelitat deu demoura déns lou desi pregoun). »'}
        </p>

        <span className={styles.quoteAuthor}>
          {langue === 'fr'  ?
          '  — Théologie du Corps de st JPII' : '  — Teologie dou Cos de sén JPII' }
        </span>
      </div>
    </div>
  </section>

  {/* DOCTOR */}
 

  {/* LEARNING */}
  <section className={styles.learningSection}>
    <div className="container">
      <h2 className={styles.sectionTitle}> {langue === 'fr'  ?
        'Enseignements spirituels' :   'Ensegnaméns spirituèls' }
      </h2>

      <div className={styles.learningGrid}>
       {teachings.map((text, index) => (
          <article
            key={index}
            className={`${styles.learningCard} ${
              index % 2 === 0
                ? styles.white
                : styles.purple
            }`}
          >
          <div className={styles.cardNumber}>
  {String(index + 1).padStart(2,'0')}
</div>

            <p>
              {text}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>

  {/* FINAL */}
  <section className={styles.finalSection}>
    <div className="container">
      <div className={styles.quoteCard}>
        <div className={styles.quoteEmoji}>
          🔥
        </div>

        <p className={styles.quoteText}>
         
         
      {langue === 'fr'  ?    
         
          '« Lutter pour créer un environnement favorisant l\'éducation à la chasteté, le progrès humain se mesure à la mesure de la personne (vivre dans le vérité). »' : '« Luta ta crea û embirounemén qui fabourise l’educacioû à la pudou, lou prougrès umâ que-s mesure à la mesure de la persoune (bìbe déns la bertat). »'
  }  </p>
      </div>
    </div>
  </section>

</main>
  )
}