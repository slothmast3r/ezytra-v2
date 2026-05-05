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
  tags?: string[]
  image?: string
  meta?: {
    title?: string
    description?: string
  }
  toc?: TocChapter[]
}
