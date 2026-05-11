"use client"

import { motion } from "framer-motion"

const demeures = [
  {
    number: "01",
    title: "Première demeure",
    subtitle: "Connaissance de soi & humilité",
    content:
      "Fausse perfection : pénitence excessive (ruine santé), zèle indiscret (s'occuper des fautes des autres détruit notre paix et amour anvers le prochain). Le démon utilise souvent le zèle pour la règle ou l'inquiétude face aux péchés des autres pour troubler l'âme. Elle met en garde contre le fait de s'entretenir de ces sujets entre soi, car cela introduit l'habitude de la médisance. Sans humilité (se voir tel qu'on est face à la grandeur de Dieu), on ne peut pas avancer. L'âme doit agir comme l'abeille dans sa ruche : elle fait son miel (la connaissance de Dieu) mais sort aussi de la ruche pour butiner (la connaissance de sa propre misère).",
  },
  {
    number: "02",
    title: "Deuxième demeure",
    subtitle: "Persévérance & combat intérieur",
    content:
      "Pour contrer les difficultés, Dieu utilise des intermédiaires (paroles de gens de bien, sermons, lectures de bons livres, des épreuves comme la maladie ou la douleur). Il faut persévérer, Dieu sait attendre des années s'il voit un désir sincère. Le démon présente les plaisirs terrestres comme éternels. Il rappelle l'estime sociale et l'affection des proches que l'âme pourrait perdre. Il fait craindre pour la santé à cause des pénitences. Il faut utiliser la Raison (les biens du monde ne sont que « pur néant » face au bonheur espéré), la foi (seul ce bonheur divin rassasie), la mémoire (se rappeler la fin inévitable de toute chose terrestre), la volonté (attiré par cet Dieu qui nous quitte jamais) et l'entendement (hors du château ni sécurité et paix). Il faut fréquenter de bonnes personnes. Le but ultime de ce chemin n'est pas d'obtenir des faveurs extraordinaires, mais de conformer sa volonté à celle de Dieu ! Il ne faut pas vouloir que Dieu fasse notre volonté et nous conduise par le chemin qui nous plaît. Dieu peut faire tourner une chute à l'avantage de l'âme pour la rendre plus vigilante. L'oraison est la seule porte pour entrer dans le château. Vouloir entrer au ciel sans entrer en soi-même pour se connaître et voir sa propre misère est une folie.",
  },
  {
    number: "03",
    title: "Troisième demeure",
    subtitle: "Vertu stable mais encore imparfaite",
    content:
      "L’âme peut manquer d'humilité, elle croit mériter plus par leurs actions mais il faut se regarder comme des serviteurs inutiles. L'âme véritablement humble trouve plus de paix dans la soumission et la vigueur des sécheresses que d'autres dans les délices spirituels. Dieu retire parfois ses faveurs pour que l'âme sente sa propre misère et apprenne à se connaître réellement. Cette épreuve est une miséricorde car elle apporte l'humilité. Par exemple, une personne riche qui perd une partie de son bien (tout en en gardant assez) et qui s'en inquiète prouve qu'elle n'est pas prête à tout quitter pour le Seigneur.  Vouloir augmenter sa fortune, même avec de bonnes intentions, empêche d'atteindre les demeures plus proches du grand Roi (aider les pauvres). Si une légère atteinte à l'honneur provoque une inquiétude que l'on ne peut maîtriser, c'est le signe que l'on n'est pas encore totalement maître de ses passions. On avance dans ce chemin par une humilité profonde plutôt que par les austérités du corps, qui sont secondaires. ",
  },
  {
    number: "04",
    title: "Quatrième demeure",
    subtitle: "Le commencement de l’oraison profonde",
    content:
      "Des dérangements obligent l'âme à lutter et donc à mériter davantage. Nos œuvres, avec l'aide de la grâce, commencent en nous et finissent en Dieu. Ce sont des dons de Dieu, et il faut rester humble, ne pas se croire meilleur.  L'essentiel n'est pas de penser beaucoup, mais de penser à aimer beaucoup. Aimer n'est pas avoir de grandes émotions ou des consolations. C'est être résolu à contenter Dieu en tout, faire des efforts pour ne pas l'offenser et désirer sa gloire. L’imagination peut divaguer mais il faut poursuivre sa méditation avec la volonté et l'entendement, sans prêter attention aux pensées parasites. Ne combats pas tes distractions de front, cela les nourrit. Laisse l'imagination errer comme une bête venimeuse aux abords du château sans te troubler.  On croit être perdu parce qu'on a des pensées instables, alors que l'âme est peut-être très proche de Dieu (souffrance vient de l'ignorance). Il faut donner ses souffrances à Jésus Christ. Tout en sachant que ses faveurs ne peuvent pas être acquises par l'effort. Mais il ne faut pas chercher à obtenir ces états par la force ! Il faut aimer Dieu pour Lui-même, pas pour l'intérêt des plaisirs qu'il donne. Penser que nos misérables services peuvent acheter une telle grâce est un manque d'humilité. La vraie préparation consiste à désirer souffrir pour Lui plutôt que de chercher des consolations. Dieu n'est pas obligé de nous donner ces grâces ici-bas pour nous sauver ; Il donne ce qui convient à chacun. Comme l'eau vient de la source et non d'aqueducs, se fatiguer par des méditations ou des larmes pour l'obtenir est vain. Dieu la donne quand on y pense le moins. La clé pour recevoir ces faveurs est d'être humble et détachée de tout, mais dans la vérité. Mais, si Dieu ne l'a pas encore fait, il ne faut pas essayer d'arrêter de penser par soi-même. Cela cause plus de dommage que de bien (sécheresse, agitation de l'imagination). L'effort pour ne pas penser fait souvent penser davantage. On peut aussi méditer en se représentant Dieu en nous (ce qui est excellent), mais c'est une action humaine aidée par la grâce. Se tenir devant Dieu comme un pauvre, humblement. Si Dieu ravit l'âme, qu'elle se laisse faire. Sinon, elle reste simplement unie par la volonté, sans faire de bruit intérieur.  L'âme est comme un petit enfant au sein de sa mère. Si elle s'éloigne de Dieu (la source), elle périra. Il faut absolument éviter les occasions de péché, car le démon cible particulièrement ces âmes pour faire chuter les autres par leur exemple. Quand l'ivresse vient de Dieu, l'âme reste forte et l'état dure peu de temps. Si l'état cause une ruine des forces physiques, il faut arrêter l'oraison prolongée (surtout pour le sexe faible, les femmes).",
  },
  {
    number: "05",
    title: "Cinquième demeure",
    subtitle: "Union intérieure & amour du prochain",
    content:
      "Il faut trouver le trésor caché qui se trouve au-dedans de nous-mêmes. Tout ce qu'il voyait sur terre lui déplaît désormais. La paix profonde que l'âme y trouve naît justement de l'acceptation de porter sa croix. L'âme souffre intensément de voir Dieu offensé et de voir des âmes se perdre. Ste Thérèse compare la douleur de l'âme à celle de Jésus voyant la multitude des péchés commis contre son Père. Malgré la violence de ces tourments, l'âme ressent un plaisir ineffable à souffrir pour faire la volonté de Dieu. Elle considère ses propres maux comme rien en comparaison de son désir de sauver des âmes. (l'amour plus fort que la mort). L'âme ne doit pas rester passive ; elle doit travailler sans cesse à la connaissance d'elle-même et à l'observation des préceptes divins.  Puisque nous ne pouvons pas mesurer avec certitude notre amour pour Dieu, notre conduite envers le prochain sert de miroir !  Une personne qui se croit sainte en prière mais qui ne peut supporter la moindre petite humiliation ou critique montre que sa volonté n'est pas déterminée, mais simplement séduite par l'imagination. C’est l'oubli de soi, faire la volonté des autres plutôt que la sienne, même au prix de ses propres droits ou au prix de la fatigue. L’âme ne trouve de repos ni dans les plaisirs terrestres, ni même dans les goûts spirituels simples ; son vol est plus élevé.cherche continuellement à faire du bien aux autres et à elle-même. Dieu peut permettre des épreuves pour tester l'âme. Ne jamais mettre sa confiance en soi-même, ce serait une folie. Il faut demander sans cesse à Dieu de nous soutenir par la main. Vérifier si l'on avance ou si l'on recule, notamment dans l'amour des uns pour les autres. Une âme qui a reçu de telles faveurs ne peut pas rester inactive, oisive ou endormie ; elle doit faire de nouveaux efforts pour avancer.",
  },
  {
    number: "06",
    title: "Sixième demeure",
    subtitle: "Purifications & souffrances",
    content:
      "Il y a des périodes où l’âme a l'impression d'avoir perdu le souvenir de Dieu. L’entendement est obscurci, l’imagination devient maîtresse et la solitude, autrefois aimée, devient pénible. Le seul remède est d’espérer en la miséricorde divine et de s'occuper à des œuvres extérieures de charité. L'âme sera critiquée par des personnes disant qu'elle veut passer pour sainte. Le plus douloureux est de voir ses propres amis s'éloigner avec des propos mordants.  Recevoir des louanges est parfois pire que d'être blâmé. L’âme souffre de s’entendre louer car elle sait que tout le bien vient de Dieu. Elle doit apprendre à se concentrer uniquement sur la gloire de son Maître. Il ne faut absolument rien faire d'important sans l'avis d'un confesseur savant et vertueux. S'écarter de cet avis pour suivre son propre sentiment est un péril. La vraie sainteté réside dans la vertu et l'humilité, non dans les visions.  Le démon, lui, laisse l'âme dans le trouble, l'inquiétude et flatte l'estime de soi. L'imagination produit des choses confuses, froides et sans effets durables. Il ne faut jamais s'éloigner de la Sainte Humanité de Jésus. Vouloir la contemplation pure en oubliant le Christ est une fausse ivresse. Même si l'on ne peut plus raisonner, il faut garder le souvenir de sa Passion (comme sa sueur de sang au jardin). S'en éloigner, c'est affaiblir ses propres vertus. Plus l'âme connaît la grandeur de Dieu, plus elle souffre d'en être séparée.  Le monde n'intéresse plus l'âme mais elle n'a pas encore accès au ciel. C'est un prix inestimable accepté avec bonheur car il purifie l'âme comme un phénix dans les flammes. L’humilité, c’est marcher selon la vérité. La vérité est que nous sommes misère et néant. Dieu aime l'humilité parce qu'il aime la vérité. Il ne faut jamais demander à être conduit par la voie des visions, car cela manquerait d'humilité et ouvrirait la porte au démon par la présomption.",
  },
  {
    number: "07",
    title: "Septième demeure",
    subtitle: "Union transformante",
    content:
      " L'âme voit les trois Personnes de la Sainte Trinité comme un rayonnement de flammes. Elle comprend qu'elles sont une seule substance, puissance et sagesse. L'âme est si soumise à la volonté de Dieu que si Dieu veut qu'elle souffre, elle est contente ; s'il ne le veut pas, elle ne s'en tourmente plus.  Elle ressent un amour immense pour ses persécuteurs et serait prête à perdre ses propres grâces pour les donner à ceux qui offensent Dieu. Auparavant, l'âme désirait mourir pour être avec Dieu. Désormais, elle souhaite vivre de longues années au milieu des plus grandes souffrances pour être utile à Dieu et faire bénir son nom. Elle ne cherche plus son propre bonheur au ciel, mais veut servir le divin Crucifié. L'âme se sent petite et craint d'offenser Dieu. L'âme peut encore commettre des péchés véniels (non délibérés), même si elle est préservée des péchés mortels par un secours spécial de Dieu. Le but ultime des grâces n'est pas le plaisir personnel, mais de rendre notre vie semblable à celle du Christ.La véritable vie spirituelle consiste à porter la marque de la croix et à devenir l'esclave de Dieu, en sacrifiant sa propre liberté pour le salut du monde; Thérèse insiste. Sans humilité, l'édifice s'écroule. Il faut s'efforcer d'être la plus petite de toutes et l'esclave de ses sœurs. Le progrès spirituel ne se mesure pas à l'intensité de l'amour ressenti, mais à la pratique des vertus et au service rendu aux autres. Si l'amour n'avance pas par les œuvres, il recule. Dieu ne regarde pas la grandeur des œuvres, mais l'amour avec lequel elles sont accomplies.",
  },
]

