import React from 'react'

export function ProjectSkeleton() {
  return (
    <div className="work__row" style={{ pointerEvents: 'none' }}>
      <div className="work__col-left">
        <div className="work__header">
          <span className="work__num skeleton" style={{ width: '2rem', height: '2.5rem' }} />
          <div className="work__header-info" style={{ width: '100%' }}>
            <div className="skeleton" style={{ width: '60%', height: '2.25rem', marginBottom: '0.5rem' }} />
            <div className="skeleton" style={{ width: '40%', height: '1rem', marginBottom: '1rem' }} />
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <div className="skeleton" style={{ width: '4rem', height: '1.375rem' }} />
              <div className="skeleton" style={{ width: '4rem', height: '1.375rem' }} />
            </div>
          </div>
        </div>
        <div className="work__body">
          <div className="work__body-inner">
            <div className="skeleton" style={{ width: '100%', height: '1rem', marginBottom: '0.5rem' }} />
            <div className="skeleton" style={{ width: '90%', height: '1rem' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export function JournalSkeleton() {
  return (
    <div className="journal__row" style={{ pointerEvents: 'none' }}>
      <div className="skeleton" style={{ width: '4rem', height: '1.375rem', flexShrink: 0 }} />
      <div className="skeleton" style={{ width: '50%', height: '1.25rem' }} />
      <div className="skeleton" style={{ width: '1rem', height: '1.25rem', marginLeft: 'auto' }} />
    </div>
  )
}

export function JournalGridSkeleton() {
  return (
    <div className="jou-grid__container" style={{ pointerEvents: 'none' }}>
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="jou-card">
          <div className="jou-card__meta">
            <div className="skeleton" style={{ width: '3rem', height: '1.375rem' }} />
            <div className="jou-card__stats">
              <div className="skeleton" style={{ width: '4rem', height: '1rem' }} />
            </div>
          </div>
          <div className="skeleton" style={{ width: '80%', height: '2rem', margin: '1rem 0 0.5rem' }} />
          <div className="skeleton" style={{ width: '100%', height: '1rem', marginBottom: '0.25rem' }} />
          <div className="skeleton" style={{ width: '90%', height: '1rem', marginBottom: '1.5rem' }} />
          <div className="skeleton" style={{ width: '6rem', height: '1.25rem' }} />
        </div>
      ))}
    </div>
  )
}

export function WorkCardSkeleton() {
  return (
    <div className="wa-card wa-card--small" style={{ pointerEvents: 'none' }}>
      <div className="wa-card__mockup">
        <div className="wa-card__chrome">
          <div className="wa-card__dots"><span /><span /><span /></div>
          <div className="skeleton" style={{ width: '4rem', height: '0.5rem', margin: '0 auto' }} />
        </div>
        <div className="wa-card__screen skeleton" style={{ height: '200px' }} />
      </div>
      <div className="wa-card__info">
        <div className="skeleton" style={{ width: '2rem', height: '1.5rem', marginBottom: '0.5rem' }} />
        <div className="skeleton" style={{ width: '70%', height: '1.5rem', marginBottom: '0.5rem' }} />
        <div className="skeleton" style={{ width: '40%', height: '1rem', marginBottom: '1rem' }} />
        <div className="skeleton" style={{ width: '100%', height: '3rem', marginBottom: '1rem' }} />
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
          <div className="skeleton" style={{ width: '3rem', height: '1.25rem' }} />
          <div className="skeleton" style={{ width: '3rem', height: '1.25rem' }} />
        </div>
        <div className="skeleton" style={{ width: '8rem', height: '2.5rem' }} />
      </div>
    </div>
  )
}

export function WorkCardFeaturedSkeleton() {
  return (
    <div className="wa-card wa-card--featured" style={{ pointerEvents: 'none' }}>
      <div className="wa-card__mockup">
        <div className="wa-card__chrome">
          <div className="wa-card__dots"><span /><span /><span /></div>
          <div className="skeleton" style={{ width: '6rem', height: '0.5rem', margin: '0 auto' }} />
        </div>
        <div className="wa-card__screen skeleton" style={{ height: '300px' }} />
      </div>
      <div className="wa-card__info">
        <div className="skeleton" style={{ width: '2rem', height: '1.5rem', marginBottom: '0.5rem' }} />
        <div className="skeleton" style={{ width: '60%', height: '2rem', marginBottom: '0.5rem' }} />
        <div className="skeleton" style={{ width: '30%', height: '1rem', marginBottom: '1rem' }} />
        <div className="skeleton" style={{ width: '100%', height: '4rem', marginBottom: '1.5rem' }} />
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
          <div className="skeleton" style={{ width: '4rem', height: '1.25rem' }} />
          <div className="skeleton" style={{ width: '4rem', height: '1.25rem' }} />
        </div>
        <div className="skeleton" style={{ width: '10rem', height: '3rem' }} />
      </div>
    </div>
  )
}

export function WorkGridSkeleton() {
  return (
    <div className="wa-grid" style={{ pointerEvents: 'none', marginTop: '2rem' }}>
      <WorkCardFeaturedSkeleton />
      <div className="wa-grid__row">
        <WorkCardSkeleton />
        <WorkCardSkeleton />
      </div>
    </div>
  )
}

export function ArticleSkeleton() {
  return (
    <div style={{ pointerEvents: 'none' }}>
      <section className="art-hero">
        <div className="art-hero__meta">
          <div className="skeleton" style={{ width: '3rem', height: '1.375rem' }} />
          <div className="skeleton" style={{ width: '5rem', height: '1rem' }} />
          <div className="skeleton" style={{ width: '4rem', height: '1rem' }} />
        </div>
        <div className="skeleton" style={{ width: '80%', height: '3.5rem', marginTop: '1.5rem', marginBottom: '1rem' }} />
        <div className="skeleton" style={{ width: '60%', height: '1.5rem', marginBottom: '2rem' }} />
        <div className="art-hero__author" style={{ border: 'none' }}>
          <div className="skeleton" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
          <div className="art-hero__author-info">
            <div className="skeleton" style={{ width: '8rem', height: '1rem', marginBottom: '0.25rem' }} />
            <div className="skeleton" style={{ width: '6rem', height: '0.75rem' }} />
          </div>
        </div>
      </section>

      <section className="art-cover">
        <div className="art-cover__mockup">
          <div className="skeleton" style={{ width: '100%', height: '400px' }} />
        </div>
      </section>

      <div className="art-body">
        <div className="art-toc" style={{ opacity: 0.5 }}>
          <div className="skeleton" style={{ width: '100%', height: '15rem' }} />
        </div>
        <article className="art-content">
          <div className="skeleton" style={{ width: '100%', height: '1rem', marginBottom: '1rem' }} />
          <div className="skeleton" style={{ width: '100%', height: '1rem', marginBottom: '1rem' }} />
          <div className="skeleton" style={{ width: '90%', height: '1rem', marginBottom: '2rem' }} />
          <div className="skeleton" style={{ width: '100%', height: '12rem', marginBottom: '2rem' }} />
          <div className="skeleton" style={{ width: '100%', height: '1rem', marginBottom: '1rem' }} />
          <div className="skeleton" style={{ width: '95%', height: '1rem', marginBottom: '1rem' }} />
        </article>
      </div>
    </div>
  )
}
