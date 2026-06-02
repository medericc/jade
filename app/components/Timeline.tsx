// components/Timeline.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Periode = {
  annee: string;
  titre: string;
  description: string;
  slug: string;
};



const periodes: Periode[] = [
  // {
  //   annee: "Antiquité",
  //   titre: "Peuple des Venarni", 
  //   description: "Les premières traces de peuplement dans les Pyrénées béarnaises",
  //   slug: 'antiquite',
  // },

  
  {
    annee: "XIIe-XIVe siècle",
    titre: "Formation du Béarn médiéval", 
    description: "Émergence de la vicomté de Béarn",
    slug: 'fondement',
  },
 {
    annee: "XIVe siècle", 
    titre: "La Souveraineté",
    description: "Sous Fébus, le Béarn atteint son apogée politique",
    slug: 'souverain',
  },
 {
    annee: "XIVe-XVIe siècle", 
   titre: "L'Affirmation Béarnaise",
    description: "Les États en affirmation définitivement l'indépendance",
    slug: 'republique',
  },
   {
    annee: "XVIe siècle", 
    titre: "Union avec la Navarre",
    description: "Union, perte de territoire mais affermissement de leur pouvoir",
    slug: 'navarre',
  }
  
  ,


  {
    annee: "XVIIe siècle", 
    titre: "Sous la Monarchie Absolue",
    description: "Le Béarn dirigeait depuis la région parisienne",
    slug: 'monarchie-absolue',
  }
  ,
   
  {
    annee: "XVIIIe siècle", 
    titre: "Le Béarn sous la Terreur",
    description: "Jusqu'à l'assassinat de Maximilien de Robespierre...",
    slug: 'la-terreur',
  }



  
];
const periodes2: Periode[] = [
  // {
  //   annee: "Antiquité",
  //   titre: "Peuple des Venarni", 
  //   description: "Les premières traces de peuplement dans les Pyrénées béarnaises",
  //   slug: 'antiquite',
  // },

  {
    annee: "Ie-Ve siècle",
    titre: "Naissance de l'Eglise", 
    description: "Les Enseignements du Christ",
    slug: 'eglise',
  },
  {
    annee: "Ve-VIIe siècle",
    titre: "Les Mérovingiens", 
    description: "La Naissance de la France",
    slug: 'naissance-france',
  },
 {
    annee: "IXe-XIVe siècle", 
    titre: "Les Capétiens",
    description: "De Charlemagne à Gaston Fébus",
    slug: 'capet',
  },
 {
    annee: "XVe-XVIe siècle", 
   titre: "La Pucelle d'Orléans",
    description: "La Providence démarre de Lorraine",
    slug: 'sainte-jeanne',
  }
  
  ,
   {
    annee: "XVIe-XVIIIe siècle", 
    titre: "Les Protestants",
    description: "Une hérésie se disperse à travers l'Europe",
    slug: 'calviniste',
  }
  
  ,
  {
    annee: "XVIIIe siècle", 
    titre: "La Révolution",
    description: "Les Républicains prennent Paris",
    slug: 'paris',
  }
  
  ,

  {
    annee: "XVIIIe-XIXe siècle", 
    titre: "Sous la Terreur",
    description: "La République s'impose en France",
    slug: 'revolution-france',
  }
  ,
   
  {
    annee: "XIXe-XXe siècle", 
    titre: "Le Monde des Banques",
    description: "L'être humain est objet...",
    slug: 'technologie',
  }
];

export default function Timeline() {
  const [mode, setMode] = useState<'bearn' | 'monde'>('bearn');

  const data = mode === 'bearn' ? periodes : periodes2;

  return (
    <div className="relative py-7">
     
     
     <div
  style={{
    position: 'absolute',
    top: '-3rem',
    right: 'clamp(.5rem, 3vw, 2rem)',
    zIndex: 10,
  }}
>
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      background: '#fff',
      border: '2px solid #f3c623',
      borderRadius: '999px',
      padding: '4px',
      boxShadow: '0 6px 18px rgba(42,12,69,.08)',
    }}
  >
    <button
      style={{
        border: 'none',
        background: '#2a0c45',
        color: '#fff',
        fontWeight: 700,
        padding: '.6rem .9rem',
        borderRadius: '999px',
        cursor: 'pointer',
        fontSize: '1.1rem',
      }}
    >
      🇫🇷
    </button>

    <button
      style={{
        border: 'none',
        background: 'transparent',
        color: '#2a0c45',
        fontWeight: 700,
        padding: '.6rem .9rem',
        borderRadius: '999px',
        cursor: 'pointer',
        fontSize: '1.1rem',
      }}
    >
      🏴
    </button>
  </div>
