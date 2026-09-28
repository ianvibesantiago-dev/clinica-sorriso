import type { ComponentProps } from "react";

// Espelha o componente "Button" do Figma (Type = Primary | Secondary | Dark).
type Variant = "primary" | "secondary" | "dark";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-ink-inverse hover:brightness-95",
  secondary: "bg-surface text-ink border-[1.5px] border-line-strong hover:bg-muted",
  dark: "bg-brand text-ink-inverse hover:brightness-125",
};

type ButtonProps = ComponentProps<"a"> & { variant?: Variant };

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-base leading-tight font-semibold transition ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
