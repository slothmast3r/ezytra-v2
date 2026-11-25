import React from 'react'
import Nav from './components/Nav'
import Button from './components/Button'
import FooterBar from './components/FooterBar'

export default function NotFound() {
  return (
    <>
      <Nav />

      <section className="nf">
        <div className="nf__body">
          <div className="nf__left">
            <p className="eyebrow">— 404</p>
            <h1 className="nf__code">404</h1>
          </div>

          <div className="nf__right">
            <p className="nf__tagline">
              — This page doesn&apos;t exist.
            </p>
            <p className="nf__desc">
              You followed a broken link, or the page was moved. Either way — nothing here.
            </p>
            <div className="nf__actions">
              <Button href="/" variant="primary">Back to Home</Button>
              <Button href="/journal" variant="secondary">Read the Journal</Button>
            </div>
          </div>
        </div>
      </section>

      <FooterBar />
    </>
  )
}
