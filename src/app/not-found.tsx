import { IBM_Plex_Mono, IBM_Plex_Serif } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

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

export default function RootNotFound() {
  return (
    <html lang="en" className={`${ibmPlexMono.variable} ${ibmPlexSerif.variable}`}>
      <head>
        <style>{`
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          :root {
            --bg: #0b0b0c;
            --bg-2: #171719;
            --text: #f5f5f5;
            --muted: #b4b4b8;
            --accent: #e2d1a7;
            --border: #2e2e32;
            --border-2: #47474d;
            --font-mono: 'IBM Plex Mono', monospace;
            --font-serif: 'IBM Plex Serif', serif;
            --px: clamp(5rem, 11.67vw, 20rem);
          }
          body { background: var(--bg); color: var(--text); }

          /* Nav */
          .nf-nav {
            height: 4rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 var(--px);
            border-bottom: 1px solid var(--border);
          }
          .nf-nav__brand {
            font-family: var(--font-mono);
            font-size: 0.75rem;
            letter-spacing: 0.12em;
            color: var(--text);
            text-decoration: none;
          }
          .nf-nav__home {
            font-family: var(--font-mono);
            font-size: 0.75rem;
            letter-spacing: 0.04em;
            color: var(--muted);
            text-decoration: none;
            transition: color 0.15s;
          }
          .nf-nav__home:hover { color: var(--text); }

          /* 404 section */
          .nf {
            min-height: calc(100vh - 4rem);
            display: flex;
            align-items: center;
            border-bottom: 1px solid var(--border);
          }
          .nf__body {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0 5rem;
            padding: 6rem var(--px);
            width: 100%;
          }
          .nf__left {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .nf__eyebrow {
            font-family: var(--font-mono);
            font-size: 0.75rem;
            letter-spacing: 0.08em;
            color: var(--muted);
          }
          .nf__code {
            font-family: var(--font-serif);
            font-weight: 700;
            font-size: clamp(7rem, 16vw, 14rem);
            line-height: 1;
            letter-spacing: -0.04em;
            color: var(--border-2);
            margin-top: 1.5rem;
            user-select: none;
          }
          .nf__right {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            max-width: 43.75rem;
          }
          .nf__tagline {
            font-family: var(--font-serif);
            font-style: italic;
            font-size: 1.5rem;
            line-height: 1.4;
            color: var(--accent);
            margin-bottom: 2rem;
          }
          .nf__desc {
            font-family: var(--font-mono);
            font-size: 1rem;
            line-height: 1.7;
            color: var(--muted);
            margin-bottom: 2.5rem;
          }
          .nf__actions { display: flex; gap: 1rem; }
          .nf__btn {
            display: inline-flex;
            align-items: center;
            height: 3.25rem;
            padding: 0 1.5rem;
            font-family: var(--font-mono);
            font-size: 1rem;
            letter-spacing: 0.04em;
            font-weight: 500;
            text-decoration: none;
            transition: background 0.2s, color 0.2s, border-color 0.2s;
          }
          .nf__btn--primary { background: var(--accent); color: var(--bg); }
          .nf__btn--primary:hover { background: #f0e4c0; }
          .nf__btn--secondary { border: 1px solid var(--border); color: var(--muted); }
          .nf__btn--secondary:hover { background: var(--bg-2); border-color: var(--border-2); color: var(--text); }

          @media (max-width: 48rem) {
            .nf__body { grid-template-columns: 1fr; gap: 3rem 0; padding: 4rem var(--px); }
            .nf__code { font-size: clamp(5rem, 20vw, 7rem); }
            .nf__actions { flex-direction: column; }
            .nf__btn { justify-content: center; }
          }
        `}</style>
      </head>
      <body>
        <nav className="nf-nav">
          <Link href="/" className="nf-nav__brand">EZYTRA</Link>
          <Link href="/" className="nf-nav__home">← Back to home</Link>
        </nav>

        <section className="nf">
          <div className="nf__body">
            <div className="nf__left">
              <p className="nf__eyebrow">— 404</p>
              <h1 className="nf__code">404</h1>
            </div>
            <div className="nf__right">
              <p className="nf__tagline">— This page doesn&apos;t exist.</p>
              <p className="nf__desc">
                You followed a broken link, or the page was moved. Either way — nothing here.
              </p>
              <div className="nf__actions">
                <Link href="/" className="nf__btn nf__btn--primary">Back to Home</Link>
                <Link href="/journal" className="nf__btn nf__btn--secondary">Read the Journal</Link>
              </div>
            </div>
          </div>
        </section>
      </body>
    </html>
  )
}
