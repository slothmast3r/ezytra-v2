import ServicesPage from '../components/pages/ServicesPage'

export const metadata = {
  alternates: {
    canonical: '/services',
    languages: { en: '/services', pl: '/pl/uslugi' },
  },
}

export default function Page() {
  return <ServicesPage locale="en" />
}
