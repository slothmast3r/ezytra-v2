export const revalidate = 60

import WorkArchivePage from '../../components/pages/WorkArchivePage'

export const metadata = {
  alternates: {
    canonical: '/en/work',
    languages: { en: '/en/work', pl: '/realizacje' },
  },
}

export default function Page() {
  return <WorkArchivePage locale="en" />
}
