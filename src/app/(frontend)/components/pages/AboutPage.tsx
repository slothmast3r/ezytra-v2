import React from "react";
import Nav from "../Nav";
import SiteFooter from "../SiteFooter";
import { SITE_DATA } from "../../data";
import Image from "next/image";
import type { Locale } from "../../i18n";

const ABOUT_COPY = {
  en: {
    marker: "01 / About",
    headlineLines: ["Designer.", "Developer.", "in Warsaw."],
    lede: "Ezytra is me: one person designing and building the whole website. No team, no handoffs, no markup.",
    meta: {
      focusLabel: "Focus",
      focus: "Marketing & product sites",
      studioLabel: "Studio",
      studio: "Ezytra, founded 2026",
      statusLabel: "Status",
      booking: (q: string) => `Booking ${q}`,
    },
    photoAlt: (name: string) =>
      `Portrait of ${name}, the designer and developer behind Ezytra`,
    bioTitle: ["I work alone. ", "On purpose."],
    bio: [
      "I learned both design and code because either one alone always felt incomplete. A beautiful site that breaks is a portfolio piece, not a working tool.",
      "Ezytra is new, started in 2026. Before that I spent a few years building sites on the side: martial-arts centres, dance schools, small community platforms. On every one I owned the full result, from the first Figma frame to the deployed server.",
      "I won’t pretend the studio has a long history; it doesn’t. What I can promise is that you always know who you are talking to, who did the work, and who to call if something breaks. Just me, and I prefer it that way.",
    ],
    skillsTitle: "The toolkit.",
    skills: [
      {
        cat: "Design",
        items: [
          "Figma",
          "Relume",
          "UI / UX",
          "Wireframing",
          "Branding",
          "Design Systems",
        ],
      },
      {
        cat: "Development",
        items: ["WordPress", "Custom Themes", "HTML / CSS / JS"],
      },
      {
        cat: "CMS & Commerce",
        items: ["WordPress Admin", "WooCommerce", "Content Modelling"],
      },
      {
        cat: "Infra & SEO",
        items: [
          "Hosting & Domains",
          "On-page SEO",
          "Core Web Vitals",
          "Analytics",
        ],
      },
    ],
    valuesTitle: "Four things I will not compromise on.",
    values: [
      {
        num: "01",
        title: "Craft over speed",
        desc: "I'd rather spend an extra day getting something right than ship something mediocre. Details matter; users notice.",
      },
      {
        num: "02",
        title: "Honest work",
        desc: "I won't take on a project I can't do well, and I'll tell you if I think your idea won't work. No polite lies.",
      },
      {
        num: "03",
        title: "Full ownership",
        desc: 'I design, I build, I deploy. No passing the buck between "the designer" and "the developer"; one point of contact, from Figma to production.',
      },
      {
        num: "04",
        title: "Simple over clever",
        desc: "The best code is the code you forget is there. The best design is the one users don't notice; they just use it.",
      },
    ],
    interestsTitle: "When I close the laptop.",
    interests: [
      {
        name: "Krav Maga",
        desc: "I train regularly to build stamina and the mental edge to stay calm in a crisis.",
      },
      {
        name: "Growth & Business",
        desc: "Strategy, psychology, sales. I read what is practical and applicable, not theory for its own sake.",
      },
      {
        name: "Active Life",
        desc: "Windsurfing, snowboarding, bachata. I stay in motion most weekends.",
      },
      {
        name: "Real Estate",
        desc: "Outside design and code, I invest in real estate. Tangible assets, slower thinking, longer horizons.",
      },
    ],
    footer: {
      title: "Sounds like a good fit?",
      desc: "I'm currently available. Let's see if we're a good fit.",
      buttonText: "Let's Talk",
    },
  },
  pl: {
    marker: "01 / O mnie",
    headlineLines: ["Projektant.", "Developer.", "z Warszawy."],
    lede: "Ezytra to ja — jedna osoba, która projektuje i buduje całą stronę. Bez zespołu, bez przekazywania zadań, bez marży agencji.",
    meta: {
      focusLabel: "Specjalizacja",
      focus: "Strony marketingowe i produktowe",
      studioLabel: "Studio",
      studio: "Ezytra, założone w 2026",
      statusLabel: "Status",
      booking: (q: string) => `Wolne terminy: ${q}`,
    },
    photoAlt: (name: string) =>
      `Portret ${name} — projektanta i developera stojącego za Ezytra`,
    bioTitle: ["Pracuję sam. ", "Celowo."],
    bio: [
      "Nauczyłem się i projektowania, i kodu, bo każde z osobna zawsze wydawało mi się niepełne. Piękna strona, która się psuje, to element portfolio, a nie działające narzędzie.",
      "Ezytra jest nowa — wystartowała w 2026. Wcześniej przez kilka lat budowałem strony po godzinach: kluby sztuk walki, szkoły tańca, małe platformy społecznościowe. Za każdym razem odpowiadałem za całość, od pierwszej makiety w Figmie po wdrożony serwer.",
      "Nie będę udawał, że studio ma długą historię — nie ma. Mogę za to obiecać, że zawsze wiesz, z kim rozmawiasz, kto wykonał pracę i do kogo zadzwonić, jeśli coś się zepsuje. Tylko ja — i tak wolę.",
    ],
    skillsTitle: "Narzędzia.",
    skills: [
      {
        cat: "Projektowanie",
        items: [
          "Figma",
          "Relume",
          "UI / UX",
          "Makiety",
          "Branding",
          "Systemy projektowe",
        ],
      },
      {
        cat: "Wdrożenie",
        items: ["WordPress", "Autorskie motywy", "HTML / CSS / JS"],
      },
      {
        cat: "CMS i sprzedaż",
        items: ["Panel WordPress", "WooCommerce", "Modelowanie treści"],
      },
      {
        cat: "Infrastruktura i SEO",
        items: [
          "Hosting i domeny",
          "SEO on-page",
          "Core Web Vitals",
          "Analityka",
        ],
      },
    ],
    valuesTitle: "Cztery rzeczy, z których nie schodzę.",
    values: [
      {
        num: "01",
        title: "Jakość ponad tempo",
        desc: "Wolę poświęcić dodatkowy dzień, żeby zrobić coś dobrze, niż wypuścić coś przeciętnego. Detale mają znaczenie — użytkownicy je zauważają.",
      },
      {
        num: "02",
        title: "Uczciwa robota",
        desc: "Nie wezmę projektu, którego nie umiem zrobić dobrze, i powiem Ci wprost, jeśli uważam, że Twój pomysł nie zadziała. Bez uprzejmych kłamstw.",
      },
      {
        num: "03",
        title: "Pełna odpowiedzialność",
        desc: 'Projektuję, buduję, wdrażam. Bez przerzucania piłeczki między „projektantem" a „developerem" — jeden kontakt, od Figmy po produkcję.',
      },
      {
        num: "04",
        title: "Prostota ponad spryt",
        desc: "Najlepszy kod to ten, o którym zapominasz, że istnieje. Najlepszy design to ten, którego użytkownicy nie zauważają — po prostu z niego korzystają.",
      },
    ],
    interestsTitle: "Kiedy zamykam laptopa.",
    interests: [
      {
        name: "Krav maga",
        desc: "Trenuję regularnie — buduję kondycję i spokojną głowę w sytuacjach kryzysowych.",
      },
      {
        name: "Rozwój i biznes",
        desc: "Strategia, psychologia, sprzedaż. Czytam to, co praktyczne i do zastosowania, nie teorię dla samej teorii.",
      },
      {
        name: "Aktywne życie",
        desc: "Windsurfing, snowboard, bachata. W większość weekendów jestem w ruchu.",
      },
      {
        name: "Nieruchomości",
        desc: "Poza designem i kodem inwestuję w nieruchomości. Namacalne aktywa, wolniejsze myślenie, dłuższe horyzonty.",
      },
    ],
    footer: {
      title: "Brzmi jak dobre dopasowanie?",
      desc: "Mam teraz wolne terminy. Zobaczmy, czy to dobre dopasowanie.",
      buttonText: "Porozmawiajmy",
    },
  },
} as const;

