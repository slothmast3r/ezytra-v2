import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import React from 'react'
import Image from 'next/image'
import Nav from '../../components/Nav'
import Button from '../../components/Button'
import FooterBar from '../../components/FooterBar'
import { RichText } from '../../components/RichText'
import CaseStudyTOC from './CaseStudyTOC'
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

function getBlockTitle(block: any): string {
  switch (block.blockType) {
    case 'overview': return 'Overview'
    case 'challenge': return block.heading || 'Challenge'
    case 'process': return block.heading || 'Process'
    case 'results': return 'Results'
    case 'textSection': return block.heading || 'Details'
    case 'imageBlock': return block.caption || 'Image'
    default: return 'Section'
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
  if (!project || !project.hasCaseStudy) notFound()

  // Fetch all for pagination
  const { docs: allProjects } = await payload.find({
    collection: 'projects',
    sort: 'order',
    limit: 100,
  })
  
  const currentIndex = allProjects.findIndex((p: any) => p.slug === slug)
  const nextProject = allProjects[currentIndex + 1] || allProjects[0]
  const tags = (project.tags ?? []).map((t: any) => t.tag).join(' · ')

  const tocItems = (project.layout ?? []).map((block: any, i: number) => ({
    num: String(i + 1).padStart(2, '0'),
    anchor: `section-${i}`,
    title: getBlockTitle(block)
  }))

  return (
    <>
      <Nav />

      {/* ── 01 Hero ── */}
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

      {/* ── Dynamic Layout Blocks ── */}
      <div className="art-body">
        <CaseStudyTOC items={tocItems} />

        <div className="cs-content">
          {project.layout?.map((block: any, i: number) => {
            const anchor = `section-${i}`
            
            switch (block.blockType) {
              case 'overview':
                return (
                  <section key={i} id={anchor} className="cs-overview" style={{ borderBottom: '1px solid var(--border)', paddingLeft: 0, paddingRight: 0 }}>
                    <p className="eyebrow">— Overview</p>
                    <div className="cs-overview__grid">
                      <div className="cs-overview__col">
                        <h3 className="cs-overview__title">The Brief</h3>
                        <RichText content={block.brief} />
                      </div>
                      <div className="cs-overview__col">
                        <h3 className="cs-overview__title">My Role</h3>
                        <RichText content={block.myRole} />
                      </div>
                    </div>
                  </section>
                )

              case 'challenge':
                return (
                  <section key={i} id={anchor} className="cs-challenge" style={{ borderBottom: '1px solid var(--border)', paddingLeft: 0, paddingRight: 0 }}>
                    <p className="eyebrow">— The Challenge</p>
                    <h2 className="cs-challenge__heading">{block.heading}</h2>
                    <div className="rule" />
                    <div className="cs-challenge__body">
                      <RichText content={block.description} />
                    </div>
                    {block.constraints && (
                      <div className="cs-challenge__constraints">
                        {block.constraints.map((c: any, j: number) => (
                          <div key={j} className="cs-constraint">— {c.text}</div>
                        ))}
                      </div>
                    )}
                  </section>
                )

              case 'process':
                return (
                  <section key={i} id={anchor} className="cs-design" style={{ borderBottom: '1px solid var(--border)', paddingLeft: 0, paddingRight: 0 }}>
                    <p className="eyebrow">— Design Process</p>
                    <h2 className="cs-design__heading">{block.heading}</h2>
                    <div className="cs-design__grid">
                      {block.steps?.map((step: any, j: number) => (
                        <div key={j} className="cs-week">
                          <span className="cs-week__label">{step.label}</span>
                          <div className="cs-week__rule" />
                          <h3 className="cs-week__title">{step.title}</h3>
                          <RichText content={step.description} />
                        </div>
                      ))}
                    </div>
                    {block.note && (
                      <div className="cs-design__note">
                        <span className="cs-design__note-icon">✦</span>
                        <span className="cs-design__note-tag">Designed in Figma</span>
                        <span className="cs-design__note-text">{block.note}</span>
                      </div>
                    )}
                  </section>
                )

              case 'results':
                return (
                  <section key={i} id={anchor} className="cs-results" style={{ borderBottom: '1px solid var(--border)', paddingLeft: 0, paddingRight: 0 }}>
                    <p className="eyebrow">— Results</p>
                    <h2 className="cs-results__heading">What came out of it.</h2>
                    <div className="rule" />
                    <div className="cs-results__grid">
                      {block.stats?.map((stat: any, j: number) => (
                        <div key={j} className="cs-stat">
                          <span className="cs-stat__value">{stat.value}</span>
                          <span className="cs-stat__label">{stat.label}</span>
                          <p className="cs-stat__desc">{stat.description}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )

              case 'textSection':
                return (
                  <section key={i} id={anchor} className="cs-overview" style={{ borderBottom: '1px solid var(--border)', paddingLeft: 0, paddingRight: 0 }}>
                    <div className="cs-overview__grid" style={{ gridTemplateColumns: '1fr' }}>
                      <div className="cs-overview__col">
                        {block.heading && <h3 className="cs-overview__title" style={{ marginBottom: '1.5rem' }}>{block.heading}</h3>}
                        <RichText content={block.body} className="cs-overview__text" />
                      </div>
                    </div>
                  </section>
                )

              case 'imageBlock':
                const img = block.image
                if (!img || typeof img !== 'object') return null
                
                return (
                  <section key={i} id={anchor} className={`cs-image cs-image--${block.size || 'large'}`} style={{ borderBottom: '1px solid var(--border)', paddingLeft: 0, paddingRight: 0 }}>
                    <div className="cs-image__container">
                      <Image 
                        src={img.url} 
                        alt={img.alt || 'Case study image'} 
                        width={img.width || 1200} 
                        height={img.height || 800}
                        className="cs-image__img"
                      />
                      {block.caption && <p className="cs-image__caption">{block.caption}</p>}
                    </div>
                  </section>
                )

              default:
                return null
            }
          })}
        </div>
      </div>

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
