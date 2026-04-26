export const revalidate = 60;

import React, { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies and projects — branding, web design, and full-stack development.",
  alternates: { canonical: "/work" },
};
import Nav from "../components/Nav";
import SiteFooter from "../components/SiteFooter";
import WorkGrid from "./WorkGrid";
import { WorkGridSkeleton } from "../components/Skeletons";
import { getProjects, getProjectsCount } from "../../../lib/api/projects";

async function WorkHero() {
  const totalDocs = await getProjectsCount();

  return (
    <div className="wa-hero__right">
      <p className="wa-hero__tagline">
        — I own the work from first conversation to deployed site. No handoffs.
      </p>
      <p className="wa-hero__count">
        {totalDocs} project{totalDocs !== 1 ? "s" : ""} · Design, development,
        and everything in between.
      </p>
    </div>
  );
}

async function WorkContent() {
  const projects = await getProjects();
  // WorkGrid has its own local Project interface; Payload's type is a superset so the cast is safe.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <WorkGrid projects={projects as any[]} />;
}

export default function WorkPage() {
  return (
    <>
      <Nav />

      {/* ── Hero ── */}
      <section className="wa-hero">
        <div className="wa-hero__left">
          <p className="eyebrow">— Selected Work</p>
          <h1 className="wa-hero__heading">
            Every project,
            <br />
            start to finish.
          </h1>
        </div>

        <Suspense
          fallback={
            <div className="wa-hero__right">
              <p className="wa-hero__tagline">
                — I own the work from first conversation to deployed site. No
                handoffs.
              </p>
              <p className="wa-hero__count">
                <span
                  className="skeleton"
                  style={{
                    width: "3rem",
                    height: "1rem",
                    display: "inline-block",
                  }}
                />
                projects · Design, development, and everything in between.
              </p>
            </div>
          }
        >
          <WorkHero />
        </Suspense>
      </section>

      {/* ── Filters + Grid ── */}
      <Suspense fallback={<WorkGridSkeleton />}>
        <WorkContent />
      </Suspense>

      {/* ── CTA ── */}
      <SiteFooter
        title="Want to be the next case study?"
        desc="I'm available for new projects. Let's talk."
        buttonText="Start a Project"
        buttonHref="/contact"
      />
    </>
  );
}
