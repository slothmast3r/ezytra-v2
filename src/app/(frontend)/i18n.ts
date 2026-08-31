export type Locale = 'en' | 'pl'

// Route equivalences between the English site and its Polish mirror.
export const EN_TO_PL: Record<string, string> = {
  '/': '/pl',
  '/work': '/pl/realizacje',
  '/services': '/pl/uslugi',
  '/about': '/pl/o-mnie',
  '/contact': '/pl/kontakt',
}

export const PL_TO_EN: Record<string, string> = Object.fromEntries(
  Object.entries(EN_TO_PL).map(([en, pl]) => [pl, en]),
)

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
