export type Locale = 'en' | 'pl'

// Polish is the default locale and lives at the root; English is mirrored under /en.
export const EN_TO_PL: Record<string, string> = {
  '/en': '/',
  '/en/work': '/realizacje',
  // The Polish site has no services page; the price list is its closest equivalent.
  '/en/services': '/cennik',
  '/en/about': '/o-mnie',
  '/en/contact': '/kontakt',
}

export const PL_TO_EN: Record<string, string> = Object.fromEntries(
  Object.entries(EN_TO_PL).map(([en, pl]) => [pl, en]),
)

/** True for the English mirror (/en and anything below it). */
export function isEnglishPath(pathname: string): boolean {
  return pathname === '/en' || pathname.startsWith('/en/')
}

/** Best-equivalent URL of the current page in the other language. */
export function altLocaleHref(pathname: string, locale: Locale): string {
  if (locale === 'en') {
    // Case studies and journal posts have no Polish mirror; land on the closest hub.
    if (pathname.startsWith('/en/work/')) return '/realizacje'
    if (pathname.startsWith('/en/journal')) return '/'
    return EN_TO_PL[pathname] ?? '/'
  }
  return PL_TO_EN[pathname] ?? '/en'
}
