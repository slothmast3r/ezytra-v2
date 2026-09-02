import type { ProjectMeta } from './project-meta'

const CHECK_TIMEOUT_MS = 8000
// Next.js only caches GET fetches, so we use GET (not HEAD) to get the
// hourly data-cache revalidation instead of hitting client sites per render.
const REVALIDATE_SECONDS = 3600

/** A site counts as online when it responds at all with a non-5xx status
 *  (403/401 from bot protection still means the site is up). */
async function isSiteOnline(href: string): Promise<boolean> {
  try {
    const res = await fetch(href, {
      redirect: 'follow',
      signal: AbortSignal.timeout(CHECK_TIMEOUT_MS),
      next: { revalidate: REVALIDATE_SECONDS },
    })
    return res.status < 500
  } catch {
    return false
  }
}

/** Downgrades `status: 'live'` to `'offline'` for projects whose site
 *  doesn't respond. Other statuses (dev/completed/archived) pass through. */
export async function withVerifiedStatus(projects: ProjectMeta[]): Promise<ProjectMeta[]> {
  return Promise.all(
    projects.map(async (p) => {
      if (p.status !== 'live' || !p.href) return p
      return (await isSiteOnline(p.href)) ? p : { ...p, status: 'offline' as const }
    }),
  )
}
