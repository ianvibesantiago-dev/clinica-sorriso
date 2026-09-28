import type { Testimonial } from "@/content/clinic";

// Espelha o componente "TestimonialCard" do Figma.
export function TestimonialCard({ quote, author }: Testimonial) {
  return (
    <figure className="flex flex-col gap-6 rounded-lg bg-accent-soft p-8">
      <p aria-label="5 de 5 estrelas" className="font-semibold text-ink-accent">
        ★★★★★
      </p>
      <blockquote className="font-display text-2xl leading-tight font-semibold">“{quote}”</blockquote>
      <figcaption className="mt-auto text-sm text-ink-soft">{author}</figcaption>
    </figure>
  );
}
