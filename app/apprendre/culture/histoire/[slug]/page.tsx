
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import HistoireAnalyse from './HistoireAnalyse';
import ExpandableSection from '../../../../components/ExpandableSection';
import { histoireData } from '../../../../../data/culture/bearn';
import { worldData } from '../../../../../data/culture/monde';

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
  histoireData[
    slug as keyof typeof histoireData
  ] ??
  worldData[
    slug as keyof typeof worldData
  ];
  
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

const pageData =
  histoireData[
    slug as keyof typeof histoireData
  ] ??
  worldData[
    slug as keyof typeof worldData
  ];
console.log('slug =', slug);
console.log(
  'keys bearn =',
  Object.keys(histoireData)
);
if (!pageData) notFound();

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



  {/* ANALYSE */}

  <section
    style={{
     padding: '3rem 1rem 5rem'
      
    }}
  >
    <div
      style={{
        maxWidth: '950px',
        margin: '0 auto',
      }}
    >
    <HistoireAnalyse
  sections={pageData.sections}
/>
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
      href="/apprendre/culture"
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