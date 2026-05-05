export function Tradeoffs({
  id,
  heading,
  intro,
  prosLabel = 'Gains',
  consLabel = 'Costs',
  pros,
  cons,
}: {
  id?: string
  heading?: string
  intro?: string
  prosLabel?: string
  consLabel?: string
  pros: string[]
  cons: string[]
}) {
  return (
    <section id={id} className="cs-block cs-tradeoffs">
      {heading && <h2 className="cs-block__heading">{heading}</h2>}
      {intro && <p className="cs-block__intro">{intro}</p>}
      <div className="cs-tradeoff-row">
        <div className="cs-tradeoff-card pro">
          <div className="cs-tc-label">{prosLabel}</div>
          <ul>
            {pros.map((p, j) => (
              <li key={j}>{p}</li>
            ))}
          </ul>
        </div>
        <div className="cs-tradeoff-card con">
          <div className="cs-tc-label">{consLabel}</div>
          <ul>
            {cons.map((c, j) => (
              <li key={j}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
