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
