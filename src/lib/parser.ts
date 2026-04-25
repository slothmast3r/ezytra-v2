import React from 'react'

export type BodyNode =
  | { type: 'paragraph'; text: string }
  | { type: 'code'; lang: string; code: string }
  | { type: 'callout'; text: string }

export function parseBody(raw: string): BodyNode[] {
  const nodes: BodyNode[] = []
  const fenceRe = /```(\w*)\n([\s\S]*?)```/g
  let last = 0
  let match: RegExpExecArray | null

  while ((match = fenceRe.exec(raw)) !== null) {
    const before = raw.slice(last, match.index).trim()
    if (before) {
      for (const para of before.split(/\n\n+/)) {
        const t = para.trim()
        if (!t) continue
        if (t.startsWith('PRO TIP:')) {
          nodes.push({ type: 'callout', text: t.replace(/^PRO TIP:\s*/, '') })
        } else {
          nodes.push({ type: 'paragraph', text: t })
        }
      }
    }
    nodes.push({ type: 'code', lang: match[1] || 'code', code: match[2].trimEnd() })
    last = match.index + match[0].length
  }

  const tail = raw.slice(last).trim()
  if (tail) {
    for (const para of tail.split(/\n\n+/)) {
      const t = para.trim()
      if (!t) continue
      if (t.startsWith('PRO TIP:')) {
        nodes.push({ type: 'callout', text: t.replace(/^PRO TIP:\s*/, '') })
      } else {
        nodes.push({ type: 'paragraph', text: t })
      }
    }
  }

  return nodes
}

export function renderInline(text: string) {
  const parts = text.split(/`([^`]+)`/)
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <code key={i} className="art-inline-code">
        {part}
      </code>
    ) : (
      part
    ),
  )
}
