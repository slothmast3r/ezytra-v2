export interface HeroAnatomyItem {
  title: string
  description: string
}

export function HeroAnatomy({
  id,
  heading,
  intro,
  items,
}: {
  id?: string
  heading?: string
  intro?: string
  items: HeroAnatomyItem[]
}) {
  return (
    <section id={id} className="cs-block cs-annotated">
      {heading && <h2 className="cs-block__heading">{heading}</h2>}
      {intro && <p className="cs-block__intro">{intro}</p>}
      <ul className="cs-anno-list">
        {items.map((item, j) => (
          <li key={j}>
            <span className="cs-anno-n">{j + 1}</span>
            <span>
              <strong>{item.title}</strong>
              {item.description}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
