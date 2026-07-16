"use client";

import { useState } from "react";

const ITEMS = [
  {
    number: "01",
    title: "Cadrer",
    detail:
      "Audit, recueil du besoin, ateliers, parcours, périmètre, dépendances, risques et critères de succès.",
  },
  {
    number: "02",
    title: "Transformer",
    detail:
      "Backlog, User Stories, spécifications fonctionnelles et techniques, data mapping, modèles métier et contrats de services.",
  },
  {
    number: "03",
    title: "Aligner",
    detail:
      "Coordination métier, UX, tech, QA, architecture, équipes pays, agences et partenaires externes.",
  },
  {
    number: "04",
    title: "Livrer",
    detail:
      "Planification, recette, arbitrages, mise en production, suivi des KPI, run et amélioration continue.",
  },
];

export default function ExpertiseList() {
  const [active, setActive] = useState(0);

  return (
    <div className="border-t border-white/10">
      {ITEMS.map((item, i) => {
        const isActive = active === i;
        return (
          <button
            type="button"
            key={item.title}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            aria-expanded={isActive}
            className="group grid w-full border-b border-white/10 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light focus-visible:ring-offset-2 focus-visible:ring-offset-midnight sm:py-6 md:grid-cols-[0.16fr_0.34fr_0.5fr] md:items-start md:gap-6"
          >
            <p className={`font-display text-sm font-semibold transition ${isActive ? "text-accent-light" : "text-white/35"}`}>
              {item.number}
            </p>
            <h3
              className={`font-display mt-2 text-2xl font-semibold transition sm:text-3xl md:mt-0 md:text-4xl ${
                isActive ? "text-white" : "text-white/45"
              }`}
            >
              {item.title}
            </h3>
            <div
              className={`grid transition-all duration-300 md:block ${
                isActive ? "mt-3 grid-rows-[1fr] opacity-100 md:mt-1" : "grid-rows-[0fr] opacity-0 md:opacity-55"
              }`}
            >
              <p className="overflow-hidden text-sm leading-6 text-white/60 sm:text-base">
                {item.detail}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
