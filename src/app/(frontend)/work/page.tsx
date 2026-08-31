export const revalidate = 60

import WorkArchivePage from '../components/pages/WorkArchivePage'

export const metadata = {
  alternates: {
    canonical: '/work',
    languages: { en: '/work', pl: '/pl/realizacje' },
  },
}

export default function Page() {
  return <WorkArchivePage locale="en" />
}
