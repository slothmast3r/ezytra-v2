export interface InsightCard {
  label: string
  body: string
}

export function InsightGrid({
  id,
  heading,
  intro,
  cards,
}: {
  id?: string
  heading?: string
  intro?: string
  cards: InsightCard[]
}) {
  return (
    <section id={id} className="cs-block cs-insight">
      {heading && <h2 className="cs-block__heading">{heading}</h2>}
      {intro && <p className="cs-block__intro">{intro}</p>}
      <div className="cs-insight-grid">
        {cards.map((card, j) => (
          <div key={j} className="cs-insight-card">
            <div className="cs-ic-label">{card.label}</div>
            <p>{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
