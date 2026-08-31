import React from 'react'
import Nav from '../components/Nav'
import SiteFooter from '../components/SiteFooter'
import { SITE_DATA } from '../data'
import Image from 'next/image'

const SKILLS = [
  {
    cat: 'Design',
    items: ['Figma', 'Relume', 'UI / UX', 'Wireframing', 'Branding', 'Design Systems'],
  },
  {
    cat: 'Development',
    items: ['WordPress', 'Custom Themes', 'HTML / CSS / JS'],
  },
  {
    cat: 'CMS & Commerce',
    items: ['WordPress Admin', 'WooCommerce', 'Content Modelling'],
  },
  {
    cat: 'Infra & SEO',
    items: ['Hosting & Domains', 'On-page SEO', 'Core Web Vitals', 'Analytics'],
  },
]

const VALUES = [
  {
    num: '01',
    title: 'Craft over speed',
    desc: "I'd rather spend an extra day getting something right than ship something mediocre. Details matter; users notice.",
  },
  {
    num: '02',
    title: 'Honest work',
    desc: "I won't take on a project I can't do well, and I'll tell you if I think your idea won't work. No polite lies.",
  },
  {
    num: '03',
    title: 'Full ownership',
    desc: 'I design, I build, I deploy. No passing the buck between "the designer" and "the developer"; one point of contact, from Figma to production.',
  },
  {
    num: '04',
    title: 'Simple over clever',
    desc: "The best code is the code you forget is there. The best design is the one users don't notice; they just use it.",
  },
]

const INTERESTS = [
  {
    name: 'Krav Maga',
    desc: 'I train regularly to build stamina and the mental edge to stay calm in a crisis.',
  },
  {
    name: 'Growth & Business',
    desc: 'Strategy, psychology, sales. I read what is practical and applicable, not theory for its own sake.',
  },
  {
    name: 'Active Life',
    desc: 'Windsurfing, snowboarding, bachata. I stay in motion most weekends.',
  },
  {
    name: 'Real Estate',
    desc: 'Outside design and code, I invest in real estate. Tangible assets, slower thinking, longer horizons.',
  },
]

function nextBookingQuarter(now: Date = new Date()): string {
  const currentQ = Math.floor(now.getMonth() / 3) + 1
  const year = now.getFullYear()
  const nextQ = currentQ === 4 ? 1 : currentQ + 1
  const nextYear = currentQ === 4 ? year + 1 : year
  return `Q${nextQ} ${nextYear}`
}

export default function AboutPage() {
  return (
    <>
      <Nav />

      {/* 01 — Hero */}
      <section className="about-hero" aria-labelledby="about-hero-title">
        <span className="about-hero__marker" aria-hidden="true">01 / About</span>
        <h1 id="about-hero-title" className="about-hero__headline">
          <span className="about-hero__line">Designer.</span>
          <span className="about-hero__line">Developer.</span>
          <span className="about-hero__line about-hero__line--accent">in Warsaw.</span>
        </h1>
        <p className="about-hero__lede">
          Ezytra is me: one person designing and building the whole website. No team, no handoffs,
          no markup.
        </p>
        <dl className="about-hero__meta">
          <div className="about-hero__meta-row">
            <dt>Focus</dt>
            <dd>Marketing &amp; product sites</dd>
          </div>
          <div className="about-hero__meta-row">
            <dt>Studio</dt>
            <dd>Ezytra, founded 2026</dd>
          </div>
          <div className="about-hero__meta-row">
            <dt>Status</dt>
            <dd>Booking {nextBookingQuarter()}</dd>
          </div>
        </dl>
      </section>

      {/* 02 — Bio */}
      <section className="about-bio" aria-labelledby="about-bio-title">
        <div className="about-bio__photo-wrap">
          <Image
            src="/owner.jpg"
            alt={`Portrait of ${SITE_DATA.name}, the designer and developer behind Ezytra`}
            width={720}
            height={960}
            className="about-bio__photo"
            priority
          />
          <span className="about-bio__caption" aria-hidden="true">
            Oskar Straszyński &middot; Warsaw, PL
          </span>
        </div>
        <div className="about-bio__content">
          <h2 id="about-bio-title" className="about-bio__title">
            I work alone. <em>On purpose.</em>
          </h2>
          <p className="about-bio__p">
            I learned both design and code because either one alone always felt incomplete. A
            beautiful site that breaks is a portfolio piece, not a working tool.
          </p>
          <p className="about-bio__p">
            Ezytra is new, started in 2026. Before that I spent a few years building sites on the
            side: martial-arts centres, dance schools, small community platforms. On every one I
            owned the full result, from the first Figma frame to the deployed server.
          </p>
          <p className="about-bio__p">
            I won&apos;t pretend the studio has a long history; it doesn&apos;t. What I can promise
            is that you always know who you are talking to, who did the work, and who to call if
            something breaks. Just me, and I prefer it that way.
          </p>
        </div>
      </section>

      {/* 03 — Skills */}
      <section className="about-skills" aria-labelledby="about-skills-title">
        <h2 id="about-skills-title" className="about-skills__title">
          The toolkit.
        </h2>
        <dl className="about-skills__table">
          {SKILLS.map((col) => (
            <div className="about-skills__row" key={col.cat}>
              <dt className="about-skills__cat">{col.cat}</dt>
              <dd className="about-skills__items">
                {col.items.map((item, i) => (
                  <span key={item} className="about-skills__item">
                    {item}
                    {i < col.items.length - 1 ? (
                      <span aria-hidden="true" className="about-skills__sep">
                        &middot;
                      </span>
                    ) : null}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 04 — Values */}
      <section className="about-values" aria-labelledby="about-values-title">
        <h2 id="about-values-title" className="about-values__title">
          Four things I will not compromise on.
        </h2>
        <ol className="about-values__list">
          {VALUES.map((v) => (
            <li key={v.num} className="about-values__item">
              <span className="about-values__num" aria-hidden="true">
                {v.num}
              </span>
              <div className="about-values__body">
                <h3 className="about-values__name">{v.title}</h3>
                <p className="about-values__desc">{v.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* 05 — Interests */}
      <section className="about-interests" aria-labelledby="about-interests-title">
        <h2 id="about-interests-title" className="about-interests__title">
          When I close the laptop.
        </h2>
        <ul className="about-interests__list">
          {INTERESTS.map((item) => (
            <li key={item.name} className="about-interests__item">
              <h3 className="about-interests__name">{item.name}</h3>
              <p className="about-interests__desc">{item.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 06 — CTA / Footer */}
      <SiteFooter
        title="Sounds like a good fit?"
        buttonText="Let's Talk"
        buttonHref={`mailto:${SITE_DATA.email}`}
      />
    </>
  )
}
