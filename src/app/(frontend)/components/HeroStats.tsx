'use client'

import { useRef } from 'react'
import { useCountUp } from '../../../hooks/useCountUp'
import { useObservedVisibility } from '../../../hooks/useObservedVisibility'

const STATS = [
  { target: 3, suffix: '', label: 'Real Projects' },
  { target: 4, suffix: '+', label: 'Tech Skills' },
  { target: 100, suffix: '%', label: 'Owner-Built' },
]

function StatItem({ target, suffix, label, active }: { target: number; suffix: string; label: string; active: boolean }) {
  const value = useCountUp(target, 1200, active)

  return (
    <div className="hero__stat">
      <div className="hero__stat-rule" />
      <span className="hero__stat-value">
        {value}{suffix}
      </span>
      <span className="hero__stat-label">{label}</span>
    </div>
  )
}

export default function HeroStats() {
  const ref = useRef<HTMLDivElement>(null)
  const active = useObservedVisibility(ref, 0.4)

  return (
    <div className="hero__stats" ref={ref}>
      {STATS.map((s) => (
        <StatItem key={s.label} {...s} active={active} />
      ))}
    </div>
  )
}
