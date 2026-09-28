// Todo o conteúdo editável do site fica aqui: trocar de cliente = editar este arquivo.

export const clinic = {
  name: "Clínica Sorriso",
  whatsapp: "5511999990000",
  phoneDisplay: "(11) 99999-0000",
  instagram: "https://instagram.com/clinicasorriso",
  address: "Rua das Flores, 123 — Vila Mariana, São Paulo",
  hours: "Seg–Sex 8h–19h · Sáb 8h–12h",
  cro: "CRO-SP 00000",
} as const;

export const whatsappUrl = (message = "Olá! Quero agendar uma avaliação.") =>
  `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`;

export const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
] as const;

export const stats = [
  { value: "4.9★", label: "no Google" },
  { value: "+3.200", label: "pacientes" },
  { value: "12 anos", label: "de cuidado" },
] as const;

export type Service = {
  glyph: string;
  title: string;
  description: string;
  price: string;
};

export const services: Service[] = [
  { glyph: "✦", title: "Limpeza", description: "Remoção de tártaro e polimento para um sorriso saudável.", price: "R$ 180" },
  { glyph: "☼", title: "Clareamento", description: "Dentes até 4 tons mais claros, com acompanhamento.", price: "a partir de R$ 800" },
  { glyph: "◐", title: "Restauração", description: "Resina da cor do dente, discreta e resistente.", price: "a partir de R$ 250" },
  { glyph: "⌂", title: "Implantes", description: "Planejamento digital e parcelamento facilitado.", price: "na avaliação" },
];

export const differentials = [
  { title: "Convênios aceitos", description: "Amil Dental, OdontoPrev e SulAmérica." },
  { title: "Até 10x sem juros", description: "No clareamento e na ortodontia." },
  { title: "Sábados pela manhã", description: "Das 8h às 12h, para quem trabalha a semana toda." },
] as const;

export type Testimonial = { quote: string; author: string };

export const testimonials: Testimonial[] = [
  { quote: "Atendimento impecável. Perdi o medo de dentista!", author: "Mariana Alves · Clareamento" },
  { quote: "Agendei pelo WhatsApp às 23h e fui atendido no dia seguinte.", author: "Rafael Souza · Limpeza" },
  { quote: "Preço justo e explicaram tudo antes. Recomendo demais.", author: "Juliana Costa · Restauração" },
];
