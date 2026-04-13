import { IBM_Plex_Mono, IBM_Plex_Serif } from 'next/font/google'
import React from 'react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './styles.css'

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

export const metadata = {
  description:
    'Designer & Developer based in Warsaw. I design and build websites, end to end — design, code, CMS, and deployment.',
  title: 'Oskar Straszyński — Ezytra',
}

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={`${ibmPlexMono.variable} ${ibmPlexSerif.variable}`}>
      <body>
        <main>{children}</main>
        <SpeedInsights />
      </body>
    </html>
  )
}
