import type { Metadata } from 'next'
import { SITE_DATA } from '../../data'

export const metadata: Metadata = {
  title: 'Polityka prywatności — Ezytra',
  description:
    'Zasady przetwarzania danych osobowych przez Ezytra (Oskar Straszyński). Administrator, podstawa prawna, prawa osoby, kontakt.',
  alternates: { canonical: `${SITE_DATA.url}/pl/polityka-prywatnosci` },
  robots: { index: true, follow: true },
}

const UPDATED = '13 maja 2026'

export default function PrivacyPolicyPage() {
  return (
    <article className="pl-legal">
      <header className="pl-legal__header">
        <p className="pl-legal__eyebrow">Aktualizacja: {UPDATED}</p>
        <h1 className="pl-legal__h1">Polityka prywatności</h1>
        <p className="pl-legal__lede">
          Krótko: zbieram tylko dane, które wpisujesz w formularzu kontaktowym, używam ich
          wyłącznie po to, żeby się z Tobą skontaktować w sprawie Twojego zapytania, i nie sprzedaję
          ich nikomu.
        </p>
      </header>

      <section className="pl-legal__section">
        <h2>1. Administrator danych</h2>
        <p>
          Administratorem Twoich danych osobowych jest <strong>{SITE_DATA.name}</strong>,
          prowadzący działalność pod marką <strong>{SITE_DATA.brand}</strong>, z siedzibą w{' '}
          {SITE_DATA.location}.
        </p>
        <p>
          Kontakt w sprawie danych osobowych:{' '}
          <a href={`mailto:${SITE_DATA.email}`}>{SITE_DATA.email}</a>.
        </p>
      </section>

      <section className="pl-legal__section">
        <h2>2. Jakie dane zbieram</h2>
        <p>Przez formularz kontaktowy na stronie zbieram:</p>
        <ul>
          <li>imię,</li>
          <li>nazwę szkoły / klubu,</li>
          <li>adres e-mail lub numer telefonu (do kontaktu zwrotnego),</li>
          <li>treść wiadomości (opcjonalnie).</li>
        </ul>
        <p>
          Dodatkowo, w celach analitycznych i wydajnościowych, narzędzia Vercel Analytics oraz
          Vercel Speed Insights zbierają anonimowe dane o ruchu (np. odwiedzane podstrony, kraj,
          typ urządzenia, czas ładowania). Dane te <strong>nie są łączone</strong> z danymi z
          formularza i nie identyfikują Cię osobiście.
        </p>
      </section>

      <section className="pl-legal__section">
        <h2>3. Cel i podstawa prawna przetwarzania</h2>
        <ul>
          <li>
            <strong>Kontakt zwrotny w sprawie zapytania</strong> — podstawa: zgoda (art. 6 ust. 1
            lit. a RODO), wyrażona przez zaznaczenie checkboxa w formularzu;
          </li>
          <li>
            <strong>Realizacja ewentualnej umowy</strong>, jeśli zdecydujemy się na współpracę —
            podstawa: niezbędność do wykonania umowy (art. 6 ust. 1 lit. b RODO);
          </li>
          <li>
            <strong>Statystyki i poprawa działania strony</strong> — podstawa: prawnie uzasadniony
            interes administratora (art. 6 ust. 1 lit. f RODO), polegający na utrzymaniu i
            rozwijaniu strony.
          </li>
        </ul>
      </section>

      <section className="pl-legal__section">
        <h2>4. Okres przechowywania</h2>
        <ul>
          <li>
            Dane z formularza przechowuję przez okres prowadzenia korespondencji i — jeśli nie
            doszło do współpracy — przez maksymalnie 12 miesięcy od ostatniego kontaktu, po czym
            je usuwam.
          </li>
          <li>
            W przypadku zawarcia umowy dane są przechowywane przez czas jej trwania oraz przez
            okres wynikający z przepisów prawa (np. podatkowych, do 5 lat od końca roku
            podatkowego).
          </li>
          <li>
            Dane analityczne (Vercel) są przechowywane zgodnie z polityką Vercel — szczegóły:{' '}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noreferrer">
              vercel.com/legal/privacy-policy
            </a>
            .
          </li>
        </ul>
      </section>

      <section className="pl-legal__section">
        <h2>5. Komu przekazuję dane (odbiorcy)</h2>
        <p>
          Nie sprzedaję Twoich danych. Powierzam je jedynie zaufanym podmiotom, które pomagają
          obsługiwać stronę:
        </p>
        <ul>
          <li>
            <strong>Vercel Inc.</strong> — hosting strony oraz analityka (Vercel Analytics, Speed
            Insights);
          </li>
          <li>
            <strong>Dostawca bazy danych</strong>, w której zapisywane są zapytania z formularza
            (PostgreSQL na infrastrukturze Vercel / Neon);
          </li>
          <li>
            <strong>Dostawca poczty</strong>, jeśli odpowiadam Ci mailowo na zapytanie.
          </li>
        </ul>
        <p>
          Część z tych podmiotów ma siedzibę poza Europejskim Obszarem Gospodarczym — w takim
          przypadku transfer odbywa się na podstawie standardowych klauzul umownych
          zatwierdzonych przez Komisję Europejską.
        </p>
      </section>

      <section className="pl-legal__section">
        <h2>6. Twoje prawa</h2>
        <p>W związku z przetwarzaniem Twoich danych masz prawo do:</p>
        <ul>
          <li>dostępu do swoich danych i otrzymania ich kopii,</li>
          <li>sprostowania (poprawienia) danych,</li>
          <li>usunięcia danych („prawo do bycia zapomnianym&quot;),</li>
          <li>ograniczenia przetwarzania,</li>
          <li>przeniesienia danych do innego administratora,</li>
          <li>wniesienia sprzeciwu wobec przetwarzania,</li>
          <li>wycofania zgody w dowolnym momencie (bez wpływu na zgodność z prawem przetwarzania przed wycofaniem),</li>
          <li>
            wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (
            <a href="https://uodo.gov.pl" target="_blank" rel="noreferrer">
              uodo.gov.pl
            </a>
            ).
          </li>
        </ul>
        <p>
          Aby skorzystać z któregokolwiek z tych praw, napisz na{' '}
          <a href={`mailto:${SITE_DATA.email}`}>{SITE_DATA.email}</a>. Odpowiadam w ciągu 30 dni.
        </p>
      </section>

      <section className="pl-legal__section">
        <h2>7. Cookies i podobne technologie</h2>
        <p>
          Strona wykorzystuje minimalny zestaw plików cookies oraz mechanizmów analitycznych
          (Vercel Analytics, Vercel Speed Insights). Dane te są anonimowe i nie identyfikują Cię
          osobiście. Nie używam cookies marketingowych ani profilujących stron trzecich.
        </p>
        <p>
          Możesz w każdej chwili zablokować pliki cookies w ustawieniach swojej przeglądarki — nie
          wpłynie to na podstawową funkcjonalność strony.
        </p>
      </section>

      <section className="pl-legal__section">
        <h2>8. Czy decyzje są podejmowane automatycznie?</h2>
        <p>
          Nie. Nie podejmuję żadnych decyzji wyłącznie na podstawie zautomatyzowanego
          przetwarzania danych (w tym profilowania), które wywoływałyby skutki prawne lub w
          podobny sposób istotnie wpływały na Twoją sytuację.
        </p>
      </section>

      <section className="pl-legal__section">
        <h2>9. Zmiany polityki</h2>
        <p>
          Politykę mogę aktualizować — w szczególności, gdy zmienią się przepisy, narzędzia, z
          których korzystam, lub zakres usług. Każda istotna zmiana będzie odzwierciedlona w dacie
          „Aktualizacja&quot; na górze strony.
        </p>
      </section>

      <footer className="pl-legal__footer">
        <a href="/pl/strony-dla-szkol-tanca">← Strony dla szkół tańca</a>
        <a href="/pl/strony-dla-szkol-walki">Strony dla szkół walki →</a>
      </footer>
    </article>
  )
}
