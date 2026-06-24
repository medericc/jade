'use client'

import Link from 'next/link'
import { useState } from 'react'
import Footer from '../../../../components/layout/Footer'

import styles from './catherine.module.css'
import Image from 'next/image'

const teachingsF = [
  `Ne pas corriger un pécheur par peur ou polir ses phrases par confort social, c'est comme un médecin qui met un pansement sur une plaie purulente sans la nettoyer. On peut même accomplir soi-même sa pénitence car ce péché est seulement endormi en nous.`,

  `L'amour-propre est le poison du monde et produit tous les péchés. Il faut vouloir le salut des âmes et faire la volonté de Dieu, pas la sienne. Tout le bien et le mal se font par l'intermédiaire du prochain.`,

  `Les pécheurs en tentant les hommes deviennent les instruments qui éprouvent et renforcent la vertu des serviteurs de Dieu. La vertu dans la difficulté a + de valeur que dans la joie, comme un jardinier qui perd son jardin et continue de travailler la terre (il aime vraiment). Un laïc qui obéit avec un immense amour a plus de mérite qu'un religieux qui obéit par simple habitude.`,

  `On ne peut pas suivre le Christ à notre convenance il faut suivre son chemin d'humilité. Les pécheurs souffrent comme les saints mais leur souffrance est inutile. Un petit acte fait avec charité a + de poids que des souffrances subies sans amour. On souffre non pas pour soi, mais par amour pour Dieu et par douleur de voir les autres s'égarer.`,

  `Ne jamais juger la volonté des autres et ne se sentir offensé que par celui qui offense Dieu. Si Dieu te fait sentir la souffrance de cette âme, c'est pour que tu l'aides. Même une pensée égoïste nuit au prochain, tu le prives d'une prière.`,

  `Dieu veut que le riche ait besoin du pauvre et que le savant ait besoin de l'ignorant. Pour nous forcer à la charité. Si tu avais tous les talents, tu n'aurais pas besoin des autres et tu tomberais dans l'orgueil. Dieu nous utilise comme ses mains (ministres) pour distribuer ses dons. Si tu as quelque chose, c'est pour le donner à celui qui ne l'a pas.`,

  `Si tu n'utilises pas ta raison pour chercher la Vérité, tu marches à l'aveugle et tu finis par aimer le mal en croyant que c'est un bien. Si tu sors le vase (ton âme) de la fontaine (Dieu) pour donner à boire aux autres, il se vide vite. Si tu es triste car on ne te rend pas ton amour, c'est que ton amour est encore "imparfait" et centré sur toi.`,

  `Dans la vie spirituelle, celui qui n'avance pas recule. Il faut passer de la peur du châtiment à l'amour de la vertu. Personne ne peut "sortir" de la main de Dieu. Soit on y demeure par la miséricorde (en l'aimant), soit on y demeure sous sa justice (en subissant les conséquences de ses actes). Si la tentation te déplaît, c'est la preuve que Dieu est en toi.`,

  `Dieu retire le sentiment de sa présence pour nous empêcher de devenir des "enfants gâtés" qui ne cherchent que les bonbons spirituels (chrétiens mercenaires) pour qu'on comprenne que le péché est un néant et qu'on retourne à lui. Comme une mère qui arrête d'allaiter son enfant pour qu'il commence à manger de la nourriture solide (la "chair" du Christ crucifié). Ne pas s'aimer soi-même à travers Dieu.`,

  `Un chrétien qui pèche est plus coupable qu'un païen car + on reçoit, + on est redevable. Le démon ne peut nous faire tomber que si nous donnons notre consentement. Dieu permet la tentation pour qu'on prouve notre amour et grandisse en connaissance de nous. Il faut vider ses attachements mondains pour que Dieu entre.`,

  `Pour ceux qui ne peuvent pas pleurer physiquement (Dieu le fait pour t'empêcher de devenir orgueilleux ou de te satisfaire de ta propre émotion), c'est le désir ardent du cœur qui compte autant que l'eau des yeux (l'œil traduit ce que le cœur ressent, un cœur plein d'amour-propre donne des larmes égoïstes). La perfection, c'est de pleurer sur les péchés du monde et la perte des âmes.`,

  `Ceux qui attaquent l'Église ne peuvent pas atteindre Dieu, mais ils perdent la "grâce", ce qui les mène à la damnation s'ils ne se repentent pas. Toucher à un prêtre (ou par mépris), c'est offenser Dieu directement. Le prêtre est un trésor dans un vase d'argile.`,

  `Dieu donne à chacun les secours dont il a besoin, c'est le bon et vrai médecin. S'il permet une épreuve c'est pour ta sanctification. La faim, la soif, la perte d'argent, les insultes, le froid permettent un but précis : le salut. La sodomie ou la masturbation sont des abominations, même les démons (par noblesse de nature angélique) en sont horrifiés.`
]

