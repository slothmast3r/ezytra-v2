import ContactPage from '../components/pages/ContactPage'

export const metadata = {
  title: 'Kontakt — Ezytra',
  description:
    'Opowiedz mi o swoim projekcie. Odpisuję w ciągu jednego dnia roboczego.',
  alternates: {
    canonical: '/kontakt',
    languages: { en: '/en/contact', pl: '/kontakt' },
  },
}

export default function Page() {
  return <ContactPage locale="pl" />
}
