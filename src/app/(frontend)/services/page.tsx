import ServicesPage from '../components/pages/ServicesPage'

export const metadata = {
  // No Polish mirror: the Polish site folds services into /cennik.
  alternates: {
    canonical: '/services',
  },
}

export default function Page() {
  return <ServicesPage locale="en" />
}
