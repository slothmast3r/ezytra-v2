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
    } else if (isValidElement(child) && child.props.children) {
      text += extractText(child.props.children as React.ReactNode)
    }
  })
  return text
}

function SplitText({ children, active }: { children: React.ReactNode; active: boolean }) {
  const text = extractText(children)
  return (
    <>
      {text.split('').map((char, i) => (
        <span key={i} className="btn__char-clip">
          <span
            className={`btn__char${active ? ' btn__char--in' : ''}`}
            style={{ transitionDelay: active ? `${400 + i * 22}ms` : '0ms' }}
          >
            {char === ' ' ? '\u00a0' : char}
          </span>
        </span>
      ))}
    </>
  )
}

function Chevron({ active, charCount }: { active: boolean; charCount: number }) {
  return (
    <svg
      className={`btn__chevron${active ? ' btn__chevron--in' : ''}`}
      style={{ transitionDelay: active ? '0ms' : '0ms' }}
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
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (!chevron) return
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.6 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [chevron])

  const cls = `btn btn--${variant}${chevron ? ' btn--animated' : ''}${className ? ` ${className}` : ''}`
  const charCount = chevron ? extractText(children).length : 0

  const content = chevron ? (
    <>
      <SplitText active={active}>{children}</SplitText>
      <Chevron active={active} charCount={charCount} />
    </>
  ) : (
    children
  )

  if (href) {
    return (
      <a ref={ref} href={href} className={cls} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button ref={ref} onClick={onClick} className={cls} {...rest}>
      {content}
    </button>
  )
}
