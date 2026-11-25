// Copy for /cennik. Polish-only: the pricing is set for the Polish market
// (PLN, Polish payment/shipping providers), so there is no English mirror.

export type PricingPackage = {
  id: string
  name: string
  price: string
  badge?: string
  featured?: boolean
  forWhom: string
  desc: string
  /** Three or four short lines for the home-page teaser; the full list is `includes`. */
  summary?: string[]
  includes: string[]
  timeline: string
  excludes?: string
  cta: string
}

export type PricingExtension = {
  name: string
  price: string
  availableIn: string
}

export type PricingGuarantee = {
  title: string
  body: string
}

export type PricingFaq = {
  q: string
  a: string
}

export type PricingCopy = {
  eyebrow: string
  headingLines: [string, string, string]
  tagline: string
  includesLabel: string
  timelineLabel: string
  excludesLabel: string
  packages: PricingPackage[]
  /** Shown under the package cards wherever they appear. */
  pricingNote: string
  basicsEyebrow: string
  basicsTitle: string
  basics: PricingGuarantee[]
  guaranteesEyebrow: string
  guaranteesTitle: string
  guaranteesNote: string
  guarantees: PricingGuarantee[]
  extensionsEyebrow: string
  extensionsTitle: string
  extensionsSub: string
  extensionsHead: PricingExtension
  extensions: PricingExtension[]
  extensionsFootnote: string
  faqEyebrow: string
  faqTitle: string
  faq: PricingFaq[]
  footer: { title: string; desc: string; buttonText: string; buttonHref: string }
}

