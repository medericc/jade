'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function LeconsPage() {
  const [lesson, setLesson] = useState(0)
const [open, setOpen] = useState(false)
  const lessons = [
    {
      title: 'Leçon 1 — Principes de base',
      icon: '📚',
      sections: [
        {
          title: 'Principes de base',
          content: [
            "En béarnais, on lit toutes les lettres, y compris les consonnes doubles et finales.",
            "Les consonnes doublées s'entendent nettement (caddèt, arrecatta)."
          ]
        },
        {
          title: 'Consonnes spécifiques',
          content: [
            "lh : comme le « ill » français (sourélh).",
            "th : se prononce [ty] (bèth).",
            "h : toujours fortement aspiré (hilh).",
            "r vs rr : le -r- est simple, le -rr- est fortement roulé (pourét / pourrét).",
            "y : son « i » en début ou milieu de mot, mais « ill » en fin de mot (pay).",
            "ny / dy : avec un léger son [d] de transition (minya, bilàdye).",
            "sch : double son « ch » (escharre).",
            "bl / gl : entre deux voyelles, le son est renforcé (agradàble)."
          ]
        },
        {
          title: 'Voyelles et nasales',
          content: [
            "Le -e final se prononce [eu] très ouvert.",
            "Le -ẹ final se prononce [é].",
            "Le o se prononce [ò] ouvert (bol).",
            "Devant une voyelle, le o devient [w] (boéu).",
            "Le u se prononce [u].",
            "Après une voyelle il forme souvent une diphtongue (au, èu, iu...).",
            "Les groupes an, en, in, un ne sont pas nasalisés comme en français.",
            "Les voyelles nasales utilisent l'accent circonflexe : â, ê, î, ô, û."
          ]
        },
        {
          title: 'Accent tonique',
          content: [
            "L'accent tonique tombe généralement sur l'avant-dernière syllabe.",
            "Il peut aussi tomber sur la dernière syllabe selon la forme verbale."
          ]
        },
        {
          title: 'Accent écrit',
          content: [
              "⚠ ẹ = &quot;e&quot; doucement fermé à l'oral",
            "é et è portent toujours un accent.",
            "à, ì, ò et ù portent généralement un accent.",
            "Le tréma (ü) est rare (flaüte)."
          ]
        },
        {
          title: 'Orthographe',
          content: [
            "Alphabet de 23 lettres.",
            "Le V est réservé aux emprunts français récents.",
            "Le K est réservé aux noms propres ou unités."
          ]
        },
        {
          title: 'Particule verbale',
          content: [
            "Le verbe conjugué est précédé de « que » sauf devant des &quot;conjonctions de subordination&quot; (comme,si,quand...).",
            "À la forme négative on utilise « ne ... pas ».",
            "Exemple : Que minyi.",
            "Exemple négatif : Ne minyi pas."
          ]
        }
      ]
    },

    {
      title: 'Leçon 2 — Être et identité',
      icon: '👤',
      sections: [
        {
          title: 'Exemples',
          content: [
            "Que souy à noùste/case.  → Je suis chez moi." ,
            "Que souy en ço de Bertoumiu. → Je suis chez Barthélémy.",
            "Qu’em espagnòus. → Nous sommes espagnols.",
            "Que souy en trî de tribalha ta esta lou purmè arriba à Riu di Janèyrou. → Je suis en train de travailler pour être le premier à Rio."         ]
        },
        {
          title: 'Négation',
          content: [
            "N'es pas de Madrid. → Tu n’es pas de Madrid.",
            "Je ne suis pas chez lui → Ne souy pas à lou.",
            "Et vous, vous n'êtes pas anglais. → E bousauts, n’èt pas anglés."
          ]
        },
        {
          title: 'Pronoms de 3e personne',
          content: [
            "éth / éths",
            "ére / éres"
          ]
        },
        {
          title: 'Présenter quelqu’un',
          content: [
               "Il est grand. → Qu’éy gran.",
          
            "Ce n'est pas elle. → N’éy pas ére.",
            "Ce sont eux. → Que soun eths."
          ]
        }
      ]
    },





      {
      title: 'Leçon 3 — ',
      icon: '',
      sections: [
       {
  title: 'Articles et formes de base',
  content: [
    "lou / lous → le / les",
    "la / las → la / les",
    "û → un",
    "ûe → une",
    "Que soun guits. → Ce sont des canards.",
    "dou → du, de la",
    "Qu’éy bén. → C’est bien.",
    "Lou Yan e la Cataline. → Jean et Catherine.",
    "Le pluriel se forme généralement avec -s, mais certains mots restent invariables."
  ]
},

{
  title: 'Adjectifs possessifs',
  content: [
    "lou mê / lous mês — la mée / las mées → mon/ma/mes",
    "lou toû / lous toûs — la toûe / las toûes → ton/ta/tes",
    "lou soû / lous soûs — la soûe / las soûes → son/sa/ses",
    "lou noùste / lous noùstes — la noùste / las noùstes → notre/nos",
    "lou bòste / lous bòstes — la bòste / las bòstes → votre/vos",
    "lou lou / lous lous — la loue / las loues → leur/leurs",
    "Exemple : Segu e soulìde, qu’éy lou soû ! → Sûr et certain, c’est le sien !"
  ]
},

{
  title: 'Pronoms personnels',
  content: [
    "You → moi",
    "Tu → toi",
    "Éth / Ére → lui / elle",
    "Nosauts → nous",
    "Bousauts → vous",
    "Éths / Éres → eux / elles"
  ]
},

{
  title: 'Pronoms réfléchis',
  content: [
    "me (-m)",
    "te (-t)",
    "se (-s)",
    "nse (le n peut être muet)",
    "pe",
    "Lorsqu’il n’y a pas la particule « que », le pronom s’attache à la fin du verbe.",
    "Que-m làbi. → Je me lave.",
    "Laba-s. → Lave-toi.",
    "Portat-p. → Portez-vous.",
    "Quoan me làbi. → Quand je me lave."
  ]
},

{
  title: 'Articles contractés et prépositions',
  content: [
    "Lou / la → Lous / las",
    "des → aucune forme particulière",
    "du → dou",
    "de → de",
    "Qu'ou crey. (que + lou) → Je le crois.",
    "Toutes aquéres maysoûs que soun bastides p'ou medich murralhàyrẹ.",
    "→ Toutes ces maisons sont construites par le même maçon."
  ]
},

{
  title: 'Le pronom neutre « at »',
  content: [
    "Le pronom neutre « at » renvoie à l’idée de « ça ».",
    "Formes : at, -m at, -p at.",
    "Que-m-at a dit ! → Il me l’a dit !"
  ]
},

{
  title: 'Ordre des pronoms',
  content: [
    "Aux troisièmes personnes du singulier et du pluriel, l’ordre des pronoms est inversé par rapport au français.",
    "Més dits-l’at !",
    "Qu’ou me da.",
    "Que la pe ba balha !",
    "Amuche-u-me !"
  ]
},

{
  title: 'Pronoms compléments : exemples',
  content: [
    "Quoan lou me porte.",
    "Qu’ou me cau.",
    "Balhe-la-mé !",
    "Croumpe-u-té !",
    "Quoan lou nse porte.",
    "Que las pe cau."
  ]
},

{
  title: 'Pronoms à l’impératif',
  content: [
    "À l’impératif, lorsque le pronom « la » ou « las » est placé après le verbe (en enclise), il devient « lè » ou « lès ».",
    "Gahe-lè !",
    "Dèche-lès !"
  ]
},
      ]
    },

  {
      title: 'Leçon 4 — ',
      icon: '',
      sections: [
     {
  title: 'Expressions courantes',
  content: [
    "Que cau ha ço qui cau ! → Il faut faire ce qu’il faut faire !",
    "Ne cau pas nada ! → Il ne faut rien !",
    "Que caleré maynàdyes aciu. → Il faudrait des enfants ici.",
    "Youga dou piano. → Jouer du piano.",
    "Ha à las cartes. → Jouer aux cartes."
  ]
},

{
  title: 'Exprimer la volonté',
  content: [
    "Que bouy. → Je veux.",
    "Que bouleri. → Je voudrais.",
    "Que bouli. → Je voulais.",
    "Qu’aymam. → Nous aimons.",
    "Que bòu. → Il veut."
  ]
},

{
  title: 'Connecteurs et mots de liaison',
  content: [
    "Més → mais",
    "Oun → ou",
    "E → et",
    "Dounc → donc",
    "Toutû / Alabéts → alors",
    "Ni → ni",
    "Permou → pourtant",
    "En purmè → premièrement",
    "Tout d’abor → tout d’abord",
    "Ta coumença → pour commencer",
    "Puch → puis",
    "Ad arroun → ensuite",
    "En seguin → en suivant",
    "Ta acaba → pour terminer",
    "À la fî → à la fin",
    "Per la fî → finalement",
    "Enfî → enfin"
  ]
},

{
  title: 'Expressions de narration',
  content: [
    "Û cop de méy la rasoû qu’abè abut lou dessus dou cabourrudè ! → Une fois de plus, la raison avait eu le dessus sur l’entêtement.",
    "Darrères → la dernière fois, dernièrement."
  ]
},

{
  title: 'Le verbe « vouloir » dans une proposition',
  content: [
    "Je veux que tu m’écoutes. → Que bouy que-m escoutis.",
    "Je voudrais que tu m’écoutes. → Que bouleri que-m escoutis.",
    "Je voulais que tu m’écoutes. → Que bouli que-m escoutis."
  ]
},

{
  title: 'Le pronom « en »',
  content: [
    "Le « en » français se traduit généralement par ne / -n ou en.",
    "On en voit souvent par ici. → Qu’em bedem souben par aciu.",
    "Maintenant, on en fait de jolis. → Adare, que se-n-y hè de beroys.",
    "Ils le sont toujours restés, jusqu’à la fin. → Que-n demourèn toustém, dinco la fî.",
    "S’il ne l’est pas encore, il le deviendra. → Si ne-n éy pas encoère, que-n badera !"
  ]
},

{
  title: 'Questions avec « en »',
  content: [
    "Combien vous en reste-t-il ? → Quoan pe-n demoure / soubre ?",
    "Combien en vendez-vous ? → Quoan en benét ?",
    "Combien vous en faut-il encore ? → Quoàn pe-n cau ?",
    "Combien y en a-t-il ? → Quoàn-n y a ?",
    "J’en veux beaucoup ! → Qu’en bouy hère(s) !",
    "En veux-tu encore ? → E-n bos encoère ?"
  ]
},

{
  title: 'Prépositions : au, aux',
  content: [
    "Au → au",
    "Aus → aux",
    "À las → aux",
    "Au lieu → Au loc",
    "Arribat au soum dou touya. → Arrivé en haut de la colline.",
    "Ha à las quilhes. → Jouer aux quilles.",
    "Que-m bouleri minya ûe mouléte de céps. → Je voudrais manger une omelette aux cèpes.",
    "Que boulerém pourét dap cébes. → Nous voudrions du poulet aux oignons.",
    "Aquéth tros de broutche aus oélhs blus. → Cette espèce de sorcière aux yeux bleus."
  ]
},

{
  title: 'Expression utile',
  content: [
    "Ric-per-ric → strict, exactement conforme."
  ]
},
      ]
    },


 {
      title: 'Leçon 4 — ',
      icon: '',
      sections: [
     {
  title: 'Expressions courantes',
  content: [
    "Que cau ha ço qui cau ! → Il faut faire ce qu’il faut faire !",
    "Ne cau pas nada ! → Il ne faut rien !",
    "Que caleré maynàdyes aciu. → Il faudrait des enfants ici.",
    "Youga dou piano. → Jouer du piano.",
    "Ha à las cartes. → Jouer aux cartes."
  ]
},

{
  title: 'Exprimer la volonté',
  content: [
    "Que bouy. → Je veux.",
    "Que bouleri. → Je voudrais.",
    "Que bouli. → Je voulais.",
    "Qu’aymam. → Nous aimons.",
    "Que bòu. → Il veut."
  ]
},

{
  title: 'Connecteurs et mots de liaison',
  content: [
    "Més → mais",
    "Oun → ou",
    "E → et",
    "Dounc → donc",
    "Toutû / Alabéts → alors",
    "Ni → ni",
    "Permou → pourtant",
    "En purmè → premièrement",
    "Tout d’abor → tout d’abord",
    "Ta coumença → pour commencer",
    "Puch → puis",
    "Ad arroun → ensuite",
    "En seguin → en suivant",
    "Ta acaba → pour terminer",
    "À la fî → à la fin",
    "Per la fî → finalement",
    "Enfî → enfin"
  ]
},

{
  title: 'Expressions de narration',
  content: [
    "Û cop de méy la rasoû qu’abè abut lou dessus dou cabourrudè ! → Une fois de plus, la raison avait eu le dessus sur l’entêtement.",
    "Darrères → la dernière fois, dernièrement."
  ]
},

{
  title: 'Le verbe « vouloir » dans une proposition',
  content: [
    "Je veux que tu m’écoutes. → Que bouy que-m escoutis.",
    "Je voudrais que tu m’écoutes. → Que bouleri que-m escoutis.",
    "Je voulais que tu m’écoutes. → Que bouli que-m escoutis."
  ]
},

{
  title: 'Le pronom « en »',
  content: [
    "Le « en » français se traduit généralement par ne / -n ou en.",
    "On en voit souvent par ici. → Qu’em bedem souben par aciu.",
    "Maintenant, on en fait de jolis. → Adare, que se-n-y hè de beroys.",
    "Ils le sont toujours restés, jusqu’à la fin. → Que-n demourèn toustém, dinco la fî.",
    "S’il ne l’est pas encore, il le deviendra. → Si ne-n éy pas encoère, que-n badera !"
  ]
},

{
  title: 'Questions avec « en »',
  content: [
    "Combien vous en reste-t-il ? → Quoan pe-n demoure / soubre ?",
    "Combien en vendez-vous ? → Quoan en benét ?",
    "Combien vous en faut-il encore ? → Quoàn pe-n cau ?",
    "Combien y en a-t-il ? → Quoàn-n y a ?",
    "J’en veux beaucoup ! → Qu’en bouy hère(s) !",
    "En veux-tu encore ? → E-n bos encoère ?"
  ]
},

{
  title: 'Prépositions : au, aux',
  content: [
    "Au → au",
    "Aus → aux",
    "À las → aux",
    "Au lieu → Au loc",
    "Arribat au soum dou touya. → Arrivé en haut de la colline.",
    "Ha à las quilhes. → Jouer aux quilles.",
    "Que-m bouleri minya ûe mouléte de céps. → Je voudrais manger une omelette aux cèpes.",
    "Que boulerém pourét dap cébes. → Nous voudrions du poulet aux oignons.",
    "Aquéth tros de broutche aus oélhs blus. → Cette espèce de sorcière aux yeux bleus."
  ]
},

{
  title: 'Expression utile',
  content: [
    "Ric-per-ric → strict, exactement conforme."
  ]
},
      ]
    },


     {
      title: 'Leçon 5 — ',
      icon: '',
      sections: [
    {
  title: 'Quantités et intensité',
  content: [
    "Chic → un peu",
    "Û din → un peu, une petite quantité",
    "Hère → beaucoup",
    "Trop → trop",
    "Trops → trop nombreux",
    "Prou → assez",
    "Que mìnyi chic. → Je mange un peu.",
    "Que mìnyi û din. → Je mange un petit peu.",
    "Chic à chic. → Petit à petit.",
    "Que y a hère de brumes. → Il y a beaucoup de brouillard.",
    "Que soy trop coentat. → Je suis trop content.",
    "Que-n y a trop. → Il y en a trop.",
    "Lous camioûs que soun trops. → Les camions sont trop nombreux.",
    "Nou bén pas prou. → Cela ne suffit pas.",
    "Qu’èm prou. → Nous sommes assez nombreux."
  ]
},

{
  title: 'Questions courantes',
  content: [
    "Oun ? → Où ?",
    "Quoan ? → Quand ?",
    "Quin ? → Quel ?",
    "Que et qui se traduisent généralement par « qui ».",
    "Qu'éy ço qui prenét ? → Qui prend cela ?",
    "Que prenét ? → Qui prenez-vous ?",
    "Oun éy la clau ? → Où est la clé ?",
    "Oun soun lous noùstes amics ? → Où sont nos amis ?"
  ]
},

{
  title: 'L’heure et les dates',
  content: [
    "Quin ore éy ? → Quelle heure est-il ?",
    "Quin die éy ? → Quel jour sommes-nous ?",
    "Qu’èm lou 17 de yulhét 2026. → Nous sommes le 17 juillet 2026.",
    "A quine ore arriberan ? → À quelle heure arriveront-ils ?",
    "Qu'éy sèt ores e quar. → Il est sept heures et quart.",
    "Mieydie → midi.",
    "Miéye-noeyt → minuit."
  ]
},

{
  title: 'Expressions temporelles',
  content: [
    "Si at bos, que y bam de tire. → Si tu veux, nous y allons tout de suite.",
    "Quoan pe déu ? → Quand donc ?",
    "Qu’ous debi 30 $. → Je vous dois 30 dollars."
  ]
},

{
  title: 'Verbes impersonnels',
  content: [
    "Certains verbes sont exclusivement impersonnels.",
    "apari-u → arriver.",
    "Que l’aparéch soubén benalèyes. → Il lui arrive souvent des ennuis.",
    "baga-u → avoir le temps.",
    "Que-u bague toustém ad ére ! → Il a toujours le temps pour elle !",
    "càlẹ / calé → falloir.",
    "Estudia que cau ! → Il faut étudier !",
    "prùdẹ-u → démanger.",
    "Que-u prut de-p at dìsẹ. → Cela le démange de le dire."
  ]
},

{
  title: 'Verbes employés impersonnellement',
  content: [
    "coumbiénẹ → convenir.",
    "Que coumbieneré de-us at dìsẹ. → Il conviendrait de vous le dire.",
    "escàdẹ-s → arriver, se trouver.",
    "Oéy que-s escat que souy esbagat. → Aujourd’hui il se trouve que je suis fatigué.",
    "esta-u-se desbroumbat → oublier.",
    "Que se-m éy desbroumbat de-p at dìsẹ. → J’ai oublié de le dire.",
    "paréchẹ-s → paraître.",
    "Que-s paréch que-y ba bàdẹ céps. → Il paraît qu’il va y avoir des cèpes.",
    "pressa-u → avoir hâte.",
    "Que-u prèsse de l’ana bédẹ ad ére. → Il a hâte d’aller la voir.",
    "soubiénẹ-u → se souvenir.",
    "Que-m soubién ço qui-m digous. → Je me souviens de ce que tu m’as dit."
  ]
},


{
  title: 'Localisation et démonstratifs',
  content: [
    "Aciu → ici",
    "Aquiu → là",
    "Acera → là-bas",
    "Aço / Aco → ceci, cela",
    "Aquero → cela",
    "Acero → cela là-bas",
    "Aquéste / Aquéstes → ce, cette, ces",
    "Aquéth / Aquére → celui-ci, celle-ci",
    "Aquéths / Aquéres → ceux-ci, celles-ci",
    "Acéth / Acére → celui-là, celle-là",
    "Acéths / Acéres → ceux-là, celles-là",
    "Aquéste chin ba à hoéc de calhau dinco à lou ! → Ce chien va jouer aux cailloux jusqu’à lui !"
  ]
},

{
  title: 'Expressions utiles',
  content: [
    "N’èy pas brigue coumprés. → Je n’ai rien compris.",
    "Soulide → sûr, certain.",
    "De segu → sûrement.",
    "Per segu → certainement.",
    "Nat / Nade → aucun, aucune."
  ]
},
      ]
    },


  {
      title: 'Leçon 5 — ',
      icon: '',
      sections: [
    {
  title: 'Quantités et intensité',
  content: [
    "Chic → un peu",
    "Û din → un peu, une petite quantité",
    "Hère → beaucoup",
    "Trop → trop",
    "Trops → trop nombreux",
    "Prou → assez",
    "Que mìnyi chic. → Je mange un peu.",
    "Que mìnyi û din. → Je mange un petit peu.",
    "Chic à chic. → Petit à petit.",
    "Que y a hère de brumes. → Il y a beaucoup de brouillard.",
    "Que soy trop coentat. → Je suis trop content.",
    "Que-n y a trop. → Il y en a trop.",
    "Lous camioûs que soun trops. → Les camions sont trop nombreux.",
    "Nou bén pas prou. → Cela ne suffit pas.",
    "Qu’èm prou. → Nous sommes assez nombreux."
  ]
},

{
  title: 'Questions courantes',
  content: [
    "Oun ? → Où ?",
    "Quoan ? → Quand ?",
    "Quin ? → Quel ?",
    "Que et qui se traduisent généralement par « qui ».",
    "Qu'éy ço qui prenét ? → Qui prend cela ?",
    "Que prenét ? → Qui prenez-vous ?",
    "Oun éy la clau ? → Où est la clé ?",
    "Oun soun lous noùstes amics ? → Où sont nos amis ?"
  ]
},

{
  title: 'L’heure et les dates',
  content: [
    "Quin ore éy ? → Quelle heure est-il ?",
    "Quin die éy ? → Quel jour sommes-nous ?",
    "Qu’èm lou 17 de yulhét 2026. → Nous sommes le 17 juillet 2026.",
    "A quine ore arriberan ? → À quelle heure arriveront-ils ?",
    "Qu'éy sèt ores e quar. → Il est sept heures et quart.",
    "Mieydie → midi.",
    "Miéye-noeyt → minuit."
  ]
},

{
  title: 'Expressions temporelles',
  content: [
    "Si at bos, que y bam de tire. → Si tu veux, nous y allons tout de suite.",
    "Quoan pe déu ? → Quand donc ?",
    "Qu’ous debi 30 $. → Je vous dois 30 dollars."
  ]
},

{
  title: 'Verbes impersonnels',
  content: [
    "Certains verbes sont exclusivement impersonnels.",
    "apari-u → arriver.",
    "Que l’aparéch soubén benalèyes. → Il lui arrive souvent des ennuis.",
    "baga-u → avoir le temps.",
    "Que-u bague toustém ad ére ! → Il a toujours le temps pour elle !",
    "càlẹ / calé → falloir.",
    "Estudia que cau ! → Il faut étudier !",
    "prùdẹ-u → démanger.",
    "Que-u prut de-p at dìsẹ. → Cela le démange de le dire."
  ]
},

{
  title: 'Verbes employés impersonnellement',
  content: [
    "coumbiénẹ → convenir.",
    "Que coumbieneré de-us at dìsẹ. → Il conviendrait de vous le dire.",
    "escàdẹ-s → arriver, se trouver.",
    "Oéy que-s escat que souy esbagat. → Aujourd’hui il se trouve que je suis fatigué.",
    "esta-u-se desbroumbat → oublier.",
    "Que se-m éy desbroumbat de-p at dìsẹ. → J’ai oublié de le dire.",
    "paréchẹ-s → paraître.",
    "Que-s paréch que-y ba bàdẹ céps. → Il paraît qu’il va y avoir des cèpes.",
    "pressa-u → avoir hâte.",
    "Que-u prèsse de l’ana bédẹ ad ére. → Il a hâte d’aller la voir.",
    "soubiénẹ-u → se souvenir.",
    "Que-m soubién ço qui-m digous. → Je me souviens de ce que tu m’as dit."
  ]
},


{
  title: 'Localisation et démonstratifs',
  content: [
    "Aciu → ici",
    "Aquiu → là",
    "Acera → là-bas",
    "Aço / Aco → ceci, cela",
    "Aquero → cela",
    "Acero → cela là-bas",
    "Aquéste / Aquéstes → ce, cette, ces",
    "Aquéth / Aquére → celui-ci, celle-ci",
    "Aquéths / Aquéres → ceux-ci, celles-ci",
    "Acéth / Acére → celui-là, celle-là",
    "Acéths / Acéres → ceux-là, celles-là",
    "Aquéste chin ba à hoéc de calhau dinco à lou ! → Ce chien va jouer aux cailloux jusqu’à lui !"
  ]
},

{
  title: 'Expressions utiles',
  content: [
    "N’èy pas brigue coumprés. → Je n’ai rien compris.",
    "Soulide → sûr, certain.",
    "De segu → sûrement.",
    "Per segu → certainement.",
    "Nat / Nade → aucun, aucune."
  ]
},
      ]
    },


 {
      title: 'Leçon 6 — ',
      icon: '',
      sections: [
   {
  title: 'Concession et opposition',
  content: [
    "Maugrat qui + subjonctif → bien que.",
    "Per + infinitif → pour.",
    "Ya que + subjonctif → puisque, étant donné que.",
    "Maugrat aco, que biénẹn estalla-s à la campagne. → Malgré cela, ils viennent s’installer à la campagne.",
    "Per esta tâ rìchẹ, n’éy pas trop yenerous. → Pour être si riche, il n’est pas très généreux.",
    "Si nou-n abét pas nade, que-n bau préne. → Si vous n’en avez pas, je vais en prendre."
  ]
},

{
  title: 'Situer une action',
  content: [
    "Aciu, que soupam tout die à sèt ores e miéye. → Ici, nous soupions tous les jours à sept heures et demie.",
    "Que-s y minye plâ. → On y mange bien."
  ]
},

{
  title: 'Verbes de mouvement suivis d’un infinitif',
  content: [
    "Les verbes transitifs de mouvement comme mia(-n), embia(-n) et manda(-n) s’emploient avec la préposition « ta » devant l’infinitif.",
    "Qu'ou ne bau embia ta croumpa pâ. → Je vais l’envoyer acheter du pain."
  ]
},

{
  title: 'Verbes de perception suivis d’un infinitif',
  content: [
    "Les verbes bédẹ, enténẹ, escouta et espia s’emploient avec la préposition « à » devant l’infinitif.",
    "Qu'ous entenèn à canta. → Ils les entendaient chanter."
  ]
},

{
  title: 'Salutations et formules de politesse',
  content: [
    "Adiu ! → Bonjour, au revoir.",
    "Adichat ! → Salut !",
    "Adichat, bràbe moùnde ! → Salut, braves gens !",
    "Boû die ! → Bonjour !",
    "Boû brèspe ! → Bon après-midi !",
    "Boune serade ! → Bonne soirée !",
    "Boune noéyt ! → Bonne nuit !",
    "Boune escadénce ! → Bonne chance !",
    "Merci hère ! → Merci beaucoup !",
    "D’arré. → De rien.",
    "En te pregan. → Je t’en prie.",
    "En pe pregan. → Je vous en prie.",
    "Si-bou-plèt. → S’il vous plaît."
  ]
},

{
  title: 'Prendre des nouvelles',
  content: [
    "Quin te ba ? → Comment vas-tu ?",
    "Quin ès ? → Comment vas-tu ?",
    "Quin pe ba ? → Comment allez-vous ?",
    "Quin èt ? → Comment allez-vous ?",
    "Que ba plâ ! E aquiu ? → Ça va bien ! Et toi ?",
    "Que ba mau ! E bous ? → Ça va mal ! Et vous ?",
    "Plâ ! E tu ? → Bien ! Et toi ?",
    "Quio, que ba ! → Oui, ça va !"
  ]
},

{
  title: 'Questions courantes',
  content: [
    "Ta qué ? → Pourquoi ?",
    "Perqué ? → Pourquoi ?",
    "Quoau / Quoaus s’emploient lorsqu’on choisit dans une liste.",
    "Quin / Quins (masculin) et Quine / Quines (féminin) s’emploient pour parler d’un type ou d’une sorte.",
    "Quins filmes e bas béde ? → Quels films vas-tu voir ?",
    "Ne sèy pas quin dise-u tout aco. → Je ne sais pas qui raconte tout cela.",
    "Ne sèy pas perqué caleré ha atau. → Je ne sais pas pourquoi il faudrait faire ainsi.",
    "Que ço qui hès ? → Que fais-tu ?",
    "Que hès ? → Que fais-tu ?"
  ]
},

{
  title: 'Déplacements et actions',
  content: [
    "Ana-se-n → s’en aller.",
    "E y èt anades ? → Y êtes-vous allées ?"
  ]
},

{
  title: 'Expressions familières',
  content: [
    "Aco ray ! → Ça alors !",
    "Atau tè ! → Eh bien donc !",
    "De pìri en sourdéys. → De mal en pis.",
    "Poutines ! → Mince !",
    "Quin pèc ! → Quel idiot !",
    "Quin pègue ! → Quelle bêtise !"
  ]
},
      ]
    },

    
 {
      title: 'Leçon 7 — ',
      icon: '',
      sections: [
   {
  title: 'Concession et opposition',
  content: [
    "Maugrat qui + subjonctif → bien que.",
    "Per + infinitif → pour.",
    "Ya que + subjonctif → puisque, étant donné que.",
    "Maugrat aco, que biénẹn estalla-s à la campagne. → Malgré cela, ils viennent s’installer à la campagne.",
    "Per esta tâ rìchẹ, n’éy pas trop yenerous. → Pour être si riche, il n’est pas très généreux.",
    "Si nou-n abét pas nade, que-n bau préne. → Si vous n’en avez pas, je vais en prendre."
  ]
},

{
  title: 'Situer une action',
  content: [
    "Aciu, que soupam tout die à sèt ores e miéye. → Ici, nous soupions tous les jours à sept heures et demie.",
    "Que-s y minye plâ. → On y mange bien."
  ]
},

{
  title: 'Verbes de mouvement suivis d’un infinitif',
  content: [
    "Les verbes transitifs de mouvement comme mia(-n), embia(-n) et manda(-n) s’emploient avec la préposition « ta » devant l’infinitif.",
    "Qu'ou ne bau embia ta croumpa pâ. → Je vais l’envoyer acheter du pain."
  ]
},

{
  title: 'Verbes de perception suivis d’un infinitif',
  content: [
    "Les verbes bédẹ, enténẹ, escouta et espia s’emploient avec la préposition « à » devant l’infinitif.",
    "Qu'ous entenèn à canta. → Ils les entendaient chanter."
  ]
},

{
  title: 'Salutations et formules de politesse',
  content: [
    "Adiu ! → Bonjour, au revoir.",
    "Adichat ! → Salut !",
    "Adichat, bràbe moùnde ! → Salut, braves gens !",
    "Boû die ! → Bonjour !",
    "Boû brèspe ! → Bon après-midi !",
    "Boune serade ! → Bonne soirée !",
    "Boune noéyt ! → Bonne nuit !",
    "Boune escadénce ! → Bonne chance !",
    "Merci hère ! → Merci beaucoup !",
    "D’arré. → De rien.",
    "En te pregan. → Je t’en prie.",
    "En pe pregan. → Je vous en prie.",
    "Si-bou-plèt. → S’il vous plaît."
  ]
},

{
  title: 'Prendre des nouvelles',
  content: [
    "Quin te ba ? → Comment vas-tu ?",
    "Quin ès ? → Comment vas-tu ?",
    "Quin pe ba ? → Comment allez-vous ?",
    "Quin èt ? → Comment allez-vous ?",
    "Que ba plâ ! E aquiu ? → Ça va bien ! Et toi ?",
    "Que ba mau ! E bous ? → Ça va mal ! Et vous ?",
    "Plâ ! E tu ? → Bien ! Et toi ?",
    "Quio, que ba ! → Oui, ça va !"
  ]
},

{
  title: 'Questions courantes',
  content: [
    "Ta qué ? → Pourquoi ?",
    "Perqué ? → Pourquoi ?",
    "Quoau / Quoaus s’emploient lorsqu’on choisit dans une liste.",
    "Quin / Quins (masculin) et Quine / Quines (féminin) s’emploient pour parler d’un type ou d’une sorte.",
    "Quins filmes e bas béde ? → Quels films vas-tu voir ?",
    "Ne sèy pas quin dise-u tout aco. → Je ne sais pas qui raconte tout cela.",
    "Ne sèy pas perqué caleré ha atau. → Je ne sais pas pourquoi il faudrait faire ainsi.",
    "Que ço qui hès ? → Que fais-tu ?",
    "Que hès ? → Que fais-tu ?"
  ]
},

{
  title: 'Déplacements et actions',
  content: [
    "Ana-se-n → s’en aller.",
    "E y èt anades ? → Y êtes-vous allées ?"
  ]
},

{
  title: 'Expressions familières',
  content: [
    "Aco ray ! → Ça alors !",
    "Atau tè ! → Eh bien donc !",
    "De pìri en sourdéys. → De mal en pis.",
    "Poutines ! → Mince !",
    "Quin pèc ! → Quel idiot !",
    "Quin pègue ! → Quelle bêtise !"
  ]
},
      ]
    },

{
      title: 'Leçon 8 — ',
      icon: '',
      sections: [
  {
  title: 'Se taire et répondre',
  content: [
    "Cara-s → se taire.",
    "Caret ! → Tais-toi !",
    "Carat-pe ! → Taisez-vous !",
    "Chou ! → Chut !",
    "O ! → Oh !",
    "Quio ! → Oui !",
    "Nou ! → Non !",
    "Nani ! → Non !"
  ]
},

{
  title: 'Autres formules utiles',
  content: [
    "Plèti ? → Pardon ?",
    "Tau plasé. → Avec plaisir.",
    "Tau medich. → De même.",
    "En aban ! → En avant !",
    "Biban ! → Vive !"
  ]
},

{
  title: 'Positions et repères dans l’espace',
  content: [
    "Haut → haut.",
    "En haut → au soum, au bèc, en haut, cap-sus.",
    "Arribat au soum dou touya. → Arrivé en haut du touya.",
    "Là-haut → aquiu haut, acera cap-sus.",
    "Bas → bach.",
    "En bas → cabbath.",
    "Debath → dessous, sous."
  ]
},

{
  title: 'Distance et proximité',
  content: [
    "Près → près, au ras.",
    "Près de → au ras de, prés de.",
    "Prêt → prèst / prèste.",
    "Pré → prat.",
    "Loégn → loin.",
    "La Rosalie qu'éy partide drin loégn de la cabane, en cèrques d'aglans héns lou bosc besî.",
    "→ Rosalie est partie loin de la cabane, à la recherche de glands dans le bois voisin."
  ]
},

{
  title: 'Entre, sur et sous',
  content: [
    "Entér / Éntre → entre.",
    "Er'aygue que chourrabe dinque méy de miéye-came entér deths arrebots.",
    "→ L’eau jaillissait jusqu’à mi-jambe entre les galets.",
    "Sus → sur.",
    "Dessus → dessus, surface supérieure.",
    "En aquéres → sur ce.",
    "Aquiu dessus, lou gran ausèth.",
    "→ Là-dessus, le grand oiseau."
  ]
},

{
  title: 'Dessus, domination et influence',
  content: [
    "Mestreya → dominer (pour un garçon).",
    "Dauneya → dominer (pour une fille).",
    "Abé lou dessus → avoir le dessus.",
    "Influence → influence.",
    "Û cop de méy la rasoû qu'abè abut lou dessus dou cabourrudè, dou machantè, de las mensounyes permou dou yelousè dou moùnde.",
    "→ Une fois de plus, la raison avait eu le dessus sur l’obstination, la méchanceté et les mensonges dus à la jalousie des gens.",
    "Que m'a hèyt chiscla hangue ta dessus.",
    "→ Il m’a éclaboussé de boue."
  ]
},

{
  title: 'Approximation et comparaison',
  content: [
    "Haut ou bach → environ.",
    "À chic près → à peu près.",
    "À pus près → approximativement.",
    "De cap à → de l’ordre de.",
    "Embiroû → environ.",
    "Méy ou ménch → plus ou moins.",
    "Qu'èren méys. → Ils étaient plus que cela.",
    "En méy → en plus.",
    "En suberpés → en supplément.",
    "Tapoc → non plus."
  ]
},

{
  title: 'Gauche et droite',
  content: [
    "Gauche → gauche.",
    "Gauchét → gaucher.",
    "Dréte → droite.",
    "Lou Parlamén qu'éy à mâ dréte.",
    "→ Le Parlement est à droite.",
    "Tout drét → tout droit."
  ]
},
      ]
    },

{
      title: 'Leçon 9 — ',
      icon: '',
      sections: [
  {
  title: 'Beauté et apparence',
  content: [
    "Bèth → beau.",
    "Bère → belle.",
    "Beroy → beau, robuste, bien bâti.",
    "Beroye → belle, robuste, bien bâtie.",
    "Abé bèth → avoir beau.",
    "Ha bèth → faire beau (en parlant du temps).",
    "Petit / Petite → petit, petite.",
    "Coumû / Coumune → commun, commune.",
    "Gran / Grane → grand, grande."
  ]
},

{
  title: 'Les couleurs',
  content: [
    "Rouy → rouge.",
    "Négrẹ → noir.",
    "Blanc → blanc.",
    "Blu → bleu.",
    "Blau → bleu clair.",
    "Brun / Marroû → brun, marron.",
    "Bért / Bérde → vert, verte.",
    "Rose → rose.",
    "Briulét / Briuléte → violet.",
    "Màubẹ → mauve.",
    "Irandye → orange.",
    "Gris → gris.",
    "Yàunẹ → jaune.",
    "Mouyòu → jaune d’œuf."
  ]
},

{
  title: 'Le fond',
  content: [
    "Houns → fond."
  ]
},
{
  title: 'Les nombres',
  content: [
    "û (masculin) / ûe (féminin) → un, une.",
    "Dus → deux.",
    "Très → trois.",
    "Quoatẹ → quatre.",
    "Cinc → cinq.",
    "Chéys → six.",
    "Sèt → sept.",
    "Oéyt → huit.",
    "Nau → neuf.",
    "Dèts → dix."
  ]
},

{
  title: 'Les nombres de 11 à 20',
  content: [
    "Oùnzẹ → onze.",
    "Doùdzẹ → douze.",
    "Trédzẹ → treize.",
    "Quatoùrzẹ → quatorze.",
    "Quìnzẹ → quinze.",
    "Sédzẹ → seize.",
    "Dèts e sèt → dix-sept.",
    "Dèts e oéyt → dix-huit.",
    "Dèts e nau → dix-neuf.",
    "Bint → vingt."
  ]
},

{
  title: 'Les dizaines et les centaines',
  content: [
    "Bint e û → vingt-et-un.",
    "Trénte û → trente-et-un.",
    "Quarante û → quarante-et-un.",
    "Cinquante û → cinquante-et-un.",
    "Chichante û → soixante-et-un.",
    "Setante û → soixante-dix-et-un.",
    "Oeytante û → quatre-vingt-un.",
    "Nabante û → quatre-vingt-onze.",
    "Cén → cent.",
    "Cén û → cent un.",
    "Dus céns → deux cents.",
    "Mile → mille.",
    "Dus mile → deux mille."
  ]
},

{
  title: 'Les jours de la semaine',
  content: [
    "Quoaus soun lous sèt dies de la semmane ? → Quels sont les sept jours de la semaine ?",
    "Dilûs → lundi.",
    "Dimars → mardi.",
    "Dimèrs → mercredi.",
    "Diyaus → jeudi.",
    "Dibés → vendredi.",
    "Dissàttẹ → samedi.",
    "Diményẹ → dimanche."
  ]
},

{
  title: 'Les mois de l’année',
  content: [
    "Quoaus soun lous doùdze més de l’anade ? → Quels sont les douze mois de l’année ?",
    "Yambiè → janvier.",
    "Heurè → février.",
    "Mars → mars.",
    "Abriu → avril.",
    "May → mai.",
    "Juin → juin.",
    "Yulhét → juillet.",
    "Aoust → août.",
    "Setémẹ → septembre.",
    "Ouctoùbrẹ → octobre.",
    "Noubémbrẹ → novembre.",
    "Decémẹ → décembre."
  ]
},

{
  title: 'Différences de genre entre le français et le béarnais',
  content: [
    "Une affaire → û aha.",
    "Une horloge → û arrelòdye.",
    "Une crémaillère → û crimalh.",
    "La dette → lou déutẹ.",
    "La graisse → lou grèch.",
    "La fumée → lou hum.",
    "Une limace → û limac.",
    "Une paire → û pa.",
    "Le ticket → la bilhéte.",
    "Le lièvre → la lèbẹ.",
    "Le lait → la lèyt.",
    "Le mensonge → la mensounye.",
    "Le sang → la sanc.",
    "Le sel → la sau.",
    "Le serpent → la sèrp.",
    "Un ongle → ûe ungle."
  ]
},

{
  title: 'Formation du féminin et dérivations',
  content: [
    "-t(h) → -re : bèt(h) → bère (beau → belle).",
    "-iu → -ibe : agradiu → agradibe (agréable).",
    "-p → -be : loup → loube (loup → louve).",
    "-t → -de : dat → dade (donné → donnée).",
    "Caut → caute (chaud → chaude).",
    "Que hè calou. → Il fait chaud.",
    "-c → -gue : pèc → pègue (bête)."
  ]
}
      ]
    },










  ]

  const current = lessons[lesson]

  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#f8f6ff',
        padding: '20px'
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto'
        }}
      >
        <Link
          href="/apprendre"
          style={{
            color: '#6d28d9',
            textDecoration: 'none',
            fontWeight: 600
          }}
        >
          ← Retour
        </Link>

        <h1
          style={{
            fontSize: 'clamp(2rem,4vw,4rem)',
            marginTop: 20,
            marginBottom: 30
          }}
        >
          Leçons de Béarnais
        </h1>

     <div
  style={{
    background: '#fff',
    padding: 20,
    borderRadius: 20,
    boxShadow: '0 10px 30px rgba(0,0,0,.08)',
    marginBottom: 25,
  }}
