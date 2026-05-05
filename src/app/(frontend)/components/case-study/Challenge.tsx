import { Constraints } from './Constraints'

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
    <section id={id} className="cs-challenge">
      <p className="eyebrow">— The Challenge</p>
      <h2 className="cs-challenge__heading">{heading}</h2>
      <div className="cs-challenge__body">{children}</div>
      {constraints && constraints.length > 0 && <Constraints items={constraints} />}
    </section>
  )
}
