'use client'

import AnimatedLink from './AnimatedLink'

interface NavLinkProps {
  href: string
  children: string
  onClick?: () => void
}

export default function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <AnimatedLink
      href={href}
      onClick={onClick}
      className="nav__link-animated"
    >
      {children}
    </AnimatedLink>
  )
}
