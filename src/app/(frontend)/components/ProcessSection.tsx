'use client'

import { useEffect, useRef } from 'react'

const PROCESS = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We talk about your goals, audience, and what success looks like. No briefs, just a real conversation.',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'I start in Figma — wireframes first, then high-fidelity. You review and give feedback at every stage.',
  },
  {
    num: '03',
    title: 'Build',
    desc: 'I code what I designed. Next.js, your CMS of choice, deployed to your server or mine.',
  },
  {
    num: '04',
    title: 'Launch',
    desc: 'Full QA, SEO audit, performance check. I stay on hand after go-live.',
  },
]

export default function ProcessSection() {
  const gridRef = useRef<HTMLDivElement>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 1100px)').matches
    const grid = gridRef.current
    if (!grid) return

    if (!isMobile) {
      // Desktop: CSS transition fires once when section enters viewport
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            grid.classList.add('process__grid--animate')
            observer.disconnect()
          }
        },
        { threshold: 0.2 },
      )
      observer.observe(grid)
      return () => observer.disconnect()
    } else {
      // Mobile: scroll-driven progress bar
      const update = () => {
        const rect = grid.getBoundingClientRect()
        const vh = window.innerHeight
        // 0 when section top hits 80% of viewport, 1 when section scrolled past
        const progress = Math.max(0, Math.min(1, (vh * 0.8 - rect.top) / rect.height))
        grid.style.setProperty('--line-progress', String(progress))

        // Activate each step when the progress line reaches its dot
        const lineH = progress * rect.height
        stepRefs.current.forEach((step) => {
          if (!step) return
          if (lineH >= step.offsetTop + 4) {
            step.classList.add('process__step--active')
          }
        })
      }

      window.addEventListener('scroll', update, { passive: true })
      update()
      return () => window.removeEventListener('scroll', update)
    }
  }, [])

  return (
    <div ref={gridRef} className="process__grid">
      {PROCESS.map((s, i) => (
        <div
          key={s.num}
          ref={(el) => { stepRefs.current[i] = el }}
          className="process__step"
        >
          <span className="process__num">{s.num}</span>
          <h3 className="process__title">{s.title}</h3>
          <p className="process__desc">{s.desc}</p>
        </div>
      ))}
    </div>
  )
}
