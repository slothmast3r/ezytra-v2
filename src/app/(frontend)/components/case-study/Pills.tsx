export function Pills({ id, items }: { id?: string; items: string[] }) {
  return (
    <section id={id} className="cs-block cs-pills">
      <div className="cs-pill-row">
        {items.map((it, j) => (
          <span key={j} className="cs-pill">
            {it}
          </span>
        ))}
      </div>
    </section>
  )
}
