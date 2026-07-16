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
  return (
    <div className="border-t border-white/10">
      {ITEMS.map((item) => (
        <div key={item.title} className="border-b border-white/10 py-5 sm:py-6">
          <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-white/60 sm:text-base">
            {item.detail}
          </p>
        </div>
      ))}
    </div>
  );
}
