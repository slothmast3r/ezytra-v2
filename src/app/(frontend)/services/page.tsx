import React from 'react'
import Nav from '../components/Nav'
import SiteFooter from '../components/SiteFooter'

const SERVICES_DETAILED = [
  {
    id: 'web-design',
    num: '01',
    title: 'Web Design',
    tagline: 'Figma-first UI/UX. Clean, fast, conversion-focused.',
    desc: "I design for real users, not Dribbble. I don't start with code; I start in Figma, building high-fidelity interactive prototypes that you can click through before we ever touch a line of CSS. My design process is focused on conversion, accessibility, and creating a unique visual identity that actually reflects your brand.",
    deliverables: ['High-fidelity Prototypes', 'Design Systems', 'Interactive Wireframes', 'Visual Identity'],
  },
  {
    id: 'development',
    num: '02',
    title: 'Development',
    tagline: 'Next.js sites, built by hand. No page builders.',
    desc: 'No bloated themes. I build lightweight, SEO-optimised websites using Next.js and TypeScript. Every pixel is intentional, and every kilobyte is justified. This means faster load times, better search rankings, and a site that stays fast for years.',
    deliverables: ['Production-ready Next.js', 'TypeScript Safety', 'Optimised Asset Loading', 'Zero Technical Debt'],
  },
  {
    id: 'cms-integration',
    num: '03',
    title: 'CMS Integration',
    tagline: 'Payload or Sanity. Edit content without touching code.',
    desc: "A website is only as good as the tools you use to manage it. I integrate modern Headless CMS solutions like Payload or Sanity so you can update your own content effortlessly. It's clean, intuitive, and built around your specific workflow, giving you full control over your digital assets.",
    deliverables: ['Custom CMS Dashboard', 'Content Modelling', 'Rich Text Editors', 'Admin Training'],
  },
  {
    id: 'seo-deployment',
    num: '04',
    title: 'SEO & Deployment',
    tagline: 'On-page SEO from day one. Deployed to VPS.',
    desc: "I handle the full stack so you don't have to. I handle the technical SEO (Schema, Metadata, Performance) and deploy your site to a high-performance VPS using Linux and Nginx. Your site will be secure, fast, and ready to climb the search results from day one.",
    deliverables: ['VPS / Linux Config', 'Technical SEO Audit', 'Core Web Vitals Pass', 'Analytics Setup'],
  },
]

const WHY_EZYTRA = [
  {
    title: 'No Handoffs',
    desc: 'The designer is the developer. Nothing gets lost in translation between "the creative" and "the technical."',
  },
  {
    title: 'Direct Line',
    desc: 'You talk to me. No project managers, no account executives, no middle-men inflating the budget.',
  },
  {
    title: 'Craft Over Scale',
    desc: "I only take on 1-2 projects at a time. This means your site gets my full focus and attention to detail.",
  },
]

export default function ServicesPage() {
  return (
    <>
      <Nav />

      {/* ── Hero ── */}
      <section className="wa-hero">
        <div className="wa-hero__left">
          <p className="eyebrow">— Services</p>
          <h1 className="wa-hero__heading">
            Digital Craft.<br />
            Strategy to Launch.
          </h1>
        </div>
        <div className="wa-hero__right">
          <p className="wa-hero__tagline">
            — I build tools for businesses that care about their digital footprint.
          </p>
          <p className="wa-hero__count">
            4 Core Services · Focused on performance, clarity, and long-term value.
          </p>
        </div>
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
                    <li key={d} className="ser-item__list-item">— {d}</li>
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
          <p className="eyebrow">— The Advantage</p>
          <h2 className="section-title">Why work with a solo studio?</h2>
        </div>
        <div className="ser-why__grid">
          {WHY_EZYTRA.map((item) => (
            <div key={item.title} className="ser-why__item">
              <h3 className="ser-why__title">{item.title}</h3>
              <div className="ser-why__rule" />
              <p className="ser-why__desc">{item.desc}</p>
            </div>
          ))}
        </div>
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
