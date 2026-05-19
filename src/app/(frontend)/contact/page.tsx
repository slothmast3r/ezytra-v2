import React from 'react'
import Nav from '../components/Nav'
import ContactForm from './ContactForm'
import FooterBar from '../components/FooterBar'

const INFO = [
  {
    label: 'Email',
    value: 'oskar@straszynski.pl',
    sub: 'Best for project enquiries',
    href: 'mailto:oskar@straszynski.pl',
  },
  {
    label: 'LinkedIn',
    value: '/in/oskarstraszynski',
    sub: 'Career history and recommendations',
    href: 'https://linkedin.com/in/oskarstraszynski',
  },
  {
    label: 'GitHub',
    value: 'github.com/slothmast3r',
    sub: 'Open source and side projects',
    href: 'https://github.com/slothmast3r',
  },
  {
    label: 'Location',
    value: 'Warsaw, Poland',
    sub: 'CET. Open to remote work.',
    href: null,
  },
]

export default function ContactPage() {
  return (
    <>
      <Nav />

      {/* 01 — Hero */}
      <section className="contact-hero">
        <div className="contact-hero__body">
          <div className="contact-hero__left">
            <p className="eyebrow">— Get In Touch</p>
            <h1 className="contact-hero__headline">
              Let&apos;s build
              <br />
              something great.
            </h1>
          </div>
          <div className="contact-hero__right">
            <p className="contact-hero__tagline">
              Tell me about your project. I reply within one working day.
            </p>
            <p className="contact-hero__desc">
              I&apos;m selective about the work I take on. Not for the sake of it, but because
              I&apos;d rather do one project well than three at half-attention. If we&apos;re a fit,
              you&apos;ll know quickly.
            </p>
          </div>
        </div>
      </section>

      {/* 02 — Form + What to Expect */}
      <section className="cform-section">
        <ContactForm />
      </section>

      {/* 03 — Other Ways to Reach Me */}
      <section className="cinfo">
        <p className="eyebrow">— Other Ways to Reach Me</p>
        <div className="rule" />
        <div className="cinfo__grid">
          {INFO.map((item) => (
            <div key={item.label} className="cinfo__item">
              <span className="cinfo__label">{item.label}</span>
              {item.href ? (
                <a href={item.href} className="cinfo__value">
                  {item.value}
                </a>
              ) : (
                <span className="cinfo__value">{item.value}</span>
              )}
              <span className="cinfo__sub">{item.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 04 — Footer */}
      <footer className="contact">
        <FooterBar />
      </footer>
    </>
  )
}
