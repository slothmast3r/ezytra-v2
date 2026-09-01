import React from 'react'
import type { NicheContent } from '../_content/types'
import { ContactForm } from './ContactForm'
import { JsonLd } from './JsonLd'
import { SITE_DATA } from '../../data'
import TrackedLink from '../../components/TrackedLink'

type Props = { content: NicheContent }

export function NicheLanding({ content }: Props) {
  return (
    <div className="pl-landing">
      <JsonLd content={content} />
      <Hero content={content} />
      <Reality content={content} />
      <Problems content={content} />
      <Features content={content} />
      <CaseStudy content={content} />
      <Pricing content={content} />
      <FAQ content={content} />
      <Contact content={content} />
      <Footer />
    </div>
  )
}

function Hero({ content }: Props) {
  return (
    <section className="pl-hero">
      <div className="pl-hero__inner">
        <p className="pl-eyebrow">{content.hero.eyebrow}</p>
        <h1 className="pl-hero__h1">{content.hero.h1}</h1>
        <p className="pl-hero__sub">{content.hero.subheadline}</p>
        <div className="pl-hero__ctas">
          <TrackedLink
            href="#kontakt"
            className="pl-btn pl-btn--primary"
            event="cta_click"
            eventParams={{ location: 'hero', niche: content.niche }}
          >
            {content.hero.ctaPrimary}
          </TrackedLink>
          <a href="#co-dostajesz" className="pl-btn pl-btn--ghost">
            {content.hero.ctaSecondary}
          </a>
        </div>
        <p className="pl-hero__proof">{content.hero.socialProof}</p>
      </div>
    </section>
  )
}

function Reality({ content }: Props) {
  return (
    <section className="pl-section pl-reality">
      <div className="pl-reality__intro">
        <h2 className="pl-section__h2 pl-reality__h2">{content.reality.heading}</h2>
        <p className="pl-reality__lede">{content.reality.intro}</p>
      </div>
      <div className="pl-reality__grid">
        {content.reality.items.map((item, i) => (
          <div key={i} className="pl-reality__card">
            <div className="pl-reality__stat">{item.stat}</div>
            <h3 className="pl-reality__title">{item.title}</h3>
            <p className="pl-reality__body">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Problems({ content }: Props) {
  return (
    <section className="pl-section pl-problems">
      <h2 className="pl-section__h2">{content.problems.heading}</h2>
      <ol className="pl-problems__list">
        {content.problems.items.map((item, i) => (
          <li key={i} className="pl-problems__item">
            <div className="pl-problems__num">{String(i + 1).padStart(2, '0')}</div>
            <div className="pl-problems__body">
              <h3 className="pl-problems__h3">{item.problem}</h3>
              <p className="pl-problems__sol">{item.solution}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

function Features({ content }: Props) {
  return (
    <section id="co-dostajesz" className="pl-section pl-features">
      <h2 className="pl-section__h2">{content.features.heading}</h2>
      <div className="pl-features__grid">
        {content.features.items.map((item, i) => (
          <div key={i} className="pl-features__card">
            <h3 className="pl-features__h3">{item.title}</h3>
            <p className="pl-features__body">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function CaseStudy({ content }: Props) {
  return (
    <section className="pl-section pl-case">
      <h2 className="pl-section__h2">{content.caseStudy.heading}</h2>
      <div className="pl-case__grid">
        <div className="pl-case__col pl-case__col--before">
          <h3 className="pl-case__label">{content.caseStudy.before.label}</h3>
          <ul className="pl-case__list">
            {content.caseStudy.before.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
        <div className="pl-case__col pl-case__col--after">
          <h3 className="pl-case__label">{content.caseStudy.after.label}</h3>
          <ul className="pl-case__list">
            {content.caseStudy.after.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Pricing({ content }: Props) {
  return (
    <section className="pl-section pl-pricing">
      <h2 className="pl-section__h2">{content.pricing.heading}</h2>
      <p className="pl-pricing__sub">{content.pricing.subheading}</p>
      <div className="pl-pricing__grid">
        {content.pricing.packages.map((pkg, i) => (
          <div
            key={i}
            className={`pl-pricing__card${pkg.featured ? ' pl-pricing__card--featured' : ''}`}
          >
            <h3 className="pl-pricing__name">{pkg.name}</h3>
            <p className="pl-pricing__price">{pkg.price}</p>
            <p className="pl-pricing__tagline">{pkg.tagline}</p>
            <ul className="pl-pricing__features">
              {pkg.features.map((f, j) => (
                <li key={j}>{f}</li>
              ))}
            </ul>
            <TrackedLink
              href="#kontakt"
              className="pl-btn pl-btn--primary pl-pricing__cta"
              event="cta_click"
              eventParams={{ location: 'pricing', niche: content.niche, package: pkg.name }}
            >
              {pkg.cta}
            </TrackedLink>
          </div>
        ))}
      </div>
    </section>
  )
}

function FAQ({ content }: Props) {
  return (
    <section className="pl-section pl-faq">
      <h2 className="pl-section__h2">{content.faq.heading}</h2>
      <div className="pl-faq__list">
        {content.faq.items.map((item, i) => (
          <details key={i} className="pl-faq__item">
            <summary className="pl-faq__q">{item.q}</summary>
            <p className="pl-faq__a">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

function Contact({ content }: Props) {
  return (
    <section id="kontakt" className="pl-section pl-contact">
      <h2 className="pl-section__h2">{content.contact.heading}</h2>
      <p className="pl-contact__sub">{content.contact.subheading}</p>
      <div className="pl-contact__grid">
        <ContactForm
          niche={content.niche}
          schoolFieldLabel={content.contact.schoolFieldLabel}
          schoolFieldPlaceholder={content.contact.schoolFieldPlaceholder}
          submitLabel={content.contact.submitLabel}
          successMessage={content.contact.successMessage}
        />
        <aside className="pl-contact__direct">
          <p className="pl-contact__direct-label">Albo skontaktuj się bezpośrednio</p>
          <p className="pl-contact__direct-name">{SITE_DATA.name}</p>
          <TrackedLink
            className="pl-contact__direct-link"
            href={`tel:${SITE_DATA.phoneTel}`}
            event="phone_link_click"
            eventParams={{ location: 'niche_contact', niche: content.niche }}
          >
            {SITE_DATA.phone}
          </TrackedLink>
          <TrackedLink
            className="pl-contact__direct-link"
            href={`mailto:${SITE_DATA.email}`}
            event="email_link_click"
            eventParams={{ location: 'niche_contact', niche: content.niche }}
          >
            {SITE_DATA.email}
          </TrackedLink>
          <p className="pl-contact__direct-hours">Pon.–pt., 9:00–18:00</p>
        </aside>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="pl-footer">
      <div className="pl-footer__inner">
        <p className="pl-footer__brand">
          © {new Date().getFullYear()} {SITE_DATA.brand} — {SITE_DATA.name}
        </p>
        <nav className="pl-footer__nav">
          <a href={`mailto:${SITE_DATA.email}`}>{SITE_DATA.email}</a>
          <a href="/pl/polityka-prywatnosci">Polityka prywatności</a>
        </nav>
      </div>
    </footer>
  )
}
