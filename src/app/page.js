import Link from "next/link";
import {
  Mail,
  Linkedin,
  Briefcase,
  Target,
  BadgeCheck,
  ChevronDown,
  ArrowUpRight,
  Building2,
  Trophy,
  Workflow,
  Gauge,
  Menu,
  Sparkles,
} from "lucide-react";
import { projects } from "@/data/projects";

export default function Page() {
  const stats = [
    { value: "12+", label: "années en gestion de projet digital" },
    { value: "10", label: "ans d’expérience web, produit, e-commerce" },
    { value: "360°", label: "vision projet, produit et delivery" },
    { value: "Multi", label: "banque, retail, data, e-commerce" },
  ];

  const pillars = [
    {
      icon: <Target size={18} />,
      title: "Vision produit",
      text: "Cadrage, backlog, user stories et valeur métier.",
    },
    {
      icon: <Workflow size={18} />,
      title: "Pilotage delivery",
      text: "Coordination métiers, tech, design et mise en production.",
    },
    {
      icon: <Gauge size={18} />,
      title: "Performance",
      text: "SEO, analytics, optimisation continue et KPI.",
    },
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
      period: "2023 — Aujourd’hui",
      role: "Chef de projet Web Sénior",
      company: "Listen too",
      badge: "ALDI • BNP Paribas • BforBank",
      points: [
        "Pilotage de projets digitaux premium en coordination avec agences et équipes internes.",
        "Gestion du backlog produit, priorisation des besoins, run et releases.",
        "Animation d’ateliers UX/UI et alignement des parties prenantes.",
      ],
    },
    {
      period: "2021 — 2023",
      role: "Chef de projet Web",
      company: "Dataiku",
      badge: "Web • SEO • Analytics",
      points: [
        "Gestion du cycle de vie complet des projets web et des besoins marketing transverses.",
        "Travail étroit avec les équipes UX, design et développement.",
        "Suivi des KPI, tracking web et pilotage de la stratégie SEO.",
      ],
    },
    {
      period: "2019 — 2021",
      role: "Chef de projet Digital",
      company: "Smile Open Source Solutions",
      badge: "Drupal • Grands comptes",
      points: [
        "Pilotage de projets web grands comptes avec spécialisation Drupal.",
        "Analyse des besoins, chiffrage, planning, budget et spécifications fonctionnelles.",
        "Management d’équipes de développement et suivi des recettes en Agile.",
      ],
    },
  ];

  const clients = ["ALDI", "BNP Paribas", "BforBank", "Dataiku", "Smile", "Parrot"];

  const tools = [
    "Jira",
    "Confluence",
    "Monday",
    "Figma",
    "Miro",
    "Drupal",
    "Shopify",
    "WordPress",
    "Google Analytics",
    "Adobe Analytics",
    "SEMrush",
    "Tableau",
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050816] text-white scroll-smooth">
      <div className="fixed inset-0 -z-30 bg-[#050816]" />
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_24%),radial-gradient(circle_at_80%_10%,rgba(96,165,250,0.12),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.16),transparent_20%)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_18%,transparent_82%,rgba(255,255,255,0.04))]" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-10 lg:py-4">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-[#60A5FA] shadow-[0_0_40px_rgba(96,165,250,0.15)]">
              DM
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold tracking-wide">David Mecorvin</p>
              <p className="truncate text-[11px] text-white/50">Chef de Projet Digital / Product Owner</p>
            </div>
          </a>

          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-2 shadow-[0_0_30px_rgba(37,99,235,0.08)] lg:flex">
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
                className="rounded-full px-4 py-2 text-sm text-white/70 transition hover:bg-[#2563EB]/20 hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/david-mecorvin-chef-de-projet-digital/"
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full border border-[#60A5FA]/30 bg-[#2563EB]/20 px-4 py-2 text-sm font-semibold text-white transition hover:scale-[1.02] hover:border-[#60A5FA] hover:bg-[#2563EB]/35 sm:inline-flex"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/80 sm:hidden"
            >
              <Menu size={15} />
              Contact
            </a>
          </div>
        </div>
      </header>

      <div className="h-[76px] sm:h-[80px]" />

      <section
        id="top"
        className="mx-auto max-w-7xl scroll-mt-24 px-4 pb-10 pt-8 sm:px-6 sm:pt-10 lg:px-10 lg:pb-16 lg:pt-16"
      >
        <div className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-white/70 shadow-[0_0_30px_rgba(79,140,255,0.10)] sm:px-4 sm:text-xs">
              <BadgeCheck size={14} className="text-[#60A5FA]" />
              Disponible pour mission / CDI
            </div>

            <h1 className="max-w-5xl text-4xl font-semibold leading-[0.98] tracking-tight sm:text-5xl md:text-6xl xl:text-[5.6rem]">
              Je pilote les projets digitaux <span className="text-white/35">avec une logique</span>{" "}
              <span className="bg-gradient-to-r from-[#DBEAFE] via-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent">
                produit, business et delivery.
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
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#60A5FA] hover:bg-[#2563EB]/20"
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
                  className="rounded-[1.3rem] border border-white/10 bg-white/5 p-4 backdrop-blur-sm shadow-[0_0_40px_rgba(37,99,235,0.08)] lg:rounded-[1.6rem] lg:p-5"
                >
                  <div className="text-xl font-semibold text-[#93C5FD] sm:text-2xl">{item.value}</div>
                  <div className="mt-2 text-xs leading-5 text-white/65 sm:text-sm sm:leading-6">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-[2.2rem] bg-gradient-to-br from-[#2563EB]/20 via-transparent to-[#60A5FA]/10 blur-2xl" />
            <div className="relative rounded-[1.8rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/40 backdrop-blur-2xl sm:rounded-[2.2rem] sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/45 sm:text-sm">Positionnement</p>
                  <h2 className="mt-2 text-xl font-semibold sm:text-2xl">Profil senior transverse</h2>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/25 px-3 py-2 text-right">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/45 sm:text-[11px]">Focus</p>
                  <p className="mt-1 text-xs font-medium sm:text-sm">Projet • Produit • Delivery</p>
                </div>
              </div>

              <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
                {pillars.map((pillar) => (
                  <div key={pillar.title} className="rounded-[1.3rem] border border-white/10 bg-black/20 p-4 sm:rounded-[1.5rem] sm:p-5">
                    <div className="flex items-center gap-3 text-[#60A5FA]">
                      {pillar.icon}
                      <h3 className="text-sm font-semibold text-white sm:text-base">{pillar.title}</h3>
                    </div>
                    <p className="mt-3 text-xs leading-6 text-white/68 sm:text-sm sm:leading-7">{pillar.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center sm:mt-12 lg:mt-16">
          <a href="#profil" className="inline-flex items-center gap-2 text-sm text-white/45 transition hover:text-white">
            Découvrir le profil
            <ChevronDown size={16} />
          </a>
        </div>
      </section>

      <section id="profil" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-16">
        <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#60A5FA] sm:text-sm">Profil</p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl md:text-4xl">
              Une approche structurée, business et orientée exécution
            </h2>
          </div>
          <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 text-white/75 shadow-[0_0_40px_rgba(37,99,235,0.06)] sm:rounded-[2rem] sm:p-8">
            <p className="text-sm leading-7 sm:text-base sm:leading-8">
              Fort de 10 ans d’expérience en gestion de projet digital, dont plusieurs années chez l’annonceur et en agence, j’interviens sur l’ensemble du cycle de vie du projet : cadrage, coordination, conception, développement, recette et mise en production.
            </p>
            <p className="mt-4 text-sm leading-7 sm:text-base sm:leading-8">
              J’ai évolué sur des environnements variés — banque, retail, data, e-commerce — avec un fil rouge : faire avancer les sujets, aligner les interlocuteurs, sécuriser la delivery et garder une vraie exigence de cohérence globale.
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:mt-8 sm:gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5 sm:rounded-[1.6rem] sm:p-6">
              <div className="flex items-center gap-3 text-[#60A5FA]">
                {item.icon}
                <h3 className="text-sm font-semibold text-white sm:text-base">{item.title}</h3>
              </div>
              <p className="mt-3 text-xs leading-6 text-white/68 sm:mt-4 sm:text-sm sm:leading-7">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="expertise" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-16">
        <div className="mb-6 flex items-end justify-between gap-6 sm:mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#60A5FA] sm:text-sm">Expertise</p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl md:text-4xl">Les briques qui font tenir un projet</h2>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/55 lg:inline-flex">
            <Sparkles size={16} className="text-[#60A5FA]" />
            CP digital senior • PO web
          </div>
        </div>

        <div className="grid gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-3">
          {expertise.slice(0, 9).map((item) => (
            <div
              key={item}
              className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4 text-sm text-white/78 transition hover:border-[#60A5FA]/40 hover:bg-[#2563EB]/10 sm:rounded-[1.6rem] sm:p-5"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="experiences" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-16">
        <div className="mb-6 sm:mb-8">
          <p className="text-xs uppercase tracking-[0.24em] text-[#60A5FA] sm:text-sm">Expériences</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl md:text-4xl">
            Une trajectoire pensée pour rassurer, structurer et livrer
          </h2>
        </div>

        <div className="relative space-y-4 sm:space-y-6">
          <div className="absolute left-[21px] top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-[#60A5FA]/70 via-white/20 to-transparent md:block" />
          <div className="absolute left-[21px] top-6 hidden h-[calc(100%-3rem)] w-6 -translate-x-1/2 bg-[radial-gradient(circle,rgba(96,165,250,0.18),transparent_70%)] blur-md md:block" />

          {experiences.map((exp) => (
            <article
              key={`${exp.company}-${exp.role}`}
              className="relative rounded-[1.6rem] border border-white/10 bg-white/5 p-5 shadow-[0_0_50px_rgba(37,99,235,0.05)] sm:rounded-[2rem] sm:p-7 md:pl-16"
            >
              <span className="absolute left-[14px] top-10 hidden h-4 w-4 rounded-full border border-[#BFDBFE]/60 bg-[#60A5FA] shadow-[0_0_0_6px_rgba(96,165,250,0.10),0_0_22px_rgba(96,165,250,0.55)] md:block" />

              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-white/45 sm:text-xs">{exp.period}</p>
                  <h3 className="mt-2 text-xl font-semibold sm:text-2xl">{exp.role}</h3>
                  <p className="mt-2 text-sm text-white/65 sm:text-base">{exp.company}</p>
                </div>
                <div className="w-fit rounded-full border border-[#60A5FA]/30 bg-[#2563EB]/15 px-3 py-2 text-xs text-[#BFDBFE] sm:px-4 sm:text-sm">
                  {exp.badge}
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:mt-6">
                {exp.points.slice(0, 2).map((point) => (
                  <div key={point} className="flex gap-3 rounded-2xl border border-white/8 bg-black/20 px-4 py-4">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#60A5FA]" />
                    <p className="text-xs leading-6 text-white/74 sm:text-sm sm:leading-7">{point}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-16">
        <div className="mb-6 sm:mb-8">
          <p className="text-xs uppercase tracking-[0.24em] text-[#60A5FA] sm:text-sm">
            Projets
          </p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl md:text-4xl">
            Quelques projets clés
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 transition hover:border-[#60A5FA]/40 hover:bg-[#2563EB]/10"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-[#60A5FA]">
                {project.category}
              </p>
              <h3 className="mt-3 text-2xl font-semibold">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/68">
                {project.shortDescription}
              </p>
              <p className="mt-5 text-sm font-medium text-[#93C5FD]">
                Voir le projet →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section id="clients" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#60A5FA] sm:text-sm">Clients & environnements</p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl md:text-4xl">Des contextes exigeants, des interlocuteurs variés</h2>
            <p className="mt-4 text-sm leading-7 text-white/68 sm:mt-5 sm:text-base sm:leading-8">
              Banque, retail, data, e-commerce, grands comptes, annonceurs et agence : un mix qui renforce ma lecture des enjeux business et opérationnels.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-3">
            {clients.map((client) => (
              <div
                key={client}
                className="group flex min-h-[88px] items-center rounded-[1.3rem] border border-white/10 bg-white/5 p-4 text-base font-semibold text-white/92 transition hover:border-[#60A5FA]/40 hover:bg-[#2563EB]/10 sm:min-h-[110px] sm:rounded-[1.8rem] sm:p-6 sm:text-xl"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-16">
        <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 shadow-[0_0_50px_rgba(37,99,235,0.05)] sm:rounded-[2rem] sm:p-8">
          <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[#60A5FA] sm:text-sm">Stack</p>
              <h2 className="mt-3 text-2xl font-semibold sm:text-3xl md:text-4xl">Outils, CMS et environnements</h2>
            </div>
            <div className="inline-flex items-center gap-2 text-xs text-white/52 sm:text-sm">
              <Briefcase size={16} className="text-[#60A5FA]" />
              Web • Produit • E-commerce • Analytics
            </div>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs text-white/72 transition hover:border-[#60A5FA]/40 hover:bg-[#2563EB]/10 sm:px-4 sm:text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl scroll-mt-24 px-4 pb-14 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:px-10 lg:pb-28 lg:pt-16">
        <div className="relative overflow-hidden rounded-[1.8rem] border border-[#60A5FA]/20 bg-gradient-to-br from-[#DBEAFE] via-[#93C5FD] to-[#3B82F6] p-6 text-black sm:rounded-[2.4rem] sm:p-8 md:p-12">
          <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-white/25 blur-3xl sm:h-40 sm:w-40" />
          <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-[#1D4ED8]/20 blur-3xl sm:h-40 sm:w-40" />

          <div className="relative">
            <p className="text-xs uppercase tracking-[0.24em] text-black/55 sm:text-sm">Contact</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-semibold leading-tight sm:mt-4 sm:text-3xl md:text-5xl md:leading-tight">
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
                rel="noreferrer"
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