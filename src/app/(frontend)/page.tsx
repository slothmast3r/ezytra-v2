export const revalidate = 60

import React, { Suspense } from 'react'
import { ProjectSkeleton, JournalSkeleton } from './components/Skeletons'
import Nav from './components/Nav'
import HeroStats from './components/HeroStats'
import HeroHeadline from './components/HeroHeadline'
import Button from './components/Button'
import SiteFooter from './components/SiteFooter'
import AnimatedLink from './components/AnimatedLink'
import ProcessSection from './components/ProcessSection'
import { getPayload } from 'payload'
import config from '@payload-config'
import Image from 'next/image'

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
    desc: 'Figma-first UI/UX. Clean, fast, conversion-focused. I design for real users, not Dribbble.',
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

async function ProjectsList() {
  const payload = await getPayload({ config })
  const { docs: projects } = await payload.find({
    collection: 'projects',
    sort: 'order',
    limit: 100,
  })

  return (projects as any[]).map((p, i) => {
    const num = String(i + 1).padStart(2, '0')
    const tags = (p.tags ?? []).map((t: any) => t.tag)
    return (
      <div key={p.id} className="work__row">
        <div className="work__col-left">
          <div className="work__header">
            <span className="work__num">{num}</span>
            <div className="work__header-info">
              <h3 className="work__name">{p.name}</h3>
              <p className="work__location">{p.location}</p>
              <div className="work__tags">
                {tags.map((tag: string) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
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
        <div className="work__col-right">
          <div className="work__right-inner">
            <div className="work__right-content">
              <div className="work__meta">
                {p.live && <Button variant="badge">{p.live}</Button>}
                {p.href && (
                  <AnimatedLink className="btn btn--link" href={p.href}>
                    View →
                  </AnimatedLink>
                )}
              </div>
              <div className="mockup">
                <div className="mockup__chrome">
                  <div className="mockup__dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="mockup__url">{p.url}</div>
                </div>
                <div className="mockup__screen">
                  {p.image && typeof p.image === 'object' && (p.image.sizes?.projectCard?.url || p.image.url) ? (
                    <Image
                      src={p.image.sizes?.projectCard?.url || p.image.url}
                      alt={p.image.alt || p.name}
                      fill
                      sizes="(max-width: 1100px) 100vw, 40rem"
                      style={{ objectFit: 'cover' }}
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  })
}

async function JournalList() {
  const payload = await getPayload({ config })
  const { docs: posts } = await payload.find({
    collection: 'posts',
    sort: '-createdAt',
    limit: 4,
    where: { status: { not_equals: 'draft' } },
    select: { slug: true, tag: true, headline: true, status: true },
  })

  return (
    <>
      {posts.map((post) =>
        post.status === 'coming-soon' ? (
          <div key={post.slug} className="journal__row journal__row--muted">
            <span className="tag">{post.tag}</span>
            <p className="journal__title">{post.headline}</p>
            <span className="journal__status">Coming soon</span>
          </div>
        ) : (
          <a
            key={post.slug}
            href={`/journal/${post.slug}`}
            className="journal__row journal__row--link"
          >
            <span className="tag">{post.tag}</span>
            <p className="journal__title">{post.headline}</p>
            <span className="journal__arrow">→</span>
          </a>
        ),
      )}
    </>
  )
}

export default function HomePage() {
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
              <Button variant="primary" href="/work" chevron>
                View My Work
              </Button>
              <Button variant="secondary" href="/services" chevron>
                My Services
              </Button>
            </div>

            <HeroStats />
          </div>
        </div>

        <div className="hero__marquee">
          <div className="hero__marquee-track">
            <span>{MARQUEE_TEXT}</span>
            <span>{MARQUEE_TEXT}</span>
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

        <Suspense
          fallback={
            <>
              <ProjectSkeleton />
              <ProjectSkeleton />
              <ProjectSkeleton />
            </>
          }
        >
          <ProjectsList />
        </Suspense>
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
        <ProcessSection />
      </section>

      {/* 07 — Journal */}
      <section className="journal">
        <p className="eyebrow">— Journal</p>
        <h2 className="section-title">Thinking Out Loud</h2>
        <div className="rule" />
        <Suspense
          fallback={
            <>
              <JournalSkeleton />
              <JournalSkeleton />
              <JournalSkeleton />
              <JournalSkeleton />
            </>
          }
        >
          <JournalList />
        </Suspense>
        <div className="journal__footer">
          <Button variant="ghost" href="/journal" chevron>
            View All Articles
          </Button>
        </div>
      </section>

      {/* 08 — Contact */}
      <SiteFooter />
    </>
  )
}
