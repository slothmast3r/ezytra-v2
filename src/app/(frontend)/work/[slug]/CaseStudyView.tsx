import type { ComponentType } from 'react'
import Nav from '../../components/Nav'
import Button from '../../components/Button'
import FooterBar from '../../components/FooterBar'
import CaseStudyTOC from './CaseStudyTOC'
import TrackedLink from '../../components/TrackedLink'
import type { ProjectMeta } from '@/lib/project-meta'
import './case-study.css'

export default function CaseStudyView({
  meta,
  Content,
  eyebrow,
  fullHref,
  backLink,
  nextProject,
}: {
  meta: ProjectMeta
  Content: ComponentType
  eyebrow: string
  /** When set, the page ends with a CTA to the long-form case study at this href. */
  fullHref?: string
  backLink: { href: string; label: string }
  nextProject: ProjectMeta
}) {
  const tags = (meta.tags ?? []).join(' · ')
  const tocItems = meta.toc ?? []

  return (
    <>
      <Nav />

      <section className="cs-hero">
        <div className="cs-hero__left">
          <p className="cs-hero__eyebrow">{eyebrow}</p>
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
              eventParams={{ project: meta.slug }}
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
          {fullHref && (
            <section className="cs-fullcta">
              <div>
                <p className="cs-fullcta__eyebrow">— The whole story</p>
                <p className="cs-fullcta__text">
                  Every decision here has a longer version — hero anatomy, rejected layouts, the
                  performance work, and the honest trade-offs.
                </p>
              </div>
              <Button href={fullHref} variant="primary" chevron>
                Full case study
              </Button>
            </section>
          )}
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
          <Button variant="ghost" href={backLink.href}>
            {backLink.label}
          </Button>
        </div>
      </section>

      <FooterBar />
    </>
  )
}
