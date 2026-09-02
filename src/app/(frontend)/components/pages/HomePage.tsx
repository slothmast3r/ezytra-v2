import React, { Suspense } from "react";
import Image from "next/image";
import { ProjectSkeleton } from "../Skeletons";
import Nav from "../Nav";
import HeroHeadline from "../HeroHeadline";
import Button from "../Button";
import SiteFooter from "../SiteFooter";
import AnimatedLink from "../AnimatedLink";
import ProcessSection from "../ProcessSection";
import { getAllProjects } from "@/lib/projects";
import { localizeProject } from "@/lib/project-meta";
import { getVisiblePosts } from "@/content/posts";
import type { Locale } from "../../i18n";

const STACK = [
  { icon: "/icons/figma.svg", name: "Figma" },
  { icon: "/icons/wordpress.svg", name: "WordPress" },
  { icon: "/icons/woocommerce.svg", name: "WooCommerce" },
  { icon: "/icons/vps.png", name: "Hosting" },
  { icon: "/icons/seo.png", name: "SEO" },
];

const HOME_COPY = {
  en: {
    eyebrow: "DESIGNER & DEVELOPER · WARSAW, PL",
    available: "Available for projects",
    headline: [
      { text: "I design and" },
      { text: "build websites,", accent: true },
      { text: "end to end." },
    ],
    tagline: "You work directly with me. No handoffs, no markup.",
    ctaContact: "Contact Me",
    ctaContactHref: "/contact",
    ctaWork: "View My Work",
    ctaWorkHref: "/work",
    workTitle: "Selected work",
    liveBadge: "Live",
    caseStudyLink: "Case Study →",
    viewLink: "View →",
    servicesTitle: "Services",
    services: [
      {
        num: "01",
        title: "Web Design",
        desc: "Figma-first UI/UX. Clean, fast, conversion-focused. I design for the people who use the site, not for design awards.",
      },
      {
        num: "02",
        title: "Development",
        desc: "Custom WordPress themes, built by hand. No page builders, no bloated off-the-shelf themes. Fast, accessible, easy to maintain.",
      },
      {
        num: "03",
        title: "CMS Integration",
        desc: "WordPress, set up around your content. You edit pages, posts, and images yourself — without touching code.",
      },
      {
        num: "04",
        title: "SEO & Hosting",
        desc: "On-page SEO from day one. Hosting, domain, and launch handled end to end. I run the technical side so you don't have to.",
      },
    ],
    servicesCta: "View all services",
    servicesCtaHref: "/services",
    processTitle: "Process",
    process: [
      {
        num: "01",
        title: "Discovery",
        desc: "We talk about your goals, audience, and what success looks like. No briefs, just a real conversation.",
      },
      {
        num: "02",
        title: "Design",
        desc: "I start in Figma — wireframes first, then high-fidelity. You review and give feedback at every stage.",
      },
      {
        num: "03",
        title: "Build",
        desc: "I code what I designed. A custom WordPress theme, deployed to your hosting or mine.",
      },
      {
        num: "04",
        title: "Launch",
        desc: "Full QA, SEO audit, performance check. I stay on hand after go-live.",
      },
    ],
    footer: undefined,
  },
  pl: {
    eyebrow: "PROJEKTANT & DEVELOPER · WARSZAWA",
    available: "Otwarty na nowe projekty",
    headline: [
      { text: "Projektuję i" },
      { text: "buduję strony,", accent: true },
      { text: "od A do Z." },
    ],
    tagline:
      "Pracujesz bezpośrednio ze mną. Bez pośredników, bez marży agencji.",
    ctaContact: "Napisz do mnie",
    ctaContactHref: "/pl/kontakt",
    ctaWork: "Realizacje",
    ctaWorkHref: "/pl/realizacje",
    workTitle: "Wybrane realizacje",
    liveBadge: "Online",
    caseStudyLink: "Case study →",
    viewLink: "Zobacz →",
    servicesTitle: "Usługi",
    services: [
      {
        num: "01",
        title: "Projektowanie stron",
        desc: "UI/UX projektowany w Figmie. Czysto, szybko, pod konwersję. Projektuję dla ludzi, którzy korzystają ze strony — nie dla nagród.",
      },
      {
        num: "02",
        title: "Wdrożenie",
        desc: "Autorskie motywy WordPress, pisane ręcznie. Bez page builderów i ociężałych gotowych motywów. Szybko, dostępnie, łatwe w utrzymaniu.",
      },
      {
        num: "03",
        title: "Integracja CMS",
        desc: "WordPress dostosowany pod Twoje treści. Sam edytujesz strony, wpisy i zdjęcia — bez dotykania kodu.",
      },
      {
        num: "04",
        title: "SEO i hosting",
        desc: "SEO on-page od pierwszego dnia. Hosting, domena i start strony od A do Z. Techniczną stroną zajmuję się ja, nie Ty.",
      },
    ],
    servicesCta: "Wszystkie usługi",
    servicesCtaHref: "/pl/uslugi",
    processTitle: "Proces",
    process: [
      {
        num: "01",
        title: "Rozmowa",
        desc: "Rozmawiamy o celach, odbiorcach i tym, co ma się udać. Bez briefów — po prostu konkretna rozmowa.",
      },
      {
        num: "02",
        title: "Projekt",
        desc: "Zaczynam w Figmie — najpierw makiety, potem projekt w pełnej jakości. Na każdym etapie masz wgląd i dajesz feedback.",
      },
      {
        num: "03",
        title: "Budowa",
        desc: "Koduję to, co zaprojektowałem. Autorski motyw WordPress, wdrożony na Twój hosting albo mój.",
      },
      {
        num: "04",
        title: "Start",
        desc: "Pełne QA, audyt SEO, testy wydajności. Po starcie zostaję pod ręką.",
      },
    ],
    footer: {
      title: "Siedzi ci projekt w głowie?",
      desc: "Umówmy się na krótką rozmowę. Sprawdźmy, czy będziemy dobrze dopasowani.",
      buttonText: "Napisz wiadomość",
      buttonHref: "/pl/kontakt",
    },
  },
} as const;

