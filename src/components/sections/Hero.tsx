import { stats, whatsappUrl } from "@/content/clinic";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="container-page grid items-center gap-12 py-8 lg:grid-cols-[1fr_minmax(0,520px)] md:gap-16 md:py-16">
      <div className="flex flex-col gap-6 md:gap-8">
        <p className="w-fit rounded-full bg-mint px-3 py-2 text-sm font-semibold md:px-4 md:text-base">
          ● Avaliação gratuita
        </p>
        <h1 className="text-display-xl">
          Sorrisos que <br />
          <em className="text-ink-accent">cabem na sua rotina</em>.
        </h1>
        <p className="max-w-[540px] leading-relaxed text-ink-soft md:text-xl">
          Odontologia moderna e sem pressa na Vila Mariana. Atendimento humano, preços claros e
          agendamento em minutos pelo WhatsApp.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Button href={whatsappUrl()} target="_blank" rel="noopener">
            Agendar avaliação
          </Button>
          <Button variant="secondary" href="#servicos">
            Ver serviços
          </Button>
        </div>
        <dl className="flex justify-between gap-8 sm:justify-start">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse gap-1">
              <dt className="text-sm text-ink-soft">{s.label}</dt>
              <dd className="text-display-m">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <HeroVisual />
    </section>
  );
}

/* Ilustração do Figma ("Hero visual"). Troque o arco por <Image> com a foto real da clínica. */
function HeroVisual() {
  return (
    <div aria-hidden className="relative mx-auto aspect-[520/560] w-full max-w-[520px]">
      <div className="absolute inset-[7%_4%_7%_4%] rounded-full bg-mint" />
      <div className="absolute top-[7%] bottom-[11%] left-[17%] right-[17%] grid place-items-center rounded-t-full rounded-b-lg bg-brand">
        <svg viewBox="0 0 100 50" className="w-1/2 -translate-y-6">
          <path d="M8 6 Q50 60 92 6" fill="none" stroke="var(--color-accent)" strokeWidth="9" strokeLinecap="round" />
        </svg>
      </div>
      <div className="absolute top-[12%] right-0 rounded-md bg-accent px-4 py-3 text-ink-inverse">
        <p className="text-lg font-semibold">4.9 ★</p>
        <p className="text-sm">240 avaliações</p>
      </div>
      <div className="absolute bottom-[4%] left-0 flex items-center gap-3 rounded-[20px] bg-surface p-3 shadow-[0_12px_32px_rgba(15,61,58,0.12)] md:p-4">
        <span className="size-8 rounded-full bg-mint md:size-10" />
        <div>
          <p className="text-sm font-semibold md:text-base">Sofia · atendente virtual</p>
          <p className="text-xs text-ink-soft md:text-sm">Respondo em segundos, 24h</p>
        </div>
      </div>
    </div>
  );
}