>
  <label
    style={{
      display: 'block',
      marginBottom: 10,
      fontWeight: 700,
      color: '#5a4a2a',
    }}
  >
    Choisir une leçon
  </label>

  <div style={{ position: 'relative' }}>
    <button
      onClick={() => setOpen(!open)}
      style={{
        width: '100%',
        padding: '14px 18px',
        borderRadius: 14,
        border: '1px solid #d8c58a',
        background: '#faf8f1',
        color: '#4a3a20',
        fontWeight: 600,
        textAlign: 'left',
        cursor: 'pointer',
      }}
    >
      {lessons[lesson].title} ▾
    </button>

    {open && (
      <div
        style={{
          border: '1px solid #d8c58a',
          borderTop: 'none',
          background: '#faf8f1',
          borderBottomLeftRadius: 14,
          borderBottomRightRadius: 14,
          overflow: 'hidden',
        }}
      >
        {lessons.map((l, i) => (
          <div
            key={i}
            onClick={() => {
              setLesson(i)
              setOpen(false)
            }}
            style={{
              padding: '12px 18px',
              cursor: 'pointer',
              background:
                lesson === i ? '#f1e5b8' : 'transparent',
              color: '#4a3a20',
              borderTop: '1px solid rgba(216,197,138,.3)',
            }}
          >
            {l.title}
          </div>
        ))}
      </div>
    )}
  </div>
