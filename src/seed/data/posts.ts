export const posts = [
  {
    slug: 'deploying-ezytra-on-vercel-what-actually-worked',
    status: 'coming-soon',
    tag: 'Dev',
    headline: 'Deploying Ezytra on Vercel — What Actually Worked',
    excerpt:
      "Moving from a self-managed VPS to Vercel for the Ezytra site. What broke, what surprised me, and whether I'd do it again.",
    nextTitle: 'Payload CMS After Six Months — Honest Review',
    nextHref: '/journal/payload-cms-after-six-months',
    sections: [
      {
        anchor: 'why',
        label: '01 — Why Vercel',
        heading: "VPS is great until it isn't.",
        body: `I ran Ezytra on a Hetzner VPS for over a year. Nginx, PM2, manual deploys via SSH — it worked. But maintaining it took mental energy I wanted to spend on client work. Vercel promised to remove that entirely.\n\nThe honest answer: it mostly delivered. But there were a few things nobody warned me about.`,
      },
      {
        anchor: 'payload',
        label: '02 — Payload on Vercel',
        heading: 'The CMS needs a real database.',
        body: `Payload CMS requires a persistent database. On a VPS you just run Postgres locally. On Vercel, you need a hosted solution. I went with Neon — serverless Postgres that connects in one environment variable.\n\nPRO TIP: Set \`PAYLOAD_SECRET\` and \`DATABASE_URL\` in Vercel's environment variables tab before your first deploy. Payload will refuse to start without them.\n\n\`\`\`bash\n# .env.local\nDATABASE_URL=postgresql://user:pass@ep-xxx.neon.tech/neondb?sslmode=require\nPAYLOAD_SECRET=your-long-random-string\n\`\`\``,
      },
      {
        anchor: 'neon',
        label: '03 — Neon Setup',
        heading: 'Serverless Postgres is fast enough.',
        body: `Neon's free tier gives you one project, one database, and 0.5 GB storage. For a portfolio site with a handful of collections it's more than enough.\n\nThe cold start concern is real but overblown for this use case. Admin panel requests hit it occasionally — a 200–400ms extra latency on the first query of the day. The public-facing site uses static generation so it never touches the DB on the hot path.\n\n\`\`\`ts\n// payload.config.ts\nimport { postgresAdapter } from '@payloadcms/db-postgres'\n\ndb: postgresAdapter({\n  pool: { connectionString: process.env.DATABASE_URL },\n})\n\`\`\``,
      },
      {
        anchor: 'gotchas',
        label: '04 — Gotchas',
        heading: 'Three things that cost me time.',
        body: `First: Payload's admin panel uses server actions and needs \`output: 'standalone'\` removed from \`next.config.js\` on Vercel — the platform handles this itself.\n\nSecond: media uploads. Payload stores files locally by default. On Vercel's ephemeral filesystem that means uploads vanish on redeploy. I moved to Vercel Blob for media storage.\n\nThird: the build takes longer than a VPS. Vercel builds in a clean environment every time — no caching of \`node_modules\` between builds unless you configure it. Worth enabling Vercel's build cache explicitly.`,
      },
      {
        anchor: 'verdict',
        label: '05 — Verdict',
        heading: 'Would I do it again? Yes.',
        body: `Deployments are now a git push. Preview URLs for every branch. Zero server maintenance. For a solo operator, that's a meaningful quality-of-life upgrade.\n\nThe extra cost over a VPS is real — Vercel's pro plan is $20/month versus €6/month for Hetzner. But the time saved pays for it if you value your time honestly.`,
      },
    ],
  },
  {
    slug: 'payload-cms-after-six-months',
    status: 'draft',
    tag: 'Tools',
    headline: 'Payload CMS After Six Months — Honest Review',
    excerpt:
      "I switched from Sanity to Payload for client projects. Here's what I actually think after using it in production.",
    nextTitle: 'My Figma Workflow for Client Projects',
    nextHref: '/journal/figma-workflow-for-client-projects',
    sections: [
      {
        anchor: 'why-switched',
        label: '01 — Why I Switched',
        heading: 'Sanity was good. Payload fits better.',
        body: `Sanity is excellent. The studio is polished, the API is clean, GROQ is fast once you know it. But for client projects, the hosted pricing and the JavaScript-only query language created friction I kept running into.\n\nPayload is open source, self-hostable, and configured entirely in TypeScript. The schema is your code — no separate studio language, no SaaS dependency.`,
      },
      {
        anchor: 'what-works',
        label: '02 — What Works',
        heading: 'TypeScript all the way down.',
        body: `The best thing about Payload is that your collection config generates TypeScript types automatically. You define a field, you get a type. No manual type writing, no schema drift.\n\n\`\`\`ts\n// Payload generates this from your collection config\ntype Project = {\n  id: number\n  name: string\n  slug: string\n  tags: { tag: string }[]\n  featured: boolean\n}\n\`\`\`\n\nThe admin UI is good — not as polished as Sanity's studio, but functional and fast. Clients learn it in one session.`,
      },
      {
        anchor: 'what-doesnt',
        label: "03 — What Doesn't",
        heading: 'The rough edges are real.',
        body: `Rich text is handled by Lexical, which is powerful but complex to customise. Getting custom block types into the editor takes more setup than it should.\n\nMigrations in development are awkward. Payload pushes schema changes automatically in dev mode, which is convenient until you need to run proper migrations for production. The \`migrate:create\` workflow requires discipline.\n\nPRO TIP: Keep dev and prod databases separate from day one. Dev-push mode and production migrations don't mix gracefully if you conflate them.`,
      },
      {
        anchor: 'verdict',
        label: '04 — Verdict',
        heading: "It's my default now.",
        body: `For projects where the client needs to edit content and I need full control over the data model, Payload wins. For projects where the client wants a beautifully polished editing experience and is happy paying Sanity's hosting, Sanity wins.\n\nThe choice is rarely hard in practice.`,
      },
    ],
  },
  {
    slug: 'figma-workflow-for-client-projects',
    status: 'draft',
    tag: 'Design',
    headline: 'My Figma Workflow for Client Projects',
    excerpt:
      'How I go from a blank Figma file to a approved design in two weeks — without endless revision rounds.',
    nextTitle: "Building with AI: What Changed, What Didn't",
    nextHref: '/journal/building-with-ai-what-changed',
    sections: [
      {
        anchor: 'structure',
        label: '01 — File Structure',
        heading: 'One file, four pages.',
        body: `Every client project gets a single Figma file with four pages: Moodboard, Wireframes, UI Design, and Handoff. This keeps everything in one place and makes the progression clear — clients can see how we got from references to final screens.`,
      },
      {
        anchor: 'moodboard',
        label: '02 — Moodboard',
        heading: 'Align on feeling before touching UI.',
        body: `The moodboard is where I win or lose the client's trust early. I pull 10–15 references — websites, print, photography — that capture the mood I'm aiming for. No UI yet, just direction.\n\nPRO TIP: Include one or two references the client will definitely reject. It sounds counterintuitive but it forces them to articulate what they don't want, which is often more useful than knowing what they do.`,
      },
      {
        anchor: 'wireframes',
        label: '03 — Wireframes',
        heading: 'Low fidelity means fast iteration.',
        body: `I do wireframes in grayscale with placeholder text and no real typography. The goal is information architecture — what goes where, what the user journey is. I share these before spending a single hour on visual design.\n\nMost revision feedback at this stage is structural ("can we move the pricing above the testimonials?") which is trivial to fix. The same feedback at high-fidelity costs three times as long.`,
      },
      {
        anchor: 'design',
        label: '04 — High-Fidelity',
        heading: "One round of revisions. That's the goal.",
        body: `By the time I move to high-fidelity, the structure is locked and the client knows what to expect. I design desktop first, then mobile. I present in a Figma prototype, not static screenshots — clients understand interaction better when they can click through.\n\nI budget for one round of revisions. If the earlier stages were done properly, one round is always enough.`,
      },
    ],
  },
  {
    slug: 'building-with-ai-what-changed',
    status: 'coming-soon',
    tag: 'Process',
    headline: "Building with AI: What Changed, What Didn't",
    excerpt:
      'A year of using AI tools in real client work. The honest version — what it actually changed, where it still falls short, and why I still fix most of it myself.',
    nextTitle: 'Deploying Ezytra on Vercel — What Actually Worked',
    nextHref: '/journal/deploying-ezytra-on-vercel-what-actually-worked',
    sections: [
      {
        anchor: 'what-changed',
        label: '01 — What Changed',
        heading: 'Speed, mostly. Not quality.',
        body: `The biggest shift is velocity. Scaffolding a new page, writing a seed script, generating boilerplate — things that used to take an hour take ten minutes. That compounds quickly across a project.\n\nWhat hasn't changed: taste, judgment, and the ability to know when something is wrong. AI will generate confident, plausible code that does the wrong thing. Catching that still requires knowing what the right thing looks like.`,
      },
      {
        anchor: 'workflow',
        label: '02 — My Workflow',
        heading: 'AI drafts. I decide.',
        body: `I use AI for a first pass — component structure, CSS layout, copy drafts. Then I read everything line by line and fix what's wrong. The ratio depends on the task: for boilerplate it's maybe 80% usable, for nuanced design decisions it's closer to 40%.\n\nPRO TIP: Never accept generated CSS without checking it in the browser at multiple breakpoints. AI has no idea what your design actually looks like — it's pattern-matching from training data, not seeing your screen.`,
      },
      {
        anchor: 'design',
        label: '03 — Design Specifically',
        heading: "It can't taste. You have to.",
        body: `AI-generated design suggestions are average by construction — they're trained on what exists, not on what's excellent. For UI, I use it to generate starting points and throw out most of what it produces.\n\nThe one place it's genuinely useful in design: copy. Getting a first draft of microcopy, button labels, error messages, and section headlines is fast with AI. I still rewrite most of it, but starting from something beats staring at a blank text field.`,
      },
      {
        anchor: 'challenges',
        label: '04 — The Challenges',
        heading: 'Context collapse is the real problem.',
        body: `The hardest part of working with AI on a real project is that it doesn't hold context the way a collaborator does. It doesn't remember that you decided to use a specific pattern three hours ago, or that the client hates a certain word.\n\nYou become the context manager — keeping track of decisions, constraints, and preferences that the AI resets on every session. That's cognitive work that doesn't show up in the velocity numbers.`,
      },
      {
        anchor: 'verdict',
        label: '05 — Verdict',
        heading: 'Tool, not replacement.',
        body: `I'm faster. The work is still mine — the decisions, the fixes, the judgment calls. AI handles the parts of the job that are mechanical. The parts that require taste, experience, and understanding of the client's actual problem remain entirely human.\n\nThat's probably the right division. I don't see it changing soon.`,
      },
    ],
  },
]
