'use client'

import React, { useRef, useState } from 'react'
import { SplitText } from './AnimatedLink'
import { useObservedVisibility } from '../../../hooks/useObservedVisibility'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'badge' | 'link'

interface ButtonProps {
  variant?: ButtonVariant
  href?: string
  onClick?: () => void
  className?: string
  chevron?: boolean
  children: React.ReactNode
  [key: string]: unknown
}

function Chevron({ revealed }: { revealed: boolean }) {
  return (
    <svg
      className={`btn__chevron${revealed ? ' btn__chevron--in' : ''}`}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 3l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Button({
  variant = 'primary',
  href,
  onClick,
  className = '',
  chevron = false,
  children,
  ...rest
}: ButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null)
  const nullRef = useRef<HTMLElement>(null)
  const [hovered, setHovered] = useState(false)
  const [everHovered, setEverHovered] = useState(false)
  const revealed = useObservedVisibility(chevron ? ref : nullRef, 0.6)

  const cls = `btn btn--${variant}${chevron ? ' btn--animated' : ''}${className ? ` ${className}` : ''}`

  const content = chevron ? (
    <>
      <SplitText revealed={revealed} hovered={hovered} everHovered={everHovered}>{children}</SplitText>
      <Chevron revealed={revealed} />
    </>
  ) : (
    children
  )

  const handlers = chevron
    ? {
        onMouseEnter: () => { setHovered(true); setEverHovered(true) },
        onMouseLeave: () => setHovered(false),
      }
    : {}

  if (href) {
    return (
      <a ref={ref} href={href} className={cls} {...handlers} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button ref={ref} onClick={onClick} className={cls} {...handlers} {...rest}>
      {content}
    </button>
  )
}
