'use client'

import { useState, useMemo } from 'react'
import Button from '../components/Button'
import Image from 'next/image'
import type { ProjectMeta } from '@/lib/project-meta'

type Project = ProjectMeta

const STATUS_LABELS: Record<string, string> = {
  live: 'Live',
  dev: 'In Development',
  completed: 'Completed',
  archived: 'Archived',
}

function ProjectMetaBlock({ p }: { p: Project }) {
  return (
    <div className="wa-card__meta">
      {p.type && (
        <div className="wa-card__meta-item">
          <span className="wa-card__meta-label">Type</span>
          <span className="wa-card__meta-value">{p.type}</span>
        </div>
      )}
      {p.year && (
        <div className="wa-card__meta-item">
          <span className="wa-card__meta-label">Year</span>
          <span className="wa-card__meta-value">{p.year}</span>
        </div>
      )}
      {p.status && (
        <div className="wa-card__meta-item">
          <span className="wa-card__meta-label">Status</span>
          <span className={`wa-card__meta-value wa-card__meta-value--${p.status}`}>
            {STATUS_LABELS[p.status] || p.status}
          </span>
        </div>
      )}
    </div>
  )
}

function ProjectActions({ p }: { p: Project }) {
  return (
    <div className="wa-card__actions">
      {p.hasCaseStudy && p.slug && (
        <Button href={`/work/${p.slug}`} variant="primary" chevron>
          View Case Study
        </Button>
      )}
      {p.url && p.href && (
        <a href={p.href} className="wa-card__live-link" target="_blank" rel="noopener noreferrer">
          <span>{p.url}</span>
          <span aria-hidden="true" className="wa-card__live-arrow">↗</span>
        </a>
      )}
    </div>
  )
}

function ProjectInfo({ p, num }: { p: Project; num: string }) {
  return (
    <>
      <span className="wa-card__num">{num}</span>
      <h2 className="wa-card__name">{p.name}</h2>
      <p className="wa-card__location">{p.location}</p>
      <p className="wa-card__desc">{p.desc}</p>
      <div className="wa-card__tags">
        {(p.tags ?? []).map((t) => <span key={t} className="tag">{t}</span>)}
      </div>
      <ProjectMetaBlock p={p} />
      <ProjectActions p={p} />
    </>
  )
}

function FeaturedProject({ p, num }: { p: Project; num: string }) {
  return (
    <article className="wa-featured">
      <div className={`wa-featured__media${p.video ? ' wa-featured__media--with-video' : ''}`}>
        {p.video && (
          <video
            className="wa-featured__video"
            src={p.video}
            poster={p.image}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={p.name}
          />
        )}
        {p.image && (
          <Image
            className="wa-featured__poster"
            src={p.image}
            alt={p.name}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
        )}
      </div>
      <div className="wa-featured__body">
        <ProjectInfo p={p} num={num} />
      </div>
    </article>
  )
}

function ArticleCard({ p, num }: { p: Project; num: string }) {
  return (
    <article className="wa-article">
      <div className="wa-article__media">
        {p.image && (
          <Image
            src={p.image}
            alt={p.name}
            fill
            sizes="(max-width: 1100px) 100vw, 30rem"
            style={{ objectFit: 'cover' }}
          />
        )}
      </div>
      <div className="wa-article__body">
        <ProjectInfo p={p} num={num} />
      </div>
    </article>
  )
}

export default function WorkGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState('All')

  const dynamicFilters = useMemo(() => {
    const tags = new Set<string>()
    projects.forEach((p) => {
      p.tags?.forEach((t) => tags.add(t))
    })
    return ['All', 'Case Study', ...Array.from(tags).sort()]
  }, [projects])

  const filtered = useMemo(() => {
    if (active === 'All') return projects
    if (active === 'Case Study') return projects.filter((p) => p.hasCaseStudy)
    return projects.filter((p) => (p.tags ?? []).includes(active))
  }, [active, projects])

  const featuredProject = filtered.find((p) => p.featured)
  const otherProjects = filtered.filter((p) => p.slug !== featuredProject?.slug)
  const allProjects = featuredProject ? [featuredProject, ...otherProjects] : otherProjects

  return (
    <>
      {/* Filters */}
      <div className="wa-filters">
        <div className="wa-filters__left">
          <span className="wa-filters__label">FILTER:</span>
          {dynamicFilters.map((f) => (
            <button
              key={f}
              type="button"
              className={`wa-filter${active === f ? ' wa-filter--active' : ''}`}
              aria-pressed={active === f}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <span className="wa-filters__count">{filtered.length} result{filtered.length !== 1 ? 's' : ''}</span>
      </div>

      {/* Grid */}
      <div className="wa-grid">
        {featuredProject && (
          <FeaturedProject p={featuredProject} num="01" />
        )}

        {otherProjects.length > 0 && (
          <div className="wa-grid__row">
            {otherProjects.map((p) => (
              <ArticleCard
                key={p.slug}
                p={p}
                num={String(allProjects.indexOf(p) + 1).padStart(2, '0')}
              />
            ))}
          </div>
        )}
      </div>
    </>
  )
}
