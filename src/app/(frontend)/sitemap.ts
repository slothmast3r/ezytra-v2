import { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import { SITE_DATA } from './data'
import { getAllProjects } from '@/lib/projects'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayload({ config })

  // 1. Fetch Dynamic Slugs
  const [projects, posts] = await Promise.all([
    getAllProjects(),
    payload.find({
      collection: 'posts',
      limit: 100,
      where: { status: { equals: 'published' } },
      select: { slug: true, updatedAt: true },
    }),
  ])

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

  // 2b. Polish niche landings
  const plRoutes = [
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
  const postRoutes = posts.docs.map((post: any) => ({
    url: `${SITE_DATA.url}/journal/${post.slug}`,
    lastModified: post.updatedAt || new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...plRoutes, ...projectRoutes, ...postRoutes]
}
