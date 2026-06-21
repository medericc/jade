import type { Metadata } from 'next'
import ConjuClient from './ConjuClient'

export const metadata = {
  title: "Conjugaison béarnaise complète | Présent, futur, passé et subjonctif",
  description:
    "Apprenez la conjugaison béarnaise avec des règles détaillées, les temps verbaux, les verbes irréguliers, des exemples et les participes en langue béarnaise.",
}

export default function Page() {
  return <ConjuClient />
}