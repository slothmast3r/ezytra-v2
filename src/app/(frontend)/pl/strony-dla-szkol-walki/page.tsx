import type { Metadata } from 'next'
import { NicheLanding } from '../_components/NicheLanding'
import { szkolyWalki } from '../_content/szkoly-walki'
import { SITE_DATA } from '../../data'

export const metadata: Metadata = {
  title: szkolyWalki.meta.title,
  description: szkolyWalki.meta.description,
  alternates: {
    canonical: `${SITE_DATA.url}/pl/${szkolyWalki.slug}`,
  },
  openGraph: {
    title: szkolyWalki.meta.ogTitle,
    description: szkolyWalki.meta.description,
    url: `${SITE_DATA.url}/pl/${szkolyWalki.slug}`,
    locale: 'pl_PL',
    type: 'website',
  },
}

export default function Page() {
  return <NicheLanding content={szkolyWalki} />
}
