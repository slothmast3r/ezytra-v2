'use client'

import { useState, useMemo } from 'react'
import Button from '../components/Button'
import Image from 'next/image'
import type { ProjectMeta } from '@/lib/project-meta'
import type { Locale } from '../i18n'

type Project = ProjectMeta

const GRID_COPY = {
  en: {
    statusLabels: {
      live: 'Live',
      offline: 'Offline',
      dev: 'In Development',
      completed: 'Completed',
      archived: 'Archived',
    } as Record<string, string>,
    metaLabels: { type: 'Type', year: 'Year', status: 'Status' },
    viewCaseStudy: 'View Case Study',
    filterLabel: 'FILTER:',
    allLabel: 'All',
    caseStudyLabel: 'Case Study',
    resultCount: (n: number) => `${n} result${n !== 1 ? 's' : ''}`,
  },
  pl: {
    statusLabels: {
      live: 'Online',
      offline: 'Offline',
      dev: 'W budowie',
      completed: 'Zakończony',
      archived: 'Archiwum',
    } as Record<string, string>,
    metaLabels: { type: 'Typ', year: 'Rok', status: 'Status' },
    viewCaseStudy: 'Zobacz case study',
    filterLabel: 'FILTR:',
    allLabel: 'Wszystkie',
    caseStudyLabel: 'Case study',
    resultCount: (n: number) => {
      if (n === 1) return '1 wynik'
      const lastTwo = n % 100
      const last = n % 10
      const few = last >= 2 && last <= 4 && (lastTwo < 12 || lastTwo > 14)
      return `${n} ${few ? 'wyniki' : 'wyników'}`
    },
  },
} as const

type GridCopy = (typeof GRID_COPY)[Locale]

function ProjectMetaBlock({ p, copy }: { p: Project; copy: GridCopy }) {
  return (
    <div className="wa-card__meta">
      {p.type && (
        <div className="wa-card__meta-item">
          <span className="wa-card__meta-label">{copy.metaLabels.type}</span>
          <span className="wa-card__meta-value">{p.type}</span>
        </div>
      )}
      {p.year && (
        <div className="wa-card__meta-item">
          <span className="wa-card__meta-label">{copy.metaLabels.year}</span>
          <span className="wa-card__meta-value">{p.year}</span>
        </div>
      )}
      {p.status && (
        <div className="wa-card__meta-item">
          <span className="wa-card__meta-label">{copy.metaLabels.status}</span>
          <span className={`wa-card__meta-value wa-card__meta-value--${p.status}`}>
            {copy.statusLabels[p.status] || p.status}
          </span>
        </div>
      )}
    </div>
  )
}

function ProjectActions({ p, copy }: { p: Project; copy: GridCopy }) {
  return (
    <div className="wa-card__actions">
      {p.hasCaseStudy && p.slug && (
        <Button href={`/work/${p.slug}`} variant="primary" chevron>
          {copy.viewCaseStudy}
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

function ProjectInfo({ p, num, copy }: { p: Project; num: string; copy: GridCopy }) {
  return (
    <>
      <span className="wa-card__num">{num}</span>
      <h2 className="wa-card__name">{p.name}</h2>
      <p className="wa-card__location">{p.location}</p>
      <p className="wa-card__desc">{p.desc}</p>
      <div className="wa-card__tags">
        {(p.tags ?? []).map((t) => <span key={t} className="tag">{t}</span>)}
      </div>
      <ProjectMetaBlock p={p} copy={copy} />
      <ProjectActions p={p} copy={copy} />
    </>
  )
}

function FeaturedProject({ p, num, copy }: { p: Project; num: string; copy: GridCopy }) {
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
        <ProjectInfo p={p} num={num} copy={copy} />
      </div>
    </article>
  )
}

function ArticleCard({ p, num, copy }: { p: Project; num: string; copy: GridCopy }) {
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
        <ProjectInfo p={p} num={num} copy={copy} />
      </div>
    </article>
  )
}

export default function WorkGrid({
  projects,
  locale = 'en',
}: {
  projects: Project[]
  locale?: Locale
}) {
  const copy = GRID_COPY[locale]
  // Internal filter keys stay locale-independent; only labels are translated.
  const [active, setActive] = useState('All')

  const dynamicFilters = useMemo(() => {
    const tags = new Set<string>()
    projects.forEach((p) => {
      p.tags?.forEach((t) => tags.add(t))
    })
    return [
      { key: 'All', label: copy.allLabel },
      { key: 'Case Study', label: copy.caseStudyLabel },
      ...Array.from(tags).sort().map((t) => ({ key: t, label: t })),
    ]
  }, [projects, copy])

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
          <span className="wa-filters__label">{copy.filterLabel}</span>
          {dynamicFilters.map((f) => (
            <button
              key={f.key}
              type="button"
              className={`wa-filter${active === f.key ? ' wa-filter--active' : ''}`}
              aria-pressed={active === f.key}
              onClick={() => setActive(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <span className="wa-filters__count">{copy.resultCount(filtered.length)}</span>
      </div>

      {/* Grid */}
      <div className="wa-grid">
        {featuredProject && (
          <FeaturedProject p={featuredProject} num="01" copy={copy} />
        )}

        {otherProjects.length > 0 && (
          <div className="wa-grid__row">
            {otherProjects.map((p) => (
              <ArticleCard
                key={p.slug}
                p={p}
                num={String(allProjects.indexOf(p) + 1).padStart(2, '0')}
                copy={copy}
              />
            ))}
          </div>
        )}
      </div>
    </>
  )
}
