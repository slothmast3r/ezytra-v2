'use client'

import React from 'react'
import { trackEvent, type AnalyticsEventParams } from '@/lib/analytics'

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: string
  eventParams?: AnalyticsEventParams
}

/** Plain <a> that reports a click event to analytics before navigating. */
export default function TrackedLink({ event, eventParams, onClick, children, ...rest }: Props) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        trackEvent(event, eventParams)
        onClick?.(e)
      }}
    >
      {children}
    </a>
  )
}
