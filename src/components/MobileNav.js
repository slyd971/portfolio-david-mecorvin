"use client";

import { useState } from "react";
import { Menu, X, Linkedin } from "lucide-react";

const LINKS = [
  ["Profil", "#profil"],
  ["Expertise", "#expertise"],
  ["Expériences", "#experiences"],
  ["Projets", "#projects"],
  ["Clients", "#clients"],
  ["Stack", "#stack"],
  ["Contact", "#contact"],
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Ouvrir le menu"
        aria-expanded={open}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10"
      >
        <Menu size={18} />
      </button>

      {open && (
        <div className="fixed inset-0 z-[60]">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-x-4 top-4 rounded-3xl border border-white/10 bg-[#14100A] p-5 shadow-[0_0_60px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold tracking-wide text-white">Menu</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fermer le menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="mt-4 flex flex-col gap-1">
              {LINKS.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  {label}
                </a>
              ))}
            </nav>

            <a
              href="https://www.linkedin.com/in/david-mecorvin-chef-de-projet-digital/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#F5A94E]/30 bg-[#C2703A]/20 px-4 py-3 text-sm font-semibold text-white transition hover:border-[#F5A94E] hover:bg-[#C2703A]/35"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
