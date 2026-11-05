'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { isEnglishPath } from '../i18n'

/**
 * The server sets <html lang> from the request path, but client-side
 * navigations between / and /en don't re-render the root layout.
 * Keep the attribute in sync so screen readers switch voices correctly.
 */
export default function LangSync() {
  const pathname = usePathname()

  useEffect(() => {
    const lang = isEnglishPath(pathname ?? '') ? 'en' : 'pl'
    if (document.documentElement.lang !== lang) {
      document.documentElement.lang = lang
    }
  }, [pathname])

  return null
}
