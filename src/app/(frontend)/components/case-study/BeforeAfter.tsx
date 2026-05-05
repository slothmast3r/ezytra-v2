export interface BeforeAfterPair {
  rejectedLabel?: string
  rejectedTitle: string
  rejectedBody: string
  finalLabel?: string
  finalTitle: string
  finalBody: string
}

export function BeforeAfter({
  id,
  heading,
  intro,
  pairs,
}: {
  id?: string
  heading?: string
  intro?: string
  pairs: BeforeAfterPair[]
}) {
  return (
    <section id={id} className="cs-block cs-ba">
      {heading && <h2 className="cs-block__heading">{heading}</h2>}
      {intro && <p className="cs-block__intro">{intro}</p>}
      {pairs.map((pair, j) => (
        <div key={j} className="cs-before-after">
          <div className="cs-ba-card">
            <div className="cs-ba-label rejected">{pair.rejectedLabel || 'Rejected'}</div>
            <div className="cs-ba-body">
              <strong>{pair.rejectedTitle}</strong>
              {pair.rejectedBody}
            </div>
          </div>
          <div className="cs-ba-card">
            <div className="cs-ba-label final">{pair.finalLabel || 'Final'}</div>
            <div className="cs-ba-body">
              <strong>{pair.finalTitle}</strong>
              {pair.finalBody}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
