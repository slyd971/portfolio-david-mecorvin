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

export default function Page() {
  const stats = [
    { value: "12+", label: "années en gestion de projet digital" },
    { value: "Agile", label: "Scrum, Kanban, gouvernance produit" },
    { value: "360°", label: "vision projet, produit et delivery" },
    { value: "Multi", label: "banque, retail, data, e-commerce" },
  ];

  const highlights = [
    {
      icon: <Building2 size={18} />,
      title: "Annonceur + agence",
      text: "Une vraie lecture business + delivery.",
    },
    {
      icon: <Briefcase size={18} />,
      title: "Pilotage transverse",
      text: "Capacité à aligner métiers, UX, tech et direction.",
    },
    {
      icon: <Trophy size={18} />,
      title: "Positionnement senior",
      text: "Une approche structurée, rassurante et orientée impact.",
    },
  ];

  const expertise = [
    "Gestion de projet digital",
    "Product Ownership",
    "Backlog & priorisation",
    "Roadmap produit",
    "Animation d’ateliers",
    "Coordination multi-interlocuteurs",
    "Recette & delivery",
    "E-commerce & CMS",
    "Analytics & performance",
    "Agile / Scrum / Kanban",
    "Jira / Confluence / Monday",
    "Drupal / Shopify / WordPress",
  ];

  const experiences = [
    {
      period: "2026",
      role: "Product Owner Senior",
      company: "SQLI",
      badge: "Groupe Rocher • Design System",
      points: [
        "Pilotage d’un Design System Front mutualisé pour le programme stratégique Dermo Botanical Beauty (DBB).",
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

  const clients = ["ALDI", "BNP Paribas", "BforBank", "Dataiku", "Smile", "Parrot", "Groupe Rocher"];

  const tools = [
    "Jira",
    "Confluence",
    "Monday",
    "Microsoft Teams",
    "SharePoint",
    "Slack",
    "Redmine",
    "Airtable",
    "Asana",
    "Miro",
    "Figma",
    "InVision",
    "Sketch",
    "Zeplin",
    "Adobe Experience Manager",
    "Drupal",
    "Shopify",
    "WordPress",
    "Prestashop",
    "Hybris",
    "Google Analytics",
    "SEMrush",
    "Looker Studio",
    "Piano Analytics",
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
    <main className="min-h-screen overflow-x-hidden text-white scroll-smooth">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="fixed inset-0 -z-30 bg-[#16110C]" />
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(224,146,44,0.22),transparent_24%),radial-gradient(circle_at_80%_10%,rgba(245,169,78,0.12),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(194,112,58,0.16),transparent_20%)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_18%,transparent_82%,rgba(255,255,255,0.04))]" />
      <svg className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-[0.09]">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#16110C]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-10 lg:py-4">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-[#F5A94E] shadow-[0_0_40px_rgba(245,169,78,0.15)]">
              DM
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold tracking-wide">David Mecorvin</p>
              <p className="truncate text-[11px] text-white/50">Chef de Projet Digital / Product Owner</p>
            </div>
          </a>

          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-2 shadow-[0_0_30px_rgba(194,112,58,0.08)] lg:flex">
            {[
              ["Profil", "#profil"],
              ["Expertise", "#expertise"],
              ["Expériences", "#experiences"],
              ["Projets", "#projects"],
              ["Clients", "#clients"],
              ["Stack", "#stack"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-full px-4 py-2 text-sm text-white/70 transition hover:bg-[#C2703A]/20 hover:text-white"
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
              className="hidden items-center gap-2 rounded-full border border-[#F5A94E]/30 bg-[#C2703A]/20 px-4 py-2 text-sm font-semibold text-white transition hover:scale-[1.02] hover:border-[#F5A94E] hover:bg-[#C2703A]/35 sm:inline-flex"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>

            <MobileNav />
          </div>
        </div>
      </header>

      <div className="h-[76px] sm:h-[80px]" />

      <section
        id="top"
        className="mx-auto max-w-7xl scroll-mt-24 px-4 pb-10 pt-8 sm:px-6 sm:pt-10 lg:px-10 lg:pb-16 lg:pt-16"
      >
        <div className="grid items-start gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-white/70 shadow-[0_0_30px_rgba(245,169,78,0.10)] sm:px-4 sm:text-xs">
              <BadgeCheck size={14} className="text-[#F5A94E]" />
              Disponible pour mission / CDI
            </div>

            <h1 className="font-serif max-w-5xl text-4xl font-semibold leading-[0.98] tracking-tight sm:text-5xl md:text-6xl xl:text-[4.5rem]">
              Je pilote les projets digitaux <span className="text-white/35">avec une logique</span>{" "}
              <span className="bg-gradient-to-r from-[#FDECC8] via-[#F5A94E] to-[#C2703A] bg-clip-text text-transparent">
                produit, business et delivery
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/72 sm:text-base md:text-lg">
              Profil senior à la croisée du cadrage, de la coordination, de la vision produit et de l’exécution. J’interviens sur des contextes web, e-commerce et transformation digitale où il faut aligner les enjeux métier, les équipes et la performance.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <a
                href="mailto:david.mecorvin@hotmail.fr"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
              >
                <Mail size={18} />
                Me contacter
              </a>
              <a
                href="https://www.linkedin.com/in/david-mecorvin-chef-de-projet-digital/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#F5A94E] hover:bg-[#C2703A]/20"
              >
                <Linkedin size={18} />
                Voir LinkedIn
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 lg:grid-cols-4 lg:gap-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.3rem] border border-white/10 bg-white/5 p-4 backdrop-blur-sm shadow-[0_0_40px_rgba(194,112,58,0.08)] lg:rounded-[1.6rem] lg:p-5"
                >
                  <div className="text-xl font-semibold text-[#FBD9A8] sm:text-2xl">{item.value}</div>
                  <div className="mt-2 text-xs leading-5 text-white/65 sm:text-sm sm:leading-6">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-[2.2rem] bg-gradient-to-br from-[#C2703A]/20 via-transparent to-[#F5A94E]/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/40 backdrop-blur-2xl sm:rounded-[2.2rem]">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/photo/profil-cv.png"
                  alt="Portrait de David Mecorvin, Chef de Projet Digital / Product Owner"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-base font-semibold text-white sm:text-lg">David Mecorvin</p>
                <p className="mt-1 text-sm text-white/60">Chef de Projet Digital / Product Owner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="profil" className="scroll-mt-24 bg-white/[0.03] py-8 sm:py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[#F5A94E] sm:text-sm">Profil</p>
              <h2 className="font-serif mt-3 text-2xl font-semibold sm:text-3xl md:text-4xl">
                Une approche structurée, business et orientée exécution
              </h2>
            </div>
            <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 text-white/75 shadow-[0_0_40px_rgba(194,112,58,0.06)] sm:rounded-[2rem] sm:p-8">
              <p className="text-sm leading-7 sm:text-base sm:leading-8">
                Fort de +12 ans d’expérience en gestion de projet digital, dont plusieurs années chez l’annonceur et en agence, j’interviens sur l’ensemble du cycle de vie du projet : cadrage, coordination, conception, développement, recette et mise en production.
              </p>
              <p className="mt-4 text-sm leading-7 sm:text-base sm:leading-8">
                J’ai évolué sur des environnements variés — banque, retail, data, e-commerce — avec un fil rouge : faire avancer les sujets, aligner les interlocuteurs, sécuriser la delivery et garder une vraie exigence de cohérence globale.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:mt-8 sm:gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5 sm:rounded-[1.6rem] sm:p-6">
                <div className="flex items-center gap-3 text-[#F5A94E]">
                  {item.icon}
                  <h3 className="text-sm font-semibold text-white sm:text-base">{item.title}</h3>
                </div>
                <p className="mt-3 text-xs leading-6 text-white/68 sm:mt-4 sm:text-sm sm:leading-7">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="expertise" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-16">
        <div className="mb-6 flex items-end justify-between gap-6 sm:mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#F5A94E] sm:text-sm">Expertise</p>
            <h2 className="font-serif mt-3 text-2xl font-semibold sm:text-3xl md:text-4xl">Les briques qui font tenir un projet</h2>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/55 lg:inline-flex">
            <Sparkles size={16} className="text-[#F5A94E]" />
            CP digital senior • PO web
          </div>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-3 border-t border-white/10 pt-6 sm:pt-8">
          {expertise.slice(0, 9).map((item, i) => (
            <span key={item} className="inline-flex items-center gap-4">
              <span className="text-base text-white/80 transition hover:text-[#F5A94E] sm:text-lg">{item}</span>
              {i < 8 && <span className="text-white/25">•</span>}
            </span>
          ))}
        </div>
      </section>

      <section id="experiences" className="scroll-mt-24 bg-white/[0.03] py-8 sm:py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="mb-6 sm:mb-8">
            <p className="text-xs uppercase tracking-[0.24em] text-[#F5A94E] sm:text-sm">Expériences</p>
            <h2 className="font-serif mt-3 text-2xl font-semibold sm:text-3xl md:text-4xl">
              Une trajectoire pensée pour cadrer, structurer et livrer
            </h2>
          </div>

          <ExperienceTimeline experiences={experiences} olderExperiences={olderExperiences} />
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-16">
        <div className="mb-6 sm:mb-8">
          <p className="text-xs uppercase tracking-[0.24em] text-[#F5A94E] sm:text-sm">
            Projets
          </p>
          <h2 className="font-serif mt-3 text-2xl font-semibold sm:text-3xl md:text-4xl">
            Quelques projets clés
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 transition hover:border-[#F5A94E]/40 hover:bg-[#C2703A]/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white p-2 shadow-sm">
                {project.logos ? (
                  <Image
                    src={project.logos}
                    alt={`Logo ${project.title}`}
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain"
                  />
                ) : (
                  <span className="text-sm font-semibold text-black/70">
                    {project.title.slice(0, 2).toUpperCase()}
                  </span>
                )}
              </div>

              <p className="mt-4 text-sm uppercase tracking-[0.2em] text-[#F5A94E]">
                {project.category}
              </p>
              <h3 className="mt-3 text-2xl font-semibold">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/68">
                {project.shortDescription}
              </p>
              <p className="mt-5 text-sm font-medium text-[#FBD9A8]">
                Voir le projet →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section id="clients" className="scroll-mt-24 bg-white/[0.03] py-8 sm:py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[#F5A94E] sm:text-sm">Clients & environnements</p>
              <h2 className="font-serif mt-3 text-2xl font-semibold sm:text-3xl md:text-4xl">Des contextes exigeants, des interlocuteurs variés</h2>
              <p className="mt-4 text-sm leading-7 text-white/68 sm:mt-5 sm:text-base sm:leading-8">
                Banque, retail, data, e-commerce, grands comptes, annonceurs et agence : un mix qui renforce ma lecture des enjeux business et opérationnels.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-10 gap-y-6 border-t border-white/10 pt-8 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
              {clients.map((client) => (
                <span
                  key={client}
                  className="font-serif text-xl font-semibold text-white/85 transition hover:text-[#F5A94E] sm:text-2xl"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="stack" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-16">
        <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#F5A94E] sm:text-sm">Stack</p>
            <h2 className="font-serif mt-3 text-2xl font-semibold sm:text-3xl md:text-4xl">Outils, CMS et environnements</h2>
          </div>
          <div className="inline-flex items-center gap-2 text-xs text-white/52 sm:text-sm">
            <Briefcase size={16} className="text-[#F5A94E]" />
            Web • Produit • E-commerce • Analytics
          </div>
        </div>

        <div className="flex flex-wrap gap-2 border-t border-white/10 pt-6 sm:gap-3 sm:pt-8">
          {tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs text-white/72 transition hover:border-[#F5A94E]/40 hover:bg-[#C2703A]/10 sm:px-4 sm:text-sm"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl scroll-mt-24 px-4 pb-14 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:px-10 lg:pb-28 lg:pt-16">
        <div className="relative overflow-hidden rounded-[1.8rem] border border-[#F5A94E]/20 bg-gradient-to-br from-[#FDECC8] via-[#FBD9A8] to-[#E0922C] p-6 text-black sm:rounded-[2.4rem] sm:p-8 md:p-12">
          <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-white/25 blur-3xl sm:h-40 sm:w-40" />
          <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-[#7A431C]/20 blur-3xl sm:h-40 sm:w-40" />

          <div className="relative">
            <p className="text-xs uppercase tracking-[0.24em] text-black/55 sm:text-sm">Contact</p>
            <h2 className="font-serif mt-3 max-w-3xl text-2xl font-semibold leading-tight sm:mt-4 sm:text-3xl md:text-5xl md:leading-tight">
              Vous cherchez un CP / PO capable de cadrer, structurer et faire avancer les sujets ?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-black/72 sm:mt-5 sm:text-base sm:leading-8">
              Je peux intervenir sur des contextes de refonte, optimisation de parcours, backlog produit, pilotage de delivery, coordination multi-interlocuteurs et projets web à fort enjeu métier.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="mailto:david.mecorvin@hotmail.fr"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] sm:px-6"
              >
                <Mail size={18} />
                david.mecorvin@hotmail.fr
              </a>
              <a
                href="https://www.linkedin.com/in/david-mecorvin-chef-de-projet-digital/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 px-5 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white sm:px-6"
              >
                <Linkedin size={18} />
                Voir le profil LinkedIn
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}