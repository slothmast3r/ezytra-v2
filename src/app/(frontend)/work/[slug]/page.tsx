import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Nav from '../../components/Nav'
import Button from '../../components/Button'
import FooterBar from '../../components/FooterBar'
import CaseStudyTOC from './CaseStudyTOC'
import TrackedLink from '../../components/TrackedLink'
import { SITE_DATA } from '../../data'
import { getAllProjects, getProjectBySlug, getProjectSlugs } from '@/lib/projects'
import './case-study.css'

export async function generateStaticParams() {
  const slugs = await getProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const meta = (await getProjectBySlug(slug))?.meta
  if (!meta) return {}
  const title = meta.meta?.title || meta.name
  const description = meta.meta?.description || meta.desc
  return {
    title: `${title} — ${SITE_DATA.brand}`,
    description,
    openGraph: { title, description, type: 'website' },
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)
  if (!project || !project.meta.hasCaseStudy) notFound()

  const { meta, Content } = project
  const allProjects = await getAllProjects()
  const currentIndex = allProjects.findIndex((p) => p.slug === slug)
  const nextProject = allProjects[currentIndex + 1] || allProjects[0]
  const tags = (meta.tags ?? []).join(' · ')
  const tocItems = meta.toc ?? []

  return (
    <>
      <Nav />

      <section className="cs-hero">
        <div className="cs-hero__left">
          <p className="cs-hero__eyebrow">CASE STUDY — {String(meta.order || 0).padStart(2, '0')}</p>
          <h1 className="cs-hero__name">{meta.name}</h1>
          <p className="cs-hero__subtitle">{meta.location}</p>
          <p className="cs-hero__desc">{meta.desc}</p>
          {meta.href && (
            <TrackedLink
              href={meta.href}
              className="cs-hero__link"
              target="_blank"
              rel="noopener noreferrer"
              event="project_live_link_click"
              eventParams={{ project: slug }}
            >
              {meta.url || 'Visit Site'} ↗
            </TrackedLink>
          )}
        </div>

        <div className="cs-hero__right">
          <div className="cs-meta-grid">
            <div className="cs-meta-card">
              <span className="cs-meta-card__label">Client</span>
              <span className="cs-meta-card__value">{meta.name}</span>
            </div>
            <div className="cs-meta-card">
              <span className="cs-meta-card__label">Type</span>
              <span className="cs-meta-card__value">{meta.type || 'Web Design & Dev'}</span>
            </div>
            <div className="cs-meta-card">
              <span className="cs-meta-card__label">Stack</span>
              <span className="cs-meta-card__value">{tags}</span>
            </div>
            <div className="cs-meta-card">
              <span className="cs-meta-card__label">Year</span>
              <span className="cs-meta-card__value">{meta.year || '2025'}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="art-body">
        <CaseStudyTOC items={tocItems} />
        <div className="cs-content">
          <Content />
        </div>
      </div>

      <section className="cs-next">
        <div className="cs-next__left">
          <p className="cs-next__eyebrow">NEXT CASE STUDY</p>
          <a href={`/work/${nextProject.slug}`} className="cs-next__title">
            {nextProject.name} →
          </a>
          <p className="cs-next__desc">{nextProject.location}</p>
        </div>
        <div className="cs-next__right">
          <Button variant="ghost" href="/work">
            ← All Projects
          </Button>
        </div>
      </section>

      <FooterBar />
    </>
  )
}
