import type { Metadata } from 'next'
import CarriereClient from './CarriereClient'

export const metadata: Metadata = {
  title: 'Carrière de Jade Célérier | Parcours et statistiques',
  description:
    'Découvrez la carrière de Jade Célérier, basketteuse française : parcours, statistiques, clubs et moments marquants.',
}

export default function Page() {
  return <CarriereClient />
}