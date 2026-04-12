import React from 'react'
import Nav from './components/Nav'
import HeroStats from './components/HeroStats'
import HeroHeadline from './components/HeroHeadline'
import Button from './components/Button'
import SiteFooter from './components/SiteFooter'
import AnimatedLink from './components/AnimatedLink'
import { getPayload } from 'payload'
import config from '@payload-config'

const MARQUEE_TEXT =
  'Next.js  ·  Figma  ·  Payload CMS  ·  Sanity  ·  VPS Deploy  ·  SEO  ·  UI/UX  ·  Branding  ·  Next.js  ·  Figma  ·  Payload CMS  ·  Sanity  ·  VPS Deploy  ·  SEO  ·  UI/UX  ·  Branding  ·  Next.js  ·  Figma  ·  Payload CMS  ·  Sanity  ·  VPS Deploy  ·  SEO  ·  UI/UX  ·  Branding  ·  '

const STACK = [
  { icon: '✦', name: 'Figma', desc: 'UI / UX Design' },
  { icon: '⬡', name: 'Next.js', desc: 'React Framework' },
  { icon: '◈', name: 'Payload CMS', desc: 'Headless CMS' },
  { icon: '◆', name: 'Sanity', desc: 'Structured Content' },
  { icon: '▲', name: 'VPS Deploy', desc: 'Linux / Nginx' },
  { icon: '◎', name: 'SEO', desc: 'On-page & Technical' },
]

const SERVICES = [
  {
    num: '01',
    title: 'Web Design',
    id: 'web-design',
    desc: "Figma-first UI/UX. Clean, fast, conversion-focused. I design for real users, not Dribbble.",
  },
  {
    num: '02',
    title: 'Development',
    id: 'development',
    desc: 'Next.js sites, built by hand. No page builders, no bloated themes. Fast, accessible, scalable.',
  },
  {
    num: '03',
    title: 'CMS Integration',
    id: 'cms-integration',
    desc: 'Payload or Sanity — you edit your own content without ever touching code.',
  },
  {
    num: '04',
    title: 'SEO & Deployment',
    id: 'seo-deployment',
    desc: "On-page SEO from day one. Deployed to VPS. I handle the full stack so you don't have to.",
  },
]

const PROCESS = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We talk about your goals, audience, and what success looks like. No briefs, just a real conversation.',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'I start in Figma — wireframes first, then high-fidelity. You review and give feedback at every stage.',
  },
  {
    num: '03',
    title: 'Build',
    desc: 'I code what I designed. Next.js, your CMS of choice, deployed to your server or mine.',
  },
  {
    num: '04',
    title: 'Launch',
    desc: 'Full QA, SEO audit, performance check. I stay on hand after go-live.',
  },
]

const JOURNAL = [
  { tag: 'Process', title: 'How I Build a Next.js Site with Sanity in a Weekend' },
  { tag: 'Dev', title: 'Why Your Website Loads Slow — And How to Fix It' },
  { tag: 'Case Study', title: 'What I Learned Designing for a Martial Arts Centre' },
  { tag: 'Tools', title: 'Payload vs Sanity: Which CMS for Small Businesses?' },
]

