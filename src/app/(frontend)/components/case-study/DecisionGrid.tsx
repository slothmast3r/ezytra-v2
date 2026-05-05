export interface DecisionCard {
  label: string
  title: string
  body: string
}

export function DecisionGrid({
  id,
  heading,
  intro,
  cards,
}: {
  id?: string
  heading?: string
  intro?: string
  cards: DecisionCard[]
}) {
  return (
    <section id={id} className="cs-block cs-decision">
      {heading && <h2 className="cs-block__heading">{heading}</h2>}
      {intro && <p className="cs-block__intro">{intro}</p>}
      <div className="cs-decision-grid">
        {cards.map((card) => (
          <div key={card.title} className="cs-decision-card">
            <div className="cs-dc-label">{card.label}</div>
            <h3 className="cs-dc-title">{card.title}</h3>
            <p>{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