const teachingsB = [
  `Ne pas corriger un pécheur par peur ou polir ses phrases par confort social, c'est comme un médecin qui met un pansement sur une plaie purulente sans la nettoyer. On peut même accomplir soi-même sa pénitence car ce péché est seulement endormi en nous.`,

  `L'amour-propre est le poison du monde et produit tous les péchés. Il faut vouloir le salut des âmes et faire la volonté de Dieu, pas la sienne. Tout le bien et le mal se font par l'intermédiaire du prochain.`,

  `Les pécheurs en tentant les hommes deviennent les instruments qui éprouvent et renforcent la vertu des serviteurs de Dieu. La vertu dans la difficulté a + de valeur que dans la joie, comme un jardinier qui perd son jardin et continue de travailler la terre (il aime vraiment). Un laïc qui obéit avec un immense amour a plus de mérite qu'un religieux qui obéit par simple habitude.`,

  `On ne peut pas suivre le Christ à notre convenance il faut suivre son chemin d'humilité. Les pécheurs souffrent comme les saints mais leur souffrance est inutile. Un petit acte fait avec charité a + de poids que des souffrances subies sans amour. On souffre non pas pour soi, mais par amour pour Dieu et par douleur de voir les autres s'égarer.`,

  `Ne jamais juger la volonté des autres et ne se sentir offensé que par celui qui offense Dieu. Si Dieu te fait sentir la souffrance de cette âme, c'est pour que tu l'aides. Même une pensée égoïste nuit au prochain, tu le prives d'une prière.`,

  `Dieu veut que le riche ait besoin du pauvre et que le savant ait besoin de l'ignorant. Pour nous forcer à la charité. Si tu avais tous les talents, tu n'aurais pas besoin des autres et tu tomberais dans l'orgueil. Dieu nous utilise comme ses mains (ministres) pour distribuer ses dons. Si tu as quelque chose, c'est pour le donner à celui qui ne l'a pas.`,

  `Si tu n'utilises pas ta raison pour chercher la Vérité, tu marches à l'aveugle et tu finis par aimer le mal en croyant que c'est un bien. Si tu sors le vase (ton âme) de la fontaine (Dieu) pour donner à boire aux autres, il se vide vite. Si tu es triste car on ne te rend pas ton amour, c'est que ton amour est encore "imparfait" et centré sur toi.`,

  `Dans la vie spirituelle, celui qui n'avance pas recule. Il faut passer de la peur du châtiment à l'amour de la vertu. Personne ne peut "sortir" de la main de Dieu. Soit on y demeure par la miséricorde (en l'aimant), soit on y demeure sous sa justice (en subissant les conséquences de ses actes). Si la tentation te déplaît, c'est la preuve que Dieu est en toi.`,

  `Dieu retire le sentiment de sa présence pour nous empêcher de devenir des "enfants gâtés" qui ne cherchent que les bonbons spirituels (chrétiens mercenaires) pour qu'on comprenne que le péché est un néant et qu'on retourne à lui. Comme une mère qui arrête d'allaiter son enfant pour qu'il commence à manger de la nourriture solide (la "chair" du Christ crucifié). Ne pas s'aimer soi-même à travers Dieu.`,

  `Un chrétien qui pèche est plus coupable qu'un païen car + on reçoit, + on est redevable. Le démon ne peut nous faire tomber que si nous donnons notre consentement. Dieu permet la tentation pour qu'on prouve notre amour et grandisse en connaissance de nous. Il faut vider ses attachements mondains pour que Dieu entre.`,

  `Pour ceux qui ne peuvent pas pleurer physiquement (Dieu le fait pour t'empêcher de devenir orgueilleux ou de te satisfaire de ta propre émotion), c'est le désir ardent du cœur qui compte autant que l'eau des yeux (l'œil traduit ce que le cœur ressent, un cœur plein d'amour-propre donne des larmes égoïstes). La perfection, c'est de pleurer sur les péchés du monde et la perte des âmes.`,

  `Ceux qui attaquent l'Église ne peuvent pas atteindre Dieu, mais ils perdent la "grâce", ce qui les mène à la damnation s'ils ne se repentent pas. Toucher à un prêtre (ou par mépris), c'est offenser Dieu directement. Le prêtre est un trésor dans un vase d'argile.`,

  `Dieu donne à chacun les secours dont il a besoin, c'est le bon et vrai médecin. S'il permet une épreuve c'est pour ta sanctification. La faim, la soif, la perte d'argent, les insultes, le froid permettent un but précis : le salut. La sodomie ou la masturbation sont des abominations, même les démons (par noblesse de nature angélique) en sont horrifiés.`
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
       
        <span>Catherine de Sienne</span>
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
  
  
  
    <div className="container">
      <div className={styles.heroContent}>
        <h2> {langue === 'fr' ? (
    <>Une femme simple
          <br />
          qui parla aux puissants</>
            ) : (  
 <>
 Une femme simple
          <br />
          qui parla aux puissants 

</>
            )}
        </h2>

        <p>  {langue === 'fr'  ?
          'Sainte Catherine de Sienne, simple religieuse laïque dominicaine du XIVe siècle, fut le personnage politique majeur qui fit revenir le pape à Rome.' : 'Sainte Catherine de Sienne, simple religieuse laïque dominicaine du XIVe siècle, fut le personnage politique majeur qui fit revenir le pape à Rome.'}
        </p>
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
          '« Vous n’avez pas été bien ferme. Je prie pour que vous agissiez en homme viril. Ayez faim du salut de vos brebis. »' : '« Vous n’avez pas été bien ferme. Je prie pour que vous agissiez en homme viril. Ayez faim du salut de vos brebis. »'}
        </p>

        <span className={styles.quoteAuthor}>
          {langue === 'fr'  ?
          '  — Sainte Catherine au pape' : '  — Sainte Catherine au pape' }
        </span>
      </div>
    </div>
  </section>

  {/* DOCTOR */}
  <section className={styles.doctorSection}>
    <div className="container">
      <div className={styles.doctorCard}>
        <h3> {langue === 'fr'  ?
          'Docteur de l’Église' : 'Douctur de la Glèyse' }
        </h3>

        <p>  {langue === 'fr' ? (  <>
          Une femme sans instruction universitaire, n’ayant jamais étudié dans une école de théologie ni ouvert de manuel de droit canon, fut pourtant reconnue comme parfaitement conforme à l’orthodoxie après examen de ses écrits.

          <br />
          <br />

          L’Église l’a proclamée
          Docteur de l’Église,
          reconnaissant dans ses paroles
          une sagesse inspirée
          par l’Esprit Saint. </>   ) : (  
 <>      L’Église l’a proclamée
          Docteur de l’Église,
          reconnaissant dans ses paroles
          une sagesse inspirée
          par l’Esprit Saint.   </>  )}
        </p>
      </div>
    </div>
  </section>

  {/* LEARNING */}
  <section className={styles.learningSection}>
    <div className="container">
      <h2 className={styles.sectionTitle}> {langue === 'fr'  ?
        'Enseignements spirituels' :   'Enseignements spirituels' }
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
            <div className={styles.cardIcon}>
              ✝️
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
         
          '« La Vierge Marie à Sainte Bernadette (souvent malade) : Je ne vous promets pas de vous rendre heureuse dans ce monde, mais dans l’autre. »' : '« La Vierge Marie à Sainte Bernadette (souvent malade) : Je ne vous promets pas de vous rendre heureuse dans ce monde, mais dans l’autre. »'
  }  </p>
      </div>
    </div>
  </section>

  <Footer />
</main>
  )
}