'use client'

import React, { Children, isValidElement, useState } from 'react'

export function extractText(children: React.ReactNode): string {
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

interface SplitTextProps {
  children: React.ReactNode
  revealed?: boolean
  hovered: boolean
  everHovered: boolean
  stagger?: number
}

export function SplitText({
  children,
  revealed = true,
  hovered,
  everHovered,
  stagger = 18,
}: SplitTextProps) {
  const text = extractText(children)

  return (
    <>
      {text.split('').map((char, i) => {
        const display = char === ' ' ? '\u00a0' : char

        // bottom: starts below → slides up on first-view → slides out/in on hover
        const bottomDelay = hovered
          ? `${i * stagger}ms`                // hover-in stagger
          : everHovered
            ? `${i * stagger}ms`             // hover-out stagger
            : revealed
              ? `${i * (stagger + 4)}ms`     // first-view stagger
              : '0ms'

        const bottomCls = [
          'btn__char btn__char--bottom',
          revealed ? 'btn__char--revealed' : '',
          hovered   ? 'btn__char--out'      : '',
        ].filter(Boolean).join(' ')

        // top: sits above → slides in on hover → slides back out on leave
        const topDelay = `${i * stagger}ms`

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

interface AnimatedLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
  [key: string]: unknown
}

export default function AnimatedLink({ href, children, className = '', onClick, ...rest }: AnimatedLinkProps) {
  const [hovered, setHovered] = useState(false)
  const [everHovered, setEverHovered] = useState(false)

  return (
    <a
      href={href}
      className={className}
      onMouseEnter={() => { setHovered(true); setEverHovered(true) }}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      {...rest}
    >
      <SplitText hovered={hovered} everHovered={everHovered}>
        {children}
      </SplitText>
    </a>
  )
}
