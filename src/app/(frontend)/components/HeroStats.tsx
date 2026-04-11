'use client'

import { useEffect, useRef, useState } from 'react'

const STATS = [
  { target: 3, suffix: '', label: 'Real Projects' },
  { target: 4, suffix: '+', label: 'Tech Skills' },
  { target: 100, suffix: '%', label: 'Owner-Built' },
]

function useCountUp(target: number, duration: number, active: boolean) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    let start: number | null = null
    let raf: number

    function step(timestamp: number) {
      if (start === null) start = timestamp
      const elapsed = timestamp - start
      const progress = Math.min(elapsed / duration, 1)
      // ease-out quad
      const eased = 1 - (1 - progress) * (1 - progress)
      setValue(Math.floor(eased * target))
      if (progress < 1) raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration])

  return value
}

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
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="hero__stats" ref={ref}>
      {STATS.map((s) => (
        <StatItem key={s.label} {...s} active={active} />
      ))}
    </div>
  )
}
