import type { Metadata, Viewport } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { clinic } from "@/content/clinic";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${clinic.name} — Dentista na Vila Mariana`,
  description:
    "Odontologia moderna e sem pressa na Vila Mariana, São Paulo. Avaliação gratuita, preços claros e agendamento pelo WhatsApp.",
  openGraph: {
    title: clinic.name,
    description: "Sorrisos que cabem na sua rotina. Avaliação gratuita.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf7f1",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
