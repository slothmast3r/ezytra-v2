import React from 'react'
import Nav from '../components/Nav'
import SiteFooter from '../components/SiteFooter'

const SERVICES_DETAILED = [
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
]

export default function ServicesPage() {
  return (
    <>
      <Nav />

      {/* ── Hero ── */}
      <section className="ser-hero">
        <p className="eyebrow">Services</p>
        <h1 className="ser-hero__heading">
          <span className="ser-hero__heading-line">Four services.</span>
          <span className="ser-hero__heading-line ser-hero__heading-line--accent">One person.</span>
          <span className="ser-hero__heading-line">Start to finish.</span>
        </h1>
        <p className="ser-hero__tagline">
          I build tools for businesses that care about their digital footprint.
        </p>
      </section>

      {/* ── Service Deep Dives ── */}
      <section className="ser-list">
        {SERVICES_DETAILED.map((s) => (
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
                <span className="ser-item__label">DELIVERABLES:</span>
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
          <p className="eyebrow">The Advantage</p>
          <h2 className="section-title">Why work with a solo studio?</h2>
        </div>
        <blockquote className="ser-why__quote">
          <p className="ser-why__quote-text">
            I only take on one or two projects at a time. Your site gets my full focus, start to finish.
          </p>
          <footer className="ser-why__quote-attr">Oskar Straszyński, Ezytra</footer>
        </blockquote>
      </section>

      {/* ── CTA ── */}
      <SiteFooter
        title="Ready to build something real?"
        desc="Let's talk about your project and see if we're a good fit."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  )
}