function DemeureCard({
  number,
  title,
  subtitle,
  content,
  delay,
}: {
  number: string
  title: string
  subtitle: string
  content: string
  delay: number
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-6 md:p-10"
    >
      <span className="absolute right-4 top-2 text-7xl font-bold text-white/[0.04] md:text-9xl">
        {number}
      </span>

      <div className="relative z-10 max-w-3xl">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#c6a972]">
          {subtitle}
        </p>

        <h3 className="mb-5 text-2xl font-semibold text-[#f5efe0] md:text-4xl">
          {title}
        </h3>

        <p className="leading-8 text-[#cfc7b6] md:text-lg">
          {content}
        </p>

        <div className="mt-8 h-px w-full bg-gradient-to-r from-[#c6a972]/40 to-transparent" />
      </div>
    </motion.article>
  )
}

export default function SevenMansionsPage() {
  return (
    <main className="relative overflow-hidden bg-[#070707] text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(198,169,114,0.14),transparent_45%)]" />

      {/* HERO */}
      <section className="relative px-6 pb-24 pt-32 md:px-12 md:pb-32 md:pt-44">
        <div className="mx-auto max-w-6xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 text-xs uppercase tracking-[0.4em] text-[#c6a972]"
          >
            Sainte Thérèse d’Avila
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mx-auto max-w-5xl text-5xl font-semibold leading-tight text-[#f8f3e7] md:text-7xl xl:text-8xl"
          >
            Les 7 demeures
            <br />
            du Château intérieur
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="mx-auto mt-8 max-w-3xl text-base leading-8 text-[#bdb4a2] md:text-xl"
          >
            Une ascension intérieure vers Dieu à travers les profondeurs
            de l’âme, depuis les premières conversions jusqu’à l’union
            transformante.
          </motion.p>
        </div>
      </section>

      {/* EXPLICATION */}
      <section className="px-6 pb-24 md:px-12">
        <div className="mx-auto max-w-5xl rounded-[32px] border border-[#c6a972]/20 bg-[#111111] p-8 md:p-14">
          <div className="mb-8 h-px w-24 bg-[#c6a972]" />

          <h2 className="mb-8 text-3xl font-semibold text-[#f5efe0] md:text-5xl">
            Le Château intérieur
          </h2>

          <div className="space-y-6 text-lg leading-9 text-[#cfc7b6]">
            <p>
              Nous pouvons considérer notre âme comme un château, fait d’un seul diamant où y a beaucoup d’appartements, 
              comme dans le ciel il y a bien des demeures.
            </p>

            <p>
              L&apos;âme du juste n’est pas autre chose qu’un paradis où le Seigneur prend ses délices.
            </p>

            <p>
              Thérèse propose une ascension avec des étapes successives (l’âme pouvant circuler librement dans le château).

            </p>

          
          </div>
        </div>
      </section>

      {/* DEMEURES */}
      <section className="relative px-6 pb-32 md:px-12">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/5 lg:block" />

        <div className="mx-auto flex max-w-6xl flex-col gap-10">
          {demeures.map((demeure, index) => (
            <DemeureCard
              key={demeure.number}
              number={demeure.number}
              title={demeure.title}
              subtitle={demeure.subtitle}
              content={demeure.content}
              delay={index * 0.08}
            />
          ))}
        </div>
      </section>

      {/* FINAL WARNING */}
      <section className="px-6 pb-40 md:px-12">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[36px] border border-red-500/10 bg-gradient-to-b from-[#140f0f] to-[#090909] p-8 md:p-16">
          <div className="mb-10 inline-flex rounded-full border border-red-400/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-red-200/70">
            Mise en garde spirituelle
          </div>

          <h2 className="mb-10 text-3xl font-semibold leading-tight text-[#f8f3e7] md:text-5xl">
            Quand l’âme
            <br />
            se détourne de Dieu
          </h2>

          <div className="space-y-8 text-lg leading-9 text-[#c9bfb0]">
            <p>
          Thérèse compare l&apos;âme en état de péché mortel à une prison obscure, aveugle et muette. Un pécheur est comme lié à un poteau, mourant de faim à côté de nourriture qu&apos;il ne peut pas atteindre.
            </p>

            <p>
           Elle exhorte donc à prier pour ces âmes. Pour une âme en état de pêche mortel, Dieu est toujours au centre de l&apos;âme, mais le péché agit comme un voile noir, la lumière ne peut plus être réfléchie ni reçue.
            </p>

            <p>
      Au lieu de puiser sa sève dans une fontaine limpide, l&apos;âme se transplante dans des eaux noires et infectes (le démon). Donc aucune de ses œuvres ne porte de fruit pour le salut.

     </p>

        

            <div className="mt-14 rounded-[24px] border border-[#c6a972]/20 bg-white/[0.02] p-6 md:p-10">
              <p className="text-xl italic leading-10 text-[#f1e7d2]">
                “L’oraison est la porte du château intérieur.”
              </p>

              <div className="mt-6 h-px w-24 bg-[#c6a972]" />

              <p className="mt-6 text-sm uppercase tracking-[0.25em] text-[#c6a972]">
                Sainte Thérèse d’Avila
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}