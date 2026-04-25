'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ConjugaisonPage() {

  const [tab, setTab] = useState('verbs')
  const [verb, setVerb] = useState('esta')
  const [tense, setTense] = useState('present')

  const verbs = {

    // AUXILIAIRES
    esta: {
      name: 'esta (être)',
      tenses: {
        present: ['que souy','qu’ès','qu’éy','qu’èm','qu’èt','que soun'],
        imparfait: ['qu’èri','qu’ères','qu’ère','qu’èrem','qu’èret','qu’èren'],
        futur: ['que serèy','que seras','que sera','que seram','que serat','que seran'],
        subjonctif: ['sii','siis','sii','siim','siit','siin'],
        conditionnel: ['sii','sies','sie','siem','siet','sien'],
        imperatif: ['siis','siim','siit'],
        passe: ['terminaison présent de esta + estat(de)']
      }
    },

    abe: {
      name: 'abé (avoir)',
      tenses: {
        present: ['qu’èy','qu’as','qu’a','qu’abém','qu’abét','qu’an'],
        imparfait: ['qu’abi / abèbi','qu’abès / abèbes','qu’abè / abèbe','qu’abèm / abèbem','qu’abèt(s) / abèbet(s)','qu’abèn / abèben'],
        futur: ['qu’aberèy / aurèy','qu’aberas / auras','qu’abera / aura','qu’aberam / auram','qu’aberat(s) / aurat(s)','qu’aberan / auran'],
        subjonctif: ['ayi','ayis','ayi','ayim','ayit','ayin'],
        imperatif: ['ayis','ayim','ayit'],
        passe: ['terminaison présent de abé + abut']
      }
    },

    // IRRÉGULIERS
    ana: {
      name: 'ana (aller)',
      tenses: {
        present: ['que bau','que bas','que ba','que bam','que bat','que ban'],
        futur: ['qu’anerèy','qu’aneras','qu’anera','qu’aneram','qu’anerat','qu’aneran'],
        subjonctif: ['anii','anis','ani','anim','anit','anin'],
        imperatif: ['bén','aném','anat']
      }
    },

    da: {
      name: 'da (donner)',
      tenses: {
        present: ['que dau','que das','que da','que dam','que dat','que dan'],
        imperatif: ['da','dém','dat']
      }
    },

    ha: {
      name: 'ha (faire)',
      tenses: {
        present: ['que hèy','que hès','que hè','que hèm','que hèt','que hèn'],
        imparfait: ['que hesi','que hesès','que hesè','que hesèm','que hesèt','que hesèn'],
        subjonctif: ['hasquii','hasquis','hasqui','hasquim','hasquit','hasquin'],
        imperatif: ['hè','hèm','hèt'],
        passe: ['verbe avoir + hèyt/hèyte']
      }
    },

    bede: {
      name: 'bédẹ (voir)',
      tenses: {
        present: ['que béy','que béts','que bét','que bedém','que bedét','que bédẹn'],
        subjonctif: ['bedii','bedis','bedi','bedim','bedit','bedin'],
        imperatif: ['bét','bedém','bedét']
      }
    },

    biene: {
      name: 'biénẹ (venir)',
      tenses: {
        present: ['3e personne : bién'],
        subjonctif: ['bienii','bienis','bieni','bienim','bienit','bienin'],
        imperatif: ['ça-i','bieném','ça-biét'],
        passe: ['etre + bienut/bienude']
      }
    },

    dise: {
      name: 'dise (dire)',
      tenses: {
        present: ['que disi','que dits','que dit','que disém','que disét','que disẹn'],
        subjonctif: ['disii','disis','disi','disim','disit','disin'],
        passe: ['avoir + dit/dite']
      }
    },

    boule: {
      name: 'boùlẹ (vouloir)',
      tenses: {
        present: ['que bouy','que bos','que bòu','que boulém','que boulét','que bòlen'],
        subjonctif: ['boulhii','boulhis','boulhi','boulhim','boulhit','boulhin'],
        passe: ['avoir + boulut/boulude']
      }
    },

    sabe: {
      name: 'sabé (savoir)',
      tenses: {
        present: ['que séy','que saps','que sap','que sabém','que sabét','que sàbẹn'],
        subjonctif: ['sàpii','sàpiis','sàpi','sàpiim','sàpiit','sàpiin'],
        imperatif: ['sàpies','sapiam','sapiat'],
        passe: ['avoir + sabut/sabude']
      }
    },

    tiene: {
      name: 'tiénẹ (venir)',
      tenses: {
        present: ['3e personne : que tien'],
        subjonctif: ['tienii','tienis','tieni','tienim','tienit','tienin'],
        imperatif: ['té','tieném','tienét'],
        passe: ['avoir + tienut/tienude']
      }
    },

    prene: {
      name: 'prénẹ (prendre)',
      tenses: {
        present: ['3e personne : que prén'],
        subjonctif: ['prenii','prenis','preni','prenim','prenit','prenin'],
        imperatif: ['prén','preném','prenét'],
        passe: ['avoir + prés/prése']
      }
    },

    crede: {
      name: 'crédẹ (croire)',
      tenses: {
        present: ['que créy','que crédẹs','que crét','que credém','que credét','que crédẹn'],
        subjonctif: ['crédii','crédis','crédi','crédim','crédit','crédin'],
        imperatif: ['crét','credém','credét'],
        passe: ['avoir + credut/credude']
      }
    },

    poudut: {
      name: 'poudut (pouvoir)',
      tenses: {
        present: ['que pouch','que pots','que pot','que poudém','que poudét','que pòdẹn'],
        subjonctif: ['pouchquii','pouchquis','pouchqui','pouchquim','pouchquit','pouchquin'],
        passe: ['avoir + poudut/poudude']
      }
    }

  }

  const pronouns = ['You','Tu','Éth/Ére','Nousauts','Bousauts','Eths/Éres']

  const currentVerb = verbs[verb as keyof typeof verbs]
  const currentTense = currentVerb.tenses[tense as keyof typeof currentVerb.tenses]

  return (
    <main style={{ padding: 20, maxWidth: 1200, margin: 'auto' }}>

      <Link href="/apprendre">← Retour</Link>

      <h1 style={{ fontSize: 32, margin: '20px 0' }}>
        Conjugason
      </h1>

      {/* TABS */}
      <div style={{ display: 'flex', gap: 10 }}>
        <button onClick={()=>setTab('verbs')}>Verbes</button>
        <button onClick={()=>setTab('rules')}>Règles</button>
      </div>

      {tab === 'verbs' && (
        <>
          <select value={verb} onChange={(e)=>setVerb(e.target.value)}>
            {Object.entries(verbs).map(([k,v])=>(
              <option key={k} value={k}>{v.name}</option>
            ))}
          </select>

          <select value={tense} onChange={(e)=>setTense(e.target.value)}>
            {Object.keys(currentVerb.tenses).map(t=>(
              <option key={t}>{t}</option>
            ))}
          </select>

          <div style={{ marginTop:20 }}>
            {Array.isArray(currentTense) && currentTense.length === 6 ? (
              currentTense.map((f,i)=>(
                <div key={i}>
                  <strong>{pronouns[i]}</strong> — {f}
                </div>
              ))
            ) : (
              <div>{currentTense}</div>
            )}
          </div>
        </>
      )}

      {tab === 'rules' && (
        <div style={{ marginTop:20, lineHeight:1.6 }}>
            <p>Le pronom personnel sujet ne s&lsquo;écrit pas, on débute par &quot;que&quot;.</p>
          <p>Le Participe présent se forme avec infinitif +n.</p>
          <p>Le participe passé se forme avec a/u/i + t/de si féminin.</p>

          <h3>Présent</h3>
          <p>1e groupe : i, es, e, am, at, en</p>
          <p>2e groupe : i, es, radical, ém, ét, ẹn</p>
          <p>3e groupe : i, s, -, im, it, in</p>

          <h3>Futur</h3>
          <p>infinitif + r + èy, as, a, am, at, an</p>

          <h3>Conditionnel</h3>
          <p>infinitif + i, és, é, ém, ét, én</p>

          <h3>Imparfait</h3>
          <p>1e groupe : àbi, abes, abe...</p>
          <p>2e groupe : ni, nès...</p>
          <p>3e groupe : ibi, ibes...</p>

          <h3>Impératif</h3>
          <p>canta → cante, cantém, cantat</p>
          <p>bené → bén, beném, benét</p>
          <p>droumi → droum, droumim, doumit</p>

          <h3>Subjonctif</h3>
          <p>radical + i, is, i, im, it, in</p>
        </div>
      )}

    </main>
  )
}