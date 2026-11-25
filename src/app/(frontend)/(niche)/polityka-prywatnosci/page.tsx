import type { Metadata } from 'next'
import { SITE_DATA } from '../../data'

export const metadata: Metadata = {
  title: 'Polityka prywatności — Ezytra',
  description:
    'Polityka prywatności serwisu ezytra.com: administrator danych, zakres i cele przetwarzania, podstawy prawne, odbiorcy, okres przechowywania, prawa osób, pliki cookies.',
  alternates: { canonical: `${SITE_DATA.url}/polityka-prywatnosci` },
  robots: { index: true, follow: true },
}

const EFFECTIVE_FROM = '6 listopada 2026'
const VERSION = '2.0'
const DOMAIN = SITE_DATA.url.replace('https://', '')

export default function PrivacyPolicyPage() {
  return (
    <article className="pl-legal">
      <header className="pl-legal__header">
        <p className="pl-legal__eyebrow">Dokument prawny</p>
        <h1 className="pl-legal__h1">
          Polityka prywatności serwisu {DOMAIN}
        </h1>
        <dl className="pl-legal__meta">
          <div className="pl-legal__meta-row">
            <dt>Administrator</dt>
            <dd>
              {SITE_DATA.name}, działający pod marką {SITE_DATA.brand}, {SITE_DATA.location === 'Warsaw, Poland' ? 'Warszawa' : SITE_DATA.location}
            </dd>
          </div>
          <div className="pl-legal__meta-row">
            <dt>Kontakt</dt>
            <dd>
              <a href={`mailto:${SITE_DATA.email}`}>{SITE_DATA.email}</a>
            </dd>
          </div>
          <div className="pl-legal__meta-row">
            <dt>Obowiązuje od</dt>
            <dd>{EFFECTIVE_FROM}</dd>
          </div>
          <div className="pl-legal__meta-row">
            <dt>Wersja</dt>
            <dd>{VERSION}</dd>
          </div>
        </dl>
      </header>

      <nav className="pl-legal__toc" aria-label="Spis treści">
        <p className="pl-legal__toc-label">Spis treści</p>
        <ol>
          <li><a href="#par-1">Postanowienia ogólne</a></li>
          <li><a href="#par-2">Definicje</a></li>
          <li><a href="#par-3">Zakres przetwarzanych danych</a></li>
          <li><a href="#par-4">Cele i podstawy prawne przetwarzania</a></li>
          <li><a href="#par-5">Odbiorcy danych</a></li>
          <li><a href="#par-6">Przekazywanie danych poza Europejski Obszar Gospodarczy</a></li>
          <li><a href="#par-7">Pliki cookies i narzędzia analityczne</a></li>
          <li><a href="#par-8">Okres przechowywania danych</a></li>
          <li><a href="#par-9">Prawa osób, których dane dotyczą</a></li>
          <li><a href="#par-10">Zautomatyzowane podejmowanie decyzji</a></li>
          <li><a href="#par-11">Bezpieczeństwo danych</a></li>
          <li><a href="#par-12">Postanowienia końcowe</a></li>
        </ol>
      </nav>

      <section className="pl-legal__section" id="par-1">
        <h2>§ 1. Postanowienia ogólne</h2>
        <ol>
          <li>
            Niniejsza Polityka prywatności (dalej: „Polityka”) określa zasady przetwarzania danych
            osobowych oraz wykorzystywania plików cookies i narzędzi analitycznych w serwisie
            internetowym dostępnym pod adresem {DOMAIN} wraz z jego podstronami (dalej: „Serwis”).
          </li>
          <li>
            Administratorem danych osobowych przetwarzanych w Serwisie jest {SITE_DATA.name},
            prowadzący działalność pod marką {SITE_DATA.brand}, z miejscem wykonywania działalności
            w Warszawie (dalej: „Administrator”).
          </li>
          <li>
            Kontakt z Administratorem we wszystkich sprawach dotyczących danych osobowych jest
            możliwy pod adresem e-mail:{' '}
            <a href={`mailto:${SITE_DATA.email}`}>{SITE_DATA.email}</a>.
          </li>
          <li>
            Dane osobowe są przetwarzane zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady
            (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z
            przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz
            uchylenia dyrektywy 95/46/WE (dalej: „RODO”), ustawą z dnia 10 maja 2018 r. o ochronie
            danych osobowych oraz ustawą z dnia 12 lipca 2024 r. – Prawo komunikacji elektronicznej.
          </li>
          <li>
            Administrator nie wyznaczył inspektora ochrony danych, ponieważ nie jest do tego
            zobowiązany na podstawie art. 37 RODO.
          </li>
        </ol>
      </section>

      <section className="pl-legal__section" id="par-2">
        <h2>§ 2. Definicje</h2>
        <ol>
          <li>
            <strong>Użytkownik</strong> – każda osoba fizyczna korzystająca z Serwisu, w
            szczególności przesyłająca zapytanie przez Formularz.
          </li>
          <li>
            <strong>Formularz</strong> – formularz kontaktowy dostępny w Serwisie, w tym formularz
            na stronie „Kontakt” oraz formularze zapytań na stronach ofertowych (m.in. dla szkół
            tańca i klubów sztuk walki).
          </li>
          <li>
            <strong>Pliki cookies</strong> – niewielkie pliki tekstowe zapisywane na urządzeniu
            końcowym Użytkownika przez przeglądarkę internetową, wykorzystywane przez narzędzia
            analityczne opisane w § 7.
          </li>
          <li>
            <strong>Podmiot przetwarzający</strong> – podmiot, któremu Administrator powierza
            przetwarzanie danych osobowych na podstawie umowy powierzenia, o której mowa w art. 28
            RODO.
          </li>
        </ol>
      </section>

      <section className="pl-legal__section" id="par-3">
        <h2>§ 3. Zakres przetwarzanych danych</h2>
        <ol>
          <li>
            Za pośrednictwem formularza na stronie „Kontakt” Administrator przetwarza następujące
            dane Użytkownika:
            <ol type="a">
              <li>imię i nazwisko,</li>
              <li>adres e-mail,</li>
              <li>nazwę firmy lub projektu (pole nieobowiązkowe),</li>
              <li>wybrany pakiet oraz przedział budżetu,</li>
              <li>treść wiadomości.</li>
            </ol>
          </li>
          <li>
            Za pośrednictwem formularzy zapytań na stronach ofertowych Administrator przetwarza:
            <ol type="a">
              <li>imię,</li>
              <li>nazwę szkoły lub klubu,</li>
              <li>adres e-mail lub numer telefonu,</li>
              <li>treść wiadomości (pole nieobowiązkowe),</li>
              <li>informację o wyrażeniu zgody na kontakt oraz adres strony, z której wysłano zapytanie.</li>
            </ol>
          </li>
          <li>
            W związku z korzystaniem z Serwisu narzędzia opisane w § 7 gromadzą automatycznie dane
            techniczne: adres IP, identyfikator przeglądarki i urządzenia, przybliżoną
            lokalizację (kraj, region), odwiedzane podstrony, źródło wejścia oraz parametry
            wydajności strony.
          </li>
          <li>
            Podanie danych, o których mowa w ust. 1 i 2, jest dobrowolne, jednak niezbędne do
            udzielenia odpowiedzi na zapytanie. Administrator nie przetwarza danych szczególnych
            kategorii w rozumieniu art. 9 RODO.
          </li>
        </ol>
      </section>

      <section className="pl-legal__section" id="par-4">
        <h2>§ 4. Cele i podstawy prawne przetwarzania</h2>
        <ol>
          <li>
            Dane osobowe Użytkownika są przetwarzane w następujących celach i na następujących
            podstawach prawnych:
            <ol type="a">
              <li>
                udzielenie odpowiedzi na zapytanie oraz prowadzenie korespondencji poprzedzającej
                ewentualne zawarcie umowy – art. 6 ust. 1 lit. b RODO (podjęcie działań na żądanie
                osoby, której dane dotyczą, przed zawarciem umowy);
              </li>
              <li>
                kontakt telefoniczny lub za pomocą poczty elektronicznej w zakresie, w jakim
                Użytkownik wyraził na to zgodę w Formularzu – art. 6 ust. 1 lit. a RODO w związku z
                przepisami ustawy – Prawo komunikacji elektronicznej;
              </li>
              <li>
                zawarcie i wykonanie umowy o świadczenie usług – art. 6 ust. 1 lit. b RODO;
              </li>
              <li>
                wypełnienie obowiązków prawnych ciążących na Administratorze, w szczególności
                obowiązków podatkowych i rachunkowych – art. 6 ust. 1 lit. c RODO;
              </li>
              <li>
                ustalenie, dochodzenie lub obrona roszczeń – art. 6 ust. 1 lit. f RODO (prawnie
                uzasadniony interes Administratora);
              </li>
              <li>
                prowadzenie statystyk korzystania z Serwisu, poprawa jego wydajności oraz
                zapewnienie bezpieczeństwa – art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes
                Administratora polegający na utrzymaniu i rozwoju Serwisu).
              </li>
            </ol>
          </li>
          <li>
            Zgoda, o której mowa w ust. 1 lit. b, może zostać wycofana w dowolnym momencie bez
            wpływu na zgodność z prawem przetwarzania, którego dokonano przed jej wycofaniem.
          </li>
        </ol>
      </section>

      <section className="pl-legal__section" id="par-5">
        <h2>§ 5. Odbiorcy danych</h2>
        <ol>
          <li>
            Administrator nie sprzedaje danych osobowych Użytkowników ani nie udostępnia ich
            podmiotom trzecim w celach marketingowych.
          </li>
          <li>
            Dane osobowe mogą być powierzane następującym podmiotom przetwarzającym, w zakresie
            niezbędnym do działania Serwisu i obsługi zapytań:
            <ol type="a">
              <li>
                <strong>Vercel Inc.</strong> (San Francisco, USA) – hosting Serwisu oraz narzędzia
                Vercel Web Analytics i Vercel Speed Insights;
              </li>
              <li>
                <strong>Resend</strong> (Plus Five Five, Inc., USA) – przekazanie treści
                Formularza na skrzynkę e-mail Administratora;
              </li>
              <li>
                <strong>Google Ireland Limited</strong> (Dublin, Irlandia) oraz Google LLC (USA) –
                obsługa poczty elektronicznej Administratora oraz narzędzie Google Analytics 4.
              </li>
            </ol>
          </li>
          <li>
            Dane mogą zostać udostępnione organom publicznym uprawnionym do ich otrzymania na
            podstawie przepisów prawa.
          </li>
        </ol>
      </section>

      <section className="pl-legal__section" id="par-6">
        <h2>§ 6. Przekazywanie danych poza Europejski Obszar Gospodarczy</h2>
        <ol>
          <li>
            Podmioty wymienione w § 5 ust. 2 mają siedzibę lub przetwarzają dane w Stanach
            Zjednoczonych, co oznacza przekazanie danych poza Europejski Obszar Gospodarczy.
          </li>
          <li>
            Przekazanie następuje na podstawie decyzji wykonawczej Komisji Europejskiej z dnia 10
            lipca 2023 r. stwierdzającej odpowiedni stopień ochrony w ramach EU-U.S. Data Privacy
            Framework – w odniesieniu do podmiotów posiadających certyfikację w tym programie – a w
            pozostałym zakresie na podstawie standardowych klauzul umownych przyjętych przez Komisję
            Europejską (art. 46 ust. 2 lit. c RODO).
          </li>
          <li>
            Użytkownik może uzyskać kopię stosowanych zabezpieczeń, kontaktując się z
            Administratorem pod adresem wskazanym w § 1 ust. 3.
          </li>
        </ol>
      </section>

      <section className="pl-legal__section" id="par-7">
        <h2>§ 7. Pliki cookies i narzędzia analityczne</h2>
        <ol>
          <li>
            Serwis korzysta z następujących narzędzi analitycznych:
            <ol type="a">
              <li>
                <strong>Vercel Web Analytics</strong> oraz <strong>Vercel Speed Insights</strong> –
                narzędzia nie zapisują plików cookies na urządzeniu Użytkownika; dane o
                odwiedzinach i wydajności są gromadzone w formie zagregowanej, bez trwałego
                identyfikatora Użytkownika;
              </li>
              <li>
                <strong>Google Analytics 4</strong> – narzędzie zapisuje pliki cookies (w
                szczególności <code>_ga</code> oraz <code>_ga_*</code>, o okresie ważności do 2
                lat) zawierające pseudonimowy identyfikator przeglądarki; Google Analytics 4 nie
                rejestruje ani nie przechowuje pełnych adresów IP.
              </li>
            </ol>
          </li>
          <li>
            Serwis nie wykorzystuje plików cookies w celach marketingowych, remarketingowych ani
            do profilowania Użytkowników.
          </li>
          <li>
            Użytkownik może w każdej chwili zmienić ustawienia plików cookies w swojej
            przeglądarce, w tym zablokować ich zapisywanie lub usunąć już zapisane pliki.
            Ograniczenie plików cookies nie wpływa na podstawową funkcjonalność Serwisu.
          </li>
          <li>
            Zbieranie danych przez Google Analytics można dodatkowo zablokować za pomocą dodatku do
            przeglądarki udostępnionego przez Google:{' '}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer">
              tools.google.com/dlpage/gaoptout
            </a>
            .
          </li>
        </ol>
      </section>

      <section className="pl-legal__section" id="par-8">
        <h2>§ 8. Okres przechowywania danych</h2>
        <ol>
          <li>
            Dane przekazane przez Formularz są przechowywane przez okres prowadzenia
            korespondencji, a w przypadku niezawarcia umowy – nie dłużej niż 12 miesięcy od
            ostatniego kontaktu, po czym są usuwane.
          </li>
          <li>
            W przypadku zawarcia umowy dane są przechowywane przez okres jej obowiązywania, a
            następnie do upływu terminu przedawnienia roszczeń wynikających z umowy oraz przez okres
            wymagany przepisami prawa podatkowego i rachunkowego (5 lat, licząc od końca roku
            kalendarzowego, w którym upłynął termin płatności podatku).
          </li>
          <li>
            Dane gromadzone przez Google Analytics 4 są przechowywane przez okres do 14 miesięcy.
            Dane gromadzone przez narzędzia Vercel są przechowywane zgodnie z polityką prywatności
            dostawcy, dostępną pod adresem{' '}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noreferrer">
              vercel.com/legal/privacy-policy
            </a>
            .
          </li>
        </ol>
      </section>

      <section className="pl-legal__section" id="par-9">
        <h2>§ 9. Prawa osób, których dane dotyczą</h2>
        <ol>
          <li>
            Użytkownikowi przysługują następujące prawa:
            <ol type="a">
              <li>prawo dostępu do danych oraz otrzymania ich kopii (art. 15 RODO),</li>
              <li>prawo do sprostowania danych (art. 16 RODO),</li>
              <li>prawo do usunięcia danych (art. 17 RODO),</li>
              <li>prawo do ograniczenia przetwarzania (art. 18 RODO),</li>
              <li>prawo do przenoszenia danych (art. 20 RODO),</li>
              <li>
                prawo do wniesienia sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym
                interesie Administratora (art. 21 RODO),
              </li>
              <li>prawo do wycofania zgody w dowolnym momencie (art. 7 ust. 3 RODO).</li>
            </ol>
          </li>
          <li>
            W celu skorzystania z powyższych praw Użytkownik powinien skierować żądanie na adres
            e-mail wskazany w § 1 ust. 3. Administrator udziela odpowiedzi bez zbędnej zwłoki, nie
            później niż w terminie miesiąca od otrzymania żądania (art. 12 ust. 3 RODO).
          </li>
          <li>
            Użytkownikowi przysługuje prawo wniesienia skargi do organu nadzorczego – Prezesa
            Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa,{' '}
            <a href="https://uodo.gov.pl" target="_blank" rel="noreferrer">
              uodo.gov.pl
            </a>
            .
          </li>
        </ol>
      </section>

      <section className="pl-legal__section" id="par-10">
        <h2>§ 10. Zautomatyzowane podejmowanie decyzji</h2>
        <ol>
          <li>
            Administrator nie podejmuje wobec Użytkowników decyzji opartych wyłącznie na
            zautomatyzowanym przetwarzaniu danych, w tym profilowaniu, które wywoływałyby skutki
            prawne lub w podobny sposób istotnie wpływały na Użytkownika (art. 22 RODO).
          </li>
        </ol>
      </section>

      <section className="pl-legal__section" id="par-11">
        <h2>§ 11. Bezpieczeństwo danych</h2>
        <ol>
          <li>
            Administrator stosuje środki techniczne i organizacyjne odpowiednie do ryzyka, w
            szczególności: szyfrowane połączenie z Serwisem (protokół TLS), ograniczenie dostępu do
            skrzynki e-mail i narzędzi analitycznych wyłącznie do Administratora oraz mechanizmy
            ograniczające automatyczne wysyłanie Formularza.
          </li>
          <li>
            Serwis nie przechowuje treści zapytań we własnej bazie danych; treść Formularza jest
            przekazywana wyłącznie na skrzynkę e-mail Administratora.
          </li>
        </ol>
      </section>

      <section className="pl-legal__section" id="par-12">
        <h2>§ 12. Postanowienia końcowe</h2>
        <ol>
          <li>
            Administrator zastrzega sobie prawo do zmiany Polityki, w szczególności w razie zmiany
            przepisów prawa, wykorzystywanych narzędzi lub zakresu świadczonych usług.
          </li>
          <li>
            Zmieniona Polityka obowiązuje od dnia jej opublikowania w Serwisie. Data wejścia w życie
            oraz numer wersji są wskazane w nagłówku dokumentu.
          </li>
          <li>
            W sprawach nieuregulowanych w Polityce zastosowanie mają przepisy RODO oraz właściwe
            przepisy prawa polskiego.
          </li>
        </ol>
      </section>

      <footer className="pl-legal__footer">
        <a href="/strony-dla-szkol-tanca">← Strony dla szkół tańca</a>
        <a href="/strony-dla-szkol-walki">Strony dla szkół walki →</a>
      </footer>
    </article>
  )
}
