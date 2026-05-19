export const revalidate = 60

import React, { Suspense } from 'react'
import { ProjectSkeleton, JournalSkeleton } from './components/Skeletons'
import Nav from './components/Nav'
import HeroHeadline from './components/HeroHeadline'
import Button from './components/Button'
import SiteFooter from './components/SiteFooter'
import AnimatedLink from './components/AnimatedLink'
import ProcessSection from './components/ProcessSection'
import { getPayload } from 'payload'
import config from '@payload-config'
import { getAllProjects } from '@/lib/projects'
import Image from 'next/image'

const STACK = [
  { icon: '/icons/figma.svg', name: 'Figma' },
  { icon: '/icons/nextjs.svg', name: 'Next.js' },
  { icon: '/icons/payload.png', name: 'Payload CMS' },
  { icon: '/icons/sanity.png', name: 'Sanity' },
  { icon: '/icons/vps.png', name: 'VPS Deploy' },
  { icon: '/icons/seo.png', name: 'SEO' },
]

const SERVICES = [
  {
    num: '01',
    title: 'Web Design',
    desc: 'Figma-first UI/UX. Clean, fast, conversion-focused. I design for the people who use the site, not for design awards.',
  },
  {
    num: '02',
    title: 'Development',
    desc: 'Next.js sites, built by hand. No page builders, no bloated themes. Fast, accessible, scalable.',
  },
  {
    num: '03',
    title: 'CMS Integration',
    desc: 'Payload or Sanity. You edit your own content without touching code.',
  },
  {
    num: '04',
    title: 'SEO & Deployment',
    desc: "On-page SEO from day one. Deployed to VPS. I handle the full stack so you don't have to.",
  },
]

async function ProjectsList() {
  const projects = await getAllProjects()

  return projects.map((p, i) => {
    const num = String(i + 1).padStart(2, '0')
    const tags = p.tags ?? []
    return (
      <div key={p.slug} className="work__row">
        <div className="work__col-left">
          <div className="work__header">
            <span className="work__num">{num}</span>
            <div className="work__header-info">
              <h3 className="work__name">{p.name}</h3>
              <p className="work__location">{p.location}</p>
              <div className="work__tags">
                {tags.map((tag) => (
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
                {p.status === 'live' && <Button variant="badge">Live</Button>}
                {p.hasCaseStudy && p.slug ? (
                  <AnimatedLink className="btn btn--link" href={`/work/${p.slug}`}>
                    Case Study →
                  </AnimatedLink>
                ) : p.href ? (
                  <AnimatedLink className="btn btn--link" href={p.href}>
                    View →
                  </AnimatedLink>
                ) : null}
              </div>
              <figure className="mockup">
                <div className="mockup__screen">
                  {p.image && (
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 1100px) 100vw, 40rem"
                      style={{ objectFit: 'cover' }}
                    />
                  )}
                </div>
                <figcaption className="mockup__caption">{p.url}</figcaption>
              </figure>
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
        <div className="hero__body">
          <p className="hero__eyebrow">DESIGNER &amp; DEVELOPER · WARSAW, PL</p>
          <div className="hero__available">
            <span className="hero__dot" />
            Available for projects
          </div>
          <HeroHeadline />
          <p className="hero__tagline">You work directly with me. No handoffs, no markup.</p>
          <div className="hero__ctas">
            <Button variant="primary" href="/contact" chevron>
              Contact Me
            </Button>
            <Button variant="secondary" href="/work" chevron>
              View My Work
            </Button>
          </div>
        </div>

      </section>

      {/* 03 — Stack */}
      <section className="stack">
        <div className="stack__grid">
          {STACK.map((item) => (
            <div key={item.name} className="stack__item">
              <span className="stack__icon">
                <Image src={item.icon} alt="" width={32} height={32} />
              </span>
              <p className="stack__name">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 04 — Work */}
      <section className="work" id="work">
        <h2 className="section-title">Selected work</h2>
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
        <h2 className="section-title">Services</h2>
        <div className="services__grid">
          {SERVICES.map((s) => (
            <div key={s.num} className="service">
              <span className="service__num">{s.num}</span>
              <div className="service__rule" />
              <h3 className="service__title">{s.title}</h3>
              <p className="service__desc">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="services__footer">
          <Button variant="ghost" href="/services" chevron>
            View all services
          </Button>
        </div>
      </section>

      {/* 06 — Process */}
      <section className="process" id="process">
        <h2 className="section-title">Process</h2>
        <ProcessSection />
      </section>

      {/* 07 — Journal */}
      <section className="journal">
        <h2 className="section-title">Journal</h2>
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
