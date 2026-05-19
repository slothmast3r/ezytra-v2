export const revalidate = 60;

import React, { Suspense } from "react";
import Nav from "../components/Nav";
import SiteFooter from "../components/SiteFooter";
import WorkGrid from "./WorkGrid";
import { WorkGridSkeleton } from "../components/Skeletons";
import { getAllProjects } from "@/lib/projects";

async function WorkContent() {
  const projects = await getAllProjects();
  return <WorkGrid projects={projects} />;
}

export default function WorkPage() {
  return (
    <>
      <Nav />

      {/* ── Hero ── */}
      <section className="wa-hero">
        <p className="eyebrow">Selected Work</p>
        <h1 className="wa-hero__heading">
          <span className="wa-hero__heading-line">Every project,</span>
          <span className="wa-hero__heading-line wa-hero__heading-line--accent">start to finish.</span>
        </h1>
        <p className="wa-hero__tagline">
          I own the work from first conversation to deployed site. No handoffs.
        </p>
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
