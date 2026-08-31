export interface TocChild {
  id: string
  title: string
}

export interface TocChapter {
  id: string
  title: string
  children?: TocChild[]
}

export interface ProjectMeta {
  slug: string
  name: string
  location: string
  type?: string
  year?: string
  order: number
  status?: 'live' | 'dev' | 'completed' | 'archived'
  featured?: boolean
  hasCaseStudy: boolean
  url?: string
  href?: string
  desc: string
  // Polish overrides for the /pl mirror; English values are the fallback.
  descPl?: string
  locationPl?: string
  typePl?: string
  tags?: string[]
  image?: string
  video?: string
  meta?: {
    title?: string
    description?: string
  }
  toc?: TocChapter[]
}

/** Returns a copy with Polish frontmatter overrides applied (falls back to English). */
export function localizeProject(p: ProjectMeta, locale: 'en' | 'pl'): ProjectMeta {
  if (locale !== 'pl') return p
  return {
    ...p,
    desc: p.descPl ?? p.desc,
    location: p.locationPl ?? p.location,
    type: p.typePl ?? p.type,
  }
}
