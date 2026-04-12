import 'dotenv/config'
import { getPayload } from 'payload'
import config from '@payload-config'
import { authors } from './seed/data/authors'
import { projects } from './seed/data/projects'
import { posts } from './seed/data/posts'

const ADMIN_EMAIL = process.env.SEED_ADMIN_EMAIL ?? 'admin@ezytra.pl'
const ADMIN_PASSWORD = process.env.SEED_ADMIN_PASSWORD ?? 'changeme123'

async function seed() {
  const payload = await getPayload({ config })

  // ── Clear ──────────────────────────────────────────────────────────────────
  console.log('Clearing existing data...')
  const { docs: existingPosts } = await payload.find({ collection: 'posts', limit: 100 })
  for (const p of existingPosts) await payload.delete({ collection: 'posts', id: p.id })

  const { docs: existingAuthors } = await payload.find({ collection: 'authors', limit: 100 })
  for (const a of existingAuthors) await payload.delete({ collection: 'authors', id: a.id })

  const { docs: existingProjects } = await payload.find({ collection: 'projects', limit: 100 })
  for (const p of existingProjects) await payload.delete({ collection: 'projects', id: p.id })

  // ── Users ──────────────────────────────────────────────────────────────────
  console.log('Seeding admin user...')
  const { docs: existingUsers } = await payload.find({ collection: 'users', limit: 10 })
  const alreadyExists = existingUsers.some((u) => u.email === ADMIN_EMAIL)
  if (alreadyExists) {
    console.log(`  — ${ADMIN_EMAIL} already exists, skipping`)
  } else {
    await payload.create({ collection: 'users', data: { email: ADMIN_EMAIL, password: ADMIN_PASSWORD } })
    console.log(`  ✓ ${ADMIN_EMAIL}`)
  }

  // ── Authors ────────────────────────────────────────────────────────────────
  console.log('Seeding authors...')
  const seededAuthors: Record<string, number> = {}
  for (const author of authors) {
    const created = await payload.create({ collection: 'authors', data: author })
    seededAuthors[author.name] = created.id
    console.log(`  ✓ ${author.name}`)
  }

  // ── Projects ───────────────────────────────────────────────────────────────
  console.log('Seeding projects...')
  for (const project of projects) {
    await payload.create({ collection: 'projects', data: project })
    console.log(`  ✓ ${project.name}`)
  }

  // ── Posts ──────────────────────────────────────────────────────────────────
  console.log('Seeding posts...')
  // Default all posts to the first author unless overridden per-post
  const defaultAuthorId = seededAuthors[authors[0].name]
  for (const post of posts) {
    const authorId = ('authorName' in post && typeof post.authorName === 'string')
      ? (seededAuthors[post.authorName] ?? defaultAuthorId)
      : defaultAuthorId
    await payload.create({ collection: 'posts', data: { ...post, author: authorId } })
    console.log(`  ✓ ${post.headline}`)
  }

  console.log('Done.')
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
