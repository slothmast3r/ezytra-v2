'use client'

import { useState } from 'react'
import Link from 'next/link'
import Button from './Button'
import NavLink from './NavLink'

const NAV_LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Process', href: '/#process' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="nav">
        <Link href="/" className="nav__brand">
          <span className="nav__name">Oskar Straszyński</span>
          <span className="nav__name--short">Oskar S.</span>
          <span className="nav__sub">— Ezytra</span>
        </Link>
        <ul className="nav__links">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
        <Button variant="ghost" href="/contact" className="nav__cta" chevron>
          Let&apos;s Talk
        </Button>
        <button
          className={`nav__hamburger ${open ? 'nav__hamburger--open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`nav__drawer${open ? ' nav__drawer--open' : ''}`} aria-hidden={!open}>
        <ul className="nav__drawer-links">
          {NAV_LINKS.map((link, i) => (
            <li key={link.label} style={{ '--i': i } as React.CSSProperties}>
              <NavLink href={link.href} onClick={() => setOpen(false)}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
        <Button
          variant="ghost"
          href="/contact"
          className="nav__drawer-cta"
          style={{ '--i': NAV_LINKS.length } as React.CSSProperties}
          onClick={() => setOpen(false)}
          chevron
        >
          Let&apos;s Talk
        </Button>
      </div>
    </>
  )
}
