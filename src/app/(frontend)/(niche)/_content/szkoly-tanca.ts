import type { NicheContent } from "./types";

export const szkolyTanca: NicheContent = {
  slug: "strony-dla-szkol-tanca",
  niche: "taniec",
  meta: {
    title: "Strony internetowe dla szkół tańca w Warszawie — Ezytra",
    description:
      "Projektujemy i programujemy strony dla szkół tańca: zapisy online, grafik zajęć, galerie pokazów, SEO lokalne. Studio z Warszawy, transparentne pakiety.",
    ogTitle: "Strony dla szkół tańca — Ezytra",
  },
  hero: {
    eyebrow: "Studio z Warszawy",
    h1: "Strony internetowe dla szkół tańca w Warszawie",
    subheadline:
      "Zapisy online, czytelny grafik zajęć i galeria pokazów na jednej stronie. Bez generycznych szablonów — projekt dopasowany do Twojej szkoły i tego, jak tańczą Twoi kursanci.",
    ctaPrimary: "Bezpłatna wycena",
    ctaSecondary: "Zobacz, co dostajesz",
    socialProof:
      "Zaprojektowane i zakodowane w Warszawie — bez podwykonawców i pośredników.",
  },
  reality: {
    heading: "Twoja strona może wyglądać OK. To nie znaczy, że działa.",
    intro:
      "Na pierwszy rzut oka wszystko jest. Logo, zdjęcia z pokazów, zakładki. Ale to, czy ktoś faktycznie się zapisze na zajęcia, zależy od trzech rzeczy — i one zwykle nie są w porządku.",
    items: [
      {
        stat: "3 sekundy",
        title: "Jeśli strona ładuje się wolno — wyjdą zanim ją obejrzą",
        body: "Według badań Google ponad 50% użytkowników mobile zamyka stronę, jeśli ładuje się dłużej niż 3 sekundy. Twoje zdjęcia z pokazów po prostu nie zdążą się załadować.",
      },
      {
        stat: "10 sek.",
        title: "Wejście ≠ znalezienie tego, czego szukają",
        body: "Po wejściu masz kilkanaście sekund, żeby pokazać: kto jesteś, co oferujesz, ile to kosztuje i jak się zapisać. Jeśli to nie jest oczywiste w pierwszym ekranie — wracają do Google.",
      },
      {
        stat: "70%",
        title: "Większość wchodzi z telefonu, nie z laptopa",
        body: "Twoja strona musi działać bez zarzutu na ekranie 5-calowym. Mała czcionka, formularz na 5 kroków, grafik w PDF-ie — to powody, dla których nikt się nie zapisuje.",
      },
    ],
  },
  problems: {
    heading: "Co najczęściej blokuje zapisy w szkołach tańca",
    items: [
      {
        problem: "Kursanci piszą na Instagramie zamiast się zapisać",
        solution:
          "Dodajemy zapisy online wprost ze strony — z wyborem stylu, poziomu i terminu. Mniej DM-ów, więcej opłaconych miejsc.",
      },
      {
        problem: "Grafik zajęć w PDF-ie, którego nikt nie czyta",
        solution:
          "Robimy interaktywny grafik z filtrami po stylu i sali. Aktualizujesz go sam w panelu, bez dzwonienia do programisty.",
      },
      {
        problem: "Google nie pokazuje Twojej szkoły obok konkurencji",
        solution:
          'SEO lokalne pod frazy „szkoła tańca [dzielnica]", dane strukturalne, integracja z Google Business Profile.',
      },
    ],
  },
  features: {
    heading: "Co dostajesz w pakiecie",
    items: [
      {
        title: "Zapisy online",
        body: "Formularz z wyborem stylu, poziomu i terminu. Lead od razu trafia na e-mail i do panelu.",
      },
      {
        title: "Grafik zajęć",
        body: "Interaktywna siatka tygodniowa z filtrami. Aktualizujesz w panelu, nie w Photoshopie.",
      },
      {
        title: "Galeria pokazów",
        body: "Sekcja na zdjęcia i wideo z występów — bez utraty jakości i bez wolnego ładowania.",
      },
      {
        title: "Profile instruktorów",
        body: "Każdy instruktor z bio, stylem i social mediami. Twoja kadra to Twoje główne USP.",
      },
      {
        title: "SEO lokalne",
        body: "Google Business, dane strukturalne, optymalizacja pod frazy lokalne i dzielnicowe.",
      },
      {
        title: "RODO i hosting",
        body: "Zgody, polityka prywatności i wdrożenie na szybkim hostingu — Twoim albo takim, który razem wybierzemy.",
      },
    ],
  },
  caseStudy: {
    heading: "Co się zmienia",
    before: {
      label: "Strona z 2015 (typowa)",
      bullets: [
        'PDF z grafikiem na podstronie „Zajęcia"',
        "Telefon i e-mail jako jedyna forma kontaktu",
        "Brak galerii albo iframe z YouTube",
        "Wolne ładowanie na telefonie",
      ],
    },
    after: {
      label: "Strona od Ezytry",
      bullets: [
        "Interaktywny grafik z filtrami i zapisem jednym kliknięciem",
        "Formularz zapisów — lead od razu w skrzynce",
        "Galeria pokazów ładująca się płynnie",
        "Pełna ocena Lighthouse 90+ na mobile",
      ],
    },
  },
  pricing: {
    heading: "Transparentne pakiety",
    subheading:
      "Bez ukrytych kosztów. Te same pakiety i ceny co w cenniku, dopasowane do szkoły tańca.",
    packages: [
      {
        name: "Start",
        price: "od 4 000 zł",
        tagline: "Strona wizytówka na moim design systemie, w kolorach Twojej szkoły",
        features: [
          "Do 5 podstron: strona główna, zajęcia, instruktorzy, cennik, kontakt",
          "Grafik zajęć (statyczny) i formularz zapisów z powiadomieniami e-mail",
          "Podstawowe SEO, analityka i baner cookies z polityką RODO",
          "Redakcja i korekta Twoich tekstów",
          "Wdrożenie na Twoim hostingu lub pomoc w wyborze polskiego hostingu",
          "Realizacja: 2–3 tygodnie",
        ],
        cta: "Wybierz Start",
      },
      {
        name: "Rozwój",
        price: "od 10 000 zł",
        tagline: "Indywidualny projekt wokół Twojej oferty — strona, która zapisuje",
        features: [
          "Warsztat otwierający i projekt graficzny od zera (2 kierunki do wyboru)",
          "Interaktywny grafik z panelem CMS + do 10 podstron na szablonie (np. każdy styl osobno)",
          "Galeria pokazów i profile instruktorów",
          "Rozszerzone SEO lokalne + Profil Firmy w Google",
          "Do 3 integracji: zapisy, newsletter, czat",
          "Szkolenie z CMS i 30 dni wsparcia po starcie",
          "Realizacja: 5–7 tygodni",
        ],
        cta: "Wybierz Rozwój",
        featured: true,
      },
      {
        name: "Większy projekt",
        price: "wycena indywidualna",
        tagline: "Dla szkół z kilkoma lokalizacjami, grafikami lub sprzedażą online",
        features: [
          "Wszystko z pakietu Rozwój",
          "Wielolokalizacyjny grafik",
          "Płatności online za kursy i karnety",
          "Integracje (CRM, płatności, newsletter)",
          "Zakres i harmonogram po rozmowie (30 min) — oferta w 5 dni roboczych",
        ],
        cta: "Porozmawiajmy",
      },
    ],
    note: "Ceny są orientacyjne — każdą stronę wyceniam indywidualnie po rozmowie, bo nie każda szkoła potrzebuje wszystkiego z pakietu (np. bloga).",
    footnote: "Pełny zakres, rozszerzenia i gwarancje znajdziesz w cenniku",
    footnoteHref: "/cennik",
  },
  faq: {
    heading: "Najczęstsze pytania",
    items: [
      {
        q: "Ile trwa realizacja strony dla szkoły tańca?",
        a: "Pakiet Start: 2–3 tygodnie od otrzymania materiałów. Pakiet Rozwój: 5–7 tygodni od warsztatu. Tempo zależy głównie od tego, jak szybko dostarczasz treści (teksty, zdjęcia z pokazów, opisy stylów).",
      },
      {
        q: "Czy mogę sam edytować grafik i opisy zajęć?",
        a: "Tak. W pakiecie Rozwój i wyżej dostajesz panel CMS, gdzie aktualizujesz grafik, dodajesz nowe style i edytujesz teksty. Bez znajomości kodu.",
      },
      {
        q: "Co z domeną i hostingiem?",
        a: "Stronę wdrażam na Twoim hostingu albo pomagam wybrać polski hosting i domenę — to zwykle ok. 200–400 zł rocznie, płacone bezpośrednio u dostawcy. Jeśli nie chcesz tego pilnować, w rozszerzeniu „Opieka miesięczna” biorę na siebie aktualizacje, kopie zapasowe i monitoring.",
      },
      {
        q: "Czy strona działa dobrze na telefonie?",
        a: "Strona jest projektowana mobile-first, bo 70%+ Twoich kursantów wchodzi z telefonu. Lighthouse 90+ na mobile to standard.",
      },
      {
        q: "Czy mogę dodać własne zdjęcia z pokazów?",
        a: "Oczywiście — galeria w pakiecie Rozwój przyjmuje zdjęcia i wideo. Optymalizacja (rozmiar, format webp) dzieje się automatycznie.",
      },
      {
        q: "Czy obsługujecie też salsę / bachatę / balet / hip-hop?",
        a: "Tak — szablon jest neutralny i dopasowujemy go pod styl szkoły. Robimy strony zarówno dla szkół jednego stylu, jak i wielostylowych.",
      },
    ],
  },
  contact: {
    heading: "Porozmawiajmy o Twojej szkole",
    subheading: "Odpowiadam w ciągu 24h. Bez sprzedawania na siłę.",
    submitLabel: "Wyślij zapytanie",
    successMessage: "Dzięki! Odezwę się w ciągu 24h.",
    schoolFieldLabel: "Nazwa szkoły tańca",
    schoolFieldPlaceholder: "np. Studio Salsa Warszawa",
  },
};
