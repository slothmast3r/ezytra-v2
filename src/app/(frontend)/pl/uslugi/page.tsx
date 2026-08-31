import ServicesPage from '../../components/pages/ServicesPage'

export const metadata = {
  title: 'Usługi — Ezytra',
  description:
    'Projektowanie stron, wdrożenia WordPress, integracja CMS, SEO i hosting — cztery usługi, jedna osoba, od początku do końca.',
  alternates: {
    canonical: '/pl/uslugi',
    languages: { en: '/services', pl: '/pl/uslugi' },
  },
}

export default function Page() {
  return <ServicesPage locale="pl" />
}
