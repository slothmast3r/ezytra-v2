import React from 'react'
import Link from 'next/link'
import { SITE_DATA } from '../../data'

export function PlNav() {
  return (
    <header className="pl-nav">
      <div className="pl-nav__inner">
        <Link href="/" className="pl-nav__brand" aria-label="Ezytra — strona główna">
          {SITE_DATA.brand}
        </Link>
        <a href="#kontakt" className="pl-btn pl-btn--primary pl-btn--small">
          Bezpłatna wycena
        </a>
      </div>
    </header>
  )
}
