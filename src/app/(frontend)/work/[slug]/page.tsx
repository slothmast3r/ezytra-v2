import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import React from 'react'
import Nav from '../../components/Nav'
import Button from '../../components/Button'
import FooterBar from '../../components/FooterBar'
import { Metadata } from 'next'
import { SITE_DATA } from '../../data'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'projects',
    where: { slug: { equals: slug } },
    limit: 1,
  })

  const project = docs[0] as any
  if (!project) return {}

  const title = project.meta?.title || project.name
  const description = project.meta?.description || project.desc

  return {
    title: `${title} — ${SITE_DATA.brand}`,
    description: description,
    openGraph: {
      title: title,
      description: description,
      type: 'website',
    },
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'projects',
    where: { slug: { equals: slug } },
    limit: 1,
  })

  const project = docs[0] as any
  if (!project) notFound()

  // Fetch next project (simple order + 1 or wrap)
  const { docs: allProjects } = await payload.find({
    collection: 'projects',
    sort: 'order',
    limit: 100,
  })
  
  const currentIndex = allProjects.findIndex((p: any) => p.slug === slug)
  const nextProject = allProjects[currentIndex + 1] || allProjects[0]

  const tags = (project.tags ?? []).map((t: any) => t.tag).join(' · ')

  return (
    <>
      <Nav />

      {/* ── Hero ── */}
      <section className="cs-hero">
        <div className="cs-hero__left">
          <p className="cs-hero__eyebrow">CASE STUDY — {String(project.order || 0).padStart(2, '0')}</p>
          <h1 className="cs-hero__name">{project.name}</h1>
          <p className="cs-hero__subtitle">{project.location}</p>
          <p className="cs-hero__desc">{project.desc}</p>
          {project.href && (
            <a href={project.href} className="cs-hero__link" target="_blank" rel="noopener noreferrer">
              {project.url || 'Visit Site'} ↗
            </a>
          )}
        </div>

        <div className="cs-hero__right">
          <div className="cs-meta-grid">
            <div className="cs-meta-card">
              <span className="cs-meta-card__label">Client</span>
              <span className="cs-meta-card__value">{project.name}</span>
            </div>
            <div className="cs-meta-card">
              <span className="cs-meta-card__label">Type</span>
              <span className="cs-meta-card__value">{project.type || 'Web Design & Dev'}</span>
            </div>
            <div className="cs-meta-card">
              <span className="cs-meta-card__label">Stack</span>
              <span className="cs-meta-card__value">{tags}</span>
            </div>
            <div className="cs-meta-card">
              <span className="cs-meta-card__label">Year</span>
              <span className="cs-meta-card__value">{project.year || '2025'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Note: I'm keeping the rest of the sections empty or using placeholders since the current Project schema 
          is quite simple compared to the mock case study. You might want to expand the Project schema 
          later to include these detailed sections like overview, challenge, design process etc. */}
      
      <section className="cs-overview">
        <p className="eyebrow">— Overview</p>
        <div className="cs-overview__grid">
          <div className="cs-overview__col">
            <h3 className="cs-overview__title">The Brief</h3>
            <p className="cs-overview__text">{project.desc}</p>
          </div>
          <div className="cs-overview__col">
            <h3 className="cs-overview__title">My Role</h3>
            <p className="cs-overview__text">End-to-end: discovery, design in Figma, development in Next.js, and deployment. Full ownership of the technical stack and creative direction.</p>
          </div>
        </div>
      </section>

      {/* ── Placeholder for case study content ── */}
      <section className="wa-hero" style={{ borderTop: '1px solid var(--border)', padding: '8rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'var(--fz-h2)', fontWeight: '400', letterSpacing: '-0.03em', maxWidth: '800px', margin: '0 auto' }}>
          Detailed case study content is managed in Figma. For deep dives into process and technical challenges, let's talk.
        </h2>
      </section>

      {/* ── Next Case ── */}
      <section className="cs-next">
        <div className="cs-next__left">
          <p className="cs-next__eyebrow">NEXT CASE STUDY</p>
          <a href={`/work/${nextProject.slug}`} className="cs-next__title">{nextProject.name} →</a>
          <p className="cs-next__desc">{nextProject.location}</p>
        </div>
        <div className="cs-next__right">
          <Button variant="ghost" href="/work">← All Projects</Button>
        </div>
      </section>

      <FooterBar />
    </>
  )
}
