import AboutPage from '../../components/pages/AboutPage'

export const metadata = {
  alternates: {
    canonical: '/en/about',
    languages: { en: '/en/about', pl: '/o-mnie' },
  },
}

export default function Page() {
  return <AboutPage locale="en" />
}
