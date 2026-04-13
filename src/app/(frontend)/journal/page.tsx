export const revalidate = 0

import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import Nav from '../components/Nav'
import FooterBar from '../components/FooterBar'
import AnimatedLink from '../components/AnimatedLink'

export default async function JournalPage() {
  const payload = await getPayload({ config })

  const { docs: posts } = await payload.find({
    collection: 'posts',
    sort: '-date',
    limit: 100,
    where: { status: { not_equals: 'draft' } },
  })

  const count = posts.filter((p) => p.status === 'published').length

  return (
    <>
      <Nav />

      {/* ── Hero ── */}
      <section className="wa-hero">
        <div className="wa-hero__left">
          <p className="eyebrow">— Journal</p>
          <h1 className="wa-hero__heading">
            Thinking Out Loud.
          </h1>
        </div>
        <div className="wa-hero__right">
          <p className="wa-hero__tagline">
            — Practical insights, process deep-dives, and occasional rants.
          </p>
          <p className="wa-hero__count">
            {count} article{count !== 1 ? 's' : ''} · Sharing what I learn while building for the web.
          </p>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="jou-grid">
        <div className="rule" />
        
        <div className="jou-grid__container">
          {(posts as any[]).map((post) => {
            const isPublished = post.status === 'published'
            const d = new Date(post.createdAt)
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            const fallbackDate = `${months[d.getUTCMonth()]} ${d.getUTCFullYear()}`

            return (
              <div key={post.id} className={`jou-card${isPublished ? '' : ' jou-card--coming-soon'}`}>
                <div className="jou-card__meta">
                  {post.tag && <span className="tag">{post.tag}</span>}
                  <div className="jou-card__stats">
                    {isPublished && (
                      <span className="jou-card__date">
                        {post.date || fallbackDate}
                      </span>
                    )}
                    {isPublished && post.readTime && <span className="jou-card__dot" aria-hidden="true" />}
                    {isPublished && post.readTime && <span className="jou-card__read">{post.readTime}</span>}
                    {!isPublished && <span className="jou-card__status">Coming soon</span>}
                  </div>
                </div>

                <h2 className="jou-card__headline">
                  {isPublished ? (
                    <a href={`/journal/${post.slug}`} className="jou-card__link">
                      {post.headline}
                    </a>
                  ) : (
                    post.headline
                  )}
                </h2>

                {post.excerpt && <p className="jou-card__excerpt">{post.excerpt}</p>}

                {isPublished && (
                  <div className="jou-card__footer">
                    <AnimatedLink href={`/journal/${post.slug}`} className="jou-card__more">
                      Read Article →
                    </AnimatedLink>
                  </div>
                )}
              </div>
            )
          })}

          {/* Coming Soon Placeholder */}
          <div className="jou-card jou-card--placeholder">
            <div className="jou-card__meta">
              <span className="tag">Future</span>
            </div>
            <h2 className="jou-card__headline">More articles currently in the works...</h2>
            <p className="jou-card__excerpt">
              I&apos;m writing about Payload CMS, Next.js performance, and why I still love plain CSS.
            </p>
          </div>
        </div>
      </section>

      <FooterBar />
    </>
  )
}
