import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Linkedin,
  Mail,
  TrendingUp,
  Target,
  Briefcase,
  Wrench,
  BarChart3,
  CheckCircle2,
  Building2,
  Clock3,
  Layers3,
} from "lucide-react";
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

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const index = projects.findIndex((p) => p.slug === slug);
  const prev = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;

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

      <section className="bg-midnight py-8 text-white sm:py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 sm:rounded-[2rem] sm:p-8">
              <p className="text-xs uppercase tracking-[0.24em] text-accent-light sm:text-sm">
                Projet
              </p>

              <div className="mt-4 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white p-2 shadow-sm">
                  {project.logos ? (
                    <Image
                      src={project.logos}
                      alt={`Logo ${project.title}`}
                      width={40}
                      height={40}
                      className="h-10 w-10 object-contain"
                    />
                  ) : (
                    <span className="text-lg font-semibold text-black/70">
                      {project.title.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                </div>

                <h1 className="font-display text-3xl font-semibold sm:text-4xl md:text-5xl">
                  {project.title}
                </h1>
              </div>

              <p className="mt-3 text-sm font-medium text-accent-light sm:text-base">
                {project.category}
              </p>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-white/72 sm:text-base sm:leading-8">
                {project.heroDescription}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.sector && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/75">
                    <Building2 size={15} className="text-accent-light" />
                    {project.sector}
                  </span>
                )}

                {project.duration && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/75">
                    <Clock3 size={15} className="text-accent-light" />
                    {project.duration}
                  </span>
                )}

                {project.roleLabel && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/75">
                    <Layers3 size={15} className="text-accent-light" />
                    {project.roleLabel}
                  </span>
                )}
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-accent-light/20 bg-gradient-to-br from-accent to-accent-light p-6 sm:rounded-[2rem] sm:p-8">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/80 sm:text-sm">
                    Snapshot
                  </p>
                  <h2 className="font-display mt-4 text-2xl font-semibold text-white">Vue d’ensemble</h2>
                  <p className="mt-4 text-sm leading-7 text-white/85">
                    Une lecture rapide du projet, de son périmètre et de son impact.
                  </p>
                </div>

                {project.keyMetrics && (
                  <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                    {project.keyMetrics.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-[1.4rem] border border-white/20 bg-white/10 p-5"
                      >
                        <div className="text-2xl font-semibold text-white">
                          {item.value}
                        </div>
                        <div className="mt-2 text-sm leading-6 text-white/80">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {project.results && (
        <section className="bg-surface py-8 text-midnight sm:py-10 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="rounded-[1.8rem] border border-accent/20 bg-gradient-to-br from-accent-light/25 via-accent-light/10 to-transparent p-6 sm:rounded-[2rem] sm:p-8">
              <div className="flex items-center gap-3">
                <TrendingUp size={22} className="text-accent" />
                <h2 className="font-display text-2xl font-semibold">Résultats / impact</h2>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {project.results.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.4rem] border border-midnight/10 bg-white/60 p-5 backdrop-blur-sm"
                  >
                    <p className="text-sm leading-7 text-midnight/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {project.challenge && (
        <section className="bg-surface py-8 text-midnight sm:py-10 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="rounded-[1.8rem] border border-midnight/10 bg-midnight/[0.03] p-6 sm:rounded-[2rem] sm:p-8">
              <div className="flex items-center gap-3">
                <BarChart3 size={20} className="text-accent" />
                <h2 className="font-display text-2xl font-semibold">Challenge</h2>
              </div>
              <p className="mt-4 max-w-4xl text-sm leading-7 text-midnight/72 sm:text-base sm:leading-8">
                {project.challenge}
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="bg-midnight py-8 text-white sm:py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:gap-5">
            <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 sm:rounded-[2rem]">
              <div className="flex items-center gap-3">
                <Target size={20} className="text-accent-light" />
                <h2 className="font-display text-xl font-semibold">Contexte</h2>
              </div>
              <p className="mt-4 text-sm leading-7 text-white/72">
                {project.context}
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 sm:rounded-[2rem]">
              <div className="flex items-center gap-3">
                <Target size={20} className="text-accent-light" />
                <h2 className="font-display text-xl font-semibold">Objectifs</h2>
              </div>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-white/72 marker:text-accent-light">
                {project.objectives.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-8 text-midnight sm:py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:gap-5">
            <div className="rounded-[1.6rem] border border-midnight/10 bg-midnight/[0.03] p-6 sm:rounded-[2rem]">
              <div className="flex items-center gap-3">
                <Briefcase size={20} className="text-accent" />
                <h2 className="font-display text-xl font-semibold">Mon rôle</h2>
              </div>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-midnight/72 marker:text-accent">
                {project.role.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.6rem] border border-midnight/10 bg-midnight/[0.03] p-6 sm:rounded-[2rem]">
              <div className="flex items-center gap-3">
                <Wrench size={20} className="text-accent" />
                <h2 className="font-display text-xl font-semibold">Stack / outils</h2>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-midnight/10 bg-white px-4 py-2 text-sm text-midnight/72"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {project.methodology && (
                <>
                  <h3 className="mt-6 text-lg font-semibold text-midnight">Méthodologie</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-midnight/72 marker:text-accent">
                    {project.methodology.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {(project.deliverables || project.skillsUsed) && (
        <section className="bg-midnight py-8 text-white sm:py-10 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-4 lg:grid-cols-2">
              {project.deliverables && (
                <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 sm:rounded-[2rem]">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-accent-light" />
                    <h2 className="font-display text-xl font-semibold">Livrables</h2>
                  </div>
                  <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-white/72 marker:text-accent-light">
                    {project.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.skillsUsed && (
                <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 sm:rounded-[2rem]">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-accent-light" />
                    <h2 className="font-display text-xl font-semibold">Compétences mobilisées</h2>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.skillsUsed.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/72"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <section className="bg-surface py-8 text-midnight sm:py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="rounded-[1.8rem] border border-midnight/10 bg-midnight/[0.03] p-6 sm:rounded-[2rem] sm:p-8">
            <h2 className="font-display text-2xl font-semibold">Réalisations clés</h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {project.achievements.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.4rem] border border-midnight/10 bg-white p-5 sm:rounded-[1.5rem]"
                >
                  <h3 className="text-lg font-semibold text-midnight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-midnight/70">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {project.whatItSays && (
        <section className="bg-midnight py-8 text-white sm:py-10 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 sm:rounded-[2rem] sm:p-8">
              <h2 className="font-display text-2xl font-semibold">Ce que ce projet dit de moi</h2>
              <p className="mt-4 max-w-4xl text-sm leading-7 text-white/72 sm:text-base sm:leading-8">
                {project.whatItSays}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
