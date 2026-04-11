'use client'

import { useState } from 'react'
import Button from './Button'

const NAV_LINKS = ['Work', 'Services', 'Process', 'Journal', 'Contact']

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="nav">
        <div className="nav__brand">
          <span className="nav__name">Oskar Straszyński</span>
          <span className="nav__name--short">Oskar S.</span>
          <span className="nav__sub">— Ezytra</span>
        </div>
        <ul className="nav__links">
          {NAV_LINKS.map((label) => (
            <li key={label}>
              <a href={`#${label.toLowerCase()}`}>{label}</a>
            </li>
          ))}
        </ul>
        <Button variant="ghost" href="#contact" className="nav__cta" chevron>
          Let&apos;s Talk
        </Button>
        <button
          className="nav__hamburger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {open && (
        <div className="nav__drawer">
          <ul className="nav__drawer-links">
            {NAV_LINKS.map((label) => (
              <li key={label}>
                <a href={`#${label.toLowerCase()}`} onClick={() => setOpen(false)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <Button variant="ghost" href="#contact" className="nav__drawer-cta" onClick={() => setOpen(false)} chevron>
            Let&apos;s Talk
          </Button>
        </div>
      )}
    </>
  )
}
