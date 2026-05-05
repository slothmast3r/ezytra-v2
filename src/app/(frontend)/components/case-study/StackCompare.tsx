export interface StackItem {
  name: string
  desc: string
}

export function StackCompare({
  id,
  heading,
  intro,
  oldHeader,
  newHeader,
  oldItems,
  newItems,
}: {
  id?: string
  heading?: string
  intro?: string
  oldHeader: string
  newHeader: string
  oldItems: StackItem[]
  newItems: StackItem[]
}) {
  return (
    <section id={id} className="cs-block cs-stack">
      {heading && <h2 className="cs-block__heading">{heading}</h2>}
      {intro && <p className="cs-block__intro">{intro}</p>}
      <div className="cs-stack-compare">
        <div className="cs-stack-col">
          <div className="cs-stack-col-header old">{oldHeader}</div>
          {oldItems.map((it, j) => (
            <div key={j} className="cs-stack-item">
              <span className="cs-si-dot old" />
              <div>
                <div className="cs-si-name">{it.name}</div>
                <div className="cs-si-desc">{it.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="cs-stack-col">
          <div className="cs-stack-col-header new">{newHeader}</div>
          {newItems.map((it, j) => (
            <div key={j} className="cs-stack-item">
              <span className="cs-si-dot new" />
              <div>
                <div className="cs-si-name">{it.name}</div>
                <div className="cs-si-desc">{it.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
