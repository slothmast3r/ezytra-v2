import { MetadataRoute } from 'next'
import { SITE_DATA } from './data'
import { getAllProjects } from '@/lib/projects'
import { getPublishedPosts } from '@/content/posts'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Fetch Dynamic Slugs
  const projects = await getAllProjects()
  const posts = getPublishedPosts()

  // 2. Define Static Routes
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/services',
    '/work',
    '/journal',
  ].map((route) => ({
    url: `${SITE_DATA.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // 2b. Polish mirror + niche landings
  const plRoutes = [
    { path: '/pl', priority: 0.9 },
    { path: '/pl/realizacje', priority: 0.8 },
    { path: '/pl/uslugi', priority: 0.8 },
    { path: '/pl/o-mnie', priority: 0.7 },
    { path: '/pl/kontakt', priority: 0.7 },
    { path: '/pl/strony-dla-szkol-tanca', priority: 0.9 },
    { path: '/pl/strony-dla-szkol-walki', priority: 0.9 },
    { path: '/pl/polityka-prywatnosci', priority: 0.2 },
  ].map(({ path, priority }) => ({
    url: `${SITE_DATA.url}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority,
  }))

  // 3. Map Dynamic Project Routes
  const projectRoutes = projects.map((project) => ({
    url: `${SITE_DATA.url}/work/${project.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // 4. Map Dynamic Post Routes
  const postRoutes = posts.map((post) => ({
    url: `${SITE_DATA.url}/journal/${post.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...plRoutes, ...projectRoutes, ...postRoutes]
}
