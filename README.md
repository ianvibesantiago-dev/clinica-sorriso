# Clínica Sorriso — Site institucional

> Landing page para clínica odontológica: acolhedora, rápida e focada em agendamento pelo WhatsApp.

**🔗 Demo:** [clinica-sorriso-rouge.vercel.app](https://clinica-sorriso-rouge.vercel.app) · **Nicho:** Saúde · Clínica odontológica

> ⚠️ Projeto **conceitual de portfólio**. Empresa, pessoas, endereços e números são fictícios.

## ✨ Destaques

- Todos os CTAs abrem o WhatsApp com mensagem pronta
- Menu mobile acessível (`aria-expanded`, `aria-controls`)
- Página 100% estática (SSG) — carrega instantâneo
- Conteúdo centralizado em `src/content/clinic.ts`

## 🎬 Animações

- Transições suaves de hover
- Respeita `prefers-reduced-motion`
- Todas respeitam a preferência de **"reduzir movimento"** do sistema operacional

## 🧱 Stack

| | |
|---|---|
| Framework | [Next.js](https://nextjs.org) (App Router) + React + TypeScript |
| Estilo | [Tailwind CSS v4](https://tailwindcss.com) com design tokens (`@theme`) |
| Animações | [Motion](https://motion.dev) |
| Fontes | Fraunces (títulos) + DM Sans (texto) via `next/font` |
| Imagens | `next/image` (otimização automática, lazy loading) |

**Paleta:** Creme `#FBF7F1`, verde petróleo `#0F3D3A`, coral `#F07C5A`

## 🎨 Design

O layout foi desenhado primeiro no **Figma**, com variáveis (cores, espaçamentos, raios), estilos de texto e componentes. Os tokens do código em `src/app/globals.css` têm os mesmos nomes das variáveis do Figma.

**Seções:** Header · Hero · Serviços · Diferenciais · Depoimentos · Contato · Footer

## ✅ Boas práticas

- HTML semântico e acessível (landmarks, `aria-*`, foco visível, textos alternativos)
- Conteúdo separado do layout — trocar de cliente = editar `src/content/clinic.ts`
- Componentes pequenos e reutilizáveis (`src/components/ui`, `sections`, `motion`)
- Metadados de SEO e Open Graph em pt-BR
- Lint (ESLint) e checagem de tipos (TypeScript strict) sem erros

## 📁 Estrutura

```
src/
  app/            layout, página e tokens (globals.css)
  content/        todo o conteúdo editável do site
  components/
    motion/       animações reutilizáveis (Reveal, Counter…)
    sections/     seções da página
    ui/           componentes base (Button, Card…)
```

## 🚀 Rodando localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm run lint
```

## 📸 Créditos

Sem fotos de terceiros — ilustrações feitas com CSS.

---

Desenvolvido por **Ian Santiago** — sites e automações para pequenos negócios.
