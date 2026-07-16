"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

function ExperienceCard({ exp }) {
  return (
    <article className="relative rounded-[1.6rem] border border-midnight/10 bg-midnight/[0.03] p-5 sm:rounded-[2rem] sm:p-7 md:pl-16">
      <span className="absolute left-[14px] top-10 hidden h-4 w-4 rounded-full border border-accent/40 bg-accent shadow-[0_0_0_6px_rgba(31,36,233,0.10)] md:block" />

      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-midnight/65 sm:text-xs">{exp.period}</p>
          <h3 className="mt-2 text-xl font-semibold text-midnight sm:text-2xl">{exp.role}</h3>
          <p className="mt-2 text-sm text-midnight/65 sm:text-base">{exp.company}</p>
        </div>
        <div className="w-fit rounded-full border border-accent/25 bg-accent/10 px-3 py-2 text-xs text-accent sm:px-4 sm:text-sm">
          {exp.badge}
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:mt-6">
        {exp.points.map((point) => (
          <div key={point} className="flex gap-3 rounded-2xl border border-midnight/8 bg-white px-4 py-4">
            <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
            <p className="text-xs leading-6 text-midnight/74 sm:text-sm sm:leading-7">{point}</p>
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
      <div className="absolute left-[21px] top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-accent/50 via-midnight/15 to-transparent md:block" />

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
            className="inline-flex items-center gap-2 rounded-full border border-midnight/15 bg-midnight/[0.03] px-5 py-3 text-sm font-medium text-midnight/80 transition hover:border-accent/40 hover:bg-accent/5 hover:text-midnight"
          >
            {showOlder ? "Voir moins" : "Voir plus d’expériences"}
            <ChevronDown size={16} className={showOlder ? "rotate-180 transition" : "transition"} />
          </button>
        </div>
      )}
    </div>
  );
}