</div>
     
      {/* Boutons */}
      <div className="flex justify-center mb-14">
        <div
          style={{
            background: '#fff',
            border: '2px solid #f3c623',
            borderRadius: '999px',
            padding: '0.3rem',
            display: 'flex',
            boxShadow: '0 10px 25px rgba(42,12,69,.08)',
          }}
        >
          <button
            onClick={() => setMode('bearn')}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '999px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 700,
              transition: 'all .25s ease',
              background:
                mode === 'bearn' ? '#2a0c45' : 'transparent',
              color:
                mode === 'bearn' ? '#fff' : '#2a0c45',
            }}
          >
            Béarn
          </button>

          <button
            onClick={() => setMode('monde')}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '999px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 700,
              transition: 'all .25s ease',
              background:
                mode === 'monde' ? '#2a0c45' : 'transparent',
              color:
                mode === 'monde' ? '#fff' : '#2a0c45',
            }}
          >
            Monde
          </button>
        </div>
      </div>

      {/* Ligne centrale */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 hidden md:block"
        style={{
          width: '4px',
          height: '100%',
          background:
            'linear-gradient(180deg,#f3c623,#d8a514)',
          borderRadius: '999px',
        }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
          className="space-y-8 md:space-y-12"
        >
          {data.map((periode, index) => (
            <motion.div
              key={periode.slug}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -30 : 30,
              }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0
                  ? 'md:flex-row'
                  : 'md:flex-row-reverse'
              } items-center`}
            >
              {/* Carte */}
              <div className="w-full md:w-1/2 p-4 md:p-6">
                <div
                  style={{
                    background:
                      'linear-gradient(180deg,#ffffff,#faf6ff)',
                    padding: '1.75rem',
                    borderRadius: '22px',
                    border: '2px solid #f3c623',
                    boxShadow:
                      '0 10px 25px rgba(42,12,69,.08)',
                    transition: 'all .25s ease',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      background:
                        'linear-gradient(135deg,#2a0c45,#4a2272)',
                      color: 'white',
                      padding: '0.4rem 0.9rem',
                      borderRadius: '999px',
                      fontSize: '.9rem',
                      fontWeight: 700,
                      marginBottom: '1rem',
                    }}
                  >
                    {periode.annee}
                  </span>

                  <h3
                    style={{
                      color: '#2a0c45',
                      fontSize: '1.6rem',
                      fontWeight: 800,
                      marginBottom: '.75rem',
                    }}
                  >
                    {periode.titre}
                  </h3>

                  <p
                    style={{
                      color: '#6b4b7a',
                      lineHeight: 1.8,
                    }}
                  >
                    {periode.description}
                  </p>

                  <Link
                    href={`/apprendre/culture/histoire/${periode.slug}`}
                    style={{
                      display: 'inline-block',
                      marginTop: '1rem',
                      color: '#f3c623',
                      fontWeight: 700,
                      textDecoration: 'none',
                    }}
                  >
                    En savoir plus →
                  </Link>
                </div>
              </div>

              {/* Point timeline */}
              <div className="w-full md:w-1/2 flex justify-center items-center py-4 md:py-0">
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    background:
                      'linear-gradient(135deg,#f3c623,#d8a514)',
                    borderRadius: '999px',
                    border: '4px solid white',
                    boxShadow:
                      '0 8px 20px rgba(42,12,69,.25)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      background: '#fff',
                      borderRadius: '999px',
                    }}
                  />
                </div>
              </div>

              {/* Espace */}
              <div className="hidden md:block w-1/2" />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}