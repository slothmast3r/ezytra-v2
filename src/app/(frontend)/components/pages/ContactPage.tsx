import React from 'react'
import Nav from '../Nav'
import ContactForm from '../../contact/ContactForm'
import FooterBar from '../FooterBar'
import type { Locale } from '../../i18n'

const CONTACT_COPY = {
  en: {
    eyebrow: '— Get In Touch',
    headlineLines: ["Let's build", 'something great.'],
    tagline: 'Tell me about your project. I reply within one working day.',
    desc: "I'm selective about the work I take on. Not for the sake of it, but because I'd rather do one project well than three at half-attention. If we're a fit, you'll know quickly.",
    otherWays: '— Other Ways to Reach Me',
    info: [
      {
        label: 'Email',
        value: 'oskar@straszynski.pl',
        sub: 'Best for project enquiries',
        href: 'mailto:oskar@straszynski.pl',
      },
      {
        label: 'LinkedIn',
        value: '/in/oskarstraszynski',
        sub: 'Career history and recommendations',
        href: 'https://linkedin.com/in/oskarstraszynski',
      },
      {
        label: 'GitHub',
        value: 'github.com/slothmast3r',
        sub: 'Open source and side projects',
        href: 'https://github.com/slothmast3r',
      },
      {
        label: 'Location',
        value: 'Warsaw, Poland',
        sub: 'CET. Open to remote work.',
        href: null,
      },
    ],
  },
  pl: {
    eyebrow: '— Kontakt',
    headlineLines: ['Zbudujmy', 'coś dobrego.'],
    tagline: 'Opowiedz mi o swoim projekcie. Odpisuję w ciągu jednego dnia roboczego.',
    desc: 'Wybieram projekty, które biorę. Nie dla zasady — po prostu wolę zrobić jeden projekt dobrze niż trzy na pół gwizdka. Jeśli do siebie pasujemy, szybko to poczujesz.',
    otherWays: '— Inne sposoby kontaktu',
    info: [
      {
        label: 'Email',
        value: 'oskar@straszynski.pl',
        sub: 'Najlepszy do zapytań o projekty',
        href: 'mailto:oskar@straszynski.pl',
      },
      {
        label: 'LinkedIn',
        value: '/in/oskarstraszynski',
        sub: 'Historia zawodowa i rekomendacje',
        href: 'https://linkedin.com/in/oskarstraszynski',
      },
      {
        label: 'GitHub',
        value: 'github.com/slothmast3r',
        sub: 'Open source i projekty poboczne',
        href: 'https://github.com/slothmast3r',
      },
      {
        label: 'Lokalizacja',
        value: 'Warszawa, Polska',
        sub: 'CET. Pracuję też zdalnie.',
        href: null,
      },
    ],
  },
} as const

export default function ContactPage({ locale = 'en' }: { locale?: Locale }) {
  const copy = CONTACT_COPY[locale]

  return (
    <>
      <Nav locale={locale} />

      {/* 01 — Hero */}
      <section className="contact-hero">
        <div className="contact-hero__body">
          <div className="contact-hero__left">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h1 className="contact-hero__headline">
              {copy.headlineLines[0]}
              <br />
              {copy.headlineLines[1]}
            </h1>
          </div>
          <div className="contact-hero__right">
            <p className="contact-hero__tagline">
              {copy.tagline}
            </p>
            <p className="contact-hero__desc">
              {copy.desc}
            </p>
          </div>
        </div>
      </section>

      {/* 02 — Form + What to Expect */}
      <section className="cform-section">
        <ContactForm locale={locale} />
      </section>

      {/* 03 — Other Ways to Reach Me */}
      <section className="cinfo">
        <p className="eyebrow">{copy.otherWays}</p>
        <div className="rule" />
        <div className="cinfo__grid">
          {copy.info.map((item) => (
            <div key={item.label} className="cinfo__item">
              <span className="cinfo__label">{item.label}</span>
              {item.href ? (
                <a href={item.href} className="cinfo__value">
                  {item.value}
                </a>
              ) : (
                <span className="cinfo__value">{item.value}</span>
              )}
              <span className="cinfo__sub">{item.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 04 — Footer */}
      <footer className="contact">
        <FooterBar />
      </footer>
    </>
  )
}
