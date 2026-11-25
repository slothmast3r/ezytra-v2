import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import CaseStudyView from './CaseStudyView'
import { SITE_DATA } from '../../data'
import {
  getAllProjects,
  getFullCaseStudySlugs,
  getProjectBySlug,
  getProjectSlugs,
} from '@/lib/projects'

export async function generateStaticParams() {
  const slugs = await getProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const meta = (await getProjectBySlug(slug))?.meta
  if (!meta) return {}
  const title = meta.meta?.title || meta.name
  const description = meta.meta?.description || meta.desc
  return {
    title: `${title} — ${SITE_DATA.brand}`,
    description,
    openGraph: { title, description, type: 'website' },
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)
  if (!project || !project.meta.hasCaseStudy) notFound()

  const allProjects = await getAllProjects()
  const currentIndex = allProjects.findIndex((p) => p.slug === slug)
  const nextProject = allProjects[currentIndex + 1] || allProjects[0]
  const hasFull = (await getFullCaseStudySlugs()).includes(slug)

  return (
    <CaseStudyView
      meta={project.meta}
      Content={project.Content}
      eyebrow={`CASE STUDY — ${String(project.meta.order || 0).padStart(2, '0')}`}
      fullHref={hasFull ? `/work/${slug}/full` : undefined}
      backLink={{ href: '/work', label: '← All Projects' }}
      nextProject={nextProject}
    />
  )
}
