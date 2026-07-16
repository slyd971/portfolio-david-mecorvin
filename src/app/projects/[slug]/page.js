import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Linkedin, Mail } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";
import ProjectNav from "@/components/ProjectNav";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  const title = `${project.title} — ${project.category} | David Mecorvin`;
  const description = project.metaDescription ?? project.shortDescription;

  return {
    title,
    description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/projects/${project.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

function NumberedList({ items, tone = "dark" }) {
  const textClass = tone === "light" ? "text-white/72" : "text-midnight/72";
  const borderClass = tone === "light" ? "border-white/10" : "border-midnight/10";
  const numberClass = tone === "light" ? "text-accent-light" : "text-accent";

  return (
    <div className={`border-t ${borderClass}`}>
      {items.map((item, index) => (
        <div key={item} className={`grid gap-3 border-b ${borderClass} py-4 sm:grid-cols-[0.12fr_0.88fr]`}>
          <p className={`font-display text-sm font-semibold ${numberClass}`}>
            {String(index + 1).padStart(2, "0")}
          </p>
          <p className={`text-sm leading-7 ${textClass}`}>{item}</p>
        </div>
      ))}
    </div>
  );
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const index = projects.findIndex((p) => p.slug === slug);
  const prev = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;

  const projectFacts = [
    project.sector,
    project.duration,
    project.roleLabel,
  ].filter(Boolean);

  const approachItems = [
    ...(project.methodology ?? []),
    ...(project.deliverables ?? []),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.metaDescription ?? project.shortDescription,
    about: project.category,
    author: {
      "@type": "Person",
      name: "David Mecorvin",
      url: "https://portfolio-david-mecorvin.vercel.app",
    },
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="border-b border-white/10 bg-midnight text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
          >
            <ArrowLeft size={16} />
            Retour à l’accueil
          </Link>

          <a
            href="https://www.linkedin.com/in/david-mecorvin-chef-de-projet-digital/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-accent-light/30 bg-accent-light/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-accent-light hover:bg-accent-light/20 sm:inline-flex"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
      </header>

      <section className="bg-midnight py-10 text-white sm:py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-accent-light sm:text-sm">
              Étude de cas
            </p>
            <h1 className="font-display mt-4 max-w-4xl text-4xl font-semibold leading-[1.02] sm:text-5xl md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-4 text-sm font-semibold text-accent-light sm:text-base">
              {project.category}
            </p>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-white/72 sm:text-base sm:leading-8">
              {project.heroDescription}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {projectFacts.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {project.keyMetrics && (
            <aside className="border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="text-xs uppercase tracking-[0.24em] text-white/50 sm:text-sm">
                Points de contrôle
              </p>
              <div className="mt-6 space-y-5">
                {project.keyMetrics.map((item) => (
                  <div key={item.label} className="border-b border-white/10 pb-5">
                    <p className="font-display text-3xl font-semibold text-accent-light">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/70">{item.label}</p>
                  </div>
                ))}
              </div>
            </aside>
          )}
        </div>
      </section>

      {project.results && (
        <section className="bg-surface py-10 text-midnight sm:py-14 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.32fr_0.68fr] lg:px-10">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-accent sm:text-sm">Résultats</p>
              <h2 className="font-display mt-3 text-2xl font-semibold leading-tight sm:text-4xl">
                Ce que le projet a permis de sécuriser
              </h2>
            </div>
            <NumberedList items={project.results} />
          </div>
        </section>
      )}

      <section className="bg-surface pb-10 text-midnight sm:pb-14 lg:pb-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-10">
          <div className="border-t border-midnight/10 pt-6">
            <p className="text-xs uppercase tracking-[0.24em] text-accent sm:text-sm">Contexte</p>
            <p className="mt-4 text-sm leading-7 text-midnight/72 sm:text-base sm:leading-8">
              {project.context}
            </p>
          </div>

          <div className="border-t border-midnight/10 pt-6">
            <p className="text-xs uppercase tracking-[0.24em] text-accent sm:text-sm">Le défi</p>
            <p className="mt-4 text-sm leading-7 text-midnight/72 sm:text-base sm:leading-8">
              {project.challenge}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-midnight py-10 text-white sm:py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.45fr_0.55fr] lg:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-accent-light sm:text-sm">
              Ma responsabilité
            </p>
            <h2 className="font-display mt-3 text-2xl font-semibold leading-tight sm:text-4xl">
              Ce que je portais concrètement
            </h2>
          </div>
          <NumberedList items={project.role} tone="light" />
        </div>

        {approachItems.length > 0 && (
          <div className="mx-auto mt-12 grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.45fr_0.55fr] lg:px-10">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-accent-light sm:text-sm">
                Mon approche
              </p>
              <h2 className="font-display mt-3 text-2xl font-semibold leading-tight sm:text-4xl">
                Méthodes, livrables et gouvernance
              </h2>
            </div>
            <NumberedList items={approachItems} tone="light" />
          </div>
        )}
      </section>

      <section className="bg-surface py-10 text-midnight sm:py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.38fr_0.62fr] lg:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-accent sm:text-sm">
              Réalisations clés
            </p>
            <h2 className="font-display mt-3 text-2xl font-semibold leading-tight sm:text-4xl">
              Les points structurants du projet
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-midnight/10 bg-white px-4 py-2 text-sm text-midnight/72"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6 border-t border-midnight/10 pt-6">
            {project.achievements.map((item) => (
              <article key={item.title} className="border-b border-midnight/10 pb-6">
                <h3 className="font-display text-xl font-semibold text-midnight sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-midnight/70">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {project.whatItSays && (
        <section className="bg-midnight py-10 text-white sm:py-14 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.38fr_0.62fr] lg:px-10">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-accent-light sm:text-sm">
                Prise de recul
              </p>
              <h2 className="font-display mt-3 text-2xl font-semibold leading-tight sm:text-4xl">
                Ce que j’en retiens
              </h2>
            </div>
            <div className="border-t border-white/10 pt-6">
              <p className="text-sm leading-7 text-white/72 sm:text-base sm:leading-8">
                {project.whatItSays}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="mailto:david.mecorvin@hotmail.fr"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-light px-5 py-3 text-sm font-semibold text-midnight transition hover:scale-[1.02]"
                >
                  <Mail size={18} />
                  Contacter David
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
            </div>
          </div>
        </section>
      )}

      <section className="bg-midnight pb-14 pt-2 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <ProjectNav prev={prev} next={next} />
        </div>
      </section>
    </main>
  );
}
