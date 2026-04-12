import AnimatedLink from './AnimatedLink'

const SOCIAL_LINKS = ['GitHub', 'LinkedIn', 'Dribbble', 'Instagram']

export default function FooterBar() {
  return (
    <div className="footer__bar">
      <p className="footer__copy">© 2025 Oskar Straszyński / Ezytra</p>
      <span className="footer__brand">EZYTRA</span>
      <nav className="footer__links">
        {SOCIAL_LINKS.map((l) => (
          <AnimatedLink key={l} href="#">
            {l}
          </AnimatedLink>
        ))}
      </nav>
    </div>
  )
}
