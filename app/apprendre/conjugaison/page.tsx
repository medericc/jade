'use client'

import { useState } from 'react'
import Link from 'next/link'

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
            Conjugason
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

      {/* SELECT */}

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
          <select
            value={section}
            onChange={(e) => setSection(e.target.value)}
            style={{
              width: '100%',
              padding: '1rem',
              borderRadius: 18,
              border: '2px solid #f3c623',
              fontSize: '1rem',
              fontWeight: 700,
              color: '#2a0c45',
            }}
          >
            {sections.map((s) => (
              <option key={s.key} value={s.key}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* PRONOMS */}

      {section === 'pronoms' && (
        <section style={{ padding: '0 1rem 5rem' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <Card
              title="Pronom personnel"
              icon="📝"
            >
              <p>
                Le pronom personnel sujet ne s’écrit généralement pas,
                la conjugaison débute par « que ».
              </p>

              <p>
                Pronoms :
                You · Tu · Éth/Éra · Nousauts · Bousauts · Eths/Éras
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

               <p>bédẹ « voir » → bis/biste</p> <p>bìbẹ « vivre » → biscut/biscude</p>  <p>còsẹ « cuire » → coéyt/coéyte</p>   <p>plàgnẹ « plaindre » → plangut/plagnut</p> <p>plàsẹ « plaire » → plagut/plasut</p>  <p>tòrsẹ « tordre » → tourcut/toursut</p>
                <p>3e groupe : <p>aubri « ouvrir » → ubèr(t)/aubrit</p> <p>aufri « offrir » → aufèr(t)/aufrit</p> <p>coubri / croubi « couvrir » → coubèr(t)/coubrit</p> <p>mouri « mourir » → mour(t)/mourte</p> <p>soufri « souffrir » → soufèr(t)/soufrit</p></p>
        
            </Card>
          </div>
        </section>
      )}

      {/* PRESENT */}

      {section === 'present' && (
        <section style={{ padding: '0 1rem 5rem' }}>
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
              forme variable : si b,d,s,l,z changement phonétique comme béb/councéb devient éu, hob/embob/cab/esmàb donne p ou debèrz/espàrz donne debèrs/espars, mais aucun si –m, -n, -p, -r, -t, -y
            </Card>

            <Card title="3e groupe" icon="📖">
              <p>
                Radical + éch? + i, s, -, im, it, in.
              </p>

            </Card>

  

            <Card title="Particularité" icon="⚠">
              <p>
                Le verbe prénẹ, biénẹ ou tiénẹ possède une irrégularité au présent.
              </p>

              <p>
                À la 3e personne :
                que prén, que bién, que tién
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
        <section style={{ padding: '0 1rem 5rem' }}>
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
                Exemple :
                serèy · seras · sera · seram · serat · seran
              </p>
            </Card>
  <Card title="Futur Irrégulier" icon="⚠">
              <p>esta (être): que serèy , que seras , que sera , que seram , que serat , que seran </p>
              <p>abé (avoir) : qu’aberèy / aurèy , qu’aberas / auras , qu’abera / aura , qu’aberam / auram , qu’aberat(s) / aurat(s) , qu’aberan / auran </p>
              <p>ana (aller) : qu’anerèy , qu’aneras , qu’anera , qu’aneram , qu’anerat , qu’aneran </p>
            </Card>
            <Card title="Conditionnel" icon="✨">
              <p>
                Infinitif sans accent + r + i, és, é, ém, ét, én.
              </p>
                <p>
                Pour certains verbes du premier groupe,
                le « a » de l’infinitif peut devenir « e » comme ana.
              </p>
            </Card>

          </Container>
        </section>
      )}

      {/* SUBJONCTIF */}

      {section === 'subjonctif' && (
        <section style={{ padding: '0 1rem 5rem' }}>
          <Container>

            <Card title="Subjonctif" icon="✠">
              <p>
                Radical + i + -, s, -, m, t, n.
              </p>
 <p>
              Sauf pour nous et vous, on appuie sur la 1ère syllabe (&#34;`&#34; pour le 1er groupe, &#34;´&#34; pour les autres))
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
             <p>esta (être): sii , siis , sii , siim , siit , siin</p>
                  <p>abé (avoir): radical : ay</p>
              <p>ha (faire) : radical : hasqu</p>
           <p>boulẹ (vouloir): radical : boulh</p>
              <p>sabé (savoir) : radical : sap</p>
         <p>poudé (pouvoir): radical : pouchqu</p>
            </Card>

            <Card title="Impératif" icon="📢">
              <p>
                canta → cante, cantém, cantat
              </p>

              <p>
                bené → bén, beném, benét
              </p>

              <p>
                droumi → droum, droumim, droumit
              </p>

              <p>
                L’impératif négatif utilise le présent du subjonctif : Ne càntes pas !
              </p>
            </Card>
<Card title="Impératif Irrégulier" icon="⚠">
                   <p>esta (être) : siis , siim , siit</p>
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
        <section style={{ padding: '0 1rem 5rem' }}>
          <Container>

            <Card title="Imparfait" icon="📜">
              <p>1er groupe : àbi, abes, abe, àbem, àbet, aben</p>
              <p>2e groupe : i, ès, è, èm, èt, èn</p>
              <p>3e groupe : ibi, ibes, ibe, ibem, ibet, iben</p>
            </Card>
             <Card title="Imparfait Irrégulier" icon="⚠">
              <p>esta (être) : qu’èri , qu’ères , qu’ère , qu’èrem , qu’èret , qu’èren </p>
              <p>abé (avoir): qu’abi / abèbi , qu’abès / abèbes , qu’abè / abèbe , qu’abèm / abèbem , qu’abèt(s) / abèbet(s) , qu’abèn / abèben </p>
              <p>ha (faire) : que hesi , que hesès , que hesè , que hesèm , que hesèt , que hesèn </p>
            </Card>

            <Card title="Passé Simple" icon="🏛">
              <p>
                1er groupe :
                radical + èy, ès, è, èm, èt, èn
              </p>

              <p>
                2e groupe :
                radical (ajout de g parfois, d remplacé par g et gn devient ng) + ouy, ous, ou, oum, out, oun
              </p>

              <p>
                3e groupe :
                radical + i, is, i, im, it, in
              </p>
            </Card>

        <Card title="Passé Simple Irrégulier" icon="⚠">
              
               <p>On utilise &ldquo;balha&ldquo; « donner » plutôt que &ldquo;da&ldquo; « donner » au passé simple</p> 
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



            <Card title="Passé Composé" icon="⏳">
              <p>
                Auxiliaire + participe passé.
              </p>

              <p>
                esta → estat
              </p>

              <p>
                abé → abut
              </p>

              <p>
                ha → hèyt
              </p>

              <p>
                prénẹ → prés
              </p>
            </Card>
 <Card title="Passé Composé Irrégulier" icon="⚠">
              <p>esta (être) : terminaison présent de esta + estat(de)</p>
              <p>abé (avoir): terminaison présent de abé + abut</p>
              <p>ha (faire) : terminaison présent de abé + hèyt/hèyte</p>
              <p>dise (dire) : terminaison présent de abé + dit/dite</p>
         <p>prénẹ (prendre) : terminaison présent de abé + prés/prése</p>
         
        
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

      <h2
        style={{
          color: '#2a0c45',
          marginTop: 0,
        }}
      >
        {title}
      </h2>

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