function nextBookingQuarter(now: Date = new Date()): string {
  const currentQ = Math.floor(now.getMonth() / 3) + 1;
  const year = now.getFullYear();
  const nextQ = currentQ === 4 ? 1 : currentQ + 1;
  const nextYear = currentQ === 4 ? year + 1 : year;
  return `Q${nextQ} ${nextYear}`;
}

export default function AboutPage({ locale = "en" }: { locale?: Locale }) {
  const copy = ABOUT_COPY[locale];

  return (
    <>
      <Nav locale={locale} />

      {/* 01 — Hero */}
      <section className="about-hero" aria-labelledby="about-hero-title">
        <span className="about-hero__marker" aria-hidden="true">
          {copy.marker}
        </span>
        <h1 id="about-hero-title" className="about-hero__headline">
          <span className="about-hero__line">{copy.headlineLines[0]}</span>
          <span className="about-hero__line">{copy.headlineLines[1]}</span>
          <span className="about-hero__line about-hero__line--accent">
            {copy.headlineLines[2]}
          </span>
        </h1>
        <p className="about-hero__lede">{copy.lede}</p>
        <dl className="about-hero__meta">
          <div className="about-hero__meta-row">
            <dt>{copy.meta.focusLabel}</dt>
            <dd>{copy.meta.focus}</dd>
          </div>
          <div className="about-hero__meta-row">
            <dt>{copy.meta.studioLabel}</dt>
            <dd>{copy.meta.studio}</dd>
          </div>
          <div className="about-hero__meta-row">
            <dt>{copy.meta.statusLabel}</dt>
            <dd>{copy.meta.booking(nextBookingQuarter())}</dd>
          </div>
        </dl>
      </section>

      {/* 02 — Bio */}
      <section className="about-bio" aria-labelledby="about-bio-title">
        <div className="about-bio__photo-wrap">
          <Image
            src="/owner.jpg"
            alt={copy.photoAlt(SITE_DATA.name)}
            width={720}
            height={960}
            className="about-bio__photo"
            priority
          />
          <span className="about-bio__caption" aria-hidden="true">
            Oskar Straszyński &middot; Warsaw, PL
          </span>
        </div>
        <div className="about-bio__content">
          <h2 id="about-bio-title" className="about-bio__title">
            {copy.bioTitle[0]}
            <em>{copy.bioTitle[1]}</em>
          </h2>
          {copy.bio.map((p) => (
            <p key={p.slice(0, 24)} className="about-bio__p">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* 03 — Skills */}
      <section className="about-skills" aria-labelledby="about-skills-title">
        <h2 id="about-skills-title" className="about-skills__title">
          {copy.skillsTitle}
        </h2>
        <dl className="about-skills__table">
          {copy.skills.map((col) => (
            <div className="about-skills__row" key={col.cat}>
              <dt className="about-skills__cat">{col.cat}</dt>
              <dd className="about-skills__items">
                {col.items.map((item, i) => (
                  <span key={item} className="about-skills__item">
                    {item}
                    {i < col.items.length - 1 ? (
                      <span aria-hidden="true" className="about-skills__sep">
                        &middot;
                      </span>
                    ) : null}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 04 — Values */}
      <section className="about-values" aria-labelledby="about-values-title">
        <h2 id="about-values-title" className="about-values__title">
          {copy.valuesTitle}
        </h2>
        <ol className="about-values__list">
          {copy.values.map((v) => (
            <li key={v.num} className="about-values__item">
              <span className="about-values__num" aria-hidden="true">
                {v.num}
              </span>
              <div className="about-values__body">
                <h3 className="about-values__name">{v.title}</h3>
                <p className="about-values__desc">{v.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* 05 — Interests */}
      <section
        className="about-interests"
        aria-labelledby="about-interests-title"
      >
        <h2 id="about-interests-title" className="about-interests__title">
          {copy.interestsTitle}
        </h2>
        <ul className="about-interests__list">
          {copy.interests.map((item) => (
            <li key={item.name} className="about-interests__item">
              <h3 className="about-interests__name">{item.name}</h3>
              <p className="about-interests__desc">{item.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 06 — CTA / Footer */}
      <SiteFooter
        title={copy.footer.title}
        desc={copy.footer.desc}
        buttonText={copy.footer.buttonText}
        buttonHref={`mailto:${SITE_DATA.email}`}
      />
    </>
  );
}
