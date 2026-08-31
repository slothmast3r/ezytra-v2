import { notFound } from 'next/navigation'
import Image from 'next/image'
import React from 'react'
import Nav from '../../components/Nav'
import FooterBar from '../../components/FooterBar'
import ArticleTOC from './ArticleTOC'
import ShareButton from './ShareButton'
import { SITE_DATA } from '../../data'
import { Metadata } from 'next'
import { getNextPost, getPostBySlug, getPublishedPosts, getReadTime } from '@/content/posts'
import { authors } from '@/content/authors'

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  const title = post.meta?.title || post.headline
  const description = post.meta?.description || post.excerpt

  return {
    title: `${title} — ${SITE_DATA.brand}`,
    description: description,
    openGraph: {
      title: title,
      description: description,
      type: 'article',
    },
  }
}

/* ─── Body parser ───────────────────────────────────────────────────────────── */
type BodyNode =
  | { type: 'paragraph'; text: string }
  | { type: 'code'; lang: string; code: string }
  | { type: 'callout'; text: string }

function parseBody(raw: string): BodyNode[] {
  const nodes: BodyNode[] = []
  const fenceRe = /```(\w*)\n([\s\S]*?)```/g
  let last = 0
  let match: RegExpExecArray | null

  while ((match = fenceRe.exec(raw)) !== null) {
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

/* ─── Content Component ─────────────────────────────────────────────────── */

function ArticleContent({ slug }: { slug: string }) {
  const post = getPostBySlug(slug)
  if (!post || post.status !== 'published') notFound()

  const nextPost = getNextPost(slug)
  const author = authors[0]
  const sections = post.sections

  const tocItems = sections.map((s, i) => ({
    num: String(i + 1).padStart(2, '0'),
    anchor: s.anchor,
    title: s.heading || s.label || s.anchor,
  }))

  const readTime = getReadTime(post)

  return (
    <>
      {/* ── 01 Hero ── */}
      <section className="art-hero">
        <div className="art-hero__meta">
          {post.tag && <span className="tag">{post.tag}</span>}
          {post.date && <span className="art-hero__date">{post.date}</span>}
          <span className="art-hero__read">{readTime}</span>
        </div>

        <h1 className="art-hero__headline">{post.headline}</h1>

        {post.excerpt && <p className="art-hero__excerpt">{post.excerpt}</p>}

        {author && (
          <div className="art-hero__author">
            <Image
              src="/owner.jpg"
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
            <ShareButton title={post.headline} url={`${SITE_DATA.url}/journal/${post.slug}`} />
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
            <div className="art-cover__url">{SITE_DATA.url.replace('https://', '')}</div>
          </div>
          <div className="art-cover__screen" />
        </div>
        <p className="art-cover__caption">
          The finished site — designed in Figma, built by hand, managed without touching code.
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
              src="/owner.jpg"
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
    </>
  )
}

/* ─── Page Wrapper ─────────────────────────────────────────────────────────── */

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  return (
    <>
      <Nav />
      <ArticleContent slug={slug} />
      <FooterBar />
    </>
  )
}
