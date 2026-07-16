"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const ITEMS = [
  {
    title: "Gestion de projet digital",
    detail: "Agile / Scrum / Kanban • Jira / Confluence / Monday",
  },
  {
    title: "Product Ownership",
    detail: "Backlog & priorisation • Roadmap produit",
  },
  {
    title: "Delivery & recette",
    detail: "Recette & delivery",
  },
  {
    title: "E-commerce & CMS",
    detail: "AEM / Drupal / Prismic • Shopify / Prestashop / Hybris / Drupal Commerce",
  },
  {
    title: "Animation & coordination",
    detail: "Animation d’ateliers • Coordination multi-interlocuteurs",
  },
  {
    title: "Analytics & performance",
    detail: "Analytics & performance",
  },
];

export default function ExpertiseList() {
  const [active, setActive] = useState(0);

  return (
    <div className="border-t border-white/10">
      {ITEMS.map((item, i) => {
        const isActive = active === i;
        return (
          <div
            key={item.title}
            role="button"
            tabIndex={0}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActive(i);
              }
            }}
            className="group cursor-pointer border-b border-white/10 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light focus-visible:ring-offset-2 focus-visible:ring-offset-midnight sm:py-6"
          >
            <div className="flex items-center gap-4 sm:gap-6">
              <span
                className={`font-display shrink-0 text-sm tabular-nums transition ${
                  isActive ? "text-accent-light" : "text-white/30"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className={`font-display flex-1 text-2xl font-semibold transition sm:text-3xl md:text-4xl ${
                  isActive ? "text-white" : "text-white/40"
                }`}
              >
                {item.title}
              </h3>
              <span
                className={`hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border transition sm:flex ${
                  isActive ? "border-accent-light text-accent-light" : "border-white/15 text-white/20"
                }`}
              >
                <ArrowUpRight size={18} />
              </span>
            </div>
            <div
              className={`grid transition-all ${
                isActive ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="overflow-hidden text-sm leading-6 text-white/60 sm:text-base">
                {item.detail}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