export default async function HomePage() {
  const payload = await getPayload({ config })

  const { docs: projects } = await payload.find({
    collection: 'projects',
    sort: 'order',
    limit: 100,
  })
  return (
    <>
      {/* 01 — Nav */}
      <Nav />

      {/* 02 — Hero */}
      <section className="hero">
        <div className="hero__grid" aria-hidden="true">
          {Array.from({ length: 13 }).map((_, i) => (
            <div key={i} className="hero__grid-line" />
          ))}
        </div>

        <div className="hero__body">
          <div className="hero__left">
            <p className="hero__eyebrow">DESIGNER &amp; DEVELOPER — WARSAW, PL</p>
            <div className="hero__available">
              <span className="hero__dot" />
              Available for projects
            </div>
            <HeroHeadline />
            <p className="hero__tagline">— You work directly with me. No handoffs, no markup.</p>
          </div>

          <div className="hero__right">
            <p className="hero__desc">
              From your first conversation to a live, fast, search-optimised website — I handle
              design, code, CMS, and deployment.
            </p>

            <div className="hero__ctas">
              <Button variant="primary" href="/work" chevron>View My Work</Button>
              <Button variant="secondary" href="/services" chevron>My Services</Button>
            </div>

            <HeroStats />
          </div>
        </div>

        <div className="hero__marquee">
          <div className="hero__marquee-track">
            <span>{MARQUEE_TEXT}</span>
            <span aria-hidden="true">{MARQUEE_TEXT}</span>
          </div>
        </div>
      </section>

      {/* 03 — Stack */}
      <section className="stack">
        <div className="stack__grid">
          {STACK.map((item, i) => (
            <div key={item.name} className="stack__item">
              <div className="stack__top">
                <div className="stack__dot" />
                {i === 0 && <span className="stack__label">MY STACK</span>}
              </div>
              <span className="stack__icon">{item.icon}</span>
              <p className="stack__name">{item.name}</p>
              <p className="stack__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 04 — Work */}
      <section className="work" id="work">
        <p className="eyebrow">— Selected Work</p>
        <h2 className="section-title">Projects</h2>
        <div className="rule" />

        {projects.map((p, i) => {
          const num = String(i + 1).padStart(2, '0')
          const tags = (p.tags ?? []).map((t) => t.tag)
          return (
            <div key={p.id} className="work__row">
              {/* left col: header + expandable desc */}
              <div className="work__col-left">
                <div className="work__header">
                  <span className="work__num">{num}</span>
                  <div className="work__header-info">
                    <h3 className="work__name">{p.name}</h3>
                    <p className="work__location">{p.location}</p>
                    <div className="work__tags">
                      {tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="work__body">
                  <div className="work__body-inner">
                    <p className="work__desc">{p.desc}</p>
                  </div>
                </div>
              </div>

              {/* right col: appears on hover */}
              <div className="work__col-right">
                <div className="work__right-inner">
                  <div className="work__meta">
                    {p.live && <Button variant="badge">{p.live}</Button>}
                    {p.href && <AnimatedLink className="btn btn--link" href={p.href}>View →</AnimatedLink>}
                  </div>
                  <div className="mockup">
                    <div className="mockup__chrome">
                      <div className="mockup__dots">
                        <span /><span /><span />
                      </div>
                      <div className="mockup__url">{p.url}</div>
                    </div>
                    <div className="mockup__screen" />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </section>

      {/* 05 — Services */}
      <section className="services" id="services">
        <p className="eyebrow">— What I Offer</p>
        <h2 className="section-title">Services</h2>
        <div className="services__grid">
          {SERVICES.map((s) => (
            <div key={s.num} className="service">
              <span className="service__num">{s.num}</span>
              <div className="service__rule" />
              <h3 className="service__title">{s.title}</h3>
              <p className="service__desc">{s.desc}</p>
              <AnimatedLink className="service__link" href={`/services#${s.id}`}>
                Learn more →
              </AnimatedLink>
            </div>
          ))}
        </div>
      </section>

      {/* 06 — Process */}
      <section className="process" id="process">
        <p className="eyebrow">— How I Work</p>
        <h2 className="section-title">My Process</h2>
        <div className="process__grid">
          {PROCESS.map((s) => (
            <div key={s.num} className="process__step">
              <span className="process__num">{s.num}</span>
              <div className="process__rule" />
              <h3 className="process__title">{s.title}</h3>
              <p className="process__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 07 — Journal */}
      <section className="journal" id="journal">
        <p className="eyebrow">— Journal</p>
        <h2 className="section-title">Thinking Out Loud</h2>
        <div className="rule" />
        {JOURNAL.map((post) => (
          <div key={post.title} className="journal__row">
            <span className="tag">{post.tag}</span>
            <p className="journal__title">{post.title}</p>
            <span className="journal__status">Coming soon</span>
          </div>
        ))}
      </section>

      {/* 08 — Contact */}
      <SiteFooter />
    </>
  )
}
