'use client'

import { RefObject, useEffect, useState } from 'react'

export function useObservedVisibility(
  ref: RefObject<HTMLElement | null>,
  threshold = 0.1,
): boolean {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, threshold])

  return visible
}
