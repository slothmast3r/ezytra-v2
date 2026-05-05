export function Quote({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="cs-block cs-quote">
      <div className="cs-quote-block">{children}</div>
    </section>
  )
}
