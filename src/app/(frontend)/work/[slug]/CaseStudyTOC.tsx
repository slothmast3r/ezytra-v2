'use client'

import { useEffect, useState } from 'react'
import type { TocChapter } from '@/lib/project-meta'

export default function CaseStudyTOC({ items }: { items: TocChapter[] }) {
  const [active, setActive] = useState(items[0]?.id ?? '')

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    const allIds = items.flatMap((it) => [it.id, ...(it.children?.map((c) => c.id) ?? [])])

    allIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: '-20% 0px -70% 0px' },
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [items])

  if (items.length === 0) return null

  return (
    <aside className="art-toc">
      <span className="art-toc__label">Navigation</span>
      <ul className="art-toc__list">
        {items.map((item, i) => {
          const isActiveChapter =
            active === item.id || (item.children?.some((c) => c.id === active) ?? false)
          const num = String(i + 1).padStart(2, '0')
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`art-toc__link${active === item.id ? ' art-toc__link--active' : ''}`}
              >
                <span className="art-toc__num">{num}</span>
                <span className="art-toc__title">— {item.title}</span>
              </a>
              {(item.children?.length ?? 0) > 0 && (
                <div
                  className={`art-toc__subwrap${isActiveChapter ? ' art-toc__subwrap--open' : ''}`}
                  aria-hidden={!isActiveChapter}
                >
                  <ul className="art-toc__sublist">
                    {item.children!.map((child) => (
                      <li key={child.id}>
                        <a
                          href={`#${child.id}`}
                          className={`art-toc__sublink${active === child.id ? ' art-toc__sublink--active' : ''}`}
                          tabIndex={isActiveChapter ? 0 : -1}
                        >
                          {child.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
