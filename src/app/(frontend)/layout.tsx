import { IBM_Plex_Mono, IBM_Plex_Serif } from 'next/font/google'
import React from 'react'
import './styles.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { SITE_DATA } from './data'
import JsonLd from './components/JsonLd'

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-mono',
  display: 'swap',
})

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const DESCRIPTION =
  'Designer & Developer based in Warsaw. I design and build websites, end to end — design, code, CMS, and deployment.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_DATA.url),
  title: {
    default: 'Oskar Straszyński — Ezytra',
    template: `%s — ${SITE_DATA.brand}`,
  },
  description: DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_DATA.url,
    siteName: SITE_DATA.brand,
    title: 'Oskar Straszyński — Ezytra',
    description: DESCRIPTION,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Ezytra — Design & Development' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oskar Straszyński — Ezytra',
    description: DESCRIPTION,
    images: ['/opengraph-image'],
  },
}

export const viewport = {
  themeColor: '#0b0b0c',
}

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={`${ibmPlexMono.variable} ${ibmPlexSerif.variable}`}>
      <body>
        <JsonLd
          schema={{
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: SITE_DATA.name,
            url: SITE_DATA.url,
            jobTitle: 'Designer & Developer',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Warsaw',
              addressCountry: 'PL',
            },
            sameAs: [SITE_DATA.github, SITE_DATA.instagram],
          }}
        />
        <JsonLd
          schema={{
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: SITE_DATA.brand,
            url: SITE_DATA.url,
          }}
        />
        <main>{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
