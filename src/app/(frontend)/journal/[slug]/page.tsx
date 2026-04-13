import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import Image from 'next/image'
import Nav from '../../components/Nav'
import FooterBar from '../../components/FooterBar'
import ArticleTOC from './ArticleTOC'
import ShareButton from './ShareButton'

/* ─── Body parser ─────────────────────────────────────────────────────────────
   Sections store body as plain text. Conventions:
     • Blank line (\n\n)  → paragraph break
     • ```lang\n...\n```  → code block
     • "PRO TIP: ..."     → callout paragraph
   ──────────────────────────────────────────────────────────────────────────── */

type BodyNode =
  | { type: 'paragraph'; text: string }
  | { type: 'code'; lang: string; code: string }
  | { type: 'callout'; text: string }

function parseBody(raw: string): BodyNode[] {
  const nodes: BodyNode[] = []
  // Split on code fences first, then handle paragraphs
  const fenceRe = /```(\w*)\n([\s\S]*?)```/g
  let last = 0
  let match: RegExpExecArray | null

  while ((match = fenceRe.exec(raw)) !== null) {
    // text before the fence
    const before = raw.slice(last, match.index).trim()
    if (before) {
      for (const para of before.split(/\n\n+/)) {
        const t = para.trim()
        if (!t) continue
        if (t.startsWith('PRO TIP:')) {
          nodes.push({ type: 'callout', text: t.replace(/^PRO TIP:\s*/, '') })
        } else {
          nodes.push({ type: 'paragraph', text: t })
        }
      }
    }
    nodes.push({ type: 'code', lang: match[1] || 'code', code: match[2].trimEnd() })
    last = match.index + match[0].length
  }

  // remaining text after last fence
  const tail = raw.slice(last).trim()
  if (tail) {
    for (const para of tail.split(/\n\n+/)) {
      const t = para.trim()
      if (!t) continue
      if (t.startsWith('PRO TIP:')) {
        nodes.push({ type: 'callout', text: t.replace(/^PRO TIP:\s*/, '') })
      } else {
        nodes.push({ type: 'paragraph', text: t })
      }
    }
  }

  return nodes
}

