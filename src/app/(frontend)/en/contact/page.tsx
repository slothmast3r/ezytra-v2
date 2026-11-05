import ContactPage from '../../components/pages/ContactPage'

export const metadata = {
  alternates: {
    canonical: '/en/contact',
    languages: { en: '/en/contact', pl: '/kontakt' },
  },
}

export default function Page() {
  return <ContactPage locale="en" />
}
