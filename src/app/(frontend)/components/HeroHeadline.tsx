'use client'

import { useEffect, useRef, useState } from 'react'

const DEFAULT_LINES: { text: string; accent?: boolean }[] = [
  { text: 'I design and' },
  { text: 'build websites,', accent: true },
  { text: 'end to end.' },
]

export default function HeroHeadline({
  lines = DEFAULT_LINES,
}: {
  lines?: { text: string; accent?: boolean }[]
}) {
  const ref = useRef<HTMLHeadingElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  let globalIndex = 0

  return (
    <h1 className="hero__headline" ref={ref}>
      {/* Screen readers get the sentence once; the animated letters are hidden from them. */}
      <span className="sr-only">{lines.map((l) => l.text).join(' ')}</span>
      {lines.map((line, li) => (
        <span
          key={li}
          aria-hidden="true"
          className={`hero__headline-line${line.accent ? ' hero__headline-line--accent' : ''}`}
        >
          {line.text.split('').map((char) => {
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
