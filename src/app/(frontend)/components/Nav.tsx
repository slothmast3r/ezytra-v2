'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Button from './Button'
import NavLink from './NavLink'
import { altLocaleHref, type Locale } from '../i18n'

const NAV_COPY = {
  en: {
    home: '/',
    links: [
      { label: 'Work', href: '/work' },
      { label: 'Services', href: '/services' },
      { label: 'Process', href: '/#process' },
      { label: 'About', href: '/about' },
      { label: 'Journal', href: '/journal' },
    ],
    cta: "Let's Talk",
    ctaHref: '/contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    langLabel: 'PL',
    langAria: 'Wersja polska',
  },
  pl: {
    home: '/pl',
    links: [
      { label: 'Realizacje', href: '/pl/realizacje' },
      { label: 'Usługi', href: '/pl/uslugi' },
      { label: 'Proces', href: '/pl#process' },
      { label: 'O mnie', href: '/pl/o-mnie' },
    ],
    cta: 'Porozmawiajmy',
    ctaHref: '/pl/kontakt',
    openMenu: 'Otwórz menu',
    closeMenu: 'Zamknij menu',
    langLabel: 'EN',
    langAria: 'English version',
  },
} as const

export default function Nav({ locale = 'en' }: { locale?: Locale }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const copy = NAV_COPY[locale]
  const langHref = altLocaleHref(pathname ?? copy.home, locale)

  return (
    <>
      <nav className="nav">
        <Link href={copy.home} className="nav__brand">
          <span className="nav__name">Oskar Straszyński</span>
          <span className="nav__name--short">Oskar S.</span>
          <span className="nav__sub">· Ezytra</span>
        </Link>
        <ul className="nav__links">
          {copy.links.map((link) => (
            <li key={link.label}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
        <Button variant="ghost" href={copy.ctaHref} className="nav__cta" chevron>
          {copy.cta}
        </Button>
        <Link href={langHref} className="nav__lang" aria-label={copy.langAria}>
          {copy.langLabel}
        </Link>
        <button
          className={`nav__hamburger ${open ? 'nav__hamburger--open' : ''}`}
          aria-label={open ? copy.closeMenu : copy.openMenu}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        className={`nav__drawer${open ? ' nav__drawer--open' : ''}`}
        aria-hidden={!open}
        inert={!open}
      >
        <ul className="nav__drawer-links">
          {copy.links.map((link, i) => (
            <li key={link.label} style={{ '--i': i } as React.CSSProperties}>
              <NavLink href={link.href} onClick={() => setOpen(false)}>{link.label}</NavLink>
            </li>
          ))}
          <li style={{ '--i': copy.links.length } as React.CSSProperties}>
            <NavLink href={langHref} onClick={() => setOpen(false)}>{copy.langLabel}</NavLink>
          </li>
        </ul>
        <Button
          variant="ghost"
          href={copy.ctaHref}
          className="nav__drawer-cta"
          style={{ '--i': copy.links.length + 1 } as React.CSSProperties}
          onClick={() => setOpen(false)}
          chevron
        >
          {copy.cta}
        </Button>
      </div>
    </>
  )
}
