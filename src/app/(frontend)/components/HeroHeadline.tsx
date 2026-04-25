'use client'

import { useRef } from 'react'
import { useObservedVisibility } from '../../../hooks/useObservedVisibility'

const LINES = ['I design and', 'build websites,', 'end to end.']

export default function HeroHeadline() {
  const ref = useRef<HTMLHeadingElement>(null)
  const active = useObservedVisibility(ref, 0.2)

  let globalIndex = 0

  return (
    <h1 className="hero__headline" ref={ref}>
      {LINES.map((line, li) => (
        <span key={li} className="hero__headline-line">
          {line.split('').map((char) => {
            const delay = globalIndex++ * 22
            return (
              <span key={delay} className="hero__headline-clip">
                <span
                  className={`hero__headline-char${active ? ' hero__headline-char--in' : ''}`}
                  style={{ transitionDelay: `${delay}ms` }}
                >
                  {char === ' ' ? '\u00a0' : char}
                </span>
              </span>
            )
          })}
        </span>
      ))}
    </h1>
  )
}
