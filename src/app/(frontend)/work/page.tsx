export const revalidate = 0

import { getPayload } from 'payload'
import config from '@payload-config'
import Nav from '../components/Nav'
import SiteFooter from '../components/SiteFooter'
import WorkGrid from './WorkGrid'

export default async function WorkPage() {
  const payload = await getPayload({ config })

  const { docs: projects } = await payload.find({
    collection: 'projects',
    sort: 'order',
    limit: 100,
  })

  const count = projects.length

  return (
    <>
      <Nav />

      {/* ── Hero ── */}
      <section className="wa-hero">
        <div className="wa-hero__left">
          <p className="eyebrow">— Selected Work</p>
          <h1 className="wa-hero__heading">
            Every project,<br />start to finish.
          </h1>
        </div>
        <div className="wa-hero__right">
          <p className="wa-hero__count">
            {count} project{count !== 1 ? 's' : ''} · Design, development, and everything in between.
          </p>
          <p className="wa-hero__tagline">
            — I own the work from first conversation to deployed site. No handoffs.
          </p>
        </div>
      </section>

      {/* ── Filters + Grid ── */}
      <WorkGrid projects={projects as any} />

      {/* ── CTA ── */}
      <SiteFooter
        title="Want to be the next case study?"
        desc="I'm available for new projects. Let's talk."
        buttonText="Start a Project"
        buttonHref="/contact"
      />
    </>
  )
}
