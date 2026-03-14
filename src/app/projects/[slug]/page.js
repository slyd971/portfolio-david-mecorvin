import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Linkedin, Mail } from "lucide-react";
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
        <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 shadow-[0_0_40px_rgba(37,99,235,0.06)] sm:rounded-[2rem] sm:p-8">
          <p className="text-xs uppercase tracking-[0.24em] text-[#60A5FA] sm:text-sm">
            Projet
          </p>
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-3 text-sm font-medium text-[#93C5FD] sm:text-base">
            {project.category}
          </p>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-white/72 sm:text-base sm:leading-8">
            {project.heroDescription}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 sm:pb-8 lg:px-10 lg:pb-10">
        <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:gap-5">
          <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 sm:rounded-[2rem]">
            <h2 className="text-xl font-semibold">Contexte</h2>
            <p className="mt-4 text-sm leading-7 text-white/72">
              {project.context}
            </p>
          </div>

          <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 sm:rounded-[2rem]">
            <h2 className="text-xl font-semibold">Objectifs</h2>
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
            <h2 className="text-xl font-semibold">Mon rôle</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-white/72">
              {project.role.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 sm:rounded-[2rem]">
            <h2 className="text-xl font-semibold">Stack / outils</h2>
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
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 sm:pb-8 lg:px-10 lg:pb-10">
        <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 sm:rounded-[2rem] sm:p-8">
          <h2 className="text-2xl font-semibold">Réalisations</h2>

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

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-16 lg:px-10 lg:pb-20">
        <div className="rounded-[1.8rem] border border-[#60A5FA]/20 bg-gradient-to-br from-[#DBEAFE] via-[#93C5FD] to-[#3B82F6] p-6 text-black sm:rounded-[2rem] sm:p-8">
          <h2 className="text-2xl font-semibold">Résultats / impact</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-black/75">
            {project.results.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="mailto:david.mecorvin@hotmail.fr"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
            >
              <Mail size={18} />
              Contacter David
            </a>

            <a
              href="https://www.linkedin.com/in/david-mecorvin-chef-de-projet-digital/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 px-5 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
            >
              <Linkedin size={18} />
              Voir LinkedIn
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}