type HomeCopy = (typeof HOME_COPY)[Locale];

async function ProjectsList({
  locale,
  copy,
}: {
  locale: Locale;
  copy: HomeCopy;
}) {
  const projects = (await getAllProjects()).map((p) =>
    localizeProject(p, locale),
  );

  return projects.map((p, i) => {
    const num = String(i + 1).padStart(2, "0");
    const tags = p.tags ?? [];
    return (
      <div key={p.slug} className="work__row">
        <div className="work__col-left">
          <div className="work__header">
            <span className="work__num">{num}</span>
            <div className="work__header-info">
              <h3 className="work__name">{p.name}</h3>
              <p className="work__location">{p.location}</p>
              <div className="work__tags">
                {tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="work__body">
            <div className="work__body-inner">
              <p className="work__desc">{p.desc}</p>
            </div>
          </div>
        </div>
        <div className="work__col-right">
          <div className="work__right-inner">
            <div className="work__right-content">
              <div className="work__meta">
                {p.status === "live" && (
                  <Button variant="badge">{copy.liveBadge}</Button>
                )}
                {p.hasCaseStudy && p.slug ? (
                  <AnimatedLink
                    className="btn btn--link"
                    href={`/work/${p.slug}`}
                  >
                    {copy.caseStudyLink}
                  </AnimatedLink>
                ) : p.href ? (
                  <AnimatedLink className="btn btn--link" href={p.href}>
                    {copy.viewLink}
                  </AnimatedLink>
                ) : null}
              </div>
              <figure className="mockup">
                <div className="mockup__screen">
                  {p.image && (
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 1100px) 100vw, 40rem"
                      style={{ objectFit: "cover" }}
                    />
                  )}
                </div>
                <figcaption className="mockup__caption">
                  {p.href ? (
                    <a href={p.href} target="_blank" rel="noopener noreferrer">
                      {p.url}
                    </a>
                  ) : (
                    p.url
                  )}
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    );
  });
}

