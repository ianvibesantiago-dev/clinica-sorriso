import { services } from "@/content/clinic";
import { ServiceCard } from "@/components/ui/ServiceCard";

export function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="container-page flex scroll-mt-24 flex-col gap-8 py-16 md:gap-12 md:py-24">
      <header className="flex flex-col gap-3">
        <p className="text-overline text-ink-accent">Serviços</p>
        <h2 id="servicos-title" className="text-display-l">
          Tudo para o seu sorriso, <br className="hidden md:block" />
          em um só lugar.
        </h2>
      </header>
      <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </section>
  );
}
