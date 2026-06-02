
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import ExpandableSection from '../../../components/ExpandableSection';
import { histoireData } from '../../../../data/culture/bearn';
import { worldData } from '../../../../data/culture/monde';

export async function generateMetadata(
props: {
params: Promise<{
categorie: string;
slug: string;
}>;
}
): Promise<Metadata> {
const { categorie, slug } = await props.params;

const dataSource =
categorie === 'monde'
? worldData
: histoireData;

const data =
dataSource[slug as keyof typeof dataSource];

if (!data) {
return {
title: 'Page non trouvée',
};
}

return {
title: `${data.titre} • Histoire du Béarn`,
description: data.resume,
};
}

export default async function HistoireDetailPage(
props: {
params: Promise<{
categorie: string;
slug: string;
}>;
}
) {
const { categorie, slug } =
await props.params;

const dataSource =
categorie === 'monde'
? worldData
: histoireData;

const pageData =
dataSource[
slug as keyof typeof dataSource
];

if (!pageData) notFound();

return (
<main
style={{
background: '#f3eef8',
minHeight: '100vh',
}}
>
{/* HERO */}

```
  <section
    style={{
      background:
        'linear-gradient(180deg,#2a0c45 0%, #3f1764 100%)',
      padding: '6rem 1rem',
      textAlign: 'center',
    }}
  >
    <div
      style={{
        maxWidth: '1000px',
        margin: '0 auto',
      }}
    >
      <span
        style={{
          display: 'inline-block',
          background: '#f3c623',
          color: '#2a0c45',
          padding: '.55rem 1rem',
          borderRadius: '999px',
          fontWeight: 800,
          marginBottom: '1.5rem',
        }}
      >
        {pageData.periode}
      </span>

      <h1
        style={{
          color: '#fff',
          fontSize:
            'clamp(2.5rem,6vw,4.5rem)',
          fontWeight: 800,
          marginBottom: '1.5rem',
        }}
      >
        {pageData.titre}
      </h1>

      <p
        style={{
          color: '#d8c7e8',
          maxWidth: '850px',
          margin: '0 auto',
          lineHeight: 1.8,
          fontSize: '1.15rem',
        }}
      >
        {pageData.resume}
      </p>
    </div>
  </section>

  {/* INTRO */}

  <section
    style={{
      padding: '5rem 1rem',
    }}
  >
    <div
      style={{
        maxWidth: '950px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          background:
            'linear-gradient(180deg,#fff9de,#fff4cc)',
          borderRadius: '24px',
          padding: '2rem',
          border:
            '2px solid #f3c623',
          boxShadow:
            '0 10px 25px rgba(42,12,69,.08)',
        }}
      >
        <p
          style={{
            color: '#2a0c45',
            lineHeight: 1.9,
            fontSize: '1.1rem',
            textAlign: 'center',
            margin: 0,
          }}
        >
          {pageData.introduction}
        </p>
      </div>
    </div>
  </section>

  {/* ANALYSE */}

  <section
    style={{
      padding: '0 1rem 5rem',
    }}
  >
    <div
      style={{
        maxWidth: '950px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          marginBottom: '3rem',
        }}
      >
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
            fontSize:
              'clamp(2rem,4vw,3rem)',
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
          Explorez les différents
          aspects de cette période.
        </p>
      </div>

      <div>
        {pageData.sections?.map(
          (section, index) =>
            section && (
              <ExpandableSection
                key={index}
                titre={section.titre}
                enfants={
                  <div
                    style={{
                      color:
                        '#6b4b7a',
                      lineHeight: 1.9,
                    }}
                  >
                    {section.contenu}
                  </div>
                }
                defaultOpen={
                  index === 0
                }
              />
            )
        )}
      </div>
    </div>
  </section>

  {/* RETOUR */}

  <section
    style={{
      padding:
        '0 1rem 5rem',
      textAlign: 'center',
    }}
  >
    <Link
      href="/histoire-condense"
      style={{
        textDecoration: 'none',
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '.75rem',
          background: '#fff',
          border:
            '2px solid #f3c623',
          borderRadius: '999px',
          padding:
            '1rem 1.75rem',
          color: '#2a0c45',
          fontWeight: 700,
          boxShadow:
            '0 10px 25px rgba(42,12,69,.08)',
        }}
      >
        <span>←</span>
        Retour à la chronologie
      </div>
    </Link>
  </section>
</main>
);
}   