import PricingPage from '../components/pages/PricingPage'

export const metadata = {
  title: 'Cennik — Ezytra',
  description:
    'Dwa pakiety stron www z ceną „od” i większe projekty wyceniane indywidualnie. Jasny zakres, termin i gwarancje: zwrot zaliczki za makietę, rabat za spóźnienie, 6 miesięcy na błędy.',
  alternates: {
    canonical: '/cennik',
  },
}

export default function Page() {
  return <PricingPage />
}
