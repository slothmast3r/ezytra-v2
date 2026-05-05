export interface LighthouseMetric {
  name: string
  oldScore: number
  newScore: number
}

function tier(score: number): 'good' | 'mid' | 'bad' {
  if (score >= 90) return 'good'
  if (score >= 75) return 'mid'
  return 'bad'
}

export function LighthouseCompare({
  id,
  heading,
  intro,
  oldLabel,
  newLabel,
  metrics,
}: {
  id?: string
  heading?: string
  intro?: string
  oldLabel: string
  newLabel: string
  metrics: LighthouseMetric[]
}) {
  return (
    <section id={id} className="cs-block cs-lh">
      {heading && <h2 className="cs-block__heading">{heading}</h2>}
      {intro && <p className="cs-block__intro">{intro}</p>}
      <div className="cs-compare-header">
        <div className="cs-col-label cs-col-old">{oldLabel}</div>
        <div className="cs-col-label cs-col-new">{newLabel}</div>
      </div>
      <div className="cs-score-grid">
        <div className="cs-score-card">
          {metrics.map((m, j) => (
            <div key={j} className="cs-bar-row">
              <div className="cs-bar-label">
                <span>{m.name}</span>
                <span>{m.oldScore}</span>
              </div>
              <div className="cs-bar-track">
                <div className={`cs-bar-fill ${tier(m.oldScore)}`} style={{ width: `${m.oldScore}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="cs-score-card">
          {metrics.map((m, j) => (
            <div key={j} className="cs-bar-row">
              <div className="cs-bar-label">
                <span>{m.name}</span>
                <span>{m.newScore}</span>
              </div>
              <div className="cs-bar-track">
                <div className={`cs-bar-fill ${tier(m.newScore)}`} style={{ width: `${m.newScore}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
