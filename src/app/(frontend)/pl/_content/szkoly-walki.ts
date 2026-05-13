import type { NicheContent } from './types'

export const szkolyWalki: NicheContent = {
  slug: 'strony-dla-szkol-walki',
  niche: 'walki',
  meta: {
    title: 'Strony dla szkół sztuk walki i klubów MMA — Ezytra',
    description:
      'Projektujemy strony dla klubów BJJ, MMA, boksu i kickboxingu: harmonogram treningów, profile trenerów, zapisy online, SEO lokalne. Studio z Warszawy.',
    ogTitle: 'Strony dla klubów sztuk walki — Ezytra',
  },
  hero: {
    eyebrow: 'Studio z Warszawy',
    h1: 'Strony dla szkół sztuk walki i klubów MMA',
    subheadline:
      'Harmonogram treningów, profile trenerów i zapisy online w jednym miejscu. Bez generycznych szablonów — projekt, który pokazuje poziom Twojego klubu, a nie tylko logo na czarnym tle.',
    ctaPrimary: 'Bezpłatna wycena',
    ctaSecondary: 'Zobacz, co dostajesz',
    socialProof: 'Zaprojektowane i zakodowane w Warszawie — bez podwykonawców i pośredników.',
  },
  problems: {
    heading: 'Co najczęściej blokuje zapisy w klubach walki',
    items: [
      {
        problem: 'Zawodnicy szukają w Google i nie znajdują Twojego klubu',
        solution:
          'SEO lokalne pod frazy „BJJ Warszawa", „klub MMA [dzielnica]", dane strukturalne i Google Business.',
      },
      {
        problem: 'Pierwszy trening trzeba „dogadać przez Messengera"',
        solution:
          'Zapisy online z wyborem dyscypliny i poziomu (początkujący / średnio / zaawansowany). Lead trafia od razu do Ciebie.',
      },
      {
        problem: 'Trenerzy z medalami, których nikt nie widzi',
        solution:
          'Profile trenerów z osiągnięciami, stopniami i social mediami. Twoja kadra sprzedaje sama.',
      },
    ],
  },
  features: {
    heading: 'Co dostajesz w pakiecie',
    items: [
      {
        title: 'Harmonogram treningów',
        body: 'Siatka tygodniowa z filtrami po dyscyplinie (BJJ / MMA / boks / kickboxing) i poziomie.',
      },
      {
        title: 'Profile trenerów',
        body: 'Stopnie, osiągnięcia, dyscyplina, social media. Pokazujesz konkret, nie ogólniki.',
      },
      {
        title: 'Zapisy online',
        body: 'Z wyborem dyscypliny i poziomu. Lead od razu w skrzynce i w panelu.',
      },
      {
        title: 'Rezerwacja sparingów',
        body: 'Opcjonalnie: rezerwacja open mat / sparingów na konkretną godzinę.',
      },
      {
        title: 'SEO lokalne',
        body: 'Google Business, dane strukturalne, optymalizacja pod frazy dzielnicowe.',
      },
      {
        title: 'RODO i hosting',
        body: 'Zgody, polityka prywatności, szybki hosting w Europie. Wszystko legalne, wszystko szybkie.',
      },
    ],
  },
  caseStudy: {
    heading: 'Co się zmienia',
    before: {
      label: 'Typowa strona klubu',
      bullets: [
        'Czarne tło, czerwone logo, zdjęcia z 2014',
        'Harmonogram jako screenshot z Excela',
        'Brak profili trenerów',
        'Telefon jako jedyny kanał kontaktu',
      ],
    },
    after: {
      label: 'Strona od Ezytry',
      bullets: [
        'Designerski, mocny wizerunek dopasowany do Twojej dyscypliny',
        'Interaktywny harmonogram z filtrami',
        'Profile trenerów z osiągnięciami i social mediami',
        'Zapisy online — pierwszy trening jednym kliknięciem',
      ],
    },
  },
  pricing: {
    heading: 'Transparentne pakiety',
    subheading: 'Bez ukrytych kosztów. Hosting i domena w cenie pierwszego roku.',
    packages: [
      {
        name: 'Start',
        price: 'od 4 000 zł',
        tagline: 'Sprawdzony szablon dopasowany do Twojego klubu',
        features: [
          'Gotowy szablon z dopasowaniem kolorów, zdjęć i tekstów',
          'Harmonogram treningów (statyczny)',
          'Formularz zapisów',
          'Drobne optymalizacje SEO (meta, dane strukturalne, sitemap)',
          'Hosting i domena (1 rok)',
          'Realizacja: 2–3 tygodnie',
        ],
        cta: 'Wybierz Start',
      },
      {
        name: 'Klub',
        price: 'od 8 000 zł',
        tagline: 'Projekt custom z rundami poprawek — pod Twoją markę',
        features: [
          'Projekt graficzny od zera (2 rundy poprawek)',
          'Interaktywny harmonogram z panelem CMS',
          'Profile trenerów z osiągnięciami',
          'Pełne SEO lokalne + Google Business Profile',
          'Hosting i domena (1 rok)',
          'Realizacja: 4–6 tygodni',
        ],
        cta: 'Wybierz Klub',
        featured: true,
      },
      {
        name: 'Akademia',
        price: 'wycena indywidualna',
        tagline: 'Dla klubów z kilkoma lokalizacjami i sekcjami',
        features: [
          'Wszystko z Klub',
          'Wielolokalizacyjny harmonogram',
          'Integracje (CRM, płatności, newsletter)',
          'Sekcje pod zawody, obozy, seminaria',
          'Wsparcie i rozwój przez 12 miesięcy',
        ],
        cta: 'Porozmawiajmy',
      },
    ],
  },
  faq: {
    heading: 'Najczęstsze pytania',
    items: [
      {
        q: 'Ile trwa realizacja strony dla klubu?',
        a: 'Pakiet Start: 2–3 tygodnie. Pakiet Klub: 4–6 tygodni. Tempo zależy głównie od tego, jak szybko dostarczasz treści (opisy dyscyplin, bio trenerów, zdjęcia z sali).',
      },
      {
        q: 'Czy mogę sam edytować harmonogram i profile trenerów?',
        a: 'Tak. W pakiecie Klub i wyżej dostajesz panel CMS, gdzie aktualizujesz harmonogram, dodajesz trenerów i edytujesz teksty. Bez znajomości kodu.',
      },
      {
        q: 'Co z ubezpieczeniem i regulaminami?',
        a: 'Strona ma sekcję na regulamin, RODO i polityki klubu — z miejscem na dokumenty PDF do pobrania. Treści prawne dostarczasz Ty albo Twój prawnik.',
      },
      {
        q: 'Obsługujecie BJJ, MMA, boks, kickboxing?',
        a: 'Tak — szablon jest neutralny i dopasowujemy go pod konkretną dyscyplinę (lub kilka). Robiliśmy projekty zarówno dla klubów monodyscyplinowych, jak i hybrydowych.',
      },
      {
        q: 'Co z domeną i hostingiem?',
        a: 'Domena .pl i hosting na pierwszy rok są w cenie. Po roku to ok. 200–400 zł/rok — możemy się tym zająć albo przekazać Ci dostęp.',
      },
      {
        q: 'Czy strona działa dobrze na telefonie?',
        a: 'Strona jest projektowana mobile-first. Lighthouse 90+ na mobile to standard, nie wyjątek.',
      },
    ],
  },
  contact: {
    heading: 'Porozmawiajmy o Twoim klubie',
    subheading: 'Odpowiadam w ciągu 24h. Bez sprzedawania na siłę.',
    submitLabel: 'Wyślij zapytanie',
    successMessage: 'Dzięki! Odezwę się w ciągu 24h.',
    schoolFieldLabel: 'Nazwa klubu / szkoły',
    schoolFieldPlaceholder: 'np. Warsaw BJJ Academy',
  },
}
