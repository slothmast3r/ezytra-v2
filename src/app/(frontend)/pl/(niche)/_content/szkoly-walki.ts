import type { NicheContent } from './types'

export const szkolyWalki: NicheContent = {
  slug: 'strony-dla-szkol-walki',
  niche: 'walki',
  meta: {
    title: 'Strony dla szkół sztuk walki i klubów MMA — Ezytra',
    description:
      'Projektuję i koduję strony dla klubów BJJ, MMA, boksu i kickboxingu: harmonogram treningów, profile trenerów, zapisy online, SEO lokalne. Jedna osoba z Warszawy, od makiet po wdrożenie.',
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
  reality: {
    heading: 'Twoja strona może wyglądać OK. To nie znaczy, że działa.',
    intro:
      'Na pierwszy rzut oka wszystko jest. Logo, zdjęcia z sali, zakładki. Ale to, czy ktoś faktycznie zapisze się na pierwszy trening, zależy od trzech rzeczy — i one zwykle nie są w porządku.',
    items: [
      {
        stat: '3 sekundy',
        title: 'Jeśli strona ładuje się wolno — wyjdą zanim ją obejrzą',
        body: 'Według badań Google ponad 50% użytkowników mobile zamyka stronę, jeśli ładuje się dłużej niż 3 sekundy. Twoje zdjęcia z sali i filmy z treningów nie zdążą się załadować.',
      },
      {
        stat: '10 sek.',
        title: 'Wejście ≠ znalezienie tego, czego szukają',
        body: 'Po wejściu masz kilkanaście sekund, żeby pokazać: jaką dyscyplinę prowadzisz, kto trenuje, kiedy są zajęcia i jak się zapisać. Jeśli to nie jest oczywiste w pierwszym ekranie — wracają do Google.',
      },
      {
        stat: '70%',
        title: 'Większość wchodzi z telefonu, nie z laptopa',
        body: 'Twoja strona musi działać bez zarzutu na ekranie 5-calowym. Mała czcionka, formularz na 5 kroków, harmonogram w PDF-ie — to powody, dla których nikt się nie zapisuje.',
      },
    ],
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
    heading: 'Co może mieć Twoja strona',
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
        body: 'Zgody, polityka prywatności i wdrożenie na szybkim hostingu — Twoim albo takim, który razem wybierzemy.',
      },
    ],
  },
  proof: {
    eyebrow: 'Realizacja z tej branży',
    heading: 'Pantera Family & Sport Club, Mokotów',
    intro:
      'Klub sztuk walki i sportu rodzinnego: Krav Maga, karate i trening siłowy dla dzieci i dorosłych. Jedna strona miała obsłużyć trzy grupy naraz — rodziców, dorosłych i firmy. Zrobiłem ją od makiet po wdrożenie: autorski motyw WordPress, bez page buildera, na zwykłym hostingu.',
    before: {
      label: 'Było',
      bullets: [
        'Generyczny motyw WordPress z tekstem na stockowym zdjęciu',
        'Jedna ścieżka dla wszystkich — rodzice, dorośli i firmy szukali po omacku',
        'Układ przesuwał się podczas ładowania (CLS 0,235)',
        'Lighthouse: wydajność 83, SEO 85',
      ],
    },
    after: {
      label: 'Jest',
      bullets: [
        '10-sekundowe wideo z prawdziwych treningów zamiast zdjęcia',
        'Trzy ścieżki od razu pod hero: dzieci, dorośli, firmy',
        'Każdy przycisk kończy się rozmową: formularz, telefon albo WhatsApp',
        'Lighthouse: wydajność 95, SEO 100, stabilny układ (CLS 0,015)',
      ],
    },
    results: [
      { stat: 'co dzień', label: 'zapytania niemal codziennie od startu' },
      { stat: '~3,5%', label: 'sesji kończy się zapytaniem' },
      { stat: '+50%', label: 'wejść z wyszukiwarki Google' },
      { stat: '40%', label: 'sesji z podglądem harmonogramu' },
    ],
    resultsNote:
      'Google Analytics 4, pierwsze trzy tygodnie po starcie (31.08–20.09.2026). Część wzrostu z Google to początek sezonu — redesign i sezon zadziałały w tę samą stronę.',
    liveHref: 'https://pantera.waw.pl',
    liveLabel: 'pantera.waw.pl',
    caseStudyHref: '/work/pantera',
    caseStudyLabel: 'Pełne case study (po angielsku)',
  },
  pricing: {
    heading: 'Transparentne pakiety',
    subheading:
      'Bez ukrytych kosztów. Te same pakiety i ceny co w cenniku, dopasowane do klubu.',
    packages: [
      {
        name: 'Start',
        price: 'od 4 000 zł',
        tagline: 'Strona wizytówka na moim design systemie, w barwach Twojego klubu',
        features: [
          'Do 5 podstron: strona główna, treningi, trenerzy, cennik, kontakt',
          'Harmonogram treningów (statyczny) i formularz zapisów z powiadomieniami e-mail',
          'Podstawowe SEO, analityka i baner cookies z polityką RODO',
          'Redakcja i korekta Twoich tekstów',
          'Wdrożenie na Twoim hostingu lub pomoc w wyborze polskiego hostingu',
          'Realizacja: 2–3 tygodnie',
        ],
        cta: 'Wybierz Start',
      },
      {
        name: 'Rozwój',
        price: 'od 10 000 zł',
        tagline: 'Indywidualny projekt wokół Twojej oferty — strona, która zapisuje na pierwszy trening',
        features: [
          'Warsztat otwierający i projekt graficzny od zera (2 kierunki do wyboru)',
          'Interaktywny harmonogram z panelem CMS + do 10 podstron na szablonie (np. każda dyscyplina osobno)',
          'Profile trenerów z osiągnięciami',
          'Rozszerzone SEO lokalne + Profil Firmy w Google',
          'Do 3 integracji: zapisy, rezerwacja sparingów, czat',
          'Szkolenie z CMS i 30 dni wsparcia po starcie',
          'Realizacja: 5–7 tygodni',
        ],
        cta: 'Wybierz Rozwój',
        featured: true,
      },
      {
        name: 'Większy projekt',
        price: 'wycena indywidualna',
        tagline: 'Dla klubów z kilkoma lokalizacjami, sekcjami lub sprzedażą karnetów online',
        features: [
          'Wszystko z pakietu Rozwój',
          'Wielolokalizacyjny harmonogram',
          'Płatności online za karnety, obozy i seminaria',
          'Integracje (CRM, płatności, newsletter)',
          'Zakres i harmonogram po rozmowie (30 min) — oferta w 5 dni roboczych',
        ],
        cta: 'Porozmawiajmy',
      },
    ],
    note: 'Ceny są orientacyjne — każdą stronę wyceniam indywidualnie po rozmowie, bo nie każdy klub potrzebuje wszystkiego z pakietu (np. bloga).',
    footnote: 'Pełny zakres, rozszerzenia i gwarancje znajdziesz w cenniku',
    footnoteHref: '/pl/cennik',
  },
  faq: {
    heading: 'Najczęstsze pytania',
    items: [
      {
        q: 'Ile trwa realizacja strony dla klubu?',
        a: 'Pakiet Start: 2–3 tygodnie od otrzymania materiałów. Pakiet Rozwój: 5–7 tygodni od warsztatu. Tempo zależy głównie od tego, jak szybko dostarczasz treści (opisy dyscyplin, bio trenerów, zdjęcia z sali).',
      },
      {
        q: 'Czy mogę sam edytować harmonogram i profile trenerów?',
        a: 'Tak. W pakiecie Rozwój i wyżej dostajesz panel CMS, gdzie aktualizujesz harmonogram, dodajesz trenerów i edytujesz teksty. Bez znajomości kodu.',
      },
      {
        q: 'Co z ubezpieczeniem i regulaminami?',
        a: 'Strona ma sekcję na regulamin, RODO i polityki klubu — z miejscem na dokumenty PDF do pobrania. Treści prawne dostarczasz Ty albo Twój prawnik.',
      },
      {
        q: 'Robisz strony dla BJJ, MMA, boksu, kickboxingu?',
        a: 'Tak — projekt dopasowuję pod konkretną dyscyplinę albo kilka naraz. Pantera, którą widzisz wyżej, łączy Krav Magę, karate i trening siłowy dla dzieci i dorosłych na jednej stronie.',
      },
      {
        q: 'Co z domeną i hostingiem?',
        a: 'Stronę wdrażam na Twoim hostingu albo pomagam wybrać polski hosting i domenę — to zwykle ok. 200–400 zł rocznie, płacone bezpośrednio u dostawcy. Jeśli nie chcesz tego pilnować, w rozszerzeniu „Opieka miesięczna” biorę na siebie aktualizacje, kopie zapasowe i monitoring.',
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
