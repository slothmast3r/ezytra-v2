import { track } from '@vercel/analytics'
import { sendGAEvent } from '@next/third-parties/google'

export type AnalyticsEventParams = Record<string, string | number | boolean>

/**
 * Sends a custom event to both Vercel Analytics and Google Analytics.
 * GA receives the event only when the gtag dataLayer is present
 * (i.e. NEXT_PUBLIC_GA_MEASUREMENT_ID is configured).
 */
export function trackEvent(name: string, params?: AnalyticsEventParams) {
  track(name, params)
  if (typeof window !== 'undefined' && 'dataLayer' in window) {
    sendGAEvent('event', name, params ?? {})
  }
}
