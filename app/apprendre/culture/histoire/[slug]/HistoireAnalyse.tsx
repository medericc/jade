'use client';

import { Children , useState, ReactElement } from 'react';
import ExpandableSection from '../../../../components/ExpandableSection';

type Section = {
  titre: string;
  contenu: ReactElement<{
    children: ReactElement[];
  }>;
};

export default function HistoireAnalyse({
  sections,
}: {
  sections: Section[];
}) {
  const [langue, setLangue] = useState<'fr' | 'be'>('fr');

  return (
    <>
      {/* Header Analyse */}
      <div
        style={{
          position: 'relative',
          textAlign: 'center',
          marginBottom: '3rem',
        }}
      >
        {/* Toggle en haut droite */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
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
              boxShadow:
                '0 6px 18px rgba(42,12,69,.08)',
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
                color:
                  langue === 'be'
                    ? '#fff'
                    : '#2a0c45',
                fontWeight: 700,
                padding: '.65rem 1rem',
                borderRadius: '999px',
                cursor: 'pointer',
              }}
            >
              🏴
            </button>
          </div>
        </div>

        <div
          style={{
            color: '#f3c623',
            fontWeight: 700,
            letterSpacing: '.15em',
            textTransform: 'uppercase',
            marginBottom: '.75rem',
          }}
        >
          📜 Analyse
        </div>

        <h2
          style={{
            color: '#2a0c45',
            fontSize: 'clamp(2rem,4vw,3rem)',
            fontWeight: 800,
            marginBottom: '1rem',
          }}
        >
          Analyse détaillée
        </h2>

        <p
          style={{
            color: '#6b4b7a',
            lineHeight: 1.8,
          }}
        >
          Explorez les différents aspects de cette période.
        </p>
      </div>

     {sections?.map((section, index) => {
  const children = Children.toArray(
    section.contenu?.props?.children
  );

  return (
    <ExpandableSection
      key={index}
      titre={section.titre}
      defaultOpen={index === 0}
      enfants={
        <div
          style={{
            color: '#6b4b7a',
            lineHeight: 1.9,
          }}
        >
          {langue === 'fr'
            ? children[0]
            : children[1] ?? children[0]}
        </div>
      }
    />
  );
})}
    </>
  );
}