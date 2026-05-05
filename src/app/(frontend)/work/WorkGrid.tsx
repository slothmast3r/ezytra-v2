'use client'

import { useState, useMemo } from 'react'
import Button from '../components/Button'
import Image from 'next/image'

interface Project {
  slug: string
  name: string
  location: string
  tags?: string[]
  desc: string
  url?: string
  href?: string
  type?: string
  year?: string
  featured?: boolean
  hasCaseStudy?: boolean
  status?: 'live' | 'dev' | 'completed' | 'archived'
  order: number
  image?: string
}

const STATUS_LABELS: Record<string, string> = {
  live: 'Live',
  dev: 'In Development',
  completed: 'Completed',
  archived: 'Archived',
}

function ProjectCardFeatured({ p, num }: { p: Project; num: string }) {
  return (
    <div className="wa-card wa-card--featured">
      {/* left: mockup */}
      <div className="wa-card__mockup">
        <div className="wa-card__chrome">
          <div className="wa-card__dots"><span /><span /><span /></div>
          <span className="wa-card__chrome-url">{p.url}</span>
        </div>
        <div className="wa-card__screen">
          {p.image ? (
            <Image
              src={p.image}
              alt={p.name}
              fill
              sizes="(max-width: 1100px) 100vw, 40rem"
              style={{ objectFit: 'cover' }}
            />
          ) : null}
        </div>
      </div>

      {/* right: info */}
      <div className="wa-card__info">
        {p.featured && <span className="wa-badge">✦ Featured</span>}
        <span className="wa-card__num">{num}</span>
        <h2 className="wa-card__name">{p.name}</h2>
        <p className="wa-card__location">{p.location}</p>
        <p className="wa-card__desc">{p.desc}</p>

        <div className="wa-card__tags">
          {(p.tags ?? []).map((t) => <span key={t} className="tag">{t}</span>)}
        </div>

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

        <div className="wa-card__actions">
          {p.hasCaseStudy && p.slug && (
            <Button href={`/work/${p.slug}`} variant="primary" chevron>
              View Case Study
            </Button>
          )}
          {p.url && p.href && (
            <a href={p.href} className="wa-card__live-link" target="_blank" rel="noopener noreferrer">
              {p.url}
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ marginLeft: '4px', verticalAlign: 'text-bottom' }}
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function ProjectCardSmall({ p, num }: { p: Project; num: string }) {
  return (
    <div className="wa-card wa-card--small">
      <div className="wa-card__mockup">
        <div className="wa-card__chrome">
          <div className="wa-card__dots"><span /><span /><span /></div>
          <span className="wa-card__chrome-url">{p.url}</span>
        </div>
        <div className="wa-card__screen">
          {p.image ? (
            <Image
              src={p.image}
              alt={p.name}
              fill
              sizes="(max-width: 1100px) 100vw, 25rem"
              style={{ objectFit: 'cover' }}
            />
          ) : null}
        </div>
      </div>

      <div className="wa-card__info">
        <span className="wa-card__num">{num}</span>
        <h2 className="wa-card__name">{p.name}</h2>
        <p className="wa-card__location">{p.location}</p>
        <p className="wa-card__desc">{p.desc}</p>

        <div className="wa-card__tags">
          {(p.tags ?? []).map((t) => <span key={t} className="tag">{t}</span>)}
        </div>

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

        <div className="wa-card__actions">
          {p.hasCaseStudy && p.slug && (
            <Button href={`/work/${p.slug}`} variant="primary" chevron>
              View Case Study
            </Button>
          )}
          {p.url && p.href && (
            <a href={p.href} className="wa-card__live-link" target="_blank" rel="noopener noreferrer">
              {p.url}
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ marginLeft: '4px', verticalAlign: 'text-bottom' }}
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function WorkGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState('All')

  // Generate dynamic filters from project tags
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
              className={`wa-filter${active === f ? ' wa-filter--active' : ''}`}
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
          <ProjectCardFeatured p={featuredProject} num="01" />
        )}
        
        {otherProjects.length > 0 && (
          <div className="wa-grid__row">
            {otherProjects.map((p) => (
              <ProjectCardSmall
                key={p.slug}
                p={p}
                num={String(allProjects.indexOf(p) + 1).padStart(2, '0')}
              />
            ))}
          </div>
        )}

        <div className="wa-grid__footer">
          More projects coming soon — currently working on new case studies.
        </div>
      </div>
    </>
  )
}
