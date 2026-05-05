import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { cache, type ComponentType } from 'react'
import type { ProjectMeta } from './project-meta'

const CONTENT_DIR = path.join(process.cwd(), 'content', 'projects')

const readFrontmatter = cache(async (slug: string): Promise<ProjectMeta | null> => {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)
  try {
    const raw = await fs.readFile(filePath, 'utf8')
    const { data } = matter(raw)
    return { ...(data as ProjectMeta), slug }
  } catch {
    return null
  }
})

export const getProjectSlugs = cache(async (): Promise<string[]> => {
  try {
    const files = await fs.readdir(CONTENT_DIR)
    return files.filter((f) => f.endsWith('.mdx')).map((f) => f.replace(/\.mdx$/, ''))
  } catch {
    return []
  }
})

export const getAllProjects = cache(async (): Promise<ProjectMeta[]> => {
  const slugs = await getProjectSlugs()
  const projects = await Promise.all(slugs.map((slug) => readFrontmatter(slug)))
  return projects
    .filter((p): p is ProjectMeta => p !== null)
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
})

export interface LoadedProject {
  meta: ProjectMeta
  Content: ComponentType
}

export const getProjectBySlug = cache(async (slug: string): Promise<LoadedProject | null> => {
  const meta = await readFrontmatter(slug)
  if (!meta) return null
  try {
    const mod = await import(`@/../content/projects/${slug}.mdx`)
    return { meta, Content: mod.default }
  } catch {
    return { meta, Content: () => null }
  }
})
