import React from "react";
import Nav from "../components/Nav";
import FooterBar from "../components/FooterBar";
import AnimatedLink from "../components/AnimatedLink";
import { getPublishedPosts, getReadTime, getVisiblePosts } from "@/content/posts";

function JournalHero() {
  const totalDocs = getPublishedPosts().length;

  return (
    <div className="wa-hero__right">
      <p className="wa-hero__tagline">
        — Practical insights, process deep-dives, and occasional rants.
      </p>
      <p className="wa-hero__count">
        {totalDocs} article{totalDocs !== 1 ? "s" : ""} · Sharing what I learn
        while building for the web.
      </p>
    </div>
  );
}

function JournalGrid() {
  const posts = getVisiblePosts();

  return (
    <div className="jou-grid__container">
      {posts.map((post) => {
        const isPublished = post.status === "published";
        const readTime = getReadTime(post);

        return (
          <div
            key={post.slug}
            className={`jou-card${isPublished ? "" : " jou-card--coming-soon"}`}
          >
            <div className="jou-card__meta">
              {post.tag && <span className="tag">{post.tag}</span>}
              <div className="jou-card__stats">
                {isPublished && post.date && (
                  <span className="jou-card__date">{post.date}</span>
                )}
                {isPublished && (
                  <span className="jou-card__dot" aria-hidden="true" />
                )}
                {isPublished && (
                  <span className="jou-card__read">{readTime}</span>
                )}
                {!isPublished && (
                  <span className="jou-card__status">Coming soon</span>
                )}
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

            {post.excerpt && (
              <p className="jou-card__excerpt">{post.excerpt}</p>
            )}

            {isPublished && (
              <div className="jou-card__footer">
                <AnimatedLink
                  href={`/journal/${post.slug}`}
                  className="jou-card__more"
                >
                  Read Article →
                </AnimatedLink>
              </div>
            )}
          </div>
        );
      })}

      {/* Coming Soon Placeholder */}
      <div className="jou-card jou-card--placeholder">
        <div className="jou-card__meta">
          <span className="tag">Future</span>
        </div>
        <h2 className="jou-card__headline">
          More articles currently in the works...
        </h2>
        <p className="jou-card__excerpt">
          I&apos;m writing about custom WordPress themes, WooCommerce, and why
          I still love plain CSS.
        </p>
      </div>
    </div>
  );
}

export default function JournalPage() {
  return (
    <>
      <Nav />

      {/* ── Hero ── */}
      <section className="wa-hero">
        <div className="wa-hero__left">
          <p className="eyebrow">— Journal</p>
          <h1 className="wa-hero__heading">Thinking Out Loud.</h1>
        </div>
        <JournalHero />
      </section>

      {/* ── Grid ── */}
      <section className="jou-grid">
        <div className="rule" />
        <JournalGrid />
      </section>

      <FooterBar />
    </>
  );
}
