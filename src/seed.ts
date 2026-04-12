import 'dotenv/config'
import { getPayload } from 'payload'
import config from '@payload-config'

const posts = [
  {
    slug: 'how-i-build-nextjs-site-with-sanity-in-a-weekend',
    tag: 'Process',
    date: 'Apr 2025',
    readTime: '8 min read',
    headline: 'How I Build a Next.js Site with Sanity in a Weekend',
    excerpt:
      'A real, end-to-end walkthrough — from blank repo to deployed site — using Next.js 14, Sanity v3, and a VPS. No fluff, just the steps.',
    authorName: 'Oskar Straszyński',
    authorRole: 'Designer & Developer',
    authorBio:
      'Designer and developer based in Warsaw. I build fast, focused websites for small businesses — from first sketch to live server.',
    nextTitle: 'Why Your Website Loads Slow — And How to Fix It',
    nextHref: '#',
    sections: [
      {
        anchor: 'setup',
        label: '01 — Project Setup',
        heading: 'Start with the repo, not the design.',
        body: `I always initialise the Next.js project first. Blank canvas, no opinions. Then I connect it to GitHub, configure the VPS deploy pipeline, and only then open Figma. Shipping discipline comes before pixel discipline.\n\nRun \`npx create-next-app@latest\` and choose App Router, TypeScript, and Tailwind — or skip Tailwind if you, like me, prefer plain CSS. I do.\n\n\`\`\`bash\nnpx create-next-app@latest my-site\ncd my-site\nnpm install next-sanity @sanity/image-url\n\`\`\``,
      },
      {
        anchor: 'schema',
        label: '02 — Sanity Schema',
        heading: 'Model your content before you model your UI.',
        body: `The biggest mistake people make with a headless CMS is treating it as an afterthought. Define your schemas on day one. Pages, posts, projects — write them out before you write a single React component.\n\nPRO TIP: Use \`defineField\` and \`defineType\` from \`sanity\` for full TypeScript inference. Your editor will thank you.\n\n\`\`\`ts\n// schemas/post.ts\nimport { defineField, defineType } from 'sanity'\n\nexport const post = defineType({\n  name: 'post',\n  title: 'Post',\n  type: 'document',\n  fields: [\n    defineField({ name: 'title', type: 'string' }),\n    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),\n    defineField({ name: 'body', type: 'array', of: [{ type: 'block' }] }),\n  ],\n})\`\`\``,
      },
      {
        anchor: 'fetching',
        label: '03 — Fetching Data',
        heading: 'GROQ is worth learning. It takes 20 minutes.',
        body: `Sanity uses GROQ — a query language that feels like a hybrid of GraphQL and SQL. Once it clicks, it's faster than both. Fetch everything you need in a single query, server-side, with full type safety.\n\nUse \`next-sanity\`'s \`sanityFetch\` helper with \`cache: 'force-cache'\` in production and \`revalidate\` for ISR.`,
      },
      {
        anchor: 'styling',
        label: '04 — Styling Strategy',
        heading: 'Plain CSS. One file. Full control.',
        body: `I use a single \`styles.css\` with CSS custom properties for tokens. No CSS-in-JS, no utility framework. Just the cascade, working as intended.`,
      },
      {
        anchor: 'deploy',
        label: '05 — Deployment',
        heading: 'VPS beats Vercel when you care about cost.',
        body: `A €6/month Hetzner box runs Nginx, PM2, and your Next.js app. Set up a GitHub Actions workflow to SSH in and \`git pull && npm run build\` on every push to main. Done.`,
      },
      {
        anchor: 'seo',
        label: '06 — SEO & Metadata',
        heading: 'Next.js Metadata API makes this trivial.',
        body: `Export a \`generateMetadata\` function from your page. Pull title, description, and OG image from Sanity. Add a sitemap via \`next-sitemap\`. You're done in under an hour.`,
      },
      {
        anchor: 'wrap',
        label: '07 — Wrap-up',
        heading: 'The stack is boring. That\'s the point.',
        body: `Next.js + Sanity is not exciting. It's reliable, fast, and easy to hand off. The client can edit their own content. The site loads in under a second. The codebase fits in a single screen. That's a good website.`,
      },
    ],
  },
]

const projects = [
  {
    name: 'Pantera',
    location: 'Martial Arts Centre · Warsaw, PL',
    tags: [
      { tag: 'Web Design' },
      { tag: 'Next.js' },
      { tag: 'Sanity' },
      { tag: 'SEO' },
      { tag: 'Polish' },
    ],
    desc: 'Website for a Krav Maga, Karate & Tai Chi centre. Design, development, CMS, and local SEO — built end to end.',
    live: 'Live',
    url: 'pantera.pl',
    href: 'https://pantera.pl',
    order: 1,
    slug: 'pantera',
    type: 'Full Project',
    year: '2025',
    featured: true,
  },
  {
    name: 'ProfilDance',
    location: 'Dance School · Warsaw, PL',
    tags: [
      { tag: 'Branding' },
      { tag: 'Web Design' },
      { tag: 'Next.js' },
      { tag: 'Polish' },
    ],
    desc: 'Full visual identity and website for a Warsaw dance school. Logo, type, colour — then Next.js build with Payload CMS.',
    live: 'Live',
    url: 'profildance.pl',
    href: 'https://profildance.pl',
    order: 2,
    slug: 'profildance',
    type: 'Brand + Site',
    year: '2024',
    featured: false,
  },
  {
    name: 'MeeTango',
    location: 'Community Platform · Warsaw, PL · EN',
    tags: [
      { tag: 'Web App' },
      { tag: 'UX Design' },
      { tag: 'Next.js' },
      { tag: 'English' },
    ],
    desc: 'English-language platform connecting tango dancers in Warsaw. UX flows, frontend in Next.js, deployed on VPS.',
    live: 'Live',
    url: 'meetango.com',
    href: 'https://meetango.com',
    order: 3,
    slug: 'meetango',
    type: 'Web App',
    year: '2024',
    featured: false,
  },
]

async function seed() {
  const payload = await getPayload({ config })

  console.log('Clearing existing data...')
  const { docs: existingProjects } = await payload.find({ collection: 'projects', limit: 100 })
  for (const p of existingProjects) await payload.delete({ collection: 'projects', id: p.id })
  const { docs: existingPosts } = await payload.find({ collection: 'posts', limit: 100 })
  for (const p of existingPosts) await payload.delete({ collection: 'posts', id: p.id })

  console.log('Seeding projects...')
  for (const project of projects) {
    await payload.create({ collection: 'projects', data: project })
    console.log(`  ✓ ${project.name}`)
  }

  console.log('Seeding posts...')
  for (const post of posts) {
    await payload.create({ collection: 'posts', data: post })
    console.log(`  ✓ ${post.headline}`)
  }

  console.log('Done.')
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
