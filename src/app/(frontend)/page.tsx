export const revalidate = 60

import HomePage from './components/pages/HomePage'

export const metadata = {
  alternates: {
    canonical: '/',
    languages: { en: '/', pl: '/pl' },
  },
}

export default function Page() {
  return <HomePage locale="en" />
}
