"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

function ExperienceCard({ exp }) {
  return (
    <article className="relative rounded-[1.6rem] border border-white/10 bg-white/5 p-5 shadow-[0_0_50px_rgba(194,112,58,0.05)] sm:rounded-[2rem] sm:p-7 md:pl-16">
      <span className="absolute left-[14px] top-10 hidden h-4 w-4 rounded-full border border-[#F6D9A8]/60 bg-[#F5A94E] shadow-[0_0_0_6px_rgba(245,169,78,0.10),0_0_22px_rgba(245,169,78,0.55)] md:block" />

      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-white/45 sm:text-xs">{exp.period}</p>
          <h3 className="mt-2 text-xl font-semibold sm:text-2xl">{exp.role}</h3>
          <p className="mt-2 text-sm text-white/65 sm:text-base">{exp.company}</p>
        </div>
        <div className="w-fit rounded-full border border-[#F5A94E]/30 bg-[#C2703A]/15 px-3 py-2 text-xs text-[#F6D9A8] sm:px-4 sm:text-sm">
          {exp.badge}
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:mt-6">
        {exp.points.map((point) => (
          <div key={point} className="flex gap-3 rounded-2xl border border-white/8 bg-black/20 px-4 py-4">
            <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#F5A94E]" />
            <p className="text-xs leading-6 text-white/74 sm:text-sm sm:leading-7">{point}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function ExperienceTimeline({ experiences, olderExperiences }) {
  const [showOlder, setShowOlder] = useState(false);

  return (
    <div className="relative space-y-4 sm:space-y-6">
      <div className="absolute left-[21px] top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-[#F5A94E]/70 via-white/20 to-transparent md:block" />
      <div className="absolute left-[21px] top-6 hidden h-[calc(100%-3rem)] w-6 -translate-x-1/2 bg-[radial-gradient(circle,rgba(245,169,78,0.18),transparent_70%)] blur-md md:block" />

      {experiences.map((exp) => (
        <ExperienceCard key={`${exp.company}-${exp.role}`} exp={exp} />
      ))}

      {showOlder &&
        olderExperiences.map((exp) => (
          <ExperienceCard key={`${exp.company}-${exp.role}`} exp={exp} />
        ))}

      {olderExperiences.length > 0 && (
        <div className="flex justify-center pt-2">
          <button
            type="button"
            onClick={() => setShowOlder((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/80 transition hover:border-[#F5A94E]/40 hover:bg-[#C2703A]/10 hover:text-white"
          >
            {showOlder ? "Voir moins" : "Voir plus d’expériences"}
            <ChevronDown size={16} className={showOlder ? "rotate-180 transition" : "transition"} />
          </button>
        </div>
      )}
    </div>
  );
}
