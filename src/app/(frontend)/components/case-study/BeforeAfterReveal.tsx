export function BeforeAfterReveal({
  id,
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  caption,
  size = 'full',
}: {
  id?: string
  beforeSrc: string
  afterSrc: string
  beforeAlt?: string
  afterAlt?: string
  caption?: string
  size?: 'small' | 'large' | 'full'
}) {
  return (
    <section id={id} className={`cs-image cs-image--${size}`}>
      <div className="cs-image__container">
        <div className="cs-side-by-side">
          <img className="cs-image__img" src={beforeSrc} alt={beforeAlt || 'Before'} />
          <video
            className="cs-image__img"
            src={afterSrc}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label={afterAlt || 'After'}
          />
        </div>
        {caption && <p className="cs-image__caption">{caption}</p>}
      </div>
    </section>
  )
}
