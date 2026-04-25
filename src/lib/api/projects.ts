import config from '@payload-config'
import { getPayload } from 'payload'
import type { Project } from '../../payload-types'

export async function getProjects(): Promise<Project[]> {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'projects',
    sort: 'order',
    limit: 100,
  })
  return docs as Project[]
}

export async function getProjectsCount(): Promise<number> {
  const payload = await getPayload({ config })
  const { totalDocs } = await payload.find({
    collection: 'projects',
    limit: 0,
  })
  return totalDocs
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'projects',
    where: { slug: { equals: slug } },
    limit: 1,
  })
  return (docs[0] as Project) ?? null
}