export const PRICING_COPY: PricingCopy = {
  eyebrow: 'Cennik',
  headingLines: ['Jasny zakres.', 'Jasny termin.', 'Jasna cena.'],
  tagline:
    'Wybierz etap, na którym jesteś. Każdy pakiet ma określony zakres, termin i cenę wyjściową. Przez cały projekt współpracujesz bezpośrednio ze mną — bez opiekunów klienta i pośredników. Jeśli żaden pakiet nie pasuje do Twojej sytuacji, opisz mi ją, a przygotuję indywidualną wycenę.',

  includesLabel: 'CO OTRZYMUJESZ:',
  timelineLabel: 'CZAS REALIZACJI:',
  excludesLabel: 'W CENIE NIE MA:',

  packages: [
    {
      id: 'start',
      name: 'Start',
      price: 'od 4 000 zł',
      forWhom: 'Dla firm, które chcą szybko pojawić się w sieci i od pierwszego dnia wyglądać wiarygodnie.',
      desc: 'Strona wizytówka, która mówi, kim jesteś, czym się zajmujesz i jak się z Tobą skontaktować. Bez zbędnych funkcji i bez miesięcy czekania.',
      summary: [
        'do 5 podstron na moim design systemie, w Twoich kolorach',
        'formularz kontaktowy, podstawowe SEO, analityka i RODO',
        'redakcja i korekta Twoich tekstów',
        '2–3 tygodnie od otrzymania materiałów',
      ],
      includes: [
        'makieta (wireframe) strony głównej do akceptacji przed projektem graficznym — poprawki makiety w ciągu 1 dnia roboczego',
        'do 5 projektów podstron (np. Strona główna, O mnie, Usługi, Portfolio, Kontakt)',
        'projekt graficzny oparty na moim design systemie, dopasowany do Twojego logo i kolorów',
        'wersja mobilna i desktopowa',
        'formularz kontaktowy z powiadomieniami e-mail',
        'podstawowe SEO: tytuły, opisy, struktura nagłówków, mapa strony',
        'redakcja i korekta tekstów, które dostarczasz: poprawiam błędy, skracam, dzielę na sekcje, uzupełniam brakujące fragmenty (np. nagłówki, teksty przycisków) i wstawiam wszystko na stronę',
        'konfiguracja analityki (Google Analytics 4 lub alternatywa) z banerem zgody na cookies oraz szablonem polityki prywatności zgodnym z RODO',
        'wdrożenie na Twoim hostingu lub pomoc w wyborze polskiego hostingu',
        '1 runda poprawek po prezentacji projektu — wprowadzona w ciągu 1 dnia roboczego',
        'gwarancje: zwrot całej zaliczki, jeśli makieta Ci się nie spodoba, 6 miesięcy gwarancji na błędy i wynik min. 90 w Google PageSpeed na telefonie',
      ],
      timeline: '2–3 tygodnie od otrzymania materiałów.',
      excludes:
        'pisania tekstów od zera (treści dostarczasz Ty, a ja je redaguję i wstawiam), zdjęć (dostarczasz własne lub dobieram zdjęcia stockowe), bloga, sklepu internetowego ani integracji z zewnętrznymi systemami. Każdy z tych elementów możesz dodać jako rozszerzenie.',
      cta: 'Wybieram Start',
    },
    {
      id: 'rozwoj',
      name: 'Rozwój',
      price: 'od 10 000 zł',
      badge: 'polecany',
      featured: true,
      forWhom: 'Dla firm, które już działają i chcą strony, która naprawdę przyprowadza klientów.',
      desc: 'Strona zaprojektowana od podstaw wokół Twojej oferty i Twoich odbiorców. Każda podstrona ma cel, każdy nagłówek prowadzi do kontaktu lub zakupu.',
      summary: [
        'warsztat i indywidualny projekt — 2 kierunki do wyboru',
        'do 8 projektów podstron + 10 podstron na szablonie',
        'blog, do 3 integracji, rozszerzone SEO i szkolenie z CMS',
        '5–7 tygodni od warsztatu, 30 dni wsparcia po starcie',
      ],
      includes: [
        'warsztat otwierający (90 min): kim jest Twój klient, co ma zrobić na stronie i co go powstrzymuje',
        'makiety strony głównej i szablonów podstron do akceptacji przed projektem graficznym',
        'indywidualny projekt graficzny: moodboard, 2 kierunki do wyboru, dopracowany layout',
        'do 8 projektów podstron, w tym szablon podstrony usługi',
        'do 10 dodatkowych podstron na szablonie (np. osobna podstrona dla każdej usługi, z własnym tekstem i zdjęciami)',
        'redakcja Twoich tekstów pod cel strony: struktura treści, korekta, uzupełnienie brakujących fragmentów oraz nagłówki i wezwania do działania (CTA) dla każdej podstrony',
        'blog lub baza wiedzy z szablonem wpisu',
        'integracje: CRM, newsletter (np. MailerLite, GetResponse), kalendarz rezerwacji (np. Booksy, Calendly), czat — maksymalnie 3',
        'rozszerzone SEO: analiza słów kluczowych pod polskie wyszukiwania, optymalizacja treści, dane strukturalne, wizytówka Google (Profil Firmy)',
        'optymalizacja szybkości i Core Web Vitals',
        'szkolenie z CMS (60 min) + instrukcja wideo po polsku',
        '2 rundy poprawek — każda wprowadzona w ciągu 2 dni roboczych',
        '30 dni wsparcia technicznego po starcie strony',
        'gwarancje: zwrot całej zaliczki, jeśli makieta Ci się nie spodoba, 6 miesięcy gwarancji na błędy i wynik min. 90 w Google PageSpeed na telefonie',
      ],
      timeline: '5–7 tygodni od warsztatu.',
      excludes:
        'pisania tekstów od zera (treści dostarczasz Ty, a ja je redaguję, poprawiam i uzupełniam), zdjęć (dostarczasz własne lub dobieram zdjęcia stockowe), sklepu internetowego, wersji językowych ani panelu klienta.',
      cta: 'Wybieram Rozwój',
    },
    {
      id: 'wiekszy-projekt',
      name: 'Większy projekt',
      price: 'wycena indywidualna',
      forWhom: 'Dla firm, które rosną, i dla projektów, które nie mieszczą się w gotowym pakiecie.',
      desc: 'Sklep internetowy (np. WooCommerce z płatnościami Przelewy24, PayU, BLIK i wysyłką InPost), platforma, panel klienta, strona wielojęzyczna albo rebranding z nową stroną.',
      includes: [
        'zakres, harmonogram i cenę ustalam po rozmowie (30 min, bez zobowiązań)',
        'ofertę dostajesz w ciągu 5 dni roboczych',
        'jeśli projekt wymaga kogoś poza mną, powiem o tym od razu',
      ],
      timeline: 'do ustalenia po rozmowie.',
      cta: 'Umów rozmowę',
    },
  ],

  pricingNote:
    'Ceny pakietów są orientacyjne. Każdą stronę wyceniam indywidualnie po rozmowie — nie każda firma potrzebuje wszystkiego z pakietu (np. bloga albo integracji), więc ostateczna kwota może być inna niż w cenniku.',

  // Formerly the /uslugi page: how every site gets built, whatever the package.
  basicsEyebrow: 'W każdym pakiecie',
  basicsTitle: 'Cztery rzeczy, które dostajesz niezależnie od pakietu.',
  basics: [
    {
      title: 'Projekt w Figmie, zanim powstanie kod',
      body: 'Makiety i projekt graficzny do przeklikania i akceptacji. Projektuję dla ludzi, którzy korzystają ze strony — pod konwersję, nie pod nagrody.',
    },
    {
      title: 'Autorski motyw WordPress, bez page builderów',
      body: 'Lekki motyw pisany od zera, z WooCommerce, jeśli sprzedajesz online. Szybsze ładowanie, lepsze pozycje i strona, która zostaje szybka na lata.',
    },
    {
      title: 'Panel WordPress skrojony pod Ciebie',
      body: 'Własne pola i czytelne ekrany edycji. Sam aktualizujesz strony, wpisy, produkty i zdjęcia — bez dzwonienia do developera przy każdej zmianie.',
    },
    {
      title: 'Techniczne SEO i wdrożenie od A do Z',
      body: 'Dane strukturalne, metadane, Core Web Vitals, domena i hosting. Start strony biorę na siebie, a Ty dostajesz ją gotową do pracy.',
    },
  ],

  guaranteesEyebrow: 'Gwarancje',
  guaranteesTitle: 'Cztery zasady, które biorę na siebie.',
  guaranteesNote: 'Obowiązują w pakietach Start i Rozwój. Szczegóły w pytaniach pod cennikiem.',
  guarantees: [
    {
      title: 'Zwrot zaliczki za makietę',
      body: 'Jeśli makieta Ci się nie spodoba, zwracam całą zaliczkę i rozstajemy się bez dalszych kosztów.',
    },
    {
      title: 'Termin albo rabat',
      body: 'Za każdy rozpoczęty tydzień spóźnienia z mojej winy obniżam cenę pakietu o 10% — maksymalnie o 50%.',
    },
    {
      title: '6 miesięcy na błędy',
      body: 'Przez pół roku od startu naprawiam bezpłatnie wszystko, co nie działa tak, jak zostało oddane.',
    },
    {
      title: 'Min. 90 w PageSpeed',
      body: 'W dniu startu strona osiąga co najmniej 90 punktów w Google PageSpeed Insights i ładuje się w mniej niż 3 sekundy.',
    },
  ],

  extensionsEyebrow: 'Rozszerzenia',
  extensionsTitle: 'Każdy pakiet możesz dopasować do siebie.',
  extensionsSub: 'Stałe ceny — sumujesz sam, bez negocjacji.',
  extensionsHead: { name: 'Rozszerzenie', price: 'Cena', availableIn: 'Dostępne w' },
  extensions: [
    { name: 'Dodatkowy projekt podstrony (unikalny układ)', price: 'od 600 zł', availableIn: 'Start, Rozwój' },
    { name: 'Dodatkowa podstrona na szablonie', price: 'od 200 zł', availableIn: 'Rozwój' },
    { name: 'Pisanie tekstu od zera — jedna podstrona', price: 'od 450 zł', availableIn: 'wszystkie pakiety' },
    { name: 'Dodatkowa wersja językowa (bez tłumaczenia)', price: 'od 1 500 zł', availableIn: 'Rozwój, Większy projekt' },
    { name: 'Blog z szablonem wpisu', price: '1 200 zł', availableIn: 'Start' },
    { name: 'Integracja z zewnętrznym systemem (np. CRM, system księgowy, newsletter)', price: 'od 900 zł', availableIn: 'Start, Rozwój' },
    { name: 'Animacje i mikrointerakcje', price: 'od 1 700 zł', availableIn: 'Rozwój, Większy projekt' },
    { name: 'Dodatkowa runda poprawek (w terminie jak w pakiecie)', price: '700 zł', availableIn: 'wszystkie pakiety' },
    { name: 'Opieka miesięczna (aktualizacje, kopie zapasowe, monitoring, drobne zmiany do 2 h)', price: '400 zł / mies.', availableIn: 'wszystkie pakiety' },
    { name: 'Tryb ekspresowy (−30% czasu)', price: '+40% ceny pakietu, w miarę dostępności terminów', availableIn: 'Start, Rozwój' },
  ],
  extensionsFootnote:
    'Projekt podstrony to unikalny układ (np. Strona główna, O mnie). Podstrona na szablonie to kolejna podstrona zbudowana na istniejącym projekcie — na przykład następna usługa — w której zmieniają się tylko tekst i zdjęcia.',

  faqEyebrow: 'Pytania',
  faqTitle: 'Pytania pod cennikiem',
  faq: [
    {
      q: 'Z kim będę współpracować?',
      a: 'Ze mną — od pierwszej rozmowy do startu strony. Projektuję, wdrażam i odpowiadam na Twoje wiadomości osobiście, więc nic nie ginie po drodze. Jeśli projekt wymaga copywritera lub tłumacza, angażuję sprawdzone osoby, koordynuję ich pracę i pozostaję Twoim jedynym punktem kontaktu.',
    },
    {
      q: 'Co jeśli zachorujesz albo coś wypadnie w trakcie projektu?',
      a: 'Harmonogram ma wbudowany zapas, a o każdym opóźnieniu dowiadujesz się ode mnie od razu, razem z nowym terminem. Kod i projekt są w repozytorium z kopiami zapasowymi, więc nic nie przepada, a w razie potrzeby pracę można przekazać dalej. A jeśli przekroczę termin z umowy, obowiązuje gwarancja terminu opisana niżej.',
    },
    {
      q: 'Co jeśli nie zdążysz w terminie?',
      a: 'Płacisz mniej. W pakietach Start i Rozwój, jeśli z mojej winy nie oddam strony do akceptacji w terminie zapisanym w umowie, za każdy rozpoczęty tydzień spóźnienia obniżam cenę pakietu o 10% — maksymalnie o 50%, czyli do wysokości zaliczki. Rabat odliczam od drugiej raty, a stronę i tak kończę i przekazuję Ci w całości. Termin liczę od dnia, w którym dostanę komplet materiałów. Czas na Twoje akceptacje jest wliczony w harmonogram, a dzięki cichej akceptacji (pytanie niżej) projekt nigdy nie stoi w miejscu. Termin przesuwa się, gdy w trakcie dodajesz rozszerzenia. Rabat dotyczy wyłącznie opóźnień z mojej winy — nie obejmuje opóźnień wynikających z braku materiałów, dostępów (np. do domeny czy hostingu) lub zmian zakresu po Twojej stronie. Gwarancja nie obejmuje trybu ekspresowego ani większych projektów.',
    },
    {
      q: 'Co jeśli nie zdążę odpowiedzieć z akceptacją?',
      a: 'Na akceptację każdego etapu — makiety, projektu graficznego, rundy poprawek — masz 3 dni robocze. Jeśli w tym czasie nie zgłosisz uwag, etap uznaję za zaakceptowany i przechodzę do kolejnego (tzw. cicha akceptacja). Dzięki temu projekt nie zatrzymuje się w połowie, a termin jest bezpieczny dla nas obojga. Jeśli wiesz, że potrzebujesz więcej czasu — np. wyjeżdżasz — po prostu daj znać wcześniej, a przesuniemy termin.',
    },
    {
      q: 'Co jeśli makieta mi się nie spodoba?',
      a: 'Zwracam całą zaliczkę. W pakietach Start i Rozwój najpierw pokazuję Ci makietę — szkielet strony głównej. Jeśli po rundzie poprawek nadal uznasz, że to nie to, możesz zrezygnować: zwracam 100% zaliczki w ciągu 7 dni i rozstajemy się bez dalszych kosztów. Zasada obowiązuje do akceptacji makiety — po niej zaczynam projekt graficzny i zaliczka nie podlega już zwrotowi.',
    },
    {
      q: 'Jaką gwarancję dajesz na gotową stronę?',
      a: 'Dwie. Szybkość: w dniu startu strona osiąga co najmniej 90 punktów w Google PageSpeed Insights na telefonie — możesz to sprawdzić sam. Jeśli nie, poprawiam ją bezpłatnie. Błędy: przez 6 miesięcy od startu naprawiam za darmo wszystko, co nie działa tak, jak zostało oddane, w aktualnych wersjach Chrome, Safari, Firefox i Edge oraz na iOS i Androidzie. Żadna z tych gwarancji nie obejmuje nowych funkcji, zmian wprowadzonych przez Ciebie lub inne osoby ani wpływu skryptów zewnętrznych dodanych na Twoją prośbę (np. czatu).',
    },
    {
      q: 'Dlaczego cena jest „od”?',
      a: 'Bo pakiet opisuje typowy zakres, który możesz rozszerzyć. Cena końcowa to cena pakietu plus wybrane rozszerzenia — wszystkie ceny są podane wyżej, więc możesz policzyć to sam, zanim porozmawiamy. Działa to też w drugą stronę: jeśli nie potrzebujesz np. bloga albo integracji, mówisz mi o tym na rozmowie i wyceniam stronę pod Twój zakres.',
    },
    {
      q: 'Co jeśli w trakcie projektu będę chcieć czegoś więcej?',
      a: 'Dodaję to jako rozszerzenie według cennika. Nie zmieniam zakresu pakietu w trakcie projektu — dzięki temu termin się nie przesuwa.',
    },
    {
      q: 'Jak wyglądają płatności?',
      a: 'Współpracujemy na podstawie umowy, płatność przelewem z 7-dniowym terminem: 50% zaliczki po podpisaniu umowy (zwracanej w całości, jeśli nie zaakceptujesz makiety), 50% po starcie strony albo 14 dni po przekazaniu jej do akceptacji — w zależności od tego, co nastąpi wcześniej. W większych projektach harmonogram płatności ustalamy indywidualnie.',
    },
    {
      q: 'Kto pisze teksty?',
      a: 'Treści dostarczasz Ty — nikt nie zna Twojej firmy lepiej. Mogą być robocze: ja je redaguję, poprawiam błędy, porządkuję pod układ strony, uzupełniam to, czego brakuje (nagłówki, opisy usług, teksty przycisków), i wstawiam na stronę. W pakiecie Rozwój i w większych projektach dodatkowo dopracowuję nagłówki i wezwania do działania pod cel każdej podstrony. Jeśli wolisz, żebym napisał teksty od zera, to rozszerzenie wyceniane osobno.',
    },
    {
      q: 'Co liczy się jako podstrona?',
      a: 'Projekt podstrony to unikalny układ — Strona główna, O mnie, Kontakt. Podstrony na szablonie korzystają z istniejącego projektu, zmieniają się w nich tylko tekst i zdjęcia, więc kosztują ułamek pełnej podstrony. Pięć usług na tym samym szablonie to pięć podstron na szablonie, a nie pięć projektów podstron.',
    },
    {
      q: 'Czy mogę później przejść ze Startu na Rozwój?',
      a: 'Tak. Strona w pakiecie Start jest budowana tak, żeby można ją było rozbudować, a nie stawiać od nowa. Dopłacasz różnicę według aktualnego cennika.',
    },
    {
      q: 'Czego potrzebujesz ode mnie na start?',
      a: 'Logo, tekstów o Twojej firmie i ofercie (mogą być robocze — dopracuję je), zdjęć (jeśli je masz) oraz dostępu do domeny i hostingu. Dokładną listę wysyłam po podpisaniu umowy.',
    },
    {
      q: 'Czy strona będzie moja?',
      a: 'Tak — po zapłacie ostatniej raty przenoszę na Ciebie autorskie prawa majątkowe do kodu, projektu i treści, na polach eksploatacji określonych w umowie. Możesz dalej rozwijać stronę ze mną albo z kimkolwiek innym.',
    },
  ],

  footer: {
    title: 'Nie wiesz, który pakiet wybrać?',
    desc: 'Opisz mi swoją sytuację — podpowiem, co ma sens, albo przygotuję indywidualną wycenę.',
    buttonText: 'Napisz do mnie',
    buttonHref: '/pl/kontakt',
  },
}
