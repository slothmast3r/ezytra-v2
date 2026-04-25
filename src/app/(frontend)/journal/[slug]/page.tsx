import { notFound } from 'next/navigation'
import Image from 'next/image'
import React, { Suspense } from 'react'
import Nav from '../../components/Nav'
import FooterBar from '../../components/FooterBar'
import ArticleTOC from './ArticleTOC'
import ShareButton from './ShareButton'
import { SITE_DATA } from '../../data'
import { ArticleSkeleton } from '../../components/Skeletons'
import { Metadata } from 'next'
import { getPostBySlug, getNextPost } from '../../../../lib/api/posts'
import { parseBody, renderInline } from '../../../../lib/parser'
import type { Post, Author, Media } from '../../../../payload-types'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}

  const title = post.meta?.title || post.headline
  const description = post.meta?.description || post.excerpt

  return {
    title: `${title} — ${SITE_DATA.brand}`,
    description: description,
    openGraph: {
      title: title ?? undefined,
      description: description ?? undefined,
      type: 'article',
    },
  }
}

function calculateReadTime(sections: Array<{ body?: string | null; heading?: string | null }>): string {
  let totalWords = 0
  const WPM = 200

  sections.forEach((s) => {
    if (s.body) {
      const cleanText = s.body.replace(/```[\s\S]*?```/g, '')
      totalWords += cleanText.split(/\s+/).filter(Boolean).length
      const codeBlocks = s.body.match(/```[\s\S]*?```/g)
      if (codeBlocks) {
        totalWords += codeBlocks.length * 50
      }
    }
    if (s.heading) totalWords += s.heading.split(/\s+/).length
  })

  const minutes = Math.max(1, Math.ceil(totalWords / WPM))
  return `${minutes} min read`
}

/* ─── Async Content Component ─────────────────────────────────────────────── */

async function ArticleContent({ slug }: { slug: string }) {
  const post = await getPostBySlug(slug)
  if (!post || post.status !== 'published') notFound()

  const nextPost = await getNextPost(post.createdAt)

  const author = post.author && typeof post.author === 'object' ? (post.author as Author) : null

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

  const d = new Date(post.createdAt)
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const fallbackDate = `${months[d.getUTCMonth()]} ${d.getUTCFullYear()}`

  const authorPhotoUrl =
    author?.photo && typeof author.photo === 'object'
      ? ((author.photo as Media).url ?? '/owner.jpg')
      : '/owner.jpg'

  return (
    <>
      {/* ── 01 Hero ── */}
      <section className="art-hero">
        <div className="art-hero__meta">
          {post.tag && <span className="tag">{post.tag}</span>}
          <span className="art-hero__date">
            {fallbackDate}
          </span>
          <span className="art-hero__read">{readTime}</span>
        </div>

        <h1 className="art-hero__headline">{post.headline}</h1>

        {post.excerpt && <p className="art-hero__excerpt">{post.excerpt}</p>}

        {author && (
          <div className="art-hero__author">
            <Image
              src={authorPhotoUrl}
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
          The finished site — designed in Figma, built in Next.js, managed with Payload CMS.
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
              src={authorPhotoUrl}
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
      <Suspense fallback={<ArticleSkeleton />}>
        <ArticleContent slug={slug} />
      </Suspense>
      <FooterBar />
    </>
  )
}
