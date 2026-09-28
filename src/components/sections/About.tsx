import { differentials, whatsappUrl } from "@/content/clinic";
import { Button } from "@/components/ui/Button";

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="scroll-mt-24 bg-brand text-ink-inverse">
      <div className="container-page grid items-center gap-8 py-16 md:grid-cols-2 md:gap-12 md:py-24">
        <div className="flex flex-col items-start gap-4 md:gap-6">
          <p className="text-overline text-accent-soft">Por que a Sorriso</p>
          <h2 id="sobre-title" className="text-display-l">
            Cuidado sem pressa, com tecnologia de ponta.
          </h2>
          <p className="max-w-[520px] leading-relaxed text-mint md:text-xl">
            Nossa equipe explica cada etapa antes de começar. Sem surpresas no orçamento, sem julgamentos.
          </p>
          <div className="hidden md:block">
            <Button href={whatsappUrl("Olá! Quero conhecer a equipe.")} target="_blank" rel="noopener">
              Conhecer a equipe
            </Button>
          </div>
        </div>
        <ul className="flex flex-col gap-4">
          {differentials.map((d) => (
            <li key={d.title} className="rounded-md border border-white/12 bg-white/6 p-4 md:rounded-lg md:p-6">
              <h3 className="text-lg font-semibold md:text-xl">{d.title}</h3>
              <p className="text-sm text-mint md:text-base">{d.description}</p>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <Button href={whatsappUrl("Olá! Quero conhecer a equipe.")} target="_blank" rel="noopener" className="w-full">
            Conhecer a equipe
          </Button>
        </div>
      </div>
    </section>
  );
}
