export function Challenge({
  id,
  heading,
  children,
  constraints,
}: {
  id?: string
  heading: string
  children: React.ReactNode
  constraints?: string[]
}) {
  return (
    <section id={id} className="cs-challenge" style={{ paddingLeft: 0, paddingRight: 0 }}>
      <p className="eyebrow">— The Challenge</p>
      <h2 className="cs-challenge__heading">{heading}</h2>
      <div className="cs-challenge__body">{children}</div>
      {constraints && constraints.length > 0 && (
        <div className="cs-challenge__constraints">
          {constraints.map((text, j) => (
            <div key={j} className="cs-constraint">
              — {text}
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
