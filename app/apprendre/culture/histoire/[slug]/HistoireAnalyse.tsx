'use client';

import { ReactNode, useState, useEffect } from 'react';
import ExpandableSection from '../../../../components/ExpandableSection';

type Section = {
  titre: string;
  fr: ReactNode;
  be: ReactNode;
};

export default function HistoireAnalyse({
  sections,
}: {
  sections: Section[];
}) {
  const [langue, setLangue] = useState<'fr' | 'be'>('fr');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);

    check();
    window.addEventListener('resize', check);

    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <>
      {/* Header Analyse */}
      <div
        style={{
          position: 'relative',
          textAlign: 'center',
          marginBottom: '2.5rem',
        }}
      >
        {/* Toggle */}
        <div
          style={{
            position: isMobile ? 'static' : 'absolute',
            top: isMobile ? undefined : 0,
            right: isMobile ? undefined : 0,
            display: 'flex',
            justifyContent: isMobile ? 'flex-end' : undefined,
            marginBottom: isMobile ? '2.5rem' : 0,
            paddingRight: isMobile ? '1rem' : 0,
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
                 <img
    src="/fra.png"
    alt="France"
    style={{
      width: '24px',
      height: '24px',
      objectFit: 'contain',
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
               <img
    src="/bearn.png"
    alt="Béarn"
    style={{
      width: '26px',
      height: '26px',
      objectFit: 'contain',
    }}
  />
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

      {sections?.map((section, index) => (
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
                ? section.fr
                : section.be}
            </div>
          }
        />
      ))}
    </>
  );
}