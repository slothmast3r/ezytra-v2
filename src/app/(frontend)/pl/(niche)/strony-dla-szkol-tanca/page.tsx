import type { Metadata } from 'next'
import { NicheLanding } from '../../_components/NicheLanding'
import { szkolyTanca } from '../../_content/szkoly-tanca'
import { SITE_DATA } from '../../../data'

export const metadata: Metadata = {
  title: szkolyTanca.meta.title,
  description: szkolyTanca.meta.description,
  alternates: {
    canonical: `${SITE_DATA.url}/pl/${szkolyTanca.slug}`,
  },
  openGraph: {
    title: szkolyTanca.meta.ogTitle,
    description: szkolyTanca.meta.description,
    url: `${SITE_DATA.url}/pl/${szkolyTanca.slug}`,
    locale: 'pl_PL',
    type: 'website',
  },
}

export default function Page() {
  return <NicheLanding content={szkolyTanca} />
}
