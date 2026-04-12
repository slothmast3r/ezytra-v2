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
  })

  const count = posts.length

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
          <p className="wa-hero__count">
            {count} article{count !== 1 ? 's' : ''} · Sharing what I learn while building for the web.
          </p>
          <p className="wa-hero__tagline">
            — Practical insights, process deep-dives, and occasional rants.
          </p>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="jou-grid">
        <div className="rule" />
        
        <div className="jou-grid__container">
          {posts.map((post) => (
            <div key={post.id} className="jou-card">
              <div className="jou-card__meta">
                {post.tag && <span className="tag">{post.tag}</span>}
                <div className="jou-card__stats">
                  {post.date && <span className="jou-card__date">{post.date}</span>}
                  <span className="jou-card__dot" aria-hidden="true" />
                  {post.readTime && <span className="jou-card__read">{post.readTime}</span>}
                </div>
              </div>

              <h2 className="jou-card__headline">
                <a href={`/journal/${post.slug}`} className="jou-card__link">
                  {post.headline}
                </a>
              </h2>

              {post.excerpt && <p className="jou-card__excerpt">{post.excerpt}</p>}

              <div className="jou-card__footer">
                <AnimatedLink href={`/journal/${post.slug}`} className="jou-card__more">
                  Read Article →
                </AnimatedLink>
              </div>
            </div>
          ))}

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
