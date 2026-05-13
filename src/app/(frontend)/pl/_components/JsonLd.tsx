import React from 'react'
import type { NicheContent } from '../_content/types'
import { SITE_DATA } from '../../data'

export function JsonLd({ content }: { content: NicheContent }) {
  const serviceName =
    content.niche === 'walki'
      ? 'Projektowanie stron internetowych dla klubów sztuk walki'
      : 'Projektowanie stron internetowych dla szkół tańca'

  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${SITE_DATA.url}/pl/${content.slug}#business`,
        name: SITE_DATA.brand,
        url: `${SITE_DATA.url}/pl/${content.slug}`,
        email: SITE_DATA.email,
        founder: SITE_DATA.name,
        areaServed: 'Warszawa, Polska',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Warszawa',
          addressCountry: 'PL',
        },
      },
      {
        '@type': 'Service',
        name: serviceName,
        provider: { '@id': `${SITE_DATA.url}/pl/${content.slug}#business` },
        areaServed: 'Warszawa',
        description: content.meta.description,
      },
      {
        '@type': 'FAQPage',
        mainEntity: content.faq.items.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