/* ─── Inline backtick renderer ─────────────────────────────────────────────── */
function renderInline(text: string) {
  const parts = text.split(/`([^`]+)`/)
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <code key={i} className="art-inline-code">
        {part}
      </code>
    ) : (
      part
    ),
  )
}

/* ─── Reading time calculator ────────────────────────────────────────────────── */
function calculateReadTime(sections: any[]): string {
  let totalWords = 0
  const WPM = 200 // Average adult reading speed

  sections.forEach((s) => {
    if (s.body) {
      // Count words in body text (stripping code fences for accuracy)
      const cleanText = s.body.replace(/```[\s\S]*?```/g, '')
      totalWords += cleanText.split(/\s+/).filter(Boolean).length
      
      // Add "virtual words" for code blocks to account for complexity
      const codeBlocks = s.body.match(/```[\s\S]*?```/g)
      if (codeBlocks) {
        totalWords += codeBlocks.length * 50 // Each code block adds ~15 seconds of focus
      }
    }
    if (s.heading) totalWords += s.heading.split(/\s+/).length
  })

  const minutes = Math.max(1, Math.ceil(totalWords / WPM))
  return `${minutes} min read`
}

/* ─── Page ──────────────────────────────────────────────────────────────────── */

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug } },
    limit: 1,
    populate: { authors: { name: true, role: true, bio: true } },
  })

  const post = docs[0]
  if (!post || post.status !== 'published') notFound()

  // Fetch the actual next article (chronologically older)
  const { docs: nextArticles } = await payload.find({
    collection: 'posts',
    where: {
      and: [
        { status: { equals: 'published' } },
        { createdAt: { less_than: post.createdAt } },
      ],
    },
    sort: '-createdAt',
    limit: 1,
  })
  const nextPost = nextArticles[0]

  const author = post.author && typeof post.author === 'object' ? post.author : null

  const sections = (post.sections ?? []) as Array<{
    anchor: string
    label?: string | null
    heading?: string | null
    body?: string | null
  }>

  const tocItems = sections.map((s, i) => ({
    num: String(i + 1).padStart(2, '0'),
    anchor: s.anchor,
    title: s.heading ?? s.label ?? s.anchor,
  }))

  const readTime = calculateReadTime(sections)

  return (
    <>
      <Nav />

      {/* ── 01 Hero ── */}
      <section className="art-hero">
        <div className="art-hero__meta">
          {post.tag && <span className="tag">{post.tag}</span>}
          <span className="art-hero__date">
            {new Date(post.createdAt).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}
          </span>
          <span className="art-hero__read">{readTime}</span>
        </div>

        <h1 className="art-hero__headline">{post.headline}</h1>

        {post.excerpt && <p className="art-hero__excerpt">{post.excerpt}</p>}

        {author && (
          <div className="art-hero__author">
            <Image
              src={author.photo && typeof author.photo === 'object' && 'url' in author.photo && author.photo.url ? author.photo.url : '/owner.jpg'}
              alt={author.name}
              width={40}
              height={40}
              className="art-hero__avatar"
            />
            <div className="art-hero__author-info">
              <span className="art-hero__author-name">{author.name}</span>
              <span className="art-hero__author-role">{author.role}</span>
            </div>
            <div className="art-hero__divider" aria-hidden="true" />
            <ShareButton title={post.headline} url={`https://ezytra.com/journal/${post.slug}`} />
          </div>
        )}
      </section>

      {/* ── 02 Cover Image ── */}
      <section className="art-cover">
        <div className="art-cover__mockup">
          <div className="art-cover__chrome">
            <div className="art-cover__dots">
              <span /><span /><span />
            </div>
            <div className="art-cover__url">ezytra.com</div>
          </div>
          <div className="art-cover__screen" />
        </div>
        <p className="art-cover__caption">
          The finished site — designed in Figma, built in Next.js, managed with Sanity.
        </p>
      </section>

      {/* ── 03 Body ── */}
      <div className="art-body">
        <ArticleTOC items={tocItems} />

        <article className="art-content">
          {sections.map((section) => {
            const nodes = section.body ? parseBody(section.body) : []
            return (
              <div key={section.anchor} id={section.anchor} className="art-section">
                {section.label && (
                  <span className="art-section__label">{section.label}</span>
                )}
                {section.heading && (
                  <h2 className="art-section__heading">{section.heading}</h2>
                )}
                {nodes.map((node, i) => {
                  if (node.type === 'code') {
                    return (
                      <div key={i} className="art-code">
                        <span className="art-code__lang">{node.lang}</span>
                        <pre><code>{node.code}</code></pre>
                      </div>
                    )
                  }
                  if (node.type === 'callout') {
                    return (
                      <div key={i} className="art-callout">
                        <span className="art-callout__label">Pro tip</span>
                        <p className="art-callout__text">{renderInline(node.text)}</p>
                      </div>
                    )
                  }
                  return (
                    <p key={i} className="art-section__text">
                      {renderInline(node.text)}
                    </p>
                  )
                })}
              </div>
            )
          })}
        </article>
      </div>

      {/* ── 04 Author & Next ── */}
      <section className="art-footer">
        {author && (
          <div className="art-author">
            <Image
              src={author.photo && typeof author.photo === 'object' && 'url' in author.photo && author.photo.url ? author.photo.url : '/owner.jpg'}
              alt={author.name}
              width={64}
              height={64}
              className="art-author__avatar"
            />
            <div className="art-author__info">
              <span className="art-author__name">{author.name}</span>
              <span className="art-author__role">{author.role}</span>
              {author.bio && <p className="art-author__bio">{author.bio}</p>}
            </div>
          </div>
        )}

        {nextPost && (
          <div className="art-next">
            <span className="art-next__label">NEXT ARTICLE</span>
            <a href={`/journal/${nextPost.slug}`} className="art-next__title">
              {nextPost.headline} →
            </a>
          </div>
        )}
      </section>

      {/* ── Footer bar ── */}
      <FooterBar />
    </>
  )
}
