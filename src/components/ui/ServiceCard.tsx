import type { Service } from "@/content/clinic";

// Espelha o componente "ServiceCard" do Figma.
export function ServiceCard({ glyph, title, description, price }: Service) {
  return (
    <article className="flex flex-col gap-4 rounded-lg border border-line bg-surface p-8">
      <span aria-hidden className="grid size-14 place-items-center rounded-md bg-mint text-xl">
        {glyph}
      </span>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm leading-normal text-ink-soft">{description}</p>
      <p className="mt-auto font-semibold text-ink-accent">{price}</p>
    </article>
  );
}
