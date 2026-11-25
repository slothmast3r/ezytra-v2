export type NicheContent = {
  slug: string
  niche: 'taniec' | 'walki'
  meta: {
    title: string
    description: string
    ogTitle: string
  }
  hero: {
    eyebrow: string
    h1: string
    subheadline: string
    ctaPrimary: string
    ctaSecondary: string
    socialProof: string
  }
  reality: {
    heading: string
    intro: string
    items: { stat: string; title: string; body: string }[]
  }
  problems: {
    heading: string
    items: { problem: string; solution: string }[]
  }
  features: {
    heading: string
    items: { title: string; body: string }[]
  }
  /** A real project from the same niche: what it was, what changed, measured results. */
  proof: {
    eyebrow: string
    heading: string
    intro: string
    before: { label: string; bullets: string[] }
    after: { label: string; bullets: string[] }
    results: { stat: string; label: string }[]
    resultsNote: string
    liveHref: string
    liveLabel: string
    caseStudyHref: string
    caseStudyLabel: string
  }
  pricing: {
    heading: string
    subheading: string
    packages: {
      name: string
      price: string
      tagline: string
      features: string[]
      cta: string
      featured?: boolean
    }[]
    /** Optional disclaimer under the packages (prices are estimates). */
    note?: string
    /** Optional link under the packages, e.g. to the full price list. */
    footnote?: string
    footnoteHref?: string
  }
  faq: {
    heading: string
    items: { q: string; a: string }[]
  }
  contact: {
    heading: string
    subheading: string
    submitLabel: string
    successMessage: string
    schoolFieldLabel: string
    schoolFieldPlaceholder: string
  }
}
