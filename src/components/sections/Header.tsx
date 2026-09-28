"use client";

import { useState } from "react";
import { clinic, navLinks, whatsappUrl } from "@/content/clinic";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-canvas/90 backdrop-blur">
      <div className="container-page flex items-center justify-between py-4 md:py-6">
        <a href="#" aria-label={`${clinic.name} — início`}>
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-ink-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Button variant="secondary" href={whatsappUrl()} target="_blank" rel="noopener">
            Fale no WhatsApp
          </Button>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full border border-line bg-surface md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden className="flex w-[18px] flex-col gap-1">
            <span className={`h-0.5 rounded bg-ink transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`h-0.5 rounded bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 rounded bg-ink transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Menu móvel" className="container-page pb-6 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="block py-3 text-lg" onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href={whatsappUrl()} target="_blank" rel="noopener" className="mt-4 w-full">
            Fale no WhatsApp
          </Button>
        </nav>
      )}
    </header>
  );
}
