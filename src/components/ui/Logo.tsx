import { clinic } from "@/content/clinic";

export function Logo() {
  return (
    <span className="flex items-center gap-2 text-lg font-semibold md:text-xl">
      <span aria-hidden className="size-6 rounded-full bg-accent md:size-7" />
      {clinic.name}
    </span>
  );
}
