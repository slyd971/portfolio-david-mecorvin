import Image from "next/image";
import {
  Mail,
  Linkedin,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";
import { projects } from "@/data/projects";
import MobileNav from "@/components/MobileNav";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ExpertiseList from "@/components/ExpertiseList";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import Reveal from "@/components/Reveal";
import { siteUrl, linkedinUrl } from "@/lib/site";

export default function Page() {
  const heroStats = [
    { value: "12+", label: "années en gestion de projet digital" },
    { value: "30+", label: "projets web / mobile / refonte" },
  ];
  const heroLabels = [
    { value: "Banque", label: "parcours web et mobile sensibles" },
    { value: "Retail", label: "activations digitales et e-commerce" },
    { value: "International", label: "équipes, marchés et partenaires" },
  ];

  const blockers = [
    {
      number: "01",
      title: "Cadrage flou",
      text:
        "Je transforme une expression de besoin dispersée en périmètre clair, priorisé et exploitable par les équipes.",
    },
    {
      number: "02",
      title: "Delivery sous tension",
      text:
        "Je rends visibles les dépendances, les arbitrages et les risques pour sécuriser les décisions et les mises en production.",
    },
    {
      number: "03",
      title: "Équipes désalignées",
      text:
        "Je crée un langage commun entre métier, produit, UX, tech, partenaires et direction.",
    },
  ];

  const experiences = [
    {
      period: "2026",
      role: "Product Owner Senior",
      company: "SQLI",
      badge: "Groupe Rocher • Design System",
      challenge:
        "Refondre un Design System Front mutualisé dans un programme stratégique, avec des équipes nombreuses et un planning contraint.",
      impact:
        "Clarification du périmètre, sécurisation des échanges entre design, architecture et front, et préparation d’un socle mutualisé plus lisible.",
      tags: ["Design System", "DBB", "UX", "Architecture", "Front"],
      points: [
        "Refonte du Design System Front mutualisé pour le programme stratégique Dermo Botanical Beauty (DBB).",
        "Coordination des équipes UX, Design, Architecture et Développement Front dans un contexte de planning contraint.",
        "Rédaction des User Stories, spécifications techniques et contrats de services entre composants mutualisés.",
      ],
    },
    {
      period: "2023 — 2026",
      role: "Product Owner / Chef de projet Web Senior",
      company: "Listen too",
      badge: "ALDI • BNP Paribas • BforBank",
      challenge:
        "Faire avancer plusieurs produits et parcours digitaux dans des environnements grands comptes aux contraintes métier, UX et delivery fortes.",
      impact:
        "Meilleure visibilité sur les priorités, gouvernance projet plus structurée et alignement renforcé entre équipes internes, agences et squads IT.",
      tags: ["Banque", "Retail", "Backlog", "Delivery", "Agile"],
      points: [
        "Pilotage de produits et projets digitaux stratégiques pour des grands comptes, en coordination avec agences et équipes internes.",
        "Responsable du delivery et du run applicatif, garant de la gouvernance Agile et de l’alignement métier.",
        "Animation d’ateliers UX/UI et alignement des parties prenantes.",
      ],
    },
    {
      period: "2021 — 2023",
      role: "Product Owner international & Web Marketing Manager",
      company: "Dataiku",
      badge: "Web • SEO • Analytics",
      challenge:
        "Structurer les demandes web internationales tout en gardant une trajectoire claire sur la performance, le SEO et les mises en production.",
      impact:
        "Suivi des KPI plus lisible, meilleure coordination des besoins pays et visibilité accrue sur l’avancement des projets web.",
      tags: ["International", "SEO", "Analytics", "KPI", "Web"],
      points: [
        "Pilotage des plateformes web corporate dans un environnement international, en semi-agile.",
        "Centralisation et priorisation des besoins des équipes internationales, suivi des KPI et stratégie SEO.",
        "Coordination des mises en production et des campagnes de recette fonctionnelle.",
      ],
    },
    {
      period: "2019 — 2021",
      role: "Product Owner Senior Bilingue Multi-Projets",
      company: "Smile Open Source Solutions",
      badge: "Drupal • Grands comptes",
      challenge:
        "Piloter plusieurs projets Drupal grands comptes avec des enjeux de refonte, d’intégration, de recette et de transfert support.",
      impact:
        "Sécurisation des jalons de livraison, meilleure coordination des équipes projet et réduction des zones de blocage avant mise en production.",
      tags: ["Drupal", "Grands comptes", "QA", "UAT", "Support"],
      points: [
        "Pilotage de projets digitaux stratégiques pour des grands comptes (Printemps, Crédit Agricole, SBM) en environnement Drupal.",
        "Responsable du delivery de bout en bout, du cadrage à la mise en production et au transfert vers le support.",
        "Coordination des équipes métier, UX/UI, développement, QA et intégration.",
      ],
    },
  ];

  const olderExperiences = [
    {
      period: "2016 — 2017",
      role: "Chef de Projet E-Commerce B2B",
      company: "Parrot",
      badge: "Prestashop • International",
      challenge:
        "Développer le site e-commerce B2B sur plusieurs marchés tout en coordonnant merchandising, équipes commerciales et filiales locales.",
      impact:
        "Multiplication par 3 du chiffre d’affaires européen et +50% de portefeuille client en 2016.",
      tags: ["B2B", "International", "Prestashop", "Merchandising", "CA"],
      points: [
        "Élaboration de la stratégie de développement du site E-Commerce B2B sur l’Europe, l’Asie et les États-Unis.",
        "Gestion du merchandising et coordination avec les équipes commerciales terrain et les filiales locales.",
        "Multiplication par 3 du chiffre d’affaires européen et +50% de portefeuille client en 2016.",
      ],
    },
    {
      period: "2014 — 2015",
      role: "Chef de Projet E-Commerce",
      company: "Parrot",
      badge: "Prestashop • B2C",
      challenge:
        "Piloter les opérations e-commerce B2C et marketplaces en gardant une cohérence commerciale et opérationnelle.",
      impact:
        "Stabilisation du back office, campagnes promotionnelles mieux structurées et coordination renforcée entre plateformes.",
      tags: ["B2C", "Marketplaces", "Prestashop", "Promotions", "Back office"],
      points: [
        "Responsable du back office des sites B2C store.parrot.com puis parrot.com.",
        "Gestion du merchandising multi-plateformes (B2C, B2B, Ebay, Priceminister) et des campagnes promotionnelles.",
      ],
    },
  ];

  const clients = [
    "ALDI",
    "BNP Paribas",
    "BforBank",
    "Dataiku",
    "Smile",
    "Parrot",
    "Groupe Rocher",
    "Crédit Agricole",
    "Printemps",
    "SBM",
  ];

  const toolCategories = [
    {
      label: "Pilotage",
      items: ["Jira", "Confluence", "Miro", "MS Planner"],
    },
    {
      label: "Produit et conception",
      items: ["Figma", "Zeplin", "Storybook"],
    },
    {
      label: "CMS & E-commerce",
      items: ["Drupal", "AEM", "Prismic", "Shopify", "Prestashop", "Hybris"],
    },
    {
      label: "Data et performance",
      items: ["GA4", "Piano Analytics", "Looker Studio", "SEMrush"],
    },
  ];

  const projectTitles = {
    aldi: "Industrialiser plusieurs activations digitales retail sans perdre la cohérence de marque",
    "bnp-paribas": "Faire avancer des parcours web et mobile dans un écosystème bancaire complexe",
    bforbank: "Repenser une expérience digitale bancaire en conciliant enjeux business, UX et contraintes techniques",
    dataiku: "Structurer la performance web et SEO d’un acteur tech international",
    printemps: "Migrer un site retail et intégrer un programme de fidélité sans rupture de parcours",
    parrot: "Piloter un écosystème e-commerce B2B et B2C sur plusieurs marchés",
  };

  const workingPrinciples = [
    "Je rends les sujets complexes compréhensibles.",
    "Je ne laisse pas les risques cachés jusqu’au dernier moment.",
    "Je sais challenger sans bloquer.",
    "Je crée de la structure sans ajouter de lourdeur.",
    "Je reste orienté solution, même lorsque le cadre n’est pas parfait.",
  ];

  const cardTreatments = [
    "bg-accent text-white",
    "bg-accent-light text-midnight",
    "bg-white/5 border border-white/15 text-white",
    "bg-accent text-white",
    "bg-accent-light text-midnight",
    "bg-white/5 border border-white/15 text-white",
  ];

  const navLinks = [
    ["Déblocages", "#profil"],
    ["Expertise", "#expertise"],
    ["Méthode", "#method"],
    ["Expériences", "#experiences"],
    ["Projets", "#projects"],
    ["Stack", "#stack"],
    ["Contact", "#contact"],
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "David Mecorvin",
    jobTitle: "Chef de Projet Digital / Product Owner Senior",
    url: siteUrl,
    sameAs: [linkedinUrl],
    knowsAbout: [
      "Gestion de projet digital",
      "Product Ownership",
      "Product Management",
      "Agile Scrum",
      "E-commerce",
      "Banque",
      "Retail",
    ],
  };

  return (
    <main className="min-h-screen overflow-x-hidden scroll-smooth">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-midnight/90 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-10 lg:py-4">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-accent-light">
              DM
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold tracking-wide text-white">David Mecorvin</p>
              <p className="truncate text-[11px] text-white/50">Chef de Projet Digital / Product Owner</p>
            </div>
          </a>

          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-2 lg:flex">
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-full px-3 py-2 text-sm text-white/70 transition hover:bg-accent-light/15 hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full border border-accent-light/30 bg-accent-light/10 px-4 py-2 text-sm font-semibold text-white transition hover:scale-[1.02] hover:border-accent-light hover:bg-accent-light/20 sm:inline-flex"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>

            <MobileNav />
          </div>
        </div>
      </header>

      <section
        id="top"
        className="relative flex min-h-[100svh] items-center overflow-hidden bg-midnight pb-16 pt-28 text-white sm:pt-32"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="hero-motif absolute left-1/2 top-1/2 h-[140vmax] w-[140vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_0deg,rgba(109,165,255,0.18),transparent_25%,rgba(31,36,233,0.16),transparent_60%,rgba(109,165,255,0.14))] blur-3xl" />
        </div>
        <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]">
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid items-start gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
            <div className="order-2 lg:order-1">
              <h1 className="font-display max-w-5xl text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl md:text-6xl xl:text-[4.5rem]">
                Je transforme les sujets digitaux complexes en projets cadrés, alignés et réellement livrés.
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/72 sm:text-base md:text-lg">
                Chef de Projet Digital & Product Owner Senior, j’interviens lorsqu’il faut remettre de la clarté entre les enjeux métier, les équipes UX et tech, les dépendances et la réalité du delivery.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-light px-5 py-3 text-sm font-semibold text-midnight transition hover:scale-[1.02]"
                >
                  Voir mes projets
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-accent-light hover:bg-white/5"
                >
                  <Mail size={18} />
                  Me contacter
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-end gap-6 sm:gap-8">
                <div className="grid w-full grid-cols-2 gap-4 sm:flex sm:w-auto sm:flex-wrap sm:gap-7">
                  {heroStats.map((stat) => (
                    <div key={stat.label} className="min-w-0 sm:max-w-[11rem]">
                      <div className="font-display text-4xl font-semibold text-accent-light sm:text-5xl">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-xs leading-5 text-white/60 sm:text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 border-l border-white/10 pl-6 sm:gap-3">
                  {heroLabels.map((item) => (
                    <span
                      key={item.value}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70 sm:text-sm"
                    >
                      <span className="font-semibold text-white">{item.value}</span> — {item.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="absolute -inset-3 rounded-[2.2rem] bg-gradient-to-br from-accent-light/20 via-transparent to-accent/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/40 backdrop-blur-2xl sm:rounded-[2.2rem]">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/photo/profil-pro-cv.webp"
                    alt="Portrait de David Mecorvin, Chef de Projet Digital / Product Owner"
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-xl font-semibold leading-tight text-white sm:text-2xl">David Mecorvin</p>
                  <p className="mt-1 text-sm text-white/60">Chef de Projet Digital / Product Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Clients avec lesquels j’ai travaillé" className="border-y border-white/10 bg-midnight py-5 text-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 lg:grid-cols-[0.28fr_0.72fr] lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-light">
            Clients avec lesquels j’ai travaillé
          </p>
          <div className="overflow-hidden">
            <div className="client-marquee flex items-center gap-8">
              {[...clients, ...clients].map((client, index) => (
                <span
                  key={`${client}-${index}`}
                  aria-hidden={index >= clients.length ? "true" : undefined}
                  className="font-display whitespace-nowrap text-lg font-semibold text-white/78 sm:text-xl"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="profil" className="scroll-mt-24 bg-surface py-14 text-midnight sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <Reveal className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-accent sm:text-sm">Ce que je débloque</p>
              <h2 className="font-display mt-3 max-w-md text-2xl font-semibold leading-[1.05] sm:text-3xl md:text-4xl">
                Remettre de la clarté là où le projet devient difficile à lire
              </h2>
            </div>
            <div className="border-y border-midnight/10 py-6 text-midnight/75 sm:py-8">
              <p className="text-sm leading-7 sm:text-base sm:leading-8">
                Mon rôle n’est pas seulement de suivre un planning. J’interviens quand il faut clarifier le périmètre, rendre les dépendances visibles et donner aux équipes un cadre qui permet vraiment d’avancer.
              </p>
              <p className="mt-4 text-sm leading-7 sm:text-base sm:leading-8">
                Banque, retail, e-commerce, data, grands comptes et environnements internationaux : le fil rouge reste le même, transformer la complexité en décisions, livrables et jalons maîtrisés.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 border-t border-midnight/10">
            {blockers.map((item) => (
              <div
                key={item.title}
                className="grid gap-4 border-b border-midnight/10 py-6 md:grid-cols-[0.18fr_0.32fr_0.5fr] md:items-start"
              >
                <p className="font-display text-sm font-semibold text-accent">{item.number}</p>
                <h3 className="font-display text-2xl font-semibold leading-tight text-midnight sm:text-3xl">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-midnight/68 sm:text-base">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="expertise" className="scroll-mt-24 bg-midnight py-14 text-white sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <Reveal className="mb-8 flex items-end justify-between gap-6 sm:mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-accent-light sm:text-sm">Expertise</p>
              <h2 className="font-display mt-3 max-w-xl text-2xl font-semibold leading-[1.05] sm:text-3xl md:text-4xl">
                De l’idée à la mise en production
              </h2>
            </div>
            <div className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/55 lg:inline-flex">
              <Briefcase size={16} className="text-accent-light" />
              CP digital senior • PO web
            </div>
          </Reveal>

          <ExpertiseList />
        </div>
      </section>

      <section id="method" className="scroll-mt-24 bg-surface py-12 text-midnight sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <Reveal as="div" className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-accent sm:text-sm">Méthode</p>
              <h2 className="font-display mt-3 max-w-lg text-2xl font-semibold leading-[1.05] sm:text-3xl md:text-4xl">
                Ma manière de faire avancer les projets
              </h2>
            </div>
            <div className="border-t border-midnight/10">
              {workingPrinciples.map((item) => (
                <p
                  key={item}
                  className="border-b border-midnight/10 py-5 font-display text-xl font-semibold leading-snug text-midnight/86 sm:text-2xl"
                >
                  {item}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="experiences" className="scroll-mt-24 border-t border-midnight/10 bg-surface py-14 text-midnight sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <Reveal as="div" className="mb-8 sm:mb-10">
            <p className="text-xs uppercase tracking-[0.24em] text-accent sm:text-sm">Expériences</p>
            <h2 className="font-display mt-3 max-w-xl text-2xl font-semibold leading-[1.05] sm:text-3xl md:text-4xl">
              Une trajectoire pensée pour cadrer, structurer et livrer
            </h2>
          </Reveal>

          <ExperienceTimeline experiences={experiences} olderExperiences={olderExperiences} />
        </div>
      </section>

      <section id="projects" className="scroll-mt-24 bg-midnight py-14 text-white sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <Reveal as="div" className="mb-8 sm:mb-10">
            <p className="text-xs uppercase tracking-[0.24em] text-accent-light sm:text-sm">Projets</p>
            <h2 className="font-display mt-3 max-w-xl text-2xl font-semibold leading-[1.05] sm:text-3xl md:text-4xl">
              Quelques projets clés
            </h2>
          </Reveal>

          <ProjectsCarousel
            projects={projects}
            projectTitles={projectTitles}
            cardTreatments={cardTreatments}
          />
        </div>
      </section>

      <section id="stack" className="scroll-mt-24 bg-midnight py-12 text-white sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <Reveal as="div" className="mb-8 flex flex-col gap-3 sm:mb-10 sm:gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-accent-light sm:text-sm">Stack</p>
              <h2 className="font-display mt-3 max-w-xl text-2xl font-semibold leading-[1.05] sm:text-3xl md:text-4xl">
                Outils, CMS et environnements
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 text-xs text-white/52 sm:text-sm">
              <Briefcase size={16} className="text-accent-light" />
              Web • Produit • E-commerce • Analytics
            </div>
          </Reveal>

          <div className="space-y-8 sm:space-y-10">
            {toolCategories.map((cat) => (
              <div key={cat.label}>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50 sm:text-sm">{cat.label}</p>
                <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
                  {cat.items.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/72 transition hover:border-accent-light/40 hover:bg-accent-light/10 sm:px-4 sm:text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-2xl border-t border-white/10 pt-6 text-sm leading-7 text-white/58 sm:text-base">
            Je sélectionne les outils en fonction de la gouvernance, des équipes et du niveau de maturité du projet.
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 border-t-4 border-accent bg-surface py-16 text-midnight sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-10">
          <p className="text-xs uppercase tracking-[0.24em] text-accent sm:text-sm">Contact</p>
          <h2 className="font-display mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Un projet complexe, une refonte à cadrer ou un delivery à remettre sur les rails ?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-midnight/70 sm:text-base sm:leading-8">
            Échangeons sur le contexte, les points de blocage et la meilleure manière de faire avancer le sujet.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="mailto:david.mecorvin@hotmail.fr"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-midnight"
            >
              <Mail size={18} />
              Me contacter
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-midnight/15 px-6 py-3 text-sm font-semibold text-midnight transition hover:border-accent hover:bg-accent/5"
            >
              <Linkedin size={18} />
              Voir le profil LinkedIn
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
