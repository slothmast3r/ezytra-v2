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
  problems: {
    heading: string
    items: { problem: string; solution: string }[]
  }
  features: {
    heading: string
    items: { title: string; body: string }[]
  }
  caseStudy: {
    heading: string
    before: { label: string; bullets: string[] }
    after: { label: string; bullets: string[] }
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
