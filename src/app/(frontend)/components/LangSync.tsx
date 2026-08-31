'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * The server sets <html lang> from the request path, but client-side
 * navigations between /  and /pl don't re-render the root layout.
 * Keep the attribute in sync so screen readers switch voices correctly.
 */
export default function LangSync() {
  const pathname = usePathname()

  useEffect(() => {
    const lang = pathname?.startsWith('/pl') ? 'pl' : 'en'
    if (document.documentElement.lang !== lang) {
      document.documentElement.lang = lang
    }
  }, [pathname])

  return null
}
