import { notFound } from 'next/navigation'
import Nav from '../../components/Nav'
import Button from '../../components/Button'
import FooterBar from '../../components/FooterBar'

/* ─── Mock data — replace with CMS fetch later ─── */

const CASE_STUDY = {
  eyebrow: 'CASE STUDY — 01',
  client: 'Pantera',
  subtitle: 'Martial Arts Centre',
  desc: 'Full website design & development for a Krav Maga, Karate, and Tai Chi centre in Warsaw, Poland.',
  link: { label: 'pantera.pl ↗', href: 'https://pantera.pl' },

  meta: [
    { label: 'Client', value: 'Pantera' },
    { label: 'Type', value: 'Web Design & Dev' },
    { label: 'Stack', value: 'Next.js · Sanity' },
    { label: 'SEO', value: 'On-page · Local' },
    { label: 'Year', value: '2024–2025' },
    { label: 'Status', value: 'Live' },
  ],

  overview: [
    {
      title: 'The Brief',
      text: 'Pantera needed a professional website that reflected the discipline and energy of their martial arts centre. They had no web presence — just a social media page.',
    },
    {
      title: 'My Role',
      text: 'End-to-end: discovery, design in Figma, development in Next.js, CMS setup in Sanity, local SEO, and VPS deployment. One person, full ownership.',
    },
    {
      title: 'The Result',
      text: "A fast, clean site that ranks for local search terms in Warsaw, lets the team update their own class schedule, and actually looks like the gym feels.",
    },
  ],

  challenge: {
    heading: 'Starting from zero.',
    left: 'Pantera had no website, no brand guidelines, and no content prepared. The brief was essentially: \'We need a website that makes us look serious and gets people through the door.\'',
    right: "The key challenges were building trust for people unfamiliar with martial arts (Krav Maga especially has a barrier to entry), making the class schedule easy to find, and ensuring the site ranked for local searches like 'Krav Maga Warsaw'.",
    constraints: [
      '— No existing brand',
      '— Zero web presence',
      '— 3 disciplines to balance',
      '— Polish-language SEO',
      '— Non-technical client',
      '— Mobile-first audience',
    ],
  },

  design: {
    heading: 'From brief to high-fidelity.',
    weeks: [
      {
        label: 'Week 1',
        title: 'Discovery & Research',
        desc: 'Competitor analysis of Polish martial arts websites. User interviews with two gym members. Moodboard of 15 references.',
      },
      {
        label: 'Week 2',
        title: 'Wireframes',
        desc: 'Low-fidelity wireframes for 6 key pages. Tested navigation with 3 users. Settled on discipline-first information architecture.',
      },
      {
        label: 'Week 3',
        title: 'Visual Identity',
        desc: 'Colour palette anchored in dark navy and sharp accent. Type pairing: strong display serif + mono for utility. Built a minimal design system.',
      },
      {
        label: 'Week 4',
        title: 'High-Fidelity UI',
        desc: 'Pixel-perfect Figma screens for desktop and mobile. Component library of 12 reusable elements. Client approved in one round.',
      },
    ],
    note: 'All screens — wireframes, components, and final UI — are available on request.',
  },

  mockups: [
    { label: 'Paste homepage screenshot — desktop', size: 'large' },
    { label: 'Mobile hero', size: 'small' },
    { label: 'Classes / schedule page', size: 'small' },
  ],

  dev: {
    heading: 'How it was built.',
    body: [
      'The site is built on Next.js 14 with the App Router, using Sanity as a headless CMS. The class schedule, instructor profiles, and news section are all editable by the Pantera team without touching code.',
      "Deployed on a VPS with Nginx. Images served through Sanity's CDN. Lighthouse scores 95+ across all categories. Polish-language meta, schema markup for local business, and Google Maps integration for directions.",
    ],
    tech: [
      'Next.js 14', 'App Router', 'TypeScript', 'Tailwind CSS',
      'GROQ Queries', 'Nginx', 'VPS Deploy', 'Schema Markup',
    ],
  },

  results: [
    { value: '95+', label: 'Lighthouse Score', desc: 'Performance, accessibility, SEO, best practices.' },
    { value: '#1', label: 'Local SEO ranking', desc: "'Krav Maga Warsaw' within 3 months of launch." },
    { value: '100%', label: 'Client editable', desc: 'Pantera team manages all content independently.' },
    { value: 'Live', label: 'Shipped on time', desc: 'Delivered in 6 weeks, within scope and budget.' },
  ],

  next: {
    label: 'NEXT CASE STUDY',
    title: 'ProfilDance',
    desc: 'Brand identity + full website for a Warsaw dance school.',
    href: '/work/profildance',
  },
}

