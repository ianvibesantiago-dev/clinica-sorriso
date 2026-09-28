import { testimonials } from "@/content/clinic";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

export function Testimonials() {
  return (
    <section id="depoimentos" aria-labelledby="depoimentos-title" className="container-page flex scroll-mt-24 flex-col gap-8 py-16 md:gap-12 md:py-24">
      <h2 id="depoimentos-title" className="text-display-l">
        Quem sorri, recomenda.
      </h2>
      <div className="grid gap-4 md:grid-cols-3 md:gap-6">
        {testimonials.map((t) => (
          <TestimonialCard key={t.author} {...t} />
        ))}
      </div>
    </section>
  );
}
