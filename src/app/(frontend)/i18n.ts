export type Locale = 'en' | 'pl'

// English lives at the root; Polish is mirrored under /pl.
export const EN_TO_PL: Record<string, string> = {
  '/': '/pl',
  '/work': '/pl/realizacje',
  // The Polish site has no services page; the price list is its closest equivalent.
  '/services': '/pl/cennik',
  '/about': '/pl/o-mnie',
  '/contact': '/pl/kontakt',
}

export const PL_TO_EN: Record<string, string> = Object.fromEntries(
  Object.entries(EN_TO_PL).map(([en, pl]) => [pl, en]),
)

/** True for the Polish mirror (/pl and anything below it). */
export function isPolishPath(pathname: string): boolean {
  return pathname === '/pl' || pathname.startsWith('/pl/')
}

/** Best-equivalent URL of the current page in the other language. */
export function altLocaleHref(pathname: string, locale: Locale): string {
  if (locale === 'en') {
    // Case studies and journal posts have no Polish mirror; land on the closest hub.
    if (pathname.startsWith('/work/')) return '/pl/realizacje'
    if (pathname.startsWith('/journal')) return '/pl'
    return EN_TO_PL[pathname] ?? '/pl'
  }
  return PL_TO_EN[pathname] ?? '/'
}
