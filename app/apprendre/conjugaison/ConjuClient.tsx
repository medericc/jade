'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'




function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)

    const listener = () => setMatches(media.matches)

    listener()

    media.addEventListener('change', listener)

    return () =>
      media.removeEventListener('change', listener)
  }, [query])

  return matches
}

const sections = [
  {
    key: 'pronoms',
    label: 'Pronom + participe',
  },
  {
    key: 'present',
    label: 'Présent',
  },
  {
    key: 'futur',
    label: 'Futur + conditionnel',
  },
  {
    key: 'subjonctif',
    label: 'Subjonctif + impératif',
  },
  {
    key: 'passe',
    label: 'Les temps du passé',
  },
]

export default function ConjugaisonPage() {
  const [section, setSection] = useState('pronoms')
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)
const isMobile = useMediaQuery('(max-width: 767px)')
  return (
    <main
      style={{
        background: '#f3eef8',
        minHeight: '100vh',
      }}
    >
      {/* HERO */}

      <section
        style={{
          background:
            'linear-gradient(180deg,#2a0c45 0%, #3f1764 100%)',
          padding: '5rem 1rem',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            maxWidth: 1000,
            margin: '0 auto',
          }}
        >
          <Link
            href="/apprendre"
            style={{
              textDecoration: 'none',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '.5rem',
                background: '#fff',
                color: '#2a0c45',
                border: '2px solid #f3c623',
                borderRadius: 999,
                padding: '.75rem 1.25rem',
                fontWeight: 700,
                marginBottom: '2rem',
              }}
            >
              ← Retour
            </div>
          </Link>

          <div
            style={{
              color: '#f3c623',
              fontWeight: 700,
              letterSpacing: '.15em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            📚 Langue Béarnaise
          </div>

          <h1
            style={{
              color: '#fff',
              fontSize: 'clamp(2.5rem,6vw,4.5rem)',
              fontWeight: 800,
              margin: 0,
            }}
          >
Counyuguesoû

          </h1>

          <p
            style={{
              color: '#d8c7e8',
              lineHeight: 1.8,
              maxWidth: 800,
              margin: '1.5rem auto 0',
            }}
          >
            Découvrez les règles essentielles de la conjugaison béarnaise,
            les temps verbaux et les principales particularités.
          </p>
        </div>
      </section>

     <section
  style={{
    padding: '3rem 1rem',
  }}
>
  <div
    style={{
      maxWidth: 1200,
      margin: '0 auto',
    }}
  >
   {isMobile ? (
  <div style={{ position: 'relative' }}>
    <select
      value={section}
     onChange={(e) => {
  const key = e.target.value
  setSection(key)
  window.history.replaceState(null, '', `#${key}`)
}}
      style={{
        width: '100%',
        padding: '1rem 3rem 1rem 1.25rem',
        borderRadius: open ? '18px 18px 0 0' : 18,
        border: '2px solid #f3c623',
        background: '#fffdf7',
        color: '#2a0c45',
        fontSize: '1rem',
        fontWeight: 700,
        cursor: 'pointer',
        outline: 'none',
        boxShadow: '0 8px 20px rgba(42,12,69,.06)',
        appearance: 'none',
        WebkitAppearance: 'none',
        MozAppearance: 'none',
      }}
    >
      {sections.map((s) => (
        <option key={s.key} value={s.key}>
          {s.label}
        </option>
      ))}
    </select>

    <div
      style={{
        position: 'absolute',
        right: 18,
        top: '50%',
        transform: 'translateY(-50%)',
        color: '#b8941f',
        fontSize: '1rem',
        pointerEvents: 'none',
        fontWeight: 700,
      }}
    >
      ▼
    </div>
  </div>
) : (
  <div style={{ position: 'relative' }}>
<button
  onClick={() => setOpen(!open)}
  style={{
    width: '100%',
    padding: '14px 50px 14px 18px',
    border: '2px solid #f3c623',
    background: '#fffdf7',
    color: '#2a0c45',
    fontWeight: 700,
    textAlign: 'left',
    cursor: 'pointer',
    borderRadius: open ? '18px 18px 0 0' : 18,
    boxShadow: '0 8px 20px rgba(42,12,69,.06)',
  }}
>
  {sections.find((s) => s.key === section)?.label}
</button>

<div
  style={{
    position: 'absolute',
    right: 18,
    top: 18,
    color: '#2a0c45',
    fontSize: '1rem',
    pointerEvents: 'none',
    fontWeight: 700,
    transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 0.2s ease',
  }}
>
  ▼
</div>

    {open && (
      <div
        style={{
          border: '2px solid #f3c623',
          borderTop: 'none',
          background: '#fffdf7',
          borderBottomLeftRadius: 18,
          borderBottomRightRadius: 18,
          overflow: 'hidden',
          boxShadow: '0 8px 20px rgba(42,12,69,.06)',
        }}
      >
        {sections.map((s) => (
          <div
            key={s.key}
            onMouseEnter={() => setHovered(s.key)}
  onMouseLeave={() => setHovered(null)}
      
  onClick={() => {
  setSection(s.key)

  document
    .getElementById(s.key)
    ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
window.history.replaceState(null, '', `#${s.key}`)
  setOpen(false)
}}

            style={{
              padding: '12px 18px',
              cursor: 'pointer',
               background:
      section === s.key
        ? '#ece6fc'
        : hovered === s.key
        ? '#f6f0ff'
        : 'transparent',
              color: '#2a0c45',
              borderTop:
                '1px solid rgba(243,198,35,.25)',
              fontWeight:
                section === s.key ? 700 : 500,
            }}
          >
            {s.label}
          </div>
        ))}
      </div>
    )}
  </div>
)}
  </div>
</section>

      {/* PRONOMS */}

      {section === 'pronoms' && (
        <section style={{ padding: '0 1rem 5rem' }} id="pronoms">
      <div
  style={{
    maxWidth: 1200,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  }}
>   <Card
              title="Pronom personnel"
              icon="📝"
            >
              <p>
                Le pronom personnel sujet ne s’écrit généralement pas,
                la conjugaison débute par « que ».
              </p>

              <p>
                Pronoms :
                You · Tu · Éth/Ére · Nousauts · Bousauts · Eths/Éras
              </p>
            </Card>

            <Card
              title="Participe présent"
              icon="📖"
            >
              <p>
                Le participe présent se forme avec l’infinitif suivi de
                « n ».
              </p>

              <p>
                Exemple :
                canta → cantan / en cantan → en chantant
              </p>
            </Card>

            <Card
              title="Participe passé"
              icon="📜"
            >
              <p>
                Le participe passé se forme généralement sans accent avec
                a / u / i + t,
                et une forme féminine en -de.
              </p>

            
               <p>bédẹ « voir » → bis/biste</p> <p>bìbẹ « vivre » → biscut/biscude</p>  <p>còsẹ « cuire » → coéyt/coéyte</p>   <p>plàgnẹ « plaindre » → plagnut</p> <p>plàsẹ « plaire » → plasut</p>  <p>tòrsẹ « tordre » → tourcut</p>
                <p>ourbi (le &quot;u&quot; peut disparaître à la conjugaison) « ouvrir » → ubèr</p> <p>aufri « offrir » → aufèr</p> <p>coubri « couvrir » → coubèr</p> <p>mouri « mourir » → mour/mourte</p> <p>soufri « souffrir » → soufèr</p>
            <p>⚠ ẹ → &quot;e&quot; doucement fermé à l&lsquo;oral</p>
            </Card>
          </div>
        </section>
      )}

      {/* PRESENT */}

      {section === 'present' && (
        <section style={{ padding: '0 1rem 5rem' }} id="present">
          <Container>

            <Card title="1er groupe" icon="📖">
              <p>
                Radical + i, es, e, am, at, en.
              </p>
            </Card>

            <Card title="2e groupe" icon="📖">
              <p>
                Radical + i, es, forme variable, ém, ét, ẹn.
              </p>
               <p>forme variable : si -b, -d, -s, -l, -z la lettre change : b devient u (bébẹ « boire »   → béu) ou p (sabé → sap) ; z devient s (debèrzẹ « digérer »   → debèrs), mais aucun si –gn, –lh, –m, -n, -p, -r, -t, -y   </p>
          </Card>

            <Card title="3e groupe" icon="📖">
              <p>
                Radical + éch? (sauf nous et vous) + i, s, -, im, it, in.
              </p>

            </Card>

  


            <Card title="Présent Irrégulier" icon="⚠">
              <p>esta (être): que souy , qu’ès , qu’éy , qu’èm , qu’èt , que soun </p>
              <p>abé (avoir) : qu’èy , qu’as , qu’a , qu’abém , qu’abét , qu’an </p>
              <p>ana (aller) : que bau , que bas , que ba , que bam , que bat , que ban </p>
       
                     <p>da (donner): que dau , que das , que da , que dam , que dat , que dan </p>
              <p>ha (faire) : que hèy , que hès , que hè , que hèm , que hèt , que hèn </p>
              <p>bédẹ (voir) : que béy , que béts , que bét , que bedém , que bedét , que bédẹn </p>
       
                     <p>dise (dire): que disi , que dits , que dit , que disém , que disét , que disẹn </p>
              <p>boùlẹ (vouloir) : que bouy , que bos , que bòu , que boulém , que boulét , que bòlen </p>
              <p>sabé (savoir) : que séy , que saps , que sap , que sabém , que sabét , que sàbẹn </p>
       
                     <p>crédẹ (croire): que créy , que crédẹs , que crét , que credém , que credét , que crédẹn</p>
              <p>poude (pouvoir) : que pouch , que pots , que pot , que poudém , que poudét , que pòdẹn </p>
          
            </Card>
              

          </Container>
        </section>
      )}

      {/* FUTUR */}

      {section === 'futur' && (
        <section style={{ padding: '0 1rem 5rem' }} id="futur">
          <Container>

            <Card title="Futur" icon="🔮">
              <p>
                Infinitif + r + èy, as, a, am, at, an.
              </p>

              <p>
                Pour certains verbes du premier groupe,
                le « a » de l’infinitif peut devenir « e ».
              </p>

              <p>
           Auxiliaire au futur + participe passé = futur antérieur
             </p>
            </Card>
  <Card title="Futur Irrégulier" icon="⚠">
              <p>esta (être): que serèy , que seras , que sera , que seram , que serat , que seran </p>
              <p>abé (avoir) : qu’aberèy / aurèy , qu’aberas / auras , qu’abera / aura , qu’aberam / auram , qu’aberat / aurat , qu’aberan / auran </p>
              <p>ana (aller) : qu’anerèy , qu’aneras , qu’anera , qu’aneram , qu’anerat , qu’aneran </p>
            </Card>

              <Card title="Futur du Passé" icon="🔮">
                   <p>3e personne du passé simple + -ri, -rẹs, -rẹ, -rẹm, -rẹt, -rẹn</p>
        <p>
        À utiliser après une proposition subordonnée introduite par « si » ou « que » avec un verbe au passé. S&apos;il est au présent, il faut utiliser le futur. </p>
    
    <p>
         Exemple : Je savais que tu mangerais tout → Que sabi que-t-at minyèrẹs tout.   </p>

            
            </Card>


            <Card title="Conditionnel" icon="✨">
              <p>
                Infinitif sans accent + r + i, és, é, ém, ét, én.
              </p>
                <p>
                Pour certains verbes du premier groupe,
                le « a » de l’infinitif peut devenir « e » comme ana.
              </p>
              <p>
           radical :  aber- et aur- possible pour « avoir », ser- pour « être »</p>
            </Card>

          </Container>
        </section>
      )}

      {/* SUBJONCTIF */}

      {section === 'subjonctif' && (
        <section style={{ padding: '0 1rem 5rem' }} id="subjonctif">
          <Container>

            <Card title="Subjonctif" icon="✠">
              <p>
                Radical + éch? + i + -, s, -, m, t, n.
              </p>
 <p>
              Sauf pour nous et vous, on appuie sur la 1ère syllabe, 2e si «éch» (&#34;`&#34; pour le 1er groupe, &#34;´&#34; pour les autres)
              </p>
              <p>
                Il s’emploie notamment après
                quoan « quand »,
                talèu qui « dès que »,
                û cop qui « une fois que »,
                coum  « comme »
                et certaines expressions similaires comme lou purmè qui « le premier qui ».
              </p>
            </Card>

             <Card title="Subjonctif Irrégulier" icon="⚠">
             <p>esta (être): sìi , sìis , sìi , sìim , sìit , sìin</p>
                  <p>abé (avoir): ay-</p>
              <p>ha (faire) :  hesqu-</p>
           <p>boulé (vouloir): boulh-</p>
              <p>sabé (savoir) : sap-</p>
         <p>poudé (pouvoir): pouchqu-</p>
            </Card>

            <Card title="Impératif" icon="📢">
              <p>
                canta « chanter » → cante, cantém, cantat
              </p>

              <p>
                benẹ « vendre » → bén, beném, benét
              </p>

              <p>
                droumi « dormir » → droum, droumim, droumit
              </p>

              <p>
                L’impératif négatif utilise le présent du subjonctif : Ne càntes pas !
              </p>
            </Card>
<Card title="Impératif Irrégulier" icon="⚠">
                   <p>esta (être) : sìis , sìim , sìit</p>
              <p>abé (avoir): ayis , ayim , ayit</p>
              <p>ana (aller) : bén , aném , anat</p>
         
          <p>da (donner) : da , dém , dat</p>
              <p>ha (faire): hè , hèm , hèt</p>
              <p>bédẹ (voir) : bét , bedém , bedét</p>
         

          <p>biénẹ (venir) : ça-i , bieném , ça-biét</p>
              <p>sabé (savoir): sàpies , sapiam , sapiat</p>
              <p>tiénẹ (venir) : té , tieném , tienét</p>
         
          <p>prénẹ (prendre): prén , preném , prenét</p>
              <p>crédẹ (croire) : crét , credém , credét</p>
         

           </Card>
          </Container>
        </section>
      )}

      {/* PASSE */}

      {section === 'passe' && (
        <section style={{ padding: '0 1rem 5rem' }} id="passe">
          <Container>
  <Card title="Passé Simple" icon="🏛">
              <p>
                1er groupe :
                radical + èy, ès, è, èm, èt, èn
              </p>

              <p>
                2e groupe :
                radical + ouy, ous, ou, oum, out, oun
              </p>

              <p>
                3e groupe :
                radical + i, is, i, im, it, in
              </p>
                 Auxiliaire au passé simple + participe passé = passé antérieur
            </Card>

        <Card title="Passé Simple Irrégulier" icon="⚠">
               <p>Au 2ᵉ groupe, un &ldquo;g&ldquo; peut s&apos;ajouter, &ldquo;d&ldquo; peut être remplacé par &ldquo;g&ldquo; et &ldquo;gn&ldquo; peut devenir &ldquo;ng&ldquo;</p> 
               
               <p>On utilise &ldquo;balha&ldquo; « donner » plutôt que &ldquo;da&ldquo; « donner » au passé simple</p> 
                 <p>esta « être » → qu&apos;estouy/estéy · qu&apos;estous/estés · qu&apos;estou/esté · qu&apos;estoum/estém · qu&apos;estout/estét · qu&apos;estoun/estén</p> 
            
                <p>bìbẹ « vivre » → que biscouy</p> 
                <p>biénẹ « venir » → que biengous</p>  
                 <p>counéchẹ « connaître » → que counegou</p> 
                <p>disẹ « dire » → que digoum</p> 
                 <p>ha « faire » → que hesout</p>
                
                 <p>paréchẹ « paraître » → que parescoun</p> 
                 <p>prénẹ « prendre » → que prengouy</p>
                  <p>tiénẹ « tenir » → que tiengous</p> 
                  <p>tòrsẹ « tordre » → que tourcou</p>
        
            </Card>

            <Card title="Imparfait" icon="📜">
              <p>1er groupe : àbi, abes, abe, àbem, àbet, aben</p>
              <p>2e groupe (sans accent sur 1ère voyelle) : i/èbi, ès/èbes, è/èbe, èm/èbem, èt/èbet, èn/èben</p>
              <p>3e groupe : ibi, ibes, ibe, ibem, ibet, iben</p>
                <p>Auxiliaire à l&apos;imparfait + participe passé = plus-que-parfait</p>
      
            </Card>
             <Card title="Imparfait Irrégulier" icon="⚠">
              <p>esta (être) : qu’èri , qu’ères , qu’ère , qu’èrem , qu’èret , qu’èren </p>
              <p>abé (avoir): qu’abi / abèbi , qu’abès / abèbes , qu’abè / abèbe , qu’abèm / abèbem , qu’abèt / abèbet , qu’abèn / abèben </p>
              <p>ha (faire) : que hesi , que hesès , que hesè , que hesèm , que hesèt , que hesèn </p>
            </Card>

          



            <Card title="Passé Composé" icon="⏳">
              <p>
                Auxiliaire + participe passé.
              </p>
       
               <p>esta (être) : terminaison présent de esta + estat(de)</p>
       

              <p>
                abé → abut/abude
              </p>

              <p>
                ha → hèyt/hèyte
              </p>

              <p>
                prénẹ → prés/prése
              </p>
               <p>
                dise → dit/dite
              </p>
            </Card>
   <Card title="Passé Surcomposé " icon="💡">
             <p>
              Une action dans le sens → « il m&apos;est arrivé de + infinitif »
              </p>
              <p>
               On insère abut ou estat entre l&apos;auxiliaire et le participe
              </p>
       
               <p>Qu&apos;èy abut tribalhat en ouctoùbrẹ. → Il m&apos;est arrivé de trvailler en octobre.</p>
       

            </Card>

             <Card title="Imparfait du Subjonctif" icon="📜">
               <p>⚠ Peu courant !</p>
               <p>3e personne du passé simple + -ssi, -ssẹs, -ssẹ, -ssẹm, -ssẹt, -ssẹn</p>
        <p>
       Exprime de manière emphatique un souhait (souvent un regret) ! </p>
    <p>
         Exemple : Ah, si je savais au moins ce que tu veux ! → Que saboùssi au ménch ço qui bos !   </p>

                <p>
       Auxiliaire à l&apos;imparfait du subjonctif + participe passé = subjonctif plus que parfait  </p>
            </Card>
          </Container>
        </section>
      )}
    </main>
  )
}


  // <Card title="Particularité" icon="⚠">

  // </Card>

  // esta: {
  //     name: 'esta (être)',
  //     tenses: {
  //       present: ['que souy','qu’ès','qu’éy','qu’èm','qu’èt','que soun'],
  //       imparfait: ['qu’èri','qu’ères','qu’ère','qu’èrem','qu’èret','qu’èren'],
  //       futur: ['que serèy','que seras','que sera','que seram','que serat','que seran'],
  //       subjonctif: ['sii','siis','sii','siim','siit','siin'],
  //       conditionnel: ['sii','sies','sie','siem','siet','sien'],
  //       imperatif: ['siis','siim','siit'],
  //       passe: ['terminaison présent de esta + estat(de)']
  //     }
  //   },

  //   abe: {
  //     name: 'abé (avoir)',
  //     tenses: {
  //       present: ['qu’èy','qu’as','qu’a','qu’abém','qu’abét','qu’an'],
  //       imparfait: ['qu’abi / abèbi','qu’abès / abèbes','qu’abè / abèbe','qu’abèm / abèbem','qu’abèt(s) / abèbet(s)','qu’abèn / abèben'],
  //       futur: ['qu’aberèy / aurèy','qu’aberas / auras','qu’abera / aura','qu’aberam / auram','qu’aberat(s) / aurat(s)','qu’aberan / auran'],
  //       subjonctif: ['ayi','ayis','ayi','ayim','ayit','ayin'],
  //       imperatif: ['ayis','ayim','ayit'],
  //       passe: ['terminaison présent de abé + abut']
  //     }
  //   },

  //   // IRRÉGULIERS
  //   ana: {
  //     name: 'ana (aller)',
  //     tenses: {
  //       present: ['que bau','que bas','que ba','que bam','que bat','que ban'],
  //       futur: ['qu’anerèy','qu’aneras','qu’anera','qu’aneram','qu’anerat','qu’aneran'],
  //       subjonctif: ['anii','anis','ani','anim','anit','anin'],
  //       imperatif: ['bén','aném','anat']
  //     }
  //   },

  //   da: {
  //     name: 'da (donner)',
  //     tenses: {
  //       present: ['que dau','que das','que da','que dam','que dat','que dan'],
  //       imperatif: ['da','dém','dat']
  //     }
  //   },

  //   ha: {
  //     name: 'ha (faire)',
  //     tenses: {
  //       present: ['que hèy','que hès','que hè','que hèm','que hèt','que hèn'],
  //       imparfait: ['que hesi','que hesès','que hesè','que hesèm','que hesèt','que hesèn'],
  //       subjonctif: ['hasquii','hasquis','hasqui','hasquim','hasquit','hasquin'],
  //       imperatif: ['hè','hèm','hèt'],
  //       passe: ['verbe avoir + hèyt/hèyte']
  //     }
  //   },

  //   bede: {
  //     name: 'bédẹ (voir)',
  //     tenses: {
  //       present: ['que béy','que béts','que bét','que bedém','que bedét','que bédẹn'],
  //       subjonctif: ['bedii','bedis','bedi','bedim','bedit','bedin'],
  //       imperatif: ['bét','bedém','bedét']
  //     }
  //   },

  //   biene: {
  //     name: 'biénẹ (venir)',
  //     tenses: {
  //       present: ['3e personne : bién'],
  //       subjonctif: ['bienii','bienis','bieni','bienim','bienit','bienin'],
  //       imperatif: ['ça-i','bieném','ça-biét'],
  //       passe: ['etre + bienut/bienude']
  //     }
  //   },

  //   dise: {
  //     name: 'dise (dire)',
  //     tenses: {
  //       present: ['que disi','que dits','que dit','que disém','que disét','que disẹn'],
  //       subjonctif: ['disii','disis','disi','disim','disit','disin'],
  //       passe: ['avoir + dit/dite']
  //     }
  //   },

  //   boule: {
  //     name: 'boùlẹ (vouloir)',
  //     tenses: {
  //       present: ['que bouy','que bos','que bòu','que boulém','que boulét','que bòlen'],
  //       subjonctif: ['boulhii','boulhis','boulhi','boulhim','boulhit','boulhin'],
  //       passe: ['avoir + boulut/boulude']
  //     }
  //   },

  //   sabe: {
  //     name: 'sabé (savoir)',
  //     tenses: {
  //       present: ['que séy','que saps','que sap','que sabém','que sabét','que sàbẹn'],
  //       subjonctif: ['sàpii','sàpiis','sàpi','sàpiim','sàpiit','sàpiin'],
  //       imperatif: ['sàpies','sapiam','sapiat'],
  //       passe: ['avoir + sabut/sabude']
  //     }
  //   },

  //   tiene: {
  //     name: 'tiénẹ (venir)',
  //     tenses: {
  //       present: ['3e personne : que tien'],
  //       subjonctif: ['tienii','tienis','tieni','tienim','tienit','tienin'],
  //       imperatif: ['té','tieném','tienét'],
  //       passe: ['avoir + tienut/tienude']
  //     }
  //   },

  //   prene: {
  //     name: 'prénẹ (prendre)',
  //     tenses: {
  //       present: ['3e personne : que prén'],
  //       subjonctif: ['prenii','prenis','preni','prenim','prenit','prenin'],
  //       imperatif: ['prén','preném','prenét'],
  //       passe: ['avoir + prés/prése']
  //     }
  //   },

  //   crede: {
  //     name: 'crédẹ (croire)',
  //     tenses: {
  //       present: ['que créy','que crédẹs','que crét','que credém','que credét','que crédẹn'],
  //       subjonctif: ['crédii','crédis','crédi','crédim','crédit','crédin'],
  //       imperatif: ['crét','credém','credét'],
  //       passe: ['avoir + credut/credude']
  //     }
  //   },

  //   poudut: {
  //     name: 'poudut (pouvoir)',
  //     tenses: {
  //       present: ['que pouch','que pots','que pot','que poudém','que poudét','que pòdẹn'],
  //       subjonctif: ['pouchquii','pouchquis','pouchqui','pouchquim','pouchquit','pouchquin'],
  //       passe: ['avoir + poudut/poudude']
  //     }
  //   }

  // }





function Container({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'grid',
        gap: '1.5rem',
      }}
    >
      {children}
    </div>
  )
}

function Card({
  title,
  icon,
  children,
}: {
  title: string
  icon: string
  children: React.ReactNode
}) {
  return (
    <div
      style={{
        background:
          'linear-gradient(180deg,#fff9de,#fff4cc)',
        borderRadius: 24,
        padding: '2rem',
        border: '2px solid #f3c623',
        boxShadow:
          '0 10px 25px rgba(42,12,69,.08)',
      }}
    >
      <div
        style={{
          fontSize: '2rem',
          marginBottom: '1rem',
        }}
      >
        {icon}
      </div>

      <h3
        style={{
          color: '#2a0c45',
          marginTop: 0,
        }}
      >
        {title}
      </h3>

      <div
        style={{
          color: '#6b4b7a',
          lineHeight: 1.8,
        }}
      >
        {children}
      </div>
    </div>
  )
}