</div>

        <div
          style={{
            background: 'linear-gradient(135deg,#6d28d9,#9333ea)',
            color: 'white',
            padding: 25,
            borderRadius: 24,
            marginBottom: 25
          }}
        >
          <div
            style={{
              fontSize: 50,
              marginBottom: 10
            }}
          >
            {current.icon}
          </div>

          <h2
            style={{
              margin: 0,
              fontSize: 'clamp(1.5rem,3vw,2.5rem)'
            }}
          >
            {current.title}
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gap: 20
          }}
        >
          {current.sections.map((section, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                borderRadius: 20,
                padding: 22,
                boxShadow: '0 8px 25px rgba(0,0,0,.06)'
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                  color: '#6d28d9'
                }}
              >
                {section.title}
              </h3>

              {section.content.map((line, i) => (
                <p
                  key={i}
                  style={{
                    lineHeight: 1.8,
                    marginBottom: 10
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
     
     <div
  style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
    marginTop: 40,
    flexWrap: 'wrap'
  }}
>
  <button
    onClick={() => setLesson((prev) => Math.max(prev - 1, 0))}
    disabled={lesson === 0}
    style={{
      flex: 1,
      minWidth: 180,
      padding: '18px 24px',
      borderRadius: 18,
      border: 'none',
      background: lesson === 0 ? '#d1d5db' : '#6d28d9',
      color: 'white',
      fontWeight: 700,
      fontSize: 'clamp(1rem,1.2vw,1.25rem)',
      cursor: lesson === 0 ? 'not-allowed' : 'pointer',
      transition: '.2s'
    }}
  >
    ← Leçon précédente
  </button>

  <div
    style={{
      padding: '12px 20px',
      background: 'white',
      borderRadius: 16,
      boxShadow: '0 4px 15px rgba(0,0,0,.08)',
      fontWeight: 700,
      color: '#6d28d9',
      fontSize: 'clamp(.95rem,1vw,1.1rem)'
    }}
  >
    {lesson + 1} / {lessons.length}
  </div>

  <button
    onClick={() =>
      setLesson((prev) =>
        Math.min(prev + 1, lessons.length - 1)
      )
    }
    disabled={lesson === lessons.length - 1}
    style={{
      flex: 1,
      minWidth: 180,
      padding: '18px 24px',
      borderRadius: 18,
      border: 'none',
      background:
        lesson === lessons.length - 1
          ? '#d1d5db'
          : '#6d28d9',
      color: 'white',
      fontWeight: 700,
      fontSize: 'clamp(1rem,1.2vw,1.25rem)',
      cursor:
        lesson === lessons.length - 1
          ? 'not-allowed'
          : 'pointer',
      transition: '.2s'
    }}
  >
    Leçon suivante →
  </button>
</div>
     
     
      </div>
    </main>
  )
}