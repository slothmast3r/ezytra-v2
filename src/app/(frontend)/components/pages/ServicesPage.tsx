import React from 'react'
import Nav from '../Nav'
import SiteFooter from '../SiteFooter'
import type { Locale } from '../../i18n'

const SERVICES_COPY = {
  en: {
    eyebrow: 'Services',
    headingLines: ['Four services.', 'One person.', 'Start to finish.'],
    tagline: 'I build tools for businesses that care about their digital footprint.',
    deliverablesLabel: 'DELIVERABLES:',
    services: [
      {
        id: 'web-design',
        num: '01',
        title: 'Web Design',
        tagline: 'Figma-first UI/UX. Clean, fast, conversion-focused.',
        desc: "I design for the people who use the site, not for design awards. I don't start with code; I start in Figma, building high-fidelity interactive prototypes that you can click through before we ever touch a line of CSS. My design process is focused on conversion, accessibility, and creating a unique visual identity that actually reflects your brand.",
        deliverables: ['High-fidelity Prototypes', 'Design Systems', 'Interactive Wireframes', 'Visual Identity'],
      },
      {
        id: 'development',
        num: '02',
        title: 'Development',
        tagline: 'Custom WordPress themes, built by hand. No page builders.',
        desc: 'No bloated off-the-shelf themes. I build lightweight, SEO-optimised WordPress sites on a custom theme written from scratch — including WooCommerce when you sell online. Every pixel is intentional, and every kilobyte is justified. This means faster load times, better search rankings, and a site that stays fast for years.',
        deliverables: ['Custom WordPress Theme', 'WooCommerce Setup', 'Optimised Asset Loading', 'Zero Plugin Bloat'],
      },
      {
        id: 'cms-integration',
        num: '03',
        title: 'CMS Integration',
        tagline: 'The WordPress admin, set up around you. Edit content without touching code.',
        desc: "A website is only as good as the tools you use to manage it. I set up the WordPress admin around your actual workflow — custom fields, clean editing screens, and nothing you don't need. You update pages, posts, products, and images yourself, without calling a developer for every small change.",
        deliverables: ['Tailored WordPress Admin', 'Content Modelling', 'Custom Fields', 'Admin Training'],
      },
      {
        id: 'seo-deployment',
        num: '04',
        title: 'SEO & Hosting',
        tagline: 'On-page SEO from day one. Hosting and launch handled.',
        desc: "I run the technical side so you don't have to. Technical SEO (schema markup, metadata, Core Web Vitals), plus hosting, domain, and launch handled end to end — with backups and updates so the site stays secure and fast. Ready to climb the search results from day one.",
        deliverables: ['Hosting & Domain Setup', 'Technical SEO Audit', 'Core Web Vitals Pass', 'Analytics Setup'],
      },
    ],
    whyEyebrow: 'The Advantage',
    whyTitle: 'Why work with a solo studio?',
    quote: 'I only take on one or two projects at a time. Your site gets my full focus, start to finish.',
    quoteAttr: 'Oskar Straszyński, Ezytra',
    footer: {
      title: 'Ready to build something real?',
      desc: "Let's talk about your project and see if we're a good fit.",
      buttonText: 'Get in Touch',
      buttonHref: '/contact',
    },
  },
  pl: {
    eyebrow: 'Usługi',
    headingLines: ['Cztery usługi.', 'Jedna osoba.', 'Od początku do końca.'],
    tagline: 'Buduję narzędzia dla firm, którym zależy na tym, jak wyglądają w sieci.',
    deliverablesLabel: 'CO DOSTAJESZ:',
    services: [
      {
        id: 'web-design',
        num: '01',
        title: 'Projektowanie stron',
        tagline: 'UI/UX projektowany w Figmie. Czysto, szybko, pod konwersję.',
        desc: 'Projektuję dla ludzi, którzy korzystają ze strony — nie dla nagród. Nie zaczynam od kodu; zaczynam w Figmie, budując interaktywne prototypy w pełnej jakości, które możesz przeklikać, zanim powstanie choćby linijka CSS. Mój proces projektowy skupia się na konwersji, dostępności i unikalnej identyfikacji wizualnej, która naprawdę oddaje Twoją markę.',
        deliverables: ['Prototypy w pełnej jakości', 'Systemy projektowe', 'Interaktywne makiety', 'Identyfikacja wizualna'],
      },
      {
        id: 'development',
        num: '02',
        title: 'Wdrożenie',
        tagline: 'Autorskie motywy WordPress, pisane ręcznie. Bez page builderów.',
        desc: 'Żadnych ociężałych gotowych motywów. Buduję lekkie, zoptymalizowane pod SEO strony WordPress na autorskim motywie pisanym od zera — z WooCommerce, jeśli sprzedajesz online. Każdy piksel jest przemyślany, a każdy kilobajt uzasadniony. Efekt: szybsze ładowanie, lepsze pozycje w wyszukiwarce i strona, która zostaje szybka na lata.',
        deliverables: ['Autorski motyw WordPress', 'Konfiguracja WooCommerce', 'Optymalizacja zasobów', 'Zero zbędnych wtyczek'],
      },
      {
        id: 'cms-integration',
        num: '03',
        title: 'Integracja CMS',
        tagline: 'Panel WordPress ustawiony pod Ciebie. Edytujesz treści bez dotykania kodu.',
        desc: 'Strona jest tak dobra, jak narzędzia, którymi się nią zarządza. Konfiguruję panel WordPress pod Twój faktyczny sposób pracy — własne pola, czytelne ekrany edycji i nic, czego nie potrzebujesz. Sam aktualizujesz strony, wpisy, produkty i zdjęcia, bez dzwonienia do developera przy każdej drobnej zmianie.',
        deliverables: ['Panel WordPress skrojony pod Ciebie', 'Modelowanie treści', 'Własne pola', 'Szkolenie z obsługi'],
      },
      {
        id: 'seo-deployment',
        num: '04',
        title: 'SEO i hosting',
        tagline: 'SEO on-page od pierwszego dnia. Hosting i start strony z głowy.',
        desc: 'Techniczną stroną zajmuję się ja, nie Ty. Techniczne SEO (dane strukturalne, metadane, Core Web Vitals), do tego hosting, domena i wdrożenie od A do Z — z kopiami zapasowymi i aktualizacjami, żeby strona była bezpieczna i szybka. Gotowa piąć się w wynikach wyszukiwania od pierwszego dnia.',
        deliverables: ['Hosting i domena', 'Audyt technicznego SEO', 'Zaliczone Core Web Vitals', 'Konfiguracja analityki'],
      },
    ],
    whyEyebrow: 'Przewaga',
    whyTitle: 'Dlaczego solo studio?',
    quote: 'Prowadzę jeden, najwyżej dwa projekty naraz. Twoja strona dostaje całą moją uwagę — od początku do końca.',
    quoteAttr: 'Oskar Straszyński, Ezytra',
    footer: {
      title: 'Gotowy zbudować coś konkretnego?',
      desc: 'Opowiedz mi o swoim projekcie — zobaczymy, czy to dobre dopasowanie.',
      buttonText: 'Napisz do mnie',
      buttonHref: '/pl/kontakt',
    },
  },
} as const

