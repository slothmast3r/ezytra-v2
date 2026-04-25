import config from '@payload-config'
import { getPayload } from 'payload'
import { cache } from 'react'
import type { Post } from '../../payload-types'

export async function getPosts(): Promise<Post[]> {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'posts',
    sort: '-createdAt',
    limit: 100,
    where: { status: { not_equals: 'draft' } },
  })
  return docs as Post[]
}

export async function getPostCount(): Promise<number> {
  const payload = await getPayload({ config })
  const { totalDocs } = await payload.find({
    collection: 'posts',
    where: { status: { equals: 'published' } },
    limit: 0,
  })
  return totalDocs
}

export const getPostBySlug = cache(async (slug: string): Promise<Post | null> => {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug } },
    limit: 1,
    populate: { authors: { name: true, role: true, bio: true } },
  })
  return (docs[0] as Post) ?? null
})

export async function getNextPost(createdAt: string): Promise<Post | null> {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'posts',
    where: {
      and: [
        { status: { equals: 'published' } },
        { createdAt: { less_than: createdAt } },
      ],
    },
    sort: '-createdAt',
    limit: 1,
  })
  return (docs[0] as Post) ?? null
}