const KNOWN_SLUGS = ['pantera']

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  if (!KNOWN_SLUGS.includes(params.slug)) notFound()

  const cs = CASE_STUDY

  return (
    <>
      <Nav />

      {/* ── 02 Hero ── */}
      <section className="cs-hero">
        <div className="cs-hero__left">
          <p className="cs-hero__eyebrow">{cs.eyebrow}</p>
          <h1 className="cs-hero__name">{cs.client}</h1>
          <p className="cs-hero__subtitle">{cs.subtitle}</p>
          <p className="cs-hero__desc">{cs.desc}</p>
          <a href={cs.link.href} className="cs-hero__link" target="_blank" rel="noopener noreferrer">
            {cs.link.label}
          </a>
        </div>

        <div className="cs-hero__right">
          <div className="cs-meta-grid">
            {cs.meta.map((m) => (
              <div key={m.label} className="cs-meta-card">
                <span className="cs-meta-card__label">{m.label}</span>
                <span className="cs-meta-card__value">{m.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 Overview ── */}
      <section className="cs-overview">
        <p className="eyebrow">— Project Overview</p>
        <div className="cs-overview__grid">
          {cs.overview.map((col) => (
            <div key={col.title} className="cs-overview__col">
              <h3 className="cs-overview__title">{col.title}</h3>
              <p className="cs-overview__text">{col.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 04 Challenge ── */}
      <section className="cs-challenge">
        <p className="eyebrow">— The Challenge</p>
        <h2 className="cs-challenge__heading">{cs.challenge.heading}</h2>
        <div className="rule" />
        <div className="cs-challenge__body">
          <p className="cs-challenge__text">{cs.challenge.left}</p>
          <p className="cs-challenge__text">{cs.challenge.right}</p>
        </div>
        <div className="cs-challenge__constraints">
          {cs.challenge.constraints.map((c) => (
            <div key={c} className="cs-constraint">{c}</div>
          ))}
        </div>
      </section>

      {/* ── 05 Design ── */}
      <section className="cs-design">
        <p className="eyebrow">— Design Process</p>
        <h2 className="cs-design__heading">{cs.design.heading}</h2>
        <div className="cs-design__grid">
          {cs.design.weeks.map((w) => (
            <div key={w.label} className="cs-week">
              <span className="cs-week__label">{w.label}</span>
              <div className="cs-week__rule" />
              <h3 className="cs-week__title">{w.title}</h3>
              <p className="cs-week__desc">{w.desc}</p>
            </div>
          ))}
        </div>
        <div className="cs-design__note">
          <span className="cs-design__note-icon">✦</span>
          <span className="cs-design__note-tag">Designed in Figma</span>
          <span className="cs-design__note-text">{cs.design.note}</span>
        </div>
      </section>

      {/* ── 06 Mockups ── */}
      <section className="cs-mockups">
        <p className="eyebrow">— Design Screens</p>
        <h2 className="cs-mockups__heading">Selected Mockups</h2>
        <div className="cs-mockups__grid">
          {/* Large desktop mockup */}
          <div className="cs-mockup cs-mockup--large">
            <div className="cs-mockup__chrome">
              <div className="cs-mockup__dots"><span /><span /><span /></div>
            </div>
            <div className="cs-mockup__screen">
              <span className="cs-mockup__label">{cs.mockups[0].label}</span>
            </div>
          </div>
          {/* Two small mockups stacked */}
          <div className="cs-mockups__stack">
            {cs.mockups.slice(1).map((m) => (
              <div key={m.label} className="cs-mockup cs-mockup--small">
                <div className="cs-mockup__screen">
                  <span className="cs-mockup__label">{m.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 07 Dev & Tech ── */}
      <section className="cs-dev">
        <p className="eyebrow">— Tech &amp; Development</p>
        <h2 className="cs-dev__heading">{cs.dev.heading}</h2>
        <div className="cs-dev__body">
          <div className="cs-dev__text">
            {cs.dev.body.map((p, i) => (
              <p key={i} className="cs-dev__p">{p}</p>
            ))}
          </div>
          <div className="cs-dev__tech">
            {cs.dev.tech.map((t) => (
              <span key={t} className="cs-tech-tag">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 08 Results ── */}
      <section className="cs-results">
        <p className="eyebrow">— Results</p>
        <h2 className="cs-results__heading">What came out of it.</h2>
        <div className="rule" />
        <div className="cs-results__grid">
          {cs.results.map((r) => (
            <div key={r.label} className="cs-stat">
              <span className="cs-stat__value">{r.value}</span>
              <span className="cs-stat__label">{r.label}</span>
              <p className="cs-stat__desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 09 Next Case ── */}
      <section className="cs-next">
        <div className="cs-next__left">
          <p className="cs-next__eyebrow">{cs.next.label}</p>
          <a href={cs.next.href} className="cs-next__title">{cs.next.title} →</a>
          <p className="cs-next__desc">{cs.next.desc}</p>
        </div>
        <div className="cs-next__right">
          <Button variant="ghost" href="/work">← All Projects</Button>
        </div>
      </section>

      <FooterBar />
    </>
  )
}
