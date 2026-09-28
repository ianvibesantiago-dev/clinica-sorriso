import { clinic, whatsappUrl } from "@/content/clinic";
import { Button } from "@/components/ui/Button";

export function ContactCta() {
  return (
    <section id="contato" aria-labelledby="contato-title" className="container-page scroll-mt-24 py-8 md:py-16">
      <div className="flex flex-col gap-6 rounded-lg bg-accent-soft px-6 py-8 md:flex-row md:items-center md:justify-between md:gap-12 md:rounded-xl md:p-16">
        <div className="flex flex-col gap-4">
          <h2 id="contato-title" className="text-display-m max-w-[640px] md:text-5xl md:leading-[1.1]">
            Sua primeira avaliação é por nossa conta.
          </h2>
          <address className="text-sm not-italic text-ink-soft md:text-base">
            {clinic.address} · {clinic.hours}
          </address>
        </div>
        <Button variant="dark" href={whatsappUrl()} target="_blank" rel="noopener" className="shrink-0">
          Agendar pelo WhatsApp
        </Button>
      </div>
    </section>
  );
}
