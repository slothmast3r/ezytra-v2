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
        body: "Zgody, polityka prywatności, szybki hosting w Europie. Wszystko legalne, wszystko szybkie.",
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
      "Bez ukrytych kosztów. Hosting i domena w cenie pierwszego roku.",
    packages: [
      {
        name: "Start",
        price: "od 4 000 zł",
        tagline: "Sprawdzony szablon dopasowany do Twojej szkoły",
        features: [
          "Gotowy szablon z dopasowaniem kolorów, zdjęć i tekstów",
          "Grafik zajęć (statyczny)",
          "Formularz zapisów",
          "Drobne optymalizacje SEO (meta, dane strukturalne, sitemap)",
          "Hosting i domena (1 rok)",
          "Realizacja: 2–3 tygodnie",
        ],
        cta: "Wybierz Start",
      },
      {
        name: "Studio",
        price: "od 8 000 zł",
        tagline: "Projekt custom z rundami poprawek — pod Twoją markę",
        features: [
          "Projekt graficzny od zera (2 rundy poprawek)",
          "Interaktywny grafik z panelem CMS",
          "Galeria pokazów i profile instruktorów",
          "Pełne SEO lokalne + Google Business Profile",
          "Hosting i domena (1 rok)",
          "Realizacja: 4–6 tygodni",
        ],
        cta: "Wybierz Studio",
        featured: true,
      },
      {
        name: "Sieć",
        price: "wycena indywidualna",
        tagline: "Dla szkół z kilkoma lokalizacjami i grafikami",
        features: [
          "Wszystko ze Studio",
          "Wielolokalizacyjny grafik",
          "Integracje (CRM, płatności, newsletter)",
          "Dedykowane sekcje pod kursy semestralne",
          "Wsparcie i rozwój przez 12 miesięcy",
        ],
        cta: "Porozmawiajmy",
      },
    ],
  },
  faq: {
    heading: "Najczęstsze pytania",
    items: [
      {
        q: "Ile trwa realizacja strony dla szkoły tańca?",
        a: "Pakiet Start: 2–3 tygodnie. Pakiet Studio: 4–6 tygodni. Tempo zależy głównie od tego, jak szybko dostarczasz treści (teksty, zdjęcia z pokazów, opisy stylów).",
      },
      {
        q: "Czy mogę sam edytować grafik i opisy zajęć?",
        a: "Tak. W pakiecie Studio i wyżej dostajesz panel CMS, gdzie aktualizujesz grafik, dodajesz nowe style i edytujesz teksty. Bez znajomości kodu.",
      },
      {
        q: "Co z domeną i hostingiem?",
        a: "Domena .pl i hosting na pierwszy rok są w cenie. Po roku to ok. 200–400 zł/rok — możemy się tym zająć albo przekazać Ci dostęp.",
      },
      {
        q: "Czy strona działa dobrze na telefonie?",
        a: "Strona jest projektowana mobile-first, bo 70%+ Twoich kursantów wchodzi z telefonu. Lighthouse 90+ na mobile to standard.",
      },
      {
        q: "Czy mogę dodać własne zdjęcia z pokazów?",
        a: "Oczywiście — galeria w pakiecie Studio przyjmuje zdjęcia i wideo. Optymalizacja (rozmiar, format webp) dzieje się automatycznie.",
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
