import AboutPage from '../components/pages/AboutPage'

export const metadata = {
  alternates: {
    canonical: '/about',
    languages: { en: '/about', pl: '/pl/o-mnie' },
  },
}

export default function Page() {
  return <AboutPage locale="en" />
}
