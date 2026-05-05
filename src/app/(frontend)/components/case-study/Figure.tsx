import Image from 'next/image'

export function Figure({
  id,
  src,
  alt,
  caption,
  width = 1200,
  height = 800,
  size = 'large',
}: {
  id?: string
  src?: string
  alt?: string
  caption?: string
  width?: number
  height?: number
  size?: 'small' | 'large' | 'full'
}) {
  return (
    <section id={id} className={`cs-image cs-image--${size}`}>
      <div className="cs-image__container">
        {src ? (
          <Image src={src} alt={alt || caption || ''} width={width} height={height} className="cs-image__img" />
        ) : (
          <div className="cs-image__placeholder">
            <span className="cs-image__placeholder-label">Image placeholder</span>
            {caption && <span className="cs-image__placeholder-caption">{caption}</span>}
          </div>
        )}
        {src && caption && <p className="cs-image__caption">{caption}</p>}
      </div>
    </section>
  )
}
