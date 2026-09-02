import React, { Suspense } from 'react'
import Nav from '../Nav'
import SiteFooter from '../SiteFooter'
import WorkGrid from '../../work/WorkGrid'
import { WorkGridSkeleton } from '../Skeletons'
import { getAllProjects } from '@/lib/projects'
import { withVerifiedStatus } from '@/lib/site-status'
import { localizeProject } from '@/lib/project-meta'
import type { Locale } from '../../i18n'

const WORK_COPY = {
  en: {
    eyebrow: 'Selected Work',
    headingLines: ['Every project,', 'start to finish.'],
    tagline: 'I own the work from first conversation to deployed site. No handoffs.',
    footer: {
      title: 'Want to be the next case study?',
      desc: "I'm available for new projects. Let's talk.",
      buttonText: 'Start a Project',
      buttonHref: '/contact',
    },
  },
  pl: {
    eyebrow: 'Wybrane realizacje',
    headingLines: ['Każdy projekt,', 'od początku do końca.'],
    tagline: 'Prowadzę projekt od pierwszej rozmowy do wdrożonej strony. Bez pośredników.',
    footer: {
      title: 'Chcesz być kolejnym case study?',
      desc: 'Mam wolne terminy na nowe projekty. Porozmawiajmy.',
      buttonText: 'Zacznij projekt',
      buttonHref: '/pl/kontakt',
    },
  },
} as const

async function WorkContent({ locale }: { locale: Locale }) {
  const projects = (await withVerifiedStatus(await getAllProjects())).map((p) =>
    localizeProject(p, locale),
  )
  return <WorkGrid projects={projects} locale={locale} />
}

export default function WorkArchivePage({ locale = 'en' }: { locale?: Locale }) {
  const copy = WORK_COPY[locale]

  return (
    <>
      <Nav locale={locale} />

      {/* ── Hero ── */}
      <section className="wa-hero">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1 className="wa-hero__heading">
          <span className="wa-hero__heading-line">{copy.headingLines[0]}</span>
          <span className="wa-hero__heading-line wa-hero__heading-line--accent">{copy.headingLines[1]}</span>
        </h1>
        <p className="wa-hero__tagline">{copy.tagline}</p>
      </section>

      {/* ── Filters + Grid ── */}
      <Suspense fallback={<WorkGridSkeleton />}>
        <WorkContent locale={locale} />
      </Suspense>

      {/* ── CTA ── */}
      <SiteFooter {...copy.footer} />
    </>
  )
}
