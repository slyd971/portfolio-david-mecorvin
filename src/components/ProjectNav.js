import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ProjectNav({ prev, next }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {prev ? (
        <Link
          href={`/projects/${prev.slug}`}
          className="group flex items-center gap-4 rounded-[1.4rem] border border-white/10 bg-white/5 p-5 transition hover:border-accent-light/40 hover:bg-accent-light/5 sm:rounded-[1.6rem]"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 transition group-hover:border-accent-light group-hover:text-accent-light">
            <ArrowLeft size={18} />
          </span>
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">Projet précédent</p>
            <p className="mt-1 truncate text-lg font-semibold text-white">{prev.title}</p>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={`/projects/${next.slug}`}
          className="group flex items-center justify-end gap-4 rounded-[1.4rem] border border-white/10 bg-white/5 p-5 text-right transition hover:border-accent-light/40 hover:bg-accent-light/5 sm:rounded-[1.6rem]"
        >
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">Projet suivant</p>
            <p className="mt-1 truncate text-lg font-semibold text-white">{next.title}</p>
          </div>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 transition group-hover:border-accent-light group-hover:text-accent-light">
            <ArrowRight size={18} />
          </span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