export default function ServicesPage({ locale = 'en' }: { locale?: Locale }) {
  const copy = SERVICES_COPY[locale]

  return (
    <>
      <Nav locale={locale} />

      {/* ── Hero ── */}
      <section className="ser-hero">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1 className="ser-hero__heading">
          <span className="ser-hero__heading-line">{copy.headingLines[0]}</span>
          <span className="ser-hero__heading-line ser-hero__heading-line--accent">{copy.headingLines[1]}</span>
          <span className="ser-hero__heading-line">{copy.headingLines[2]}</span>
        </h1>
        <p className="ser-hero__tagline">
          {copy.tagline}
        </p>
      </section>

      {/* ── Service Deep Dives ── */}
      <section className="ser-list">
        {copy.services.map((s) => (
          <div key={s.num} id={s.id} className="ser-item">
            <div className="ser-item__left">
              <span className="ser-item__num">{s.num}</span>
              <div className="ser-item__sticky">
                <h2 className="ser-item__title">{s.title}</h2>
                <p className="ser-item__tagline">{s.tagline}</p>
              </div>
            </div>
            <div className="ser-item__right">
              <p className="ser-item__desc">{s.desc}</p>
              <div className="ser-item__deliverables">
                <span className="ser-item__label">{copy.deliverablesLabel}</span>
                <ul className="ser-item__list">
                  {s.deliverables.map((d) => (
                    <li key={d} className="ser-item__list-item">{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ── Why Ezytra ── */}
      <section className="ser-why">
        <div className="ser-why__header">
          <p className="eyebrow">{copy.whyEyebrow}</p>
          <h2 className="section-title">{copy.whyTitle}</h2>
        </div>
        <blockquote className="ser-why__quote">
          <p className="ser-why__quote-text">
            {copy.quote}
          </p>
          <footer className="ser-why__quote-attr">{copy.quoteAttr}</footer>
        </blockquote>
      </section>

      {/* ── CTA ── */}
      <SiteFooter {...copy.footer} />
    </>
  )
}
