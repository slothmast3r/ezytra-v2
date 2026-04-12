import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import Nav from '../../components/Nav'
import FooterBar from '../../components/FooterBar'
import ArticleTOC from './ArticleTOC'

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

/* ─── Page ──────────────────────────────────────────────────────────────────── */

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug } },
    limit: 1,
  })

  const post = docs[0]
  if (!post) notFound()

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

  return (
    <>
      <Nav />

      {/* ── 01 Hero ── */}
      <section className="art-hero">
        <div className="art-hero__meta">
          {post.tag && <span className="tag">{post.tag}</span>}
          {post.date && <span className="art-hero__date">{post.date}</span>}
          {post.readTime && <span className="art-hero__read">{post.readTime}</span>}
        </div>

        <h1 className="art-hero__headline">{post.headline}</h1>

        {post.excerpt && <p className="art-hero__excerpt">{post.excerpt}</p>}

        <div className="art-hero__author">
          <div className="art-hero__avatar" aria-hidden="true" />
          <div className="art-hero__author-info">
            <span className="art-hero__author-name">{post.authorName}</span>
            <span className="art-hero__author-role">{post.authorRole}</span>
          </div>
          <div className="art-hero__divider" aria-hidden="true" />
          <a href="#" className="art-hero__share">Share →</a>
        </div>
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
        <div className="art-author">
          <div className="art-author__avatar" aria-hidden="true" />
          <div className="art-author__info">
            <span className="art-author__name">{post.authorName}</span>
            <span className="art-author__role">{post.authorRole}</span>
            {post.authorBio && <p className="art-author__bio">{post.authorBio}</p>}
          </div>
        </div>

        {post.nextTitle && (
          <div className="art-next">
            <span className="art-next__label">NEXT ARTICLE</span>
            <a href={post.nextHref ?? '#'} className="art-next__title">
              {post.nextTitle} →
            </a>
          </div>
        )}
      </section>

      {/* ── Footer bar ── */}
      <FooterBar />
    </>
  )
}
