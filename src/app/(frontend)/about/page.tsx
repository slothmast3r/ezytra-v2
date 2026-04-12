import React from 'react'
import Nav from '../components/Nav'
import SiteFooter from '../components/SiteFooter'

const SKILLS = [
  {
    cat: 'Design',
    items: ['Figma', 'UI / UX', 'Wireframing', 'Branding', 'Design Systems'],
  },
  {
    cat: 'Development',
    items: ['Next.js / React', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Git'],
  },
  {
    cat: 'CMS & Data',
    items: ['Payload CMS', 'Sanity', 'PostgreSQL', 'Prisma', 'Windsurf / MBO'],
  },
  {
    cat: 'Infra & SEO',
    items: ['VPS / Linux', 'Nginx', 'On-page SEO', 'Core Web Vitals', 'Analytics'],
  },
]

const VALUES = [
  {
    num: '01',
    title: 'Craft over speed',
    desc: "I'd rather spend an extra day getting something right than ship something mediocre. Details matter — users notice.",
  },
  {
    num: '02',
    title: 'Honest work',
    desc: "I won't take on a project I can't do well, and I'll tell you if I think your idea won't work. No polite lies.",
  },
  {
    num: '03',
    title: 'Full ownership',
    desc: 'I design, I build, I deploy. No passing the buck between "the designer" and "the developer" — one point of contact.',
  },
  {
    num: '04',
    title: 'Simple over clever',
    desc: "The best code is the code you forget is there. The best design is the one users don't notice — they just use it.",
  },
]

const INTERESTS = [
  {
    icon: '🥋',
    name: 'Martial arts',
    desc: 'I train regularly — probably my favourite way to disconnect. Krav Maga, not quite a natural project.',
  },
  {
    icon: '📖',
    name: 'Reading',
    desc: 'Product design, stoicism, and the occasional thriller. Words always there.',
  },
  {
    icon: '🎵',
    name: 'Music',
    desc: "Electronic, jazz, and things that don't have a genre. Good taste is half of design.",
  },
  {
    icon: '✈️',
    name: 'Travelling',
    desc: 'Warsaw is home but I try to work from somewhere new a few weeks a year.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Nav />

      {/* 01 — Hero */}
      <section className="about-hero">
        <div className="about-hero__body">
          <div className="about-hero__left">
            <p className="eyebrow">About / 01</p>
            <h1 className="about-hero__headline">
              Designer.<br />
              Developer.<br />
              Based in Warsaw.
            </h1>
          </div>

          <div className="about-hero__right">
            <p className="about-hero__tagline">
              — I care about craft, clarity, and the details that make software feel alive.
            </p>
            <p className="about-hero__desc">
              I&apos;m Oskar — a one-person studio operating under the Ezytra name. I&apos;ve been
              designing and building websites for a few years, with a focus on getting things right
              rather than getting things done fast.
            </p>
            <div className="about-hero__footer">
              <div className="hero__available">
                <span className="hero__dot" />
                Available for new projects
              </div>
              <div className="about-hero__info">
                <span>Warsaw, Poland</span>
                <span>hello@ezytra.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Bio */}
      <section className="about-bio">
        <p className="eyebrow">— My Story</p>
        <div className="about-bio__grid">
          <div className="about-bio__image">
            <div className="about-bio__placeholder">
              <span>Add your photo here</span>
            </div>
          </div>
          <div className="about-bio__content">
            <h2 className="about-bio__title">A bit about me.</h2>
            <p className="about-bio__p">
              I got into web design because I wanted to build things that looked great and actually
              worked. The combination of design and code felt natural — one without the other always
              felt incomplete.
            </p>
            <p className="about-bio__p">
              Over the past few years I&apos;ve worked on martial arts centres, dance schools, and
              community platforms. Small but real projects where I had full ownership of the result
              — from the first Figma frame to the deployed server.
            </p>
            <p className="about-bio__p">
              I work under the Ezytra studio name, but there&apos;s no team of 20 behind it.
              It&apos;s just me — which means you always know who you&apos;re talking to, who did
              the work, and who to call if something breaks.
            </p>
          </div>
        </div>
      </section>

      {/* 03 — Skills */}
      <section className="about-skills">
        <p className="eyebrow">— Skills &amp; Tools</p>
        <h2 className="section-title">What I Work With</h2>
        <div className="about-skills__grid">
          {SKILLS.map((col) => (
            <div key={col.cat} className="about-skills__col">
              <h3 className="about-skills__cat">{col.cat}</h3>
              <ul className="about-skills__list">
                {col.items.map((item) => (
                  <li key={item} className="about-skills__item">— {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 04 — Values */}
      <section className="about-values">
        <p className="eyebrow">— What I Stand For</p>
        <h2 className="section-title">What I Believe In</h2>
        <div className="about-values__grid">
          {VALUES.map((v) => (
            <div key={v.num} className="about-values__item">
              <span className="about-values__num">{v.num}</span>
              <div className="about-values__rule" />
              <h3 className="about-values__title">{v.title}</h3>
              <p className="about-values__desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 05 — Interests */}
      <section className="about-interests">
        <p className="eyebrow">— Talking With</p>
        <h2 className="section-title">When I&apos;m not building websites...</h2>
        <div className="about-interests__grid">
          {INTERESTS.map((item) => (
            <div key={item.name} className="about-interests__item">
              <span className="about-interests__icon">{item.icon}</span>
              <h3 className="about-interests__name">{item.name}</h3>
              <p className="about-interests__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 06 — CTA / Footer */}
      <SiteFooter
        title="Sounds like a good fit?"
        buttonText="Let's Talk"
        buttonHref="mailto:hello@ezytra.com"
      />
    </>
  )
}
