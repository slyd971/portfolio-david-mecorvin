"use client";

import { useState } from "react";

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
            tabIndex={0}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            className="group border-b border-white/10 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light focus-visible:ring-offset-2 focus-visible:ring-offset-midnight sm:py-6"
          >
            <h3
              className={`font-display text-2xl font-semibold transition sm:text-3xl md:text-4xl ${
                isActive ? "text-white" : "text-white/45"
              }`}
            >
              {item.title}
            </h3>
            <div
              className={`grid transition-all duration-300 ${
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
