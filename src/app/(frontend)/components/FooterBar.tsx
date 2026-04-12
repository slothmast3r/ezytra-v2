import AnimatedLink from './AnimatedLink'
import { SOCIAL_LINKS, SITE_DATA } from '../data'

export default function FooterBar() {
  return (
    <div className="footer__bar">
      <p className="footer__copy">© 2025 {SITE_DATA.name} / {SITE_DATA.brand}</p>
      <span className="footer__brand">{SITE_DATA.brand.toUpperCase()}</span>
      <nav className="footer__links">
        {SOCIAL_LINKS.map((link) => (
          <AnimatedLink key={link.label} href={link.href}>
            {link.label}
          </AnimatedLink>
        ))}
      </nav>
    </div>
  )
}
