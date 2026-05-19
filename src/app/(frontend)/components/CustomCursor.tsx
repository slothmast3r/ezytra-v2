'use client'

import React, { useEffect, useRef, useState } from 'react'

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], [data-cursor="pointer"], .jou-card, .work__row, input, textarea, select, summary, label[for]'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(false)
  const rafRef = useRef<number | null>(null)
  const nextPosRef = useRef({ x: -100, y: -100 })

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      nextPosRef.current = { x: e.clientX, y: e.clientY }
      if (rafRef.current !== null) return
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null
        setPos(nextPosRef.current)
        setVisible((v) => v || true)
      })
    }

    const handleOver = (e: MouseEvent) => {
      const target = e.target as Element | null
      setHovered(!!target?.closest(INTERACTIVE_SELECTOR))
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    window.addEventListener('mouseover', handleOver, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseover', handleOver)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  if (!visible) return null

  return (
    <div 
      className="cursor-wrapper"
      style={{ 
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` 
      }}
    >
      <div className={`cursor-inner ${hovered ? 'cursor-inner--hover' : ''}`}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Border path */}
          <path d="M4 4L8 8L4 12" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          {/* Main path */}
          <path d="M4 4L8 8L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}
