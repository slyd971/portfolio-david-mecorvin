import {
  Mail,
  Linkedin,
  Briefcase,
  Target,
  BadgeCheck,
  ChevronDown,
  Sparkles,
  ArrowUpRight,
  Building2,
  Trophy,
  Workflow,
  Gauge,
} from "lucide-react";

export default function Page() {
  const stats = [
    { value: "12+", label: "années en gestion de projet digital" },
    { value: "10", label: "années d’expérience sur des contextes web, produit et e-commerce" },
    { value: "360°", label: "vision projet, produit et delivery" },
    { value: "Multi-secteurs", label: "banque, retail, data, e-commerce, grands comptes" },
  ];

  const pillars = [
    {
      icon: <Target size={18} />,
      title: "Vision produit",
      text: "Cadrage, expression de besoins, backlog, epics, user stories et logique de valeur métier.",
    },
    {
      icon: <Workflow size={18} />,
      title: "Pilotage delivery",
      text: "Coordination métiers, tech, design, gouvernance projet, arbitrage et mise en production.",
    },
    {
      icon: <Gauge size={18} />,
      title: "Performance digitale",
      text: "SEO, analytics, optimisation continue, suivi KPI et amélioration des parcours.",
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

  const highlights = [
    {
      icon: <Building2 size={18} />,
      title: "Annonceur + agence",
      text: "Une vraie double lecture entre exigences métier, enjeux business et réalité delivery.",
    },
    {
      icon: <Briefcase size={18} />,
      title: "Pilotage transverse",
      text: "Capacité à faire le lien entre métiers, UX, design, tech, marketing et direction.",
    },
    {
      icon: <Trophy size={18} />,
      title: "Positionnement senior",
      text: "Une approche structurée, rassurante et orientée impact pour des contextes à fort enjeu.",
    },
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
        "Animation d’ateliers UX/UI, rituels Agile et alignement des parties prenantes.",
        "Optimisation des process projet et déploiement d’outils de structuration.",
      ],
    },
    {
      period: "2021 — 2023",
      role: "Chef de projet Web",
      company: "Dataiku",
      badge: "Web • SEO • Analytics",
      points: [
        "Gestion du cycle de vie complet des projets web et des besoins marketing transverses.",
        "Travail étroit avec les équipes UX, design et développement pour lancer de nouvelles fonctionnalités.",
        "Suivi des KPI, mise en place du tracking web et pilotage de la stratégie SEO.",
      ],
    },
    {
      period: "2019 — 2021",
      role: "Chef de projet Digital",
      company: "Smile Open Source Solutions",
      badge: "Drupal • Grands comptes",
      points: [
        "Pilotage de projets web grands comptes avec spécialisation Drupal.",
        "Analyse des besoins, chiffrage, planning, budget et rédaction des spécifications fonctionnelles.",
        "Management d’équipes de développement et suivi des phases de recette en méthodologie Agile.",
      ],
    },
    {
      period: "2014 — 2017",
      role: "Chef de Projet E-Commerce",
      company: "Parrot",
      badge: "B2B • B2C • International",
      points: [
        "Pilotage des plateformes e-commerce B2B et B2C sur plusieurs marchés.",
        "Gestion du merchandising, des opérations promotionnelles et de la coordination business.",
        "Contribution à la croissance commerciale et à la performance des plateformes.",
      ],
    },
  ];

  const clients = ["ALDI", "BNP Paribas", "BforBank", "Dataiku", "Crédit Agricole", "Parrot", "SBM"];

  const tools = [
    "Jira",
    "Confluence",
    "Monday",
    "Redmine",
    "Asana",
    "Trello",
    "Figma",
    "Miro",
    "Drupal",
    "Drupal Commerce",
    "Shopify",
    "WordPress",
    "AEM",
    "Google Analytics",
    "Adobe Analytics",
    "SEMrush",
    "Tableau",
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050816] text-white scroll-smooth">
      <div className="fixed inset-0 -z-30 bg-[#050816]" />
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.25),transparent_24%),radial-gradient(circle_at_80%_10%,rgba(96,165,250,0.16),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.18),transparent_20%)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_18%,transparent_82%,rgba(255,255,255,0.04))]" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-[#60A5FA] shadow-[0_0_40px_rgba(96,165,250,0.15)]">
              DM
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide">David Mecorvin</p>
              <p className="text-xs text-white/50">Chef de Projet Digital / Product Owner</p>
            </div>
          </a>

          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-2 shadow-[0_0_30px_rgba(37,99,235,0.08)] lg:flex">
            {[
              ["Profil", "#profil"],
              ["Expertise", "#expertise"],
              ["Expériences", "#experiences"],
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

          <a
            href="https://www.linkedin.com/in/david-mecorvin-chef-de-projet-digital/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#60A5FA]/30 bg-[#2563EB]/20 px-4 py-2 text-sm font-semibold text-white transition hover:scale-[1.02] hover:border-[#60A5FA] hover:bg-[#2563EB]/35"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
      </header>

      <div className="h-[88px]" />

      <section id="top" className="mx-auto max-w-7xl scroll-mt-28 px-6 pb-16 pt-16 lg:px-10 lg:pb-24 lg:pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/70 shadow-[0_0_30px_rgba(79,140,255,0.10)]">
              <BadgeCheck size={16} className="text-[#60A5FA]" />
              Disponible pour mission / CDI OU FREELANCE
            </div>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl xl:text-[5.6rem]">
              Je pilote les projets digitaux <span className="text-white/35">avec une logique</span>{" "}
              <span className="bg-gradient-to-r from-[#DBEAFE] via-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent">
                produit, business et delivery.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
              Profil senior à la croisée du cadrage, de la coordination, de la vision produit et de l’exécution. J’interviens sur des contextes web, e-commerce et transformation digitale où il faut aligner les enjeux métier, les équipes et la performance.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:david.mecorvin@hotmail.fr"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
              >
                <Mail size={18} />
                david.mecorvin@hotmail.fr
              </a>
              <a
                href="https://www.linkedin.com/in/david-mecorvin-chef-de-projet-digital/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#60A5FA] hover:bg-[#2563EB]/20"
              >
                <Linkedin size={18} />
                Voir le profil LinkedIn
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label} className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm shadow-[0_0_40px_rgba(37,99,235,0.08)]">
                  <div className="text-2xl font-semibold text-[#93C5FD]">{item.value}</div>
                  <div className="mt-2 text-sm leading-6 text-white/65">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[#2563EB]/20 via-transparent to-[#60A5FA]/10 blur-2xl" />
            <div className="relative rounded-[2.2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/40 backdrop-blur-2xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-white/45">Positionnement</p>
                  <h2 className="mt-2 text-2xl font-semibold">Profil senior transverse</h2>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/25 px-3 py-2 text-right">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">Focus</p>
                  <p className="mt-1 text-sm font-medium">Projet • Produit • Delivery</p>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {pillars.map((pillar) => (
                  <div key={pillar.title} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                    <div className="flex items-center gap-3 text-[#60A5FA]">
                      {pillar.icon}
                      <h3 className="text-base font-semibold text-white">{pillar.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/68">{pillar.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex justify-center lg:mt-16">
          <a href="#profil" className="inline-flex items-center gap-2 text-sm text-white/45 transition hover:text-white">
            Découvrir le profil
            <ChevronDown size={16} />
          </a>
        </div>
      </section>

      <section id="profil" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-10 lg:px-10 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#60A5FA]">Profil</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Une approche structurée, business et orientée exécution</h2>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-white/75 shadow-[0_0_40px_rgba(37,99,235,0.06)]">
            <p className="leading-8">
              Fort de 10 ans d’expérience en gestion de projet digital, dont plusieurs années chez l’annonceur et en agence, j’interviens sur l’ensemble du cycle de vie du projet : cadrage, coordination, conception, développement, recette et mise en production.
            </p>
            <p className="mt-4 leading-8">
              J’ai évolué sur des environnements variés — banque, retail, data, e-commerce — avec un fil rouge : faire avancer les sujets, aligner les interlocuteurs, sécuriser la delivery et garder une vraie exigence de cohérence globale.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3 text-[#60A5FA]">
                {item.icon}
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-white/68">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="expertise" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-10 lg:px-10 lg:py-16">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#60A5FA]">Expertise</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Les briques qui font tenir un projet</h2>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/55 lg:inline-flex">
            <Sparkles size={16} className="text-[#60A5FA]" />
            CP digital senior • PO web
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {expertise.map((item) => (
            <div key={item} className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5 text-sm text-white/78 transition hover:border-[#60A5FA]/40 hover:bg-[#2563EB]/10">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="experiences" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-10 lg:px-10 lg:py-16">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.24em] text-[#60A5FA]">Expériences</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Une trajectoire pensée pour rassurer, structurer et livrer</h2>
        </div>

        <div className="relative space-y-6">
          <div className="absolute left-[21px] top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-[#60A5FA]/70 via-white/20 to-transparent md:block" />
          <div className="absolute left-[21px] top-6 hidden h-[calc(100%-3rem)] w-6 -translate-x-1/2 bg-[radial-gradient(circle,rgba(96,165,250,0.18),transparent_70%)] blur-md md:block" />
          {experiences.map((exp) => (
            <article key={`${exp.company}-${exp.role}`} className="relative rounded-[2rem] border border-white/10 bg-white/5 p-7 pl-12 md:p-8 md:pl-16 shadow-[0_0_50px_rgba(37,99,235,0.05)]">
              <span className="absolute left-[14px] top-10 h-4 w-4 rounded-full border border-[#BFDBFE]/60 bg-[#60A5FA] shadow-[0_0_0_6px_rgba(96,165,250,0.10),0_0_22px_rgba(96,165,250,0.55)] md:left-[14px]" />

              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/45">{exp.period}</p>
                  <h3 className="mt-2 text-2xl font-semibold">{exp.role}</h3>
                  <p className="mt-2 text-base text-white/65">{exp.company}</p>
                </div>
                <div className="rounded-full border border-[#60A5FA]/30 bg-[#2563EB]/15 px-4 py-2 text-sm text-[#BFDBFE]">
                  {exp.badge}
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                {exp.points.map((point) => (
                  <div key={point} className="flex gap-3 rounded-2xl border border-white/8 bg-black/20 px-4 py-4">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#60A5FA]" />
                    <p className="text-sm leading-7 text-white/74">{point}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="clients" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-10 lg:px-10 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#60A5FA]">Clients & environnements</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Des contextes exigeants, des interlocuteurs variés</h2>
            <p className="mt-5 text-base leading-8 text-white/68">
              Banque, retail, data, e-commerce, grands comptes, annonceurs et agence : un mix qui renforce ma lecture des enjeux business et opérationnels.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {clients.map((client) => (
              <div key={client} className="group flex min-h-[110px] items-center rounded-[1.8rem] border border-white/10 bg-white/5 p-6 text-xl font-semibold text-white/92 transition hover:border-[#60A5FA]/40 hover:bg-[#2563EB]/10">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-10 lg:px-10 lg:py-16">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_0_50px_rgba(37,99,235,0.05)]">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-[#60A5FA]">Stack</p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Outils, CMS et environnements</h2>
            </div>
            <div className="inline-flex items-center gap-2 text-sm text-white/52">
              <Briefcase size={16} className="text-[#60A5FA]" />
              Web • Produit • E-commerce • Analytics
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span key={tool} className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/72 transition hover:border-[#60A5FA]/40 hover:bg-[#2563EB]/10">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl scroll-mt-28 px-6 pb-20 pt-10 lg:px-10 lg:pb-28 lg:pt-16">
        <div className="relative overflow-hidden rounded-[2.4rem] border border-[#60A5FA]/20 bg-gradient-to-br from-[#DBEAFE] via-[#93C5FD] to-[#3B82F6] p-8 text-black md:p-12">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/25 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[#1D4ED8]/20 blur-3xl" />

          <div className="relative">
            <p className="text-sm uppercase tracking-[0.24em] text-black/55">Contact</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold md:text-5xl md:leading-tight">
              Vous cherchez un CP / PO capable de cadrer, structurer et faire avancer les sujets ?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-black/72">
              Je peux intervenir sur des contextes de refonte, optimisation de parcours, backlog produit, pilotage de delivery, coordination multi-interlocuteurs et projets web à fort enjeu métier.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:david.mecorvin@hotmail.fr"
                className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
              >
                <Mail size={18} />
                david.mecorvin@hotmail.fr
              </a>
              <a
                href="https://www.linkedin.com/in/david-mecorvin-chef-de-projet-digital/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
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