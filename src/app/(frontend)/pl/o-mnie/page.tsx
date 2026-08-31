import AboutPage from '../../components/pages/AboutPage'

export const metadata = {
  title: 'O mnie — Ezytra',
  description:
    'Ezytra to jedna osoba: projektant i developer z Warszawy, który buduje całą stronę — bez zespołu, bez przekazywania zadań, bez marży agencji.',
  alternates: {
    canonical: '/pl/o-mnie',
    languages: { en: '/about', pl: '/pl/o-mnie' },
  },
}

export default function Page() {
  return <AboutPage locale="pl" />
}
