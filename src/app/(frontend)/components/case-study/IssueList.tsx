export interface Issue {
  title: string
  description: string
}

export function IssueList({
  id,
  heading,
  intro,
  issues,
}: {
  id?: string
  heading?: string
  intro?: string
  issues: Issue[]
}) {
  return (
    <section id={id} className="cs-block cs-issues">
      {heading && <h2 className="cs-block__heading">{heading}</h2>}
      {intro && <p className="cs-block__intro">{intro}</p>}
      <div className="cs-old-site-note">
        {[0, 1].map((col) => (
          <div key={col}>
            {issues
              .filter((_, k) => k % 2 === col)
              .map((iss, k) => (
                <div key={k} className="cs-issue-row">
                  <span className="cs-dot cs-dot-bad" />
                  <div className="cs-old-issue">
                    <strong>{iss.title}</strong>
                    {iss.description}
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </section>
  )
}
