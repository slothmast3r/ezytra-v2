'use client'

import { useEffect, useState } from 'react'

interface TOCItem {
  num: string
  anchor: string
  title: string
}

export default function ArticleTOC({ items }: { items: TOCItem[] }) {
  const [active, setActive] = useState(items[0]?.anchor ?? '')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    items.forEach(({ anchor }) => {
      const el = document.getElementById(anchor)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(anchor) },
        { rootMargin: '-20% 0px -70% 0px' },
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [items])

  return (
    <aside className="art-toc">
      <span className="art-toc__label">Contents</span>
      <ul className="art-toc__list">
        {items.map((item) => (
          <li key={item.anchor}>
            <a
              href={`#${item.anchor}`}
              className={`art-toc__link${active === item.anchor ? ' art-toc__link--active' : ''}`}
            >
              <span className="art-toc__num">{item.num}</span>
              <span className="art-toc__title">— {item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}
