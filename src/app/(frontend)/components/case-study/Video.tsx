export function Video({
  id,
  src,
  poster,
  caption,
  size = 'large',
}: {
  id?: string
  src: string
  poster?: string
  caption?: string
  size?: 'small' | 'large' | 'full'
}) {
  return (
    <section id={id} className={`cs-image cs-image--${size}`}>
      <div className="cs-image__container">
        <video
          className="cs-image__img cs-video"
          src={src}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label={caption}
        />
        {caption && <p className="cs-image__caption">{caption}</p>}
      </div>
    </section>
  )
}
