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

function MetricColumn({
  metrics,
  pick,
}: {
  metrics: LighthouseMetric[]
  pick: (m: LighthouseMetric) => number
}) {
  return (
    <div className="cs-score-card">
      {metrics.map((m) => {
        const score = pick(m)
        return (
          <div key={m.name} className="cs-bar-row">
            <div className="cs-bar-label">
              <span>{m.name}</span>
              <span>{score}</span>
            </div>
            <div className="cs-bar-track">
              <div className={`cs-bar-fill ${tier(score)}`} style={{ width: `${score}%` }} />
            </div>
          </div>
        )
      })}
    </div>
  )
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
        <MetricColumn metrics={metrics} pick={(m) => m.oldScore} />
        <MetricColumn metrics={metrics} pick={(m) => m.newScore} />
      </div>
    </section>
  )
}
