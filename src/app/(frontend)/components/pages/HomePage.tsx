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
import { withVerifiedStatus } from "@/lib/site-status";
import { localizeProject } from "@/lib/project-meta";
import { getVisiblePosts } from "@/content/posts";
import { PRICING_COPY } from "./pricingContent";
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
    ctaContactHref: "/en/contact",
    ctaWork: "View My Work",
    ctaWorkHref: "/en/work",
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
    servicesCtaHref: "/en/services",
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
    ctaContactHref: "/kontakt",
    ctaWork: "Realizacje",
    ctaWorkHref: "/realizacje",
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
    servicesCtaHref: "/cennik",
    // Packages teaser replaces the services grid on the Polish home page.
    packagesTitle: "Pakiety",
    packageDetails: "Szczegóły pakietu",
    packagesCtaHref: "/cennik",
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
      buttonHref: "/kontakt",
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
  const projects = (await withVerifiedStatus(await getAllProjects())).map((p) =>
    localizeProject(p, locale),
  );

  return projects.map((p, i) => {
    const num = String(i + 1).padStart(2, "0");
    const tags = p.tags ?? [];
    // Title goes where the row's primary action goes: the case study when
    // there is one, otherwise the live site (same target as the caption).
    const caseStudyHref = p.hasCaseStudy && p.slug ? `/en/work/${p.slug}` : null;
    const titleHref = caseStudyHref ?? p.href ?? null;
    const titleExternal = !caseStudyHref && Boolean(p.href);
    return (
      <div key={p.slug} className="work__row">
        <div className="work__col-left">
          <div className="work__header">
            <span className="work__num">{num}</span>
            <div className="work__header-info">
              <h3 className="work__name">
                {titleHref ? (
                  <a
                    href={titleHref}
                    className="work__name-link"
                    {...(titleExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {p.name}
                  </a>
                ) : (
                  p.name
                )}
              </h3>
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
                    href={`/en/work/${p.slug}`}
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
            href={`/en/journal/${post.slug}`}
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

// One monoline icon per guarantee, in the order of PRICING_COPY.guarantees:
// deposit refund, deadline discount, bug warranty, PageSpeed score.
const ICON_PROPS = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const GUARANTEE_ICONS = [
  // Refund: banknote
  <svg key="refund" {...ICON_PROPS}>
    <rect x="2.5" y="6" width="19" height="12" rx="2" />
    <circle cx="12" cy="12" r="2.5" />
    <path d="M6 12h.01M18 12h.01" />
  </svg>,
  // Deadline: clock
  <svg key="deadline" {...ICON_PROPS}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>,
  // Bug warranty: shield with check
  <svg key="warranty" {...ICON_PROPS}>
    <path d="M12 3l8 3v6c0 4.6-3.4 8.2-8 9-4.6-.8-8-4.4-8-9V6l8-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>,
  // PageSpeed: lightning bolt
  <svg key="speed" {...ICON_PROPS}>
    <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
  </svg>,
];

function StackStrip() {
  return (
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

      {/* 03 — Guarantees (PL) / Stack (EN) */}
      {locale === "pl" ? (
        <section className="assure" aria-label="Gwarancje">
          <div className="assure__grid">
            {PRICING_COPY.guarantees.map((g, i) => (
              <div key={g.title} className="assure__item">
                <span className="assure__icon" aria-hidden="true">
                  {GUARANTEE_ICONS[i]}
                </span>
                <h3 className="assure__name">{g.title}</h3>
                <p className="assure__desc">{g.body}</p>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <StackStrip />
      )}

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

      {/* 04b — Stack (PL: tools sit under the work, guarantees took their place under the hero) */}
      {locale === "pl" && <StackStrip />}

      {/* 05 — Packages (PL) / Services (EN) */}
      {locale === "pl" ? (
        <section className="packs" id="pakiety">
          <h2 className="section-title">{HOME_COPY.pl.packagesTitle}</h2>
          <div className="pr-packages__grid">
            {PRICING_COPY.packages.map((pkg, i) => {
              const wide = i === PRICING_COPY.packages.length - 1;
              const cls = [
                "pr-card",
                pkg.featured ? "pr-card--featured" : "",
                wide ? "pr-card--wide" : "",
              ]
                .filter(Boolean)
                .join(" ");
              return (
                <article key={pkg.id} className={cls}>
                  <header className="pr-card__head">
                    <div className="pr-card__name-row">
                      <h3 className="pr-card__name">{pkg.name}</h3>
                      {pkg.badge && (
                        <span className="pr-card__badge">{pkg.badge}</span>
                      )}
                    </div>
                    <p className="pr-card__price">{pkg.price}</p>
                    <p className="pr-card__for">{pkg.forWhom}</p>
                  </header>
                  <div className="pr-card__body">
                    {pkg.summary ? (
                      <ul className="pr-card__list">
                        {pkg.summary.map((item) => (
                          <li key={item} className="pr-card__item">
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="pr-card__desc">{pkg.desc}</p>
                    )}
                    <Button
                      variant={pkg.featured ? "primary" : "secondary"}
                      href={`${HOME_COPY.pl.packagesCtaHref}#${pkg.id}`}
                      className="pr-card__cta"
                      chevron
                    >
                      {HOME_COPY.pl.packageDetails}
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
          <p className="pr-packages__note">{PRICING_COPY.pricingNote}</p>
        </section>
      ) : (
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
      )}

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
            <Button variant="ghost" href="/en/journal" chevron>
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