function JournalList() {
  const posts = getVisiblePosts().slice(0, 4);

  return (
    <>
      {posts.map((post) =>
        post.status === "coming-soon" ? (
          <div key={post.slug} className="journal__row journal__row--muted">
            <span className="tag">{post.tag}</span>
            <p className="journal__title">{post.headline}</p>
            <span className="journal__status">Coming soon</span>
          </div>
        ) : (
          <a
            key={post.slug}
            href={`/journal/${post.slug}`}
            className="journal__row journal__row--link"
          >
            <span className="tag">{post.tag}</span>
            <p className="journal__title">{post.headline}</p>
            <span className="journal__arrow">→</span>
          </a>
        ),
      )}
    </>
  );
}

export default function HomePage({ locale = "en" }: { locale?: Locale }) {
  const copy = HOME_COPY[locale];

  return (
    <>
      {/* 01 — Nav */}
      <Nav locale={locale} />

      {/* 02 — Hero */}
      <section className="hero">
        <div className="hero__body">
          <p className="hero__eyebrow">{copy.eyebrow}</p>
          <div className="hero__available">
            <span className="hero__dot" />
            {copy.available}
          </div>
          <HeroHeadline lines={[...copy.headline]} />
          <p className="hero__tagline">{copy.tagline}</p>
          <div className="hero__ctas">
            <Button variant="primary" href={copy.ctaContactHref} chevron>
              {copy.ctaContact}
            </Button>
            <Button variant="secondary" href={copy.ctaWorkHref} chevron>
              {copy.ctaWork}
            </Button>
          </div>
        </div>
      </section>

      {/* 03 — Stack */}
      <section className="stack">
        <div className="stack__grid">
          {STACK.map((item) => (
            <div key={item.name} className="stack__item">
              <span className="stack__icon">
                <Image src={item.icon} alt="" width={32} height={32} />
              </span>
              <p className="stack__name">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 04 — Work */}
      <section className="work" id="work">
        <h2 className="section-title">{copy.workTitle}</h2>
        <div className="rule" />

        <Suspense
          fallback={
            <>
              <ProjectSkeleton />
              <ProjectSkeleton />
              <ProjectSkeleton />
            </>
          }
        >
          <ProjectsList locale={locale} copy={copy} />
        </Suspense>
      </section>

      {/* 05 — Services */}
      <section className="services" id="services">
        <h2 className="section-title">{copy.servicesTitle}</h2>
        <div className="services__grid">
          {copy.services.map((s) => (
            <div key={s.num} className="service">
              <span className="service__num">{s.num}</span>
              <div className="service__rule" />
              <h3 className="service__title">{s.title}</h3>
              <p className="service__desc">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="services__footer">
          <Button variant="ghost" href={copy.servicesCtaHref} chevron>
            {copy.servicesCta}
          </Button>
        </div>
      </section>

      {/* 06 — Process */}
      <section className="process" id="process">
        <h2 className="section-title">{copy.processTitle}</h2>
        <ProcessSection steps={[...copy.process]} />
      </section>

      {/* 07 — Journal (English content only, so the Polish mirror skips it) */}
      {locale === "en" && (
        <section className="journal">
          <h2 className="section-title">Journal</h2>
          <div className="rule" />
          <JournalList />
          <div className="journal__footer">
            <Button variant="ghost" href="/journal" chevron>
              View All Articles
            </Button>
          </div>
        </section>
      )}

      {/* 08 — Contact */}
      <SiteFooter {...(copy.footer ?? {})} />
    </>
  );
}
