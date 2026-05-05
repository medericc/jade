'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function LeconsPage() {

  const [section, setSection] = useState(0)

  const sections = [

    {
      title: 'Partie 0 — Principes de base',
      content: (
        <>
          <h3>1. Principes de base</h3>
          <p>En béarnais, on lit toutes les lettres, y compris les consonnes doubles et finales et les consonnes doublées s&apos;entendent nettement (ex: caddèt, arrecatta).</p>

          <h3>2. Les Consonnes spécifiques</h3>
          <p>lh : Comme le &quot;ill&quot; français (sourélh).</p>
          <p>th : Se prononce [ty] (bèth).</p>
          <p>h : Toujours fortement aspiré (hilh).</p>
          <p>r vs rr : Le -r- est simple, le -rr- est vigoureusement roulé (pourét vs pourrét).</p>
          <p>y : son &quot;i&quot; en début/milieu de mot (comme : you), mais vaut &quot;ill&quot; en fin de mot (pay).</p>
          <p>ny / dy : Se prononcent avec un petit son [d] de transition (minya, bilàdye).</p>
          <p>sch : Se prononce comme un double &quot;ch&quot; (escharre).</p>
          <p>bl / gl : Entre deux voyelles, on double le son [b] ou [g] (agradàble).</p>

          <h3>3. Les Voyelles et Nasales</h3>
          <p>Le -e final : Se prononce [eu] très ouvert, sauf s&apos;il a un point (-e) où il devient [é].</p>
          <p>Le o : Se prononce [ò] ouvert (bol). Devant une voyelle, il devient [w] (boéu).</p>
          <p>Le u : Se prononce [u] (lune). Mais derrière une voyelle, il forme une diphtongue [ou] (au, èu, iu...).</p>
          <p>Groupes -an, -en, -in, -un : On prononce le n (comme &quot;Anne&quot;, &quot;benne&quot;), ce n&apos;est pas nasalisé comme en français. On utilise l&apos;accent circonflexe (â, ê, î, ô, û) pour indiquer une voyelle nasale. Elles sont toujours toniques.</p>

          <h3>4. L&apos;Accent Tonique</h3>
          <p>Sur l&apos;avant-dernière syllabe (Minye) ou sur la dernière syllabe (Que minyam).</p>

          <h3>5. L&apos;Accent Écrit</h3>
          <p>é / è : On met toujours l&apos;accent.</p>
          <p>à, ì, ò, ù : On met l&apos;accent sauf dans deux cas...</p>
          <p>Tréma (ü) : Très rare (flaüte).</p>

          <h3>6. Orthographe</h3>
          <p>Alphabet : 23 lettres. Le V est réservé aux mots français récents. Le K aux noms propres ou unités.</p>
    
    
          <h3>7. Particule Verbale</h3>
          <p>Le verbe conjugué est précédé de la particule &quot;que&quot; ou &quot;ne&quot; et suivit de &quot;pas&quot; dans une phrase négative.</p>
     
        </>
      )
    },

    {
      title: 'Partie 1 — Être, identité',
      content: (
        <>
          <p>Que souy à noùste/case</p>
          <p>Que souy en ço de Bertoumiu</p>
          <p>Qu’em espagnòus</p>
          <p>Que souy en trî de tribalha  ta esta lou purmè arriba à Riu di Janèyrou.</p>

          <h3>Négation</h3>
          <p>Tu n’es pas de Madri.</p>
          <p>Ne souy pas à lou</p>
          <p>E bousauts, n’èt pas anglés.</p>

          <h3>Pronoms personnels 3e personne</h3>
          <p>éth / éths — ére / éres</p>

          <h3>Présenter</h3>
          <p>Qu’éy beroy</p>
          <p>N’éy pas ére</p>
          <p>Que soun eths</p>
        </>
      )
    },

    {
      title: 'Partie 2 — Articles',
      content: (
        <>
          <p>lou/lous — la/las</p>
          <p>û — ûe</p>
          <p>Que soun guits</p>
          <p>dou — de la</p>
          <p>Qu’éy bén</p>
          <p>Lou Yan e la Cataline</p>
          <p>Pluriel : +s ou invariable</p>
        </>
      )
    },

    {
      title: 'Partie 3 — Possession',
      content: (
        <>
          <p>lou mê / lous mês — la mée / las mées</p>
          <p>lou toû / lous toûs — la toûe / las toûes</p>
          <p>lou soû / lous soûs — la soûe / las soûes</p>
          <p>lou noùste / lous noùstes — la noùste / las noùstes</p>
          <p>lou bòste / lous bòstes — la bòste / las bòstes</p>
          <p>lou lou / lous lous — la loue / las loues</p>

          <p><strong>Segu e soulìde, qu’éy lou soû !</strong></p>
     
       <p>You → moi</p>
          <p>Tu → toi</p>
          <p>Éth/ére → lui/elle</p>
          <p>Nosauts → nous</p>
          <p>Bousauts → vous</p>
          <p>Éths/éres → eux/elles</p>

     
     
     
        </>
      )
    },

    {
      title: 'Partie 4 — Réfléchis',
      content: (
        <>
          <p>me (-m), te (-t), se (-s), nse (le n peut être muet), pe</p>
         <p>Si pas de “que” ils s’attachent à la fin du verbe</p>
          <p>Que-m làbi</p>
          <p>Laba-s</p>
          <p>Portat-p</p>
          <p>Quoan me làbi</p>
      <p>Lou/la → Lous/las / des → rien / du → dou / de → de </p>
  
   
    <p>Qu&apos;ou (que + lou) crey.</p>
       
          <p>Toutes aquéres maysoûs que soun bastides p&lsquo;ou (per+lou) medich murralhàyrẹ. → Toutes ces maisons sont construites par le même maçon.</p>
        </>
      )
    },

    {
      title: 'Partie 5 — Pronoms',
      content: (
        <>
          <h3>&#34;le&#34; neutre renvoyant à &#34;ça&#34;</h3>
          <p>at, -m at, -p at</p>  
          <p>Que-m-at a dit !</p>
 
 <h3>Aux 3èmes personnes du singulier et du pluriel, l’ordre des pronoms est l’inverse de celui du français !</h3>
          
          <p>Més dits-l’at !</p>
          <p>Qu’ou me da.</p>
  <p>Que la pe ba balha !</p>
  <p>Amuche-u-me !</p>
         
          <h3>Précis</h3>
          <p>Quoan lou me porte.</p>
          <p> Qu’ou me cau.</p>
          <p>Balhe-la-mé !</p>
          <p>Croumpe-u-té !</p>
           <p>Quoan lou nse porte.</p>
          <p>Que las pe cau.</p>

          <h3>Impératif</h3>
          <p>Quand le pronom la(s) se trouve en enclise derrière un verbe à l’impératif, il se transforme en –lè(s) !</p>
          <p>Gahe-lè !</p>
          <p>Dèche-lès !</p>
        </>
      )
    },

    {
      title: 'Partie 6 — Textes',
      content: (
        <>
          <p>Que cau ha ço qui cau !</p>
          <p>Ne cau pas nada !</p>
          <p>Que caleré maynàdyes aciu.</p>

          <p>Youga dou piano</p>
          <p>Ha à las cartes</p>

          <p>Que bouleri</p>
          <p>Qu&apos;aymam</p>
          <p>Que bòu</p>

  <p>Més/Oun/E/Dounc/Toutû (Alabéts que)/Ni/Permou</p>
    <p>En purmè/Tout d&lsquo;abor/Ta coumença (alenga → commencer qqch)</p>
    
       <p>Après/Puch/Ad arroun/En seguin</p>
    
      <p> Û cop de méy la rasoû qu&lsquo;abè abut lou dessus dou cabourrudè !</p>
        <p>Ta acaba, À la fî, Per la fî, Enfî</p>
   
     <p>Darrères → la dernière fois ou dernièrement</p>
   
      <p>Je veux que tu m’écoutes. → Que bouy que-m escoutis.</p>
      <p>Je voudrais que tu m’écoutes. → Que bouleri que-m escoutis.</p>
         <p>Je voulais que tu m’écoutes. → Que bouli que-m escoutis.</p>

   <p>On en voit souvent par ici. → Qu’em bedem souben par aciu. / Mais si c&apos;est général (on + en + lieu / temps » = se + -n + -y + verbe à la 3ème personne du singulier) : Maintenant, on en fait de jolis. → Adare, que se-n-y hè de beroys. </p>
<p>Si « le » renvoie à un adjectif précédemment mentionnée, ou utilise le pronom ne / -n, « en » :  Ils le sont toujours restés, jusqu’à la fin. → Que-n demourèn toustém, dinco la fî. S’il ne l’est pas encore, il le deviendra ! → Si ne-n éy pas encoère, que-n badera! </p>




<p>« en » du français se traduit par ne / -n ou en</p>

<p>Combien vous en reste-t-il ? → Quoan pe-n demoure / soubre ? Combien en vendez-vous ? → Quoan en benét ? Combien vous en faut-il encore ? → Quoàn pe-n cau ? Combien y en a-t-il ? → Quoàn-n y a ? J’en veux beaucoup ! → Qu’en bouy hère(s) ! En veux-tu encore ?  → E*-n bos encoère ?</p>
      
      <p>Au-À / Aus-À las</p>
  <p>Au lieu → Au loc</p>
       <p>Arrivé en haut du touya. → Arribat au soum dou touya. / Jouer aux quilles → ha à las quilhes. / Je voudrais manger une omelette aux cèpes. → Que-m bouleri minya ûe mouléte de céps. / Nous voudrions du poulet aux oignons. → Que boulerém pourét dap cébes. / Aquéth tros de broutche aus oélhs blus. → Cette espèce de sorcière aux yeux bleus.</p>
      
        </>
      )
    },

    {
      title: 'Partie 7 — Temps',
      content: (
        <>
          <p>Chic / Û din</p>
          <p>Hère</p>
          <p>Trop / Trops</p>
          <p>Prou</p>

 <p>Que mìnyi chic.</p>
          <p>Que mìnyi û din.</p>
          <p>Chic à chic.</p>
           <p>Que y a hère de brumes.</p>
            <p>Que soy trop coentat.</p>
             <p>Que-n y a trop </p>
              <p>Lous camioûs que soun trops.</p>
 <p>Nou bén pas prou.</p>
 <p>Qu’èm prou.</p>

          <p>Oun ? Quoan ? Quin ?</p>
           <p>Que et qui se traduisent par qui.</p>
          <p>Qu&apos;éy ço qui prenét ? / Que prenét ?</p>

            <p>Oun éy la clau ?</p>
              <p>Oun soun lous noùstes amics ?</p>

          <p>Quin ore éy ?</p>
          <p>Quin die éy ? Qu’èm lou 17 de yulhét 2026.</p>
   <p>A quine ore arriberan ?</p>
           <p>Que boulét segui lous més amics ? Qu’ou boulém mes abans, Yan béu û cop.</p>
          <p>Qu&apos;éy sèt ores e quar</p>
          <p>Mieydie / Miéye-noeyt</p>

          <p>Si at bos, que y bam de tire.</p>
         
          <p>Quoan pe déu ?</p>



<p>à + lou → a*u</p> <p>à + lous → dou*</p> <p>de + lou → dous*</p> <p>de + lous → au</p> <p>(en)ta + lou → (en)tau</p> <p>(en)ta + lous → (en)taus</p>
<p>Qu’ous debi 30 $.</p>

          <p>Qu’èm lou 17 de yulhét 2026</p>
      
      
             <p>Verbes exclusivement impersonnels</p>
   
             <p>apari-u « arriver » → Que l&lsquo;aparéch soubén benalèyes.</p> <p>baga-u « avoir le temps » → Que-u bague toustém ad ére !</p> <p>càlẹ / calé « falloir » → Estudia que cau !</p> <p>prùdẹ-u « démanger » → Que-u prut de-p at dìsẹ.</p>
   
        <p>Verbes employés impersonnellement</p>
    <p>coumbiénẹ « convenir » → Que coumbieneré de-us at dìsẹ.</p> <p>escàdẹ-s « arriver, se trouver » → Oéy que-s escat que souy esbagat.</p> <p>esta-u-se desbroumbat « oublier » → Que se-m éy desbroumbat de-p at dìsẹ.</p> <p>paréchẹ-s « paraître » → Que-s paréch que-y ba bàdẹ céps.</p> <p>pressa-u « avoir hâte » → Que-u prèsse de l&apos;ana bédẹ ad ére.</p> <p>soubiénẹ-u « se souvenir » → Que (se-) m soubién ço qui-m digous.</p>
   
      
        </>
      )
    },

    {
      title: 'Partie 8 — Localisation',
      content: (
        <>
          <p>Aciu / Aquiu / Acera</p>
          <p>Aço / Aco / Aquero / Acero</p>

          <p>Aquéste / Aquéstes</p>
          <p>Aquéth-Aquére / Aquéths-Aquéres</p>
          <p>Acéth-Acére / Acéths-Acéres</p>

          <p>Aquéste chin ba à hoéc de calhau dinco à lou !</p>

          <p>N’èy pas brigue coumprés</p>
          <p>soulide / de segu / per segu</p>
          <p>nat / nade</p>
          <p>Maugrat qui + Subj. / Per + Inf. / Ya que (+ subj) </p>

           <p>Maugrat aco, que biénẹn estalla-s à la campagne.</p>   
            <p> Per esta tâ rìchẹ, n&lsquo;éy pas trop yenerous.</p>               
          <p>Si nou-n abét pas nade, que-n bau préne.</p>

          <p> Aciu, que soupam tout die à sèt ores e miéye.</p>
          <p>Que-s y minye plâ</p>



            <p>Les verbes transitifs de mouvement (mia(-n), embia(-n), manda(-n)) s&apos;emploient avec la préposition ta avant l&apos;infinitif</p>
            <p>Qu&apos;ou ne bau embia ta croumpa pâ. → Je vais l&apos;envoyer acheter du pain.</p>
    
       <p>Les verbes bédẹ, enténẹ, escouta, espia s&apos;emploient avec la préposition à avant l&apos;infinitif</p>
            <p>Qu&apos;ous (que+lous) entenèn à canta. → Ils les entendaient chanter.</p>
    
        </>
      )
    }
,

    {
      title: 'Partie 9 — Salutations',
      content: (
        <>
          <p>Adiu / Adichat</p>
          <p>Salut, braves gens ! → Adichat, bràbe moùnde !</p>
  <p>Quoau / Quoaus → dans une liste.</p>

  <p>Quoau - Quoaus → dans une liste. / Quin-Quins (m) ou Quine-Quines (f) → dans le sens type / sorte.</p>

 <p>Pourquoi ? → Ta qué/Perqué ?” </p>
  <p>Quins filmes e bas béde ?</p>
           <p>Ne sèy pas quin dise-u tout aco.</p>
<p>Ne sey pas perqué caleré ha atau.</p>
          <p>Quin te ba ? - Quin ès ? / Quin pe ba ? / Quin èt ?</p>
           <p>Que ba plâ ! E aquiu ? /   </p> <p> Que ba mau ! E bous ? </p> <p> Plâ ! E tu ? </p>
          <p>S&apos;en aller → ana-se-n.</p>
          <p>Y êtes-vous allées ? → E y èt anades ? </p>

          <p>Aco ray ! </p>
          <p>Atau tè !</p>
          <p>de mal en pis → de pìri en sourdéys</p>
         
         
          <p>Que ço qui hès ? / Que hès ?</p>


<p>Cara-s = Se taire</p>
          <p> Tais-toi ! → Caret ! </p> <p> Chut ! → Chou ! </p> <p> Taisez-vous ! → Carat-pe ! </p>
           <p> O ! / Quio ! </p> <p> Nou ! / Nani ! </p> <p> Merci hère ! </p> <p> D&lsquo;arré </p> <p> En te pregan / Si-bou-plèt </p>
           <p> En pe pregan !  </p> <p> Plèti ? </p> <p> Quio, que ba !</p> <p> Boû die !</p> <p> Boû brèspe !</p> <p> Boune serade !</p>
            <p> Boune noéyt ! </p> <p> Boune escadénce ! </p> <p> Tau plasé / Tau medich (pour le même) </p> <p> Poutines </p>
          
           <p> En Aban ! </p> <p> Biban ! </p> <p> Quin pèc/pègue (bête)  </p> <p> Poutines </p>
          
        </>
      )
    },
    { 
  title: 'Partie 10 — Positions et descriptions', 
  content: ( 
    <> 
      <p>haut → haut. En haut → au soum, au bèc, en haut, cap-sus.</p> 
      <p>Arribat au soum dou touya → Arrivé en haut du touya.</p> 
      <p>Là-haut → aquiu haut, acera capsus.</p> 

      <p>environ → haut ou bach, à chic près, à pus près, de cap à, embiroû, méy ou ménch (+ ou -).</p> 
      <p>Ils étaient plus que cela → qu&#39;èren méys.</p> 
      <p>En plus → en méy, en suberpés.</p> 
      <p>Non plus → tapoc.</p> 

      <p>houns → fond.</p> 
      <p>bas → bach. En bas → cabbath.</p> 

      <p>prés → près, au ras.</p> 
      <p>près de → au ras de, prés de.</p> 
      <p>prêt → prèst -èste.</p> 
      <p>pré → prat.</p> 

      <p>loin → loégn.</p> 
      <p>Rosalie est partie loin de la cabane, à la recherche de glands dans le bois voisin → La Rosalie qu&#39;éy partide drin loégn de la cabane, en cèrques d&#39;aglans héns lou bosc besî.</p> 

      <p>entre → entér / éntre.</p> 
      <p>L&#39;eau jaillissait jusqu&#39;à mi-jambe entre les galets… → Er&#39;aygue que chourrabe dinque méy de miéye-came entér deths arrebots.</p> 

      <p>sur → sus.</p> 
      <p>dessus → dessus (surface supérieure aussi, estenude pour la superficie).</p> 
      <p>Sur ce → en aquéres.</p> 
      <p>Là-dessus, le grand oiseau → Aquiu dessus, lou gran ausèth.</p> 
      <p>dominer → mestreya (garçon qui domine), dauneya (fille qui domine), abé lou dessus.</p> 
      <p>influence → influence.</p> 
      <p>Une fois de plus la raison avait eu le dessus sur l&#39;obstination, la méchanceté et les mensonges dus à la jalousie des gens → Û cop de méy la rasoû qu&#39;abè abut lou dessus dou cabourrudè, dou machantè, de las mensounyes permou dou yelousè dou moùnde.</p> 
      <p>Il m&#39;a éclaboussé de boue → que m&#39;a hèyt chiscla hangue ta dessus.</p> 

      <p>gauche → gauche, gauchét → gaucher.</p> 
      <p>droite → dréte.</p> 
      <p>Le Parlement est à droite → lou Parlamén qu&#39;éy à mâ dréte.</p> 
      <p>Tout droit → tout drét.</p> 

      <p>debath → dessous/sous.</p> 

      <p>beau → bèth, beroy (pas obèse ni maigre, qui est bien costaud donc beau).</p> 
      <p>belle → bère, beroye (pas obèse ni maigre, qui est bien costaude donc belle).</p> 
      <p>Avoir beau → abé bèth.</p> 
      <p>Faire beau (temps) → ha bèth.</p> 
 <p>Petit-petite / Coumû-coumune / Gran-grane</p> 

       <p>ls couleurs : Rouy, négrẹ, blanc, blu (blau le choc), brun/marroû, bért/de, rose,briulét/te, màubẹ (maube la fleur), irandye, gris, yàunẹ (mouyòu pour l’oeuf)</p> 
    </> 
  ) 
},
{
  title: 'Partie 11 — Nombres',
  content: (
    <>
      <p>û (m.) / ûe (f.), dus, très, quoatẹ, cinc, chéys, sèt, oéyt, nau, dèts</p>

      <p>oùnzẹ, doùdzẹ, trédzẹ, quatoùrzẹ, quìnzẹ, sédzẹ, dèts e sèt, dèts e oéyt, dèts e nau, bint</p>

      <p>bint e û, trénte û, quarante û, cinquante û, chichante û, setante û, oeytante û, nabante û, cén, cén û, dus céns, mile, dus mile.</p>

    
      <p>Quoaus soun lous sèt dies de la semmane ?</p>
      <p>Dilûs, dimars, dimèrs, diyaus, dibés, dissàttẹ, diményẹ.</p>

      <p>Quoaus soun lous doùdze més de l’anade ?</p>
      <p>les mois (lous més) : yambiè, heurè, mars, abriu, may, yulh, yulhét, aoust, setémẹ, ouctoùbrẹ, noubémbrẹ, decémẹ.</p>
    </>
  )
}
,
{
  title: 'Partie 12 — Différences et dérivations',
  content: (
    <>
      <p>Différences de genre entre français et béarnais :</p>

      <p>une affaire → û aha</p>
      <p>une horloge → û arrelòdye</p>
      <p>une crémaillère → û crimalh</p>
      <p>la dette → lou déutẹ</p>
      <p>la graisse → lou grèch</p>
      <p>la fumée → lou hum</p>
      <p>une limace → û limac</p>
      <p>une paire → û pa</p>
      <p>le ticket → la bilhéte</p>
      <p>le lièvre → la lèbẹ</p>
      <p>le lait → la lèyt</p>
      <p>le mensonge → la mensounye</p>
      <p>le sang → la sanc</p>
      <p>le sel → la sau</p>
      <p>le serpent → la sèrp</p>
      <p>un ongle → ûe ungle</p>

      <p>Dérivations :</p>

      <p>-t(h) → -re : bèt(h) → bère = « beau → belle »</p>
      <p>-iu → -ibe : agradiu → agradibe = « agréable »</p>
      <p>-p → -be : loup → loube = « loup → louve »</p>
      <p>-t → -de : dat → dade = « donné → donnée »</p>
      <p>caut → caute = « chaud → chaude » (Il fait chaud → que hè calou.)</p> 
      <p>-c → -gue : pèc → pègue = « bête »</p>
  
    </>
  )
}
  ]

  return (
    <main style={{ maxWidth: 1000, margin: 'auto', padding: 20 }}>

      <Link href="/apprendre">← Retour</Link>

      <h1 style={{ fontSize: 32, marginBottom: 20 }}>
        Leçons
      </h1>

      {/* navigation */}
      <div style={{
        display: 'flex',
        overflowX: 'auto',
        gap: 10,
        marginBottom: 20
      }}>
        {sections.map((_, i) => (
          <button
            key={i}
            onClick={() => setSection(i)}
            style={{
              padding: '10px 15px',
              borderRadius: 10,
              border: 'none',
              background: section === i ? '#4B1E6D' : '#eee',
              color: section === i ? '#fff' : '#000',
              whiteSpace: 'nowrap'
            }}
          >
            {i}
          </button>
        ))}
      </div>

      {/* contenu */}
      <div style={{
        background: '#FFF4CC',
        padding: 25,
        borderRadius: 20,
        lineHeight: 1.7
      }}>
        <h2 style={{ marginBottom: 15 }}>
          {sections[section].title}
        </h2>

        {sections[section].content}
      </div>

    </main>
  )
}