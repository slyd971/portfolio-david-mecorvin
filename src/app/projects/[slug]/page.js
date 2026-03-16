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

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050816] text-white">
      <div className="fixed inset-0 -z-30 bg-[#050816]" />
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.20),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.16),transparent_20%)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_18%,transparent_82%,rgba(255,255,255,0.04))]" />

      <header className="border-b border-white/10 bg-[#050816]/80 backdrop-blur-2xl">
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
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full border border-[#60A5FA]/30 bg-[#2563EB]/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#60A5FA] hover:bg-[#2563EB]/35 sm:inline-flex"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 shadow-[0_0_40px_rgba(37,99,235,0.06)] sm:rounded-[2rem] sm:p-8">
            <p className="text-xs uppercase tracking-[0.24em] text-[#60A5FA] sm:text-sm">
              Projet
            </p>

            <div className="mt-4 flex items-center gap-4">

  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white p-2 shadow-sm">
    <img
      src={project.logo}
      alt={project.title}
      className="h-10 w-10 object-contain"
    />
  </div>

  <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
    {project.title}
  </h1>

</div>

            <p className="mt-3 text-sm font-medium text-[#93C5FD] sm:text-base">
              {project.category}
            </p>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/72 sm:text-base sm:leading-8">
              {project.heroDescription}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.sector && (
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/75">
                  <Building2 size={15} className="text-[#60A5FA]" />
                  {project.sector}
                </span>
              )}

              {project.duration && (
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/75">
                  <Clock3 size={15} className="text-[#60A5FA]" />
                  {project.duration}
                </span>
              )}

              {project.roleLabel && (
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/75">
                  <Layers3 size={15} className="text-[#60A5FA]" />
                  {project.roleLabel}
                </span>
              )}
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-white/10 bg-gradient-to-br from-[#0B1738] via-[#0E1D49] to-[#12275F] p-6 shadow-[0_0_60px_rgba(37,99,235,0.10)] sm:rounded-[2rem] sm:p-8">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[#93C5FD] sm:text-sm">
                  Snapshot
                </p>
                <h2 className="mt-4 text-2xl font-semibold">Vue d’ensemble</h2>
                <p className="mt-4 text-sm leading-7 text-white/72">
                  Une lecture rapide du projet, de son périmètre et de son impact.
                </p>
              </div>

              {project.keyMetrics && (
                <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                  {project.keyMetrics.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5"
                    >
                      <div className="text-2xl font-semibold text-[#BFDBFE]">
                        {item.value}
                      </div>
                      <div className="mt-2 text-sm leading-6 text-white/65">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {project.results && (
        <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 sm:pb-8 lg:px-10 lg:pb-10">
          <div className="rounded-[1.8rem] border border-[#60A5FA]/20 bg-gradient-to-br from-[#DBEAFE] via-[#93C5FD] to-[#3B82F6] p-6 text-black sm:rounded-[2rem] sm:p-8">
            <div className="flex items-center gap-3">
              <TrendingUp size={22} />
              <h2 className="text-2xl font-semibold">Résultats / impact</h2>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {project.results.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.4rem] border border-black/10 bg-white/30 p-5 backdrop-blur-sm"
                >
                  <p className="text-sm leading-7 text-black/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {project.challenge && (
        <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 sm:pb-8 lg:px-10 lg:pb-10">
          <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 sm:rounded-[2rem] sm:p-8">
            <div className="flex items-center gap-3">
              <BarChart3 size={20} className="text-[#60A5FA]" />
              <h2 className="text-2xl font-semibold">Challenge</h2>
            </div>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-white/72 sm:text-base sm:leading-8">
              {project.challenge}
            </p>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 sm:pb-8 lg:px-10 lg:pb-10">
        <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:gap-5">
          <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 sm:rounded-[2rem]">
            <div className="flex items-center gap-3">
              <Target size={20} className="text-[#60A5FA]" />
              <h2 className="text-xl font-semibold">Contexte</h2>
            </div>
            <p className="mt-4 text-sm leading-7 text-white/72">
              {project.context}
            </p>
          </div>

          <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 sm:rounded-[2rem]">
            <div className="flex items-center gap-3">
              <Target size={20} className="text-[#60A5FA]" />
              <h2 className="text-xl font-semibold">Objectifs</h2>
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-white/72">
              {project.objectives.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 sm:pb-8 lg:px-10 lg:pb-10">
        <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:gap-5">
          <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 sm:rounded-[2rem]">
            <div className="flex items-center gap-3">
              <Briefcase size={20} className="text-[#60A5FA]" />
              <h2 className="text-xl font-semibold">Mon rôle</h2>
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-white/72">
              {project.role.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 sm:rounded-[2rem]">
            <div className="flex items-center gap-3">
              <Wrench size={20} className="text-[#60A5FA]" />
              <h2 className="text-xl font-semibold">Stack / outils</h2>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/72"
                >
                  {item}
                </span>
              ))}
            </div>

            {project.methodology && (
              <>
                <h3 className="mt-6 text-lg font-semibold">Méthodologie</h3>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-white/72">
                  {project.methodology.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </section>

      {(project.deliverables || project.skillsUsed) && (
        <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 sm:pb-8 lg:px-10 lg:pb-10">
          <div className="grid gap-4 lg:grid-cols-2">
            {project.deliverables && (
              <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 sm:rounded-[2rem]">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-[#60A5FA]" />
                  <h2 className="text-xl font-semibold">Livrables</h2>
                </div>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-white/72">
                  {project.deliverables.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.skillsUsed && (
              <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 sm:rounded-[2rem]">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-[#60A5FA]" />
                  <h2 className="text-xl font-semibold">Compétences mobilisées</h2>
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
        </section>
      )}

      <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 sm:pb-8 lg:px-10 lg:pb-10">
        <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 sm:rounded-[2rem] sm:p-8">
          <h2 className="text-2xl font-semibold">Réalisations clés</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {project.achievements.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.4rem] border border-white/10 bg-black/20 p-5 sm:rounded-[1.5rem]"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {project.whatItSays && (
        <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-16 lg:px-10 lg:pb-20">
          <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 sm:rounded-[2rem] sm:p-8">
            <h2 className="text-2xl font-semibold">Ce que ce projet dit de moi</h2>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-white/72 sm:text-base sm:leading-8">
              {project.whatItSays}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="mailto:david.mecorvin@hotmail.fr"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
              >
                <Mail size={18} />
                Contacter David
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
          </div>
        </section>
      )}
    </main>
  );
}