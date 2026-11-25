export const revalidate = 60

import HomePage from '../components/pages/HomePage'

export const metadata = {
  title: 'Oskar Straszyński, Ezytra — strony internetowe, Warszawa',
  description:
    'Projektant i developer z Warszawy. Projektuję i buduję strony internetowe od A do Z: projekt, kod, CMS i wdrożenie.',
  alternates: {
    canonical: '/pl',
    languages: { en: '/', pl: '/pl' },
  },
}

export default function Page() {
  return <HomePage locale="pl" />
}
