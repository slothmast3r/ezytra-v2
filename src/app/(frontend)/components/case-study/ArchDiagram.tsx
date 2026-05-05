import React from 'react'

export interface ArchNode {
  text: string
  accent?: boolean
  connector?: 'arrow' | 'plus' | 'none'
}

export interface ArchRow {
  label?: string
  nodes: ArchNode[]
}

export function ArchDiagram({
  id,
  heading,
  rows,
}: {
  id?: string
  heading?: string
  rows: ArchRow[]
}) {
  return (
    <section id={id} className="cs-block cs-arch">
      {heading && <h2 className="cs-block__heading">{heading}</h2>}
      <div className="cs-arch-diagram">
        {rows.map((row, j) => (
          <React.Fragment key={j}>
            {row.label && (
              <div className="cs-arch-row">
                <div className="cs-arch-label">{row.label}</div>
              </div>
            )}
            <div className="cs-arch-row">
              {row.nodes.map((node, k) => (
                <React.Fragment key={k}>
                  <div className={`cs-arch-node${node.accent ? ' accent' : ''}`}>{node.text}</div>
                  {k < row.nodes.length - 1 && node.connector !== 'none' && (
                    <div className="cs-arch-arrow">{node.connector === 'plus' ? '+' : '→'}</div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
