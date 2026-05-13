import React from 'react'
import { SITE_DATA } from '../../data'

export function PlNav() {
  return (
    <header className="pl-nav">
      <div className="pl-nav__inner">
        <a href="/pl" className="pl-nav__brand" aria-label="Ezytra — strona główna">
          {SITE_DATA.brand}
        </a>
        <a href="#kontakt" className="pl-btn pl-btn--primary pl-btn--small">
          Bezpłatna wycena
        </a>
      </div>
    </header>
  )
}
