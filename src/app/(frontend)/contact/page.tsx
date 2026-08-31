import ContactPage from '../components/pages/ContactPage'

export const metadata = {
  alternates: {
    canonical: '/contact',
    languages: { en: '/contact', pl: '/pl/kontakt' },
  },
}

export default function Page() {
  return <ContactPage locale="en" />
}
