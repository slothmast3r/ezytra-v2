export function Chapter({
  id,
  title,
  children,
}: {
  id?: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="cs-chapter" style={{ paddingLeft: 0, paddingRight: 0 }}>
      <p className="cs-chapter__eyebrow">Chapter</p>
      <h2 className="cs-chapter__heading">{title}</h2>
      <div className="cs-chapter__body">{children}</div>
    </section>
  )
}
