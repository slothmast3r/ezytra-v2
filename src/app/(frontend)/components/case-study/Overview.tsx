export function Overview({
  id,
  brief,
  role,
}: {
  id?: string
  brief: React.ReactNode
  role: React.ReactNode
}) {
  return (
    <section id={id} className="cs-overview">
      <p className="eyebrow">— Overview</p>
      <div className="cs-overview__grid">
        <div className="cs-overview__col">
          <h3 className="cs-overview__title">The Brief</h3>
          <div className="cs-overview__text">{brief}</div>
        </div>
        <div className="cs-overview__col">
          <h3 className="cs-overview__title">My Role</h3>
          <div className="cs-overview__text">{role}</div>
        </div>
      </div>
    </section>
  )
}
