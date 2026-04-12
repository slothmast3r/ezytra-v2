'use client'

import React, { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.jou-card') ||
        target.closest('.work__row') ||
        window.getComputedStyle(target).cursor === 'pointer'
      
      setHovered(!!isInteractive)
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    window.addEventListener('mouseover', handleOver)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseover', handleOver)
    }
  }, [visible])

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
