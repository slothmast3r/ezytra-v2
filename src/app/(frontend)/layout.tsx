import { IBM_Plex_Mono } from 'next/font/google'
import React from 'react'
import { headers } from 'next/headers'
import './styles.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { SITE_DATA } from './data'
import LangSync from './components/LangSync'

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL(SITE_DATA.url),
  description:
    'Designer & Developer based in Warsaw. I design and build websites, end to end: design, code, CMS, and deployment.',
  title: 'Oskar Straszyński, Ezytra',
}

export const viewport = {
  themeColor: '#0b0b0c',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const pathname = (await headers()).get('x-pathname') ?? ''
  const lang = pathname.startsWith('/pl') ? 'pl' : 'en'

  return (
    <html lang={lang} className={ibmPlexMono.variable}>
      <body>
        <LangSync />
        <main>{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
