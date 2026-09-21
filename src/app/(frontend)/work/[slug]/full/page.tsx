import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import CaseStudyView from '../CaseStudyView'
import { SITE_DATA } from '../../../data'
import { getAllProjects, getFullCaseStudySlugs, getProjectFull } from '@/lib/projects'

export async function generateStaticParams() {
  const slugs = await getFullCaseStudySlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const meta = (await getProjectFull(slug))?.meta
  if (!meta) return {}
  const title = meta.meta?.title || meta.name
  const description = meta.meta?.description || meta.desc
  return {
    title: `${title} — Full Case Study — ${SITE_DATA.brand}`,
    description,
    openGraph: { title: `${title} — Full Case Study`, description, type: 'website' },
  }
}

export default async function FullCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = await getProjectFull(slug)
  if (!project) notFound()

  const allProjects = await getAllProjects()
  const currentIndex = allProjects.findIndex((p) => p.slug === slug)
  const nextProject = allProjects[currentIndex + 1] || allProjects[0]

  return (
    <CaseStudyView
      meta={project.meta}
      Content={project.Content}
      eyebrow={`FULL CASE STUDY — ${String(project.meta.order || 0).padStart(2, '0')}`}
      backLink={{ href: `/work/${slug}`, label: '← Project overview' }}
      nextProject={nextProject}
    />
  )
}
