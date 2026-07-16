"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsCarousel({ projects, projectTitles, cardTreatments }) {
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target);
            if (index !== -1) setActive(index);
          }
        });
      },
      { root: track, threshold: 0.6 }
    );

    cardRefs.current.forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const scrollToIndex = (index) => {
    cardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  return (
    <div>
      <div
        ref={trackRef}
        className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:-mx-6 sm:px-6 md:mx-0 md:grid md:snap-none md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 xl:grid-cols-3 [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project, i) => (
          <Link
            key={project.slug}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            href={`/projects/${project.slug}`}
            className={`group relative w-[82%] shrink-0 snap-center overflow-hidden rounded-[1.6rem] p-6 transition hover:-translate-y-1 sm:w-[60%] md:w-auto md:shrink md:snap-align-none ${cardTreatments[i % cardTreatments.length]}`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">
              {project.title} • {project.sector}
            </p>
            <h3 className="font-display mt-3 text-2xl font-semibold leading-tight">
              {projectTitles[project.slug] ?? project.title}
            </h3>
            <div className="mt-5 space-y-3 text-sm leading-6 opacity-80">
              <p><span className="font-semibold">Challenge.</span> {project.challenge}</p>
              <p><span className="font-semibold">Rôle.</span> {project.roleLabel}</p>
              <p><span className="font-semibold">Impact.</span> {project.results?.[0]}</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {[project.category, project.duration, ...(project.stack ?? []).slice(0, 2)].filter(Boolean).map((tag) => (
                <span key={tag} className="rounded-full border border-current/15 px-3 py-1 text-xs opacity-80">
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-5 inline-flex items-center gap-1 text-sm font-semibold">
              Voir le projet
              <ArrowUpRight size={14} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-center gap-2 md:hidden">
        {projects.map((project, i) => (
          <button
            key={project.slug}
            type="button"
            onClick={() => scrollToIndex(i)}
            aria-label={`Voir le projet ${project.title}`}
            className={`h-1.5 rounded-full transition-all ${
              active === i ? "w-6 bg-accent-light" : "w-1.5 bg-white/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
