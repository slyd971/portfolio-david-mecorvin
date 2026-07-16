import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Linkedin,
  Briefcase,
  BadgeCheck,
  ArrowUpRight,
  Building2,
  Trophy,
  Sparkles,
} from "lucide-react";
import { projects } from "@/data/projects";
import MobileNav from "@/components/MobileNav";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ExpertiseList from "@/components/ExpertiseList";
import Reveal from "@/components/Reveal";

export default function Page() {
  const heroStats = [
    { value: "12+", label: "années en gestion de projet digital" },
    { value: "30+", label: "projets web / mobile / refonte" },
  ];
  const heroLabels = [
    { value: "Agile", label: "Scrum, Kanban, gouvernance produit" },
    { value: "360°", label: "vision projet, produit et delivery" },
    { value: "Multi", label: "banque, retail, data, e-commerce" },
  ];

  const highlights = [
    {
      icon: <Building2 size={18} />,
      title: "Annonceur + agence",
      text: "Une vraie lecture business + delivery, nourrie par des expériences côté annonceur et en pilotage agence. Je sais traduire un enjeu métier en cadrage concret, priorités actionnables et arbitrages utiles.",
    },
    {
      icon: <Briefcase size={18} />,
      title: "Pilotage transverse",
      text: "Capacité à aligner métiers, UX, tech et direction autour d’un même cap. J’anime les rituels, clarifie les dépendances et garde la trajectoire lisible jusqu’à la mise en production.",
    },
    {
      icon: <Trophy size={18} />,
      title: "Positionnement senior",
      text: "Une approche structurée, rassurante et orientée impact, avec une attention forte portée à la qualité du delivery, aux KPI et à la prise de décision dans des contextes exigeants.",
    },
  ];

  const experiences = [
    {
      period: "2026",
      role: "Product Owner Senior",
      company: "SQLI",
      badge: "Groupe Rocher • Design System",
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
      label: "Gestion de projet",
      items: ["Jira", "Confluence", "Monday", "Microsoft Teams", "SharePoint", "Slack", "Redmine", "Airtable", "Asana"],
    },
    {
      label: "Design",
      items: ["Figma", "InVision", "Sketch", "Zeplin", "Miro"],
    },
    {
      label: "CMS & E-commerce",
      items: [
        "Adobe Experience Manager",
        "Prismic",
        "Drupal",
        "Drupal Commerce",
        "Shopify",
        "WordPress",
        "Prestashop",
        "Hybris",
        "eBay",
        "Priceminister",
      ],
    },
    {
      label: "Analytics",
      items: ["Google Analytics", "SEMrush", "Looker Studio", "Piano Analytics"],
    },
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
    ["Profil", "#profil"],
    ["Expertise", "#expertise"],
    ["Expériences", "#experiences"],
    ["Projets", "#projects"],
    ["Clients", "#clients"],
    ["Stack", "#stack"],
    ["Contact", "#contact"],
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "David Mecorvin",
    jobTitle: "Chef de Projet Digital / Product Owner Senior",
    url: "https://portfolio-david-mecorvin.vercel.app",
    sameAs: ["https://www.linkedin.com/in/david-mecorvin-chef-de-projet-digital/"],
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
              href="https://www.linkedin.com/in/david-mecorvin-chef-de-projet-digital/"
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
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-white/70 sm:px-4 sm:text-xs">
                <BadgeCheck size={14} className="text-accent-light" />
                Disponible pour mission / CDI
              </div>

              <h1 className="font-display max-w-5xl text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl md:text-6xl xl:text-[4.5rem]">
                Je pilote les projets digitaux <span className="text-white/40">avec une logique</span>{" "}
                <span className="text-accent-light">produit, business et delivery</span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/72 sm:text-base md:text-lg">
                Profil senior à la croisée du cadrage, de la coordination, de la vision produit et de l’exécution. J’interviens sur des contextes web, e-commerce et transformation digitale où il faut aligner les enjeux métier, les équipes et la performance.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="mailto:david.mecorvin@hotmail.fr"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-light px-5 py-3 text-sm font-semibold text-midnight transition hover:scale-[1.02]"
                >
                  <Mail size={18} />
                  Me contacter
                </a>
                <a
                  href="https://www.linkedin.com/in/david-mecorvin-chef-de-projet-digital/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-accent-light hover:bg-white/5"
                >
                  <Linkedin size={18} />
                  Voir LinkedIn
                  <ArrowUpRight size={16} />
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

      <section id="profil" className="scroll-mt-24 bg-surface py-14 text-midnight sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <Reveal className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-accent sm:text-sm">Profil</p>
              <h2 className="font-display mt-3 max-w-md text-2xl font-semibold leading-[1.05] sm:text-3xl md:text-4xl">
                Une approche structurée, business et orientée exécution
              </h2>
            </div>
            <div className="rounded-[1.6rem] border border-midnight/10 bg-midnight/[0.03] p-6 text-midnight/75 sm:rounded-[2rem] sm:p-8">
              <p className="text-sm leading-7 sm:text-base sm:leading-8">
                Fort de +12 ans d’expérience en gestion de projet digital, dont plusieurs années chez l’annonceur et en agence, j’interviens sur l’ensemble du cycle de vie du projet : cadrage, coordination, conception, développement, recette et mise en production.
              </p>
              <p className="mt-4 text-sm leading-7 sm:text-base sm:leading-8">
                J’ai évolué sur des environnements variés — banque, retail, data, e-commerce — avec un fil rouge : faire avancer les sujets, aligner les interlocuteurs, sécuriser la delivery et garder une vraie exigence de cohérence globale.
              </p>
            </div>
          </Reveal>

          <div className="mt-5 grid gap-3 sm:mt-8 sm:gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.4rem] border border-midnight/10 bg-midnight/[0.03] p-5 sm:rounded-[1.6rem] sm:p-6"
              >
                <div className="flex items-center gap-3 text-accent">
                  {item.icon}
                  <h3 className="text-sm font-semibold text-midnight sm:text-base">{item.title}</h3>
                </div>
                <p className="mt-3 text-xs leading-6 text-midnight/68 sm:mt-4 sm:text-sm sm:leading-7">
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
                Les briques qui font tenir un projet
              </h2>
            </div>
            <div className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/55 lg:inline-flex">
              <Sparkles size={16} className="text-accent-light" />
              CP digital senior • PO web
            </div>
          </Reveal>

          <ExpertiseList />
        </div>
      </section>

      <section id="experiences" className="scroll-mt-24 bg-surface py-14 text-midnight sm:py-20 lg:py-28">
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

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, i) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className={`group relative overflow-hidden rounded-[1.6rem] p-6 transition hover:-translate-y-1 ${cardTreatments[i % cardTreatments.length]}`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">
                  {project.category}
                </p>
                <h3 className="font-display mt-2 text-2xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 opacity-80">{project.shortDescription}</p>
                <p className="mt-5 inline-flex items-center gap-1 text-sm font-semibold">
                  Voir le projet
                  <ArrowUpRight size={14} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="clients" className="scroll-mt-24 bg-surface py-14 text-midnight sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-8">
            <Reveal as="div">
              <p className="text-xs uppercase tracking-[0.24em] text-accent sm:text-sm">Clients & environnements</p>
              <h2 className="font-display mt-3 max-w-xs text-2xl font-semibold leading-[1.05] sm:text-3xl md:text-4xl">
                Des contextes exigeants, des interlocuteurs variés
              </h2>
              <p className="mt-4 text-sm leading-7 text-midnight/68 sm:mt-5 sm:text-base sm:leading-8">
                Banque, retail, data, e-commerce, grands comptes, annonceurs et agence : un mix qui renforce ma lecture des enjeux business et opérationnels.
              </p>
            </Reveal>

            <div className="flex flex-wrap items-center gap-x-10 gap-y-6 border-t border-midnight/10 pt-8 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
              {clients.map((client) => (
                <span
                  key={client}
                  className="font-display text-xl font-semibold text-midnight/85 transition hover:text-accent sm:text-2xl"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="stack" className="scroll-mt-24 bg-midnight py-14 text-white sm:py-20 lg:py-28">
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
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 border-t-4 border-accent bg-surface py-16 text-midnight sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-10">
          <p className="text-xs uppercase tracking-[0.24em] text-accent sm:text-sm">Contact</p>
          <h2 className="font-display mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Vous cherchez un CP / PO capable de cadrer, structurer et faire avancer les sujets ?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-midnight/70 sm:text-base sm:leading-8">
            Je peux intervenir sur des contextes de refonte, optimisation de parcours, backlog produit, pilotage de delivery, coordination multi-interlocuteurs et projets web à fort enjeu métier.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="mailto:david.mecorvin@hotmail.fr"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-midnight"
            >
              <Mail size={18} />
              david.mecorvin@hotmail.fr
            </a>
            <a
              href="https://www.linkedin.com/in/david-mecorvin-chef-de-projet-digital/"
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
