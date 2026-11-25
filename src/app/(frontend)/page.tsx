export const revalidate = 60

import HomePage from './components/pages/HomePage'

export const metadata = {
  title: 'Oskar Straszyński, Ezytra',
  description:
    'Designer & Developer based in Warsaw. I design and build websites, end to end: design, code, CMS, and deployment.',
  alternates: {
    canonical: '/',
    languages: { en: '/', pl: '/pl' },
  },
}

export default function Page() {
  return <HomePage locale="en" />
}
