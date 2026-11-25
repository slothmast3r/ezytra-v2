export const revalidate = 60

import WorkArchivePage from '../components/pages/WorkArchivePage'

export const metadata = {
  title: 'Realizacje — Ezytra',
  description:
    'Wybrane realizacje: strony internetowe projektowane i budowane od pierwszej rozmowy do wdrożenia.',
  alternates: {
    canonical: '/realizacje',
    languages: { en: '/en/work', pl: '/realizacje' },
  },
}

export default function Page() {
  return <WorkArchivePage locale="pl" />
}
