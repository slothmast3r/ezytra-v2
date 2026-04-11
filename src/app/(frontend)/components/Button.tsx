'use client'

import React, { Children, isValidElement, useEffect, useRef, useState } from 'react'

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

function extractText(children: React.ReactNode): string {
  let text = ''
  Children.forEach(children, (child) => {
    if (typeof child === 'string' || typeof child === 'number') {
      text += child
    } else if (isValidElement(child)) {
      const props = child.props as { children?: React.ReactNode }
      if (props.children) text += extractText(props.children)
    }
  })
  return text
}

function SplitText({
  children,
  revealed,
  hovered,
  everHovered,
}: {
  children: React.ReactNode
  revealed: boolean
  hovered: boolean
  everHovered: boolean
}) {
  const text = extractText(children)

  return (
    <>
      {text.split('').map((char, i) => {
        const display = char === ' ' ? '\u00a0' : char

        // bottom: starts below → slides up on first-view → slides out/in on hover
        const bottomDelay = hovered
          ? `${i * 18}ms`                // hover-in stagger
          : everHovered
            ? `${i * 18}ms`             // hover-out stagger (same speed, no blank)
            : revealed
              ? `${400 + i * 22}ms`     // first-view stagger (after chevron sweeps)
              : '0ms'

        const bottomCls = [
          'btn__char btn__char--bottom',
          revealed ? 'btn__char--revealed' : '',
          hovered   ? 'btn__char--out'      : '',
        ].filter(Boolean).join(' ')

        // top: sits above → slides in on hover → slides back out on leave
        const topDelay = `${i * 18}ms`

        const topCls = [
          'btn__char btn__char--top',
          hovered ? 'btn__char--in' : '',
        ].filter(Boolean).join(' ')

        return (
          <span key={i} className="btn__char-clip">
            <span className={bottomCls} style={{ transitionDelay: bottomDelay }}>
              {display}
            </span>
            <span className={topCls} style={{ transitionDelay: topDelay }} aria-hidden="true">
              {display}
            </span>
          </span>
        )
      })}
    </>
  )
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
  const [revealed, setRevealed] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [everHovered, setEverHovered] = useState(false)

  useEffect(() => {
    if (!chevron) return
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: 0.6 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [chevron])

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
