import Button from './Button'
import FooterBar from './FooterBar'

interface SiteFooterProps {
  title?: string
  desc?: string
  buttonText?: string
  buttonHref?: string
}

export default function SiteFooter({
  title = 'Have a project in mind?',
  desc = "I'm currently available. Let's see if we're a good fit.",
  buttonText = 'Send Me a Message',
  buttonHref = '/contact',
}: SiteFooterProps) {
  return (
    <footer className="contact" id="contact">
      <div className="contact__cta">
        <div>
          <h2 className="contact__title">{title}</h2>
          <p className="contact__desc">{desc}</p>
        </div>
        <div className="contact__action">
          <Button variant="primary" href={buttonHref} chevron>
            {buttonText}
          </Button>
          <p className="contact__email">hello@ezytra.com</p>
        </div>
      </div>

      <FooterBar />
    </footer>
  )
}
