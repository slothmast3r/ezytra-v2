import React from 'react'
import Nav from '../Nav'
import SiteFooter from '../SiteFooter'
import Button from '../Button'
import { PRICING_COPY } from './pricingContent'

export default function PricingPage() {
  const copy = PRICING_COPY

  return (
    <>
      <Nav locale="pl" />

      {/* ── Hero ── */}
      <section className="ser-hero">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1 className="ser-hero__heading">
          <span className="ser-hero__heading-line">{copy.headingLines[0]}</span>
          <span className="ser-hero__heading-line ser-hero__heading-line--accent">{copy.headingLines[1]}</span>
          <span className="ser-hero__heading-line">{copy.headingLines[2]}</span>
        </h1>
        <p className="ser-hero__tagline pr-hero__tagline">{copy.tagline}</p>
      </section>

      {/* ── Packages ── */}
      <section className="pr-packages" id="pakiety">
        <div className="pr-packages__grid">
          {copy.packages.map((pkg, i) => {
            const wide = i === copy.packages.length - 1
            const cls = [
              'pr-card',
              pkg.featured ? 'pr-card--featured' : '',
              wide ? 'pr-card--wide' : '',
            ]
              .filter(Boolean)
              .join(' ')

            return (
              <article key={pkg.id} id={pkg.id} className={cls}>
                <header className="pr-card__head">
                  <div className="pr-card__name-row">
                    <h2 className="pr-card__name">{pkg.name}</h2>
                    {pkg.badge && <span className="pr-card__badge">{pkg.badge}</span>}
                  </div>
                  <p className="pr-card__price">{pkg.price}</p>
                  <p className="pr-card__for">{pkg.forWhom}</p>
                </header>

                <div className="pr-card__body">
                  <p className="pr-card__desc">{pkg.desc}</p>

                  <span className="pr-card__label">{copy.includesLabel}</span>
                  <ul className="pr-card__list">
                    {pkg.includes.map((item) => (
                      <li key={item} className="pr-card__item">{item}</li>
                    ))}
                  </ul>

                  <dl className="pr-card__meta">
                    <div className="pr-card__meta-row">
                      <dt>{copy.timelineLabel}</dt>
                      <dd>{pkg.timeline}</dd>
                    </div>
                    {pkg.excludes && (
                      <div className="pr-card__meta-row">
                        <dt>{copy.excludesLabel}</dt>
                        <dd>{pkg.excludes}</dd>
                      </div>
                    )}
                  </dl>

                  <Button
                    variant={pkg.featured ? 'primary' : 'secondary'}
                    href={`/kontakt?pakiet=${pkg.id}`}
                    className="pr-card__cta"
                    chevron
                  >
                    {pkg.cta}
                  </Button>
                </div>
              </article>
            )
          })}
        </div>
        <p className="pr-packages__note">{copy.pricingNote}</p>
      </section>

      {/* ── In every package (the former services page, condensed) ── */}
      <section className="pr-guarantees" id="w-kazdym-pakiecie">
        <div className="pr-guarantees__header">
          <p className="eyebrow">{copy.basicsEyebrow}</p>
          <h2 className="section-title">{copy.basicsTitle}</h2>
        </div>
        <ol className="pr-guarantees__list">
          {copy.basics.map((b, i) => (
            <li key={b.title} className="pr-guarantee">
              <span className="pr-guarantee__num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="pr-guarantee__title">{b.title}</h3>
              <p className="pr-guarantee__body">{b.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Guarantees ── */}
      <section className="pr-guarantees" id="gwarancje">
        <div className="pr-guarantees__header">
          <p className="eyebrow">{copy.guaranteesEyebrow}</p>
          <h2 className="section-title">{copy.guaranteesTitle}</h2>
          <p className="pr-guarantees__note">{copy.guaranteesNote}</p>
        </div>
        <ol className="pr-guarantees__list">
          {copy.guarantees.map((g, i) => (
            <li key={g.title} className="pr-guarantee">
              <span className="pr-guarantee__num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="pr-guarantee__title">{g.title}</h3>
              <p className="pr-guarantee__body">{g.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Extensions ── */}
      <section className="pr-ext" id="rozszerzenia">
        <div className="pr-ext__header">
          <p className="eyebrow">{copy.extensionsEyebrow}</p>
          <h2 className="section-title">{copy.extensionsTitle}</h2>
          <p className="pr-ext__sub">{copy.extensionsSub}</p>
        </div>
        <table className="pr-ext__table">
          <thead>
            <tr>
              <th scope="col">{copy.extensionsHead.name}</th>
              <th scope="col">{copy.extensionsHead.price}</th>
              <th scope="col">{copy.extensionsHead.availableIn}</th>
            </tr>
          </thead>
          <tbody>
            {copy.extensions.map((ext) => (
              <tr key={ext.name}>
                <th scope="row" className="pr-ext__name">{ext.name}</th>
                <td className="pr-ext__price" data-label={copy.extensionsHead.price}>{ext.price}</td>
                <td className="pr-ext__avail" data-label={copy.extensionsHead.availableIn}>{ext.availableIn}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="pr-ext__footnote">{copy.extensionsFootnote}</p>
      </section>

      {/* ── FAQ ── */}
      <section className="pr-faq" id="pytania">
        <div className="pr-faq__header">
          <p className="eyebrow">{copy.faqEyebrow}</p>
          <h2 className="section-title">{copy.faqTitle}</h2>
        </div>
        <div className="pr-faq__list">
          {copy.faq.map((item) => (
            <details key={item.q} className="pr-faq__item">
              <summary className="pr-faq__q">{item.q}</summary>
              <p className="pr-faq__a">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <SiteFooter {...copy.footer} />
    </>
  )
}
